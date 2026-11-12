import * as React from "react"
import { cn } from "cn"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  statBarClass,
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
  /** Draws a coloured bar on the top edge in this tone. */
  bar?: StatTone
  /** A pill or any small element under the text, for example a StatPill. */
  pill?: React.ReactNode
  /** Any other small line under the pill. */
  note?: React.ReactNode
  /** Makes a link line at the bottom of the card. */
  href?: string
  /** Text of the link line. Required to show the link. */
  linkLabel?: string
}

/** A figure card: label, big number in a tone colour, sub text, optional top bar, pill, note and link. */
function KpiCard({
  label,
  value,
  sub,
  tone = "neutral",
  bar,
  pill,
  note,
  href,
  linkLabel,
  className,
  ...props
}: KpiCardProps) {
  return (
    <Card
      data-slot="kpi-card"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {bar && (
        <span
          aria-hidden="true"
          className={cn("absolute inset-x-0 top-0 h-1", statBarClass(bar))}
        />
      )}
      <CardHeader>
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
        <CardTitle
          className={cn(
            "text-3xl leading-none font-bold tabular-nums sm:text-4xl",
            statTextClass(tone)
          )}
        >
          {value}
        </CardTitle>
        {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
        {pill && <div>{pill}</div>}
        {note && <div className="text-sm text-muted-foreground">{note}</div>}
        {href && linkLabel && (
          <a
            href={href}
            className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {linkLabel}
          </a>
        )}
      </CardHeader>
    </Card>
  )
}

export { KpiCard }
export type { KpiCardProps }
