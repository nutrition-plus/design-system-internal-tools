// Pure tone maps of StatPill and KpiCard, kept free of React so they can be unit tested.

type StatTone = "info" | "success" | "warning" | "danger" | "neutral"

type StatBadgeVariant =
  | "info"
  | "success"
  | "warning"
  | "destructive"
  | "secondary"

/** The Badge variant that draws a tone. */
function statBadgeVariant(tone: StatTone): StatBadgeVariant {
  return tone === "danger"
    ? "destructive"
    : tone === "neutral"
      ? "secondary"
      : tone
}

/** Text colour class of a big number in a tone (the dark `-foreground` shades keep contrast on white). */
function statTextClass(tone: StatTone): string {
  switch (tone) {
    case "info":
      return "text-info-foreground"
    case "success":
      return "text-success-foreground"
    case "warning":
      return "text-warning-foreground"
    case "danger":
      return "text-danger-foreground"
    default:
      return "text-foreground"
  }
}

/** Background class of a colour bar in a tone. */
function statBarClass(tone: StatTone): string {
  switch (tone) {
    case "info":
      return "bg-info"
    case "success":
      return "bg-success"
    case "warning":
      return "bg-warning"
    case "danger":
      return "bg-danger"
    default:
      return "bg-border"
  }
}

type StatDirection = "up" | "down" | "same"

/** The tone of a change: neutral when same, success when it moved the good way, else danger. */
function statDeltaTone(
  direction: StatDirection,
  goodWhen: "up" | "down" = "up"
): StatTone {
  if (direction === "same") return "neutral"
  return direction === goodWhen ? "success" : "danger"
}

/**
 * How the 4px top bar of a KpiCard is drawn. A custom colour (`barColor`, any CSS colour such as `var(--chart-2)`)
 * wins over the tone (`bar`). Returns nothing when neither is given.
 */
function kpiBarSpec(
  bar?: StatTone,
  barColor?: string
): { className?: string; style?: { backgroundColor: string } } | undefined {
  if (barColor) return { style: { backgroundColor: barColor } }
  if (bar) return { className: statBarClass(bar) }
  return undefined
}

/** Class of the big number of a KpiCard: `lg` is one step larger. */
function kpiValueSizeClass(size: "default" | "lg" = "default"): string {
  return size === "lg" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
}

export {
  kpiBarSpec,
  kpiValueSizeClass,
  statBadgeVariant,
  statDeltaTone,
  statBarClass,
  statTextClass,
}
export type { StatBadgeVariant, StatDirection, StatTone }
