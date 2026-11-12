import * as React from "react";
type NoPermissionProps = Omit<React.ComponentProps<"div">, "title"> & {
    /** Default: "ไม่มีสิทธิ์เปิดหน้านี้". */
    title?: string;
    /** Default: asks the user to contact an administrator. */
    description?: React.ReactNode;
    /** An optional button or link, for example "go to a page you can use". */
    action?: React.ReactNode;
};
/** A centred panel that says the user may not open this page or section. */
declare function NoPermission({ title, description, action, className, ...props }: NoPermissionProps): React.JSX.Element;
type PermissionGateProps = {
    /** The app's own check (for example from its role or capability table). */
    allowed: boolean;
    /** Shown when not allowed. Default: nothing. */
    fallback?: React.ReactNode;
    children: React.ReactNode;
};
/**
 * Shows its children only when `allowed`. This hides the UI only; it is not protection, so the server must check
 * the permission on every request as well.
 */
declare function PermissionGate({ allowed, fallback, children, }: PermissionGateProps): React.JSX.Element;
export { NoPermission, PermissionGate };
export type { NoPermissionProps, PermissionGateProps };
