import type { ColumnLayoutApi } from "./column-layout";
/**
 * `ids` are the movable column ids in their default order. Pinned columns (select, row actions) are left out.
 * The returned order always holds exactly these ids, so a column added later (e.g. a role that sees one more
 * column) still shows up.
 */
declare function useColumnLayout(tableId: string, ids: readonly string[]): ColumnLayoutApi;
export { useColumnLayout };
