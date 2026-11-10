import * as React from "react";
import { Badge } from "../ui/badge";
/** The caller supplies the blocker label; the icon supplements the text. */
declare function BlockerBadge({ children, variant, ...props }: React.ComponentProps<typeof Badge>): React.JSX.Element;
export { BlockerBadge };
