// Pure helpers of Combobox, kept free of React so they can be unit tested.

type ComboboxOption = { value: string; label: string }

const normalize = (s: string): string =>
  s.normalize("NFC").toLowerCase().replace(/\s+/g, " ").trim()

/** Options whose label contains the typed text (case and extra spaces ignored). Empty text keeps all options. */
function filterComboboxOptions(
  options: readonly ComboboxOption[],
  text: string
): ComboboxOption[] {
  const q = normalize(text)
  if (!q) return [...options]
  return options.filter((o) => normalize(o.label).includes(q))
}

/** "Add new" is offered when something was typed and no option has exactly that label or value. */
function canCreateFromText(
  options: readonly ComboboxOption[],
  text: string
): boolean {
  const q = normalize(text)
  if (!q) return false
  return !options.some(
    (o) => normalize(o.label) === q || normalize(o.value) === q
  )
}

export { canCreateFromText, filterComboboxOptions }
export type { ComboboxOption }
