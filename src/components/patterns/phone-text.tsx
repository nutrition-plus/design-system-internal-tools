import * as React from "react"

/** Displays the server-provided value unchanged; masking belongs at the data source. */
function PhoneText({ children, ...props }: React.ComponentProps<"span">) {
  return <span {...props}>{children}</span>
}

export { PhoneText }
