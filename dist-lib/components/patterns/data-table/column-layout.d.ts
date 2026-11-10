import type { ReactNode } from "react";
type ColumnLayout = {
    /** Movable column ids, left to right. Pinned columns (select, row actions) are never in here. */
    order: string[];
    /** Width in px per column id. Empty means the browser sizes the columns (the table's normal look). */
    widths: Record<string, number>;
};
type ColumnLayoutAction = {
    type: "load";
    ids: string[];
    layout: ColumnLayout;
} | {
    type: "move";
    ids: string[];
    id: string;
    delta: -1 | 1;
    visible?: string[];
} | {
    type: "moveTo";
    ids: string[];
    id: string;
    targetId: string;
} | {
    type: "resize";
    id: string;
    width: number;
} | {
    type: "ensureWidths";
    widths: Record<string, number>;
} | {
    type: "reset";
    ids: string[];
};
/** The subset of the Web Storage API the layout code uses (lets tests pass a fake). */
type LayoutStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;
/** What useColumnLayout returns to a table renderer and to the "arrange columns" controls. */
type ColumnLayoutApi = {
    tableId: string;
    /** Movable ids in the user's order (always exactly the ids the table passed in). */
    order: string[];
    widths: Record<string, number>;
    /** True when the order or any width differs from the default, i.e. there is something to reset. */
    isCustom: boolean;
    move: (id: string, delta: -1 | 1, visible?: string[]) => void;
    moveTo: (id: string, targetId: string) => void;
    resize: (id: string, width: number) => void;
    ensureWidths: (widths: Record<string, number>) => void;
    reset: () => void;
    /** Header drag-and-drop (mouse, pen, and long-press drag where the browser supports it). */
    drag: {
        overId: string | null;
        start: (id: string) => void;
        /** Returns true while one of this table's headers is being dragged (so the header accepts the drop). */
        over: (id: string) => boolean;
        drop: (id: string) => void;
        end: () => void;
        /** True while a resize handle is held, so a header drag cannot start at the same time. */
        locked: () => boolean;
        lock: (on: boolean) => void;
    };
};
/** One entry in the "arrange columns" list. */
type ArrangeItem = {
    id: string;
    label: string;
};
/** A column of a plain (non-TanStack) table drawn by ColumnLayoutTable. */
type ColumnLayoutColumn<T> = {
    id: string;
    /** Plain-text name, used by the arrange list and the resize handle's accessible label. */
    label: string;
    /** Header content; defaults to the label. */
    header?: ReactNode;
    cell: (row: T) => ReactNode;
    /** Footer content for this column (only drawn when at least one column has a footer). */
    footer?: ReactNode;
    align?: "left" | "right" | "center";
    /** Extra classes for the body and footer cells. */
    className?: string;
    /** "start" keeps the column first, "end" keeps it last; pinned columns cannot be moved or resized. */
    pin?: "start" | "end";
};
declare const MIN_COLUMN_WIDTH = 64;
declare const MAX_COLUMN_WIDTH = 800;
/** Width given to a column that has none yet while the table is in fixed-width mode (e.g. shown later from the column picker). */
declare const DEFAULT_COLUMN_WIDTH = 160;
/** Keyboard step on a resize handle; Shift moves four steps. */
declare const RESIZE_STEP = 16;
declare function clampWidth(width: number): number;
/**
 * Brings a saved order in line with the columns the table has now: unknown and repeated ids are dropped, and a
 * column that is not in the saved order is put right after its nearest left neighbour from the default order.
 */
declare function normalizeOrder(saved: readonly string[], ids: readonly string[]): string[];
/** Moves `id` into the place of `targetId` (array-move: the others shift by one). */
declare function moveColumnTo(order: readonly string[], id: string, targetId: string): string[];
/** Moves `id` one step left (-1) or right (+1), skipping columns that are not shown. */
declare function moveColumnBy(order: readonly string[], id: string, delta: -1 | 1, visible?: readonly string[]): string[];
/** Puts column definitions in layout order: pinned-start ids first, then the user order, then the rest, then pinned-end ids. */
declare function orderColumns<C extends {
    id?: string;
}>(columns: readonly C[], order: readonly string[], pinStart?: readonly string[], pinEnd?: readonly string[]): C[];
declare function isDefaultLayout(layout: ColumnLayout, ids: readonly string[]): boolean;
declare function defaultLayout(ids: readonly string[]): ColumnLayout;
/** Returns the same object when nothing changes, so callers can skip saving and re-rendering. */
declare function columnLayoutReducer(state: ColumnLayout, action: ColumnLayoutAction): ColumnLayout;
declare function storageKey(tableId: string): string;
/** Reads a saved layout. Returns null when there is none, it is broken, or storage cannot be used. */
declare function loadLayout(storage: LayoutStorage | null, tableId: string): ColumnLayout | null;
/** Saves the layout, or removes the entry when the layout is the default. Never throws. */
declare function saveLayout(storage: LayoutStorage | null, tableId: string, layout: ColumnLayout, ids: readonly string[]): void;
/** window.localStorage when it can be used, otherwise null (server render, blocked site data). */
declare function browserStorage(): LayoutStorage | null;
/** Short stable hash for building a table id from its column names (djb2, base 36). */
declare function hashText(text: string): string;
/**
 * Table element props for a layout. With no widths the table keeps its normal automatic sizing. Once any width is
 * set, every shown column gets a width (stored, or the default), the table switches to fixed layout so the widths
 * really apply to header and body alike, and a filler column takes any space left so the table still fills its box.
 */
declare function tableSizing(ids: readonly string[], widths: Record<string, number>): {
    fixed: boolean;
    colWidths: (number | undefined)[];
    totalWidth: number;
};
export type { ArrangeItem, ColumnLayout, ColumnLayoutAction, ColumnLayoutApi, ColumnLayoutColumn, LayoutStorage, };
export { DEFAULT_COLUMN_WIDTH, MAX_COLUMN_WIDTH, MIN_COLUMN_WIDTH, RESIZE_STEP, browserStorage, clampWidth, columnLayoutReducer, defaultLayout, hashText, isDefaultLayout, loadLayout, moveColumnBy, moveColumnTo, normalizeOrder, orderColumns, saveLayout, storageKey, tableSizing, };
