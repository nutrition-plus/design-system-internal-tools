"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { conflictShowsYours, type ConflictRow } from "./conflict-rows"

type ConflictDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Default: "ข้อมูลถูกแก้ไขโดยผู้อื่นแล้ว". */
  title?: string
  /** Default: says nothing was saved and asks the user to check the latest data. */
  description?: React.ReactNode
  /** An extra line under the description, for example who changed it and when. */
  detail?: React.ReactNode
  /** The latest data, one line each. Add `yours` to a row to show the user's own value next to it. */
  rows?: ConflictRow[]
  /** Header of the latest-value column. Default: "ข้อมูลล่าสุด". */
  valueLabel?: string
  /** Header of the user's-value column (only when a row has `yours`). Default: "ที่คุณแก้". */
  yoursLabel?: string
  /** Loads the latest data. The reload button is shown only when this is given. */
  onReload?: () => void
  /** Default: "โหลดข้อมูลล่าสุด". */
  reloadLabel?: string
  /** Default: "ปิด". */
  closeLabel?: string
}

/**
 * Shown when a save is refused because someone else changed the data first (a version conflict, HTTP 409). Nothing was
 * saved: the dialog shows the latest data and lets the user reload it or close and keep editing.
 */
function ConflictDialog({
  open,
  onOpenChange,
  title = "ข้อมูลถูกแก้ไขโดยผู้อื่นแล้ว",
  description = "การบันทึกของคุณยังไม่ถูกบันทึก กรุณาตรวจสอบข้อมูลล่าสุด แล้วบันทึกอีกครั้ง",
  detail,
  rows = [],
  valueLabel = "ข้อมูลล่าสุด",
  yoursLabel = "ที่คุณแก้",
  onReload,
  reloadLabel = "โหลดข้อมูลล่าสุด",
  closeLabel = "ปิด",
}: ConflictDialogProps) {
  const showYours = conflictShowsYours(rows)
  const grid = showYours ? "grid-cols-3" : "grid-cols-2"
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-slot="conflict-dialog">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {detail && <div className="text-sm">{detail}</div>}
        {rows.length > 0 && (
          <div className="overflow-hidden rounded-md border text-sm">
            <div
              className={`grid ${grid} gap-2 border-b bg-secondary px-3 py-2 font-medium`}
            >
              <span />
              {showYours && <span>{yoursLabel}</span>}
              <span>{valueLabel}</span>
            </div>
            {rows.map((r) => (
              <div key={r.label} className={`grid ${grid} gap-2 px-3 py-2`}>
                <span className="text-muted-foreground">{r.label}</span>
                {showYours && <span>{r.yours}</span>}
                <span>{r.value}</span>
              </div>
            ))}
          </div>
        )}
        <DialogFooter>
          {onReload && (
            <Button variant="outline" onClick={onReload}>
              {reloadLabel}
            </Button>
          )}
          <Button onClick={() => onOpenChange(false)}>{closeLabel}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { ConflictDialog }
export type { ConflictDialogProps }
