import { describe, expect, test } from "bun:test"
import { renderToString } from "react-dom/server"

import {
  DEFAULT_COLUMN_WIDTH,
  MAX_COLUMN_WIDTH,
  MIN_COLUMN_WIDTH,
  clampWidth,
  columnLayoutReducer,
  defaultLayout,
  hashText,
  isDefaultLayout,
  loadLayout,
  moveColumnBy,
  moveColumnTo,
  normalizeOrder,
  orderColumns,
  saveLayout,
  storageKey,
  tableSizing,
} from "../src/components/patterns/data-table/column-layout"
import type { ColumnLayout, LayoutStorage } from "../src/components/patterns/data-table/column-layout"
import { ColumnLayoutTable } from "../src/components/patterns/data-table/column-layout-table"

const IDS = ["a", "b", "c", "d"]

function fakeStorage(): LayoutStorage & { data: Map<string, string> } {
  const data = new Map<string, string>()
  return {
    data,
    getItem: (k) => data.get(k) ?? null,
    setItem: (k, v) => void data.set(k, v),
    removeItem: (k) => void data.delete(k),
  }
}

const brokenStorage: LayoutStorage = {
  getItem: () => {
    throw new Error("blocked")
  },
  setItem: () => {
    throw new Error("quota")
  },
  removeItem: () => {
    throw new Error("blocked")
  },
}

describe("clampWidth", () => {
  test("keeps widths between the minimum and the maximum, rounded", () => {
    expect(clampWidth(10)).toBe(MIN_COLUMN_WIDTH)
    expect(clampWidth(5000)).toBe(MAX_COLUMN_WIDTH)
    expect(clampWidth(120.6)).toBe(121)
    expect(clampWidth(Number.NaN)).toBe(DEFAULT_COLUMN_WIDTH)
  })
})

describe("normalizeOrder", () => {
  test("drops unknown and repeated ids", () => {
    expect(normalizeOrder(["x", "b", "a", "b", "d", "c"], IDS)).toEqual(["b", "a", "d", "c"])
  })
  test("a new column goes right after its left neighbour from the default order", () => {
    // c is new; its default left neighbour is b, so it lands right after b.
    expect(normalizeOrder(["d", "b", "a"], IDS)).toEqual(["d", "b", "c", "a"])
  })
  test("a new first column goes to the front", () => {
    expect(normalizeOrder(["c", "b", "d"], IDS)).toEqual(["a", "c", "b", "d"])
  })
  test("empty saved order gives the default", () => {
    expect(normalizeOrder([], IDS)).toEqual(IDS)
  })
})

describe("moving columns", () => {
  test("moveColumnTo puts the column in the target's place", () => {
    expect(moveColumnTo(IDS, "a", "c")).toEqual(["b", "c", "a", "d"])
    expect(moveColumnTo(IDS, "d", "a")).toEqual(["d", "a", "b", "c"])
    expect(moveColumnTo(IDS, "a", "zzz")).toEqual(IDS)
  })
  test("moveColumnBy moves one step and stops at the ends", () => {
    expect(moveColumnBy(IDS, "b", 1)).toEqual(["a", "c", "b", "d"])
    expect(moveColumnBy(IDS, "b", -1)).toEqual(["b", "a", "c", "d"])
    expect(moveColumnBy(IDS, "a", -1)).toEqual(IDS)
    expect(moveColumnBy(IDS, "d", 1)).toEqual(IDS)
  })
  test("moveColumnBy skips hidden columns", () => {
    // c is hidden: moving b right jumps over it to d's place.
    expect(moveColumnBy(IDS, "b", 1, ["a", "b", "d"])).toEqual(["a", "c", "d", "b"])
  })
})

describe("orderColumns", () => {
  const cols = [{ id: "select" }, { id: "a" }, { id: "b" }, { id: "flags" }, { id: "c" }, { id: "actions" }]
  test("pinned columns stay at the ends, the rest follow the layout", () => {
    expect(orderColumns(cols, ["c", "a", "b"], ["select"], ["actions"]).map((c) => c.id)).toEqual(["select", "c", "a", "b", "flags", "actions"])
  })
  test("pinned ids in the order are ignored", () => {
    expect(orderColumns(cols, ["actions", "b", "select", "a", "c"], ["select"], ["actions"]).map((c) => c.id)).toEqual(["select", "b", "a", "c", "flags", "actions"])
  })
})

describe("columnLayoutReducer", () => {
  const start = defaultLayout(IDS)
  test("move and moveTo change the order", () => {
    expect(columnLayoutReducer(start, { type: "move", ids: IDS, id: "a", delta: 1 }).order).toEqual(["b", "a", "c", "d"])
    expect(columnLayoutReducer(start, { type: "moveTo", ids: IDS, id: "d", targetId: "b" }).order).toEqual(["a", "d", "b", "c"])
  })
  test("a move that changes nothing returns the same object", () => {
    expect(columnLayoutReducer(start, { type: "move", ids: IDS, id: "a", delta: -1 })).toBe(start)
  })
  test("resize clamps and is a no-op when the width is the same", () => {
    const s1 = columnLayoutReducer(start, { type: "resize", id: "b", width: 20 })
    expect(s1.widths).toEqual({ b: MIN_COLUMN_WIDTH })
    expect(columnLayoutReducer(s1, { type: "resize", id: "b", width: MIN_COLUMN_WIDTH })).toBe(s1)
  })
  test("ensureWidths only fills columns without a width", () => {
    const s1 = columnLayoutReducer(start, { type: "resize", id: "b", width: 300 })
    const s2 = columnLayoutReducer(s1, { type: "ensureWidths", widths: { a: 40.4, b: 120, c: 0 } })
    expect(s2.widths).toEqual({ a: 40, b: 300 })
    expect(columnLayoutReducer(s2, { type: "ensureWidths", widths: { a: 99 } })).toBe(s2)
  })
  test("reset goes back to the default", () => {
    const s1 = columnLayoutReducer(columnLayoutReducer(start, { type: "resize", id: "b", width: 300 }), { type: "move", ids: IDS, id: "a", delta: 1 })
    const s2 = columnLayoutReducer(s1, { type: "reset", ids: IDS })
    expect(s2).toEqual(start)
    expect(isDefaultLayout(s2, IDS)).toBe(true)
  })
  test("load normalises a saved layout against the current columns", () => {
    const s1 = columnLayoutReducer(start, { type: "load", ids: IDS, layout: { order: ["c", "gone", "a"], widths: { a: 9999, b: -1 } } })
    // "gone" is dropped; b follows a and d follows c (their default left neighbours).
    expect(s1.order).toEqual(["c", "d", "a", "b"])
    expect(s1.widths).toEqual({ a: MAX_COLUMN_WIDTH })
  })
})

describe("localStorage load and save", () => {
  const custom: ColumnLayout = { order: ["b", "a", "c", "d"], widths: { a: 200 } }
  test("round-trips a custom layout under the documented key", () => {
    const store = fakeStorage()
    saveLayout(store, "home-queue", custom, IDS)
    expect([...store.data.keys()]).toEqual(["moove-table:home-queue"])
    expect(storageKey("home-queue")).toBe("moove-table:home-queue")
    expect(loadLayout(store, "home-queue")).toEqual(custom)
  })
  test("saving the default layout removes the entry", () => {
    const store = fakeStorage()
    saveLayout(store, "t", custom, IDS)
    saveLayout(store, "t", defaultLayout(IDS), IDS)
    expect(store.data.size).toBe(0)
    expect(loadLayout(store, "t")).toBeNull()
  })
  test("broken, old or wrong-shape data is ignored", () => {
    const store = fakeStorage()
    store.data.set(storageKey("t"), "{not json")
    expect(loadLayout(store, "t")).toBeNull()
    store.data.set(storageKey("t"), JSON.stringify({ v: 0, order: ["a"], widths: {} }))
    expect(loadLayout(store, "t")).toBeNull()
    store.data.set(storageKey("t"), JSON.stringify({ v: 1, order: [1, 2], widths: {} }))
    expect(loadLayout(store, "t")).toBeNull()
    store.data.set(storageKey("t"), JSON.stringify({ v: 1, order: ["a"], widths: { a: "wide", b: 90 } }))
    expect(loadLayout(store, "t")).toEqual({ order: ["a"], widths: { b: 90 } })
  })
  test("blocked or missing storage never throws", () => {
    expect(() => saveLayout(brokenStorage, "t", custom, IDS)).not.toThrow()
    expect(loadLayout(brokenStorage, "t")).toBeNull()
    expect(() => saveLayout(null, "t", custom, IDS)).not.toThrow()
    expect(loadLayout(null, "t")).toBeNull()
  })
})

describe("tableSizing", () => {
  test("no widths keeps the browser's automatic layout", () => {
    expect(tableSizing(IDS, {})).toEqual({ fixed: false, colWidths: [undefined, undefined, undefined, undefined], totalWidth: 0 })
  })
  test("any width switches every column to a fixed width", () => {
    expect(tableSizing(["a", "b"], { a: 100 })).toEqual({ fixed: true, colWidths: [100, DEFAULT_COLUMN_WIDTH], totalWidth: 100 + DEFAULT_COLUMN_WIDTH })
  })
})

test("hashText is stable and short", () => {
  expect(hashText("a|b")).toBe(hashText("a|b"))
  expect(hashText("a|b")).not.toBe(hashText("b|a"))
})

test("ColumnLayoutTable server-renders with the default layout, resize handles and the arrange button", () => {
  type Row = { id: string; name: string; n: number }
  const html = renderToString(
    <ColumnLayoutTable<Row>
      tableId="test-render"
      rows={[{ id: "1", name: "x", n: 2 }]}
      rowKey={(r) => r.id}
      columns={[
        { id: "name", label: "Name", cell: (r) => r.name },
        { id: "n", label: "N", cell: (r) => r.n, align: "right" },
        { id: "actions", label: "Act", cell: () => null, pin: "end" },
      ]}
    />,
  )
  expect(html).toContain("คอลัมน์")
  // Two movable columns get a handle; the pinned one does not.
  expect(html.match(/role="separator"/g)?.length).toBe(2)
  expect(html).not.toContain('data-layout="fixed"')
  expect(html).not.toContain("รีเซ็ตคอลัมน์")
})
