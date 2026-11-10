import * as React from "react"
import { AlertTriangleIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

/** The caller supplies the blocker label; the icon supplements the text. */
function BlockerBadge({
  children,
  variant = "destructive",
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge variant={variant} {...props}>
      <AlertTriangleIcon data-icon="inline-start" aria-hidden="true" />
      {children}
    </Badge>
  )
}

export { BlockerBadge }
