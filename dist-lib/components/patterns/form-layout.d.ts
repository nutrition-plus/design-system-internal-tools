import * as React from "react";
type StickyActionsProps = React.ComponentProps<"div"> & {
    /** A hint line above the buttons, for example why the main button is off. */
    hint?: React.ReactNode;
};
/**
 * Action bar stuck to the bottom of a scrolling sheet or dialog, so the main button stays in reach on a long form.
 * Buttons wrap instead of overflowing; give the main button `grow` to fill the row on a narrow sheet. It cancels a
 * 16px side padding of the container (`-mx-4`); the background is `bg-popover`, which matches Sheet and Dialog.
 */
declare function StickyActions({ hint, children, className, ...props }: StickyActionsProps): React.JSX.Element;
type FormSectionProps = Omit<React.ComponentProps<"section">, "title"> & {
    title: string;
    /** A short line under the title. */
    hint?: string;
};
/** A titled group of fields inside an edit form. */
declare function FormSection({ title, hint, children, className, ...props }: FormSectionProps): React.JSX.Element;
export { FormSection, StickyActions };
export type { FormSectionProps, StickyActionsProps };
