import * as React from "react"
import { cn } from "cn"
import { SparklesIcon, TriangleAlertIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type RowFlagTone = "danger" | "info"

type RowFlagProps = Omit<React.ComponentProps<"span">, "children"> & {
  /** danger tints the row red; info tints it blue. */
  tone: RowFlagTone
  /** Lucide icon component. Default: triangle-alert for danger, sparkles for info. */
  icon?: LucideIcon
  /** Used as aria-label and title: the marker is not understood by colour alone. */
  label: string
}

const DEFAULT_ICON: Record<RowFlagTone, LucideIcon> = {
  danger: TriangleAlertIcon,
  info: SparklesIcon,
}

/**
 * A small icon marker to put inside the FIRST cell of a table row. It sets `data-row-flag`, and base.css tints the
 * whole row and draws an inset bar on the first cell. The row tint needs `:has()` (iPadOS 15.4+).
 */
function RowFlag({
  tone,
  icon,
  label,
  className,
  ...props
}: RowFlagProps) {
  const Icon = icon ?? DEFAULT_ICON[tone]
  return (
    <span
      data-row-flag={tone}
      role="img"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex shrink-0 items-center",
        tone === "danger" ? "text-destructive" : "text-info",
        className
      )}
      {...props}
    >
      <Icon className="size-5" aria-hidden="true" />
    </span>
  )
}

export { RowFlag }
export type { RowFlagProps, RowFlagTone }
