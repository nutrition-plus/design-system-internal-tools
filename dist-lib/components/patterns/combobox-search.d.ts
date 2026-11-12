type ComboboxOption = {
    value: string;
    label: string;
};
/** Options whose label contains the typed text (case and extra spaces ignored). Empty text keeps all options. */
declare function filterComboboxOptions(options: readonly ComboboxOption[], text: string): ComboboxOption[];
/** "Add new" is offered when something was typed and no option has exactly that label or value. */
declare function canCreateFromText(options: readonly ComboboxOption[], text: string): boolean;
/** An app's own search: gets all options and the typed text, returns the options to show. */
type ComboboxSearch = (options: ComboboxOption[], text: string) => ComboboxOption[];
/** The options to show: the app's own `search` when given, else "label contains the typed text". */
declare function searchComboboxOptions(options: readonly ComboboxOption[], text: string, search?: ComboboxSearch): ComboboxOption[];
/** The "nothing found" text: a fixed string, or a function of the typed text. */
declare function resolveEmptyText(emptyText: string | ((text: string) => string), text: string): string;
export { canCreateFromText, filterComboboxOptions, resolveEmptyText, searchComboboxOptions };
export type { ComboboxOption, ComboboxSearch };
