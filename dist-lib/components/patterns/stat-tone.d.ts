type StatTone = "info" | "success" | "warning" | "danger" | "neutral";
type StatBadgeVariant = "info" | "success" | "warning" | "destructive" | "secondary";
/** The Badge variant that draws a tone. */
declare function statBadgeVariant(tone: StatTone): StatBadgeVariant;
/** Text colour class of a big number in a tone (the dark `-foreground` shades keep contrast on white). */
declare function statTextClass(tone: StatTone): string;
/** Background class of a colour bar in a tone. */
declare function statBarClass(tone: StatTone): string;
type StatDirection = "up" | "down" | "same";
/** The tone of a change: neutral when same, success when it moved the good way, else danger. */
declare function statDeltaTone(direction: StatDirection, goodWhen?: "up" | "down"): StatTone;
/**
 * How the 4px top bar of a KpiCard is drawn. A custom colour (`barColor`, any CSS colour such as `var(--chart-2)`)
 * wins over the tone (`bar`). Returns nothing when neither is given.
 */
declare function kpiBarSpec(bar?: StatTone, barColor?: string): {
    className?: string;
    style?: {
        backgroundColor: string;
    };
} | undefined;
/** Class of the big number of a KpiCard: `lg` is one step larger. */
declare function kpiValueSizeClass(size?: "default" | "lg"): string;
export { kpiBarSpec, kpiValueSizeClass, statBadgeVariant, statDeltaTone, statBarClass, statTextClass, };
export type { StatBadgeVariant, StatDirection, StatTone };
