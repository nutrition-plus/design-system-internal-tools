import * as React from "react";
type ReasonDialogProps = {
    trigger: React.ReactElement;
    title: string;
    description: string;
    reasonLabel: string;
    confirmLabel: string;
    cancelLabel?: string;
    placeholder?: string;
    onConfirm: (reason: string) => void | Promise<void>;
};
/** Collects a non-empty reason; a failed submission keeps the value for retry. */
declare function ReasonDialog({ trigger, title, description, reasonLabel, confirmLabel, cancelLabel, placeholder, onConfirm, }: ReasonDialogProps): React.JSX.Element;
export { ReasonDialog };
export type { ReasonDialogProps };
