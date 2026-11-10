"use client"

// Building blocks for movable, resizable table columns, shared by ColumnLayoutDataTable (TanStack) and ColumnLayoutTable (plain).
// Everything works by touch: the "จัดคอลัมน์" list has 44px buttons, and the resize handle uses pointer events
// with touch-action: none, so a finger, a pen and a mouse all drag it. Header drag-and-drop is an extra for mouse.
import { cn } from "cn"
import {
  ArrowLeftRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  RotateCcwIcon,
} from "lucide-react"
import {
  useRef,
  type AriaAttributes,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { TableCell, TableHead } from "@/components/ui/table"

import {
  DEFAULT_COLUMN_WIDTH,
  MAX_COLUMN_WIDTH,
  MIN_COLUMN_WIDTH,
  RESIZE_STEP,
  tableSizing,
} from "./column-layout"
import type { ArrangeItem, ColumnLayoutApi } from "./column-layout"

// Thai texts, in the same way as the other design-system patterns.
const TEXT = {
  arrange: "คอลัมน์",
  arrangeTitle: "แสดงและจัดคอลัมน์",
  arrangeHint:
    "ติ๊กเพื่อแสดงหรือซ่อน กดลูกศรเพื่อย้าย (บนสุดคือซ้ายสุดของตาราง) ปรับความกว้างได้โดยลากขีดที่ขอบขวาของหัวคอลัมน์",
  listLabel: "ลำดับคอลัมน์",
  reset: "รีเซ็ตคอลัมน์",
  show: (name: string) => `แสดงคอลัมน์ ${name}`,
  moveLeft: (name: string) => `ย้าย ${name} ไปทางซ้าย`,
  moveRight: (name: string) => `ย้าย ${name} ไปทางขวา`,
  resize: (name: string) => `ปรับความกว้างคอลัมน์ ${name} กดลูกศรซ้ายหรือขวา`,
}

type Sizing = ReturnType<typeof tableSizing>

// Widths of every header in the handle's table, so switching to fixed widths keeps the current look.
function measureHeaders(el: HTMLElement): Record<string, number> {
  const out: Record<string, number> = {}
  el.closest("table")
    ?.querySelectorAll<HTMLElement>("thead th[data-col-id]")
    .forEach((head) => {
      const id = head.dataset.colId
      // Round UP: rounding down by a fraction of a pixel makes the content overflow and shows a stray "…".
      if (id) out[id] = Math.ceil(head.getBoundingClientRect().width) + 1
    })
  return out
}

function ResizeHandle({
  layout,
  id,
  label,
}: {
  layout: ColumnLayoutApi
  id: string
  label: string
}) {
  const start = useRef<{ x: number; width: number } | null>(null)
  const frame = useRef(0)
  const width = layout.widths[id]

  // The first resize fixes every column at its current width, then changes this one.
  const baseWidth = (el: HTMLElement): number => {
    if (width !== undefined) return width
    const measured = measureHeaders(el)
    layout.ensureWidths(measured)
    return measured[id] ?? DEFAULT_COLUMN_WIDTH
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return
    e.preventDefault()
    e.stopPropagation()
    layout.drag.lock(true)
    start.current = { x: e.clientX, width: baseWidth(e.currentTarget) }
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // Capture is a nicety; without it the drag still works while the pointer stays on the handle.
    }
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const s = start.current
    if (!s) return
    e.preventDefault()
    const next = s.width + (e.clientX - s.x)
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => layout.resize(id, next))
  }
  const finish = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return
    start.current = null
    layout.drag.lock(false)
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // Already released.
    }
  }
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    const step = RESIZE_STEP * (e.shiftKey ? 4 : 1)
    layout.resize(
      id,
      baseWidth(e.currentTarget) + (e.key === "ArrowRight" ? step : -step)
    )
  }

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label={TEXT.resize(label)}
      aria-valuenow={width}
      aria-valuemin={MIN_COLUMN_WIDTH}
      aria-valuemax={MAX_COLUMN_WIDTH}
      tabIndex={0}
      data-slot="column-resize-handle"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finish}
      onPointerCancel={finish}
      onLostPointerCapture={finish}
      onKeyDown={onKeyDown}
      onClick={(e) => e.stopPropagation()}
      className="absolute inset-y-0 right-0 flex w-3 cursor-col-resize touch-none items-center justify-end outline-none select-none after:h-6 after:w-px after:bg-border hover:after:w-0.5 hover:after:bg-primary focus-visible:bg-accent focus-visible:after:w-0.5 focus-visible:after:bg-primary active:after:w-0.5 active:after:bg-primary pointer-coarse:w-6"
    />
  )
}

type HeadProps = {
  layout: ColumnLayoutApi
  id: string
  label: string
  movable: boolean
  resizable: boolean
  className?: string
  ariaSort?: AriaAttributes["aria-sort"]
  children?: ReactNode
}

// A header cell that can be dragged onto another header (move) and has a resize handle on its right edge.
function LayoutHead({
  layout,
  id,
  label,
  movable,
  resizable,
  className,
  ariaSort,
  children,
}: HeadProps) {
  const { drag } = layout
  return (
    <TableHead
      data-col-id={id}
      aria-sort={ariaSort}
      draggable={movable || undefined}
      className={cn(
        className,
        drag.overId === id && "bg-accent ring-2 ring-primary ring-inset"
      )}
      onDragStart={
        movable
          ? (e) => {
              if (drag.locked()) return e.preventDefault()
              e.dataTransfer.effectAllowed = "move"
              e.dataTransfer.setData("text/plain", id)
              drag.start(id)
            }
          : undefined
      }
      onDragOver={
        movable
          ? (e) => {
              if (!drag.over(id)) return
              e.preventDefault()
              e.dataTransfer.dropEffect = "move"
            }
          : undefined
      }
      onDrop={
        movable
          ? (e) => {
              e.preventDefault()
              drag.drop(id)
            }
          : undefined
      }
      onDragEnd={movable ? () => drag.end() : undefined}
    >
      {children}
      {resizable && <ResizeHandle layout={layout} id={id} label={label} />}
    </TableHead>
  )
}

// Fixed widths (once the user resized something): one <col> per column plus a filler that takes the space left.
function LayoutColGroup({ ids, sizing }: { ids: string[]; sizing: Sizing }) {
  if (!sizing.fixed) return null
  return (
    <colgroup>
      {ids.map((id, i) => (
        <col key={id} style={{ width: sizing.colWidths[i] }} />
      ))}
      <col />
    </colgroup>
  )
}

function FillerHead({ sizing }: { sizing: Sizing }) {
  return sizing.fixed ? <TableHead aria-hidden className="p-0" /> : null
}

function FillerCell({ sizing }: { sizing: Sizing }) {
  return sizing.fixed ? <TableCell aria-hidden className="p-0" /> : null
}

function tableProps(sizing: Sizing): {
  "data-layout"?: string
  style?: CSSProperties
} {
  if (!sizing.fixed) return {}
  return {
    "data-layout": "fixed",
    style: {
      tableLayout: "fixed",
      width: `max(100%, ${sizing.totalWidth}px)`,
      minWidth: sizing.totalWidth,
    },
  }
}

// What the column control needs from a TanStack table (kept small so any table instance fits).
type ColumnControlTable = {
  getAllLeafColumns: () => {
    id: string
    getCanHide: () => boolean
    getIsVisible: () => boolean
    toggleVisibility: (visible?: boolean) => void
    columnDef: { meta?: unknown; header?: unknown }
  }[]
  resetColumnVisibility: () => void
}

// ONE "คอลัมน์" button: tick to show or hide a column, arrows to move it (top = leftmost), and a reset that puts the
// order, the widths and the shown columns back. It replaces the design system's own "คอลัมน์" menu, which is hidden by CSS.
// A TanStack table gives ticking (show or hide); a plain table passes its shown columns as `items` and has no ticking.
function ColumnLayoutControls({
  layout,
  table,
  items: plain,
}: {
  layout: ColumnLayoutApi
  table?: ColumnControlTable
  items?: ArrangeItem[]
}) {
  const all = table?.getAllLeafColumns() ?? []
  const byId = new Map(all.map((c) => [c.id, c]))
  type Entry = {
    id: string
    label: string
    shown: boolean
    canHide: boolean
    toggle: (v: boolean) => void
  }
  const items: Entry[] = table
    ? layout.order.flatMap((id) => {
        const c = byId.get(id)
        if (!c) return []
        const label =
          (c.columnDef.meta as { label?: string } | undefined)?.label ??
          (typeof c.columnDef.header === "string" ? c.columnDef.header : c.id)
        return [
          {
            id,
            label,
            shown: c.getIsVisible(),
            canHide: c.getCanHide(),
            toggle: (v: boolean) => c.toggleVisibility(v),
          },
        ]
      })
    : (plain ?? []).map((i) => ({
        id: i.id,
        label: i.label,
        shown: true,
        canHide: false,
        toggle: () => {},
      }))
  const visible = items.filter((c) => c.shown).map((c) => c.id)
  const label = (c: Entry) => c.label
  const reset = () => {
    layout.reset()
    table?.resetColumnVisibility()
  }
  const isChanged = layout.isCustom || items.some((c) => c.canHide && !c.shown)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ArrowLeftRightIcon data-icon="inline-start" />
          {TEXT.arrange}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 gap-0 p-0">
        <PopoverHeader className="p-3">
          <PopoverTitle>{TEXT.arrangeTitle}</PopoverTitle>
          <PopoverDescription>{TEXT.arrangeHint}</PopoverDescription>
        </PopoverHeader>
        <ol
          aria-label={TEXT.listLabel}
          className="max-h-[50dvh] overflow-y-auto border-y py-1"
        >
          {items.map((c) => {
            const shown = c.shown
            const at = visible.indexOf(c.id)
            return (
              <li key={c.id} className="flex items-center gap-1 px-3">
                <label className="flex min-h-11 min-w-0 flex-1 items-center gap-3 text-sm">
                  <Checkbox
                    checked={shown}
                    disabled={!c.canHide}
                    onCheckedChange={(v) => c.toggle(v === true)}
                    aria-label={TEXT.show(label(c))}
                  />
                  <span className="min-w-0 flex-1 truncate">{label(c)}</span>
                </label>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={TEXT.moveLeft(label(c))}
                  disabled={!shown || at <= 0}
                  onClick={() => layout.move(c.id, -1, visible)}
                >
                  <ChevronUpIcon />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={TEXT.moveRight(label(c))}
                  disabled={!shown || at === visible.length - 1}
                  onClick={() => layout.move(c.id, 1, visible)}
                >
                  <ChevronDownIcon />
                </Button>
              </li>
            )
          })}
        </ol>
        <div className="p-3">
          <Button
            variant="outline"
            className="w-full"
            disabled={!isChanged}
            onClick={reset}
          >
            <RotateCcwIcon data-icon="inline-start" />
            {TEXT.reset}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export {
  ColumnLayoutControls,
  FillerCell,
  FillerHead,
  LayoutColGroup,
  LayoutHead,
  tableProps,
}
