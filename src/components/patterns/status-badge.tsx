import * as React from "react"

import { Badge, BadgeDot } from "@/components/ui/badge"

/** The caller supplies the domain label and semantic badge variant. */
function StatusBadge({
  children,
  variant = "secondary",
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge variant={variant} {...props}>
      <BadgeDot />
      {children}
    </Badge>
  )
}

export { StatusBadge }
