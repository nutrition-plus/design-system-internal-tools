import * as React from "react";
import type { LucideIcon } from "lucide-react";
type RowFlagTone = "danger" | "info";
type RowFlagProps = Omit<React.ComponentProps<"span">, "children"> & {
    /** danger tints the row red; info tints it blue. */
    tone: RowFlagTone;
    /** Lucide icon component. Default: triangle-alert for danger, sparkles for info. */
    icon?: LucideIcon;
    /** Used as aria-label and title: the marker is not understood by colour alone. */
    label: string;
};
/**
 * A small icon marker to put inside the FIRST cell of a table row. It sets `data-row-flag`, and base.css tints the
 * whole row and draws an inset bar on the first cell. The row tint needs `:has()` (iPadOS 15.4+).
 */
declare function RowFlag({ tone, icon, label, className, ...props }: RowFlagProps): React.JSX.Element;
export { RowFlag };
export type { RowFlagProps, RowFlagTone };
