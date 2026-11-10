import { type ReactTable, type Row, type RowData } from "@tanstack/react-table";
import type { ReactNode } from "react";
import type { ArrangeItem, ColumnLayoutApi } from "./column-layout";
import type { DataTableFeatures } from "./features";
type Props<TData extends RowData> = {
    table: ReactTable<DataTableFeatures, TData, any>;
    layout: ColumnLayoutApi;
    /** Accessible name of the table, read by screen readers. */
    caption: string;
    /** Shown when there are no rows. */
    empty?: ReactNode;
    onRowClick?: (row: Row<DataTableFeatures, TData>) => void;
    className?: string;
};
declare function ColumnLayoutDataTable<TData extends RowData>({ table, layout, caption, empty, onRowClick, className, }: Props<TData>): import("react").JSX.Element;
/** The shown, movable columns of a table in their current order, for the "คอลัมน์" list. */
declare function arrangeItems<TData extends RowData>(table: ReactTable<DataTableFeatures, TData, any>, layout: ColumnLayoutApi): ArrangeItem[];
export { ColumnLayoutDataTable, arrangeItems };
