import * as React from "react"
import { cn } from "cn"

import { Badge } from "@/components/ui/badge"
import { statBadgeVariant, type StatTone } from "./stat-tone"

type StatPillProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
  /** Colour says what the figure is. Default: neutral. */
  tone?: StatTone
}

/**
 * A coloured pill that shows an amount or a number, with tabular digits. It is unit-agnostic: the app formats the
 * text (currency, decimals, unit) and passes it as children.
 */
function StatPill({ tone = "neutral", className, ...props }: StatPillProps) {
  return (
    <Badge
      variant={statBadgeVariant(tone)}
      className={cn("tabular-nums", className)}
      {...props}
    />
  )
}

export { StatPill }
export type { StatPillProps }
