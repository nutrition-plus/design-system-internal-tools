import * as React from "react"
import { cn } from "cn"
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  statBadgeVariant,
  statDeltaTone,
  type StatDirection,
} from "./stat-tone"

type StatDeltaProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
  /** Which way the figure moved compared with before. */
  direction: StatDirection
  /** Which direction is good. Default: "up". Use "down" when a lower figure is better. */
  goodWhen?: "up" | "down"
}

const ICONS = {
  up: ArrowUpIcon,
  down: ArrowDownIcon,
  same: MinusIcon,
} as const

/**
 * A small "change versus before" pill with an arrow. Green when the figure moved the good way, red when it moved the
 * other way, grey when it did not change. The app writes the text (for example "+150") as children.
 */
function StatDelta({
  direction,
  goodWhen = "up",
  className,
  children,
  ...props
}: StatDeltaProps) {
  const Icon = ICONS[direction]
  return (
    <Badge
      data-slot="stat-delta"
      data-direction={direction}
      variant={statBadgeVariant(statDeltaTone(direction, goodWhen))}
      className={cn("tabular-nums", className)}
      {...props}
    >
      <Icon data-icon="inline-start" aria-hidden="true" />
      {children}
    </Badge>
  )
}

export { StatDelta }
export type { StatDeltaProps }
