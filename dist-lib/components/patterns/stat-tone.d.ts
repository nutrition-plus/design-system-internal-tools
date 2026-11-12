type StatTone = "info" | "success" | "warning" | "danger" | "neutral";
type StatBadgeVariant = "info" | "success" | "warning" | "destructive" | "secondary";
/** The Badge variant that draws a tone. */
declare function statBadgeVariant(tone: StatTone): StatBadgeVariant;
/** Text colour class of a big number in a tone (the dark `-foreground` shades keep contrast on white). */
declare function statTextClass(tone: StatTone): string;
/** Background class of a colour bar in a tone. */
declare function statBarClass(tone: StatTone): string;
export { statBadgeVariant, statBarClass, statTextClass };
export type { StatBadgeVariant, StatTone };
