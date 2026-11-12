import * as React from "react"
import { LockIcon } from "lucide-react"
import { cn } from "cn"

type NoPermissionProps = Omit<React.ComponentProps<"div">, "title"> & {
  /** Default: "ไม่มีสิทธิ์เปิดหน้านี้". */
  title?: string
  /** Default: asks the user to contact an administrator. */
  description?: React.ReactNode
  /** An optional button or link, for example "go to a page you can use". */
  action?: React.ReactNode
}

/** A centred panel that says the user may not open this page or section. */
function NoPermission({
  title = "ไม่มีสิทธิ์เปิดหน้านี้",
  description = "บัญชีของคุณไม่มีสิทธิ์ใช้งานส่วนนี้ กรุณาติดต่อผู้ดูแลระบบ",
  action,
  className,
  ...props
}: NoPermissionProps) {
  return (
    <div
      data-slot="no-permission"
      className={cn(
        "mx-auto flex max-w-md flex-col items-center gap-3 py-16 text-center",
        className
      )}
      {...props}
    >
      <LockIcon className="size-8 text-muted-foreground" aria-hidden />
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      {action}
    </div>
  )
}

type PermissionGateProps = {
  /** The app's own check (for example from its role or capability table). */
  allowed: boolean
  /** Shown when not allowed. Default: nothing. */
  fallback?: React.ReactNode
  children: React.ReactNode
}

/**
 * Shows its children only when `allowed`. This hides the UI only; it is not protection, so the server must check
 * the permission on every request as well.
 */
function PermissionGate({
  allowed,
  fallback = null,
  children,
}: PermissionGateProps) {
  return <>{allowed ? children : fallback}</>
}

export { NoPermission, PermissionGate }
export type { NoPermissionProps, PermissionGateProps }
