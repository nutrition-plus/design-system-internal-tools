import * as React from "react";
/**
 * A vertical stack of small lines that makes one dense table cell, so a row can group related data in one column
 * instead of spreading it over many thin ones.
 */
declare function CellStack({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
type LabeledLineProps = Omit<React.ComponentProps<"span">, "children"> & {
    /** Muted small label before the value. */
    label: React.ReactNode;
    /** The value. It is cut with an ellipsis when it does not fit; set `title` to show it in full. */
    children: React.ReactNode;
};
/** One line of a CellStack: a muted label and its value. */
declare function LabeledLine({ label, children, className, ...props }: LabeledLineProps): React.JSX.Element;
export { CellStack, LabeledLine };
export type { LabeledLineProps };
