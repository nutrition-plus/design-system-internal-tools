import { type AriaAttributes, type CSSProperties, type ReactNode } from "react";
import { tableSizing } from "./column-layout";
import type { ArrangeItem, ColumnLayoutApi } from "./column-layout";
type Sizing = ReturnType<typeof tableSizing>;
type HeadProps = {
    layout: ColumnLayoutApi;
    id: string;
    label: string;
    movable: boolean;
    resizable: boolean;
    className?: string;
    ariaSort?: AriaAttributes["aria-sort"];
    children?: ReactNode;
};
declare function LayoutHead({ layout, id, label, movable, resizable, className, ariaSort, children, }: HeadProps): import("react").JSX.Element;
declare function LayoutColGroup({ ids, sizing }: {
    ids: string[];
    sizing: Sizing;
}): import("react").JSX.Element | null;
declare function FillerHead({ sizing }: {
    sizing: Sizing;
}): import("react").JSX.Element | null;
declare function FillerCell({ sizing }: {
    sizing: Sizing;
}): import("react").JSX.Element | null;
declare function tableProps(sizing: Sizing): {
    "data-layout"?: string;
    style?: CSSProperties;
};
type ColumnControlTable = {
    getAllLeafColumns: () => {
        id: string;
        getCanHide: () => boolean;
        getIsVisible: () => boolean;
        toggleVisibility: (visible?: boolean) => void;
        columnDef: {
            meta?: unknown;
            header?: unknown;
        };
    }[];
    resetColumnVisibility: () => void;
};
declare function ColumnLayoutControls({ layout, table, items: plain, }: {
    layout: ColumnLayoutApi;
    table?: ColumnControlTable;
    items?: ArrangeItem[];
}): import("react").JSX.Element;
export { ColumnLayoutControls, FillerCell, FillerHead, LayoutColGroup, LayoutHead, tableProps, };
