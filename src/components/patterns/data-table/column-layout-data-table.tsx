"use client"

// The design system's DataTable (same markup, classes and row-click rule) plus movable and resizable columns.
// DataTable draws its own header, so it cannot take a resize handle or a column width; this copy can.
// Column ORDER is applied before the table is built (orderColumns on the column defs), so TanStack's header groups,
// cells and the toolbar's column picker all follow it. Column WIDTHS come from the layout and are drawn here.
import { cn } from "cn"
import {
  FlexRender,
  type ReactTable,
  type Row,
  type RowData,
} from "@tanstack/react-table"
import type { ReactNode } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { tableSizing } from "./column-layout"
import type { ArrangeItem, ColumnLayoutApi } from "./column-layout"
import {
  FillerCell,
  FillerHead,
  LayoutColGroup,
  LayoutHead,
  tableProps,
} from "./column-layout-parts"
import type { DataTableColumnMeta, DataTableFeatures } from "./features"

// Same rule as DataTable: taps on these never open the row.
const INTERACTIVE =
  "button, a, input, label, [role=checkbox], [role=menuitem], [role=separator]"

type Props<TData extends RowData> = {
  table: ReactTable<DataTableFeatures, TData, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  layout: ColumnLayoutApi
  /** Accessible name of the table, read by screen readers. */
  caption: string
  /** Shown when there are no rows. */
  empty?: ReactNode
  onRowClick?: (row: Row<DataTableFeatures, TData>) => void
  className?: string
  /** Keeps the first column in view while the table scrolls sideways. */
  stickyFirstColumn?: boolean
}

function ColumnLayoutDataTable<TData extends RowData>({
  table,
  layout,
  caption,
  empty,
  onRowClick,
  className,
  stickyFirstColumn,
}: Props<TData>) {
  const columns = table.getVisibleLeafColumns()
  const ids = columns.map((c) => c.id)
  const sizing = tableSizing(ids, layout.widths)
  const rows = table.getRowModel().rows
  const movable = new Set(layout.order)

  return (
    <div
      data-slot="data-table"
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
    >
      <Table {...tableProps(sizing)} stickyFirstColumn={stickyFirstColumn}>
        <caption className="sr-only">{caption}</caption>
        <LayoutColGroup ids={ids} sizing={sizing} />
        <TableHeader className="sticky top-0 z-10">
          {table.getHeaderGroups().map((group) => (
            <TableRow key={group.id}>
              {group.headers.map((header) => {
                const col = header.column
                const meta = col.columnDef.meta as
                  DataTableColumnMeta | undefined
                const sorted = col.getIsSorted()
                return (
                  <LayoutHead
                    key={header.id}
                    layout={layout}
                    id={col.id}
                    label={columnLabel(
                      col.columnDef.meta,
                      col.columnDef.header,
                      col.id
                    )}
                    movable={movable.has(col.id)}
                    resizable={movable.has(col.id)}
                    ariaSort={
                      sorted === "asc"
                        ? "ascending"
                        : sorted === "desc"
                          ? "descending"
                          : col.getCanSort()
                            ? "none"
                            : undefined
                    }
                    className={cn(
                      meta?.align === "right" && "text-right",
                      meta?.sticky && "sticky left-0 z-10 bg-secondary"
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <FlexRender header={header} />
                    )}
                  </LayoutHead>
                )
              })}
              <FillerHead sizing={sizing} />
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={ids.length + (sizing.fixed ? 1 : 0)}
                className="h-auto p-0 whitespace-normal"
              >
                {empty}
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
                className={cn(onRowClick && "cursor-pointer")}
                onClick={
                  onRowClick
                    ? (e) =>
                        !(e.target as Element).closest(INTERACTIVE) &&
                        onRowClick(row)
                    : undefined
                }
              >
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta as
                    DataTableColumnMeta | undefined
                  return (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        meta?.align === "right" && "text-right",
                        meta?.sticky && "sticky left-0 bg-inherit"
                      )}
                    >
                      <FlexRender cell={cell} />
                    </TableCell>
                  )
                })}
                <FillerCell sizing={sizing} />
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

function columnLabel(meta: unknown, header: unknown, id: string): string {
  const label = (meta as DataTableColumnMeta | undefined)?.label
  return label ?? (typeof header === "string" ? header : id)
}

/** The shown, movable columns of a table in their current order, for the "คอลัมน์" list. */
function arrangeItems<TData extends RowData>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: ReactTable<DataTableFeatures, TData, any>,
  layout: ColumnLayoutApi
): ArrangeItem[] {
  const movable = new Set(layout.order)
  return table
    .getVisibleLeafColumns()
    .filter((c) => movable.has(c.id))
    .map((c) => ({
      id: c.id,
      label: columnLabel(c.columnDef.meta, c.columnDef.header, c.id),
    }))
}

export { ColumnLayoutDataTable, arrangeItems }
