type ComboboxOption = {
    value: string;
    label: string;
};
/** Options whose label contains the typed text (case and extra spaces ignored). Empty text keeps all options. */
declare function filterComboboxOptions(options: readonly ComboboxOption[], text: string): ComboboxOption[];
/** "Add new" is offered when something was typed and no option has exactly that label or value. */
declare function canCreateFromText(options: readonly ComboboxOption[], text: string): boolean;
export { canCreateFromText, filterComboboxOptions };
export type { ComboboxOption };
