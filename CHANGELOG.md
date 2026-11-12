# Changelog

## 0.7.5 — 2026-11-12

### Added
- `StatDelta`: a small "change versus before" pill with an arrow (`direction` up, down or same; `goodWhen` says which direction is good, default up). Green, red or grey. The app writes the text. Use it in the `pill` slot of `KpiCard`. Pure helper `statDeltaTone` is exported too.
- `Combobox` props `searchPlaceholder` (the search field text, default "ค้นหา"), `search(options, text)` (own search instead of "label contains the typed text"; "add new" follows the same rule as before), `invalid` (`aria-invalid` and the destructive border on the trigger), and `emptyText` can now be a function of the typed text. Pure helpers `searchComboboxOptions` and `resolveEmptyText` are exported too.

### Changed
- `Combobox` `placeholder` now means the text on the trigger button while nothing is picked (muted colour). In 0.7.0 it meant the search field; that text is now `searchPlaceholder`. Breaking, but 0.7.0 was released only hours ago.

## 0.7.0 — 2026-11-12

### Added
- `Combobox`: a dropdown you can type in (Popover + Command). It narrows the list as you type and can offer an "add new" row (`onCreate`, `createLabel`). Thai default texts, overridable with `placeholder` and `emptyText`. Pure helpers `filterComboboxOptions` and `canCreateFromText` are exported too.
- `RowFlag`: an icon marker (`tone` danger or info) for the first cell of a table row. The row gets a light tint and a 5px bar on its first cell (`data-row-flag`, needs `:has()`, iPadOS 15.4+).
- `CellStack` and `LabeledLine`: a stack of small lines for one dense table cell, and a muted label with its value.
- `StatPill`: a coloured pill with tabular digits for an amount or a number (`tone` info, success, warning, danger, neutral). The app formats the text.
- `KpiCard`: label, big number in a tone colour, sub text, optional top bar, pill, note and link.
- `StickyActions` and `FormSection`: an action bar stuck to the bottom of a scrolling sheet or dialog, and a titled group of fields in an edit form.

### Changed
- Tables: the heading row keeps the tinted header colour even when an app gives body rows a background. Apps no longer need their own override.
- Tables: opt-in sticky first column. Put `data-sticky-first` on `<Table>` to keep the first column in view while the table scrolls sideways (the table is also as wide as its content and does not wrap). Tables without the attribute look the same as before.

## 0.6.0 — 2026-11-10

### Added
- `AppShell` nav: a sub-item can have its own `children` (new type `NavSubItem`). They are shown indented below it in the expanded sidebar, and as indented items in the collapsed rail's menu. Use it to group a few views under one view, for example a "Work queue" item with "To review" and "Ready to book" under it.

## 0.5.0 — 2026-11-10

### Added
- `ColumnLayoutDataTable` and `ColumnLayoutTable`: tables whose columns the user can move and resize. The layout is remembered per `tableId` in localStorage (`moove-table:<tableId>`). `ColumnLayoutDataTable` draws a TanStack table (same markup and row-click rule as `DataTable`); `ColumnLayoutTable` draws plain rows from a column list, with optional pinned columns and a footer.
- `useColumnLayout(tableId, movableIds)` and `ColumnLayoutControls`: one "คอลัมน์" button to show or hide, move (arrows, 44px targets) and reset the columns. Resize works by touch, pen, mouse and keyboard.
- `DataTableToolbar` prop `columnsMenu` (default `true`). Set it to `false` when the page draws `ColumnLayoutControls`, so there is one "คอลัมน์" button, not two.
- Base styles for the resize handle and the fixed-width mode (`data-layout="fixed"`) in `base.css`.

## 0.4.1 — 2026-11-10

### Fixed
- `AppShell`: when the sidebar is collapsed to the icon rail on desktop, a nav item with `children` now opens a menu to the right of its icon, so the sub-items can still be chosen. Before, the sub-items were hidden and tapping the icon did nothing visible. The expanded sidebar and the mobile Sheet are unchanged.

## 0.4.0 — 2026-11-10

### Added
- `StatusBadge`, `BlockerBadge`, `PhoneText`, and `ReasonDialog` as reusable patterns. Applications supply their own labels and status mapping; `PhoneText` displays the server-provided value without masking it.

## 0.3.2 — 2026-11-04

### Fixed
- `package.json` version now matches the release tag. Tags `v0.3.0` and `v0.3.1` still report `0.2.0`.
- Install commands in the README and the Storybook guide point to `v0.3.2` and the real repository URL.

### Changed
- The package is internal only. `package.json` is `private` again, so `npm publish` is blocked; installing from git still works.
- Install over SSH (`git+ssh://`), since the repository will be private. The Storybook guide explains how to give a consumer's CI read access with a deploy key.

## 0.3.1 — 2026-11-03

### Added
- `AppShell` `brand` prop: company logo and name at the top of the sidebar (shadcn sidebar-07 pattern). Collapses to the logo; without `logo` it shows the first letter of `name`.

### Changed
- `AppShell`: the collapse button moved from the top bar into the sidebar header, as a small round button straddling the sidebar's right edge, level with the logo (chevron left when open, right when collapsed). In the mobile Sheet it is a close button inside the header.
- `AppShell`: no top bar on screens ≥ 768px, so content starts at the top. Below 768px a slim bar keeps the button to open the menu and the brand name.

### Removed (breaking)
- `AppShell` props `breadcrumbs` and `headerEnd`. Put page status such as the last sync time in `PageHeader` `meta` or `actions`. This shipped in a patch release; check `AppShell` usage when you upgrade from 0.3.0 or earlier.

## 0.3.0 — 2026-11-02

### Added
- `Input` `size` prop (`"sm"` | `"default"`). `size="sm"` uses the compact control height (`h-control-sm`) with tighter padding and smaller text.

### Changed
- `Select` `size="sm"` trigger has tighter padding and gap and smaller text.
- `dist-lib/index.js` starts with `"use client"`, so server components in the Next.js App Router can import them.

## 0.2.0 — 2026-11-02

### Added
- Installable package `@moove/design-system` (`bun add` from git): `dist-lib/` (ESM + type declarations, committed and checked in CI) and `styles.css` (tokens, fonts, base, chart themes, Tailwind and shadcn imports).
- Barrel export `src/index.ts` for all components, patterns, `dataTableFeatures`, `use-mobile` and `cn`.

### Changed
- `package.json` is no longer `private`. React and Tailwind are peer dependencies; components' runtime libraries are dependencies.
- `src/index.css` now imports `src/styles/moove.css`.

## 0.1.0 — 2026-10-30

### Added
- Design tokens (DTCG JSON) for color, typography, spacing, radius, border, shadow, motion and density (comfortable 44px / compact 32px), with a generator and automated contrast tests (40 pairs).
- Fonts: IBM Plex Sans Thai, IBM Plex Sans and IBM Plex Mono, self-hosted via Fontsource, chosen after a side-by-side comparison.
- shadcn/ui components (radix-nova) restyled to MOOVE tokens: Button, Input, InputGroup, Textarea, Select, Checkbox, Badge (+ BadgeDot, status variants), Alert (status variants), Dialog, AlertDialog, Sheet, Tabs (line + segmented), Card (+ muted variant), Table, Sidebar, Breadcrumb, Pagination, Field, Empty, Skeleton, Spinner, Sonner, Tooltip, DropdownMenu, Popover, Command, ToggleGroup, ScrollArea, Separator.
- Patterns: DataTable (TanStack Table v9: toolbar, faceted filter, column picker, sortable headers with aria-sort, pagination, loading/empty/error), ConfirmDialog, EmptyState/ErrorState, PageHeader, AppShell.
- Storybook (port 8000) with Foundations, Components, Patterns, Examples (OMS order list + order form with review annotations) and Guides.
- shadcn registry `@moove` (38 items).

### Changed (vs. shadcn defaults)
- Badge default variant is `secondary` instead of `default`.
- Destructive button is a solid fill (#DC2626) instead of a tinted one.
- Radius scale reduced (6px controls, 8px cards).
