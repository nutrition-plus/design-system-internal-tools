import * as React from "react"
import { cn } from "cn"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  kpiBarSpec,
  kpiValueSizeClass,
  statTextClass,
  type StatTone,
} from "./stat-tone"

type KpiCardProps = Omit<React.ComponentProps<typeof Card>, "children"> & {
  /** Small uppercase caption above the number. */
  label: string
  /** The big number, already formatted by the app. */
  value: React.ReactNode
  /** One line under the number. */
  sub?: React.ReactNode
  /** Colour of the big number. Default: neutral. */
  tone?: StatTone
  /** Size of the big number. Default: `default`; `lg` is one step larger. */
  size?: "default" | "lg"
  /** Draws a coloured bar on the top edge in this tone. */
  bar?: StatTone
  /** Draws the 4px top bar in any CSS colour, for example `var(--chart-2)`. Wins over `bar`. */
  barColor?: string
  /** A pill or any small element, for example a StatPill. Position: see `pillPlacement`. */
  pill?: React.ReactNode
  /** Where the pill goes: under the text (`below`, default) or next to the big number (`inline`). */
  pillPlacement?: "below" | "inline"
  /** Any other small line under the pill. */
  note?: React.ReactNode
  /** Link target. How it looks depends on `linkPlacement`. */
  href?: string
  /**
   * `line` (default): a link line at the bottom of the card, shown only when `linkLabel` is given.
   * `card`: the whole card is the link (the card gets a hover fill). Its accessible name is `linkLabel`, or `label`.
   */
  linkPlacement?: "line" | "card"
  /** Text of the link line, and the accessible name of a whole-card link. */
  linkLabel?: string
  /** The element or component that draws the link, for example the router's `Link`. Default: `a`. */
  linkComponent?: React.ElementType
}

/**
 * A figure card: label, big number in a tone colour, sub text, optional top bar (tone or any colour), pill (below or
 * beside the number), note and link (a line, or the whole card).
 */
function KpiCard({
  label,
  value,
  sub,
  tone = "neutral",
  size = "default",
  bar,
  barColor,
  pill,
  pillPlacement = "below",
  note,
  href,
  linkPlacement = "line",
  linkLabel,
  linkComponent: LinkTag = "a",
  className,
  ...props
}: KpiCardProps) {
  const barSpec = kpiBarSpec(bar, barColor)
  const wholeCard = Boolean(href) && linkPlacement === "card"
  const title = (
    <CardTitle
      className={cn(
        "leading-none font-bold tabular-nums",
        kpiValueSizeClass(size),
        statTextClass(tone)
      )}
    >
      {value}
    </CardTitle>
  )

  return (
    <Card
      data-slot="kpi-card"
      interactive={wholeCard || undefined}
      className={cn(
        "relative overflow-hidden",
        wholeCard &&
          "has-[[data-slot=kpi-card-link]:focus-visible]:ring-2 has-[[data-slot=kpi-card-link]:focus-visible]:ring-ring",
        className
      )}
      {...props}
    >
      {barSpec && (
        <span
          aria-hidden="true"
          data-slot="kpi-card-bar"
          className={cn("absolute inset-x-0 top-0 h-1", barSpec.className)}
          style={barSpec.style}
        />
      )}
      <CardHeader>
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        {pill && pillPlacement === "inline" ? (
          <div className="flex items-center justify-between gap-2">
            {title}
            {pill}
          </div>
        ) : (
          title
        )}
        {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
        {pill && pillPlacement === "below" && <div>{pill}</div>}
        {note && <div className="text-sm text-muted-foreground">{note}</div>}
        {href && !wholeCard && linkLabel && (
          <LinkTag
            href={href}
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {linkLabel}
          </LinkTag>
        )}
      </CardHeader>
      {wholeCard && (
        <LinkTag
          href={href}
          data-slot="kpi-card-link"
          aria-label={linkLabel ?? label}
          className="absolute inset-0 z-10 rounded-xl"
        />
      )}
    </Card>
  )
}

export { KpiCard }
export type { KpiCardProps }
