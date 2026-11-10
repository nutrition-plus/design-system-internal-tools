"use client"

// A plain table (design-system Table primitives) whose columns the user can move and resize.
// The layout is remembered per tableId. Pinned columns (pin: "start" | "end") stay put and keep their size.
import { cn } from "cn"
import type { ReactNode } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { orderColumns, tableSizing } from "./column-layout"
import type { ColumnLayoutColumn } from "./column-layout"
import {
  ColumnLayoutControls,
  FillerCell,
  FillerHead,
  LayoutColGroup,
  LayoutHead,
  tableProps,
} from "./column-layout-parts"
import { useColumnLayout } from "./use-column-layout"

type Props<T> = {
  /** Key for the remembered layout (localStorage "moove-table:<tableId>"). */
  tableId: string
  columns: ColumnLayoutColumn<T>[]
  rows: T[]
  rowKey: (row: T) => string
  /** Accessible name of the table. */
  caption?: string
  /** Left side of the row above the table (the "คอลัมน์" controls sit on the right). */
  toolbar?: ReactNode
  className?: string
}

const ALIGN = { left: "", right: "text-right", center: "text-center" } as const

function ColumnLayoutTable<T>({
  tableId,
  columns,
  rows,
  rowKey,
  caption,
  toolbar,
  className,
}: Props<T>) {
  const pinStart = columns.filter((c) => c.pin === "start").map((c) => c.id)
  const pinEnd = columns.filter((c) => c.pin === "end").map((c) => c.id)
  const layout = useColumnLayout(
    tableId,
    columns.filter((c) => !c.pin).map((c) => c.id)
  )
  const shown = orderColumns(columns, layout.order, pinStart, pinEnd)
  const ids = shown.map((c) => c.id)
  const sizing = tableSizing(ids, layout.widths)
  const hasFooter = shown.some((c) => c.footer !== undefined)
  const items = shown
    .filter((c) => !c.pin)
    .map((c) => ({ id: c.id, label: c.label }))

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>{toolbar}</div>
        <ColumnLayoutControls layout={layout} items={items} />
      </div>
      <Table {...tableProps(sizing)}>
        {caption && <caption className="sr-only">{caption}</caption>}
        <LayoutColGroup ids={ids} sizing={sizing} />
        <TableHeader>
          <TableRow>
            {shown.map((c) =>
              c.pin ? (
                <TableHead
                  key={c.id}
                  data-col-id={c.id}
                  className={ALIGN[c.align ?? "left"]}
                >
                  {c.header ?? c.label}
                </TableHead>
              ) : (
                <LayoutHead
                  key={c.id}
                  layout={layout}
                  id={c.id}
                  label={c.label}
                  movable
                  resizable
                  className={ALIGN[c.align ?? "left"]}
                >
                  {c.header ?? c.label}
                </LayoutHead>
              )
            )}
            <FillerHead sizing={sizing} />
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={rowKey(row)}>
              {shown.map((c) => (
                <TableCell
                  key={c.id}
                  className={cn(
                    ALIGN[c.align ?? "left"],
                    c.align === "right" && "tabular-nums",
                    c.className
                  )}
                >
                  {c.cell(row)}
                </TableCell>
              ))}
              <FillerCell sizing={sizing} />
            </TableRow>
          ))}
        </TableBody>
        {hasFooter && (
          <TableFooter>
            <TableRow>
              {shown.map((c) => (
                <TableCell
                  key={c.id}
                  className={cn(
                    ALIGN[c.align ?? "left"],
                    c.align === "right" && "tabular-nums",
                    c.className
                  )}
                >
                  {c.footer}
                </TableCell>
              ))}
              <FillerCell sizing={sizing} />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  )
}

export { ColumnLayoutTable }
