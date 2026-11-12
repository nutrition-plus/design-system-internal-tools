import * as React from "react"
import { cn } from "cn"

type StickyActionsProps = React.ComponentProps<"div"> & {
  /** A hint line above the buttons, for example why the main button is off. */
  hint?: React.ReactNode
}

/**
 * Action bar stuck to the bottom of a scrolling sheet or dialog, so the main button stays in reach on a long form.
 * Buttons wrap instead of overflowing; give the main button `grow` to fill the row on a narrow sheet. It cancels a
 * 16px side padding of the container (`-mx-4`); the background is `bg-popover`, which matches Sheet and Dialog.
 */
function StickyActions({
  hint,
  children,
  className,
  ...props
}: StickyActionsProps) {
  return (
    <div
      data-slot="sticky-actions"
      className={cn(
        "sticky bottom-0 z-10 -mx-4 flex flex-col gap-2 border-t bg-popover px-4 py-3 shadow-[0_-6px_12px_-10px_rgb(0_0_0/0.25)]",
        className
      )}
      {...props}
    >
      {hint}
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

type FormSectionProps = Omit<React.ComponentProps<"section">, "title"> & {
  title: string
  /** A short line under the title. */
  hint?: string
}

/** A titled group of fields inside an edit form. */
function FormSection({
  title,
  hint,
  children,
  className,
  ...props
}: FormSectionProps) {
  return (
    <section
      data-slot="form-section"
      className={cn("flex flex-col gap-3 rounded-xl border p-4", className)}
      {...props}
    >
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      </div>
      {children}
    </section>
  )
}

export { FormSection, StickyActions }
export type { FormSectionProps, StickyActionsProps }
