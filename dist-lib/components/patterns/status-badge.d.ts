import * as React from "react";
import { Badge } from "../ui/badge";
/** The caller supplies the domain label and semantic badge variant. */
declare function StatusBadge({ children, variant, ...props }: React.ComponentProps<typeof Badge>): React.JSX.Element;
export { StatusBadge };
