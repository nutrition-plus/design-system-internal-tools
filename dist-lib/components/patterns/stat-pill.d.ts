import * as React from "react";
import { Badge } from "../ui/badge";
import { type StatTone } from "./stat-tone";
type StatPillProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
    /** Colour says what the figure is. Default: neutral. */
    tone?: StatTone;
};
/**
 * A coloured pill that shows an amount or a number, with tabular digits. It is unit-agnostic: the app formats the
 * text (currency, decimals, unit) and passes it as children.
 */
declare function StatPill({ tone, className, ...props }: StatPillProps): React.JSX.Element;
export { StatPill };
export type { StatPillProps };
