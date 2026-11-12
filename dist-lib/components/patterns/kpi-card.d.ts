import * as React from "react";
import { Card } from "../ui/card";
import { type StatTone } from "./stat-tone";
type KpiCardProps = Omit<React.ComponentProps<typeof Card>, "children"> & {
    /** Small uppercase caption above the number. */
    label: string;
    /** The big number, already formatted by the app. */
    value: React.ReactNode;
    /** One line under the number. */
    sub?: React.ReactNode;
    /** Colour of the big number. Default: neutral. */
    tone?: StatTone;
    /** Size of the big number. Default: `default`; `lg` is one step larger. */
    size?: "default" | "lg";
    /** Draws a coloured bar on the top edge in this tone. */
    bar?: StatTone;
    /** Draws the 4px top bar in any CSS colour, for example `var(--chart-2)`. Wins over `bar`. */
    barColor?: string;
    /** A pill or any small element, for example a StatPill. Position: see `pillPlacement`. */
    pill?: React.ReactNode;
    /** Where the pill goes: under the text (`below`, default) or next to the big number (`inline`). */
    pillPlacement?: "below" | "inline";
    /** Any other small line under the pill. */
    note?: React.ReactNode;
    /** Link target. How it looks depends on `linkPlacement`. */
    href?: string;
    /**
     * `line` (default): a link line at the bottom of the card, shown only when `linkLabel` is given.
     * `card`: the whole card is the link (the card gets a hover fill). Its accessible name is `linkLabel`, or `label`.
     */
    linkPlacement?: "line" | "card";
    /** Text of the link line, and the accessible name of a whole-card link. */
    linkLabel?: string;
    /** The element or component that draws the link, for example the router's `Link`. Default: `a`. */
    linkComponent?: React.ElementType;
};
/**
 * A figure card: label, big number in a tone colour, sub text, optional top bar (tone or any colour), pill (below or
 * beside the number), note and link (a line, or the whole card).
 */
declare function KpiCard({ label, value, sub, tone, size, bar, barColor, pill, pillPlacement, note, href, linkPlacement, linkLabel, linkComponent: LinkTag, className, ...props }: KpiCardProps): React.JSX.Element;
export { KpiCard };
export type { KpiCardProps };
