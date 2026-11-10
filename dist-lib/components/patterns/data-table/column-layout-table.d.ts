import type { ReactNode } from "react";
import type { ColumnLayoutColumn } from "./column-layout";
type Props<T> = {
    /** Key for the remembered layout (localStorage "moove-table:<tableId>"). */
    tableId: string;
    columns: ColumnLayoutColumn<T>[];
    rows: T[];
    rowKey: (row: T) => string;
    /** Accessible name of the table. */
    caption?: string;
    /** Left side of the row above the table (the "คอลัมน์" controls sit on the right). */
    toolbar?: ReactNode;
    className?: string;
};
declare function ColumnLayoutTable<T>({ tableId, columns, rows, rowKey, caption, toolbar, className, }: Props<T>): import("react").JSX.Element;
export { ColumnLayoutTable };
