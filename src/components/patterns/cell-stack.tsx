import * as React from "react"
import { cn } from "cn"

/**
 * A vertical stack of small lines that makes one dense table cell, so a row can group related data in one column
 * instead of spreading it over many thin ones.
 */
function CellStack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cell-stack"
      className={cn(
        "flex min-w-0 flex-col gap-0.5 py-1.5 text-xs leading-5",
        className
      )}
      {...props}
    />
  )
}

type LabeledLineProps = Omit<React.ComponentProps<"span">, "children"> & {
  /** Muted small label before the value. */
  label: React.ReactNode
  /** The value. It is cut with an ellipsis when it does not fit; set `title` to show it in full. */
  children: React.ReactNode
}

/** One line of a CellStack: a muted label and its value. */
function LabeledLine({
  label,
  children,
  className,
  ...props
}: LabeledLineProps) {
  return (
    <span
      data-slot="labeled-line"
      className={cn("flex min-w-0 items-center gap-1.5", className)}
      {...props}
    >
      <span className="shrink-0 text-muted-foreground">{label}</span>
      <span className="min-w-0 truncate text-foreground">{children}</span>
    </span>
  )
}

export { CellStack, LabeledLine }
export type { LabeledLineProps }
