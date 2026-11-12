import { describe, expect, test } from "bun:test"

import {
  canCreateFromText,
  filterComboboxOptions,
  resolveEmptyText,
  searchComboboxOptions,
} from "../src/components/patterns/combobox-search"
import {
  statBadgeVariant,
  statBarClass,
  statDeltaTone,
  statTextClass,
} from "../src/components/patterns/stat-tone"

const options = [
  { value: "a", label: "Apple Juice" },
  { value: "b", label: "Banana  Shake" },
  { value: "ส1", label: "ส้ม" },
]

describe("filterComboboxOptions", () => {
  test("empty or blank text keeps all options", () => {
    expect(filterComboboxOptions(options, "")).toHaveLength(3)
    expect(filterComboboxOptions(options, "   ")).toHaveLength(3)
  })
  test("ignores case and extra spaces", () => {
    expect(filterComboboxOptions(options, "APPLE")).toEqual([options[0]])
    expect(filterComboboxOptions(options, "banana shake")).toEqual([options[1]])
  })
  test("matches Thai text and returns nothing for no match", () => {
    expect(filterComboboxOptions(options, "ส้ม")).toEqual([options[2]])
    expect(filterComboboxOptions(options, "zzz")).toEqual([])
  })
  test("returns a copy", () => {
    expect(filterComboboxOptions(options, "")).not.toBe(options)
  })
})

describe("canCreateFromText", () => {
  test("not offered for empty text", () => {
    expect(canCreateFromText(options, "")).toBe(false)
    expect(canCreateFromText(options, "  ")).toBe(false)
  })
  test("not offered when a label or value matches exactly", () => {
    expect(canCreateFromText(options, "apple juice")).toBe(false)
    expect(canCreateFromText(options, " A ")).toBe(false)
  })
  test("offered for a partial or new text", () => {
    expect(canCreateFromText(options, "apple")).toBe(true)
    expect(canCreateFromText(options, "Mango")).toBe(true)
  })
})

describe("stat tones", () => {
  test("badge variant mapping", () => {
    expect(statBadgeVariant("danger")).toBe("destructive")
    expect(statBadgeVariant("neutral")).toBe("secondary")
    expect(statBadgeVariant("info")).toBe("info")
    expect(statBadgeVariant("success")).toBe("success")
    expect(statBadgeVariant("warning")).toBe("warning")
  })
  test("text and bar classes", () => {
    expect(statTextClass("danger")).toBe("text-danger-foreground")
    expect(statTextClass("neutral")).toBe("text-foreground")
    expect(statBarClass("success")).toBe("bg-success")
    expect(statBarClass("neutral")).toBe("bg-border")
  })
})

describe("searchComboboxOptions", () => {
  test("without own search it filters by label", () => {
    expect(searchComboboxOptions(options, "apple")).toEqual([options[0]])
  })
  test("with own search it uses that and gets all options and the text", () => {
    const own = (all: typeof options, text: string) =>
      all.filter((o) => o.value === text)
    expect(searchComboboxOptions(options, "b", own)).toEqual([options[1]])
  })
  test("own search does not change how add new is decided", () => {
    const own = () => []
    expect(searchComboboxOptions(options, "apple juice", own)).toEqual([])
    expect(canCreateFromText(options, "apple juice")).toBe(false)
    expect(canCreateFromText(options, "apple")).toBe(true)
  })
})

describe("resolveEmptyText", () => {
  test("a string is returned as is", () => {
    expect(resolveEmptyText("none", "x")).toBe("none")
  })
  test("a function gets the typed text", () => {
    expect(resolveEmptyText((t) => `no ${t}`, "abc")).toBe("no abc")
  })
})

describe("statDeltaTone", () => {
  test("same is neutral", () => {
    expect(statDeltaTone("same")).toBe("neutral")
    expect(statDeltaTone("same", "down")).toBe("neutral")
  })
  test("up is good by default", () => {
    expect(statDeltaTone("up")).toBe("success")
    expect(statDeltaTone("down")).toBe("danger")
  })
  test("goodWhen down flips the colours", () => {
    expect(statDeltaTone("down", "down")).toBe("success")
    expect(statDeltaTone("up", "down")).toBe("danger")
  })
})
