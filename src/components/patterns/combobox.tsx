"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  canCreateFromText,
  filterComboboxOptions,
  type ComboboxOption,
} from "./combobox-search"

type ComboboxProps = {
  value: string
  options: ComboboxOption[]
  onChange: (value: string) => void
  /** Called with the typed text when the user picks the "add new" row. Without it the list cannot add. */
  onCreate?: (text: string) => void
  /** Text of the "add new" row for the typed text. */
  createLabel?: (text: string) => string
  /** Shown in the search field. */
  placeholder?: string
  /** Shown when nothing matches and "add new" is not offered. */
  emptyText?: string
  ariaLabel: string
  className?: string
}

/**
 * A dropdown you can type in. The list narrows as you type; when nothing matches exactly it can offer "add new" and
 * hands the typed text to the page. Rows are 44px for touch. Choosing a row closes the list and clears the text.
 */
function Combobox({
  value,
  options,
  onChange,
  onCreate,
  createLabel = (text) => `เพิ่ม "${text}"`,
  placeholder = "ค้นหา",
  emptyText = "ไม่พบรายการ",
  ariaLabel,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState("")
  const shown = filterComboboxOptions(options, text)
  const canCreate = onCreate !== undefined && canCreateFromText(options, text)
  const current = options.find((o) => o.value === value)

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setText("")
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label={ariaLabel}
          className={cn("min-h-11 w-64 justify-between font-normal", className)}
        >
          <span className="truncate">{current?.label ?? ""}</span>
          <ChevronsUpDownIcon data-icon="inline-end" className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-(--radix-popover-trigger-width) min-w-72 p-0"
      >
        <Command shouldFilter={false}>
          <CommandInput
            value={text}
            onValueChange={setText}
            placeholder={placeholder}
          />
          <CommandList>
            {shown.length === 0 && !canCreate && (
              <CommandEmpty>{emptyText}</CommandEmpty>
            )}
            <CommandGroup>
              {shown.map((o) => (
                <CommandItem
                  key={o.value}
                  value={o.value}
                  className="min-h-11"
                  onSelect={() => {
                    onChange(o.value)
                    setOpen(false)
                    setText("")
                  }}
                >
                  <span className="flex-1">{o.label}</span>
                  {o.value === value && <CheckIcon />}
                </CommandItem>
              ))}
              {canCreate && (
                <CommandItem
                  value={`__create__${text}`}
                  className="min-h-11 font-medium text-primary"
                  onSelect={() => {
                    const typed = text.trim()
                    setOpen(false)
                    setText("")
                    onCreate?.(typed)
                  }}
                >
                  <PlusIcon />
                  {createLabel(text.trim())}
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
export type { ComboboxProps }
