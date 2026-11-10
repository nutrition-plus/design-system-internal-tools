"use client"

// The user's column layout (order + widths) for one table id, remembered in localStorage.
// It is a tiny external store read with useSyncExternalStore: the server render and the hydration render both use
// the default layout, and the saved one is applied right after (no hydration mismatch, no write on page open).
// Every component that uses the same table id sees the same layout (BOOKING draws one table per courier).
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"

import {
  browserStorage,
  columnLayoutReducer,
  defaultLayout,
  isDefaultLayout,
  loadLayout,
  normalizeOrder,
  saveLayout,
} from "./column-layout"
import type {
  ColumnLayout,
  ColumnLayoutAction,
  ColumnLayoutApi,
} from "./column-layout"

// Current layout per table id for this tab. null = default. Filled from localStorage the first time a table asks.
const current = new Map<string, ColumnLayout | null>()
const listeners = new Map<string, Set<() => void>>()

function read(tableId: string): ColumnLayout | null {
  if (!current.has(tableId))
    current.set(tableId, loadLayout(browserStorage(), tableId))
  return current.get(tableId) ?? null
}

function write(
  tableId: string,
  next: ColumnLayout,
  ids: readonly string[]
): void {
  current.set(tableId, next)
  saveLayout(browserStorage(), tableId, next, ids)
  for (const fn of listeners.get(tableId) ?? []) fn()
}

function subscribe(tableId: string, fn: () => void): () => void {
  const set = listeners.get(tableId) ?? new Set()
  set.add(fn)
  listeners.set(tableId, set)
  return () => set.delete(fn)
}

const serverSnapshot = (): ColumnLayout | null => null

/**
 * `ids` are the movable column ids in their default order. Pinned columns (select, row actions) are left out.
 * The returned order always holds exactly these ids, so a column added later (e.g. a role that sees one more
 * column) still shows up.
 */
function useColumnLayout(
  tableId: string,
  ids: readonly string[]
): ColumnLayoutApi {
  const idsKey = ids.join("\u0000")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableIds = useMemo(() => [...ids], [idsKey])
  const saved = useSyncExternalStore(
    useCallback((fn: () => void) => subscribe(tableId, fn), [tableId]),
    () => read(tableId),
    serverSnapshot
  )
  const fallback = useMemo(() => defaultLayout(stableIds), [stableIds])
  const layout = saved ?? fallback
  // Stable while nothing changes, so callers can memoise their ordered column defs on it.
  const order = useMemo(
    () => normalizeOrder(layout.order, stableIds),
    [layout.order, stableIds]
  )
  const widths = layout.widths

  const dispatch = useCallback(
    (action: ColumnLayoutAction) => {
      const base = read(tableId) ?? defaultLayout(stableIds)
      const next = columnLayoutReducer(base, action)
      if (next !== base) write(tableId, next, stableIds)
    },
    [tableId, stableIds]
  )

  // Header drag-and-drop: which column is being dragged and which header it is over (not saved).
  const dragId = useRef<string | null>(null)
  const resizing = useRef(false)
  const [overId, setOverId] = useState<string | null>(null)

  return {
    tableId,
    order,
    widths,
    isCustom: !isDefaultLayout(layout, stableIds),
    move: (id, delta, visible) =>
      dispatch({ type: "move", ids: stableIds, id, delta, visible }),
    moveTo: (id, targetId) =>
      dispatch({ type: "moveTo", ids: stableIds, id, targetId }),
    resize: (id, width) => dispatch({ type: "resize", id, width }),
    ensureWidths: (w) => dispatch({ type: "ensureWidths", widths: w }),
    reset: () => dispatch({ type: "reset", ids: stableIds }),
    drag: {
      overId,
      start: (id) => {
        dragId.current = id
      },
      over: (id) => {
        if (!dragId.current) return false
        if (dragId.current !== id && overId !== id) setOverId(id)
        return true
      },
      drop: (id) => {
        if (dragId.current && dragId.current !== id)
          dispatch({
            type: "moveTo",
            ids: stableIds,
            id: dragId.current,
            targetId: id,
          })
        dragId.current = null
        setOverId(null)
      },
      end: () => {
        dragId.current = null
        setOverId(null)
      },
      locked: () => resizing.current,
      lock: (on) => {
        resizing.current = on
      },
    },
  }
}

export { useColumnLayout }
