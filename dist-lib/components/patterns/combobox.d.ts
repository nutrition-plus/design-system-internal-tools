import * as React from "react";
import { type ComboboxOption, type ComboboxSearch } from "./combobox-search";
type ComboboxProps = {
    value: string;
    options: ComboboxOption[];
    onChange: (value: string) => void;
    /** Called with the typed text when the user picks the "add new" row. Without it the list cannot add. */
    onCreate?: (text: string) => void;
    /** Text of the "add new" row for the typed text. */
    createLabel?: (text: string) => string;
    /** Shown on the trigger button while nothing is picked. */
    placeholder?: string;
    /** Shown in the search field. Default: "ค้นหา". */
    searchPlaceholder?: string;
    /** Shown when nothing matches and "add new" is not offered. A function gets the typed text. */
    emptyText?: string | ((text: string) => string);
    /** Own search instead of "label contains the typed text". "Add new" still follows the typed text. */
    search?: ComboboxSearch;
    /** Marks the trigger invalid (`aria-invalid` and the destructive border). */
    invalid?: boolean;
    ariaLabel: string;
    className?: string;
};
/**
 * A dropdown you can type in. The list narrows as you type; when nothing matches exactly it can offer "add new" and
 * hands the typed text to the page. Rows are 44px for touch. Choosing a row closes the list and clears the text.
 */
declare function Combobox({ value, options, onChange, onCreate, createLabel, placeholder, searchPlaceholder, emptyText, search, invalid, ariaLabel, className, }: ComboboxProps): React.JSX.Element;
export { Combobox };
export type { ComboboxProps };
