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

export { statBadgeVariant, statBarClass, statTextClass }
export type { StatBadgeVariant, StatTone }
