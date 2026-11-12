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
    /** Draws a coloured bar on the top edge in this tone. */
    bar?: StatTone;
    /** A pill or any small element under the text, for example a StatPill. */
    pill?: React.ReactNode;
    /** Any other small line under the pill. */
    note?: React.ReactNode;
    /** Makes a link line at the bottom of the card. */
    href?: string;
    /** Text of the link line. Required to show the link. */
    linkLabel?: string;
};
/** A figure card: label, big number in a tone colour, sub text, optional top bar, pill, note and link. */
declare function KpiCard({ label, value, sub, tone, bar, pill, note, href, linkLabel, className, ...props }: KpiCardProps): React.JSX.Element;
export { KpiCard };
export type { KpiCardProps };
