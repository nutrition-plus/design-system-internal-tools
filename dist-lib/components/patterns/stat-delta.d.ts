import * as React from "react";
import { Badge } from "../ui/badge";
import { type StatDirection } from "./stat-tone";
type StatDeltaProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
    /** Which way the figure moved compared with before. */
    direction: StatDirection;
    /** Which direction is good. Default: "up". Use "down" when a lower figure is better. */
    goodWhen?: "up" | "down";
};
/**
 * A small "change versus before" pill with an arrow. Green when the figure moved the good way, red when it moved the
 * other way, grey when it did not change. The app writes the text (for example "+150") as children.
 */
declare function StatDelta({ direction, goodWhen, className, children, ...props }: StatDeltaProps): React.JSX.Element;
export { StatDelta };
export type { StatDeltaProps };
