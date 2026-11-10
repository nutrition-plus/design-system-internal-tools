// Column layout of a table: the order of the movable columns and the width the user gave each one, remembered in
// localStorage per table id. Shared by ColumnLayoutDataTable (TanStack) and ColumnLayoutTable (plain). No React here
// except the types, so the logic can be unit-tested.
import type { ReactNode } from "react"

type ColumnLayout = {
  /** Movable column ids, left to right. Pinned columns (select, row actions) are never in here. */
  order: string[]
  /** Width in px per column id. Empty means the browser sizes the columns (the table's normal look). */
  widths: Record<string, number>
}

type ColumnLayoutAction =
  | { type: "load"; ids: string[]; layout: ColumnLayout }
  | {
      type: "move"
      ids: string[]
      id: string
      delta: -1 | 1
      visible?: string[]
    }
  | { type: "moveTo"; ids: string[]; id: string; targetId: string }
  | { type: "resize"; id: string; width: number }
  | { type: "ensureWidths"; widths: Record<string, number> }
  | { type: "reset"; ids: string[] }

/** The subset of the Web Storage API the layout code uses (lets tests pass a fake). */
type LayoutStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">

/** What useColumnLayout returns to a table renderer and to the "arrange columns" controls. */
type ColumnLayoutApi = {
  tableId: string
  /** Movable ids in the user's order (always exactly the ids the table passed in). */
  order: string[]
  widths: Record<string, number>
  /** True when the order or any width differs from the default, i.e. there is something to reset. */
  isCustom: boolean
  move: (id: string, delta: -1 | 1, visible?: string[]) => void
  moveTo: (id: string, targetId: string) => void
  resize: (id: string, width: number) => void
  ensureWidths: (widths: Record<string, number>) => void
  reset: () => void
  /** Header drag-and-drop (mouse, pen, and long-press drag where the browser supports it). */
  drag: {
    overId: string | null
    start: (id: string) => void
    /** Returns true while one of this table's headers is being dragged (so the header accepts the drop). */
    over: (id: string) => boolean
    drop: (id: string) => void
    end: () => void
    /** True while a resize handle is held, so a header drag cannot start at the same time. */
    locked: () => boolean
    lock: (on: boolean) => void
  }
}

/** One entry in the "arrange columns" list. */
type ArrangeItem = { id: string; label: string }

/** A column of a plain (non-TanStack) table drawn by ColumnLayoutTable. */
type ColumnLayoutColumn<T> = {
  id: string
  /** Plain-text name, used by the arrange list and the resize handle's accessible label. */
  label: string
  /** Header content; defaults to the label. */
  header?: ReactNode
  cell: (row: T) => ReactNode
  /** Footer content for this column (only drawn when at least one column has a footer). */
  footer?: ReactNode
  align?: "left" | "right" | "center"
  /** Extra classes for the body and footer cells. */
  className?: string
  /** "start" keeps the column first, "end" keeps it last; pinned columns cannot be moved or resized. */
  pin?: "start" | "end"
}

const MIN_COLUMN_WIDTH = 64
const MAX_COLUMN_WIDTH = 800
/** Width given to a column that has none yet while the table is in fixed-width mode (e.g. shown later from the column picker). */
const DEFAULT_COLUMN_WIDTH = 160
/** Keyboard step on a resize handle; Shift moves four steps. */
const RESIZE_STEP = 16
const STORAGE_PREFIX = "moove-table:"
const STORAGE_VERSION = 1

function clampWidth(width: number): number {
  if (!Number.isFinite(width)) return DEFAULT_COLUMN_WIDTH
  return Math.round(
    Math.min(MAX_COLUMN_WIDTH, Math.max(MIN_COLUMN_WIDTH, width))
  )
}

/**
 * Brings a saved order in line with the columns the table has now: unknown and repeated ids are dropped, and a
 * column that is not in the saved order is put right after its nearest left neighbour from the default order.
 */
function normalizeOrder(
  saved: readonly string[],
  ids: readonly string[]
): string[] {
  const known = new Set(ids)
  const out = saved.filter((id, i) => known.has(id) && saved.indexOf(id) === i)
  ids.forEach((id, i) => {
    if (out.includes(id)) return
    let at = 0
    for (let j = i - 1; j >= 0; j--) {
      const k = out.indexOf(ids[j] as string)
      if (k >= 0) {
        at = k + 1
        break
      }
    }
    out.splice(at, 0, id)
  })
  return out
}

/** Moves `id` into the place of `targetId` (array-move: the others shift by one). */
function moveColumnTo(
  order: readonly string[],
  id: string,
  targetId: string
): string[] {
  const from = order.indexOf(id)
  const to = order.indexOf(targetId)
  if (from < 0 || to < 0 || from === to) return [...order]
  const out = [...order]
  out.splice(from, 1)
  out.splice(to, 0, id)
  return out
}

/** Moves `id` one step left (-1) or right (+1), skipping columns that are not shown. */
function moveColumnBy(
  order: readonly string[],
  id: string,
  delta: -1 | 1,
  visible?: readonly string[]
): string[] {
  const shown = visible
    ? order.filter((x) => x === id || visible.includes(x))
    : [...order]
  const i = shown.indexOf(id)
  const target = shown[i + delta]
  if (i < 0 || target === undefined) return [...order]
  return moveColumnTo(order, id, target)
}

/** Puts column definitions in layout order: pinned-start ids first, then the user order, then the rest, then pinned-end ids. */
function orderColumns<C extends { id?: string }>(
  columns: readonly C[],
  order: readonly string[],
  pinStart: readonly string[] = [],
  pinEnd: readonly string[] = []
): C[] {
  const byId = new Map(columns.map((c) => [c.id, c]))
  const take = (ids: readonly string[]) =>
    ids.map((id) => byId.get(id)).filter((c): c is C => c !== undefined)
  const head = take(pinStart)
  const middle = take(
    order.filter((id) => !pinStart.includes(id) && !pinEnd.includes(id))
  )
  const tail = take(pinEnd)
  const used = new Set([...head, ...middle, ...tail])
  const rest = columns.filter((c) => !used.has(c))
  return [...head, ...middle, ...rest, ...tail]
}

function sameOrder(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((x, i) => x === b[i])
}

function isDefaultLayout(
  layout: ColumnLayout,
  ids: readonly string[]
): boolean {
  return (
    sameOrder(normalizeOrder(layout.order, ids), ids) &&
    Object.keys(layout.widths).length === 0
  )
}

function defaultLayout(ids: readonly string[]): ColumnLayout {
  return { order: [...ids], widths: {} }
}

/** Returns the same object when nothing changes, so callers can skip saving and re-rendering. */
function columnLayoutReducer(
  state: ColumnLayout,
  action: ColumnLayoutAction
): ColumnLayout {
  switch (action.type) {
    case "load":
      return {
        order: normalizeOrder(action.layout.order, action.ids),
        widths: cleanWidths(action.layout.widths),
      }
    case "move": {
      const base = normalizeOrder(state.order, action.ids)
      const order = moveColumnBy(base, action.id, action.delta, action.visible)
      return sameOrder(order, base) ? state : { ...state, order }
    }
    case "moveTo": {
      const base = normalizeOrder(state.order, action.ids)
      const order = moveColumnTo(base, action.id, action.targetId)
      return sameOrder(order, base) ? state : { ...state, order }
    }
    case "resize": {
      const width = clampWidth(action.width)
      if (state.widths[action.id] === width) return state
      return { ...state, widths: { ...state.widths, [action.id]: width } }
    }
    case "ensureWidths": {
      const missing = Object.entries(action.widths).filter(
        ([id, w]) =>
          state.widths[id] === undefined && Number.isFinite(w) && w > 0
      )
      if (missing.length === 0) return state
      // Measured widths are kept as they are (a checkbox column may be under the minimum); only user resizes are clamped.
      return {
        ...state,
        widths: {
          ...state.widths,
          ...Object.fromEntries(missing.map(([id, w]) => [id, Math.round(w)])),
        },
      }
    }
    case "reset":
      return { order: [...action.ids], widths: {} }
  }
}

function cleanWidths(widths: Record<string, unknown>): Record<string, number> {
  const out: Record<string, number> = {}
  for (const [id, w] of Object.entries(widths))
    if (typeof w === "number" && Number.isFinite(w) && w > 0)
      out[id] = Math.round(Math.min(MAX_COLUMN_WIDTH, w))
  return out
}

function storageKey(tableId: string): string {
  return `${STORAGE_PREFIX}${tableId}`
}

/** Reads a saved layout. Returns null when there is none, it is broken, or storage cannot be used. */
function loadLayout(
  storage: LayoutStorage | null,
  tableId: string
): ColumnLayout | null {
  if (!storage) return null
  try {
    const raw = storage.getItem(storageKey(tableId))
    if (!raw) return null
    const data = JSON.parse(raw) as {
      v?: unknown
      order?: unknown
      widths?: unknown
    }
    if (
      data.v !== STORAGE_VERSION ||
      !Array.isArray(data.order) ||
      !data.order.every((x) => typeof x === "string")
    )
      return null
    const widths =
      data.widths &&
      typeof data.widths === "object" &&
      !Array.isArray(data.widths)
        ? cleanWidths(data.widths as Record<string, unknown>)
        : {}
    return { order: data.order as string[], widths }
  } catch {
    return null
  }
}

/** Saves the layout, or removes the entry when the layout is the default. Never throws. */
function saveLayout(
  storage: LayoutStorage | null,
  tableId: string,
  layout: ColumnLayout,
  ids: readonly string[]
): void {
  if (!storage) return
  try {
    if (isDefaultLayout(layout, ids)) storage.removeItem(storageKey(tableId))
    else
      storage.setItem(
        storageKey(tableId),
        JSON.stringify({
          v: STORAGE_VERSION,
          order: layout.order,
          widths: layout.widths,
        })
      )
  } catch {
    // Storage full, blocked or private mode: the layout still works for this visit.
  }
}

/** window.localStorage when it can be used, otherwise null (server render, blocked site data). */
function browserStorage(): LayoutStorage | null {
  try {
    return typeof window === "undefined" ? null : window.localStorage
  } catch {
    return null
  }
}

/** Short stable hash for building a table id from its column names (djb2, base 36). */
function hashText(text: string): string {
  let h = 5381
  for (let i = 0; i < text.length; i++)
    h = ((h << 5) + h + text.charCodeAt(i)) | 0
  return (h >>> 0).toString(36)
}

/**
 * Table element props for a layout. With no widths the table keeps its normal automatic sizing. Once any width is
 * set, every shown column gets a width (stored, or the default), the table switches to fixed layout so the widths
 * really apply to header and body alike, and a filler column takes any space left so the table still fills its box.
 */
function tableSizing(
  ids: readonly string[],
  widths: Record<string, number>
): { fixed: boolean; colWidths: (number | undefined)[]; totalWidth: number } {
  const fixed = ids.some((id) => widths[id] !== undefined)
  const colWidths = ids.map((id) =>
    fixed ? (widths[id] ?? DEFAULT_COLUMN_WIDTH) : undefined
  )
  const totalWidth = colWidths.reduce<number>((n, w) => n + (w ?? 0), 0)
  return { fixed, colWidths, totalWidth }
}

export type {
  ArrangeItem,
  ColumnLayout,
  ColumnLayoutAction,
  ColumnLayoutApi,
  ColumnLayoutColumn,
  LayoutStorage,
}
export {
  DEFAULT_COLUMN_WIDTH,
  MAX_COLUMN_WIDTH,
  MIN_COLUMN_WIDTH,
  RESIZE_STEP,
  browserStorage,
  clampWidth,
  columnLayoutReducer,
  defaultLayout,
  hashText,
  isDefaultLayout,
  loadLayout,
  moveColumnBy,
  moveColumnTo,
  normalizeOrder,
  orderColumns,
  saveLayout,
  storageKey,
  tableSizing,
}
