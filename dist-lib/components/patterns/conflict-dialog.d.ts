import * as React from "react";
import { type ConflictRow } from "./conflict-rows";
type ConflictDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Default: "ข้อมูลถูกแก้ไขโดยผู้อื่นแล้ว". */
    title?: string;
    /** Default: says nothing was saved and asks the user to check the latest data. */
    description?: React.ReactNode;
    /** An extra line under the description, for example who changed it and when. */
    detail?: React.ReactNode;
    /** The latest data, one line each. Add `yours` to a row to show the user's own value next to it. */
    rows?: ConflictRow[];
    /** Header of the latest-value column. Default: "ข้อมูลล่าสุด". */
    valueLabel?: string;
    /** Header of the user's-value column (only when a row has `yours`). Default: "ที่คุณแก้". */
    yoursLabel?: string;
    /** Loads the latest data. The reload button is shown only when this is given. */
    onReload?: () => void;
    /** Default: "โหลดข้อมูลล่าสุด". */
    reloadLabel?: string;
    /** Default: "ปิด". */
    closeLabel?: string;
};
/**
 * Shown when a save is refused because someone else changed the data first (a version conflict, HTTP 409). Nothing was
 * saved: the dialog shows the latest data and lets the user reload it or close and keep editing.
 */
declare function ConflictDialog({ open, onOpenChange, title, description, detail, rows, valueLabel, yoursLabel, onReload, reloadLabel, closeLabel, }: ConflictDialogProps): React.JSX.Element;
export { ConflictDialog };
export type { ConflictDialogProps };
