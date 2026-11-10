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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"

type ReasonDialogProps = {
  trigger: React.ReactElement
  title: string
  description: string
  reasonLabel: string
  confirmLabel: string
  cancelLabel?: string
  placeholder?: string
  onConfirm: (reason: string) => void | Promise<void>
}

/** Collects a non-empty reason; a failed submission keeps the value for retry. */
function ReasonDialog({
  trigger,
  title,
  description,
  reasonLabel,
  confirmLabel,
  cancelLabel = "ยกเลิก",
  placeholder,
  onConfirm,
}: ReasonDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [reason, setReason] = React.useState("")
  const [pending, setPending] = React.useState(false)
  const reasonId = React.useId()

  function changeOpen(next: boolean) {
    if (pending) return
    setOpen(next)
    if (!next) setReason("")
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = reason.trim()
    if (!value || pending) return
    setPending(true)
    try {
      await onConfirm(value)
      setOpen(false)
      setReason("")
    } catch {
      // The caller reports the error; retain the reason for retry.
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={!pending}
        onEscapeKeyDown={(event) => pending && event.preventDefault()}
        onPointerDownOutside={(event) => pending && event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor={reasonId}>{reasonLabel}</FieldLabel>
              <Textarea
                id={reasonId}
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                placeholder={placeholder}
                required
                disabled={pending}
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-4">
            <Button
              type="button"
              variant="outline"
              disabled={pending}
              onClick={() => changeOpen(false)}
            >
              {cancelLabel}
            </Button>
            <Button
              type="submit"
              disabled={pending || !reason.trim()}
              aria-busy={pending}
            >
              {pending && <Spinner data-icon="inline-start" />}
              {confirmLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export { ReasonDialog }
export type { ReasonDialogProps }
