"use client";
import * as e from "react";
import { useCallback as t, useMemo as n, useRef as r, useState as i, useSyncExternalStore as a } from "react";
import { cn as o, cn as s } from "cn";
import { AlertDialog as c, Avatar as l, Checkbox as u, Collapsible as d, Dialog as f, DropdownMenu as p, HoverCard as m, Label as h, Popover as g, Progress as _, ScrollArea as v, Select as y, Separator as ee, Slot as b, Tabs as te, Toggle as ne, ToggleGroup as re, Tooltip as x } from "radix-ui";
import { cva as S } from "class-variance-authority";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import { AlertTriangleIcon as ie, ArrowDownIcon as ae, ArrowLeftRightIcon as oe, ArrowUpIcon as se, BadgeCheckIcon as ce, CalendarIcon as le, ChartNoAxesColumnIcon as ue, CheckIcon as E, ChevronDownIcon as D, ChevronLeftIcon as de, ChevronRightIcon as O, ChevronUpIcon as fe, ChevronsLeftIcon as pe, ChevronsRightIcon as me, ChevronsUpDownIcon as he, CircleCheckIcon as ge, Columns3Icon as _e, InboxIcon as ve, InfoIcon as ye, Loader2Icon as be, LogOutIcon as xe, MinusIcon as Se, MoreHorizontalIcon as Ce, OctagonXIcon as we, PanelLeftIcon as Te, PlusCircleIcon as Ee, PlusIcon as De, RefreshCwIcon as Oe, RotateCcwIcon as ke, SearchIcon as Ae, SearchXIcon as je, ServerCrashIcon as Me, SparklesIcon as Ne, TableIcon as Pe, TriangleAlertIcon as Fe, XIcon as k } from "lucide-react";
import { DayPicker as Ie, getDefaultClassNames as Le } from "react-day-picker";
import * as Re from "recharts";
import { Command as A } from "cmdk";
import { Toaster as ze } from "sonner";
import { th as Be } from "react-day-picker/locale";
import { FlexRender as Ve, columnFilteringFeature as He, columnVisibilityFeature as Ue, createFilteredRowModel as We, createPaginatedRowModel as Ge, createSortedRowModel as Ke, filterFn_arrIncludesSome as qe, filterFn_includesString as Je, globalFilteringFeature as Ye, rowPaginationFeature as Xe, rowSelectionFeature as Ze, rowSortingFeature as Qe, sortFn_alphanumeric as $e, sortFn_basic as et, sortFn_datetime as tt, sortFn_text as nt, tableFeatures as rt } from "@tanstack/react-table";
// src/components/ui/button.tsx
var it = S("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors duration-(--duration-fast) outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--icon-size)", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary-hover",
			outline: "border-input bg-background text-primary shadow-xs hover:bg-accent aria-expanded:bg-accent",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover aria-expanded:bg-secondary-hover",
			ghost: "text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-control gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-control-sm gap-1.5 px-3 in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-4",
			lg: "h-control-lg gap-2 px-5 text-base has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
			icon: "size-control",
			"icon-xs": "size-6 rounded-md in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-control-sm in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-4",
			"icon-lg": "size-control-lg"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function j({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let a = r ? b.Root : "button";
	return /* @__PURE__ */ w(a, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: s(it({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
// src/components/ui/alert-dialog.tsx
function at({ ...e }) {
	return /* @__PURE__ */ w(c.Root, {
		"data-slot": "alert-dialog",
		...e
	});
}
function ot({ ...e }) {
	return /* @__PURE__ */ w(c.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...e
	});
}
function st({ ...e }) {
	return /* @__PURE__ */ w(c.Portal, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function lt({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ T(st, { children: [/* @__PURE__ */ w(ct, {}), /* @__PURE__ */ w(c.Content, {
		"data-slot": "alert-dialog-content",
		"data-size": t,
		className: s("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...n
	})] });
}
function ut({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-header",
		className: s("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", e),
		...t
	});
}
function dt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-footer",
		className: s("-mx-6 -mb-6 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-secondary px-6 py-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function ft({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-media",
		className: s("mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", e),
		...t
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Title, {
		"data-slot": "alert-dialog-title",
		className: s("font-heading type-h3 sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", e),
		...t
	});
}
function mt({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Description, {
		"data-slot": "alert-dialog-description",
		className: s("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
function ht({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ w(j, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ w(c.Action, {
			"data-slot": "alert-dialog-action",
			className: s(e),
			...r
		})
	});
}
function gt({ className: e, variant: t = "outline", size: n = "default", ...r }) {
	return /* @__PURE__ */ w(j, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ w(c.Cancel, {
			"data-slot": "alert-dialog-cancel",
			className: s(e),
			...r
		})
	});
}
// src/components/ui/alert.tsx
var _t = S("group/alert relative grid w-full gap-0.5 rounded-lg border border-l-4 px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-28 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-(--icon-size)", {
	variants: { variant: {
		default: "border-border border-l-input bg-card text-card-foreground *:data-[slot=alert-description]:text-muted-foreground",
		info: "border-info-border border-l-info bg-info-subtle text-info-foreground",
		success: "border-success-border border-l-success bg-success-subtle text-success-foreground",
		warning: "border-warning-border border-l-warning bg-warning-subtle text-warning-foreground",
		destructive: "border-danger-border border-l-danger bg-danger-subtle text-danger-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function vt({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert",
		"data-variant": t,
		role: t === "destructive" || t === "warning" ? "alert" : "status",
		className: s(_t({ variant: t }), e),
		...n
	});
}
function yt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-title",
		className: s("font-semibold group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3", e),
		...t
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-description",
		className: s("text-sm text-pretty text-current [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-2", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-action",
		className: s("absolute top-1/2 right-3 -translate-y-1/2", e),
		...t
	});
}
// src/components/ui/avatar.tsx
function St({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ w(l.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: s("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function Ct({ className: e, ...t }) {
	return /* @__PURE__ */ w(l.Image, {
		"data-slot": "avatar-image",
		className: s("aspect-square size-full rounded-full object-cover", e),
		...t
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ w(l.Fallback, {
		"data-slot": "avatar-fallback",
		className: s("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "avatar-badge",
		className: s("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "avatar-group",
		className: s("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "avatar-group-count",
		className: s("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
// src/components/ui/badge.tsx
var Ot = S("group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-4xl border border-transparent px-2.5 text-xs leading-none font-medium whitespace-nowrap transition-colors has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3.5!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary-hover",
		secondary: "bg-secondary text-foreground-secondary *:data-[slot=badge-dot]:bg-input [a]:hover:bg-secondary-hover",
		outline: "border-border bg-background text-foreground-secondary *:data-[slot=badge-dot]:bg-input [a]:hover:bg-secondary",
		accent: "bg-accent text-accent-foreground *:data-[slot=badge-dot]:bg-primary",
		success: "bg-success-subtle text-success-foreground *:data-[slot=badge-dot]:bg-success",
		warning: "bg-warning-subtle text-warning-foreground *:data-[slot=badge-dot]:bg-warning",
		destructive: "bg-danger-subtle text-danger-foreground *:data-[slot=badge-dot]:bg-danger",
		info: "bg-info-subtle text-info-foreground *:data-[slot=badge-dot]:bg-info",
		highlight: "bg-highlight-subtle text-highlight-foreground *:data-[slot=badge-dot]:bg-highlight",
		ghost: "hover:bg-muted hover:text-muted-foreground",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "secondary" }
});
function M({ className: e, variant: t = "secondary", asChild: n = !1, ...r }) {
	let i = n ? b.Root : "span";
	return /* @__PURE__ */ w(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: s(Ot({ variant: t }), e),
		...r
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "badge-dot",
		"aria-hidden": !0,
		className: s("size-1.5 shrink-0 rounded-full bg-current", e),
		...t
	});
}
// src/components/ui/breadcrumb.tsx
function At({ className: e, ...t }) {
	return /* @__PURE__ */ w("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: s(e),
		...t
	});
}
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ w("ol", {
		"data-slot": "breadcrumb-list",
		className: s("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground", e),
		...t
	});
}
function Mt({ className: e, ...t }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "breadcrumb-item",
		className: s("inline-flex items-center gap-1", e),
		...t
	});
}
function Nt({ asChild: e, className: t, ...n }) {
	let r = e ? b.Root : "a";
	return /* @__PURE__ */ w(r, {
		"data-slot": "breadcrumb-link",
		className: s("transition-colors hover:text-foreground", t),
		...n
	});
}
function Pt({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: s("font-normal text-foreground", e),
		...t
	});
}
function Ft({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: s("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ w(O, {})
	});
}
function It({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: s("flex size-5 items-center justify-center [&>svg]:size-4", e),
		...t,
		children: [/* @__PURE__ */ w(Ce, {}), /* @__PURE__ */ w("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
// src/components/ui/calendar.tsx
function Lt({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", locale: a, formatters: o, components: c, ...l }) {
	let u = Le();
	return /* @__PURE__ */ w(Ie, {
		showOutsideDays: n,
		className: s("group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:var(--control-h-sm)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, e),
		captionLayout: r,
		locale: a,
		formatters: {
			formatMonthDropdown: (e) => e.toLocaleString(a?.code, { month: "short" }),
			...o
		},
		classNames: {
			root: s("w-fit", u.root),
			months: s("relative flex flex-col gap-4 md:flex-row", u.months),
			month: s("flex w-full flex-col gap-4", u.month),
			nav: s("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", u.nav),
			button_previous: s(it({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: s(it({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
			month_caption: s("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", u.month_caption),
			dropdowns: s("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", u.dropdowns),
			dropdown_root: s("relative rounded-(--cell-radius)", u.dropdown_root),
			dropdown: s("absolute inset-0 bg-popover opacity-0", u.dropdown),
			caption_label: s("font-medium select-none", r === "label" ? "text-sm" : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", u.caption_label),
			month_grid: s("w-full border-collapse", u.month_grid),
			weekdays: s("flex", u.weekdays),
			weekday: s("flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none", u.weekday),
			week: s("mt-2 flex w-full", u.week),
			week_number_header: s("w-(--cell-size) select-none", u.week_number_header),
			week_number: s("text-[0.8rem] text-muted-foreground select-none", u.week_number),
			day: s("group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)", l.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)", u.day),
			range_start: s("relative isolate z-0 rounded-l-(--cell-radius) bg-accent after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-accent", u.range_start),
			range_middle: s("rounded-none bg-accent", u.range_middle),
			range_end: s("relative isolate z-0 rounded-r-(--cell-radius) bg-accent after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-accent", u.range_end),
			today: s("rounded-(--cell-radius) bg-secondary-hover text-foreground data-[selected=true]:rounded-none", u.today),
			outside: s("text-muted-foreground aria-selected:text-muted-foreground", u.outside),
			disabled: s("text-muted-foreground opacity-50", u.disabled),
			hidden: s("invisible", u.hidden),
			...t
		},
		components: {
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ w("div", {
				"data-slot": "calendar",
				ref: t,
				className: s(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => w(t === "left" ? de : t === "right" ? O : D, {
				className: s("size-4", e),
				...n
			}),
			DayButton: ({ ...e }) => /* @__PURE__ */ w(Rt, {
				locale: a,
				...e
			}),
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ w("td", {
				...t,
				children: /* @__PURE__ */ w("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...c
		},
		...l
	});
}
function Rt({ className: t, day: n, modifiers: r, locale: i, ...a }) {
	let o = Le(), c = e.useRef(null);
	return e.useEffect(() => {
		r.focused && c.current?.focus();
	}, [r.focused]), /* @__PURE__ */ w(j, {
		ref: c,
		variant: "ghost",
		size: "icon",
		"data-day": n.date.toLocaleDateString(i?.code),
		"data-selected-single": r.selected && !r.range_start && !r.range_end && !r.range_middle,
		"data-range-start": r.range_start,
		"data-range-end": r.range_end,
		"data-range-middle": r.range_middle,
		className: s("relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70", o.day, t),
		...a
	});
}
// src/components/ui/card.tsx
function zt({ className: e, size: t = "default", variant: n = "default", interactive: r = !1, ...i }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card",
		"data-size": t,
		"data-variant": n,
		"data-interactive": r || void 0,
		className: s("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl border border-border bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[interactive]:cursor-pointer data-[interactive]:transition-colors data-[interactive]:hover:bg-secondary data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[variant=muted]:border-transparent data-[variant=muted]:bg-secondary *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", e),
		...i
	});
}
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-header",
		className: s("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", e),
		...t
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-title",
		className: s("font-heading type-h4 group-data-[size=sm]/card:type-body-strong", e),
		...t
	});
}
function Ht({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-action",
		className: s("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Wt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-content",
		className: s("px-(--card-spacing)", e),
		...t
	});
}
function Gt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-footer",
		className: s("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", e),
		...t
	});
}
// src/components/ui/chart.tsx
var Kt = {
	light: "",
	dark: ".dark"
}, qt = {
	width: 320,
	height: 200
}, Jt = e.createContext(null);
function Yt() {
	let t = e.useContext(Jt);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function Xt({ id: t, className: n, children: r, config: i, initialDimension: a = qt, ...o }) {
	let c = e.useId(), l = `chart-${t ?? c.replace(/:/g, "")}`;
	return /* @__PURE__ */ w(Jt.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ T("div", {
			"data-slot": "chart",
			"data-chart": l,
			className: s("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...o,
			children: [/* @__PURE__ */ w(Zt, {
				id: l,
				config: i
			}), /* @__PURE__ */ w(Re.ResponsiveContainer, {
				initialDimension: a,
				children: r
			})]
		})
	});
}
var Zt = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
	return n.length ? /* @__PURE__ */ w("style", { dangerouslySetInnerHTML: { __html: Object.entries(Kt).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] ?? n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, Qt = Re.Tooltip;
function $t({ active: t, payload: n, className: r, indicator: i = "dot", hideLabel: a = !1, hideIndicator: o = !1, label: c, labelFormatter: l, labelClassName: u, formatter: d, color: f, nameKey: p, labelKey: m }) {
	let { config: h } = Yt(), g = e.useMemo(() => {
		if (a || !n?.length) return null;
		let [e] = n, t = `${m ?? e?.dataKey ?? e?.name ?? "value"}`, r = nn(h, e, t), i = !m && typeof c == "string" ? h[c]?.label ?? c : r?.label;
		return l ? /* @__PURE__ */ w("div", {
			className: s("font-medium", u),
			children: l(i, n)
		}) : i ? /* @__PURE__ */ w("div", {
			className: s("font-medium", u),
			children: i
		}) : null;
	}, [
		c,
		l,
		n,
		a,
		u,
		h,
		m
	]);
	if (!t || !n?.length) return null;
	let _ = n.length === 1 && i !== "dot";
	return /* @__PURE__ */ T("div", {
		className: s("grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", r),
		children: [_ ? null : g, /* @__PURE__ */ w("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${p ?? e.name ?? e.dataKey ?? "value"}`, r = nn(h, e, n), a = f ?? e.payload?.fill ?? e.color;
				return /* @__PURE__ */ w("div", {
					className: s("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", i === "dot" && "items-center"),
					children: d && e?.value !== void 0 && e.name ? d(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ T(C, { children: [r?.icon ? /* @__PURE__ */ w(r.icon, {}) : !o && /* @__PURE__ */ w("div", {
						className: s("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
							"h-2.5 w-2.5": i === "dot",
							"w-1": i === "line",
							"w-0 border-[1.5px] border-dashed bg-transparent": i === "dashed",
							"my-0.5": _ && i === "dashed"
						}),
						style: {
							"--color-bg": a,
							"--color-border": a
						}
					}), /* @__PURE__ */ T("div", {
						className: s("flex flex-1 justify-between leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ T("div", {
							className: "grid gap-1.5",
							children: [_ ? g : null, /* @__PURE__ */ w("span", {
								className: "text-muted-foreground",
								children: r?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ w("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof e.value == "number" ? e.value.toLocaleString() : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
var en = Re.Legend;
function tn({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: a } = Yt();
	return n?.length ? /* @__PURE__ */ w("div", {
		className: s("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, o = nn(a, e, r);
			return /* @__PURE__ */ T("div", {
				className: s("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [o?.icon && !t ? /* @__PURE__ */ w(o.icon, {}) : /* @__PURE__ */ w("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), o?.label]
			}, n);
		})
	}) : null;
}
function nn(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
// src/components/ui/checkbox.tsx
function rn({ className: e, ...t }) {
	return /* @__PURE__ */ w(u.Root, {
		"data-slot": "checkbox",
		className: s("peer group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-input bg-background transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:inset-[min(-0.5rem,calc((16px-var(--hit-min))/2))] focus-visible:border-ring enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-field-hover aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground disabled:data-[state=indeterminate]:bg-field-hover disabled:data-[state=indeterminate]:text-muted-foreground data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary-hover disabled:data-checked:bg-field-hover disabled:data-checked:text-muted-foreground", e),
		...t,
		children: /* @__PURE__ */ T(u.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3",
			children: [/* @__PURE__ */ w(E, { className: "group-data-[state=indeterminate]/checkbox:hidden" }), /* @__PURE__ */ w(Se, { className: "hidden group-data-[state=indeterminate]/checkbox:block" })]
		})
	});
}
// src/components/ui/collapsible.tsx
function an({ ...e }) {
	return /* @__PURE__ */ w(d.Root, {
		"data-slot": "collapsible",
		...e
	});
}
function on({ ...e }) {
	return /* @__PURE__ */ w(d.CollapsibleTrigger, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function sn({ ...e }) {
	return /* @__PURE__ */ w(d.CollapsibleContent, {
		"data-slot": "collapsible-content",
		...e
	});
}
// src/components/ui/dialog.tsx
function cn({ ...e }) {
	return /* @__PURE__ */ w(f.Root, {
		"data-slot": "dialog",
		...e
	});
}
function ln({ ...e }) {
	return /* @__PURE__ */ w(f.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function un({ ...e }) {
	return /* @__PURE__ */ w(f.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function dn({ ...e }) {
	return /* @__PURE__ */ w(f.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function fn({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Overlay, {
		"data-slot": "dialog-overlay",
		className: s("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function pn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ T(un, { children: [/* @__PURE__ */ w(fn, {}), /* @__PURE__ */ T(f.Content, {
		"data-slot": "dialog-content",
		className: s("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-popover p-6 text-sm text-popover-foreground shadow-lg duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [t, n && /* @__PURE__ */ w(f.Close, {
			"data-slot": "dialog-close",
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm",
				children: [/* @__PURE__ */ w(k, {}), /* @__PURE__ */ w("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "dialog-header",
		className: s("flex flex-col gap-2", e),
		...t
	});
}
function hn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "dialog-footer",
		className: s("-mx-6 -mb-6 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-secondary px-6 py-4 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ w(f.Close, {
			asChild: !0,
			children: /* @__PURE__ */ w(j, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Title, {
		"data-slot": "dialog-title",
		className: s("font-heading type-h3", e),
		...t
	});
}
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Description, {
		"data-slot": "dialog-description",
		className: s("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
// src/components/ui/input.tsx
function vn({ className: e, type: t, size: n = "default", ...r }) {
	return /* @__PURE__ */ w("input", {
		type: t,
		"data-slot": "input",
		"data-size": n,
		className: s("h-control w-full min-w-0 rounded-lg border border-input bg-background px-2 py-0 text-base text-foreground data-[size=sm]:h-control-sm data-[size=sm]:px-1.5 data-[size=sm]:text-sm transition-colors duration-(--duration-fast) outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground read-only:border-transparent read-only:bg-secondary read-only:hover:border-transparent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 read-only:focus-visible:ring-0 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...r
	});
}
// src/components/ui/textarea.tsx
function yn({ className: e, ...t }) {
	return /* @__PURE__ */ w("textarea", {
		"data-slot": "textarea",
		className: s("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-background px-2 py-1 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...t
	});
}
// src/components/ui/input-group.tsx
function bn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "input-group",
		role: "group",
		className: s("group/input-group relative flex h-control w-full min-w-0 items-center rounded-lg border border-input bg-background transition-colors outline-none hover:border-muted-foreground in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:border-transparent has-disabled:bg-secondary has-disabled:text-muted-foreground has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/40 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-2 has-[[data-slot][aria-invalid=true]]:ring-destructive/30 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", e),
		...t
	});
}
var xn = S("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function Sn({ className: e, align: t = "inline-start", ...n }) {
	return /* @__PURE__ */ w("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": t,
		className: s(xn({ align: t }), e),
		onClick: (e) => {
			e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...n
	});
}
var Cn = S("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-control-sm p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function wn({ className: e, type: t = "button", variant: n = "ghost", size: r = "xs", ...i }) {
	return /* @__PURE__ */ w(j, {
		type: t,
		"data-size": r,
		variant: n,
		className: s(Cn({ size: r }), e),
		...i
	});
}
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		className: s("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", e),
		...t
	});
}
function En({ className: e, ...t }) {
	return /* @__PURE__ */ w(vn, {
		"data-slot": "input-group-control",
		className: s("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0", e),
		...t
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ w(yn, {
		"data-slot": "input-group-control",
		className: s("flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0", e),
		...t
	});
}
// src/components/ui/command.tsx
function On({ className: e, ...t }) {
	return /* @__PURE__ */ w(A, {
		"data-slot": "command",
		className: s("flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground", e),
		...t
	});
}
function kn({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !1, ...a }) {
	return /* @__PURE__ */ T(cn, {
		...a,
		children: [/* @__PURE__ */ T(mn, {
			className: "sr-only",
			children: [/* @__PURE__ */ w(gn, { children: e }), /* @__PURE__ */ w(_n, { children: t })]
		}), /* @__PURE__ */ w(pn, {
			className: s("top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0", r),
			showCloseButton: i,
			children: n
		})]
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "command-input-wrapper",
		className: "p-1 pb-0",
		children: /* @__PURE__ */ T(bn, {
			className: "h-control! rounded-lg! border-border bg-secondary shadow-none! *:data-[slot=input-group-addon]:pl-2!",
			children: [/* @__PURE__ */ w(A.Input, {
				"data-slot": "command-input",
				className: s("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e),
				...t
			}), /* @__PURE__ */ w(Sn, { children: /* @__PURE__ */ w(Ae, { className: "size-4 shrink-0 opacity-50" }) })]
		})
	});
}
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ w(A.List, {
		"data-slot": "command-list",
		className: s("no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none", e),
		...t
	});
}
function Mn({ className: e, ...t }) {
	return /* @__PURE__ */ w(A.Empty, {
		"data-slot": "command-empty",
		className: s("py-6 text-center text-sm", e),
		...t
	});
}
function N({ className: e, ...t }) {
	return /* @__PURE__ */ w(A.Group, {
		"data-slot": "command-group",
		className: s("overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ w(A.Separator, {
		"data-slot": "command-separator",
		className: s("-mx-1 h-px bg-border", e),
		...t
	});
}
function P({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ T(A.Item, {
		"data-slot": "command-item",
		className: s("group/command-item relative flex min-h-control-sm cursor-default items-center gap-2 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-accent data-selected:bg-muted data-selected:text-accent-foreground data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground", e),
		...n,
		children: [t, /* @__PURE__ */ w(E, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]
	});
}
function Pn({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "command-shortcut",
		className: s("ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground", e),
		...t
	});
}
// src/components/ui/dropdown-menu.tsx
function Fn({ ...e }) {
	return /* @__PURE__ */ w(p.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function In({ ...e }) {
	return /* @__PURE__ */ w(p.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function F({ ...e }) {
	return /* @__PURE__ */ w(p.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Ln({ className: e, align: t = "start", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ w(p.Portal, { children: /* @__PURE__ */ w(p.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: n,
		align: t,
		className: s("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function Rn({ ...e }) {
	return /* @__PURE__ */ w(p.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function zn({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ w(p.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: s("group/dropdown-menu-item relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", e),
		...r
	});
}
function Bn({ className: e, children: t, checked: n, inset: r, ...i }) {
	return /* @__PURE__ */ T(p.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": r,
		className: s("relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...i,
		children: [/* @__PURE__ */ w("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			children: /* @__PURE__ */ w(p.ItemIndicator, { children: /* @__PURE__ */ w(E, {}) })
		}), t]
	});
}
function Vn({ ...e }) {
	return /* @__PURE__ */ w(p.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Hn({ className: e, children: t, inset: n, ...r }) {
	return /* @__PURE__ */ T(p.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": n,
		className: s("relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [/* @__PURE__ */ w("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-radio-item-indicator",
			children: /* @__PURE__ */ w(p.ItemIndicator, { children: /* @__PURE__ */ w(E, {}) })
		}), t]
	});
}
function Un({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ w(p.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: s("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", e),
		...n
	});
}
function Wn({ className: e, ...t }) {
	return /* @__PURE__ */ w(p.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: s("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Gn({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: s("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", e),
		...t
	});
}
function Kn({ ...e }) {
	return /* @__PURE__ */ w(p.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function qn({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ T(p.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: s("flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ w(O, { className: "ml-auto" })]
	});
}
function Jn({ className: e, ...t }) {
	return /* @__PURE__ */ w(p.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: s("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-lg duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...t
	});
}
// src/components/ui/empty.tsx
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty",
		className: s("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance", e),
		...t
	});
}
function Xn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-header",
		className: s("flex max-w-sm flex-col items-center gap-2", e),
		...t
	});
}
var Zn = S("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
function Qn({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-icon",
		"data-variant": t,
		className: s(Zn({
			variant: t,
			className: e
		})),
		...n
	});
}
function $n({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-title",
		className: s("font-heading text-sm font-medium tracking-tight", e),
		...t
	});
}
function er({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-description",
		className: s("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function tr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-content",
		className: s("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", e),
		...t
	});
}
// src/components/ui/label.tsx
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ w(h.Root, {
		"data-slot": "label",
		className: s("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
// src/components/ui/separator.tsx
function rr({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ w(ee.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: s("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", e),
		...r
	});
}
// src/components/ui/field.tsx
function ir({ className: e, ...t }) {
	return /* @__PURE__ */ w("fieldset", {
		"data-slot": "field-set",
		className: s("flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", e),
		...t
	});
}
function ar({ className: e, variant: t = "legend", ...n }) {
	return /* @__PURE__ */ w("legend", {
		"data-slot": "field-legend",
		"data-variant": t,
		className: s("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", e),
		...n
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-group",
		className: s("group/field-group @container/field-group flex w-full flex-col gap-6 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", e),
		...t
	});
}
var sr = S("group/field flex w-full gap-1.5 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function cr({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": t,
		className: s(sr({ orientation: t }), e),
		...n
	});
}
function lr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-content",
		className: s("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", e),
		...t
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ w(nr, {
		"data-slot": "field-label",
		className: s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/25 *:data-[slot=field]:p-2.5", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", e),
		...t
	});
}
function dr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-label",
		className: s("flex w-fit items-center gap-2 text-sm font-medium text-foreground-secondary group-data-[disabled=true]/field:opacity-50", e),
		...t
	});
}
function fr({ className: e, ...t }) {
	return /* @__PURE__ */ w("p", {
		"data-slot": "field-description",
		className: s("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function pr({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "field-separator",
		"data-content": !!e,
		className: s("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", t),
		...n,
		children: [/* @__PURE__ */ w(rr, { className: "absolute inset-0 top-1/2" }), e && /* @__PURE__ */ w("span", {
			className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
			"data-slot": "field-separator-content",
			children: e
		})]
	});
}
function mr({ className: e, children: t, errors: r, ...i }) {
	let a = n(() => {
		if (t) return t;
		if (!r?.length) return null;
		let e = [...new Map(r.map((e) => [e?.message, e])).values()];
		return e?.length == 1 ? e[0]?.message : /* @__PURE__ */ w("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: e.map((e, t) => e?.message && /* @__PURE__ */ w("li", { children: e.message }, t))
		});
	}, [t, r]);
	return a ? /* @__PURE__ */ w("div", {
		role: "alert",
		"data-slot": "field-error",
		className: s("text-sm font-normal text-destructive", e),
		...i,
		children: a
	}) : null;
}
// src/components/ui/hover-card.tsx
function hr({ ...e }) {
	return /* @__PURE__ */ w(m.Root, {
		"data-slot": "hover-card",
		...e
	});
}
function gr({ ...e }) {
	return /* @__PURE__ */ w(m.Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function _r({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ w(m.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ w(m.Content, {
			"data-slot": "hover-card-content",
			align: t,
			sideOffset: n,
			className: s("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-xl border border-border bg-popover p-3 text-sm text-popover-foreground shadow-md outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
			...r
		})
	});
}
// src/components/ui/pagination.tsx
function vr({ className: e, ...t }) {
	return /* @__PURE__ */ w("nav", {
		role: "navigation",
		"aria-label": "แบ่งหน้า",
		"data-slot": "pagination",
		className: s("mx-auto flex w-full justify-center", e),
		...t
	});
}
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ w("ul", {
		"data-slot": "pagination-content",
		className: s("flex items-center gap-0.5", e),
		...t
	});
}
function br({ ...e }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function xr({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ w(j, {
		asChild: !0,
		variant: t ? "outline" : "ghost",
		size: n,
		className: s(e),
		children: /* @__PURE__ */ w("a", {
			"aria-current": t ? "page" : void 0,
			"data-slot": "pagination-link",
			"data-active": t,
			...r
		})
	});
}
function Sr({ className: e, text: t = "ก่อนหน้า", ...n }) {
	return /* @__PURE__ */ T(xr, {
		size: "default",
		className: s("pl-1.5!", e),
		...n,
		children: [/* @__PURE__ */ w(de, { "data-icon": "inline-start" }), /* @__PURE__ */ w("span", { children: t })]
	});
}
function Cr({ className: e, text: t = "ถัดไป", ...n }) {
	return /* @__PURE__ */ T(xr, {
		size: "default",
		className: s("pr-1.5!", e),
		...n,
		children: [/* @__PURE__ */ w("span", { children: t }), /* @__PURE__ */ w(O, { "data-icon": "inline-end" })]
	});
}
function wr({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: s("flex size-control items-center justify-center [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: [/* @__PURE__ */ w(Ce, {}), /* @__PURE__ */ w("span", {
			className: "sr-only",
			children: "หน้าอื่น ๆ"
		})]
	});
}
// src/components/ui/popover.tsx
function I({ ...e }) {
	return /* @__PURE__ */ w(g.Root, {
		"data-slot": "popover",
		...e
	});
}
function L({ ...e }) {
	return /* @__PURE__ */ w(g.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function R({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ w(g.Portal, { children: /* @__PURE__ */ w(g.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: s("z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg border border-border bg-popover p-2.5 text-sm text-popover-foreground shadow-md outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function Tr({ ...e }) {
	return /* @__PURE__ */ w(g.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Er({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "popover-header",
		className: s("flex flex-col gap-0.5 text-sm", e),
		...t
	});
}
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "popover-title",
		className: s("font-medium", e),
		...t
	});
}
function Or({ className: e, ...t }) {
	return /* @__PURE__ */ w("p", {
		"data-slot": "popover-description",
		className: s("text-muted-foreground", e),
		...t
	});
}
// src/components/ui/progress.tsx
var kr = {
	default: "bg-primary",
	success: "bg-success",
	warning: "bg-warning",
	danger: "bg-danger"
};
function Ar({ className: e, value: t, tone: n = "default", ...r }) {
	return /* @__PURE__ */ w(_.Root, {
		"data-slot": "progress",
		value: t,
		className: s("relative flex h-2 w-full items-center overflow-hidden rounded-full bg-border", e),
		...r,
		children: /* @__PURE__ */ w(_.Indicator, {
			"data-slot": "progress-indicator",
			className: s("size-full flex-1 transition-transform duration-300 motion-reduce:transition-none", kr[n]),
			style: { transform: `translateX(-${100 - (t || 0)}%)` }
		})
	});
}
// src/components/ui/scroll-area.tsx
function jr({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ T(v.Root, {
		"data-slot": "scroll-area",
		className: s("relative", e),
		...n,
		children: [
			/* @__PURE__ */ w(v.Viewport, {
				"data-slot": "scroll-area-viewport",
				className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
				children: t
			}),
			/* @__PURE__ */ w(Mr, {}),
			/* @__PURE__ */ w(v.Corner, {})
		]
	});
}
function Mr({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w(v.ScrollAreaScrollbar, {
		"data-slot": "scroll-area-scrollbar",
		"data-orientation": t,
		orientation: t,
		className: s("flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent", e),
		...n,
		children: /* @__PURE__ */ w(v.ScrollAreaThumb, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-full bg-border"
		})
	});
}
// src/components/ui/select.tsx
function Nr({ ...e }) {
	return /* @__PURE__ */ w(y.Root, {
		"data-slot": "select",
		...e
	});
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Group, {
		"data-slot": "select-group",
		className: s("scroll-my-1 p-1", e),
		...t
	});
}
function Fr({ ...e }) {
	return /* @__PURE__ */ w(y.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Ir({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ T(y.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: s("group/select-trigger flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-background py-0 pr-1.5 pl-2 text-base whitespace-nowrap text-foreground data-[size=sm]:gap-1 data-[size=sm]:pr-1 data-[size=sm]:pl-1.5 data-[size=sm]:text-sm transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-placeholder:text-foreground-secondary disabled:data-placeholder:text-muted-foreground data-[size=default]:h-control data-[size=sm]:h-control-sm data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 md:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ w(y.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ w(D, { className: "pointer-events-none size-4 text-foreground-secondary group-disabled/select-trigger:text-muted-foreground" })
		})]
	});
}
function Lr({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ w(y.Portal, { children: /* @__PURE__ */ T(y.Content, {
		"data-slot": "select-content",
		"data-align-trigger": n === "item-aligned",
		className: s("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover text-popover-foreground shadow-md duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ w(Vr, {}),
			/* @__PURE__ */ w(y.Viewport, {
				"data-position": n,
				className: s("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", n === "popper" && ""),
				children: t
			}),
			/* @__PURE__ */ w(Hr, {})
		]
	}) });
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Label, {
		"data-slot": "select-label",
		className: s("px-1.5 py-1 text-xs text-muted-foreground", e),
		...t
	});
}
function zr({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ T(y.Item, {
		"data-slot": "select-item",
		className: s("relative flex min-h-control-sm w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ w("span", {
			className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ w(y.ItemIndicator, { children: /* @__PURE__ */ w(E, { className: "pointer-events-none" }) })
		}), /* @__PURE__ */ w(y.ItemText, { children: t })]
	});
}
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Separator, {
		"data-slot": "select-separator",
		className: s("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ w(fe, {})
	});
}
function Hr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ w(D, {})
	});
}
// src/components/ui/sheet.tsx
function Ur({ ...e }) {
	return /* @__PURE__ */ w(f.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Wr({ ...e }) {
	return /* @__PURE__ */ w(f.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Gr({ ...e }) {
	return /* @__PURE__ */ w(f.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Kr({ ...e }) {
	return /* @__PURE__ */ w(f.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Overlay, {
		"data-slot": "sheet-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function Jr({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ T(Kr, { children: [/* @__PURE__ */ w(qr, {}), /* @__PURE__ */ T(f.Content, {
		"data-slot": "sheet-content",
		"data-side": n,
		className: s("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", e),
		...i,
		children: [t, r && /* @__PURE__ */ w(f.Close, {
			"data-slot": "sheet-close",
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm",
				children: [/* @__PURE__ */ w(k, {}), /* @__PURE__ */ w("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function Yr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sheet-header",
		className: s("flex flex-col gap-0.5 p-4", e),
		...t
	});
}
function Xr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sheet-footer",
		className: s("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Title, {
		"data-slot": "sheet-title",
		className: s("font-heading type-h3 text-foreground", e),
		...t
	});
}
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Description, {
		"data-slot": "sheet-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
// src/hooks/use-mobile.ts
var $r = "(max-width: 767px)";
function ei(e) {
	let t = window.matchMedia($r);
	return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
function ti() {
	return e.useSyncExternalStore(ei, () => window.matchMedia($r).matches, () => !1);
}
// src/components/ui/skeleton.tsx
function ni({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "skeleton",
		className: s("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
// src/components/ui/tooltip.tsx
function ri({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ w(x.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function ii({ ...e }) {
	return /* @__PURE__ */ w(x.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function ai({ ...e }) {
	return /* @__PURE__ */ w(x.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function oi({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ w(x.Portal, { children: /* @__PURE__ */ T(x.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: s("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ w(x.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
// src/components/ui/sidebar.tsx
var si = "sidebar_state", ci = 604800, li = "16rem", ui = "18rem", di = "3rem", fi = "b", pi = e.createContext(null);
function z() {
	let t = e.useContext(pi);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function mi({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: a, children: o, ...c }) {
	let l = ti(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${si}=${t}; path=/; max-age=${ci}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === fi && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [g]);
	let _ = m ? "expanded" : "collapsed", v = e.useMemo(() => ({
		state: _,
		open: m,
		setOpen: h,
		isMobile: l,
		openMobile: u,
		setOpenMobile: d,
		toggleSidebar: g
	}), [
		_,
		m,
		h,
		l,
		u,
		d,
		g
	]);
	return /* @__PURE__ */ w(pi.Provider, {
		value: v,
		children: /* @__PURE__ */ w("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": li,
				"--sidebar-width-icon": di,
				...a
			},
			className: s("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: o
		})
	});
}
function hi({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, dir: a, ...o }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = z();
	return n === "none" ? /* @__PURE__ */ w("div", {
		"data-slot": "sidebar",
		className: s("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...o,
		children: i
	}) : c ? /* @__PURE__ */ w(Ur, {
		open: u,
		onOpenChange: d,
		...o,
		children: /* @__PURE__ */ T(Jr, {
			dir: a,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": ui },
			side: e,
			children: [/* @__PURE__ */ T(Yr, {
				className: "sr-only",
				children: [/* @__PURE__ */ w(Zr, { children: "Sidebar" }), /* @__PURE__ */ w(Qr, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ w("div", {
				className: "flex h-full w-full flex-col",
				children: i
			})]
		})
	}) : /* @__PURE__ */ T("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": l,
		"data-collapsible": l === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ w("div", {
			"data-slot": "sidebar-gap",
			className: s("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ w("div", {
			"data-slot": "sidebar-container",
			"data-side": e,
			className: s("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
			...o,
			children: /* @__PURE__ */ w("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
				children: i
			})
		})]
	});
}
function gi({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = z();
	return /* @__PURE__ */ T(j, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: s(e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ w(Te, {}), /* @__PURE__ */ w("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function _i({ className: e, ...t }) {
	let { toggleSidebar: n } = z();
	return /* @__PURE__ */ w("button", {
		"data-sidebar": "rail",
		"data-slot": "sidebar-rail",
		"aria-label": "Toggle Sidebar",
		tabIndex: -1,
		onClick: n,
		title: "Toggle Sidebar",
		className: s("absolute inset-y-0 z-20 hidden w-4 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] hover:after:bg-sidebar-border sm:flex ltr:-translate-x-1/2 rtl:-translate-x-1/2", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full hover:group-data-[collapsible=offcanvas]:bg-sidebar", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", e),
		...t
	});
}
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ w("main", {
		"data-slot": "sidebar-inset",
		className: s("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function yi({ className: e, ...t }) {
	return /* @__PURE__ */ w(vn, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: s("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Si({ className: e, ...t }) {
	return /* @__PURE__ */ w(rr, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: s("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: s("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: s("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function Ti({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "div";
	return /* @__PURE__ */ w(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: s("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Ei({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "button";
	return /* @__PURE__ */ w(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: s("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Di({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: s("w-full text-sm", e),
		...t
	});
}
function Oi({ className: e, ...t }) {
	return /* @__PURE__ */ w("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: s("flex w-full min-w-0 flex-col gap-0", e),
		...t
	});
}
function B({ className: e, ...t }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: s("group/menu-item relative", e),
		...t
	});
}
var ki = S("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
	variants: {
		variant: {
			default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
			outline: "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]"
		},
		size: {
			default: "h-8 text-sm",
			sm: "h-7 text-xs",
			lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function V({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: a, ...o }) {
	let c = e ? b.Root : "button", { isMobile: l, state: u } = z(), d = /* @__PURE__ */ w(c, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: s(ki({
			variant: n,
			size: r
		}), a),
		...o
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ T(ii, { children: [/* @__PURE__ */ w(ai, {
		asChild: !0,
		children: d
	}), /* @__PURE__ */ w(oi, {
		side: "right",
		align: "center",
		hidden: u !== "collapsed" || l,
		...i
	})] })) : d;
}
function Ai({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? b.Root : "button";
	return /* @__PURE__ */ w(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: s("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0", e),
		...r
	});
}
function ji({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: s("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground", e),
		...t
	});
}
function Mi({ className: t, showIcon: n = !1, ...r }) {
	let [i] = e.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: s("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ w(ni, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ w(ni, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function Ni({ className: e, ...t }) {
	return /* @__PURE__ */ w("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: s("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Pi({ className: e, ...t }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: s("group/menu-sub-item relative", e),
		...t
	});
}
function Fi({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let a = e ? b.Root : "a";
	return /* @__PURE__ */ w(a, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: s("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", r),
		...i
	});
}
// src/components/ui/sonner.tsx
var Ii = ({ ...e }) => /* @__PURE__ */ w(ze, {
	theme: "light",
	richColors: !0,
	className: "toaster group",
	icons: {
		success: /* @__PURE__ */ w(ge, { className: "size-4" }),
		info: /* @__PURE__ */ w(ye, { className: "size-4" }),
		warning: /* @__PURE__ */ w(Fe, { className: "size-4" }),
		error: /* @__PURE__ */ w(we, { className: "size-4" }),
		loading: /* @__PURE__ */ w(be, { className: "size-4 animate-spin" })
	},
	style: {
		"--normal-bg": "var(--popover)",
		"--normal-text": "var(--popover-foreground)",
		"--normal-border": "var(--border)",
		"--border-radius": "var(--radius-2xl)",
		"--success-bg": "var(--success-subtle)",
		"--success-text": "var(--success-foreground)",
		"--success-border": "var(--success-border)",
		"--error-bg": "var(--danger-subtle)",
		"--error-text": "var(--danger-foreground)",
		"--error-border": "var(--danger-border)",
		"--warning-bg": "var(--warning-subtle)",
		"--warning-text": "var(--warning-foreground)",
		"--warning-border": "var(--warning-border)",
		"--info-bg": "var(--info-subtle)",
		"--info-text": "var(--info-foreground)",
		"--info-border": "var(--info-border)"
	},
	toastOptions: { classNames: { toast: "cn-toast" } },
	...e
});
// src/components/ui/spinner.tsx
function Li({ className: e, ...t }) {
	return /* @__PURE__ */ w(be, {
		"data-slot": "spinner",
		role: "status",
		"aria-label": "กำลังโหลด",
		className: s("size-4 animate-spin", e),
		...t
	});
}
// src/components/ui/table.tsx
function H({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ w("table", {
			"data-slot": "table",
			className: s("w-full caption-bottom type-table tabular-nums", e),
			...t
		})
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ w("thead", {
		"data-slot": "table-header",
		className: s("bg-secondary [&_tr]:border-b [&_tr]:hover:bg-transparent", e),
		...t
	});
}
function W({ className: e, ...t }) {
	return /* @__PURE__ */ w("tbody", {
		"data-slot": "table-body",
		className: s("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Ri({ className: e, ...t }) {
	return /* @__PURE__ */ w("tfoot", {
		"data-slot": "table-footer",
		className: s("border-t bg-secondary font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ w("tr", {
		"data-slot": "table-row",
		className: s("border-b transition-colors hover:bg-secondary has-aria-expanded:bg-secondary data-[state=selected]:bg-accent", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ w("th", {
		"data-slot": "table-head",
		className: s("h-row-head px-3 text-left align-middle font-medium whitespace-nowrap text-foreground-secondary [&:has([role=checkbox])]:w-10 [&:has([role=checkbox])]:pr-0", e),
		...t
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ w("td", {
		"data-slot": "table-cell",
		className: s("h-row px-3 py-1 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
		...t
	});
}
function zi({ className: e, ...t }) {
	return /* @__PURE__ */ w("caption", {
		"data-slot": "table-caption",
		className: s("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
// src/components/ui/tabs.tsx
function Bi({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ w(te.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: s("group/tabs flex gap-2 data-horizontal:flex-col", e),
		...n
	});
}
var Vi = S("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-control-sm group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-field",
		line: "gap-1 border-b border-border bg-transparent p-0 group-data-horizontal/tabs:w-full group-data-horizontal/tabs:justify-start"
	} },
	defaultVariants: { variant: "default" }
});
function Hi({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ w(te.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: s(Vi({ variant: t }), e),
		...n
	});
}
function Ui({ className: e, ...t }) {
	return /* @__PURE__ */ w(te.Trigger, {
		"data-slot": "tabs-trigger",
		className: s("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2.5 py-0.5 text-[13px] font-medium whitespace-nowrap text-muted-foreground transition-colors group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 group-data-[variant=default]/tabs-list:data-active:shadow-xs group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:flex-none group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:text-primary", "data-active:bg-background data-active:text-foreground", "after:absolute after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
function Wi({ className: e, ...t }) {
	return /* @__PURE__ */ w(te.Content, {
		"data-slot": "tabs-content",
		className: s("flex-1 text-sm outline-none", e),
		...t
	});
}
// src/components/ui/toggle.tsx
var Gi = S("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-secondary-hover hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-accent aria-pressed:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "bg-field hover:bg-field-hover"
		},
		size: {
			default: "h-control min-w-control px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			sm: "h-control-sm min-w-control-sm px-2.5 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Ki({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ w(ne.Root, {
		"data-slot": "toggle",
		className: s(Gi({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
// src/components/ui/toggle-group.tsx
var qi = e.createContext({
	size: "default",
	variant: "default",
	spacing: 2,
	orientation: "horizontal"
});
function Ji({ className: e, variant: t, size: n, spacing: r = 2, orientation: i = "horizontal", children: a, ...o }) {
	return /* @__PURE__ */ w(re.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		"data-orientation": i,
		style: { "--gap": r },
		className: s("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch", e),
		...o,
		children: /* @__PURE__ */ w(qi.Provider, {
			value: {
				variant: t,
				size: n,
				spacing: r,
				orientation: i
			},
			children: a
		})
	});
}
function Yi({ className: t, children: n, variant: r = "default", size: i = "default", ...a }) {
	let o = e.useContext(qi);
	return /* @__PURE__ */ w(re.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": o.variant || r,
		"data-size": o.size || i,
		"data-spacing": o.spacing,
		className: s("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", Gi({
			variant: o.variant || r,
			size: o.size || i
		}), t),
		...a,
		children: n
	});
}
// src/components/patterns/app-shell.tsx
var Xi = "border border-transparent hover:border-muted-foreground hover:bg-background hover:text-foreground active:bg-background data-active:border-primary data-active:bg-background data-active:font-medium data-active:text-primary data-open:hover:bg-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";
function Zi({ name: e, description: t, logo: n, href: r }) {
	let i = /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("span", {
		className: "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary text-sm font-semibold text-primary-foreground [&_img]:size-full [&_img]:object-cover [&_svg]:size-4",
		children: n ?? e.trim().charAt(0).toUpperCase()
	}), /* @__PURE__ */ T("span", {
		className: "grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden",
		children: [/* @__PURE__ */ w("span", {
			className: "truncate text-sm font-semibold text-foreground",
			children: e
		}), t && /* @__PURE__ */ w("span", {
			className: "truncate text-xs text-muted-foreground",
			children: t
		})]
	})] }), a = "flex h-12 min-w-0 flex-1 items-center gap-2 rounded-md px-0 outline-hidden group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:flex-none";
	return r ? /* @__PURE__ */ w("a", {
		href: r,
		className: s(a, "focus-visible:ring-2 focus-visible:ring-ring/40"),
		children: i
	}) : /* @__PURE__ */ w("div", {
		className: a,
		children: i
	});
}
function Qi() {
	let { state: e, isMobile: t, toggleSidebar: n } = z();
	if (t) return /* @__PURE__ */ w(gi, {
		"aria-label": "ปิดเมนู",
		title: "ปิดเมนู",
		className: "ml-auto text-muted-foreground"
	});
	let r = e === "expanded", i = r ? "ยุบเมนู" : "ขยายเมนู";
	return /* @__PURE__ */ w("button", {
		type: "button",
		"data-slot": "sidebar-toggle",
		"aria-label": i,
		title: i,
		onClick: n,
		className: "absolute top-1/2 -right-5 z-30 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm outline-hidden transition-colors group-data-[collapsible=icon]:-right-[26px] after:absolute after:-inset-2 hover:border-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 [&_svg]:size-3.5",
		children: /* @__PURE__ */ w(r ? de : O, {})
	});
}
function $i(e) {
	return e.some((e) => !!e.active || $i(e.children ?? []));
}
function ea({ count: e }) {
	return e === void 0 ? null : /* @__PURE__ */ w("span", {
		className: "ml-auto text-xs text-muted-foreground tabular-nums",
		children: e.toLocaleString("th-TH")
	});
}
function ta({ items: t, depth: n }) {
	return t.map((t) => /* @__PURE__ */ T(e.Fragment, { children: [/* @__PURE__ */ w(zn, {
		asChild: !0,
		className: s("min-h-11", n > 0 && "pl-6", t.active && "font-semibold text-primary"),
		children: /* @__PURE__ */ T("a", {
			href: t.href,
			"aria-current": t.active ? "page" : void 0,
			children: [/* @__PURE__ */ w("span", { children: t.title }), /* @__PURE__ */ w(ea, { count: t.count })]
		})
	}), t.children?.length ? /* @__PURE__ */ w(ta, {
		items: t.children,
		depth: n + 1
	}) : null] }, t.href));
}
function na({ items: e }) {
	return /* @__PURE__ */ w(Ni, {
		className: "gap-0.5 py-1",
		children: e.map((e) => /* @__PURE__ */ T(Pi, {
			className: "relative",
			children: [
				/* @__PURE__ */ w("span", {
					"aria-hidden": !0,
					className: s("absolute top-3.5 -left-[13.5px] size-1.5 -translate-y-1/2 rounded-full", e.active ? "bg-primary" : "bg-border")
				}),
				/* @__PURE__ */ w(Fi, {
					asChild: !0,
					isActive: e.active,
					className: Xi,
					children: /* @__PURE__ */ T("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ w("span", { children: e.title }), /* @__PURE__ */ w(ea, { count: e.count })]
					})
				}),
				e.children?.length ? /* @__PURE__ */ w(na, { items: e.children }) : null
			]
		}, e.href))
	});
}
function ra({ item: e }) {
	let { state: t, isMobile: n } = z(), r = e.children ?? [], i = !!e.active || $i(r);
	return t === "collapsed" && !n ? /* @__PURE__ */ w(B, { children: /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(F, {
		asChild: !0,
		children: /* @__PURE__ */ T(V, {
			tooltip: e.title,
			isActive: i,
			"aria-label": e.title,
			className: Xi,
			children: [/* @__PURE__ */ w(e.icon, {}), /* @__PURE__ */ w("span", { children: e.title })]
		})
	}), /* @__PURE__ */ T(Ln, {
		side: "right",
		align: "start",
		sideOffset: 8,
		className: "min-w-52",
		children: [/* @__PURE__ */ w(Un, { children: e.title }), /* @__PURE__ */ w(ta, {
			items: r,
			depth: 0
		})]
	})] }) }) : /* @__PURE__ */ w(an, {
		asChild: !0,
		defaultOpen: i,
		className: "group/collapsible",
		children: /* @__PURE__ */ T(B, { children: [/* @__PURE__ */ w(on, {
			asChild: !0,
			children: /* @__PURE__ */ T(V, {
				tooltip: e.title,
				className: s(Xi, i && "font-semibold"),
				children: [
					/* @__PURE__ */ w(e.icon, {}),
					/* @__PURE__ */ w("span", { children: e.title }),
					/* @__PURE__ */ w(D, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" })
				]
			})
		}), /* @__PURE__ */ w(sn, { children: /* @__PURE__ */ w(na, { items: r }) })] })
	});
}
function ia({ brand: e, header: t, nav: n, footer: r, defaultOpen: i = !0, children: a }) {
	return /* @__PURE__ */ T(mi, {
		defaultOpen: i,
		className: "min-h-svh",
		children: [/* @__PURE__ */ T(hi, {
			collapsible: "icon",
			children: [
				/* @__PURE__ */ T(bi, { children: [/* @__PURE__ */ T("div", {
					className: "relative flex min-h-8 items-center gap-2",
					children: [e && /* @__PURE__ */ w(Zi, { ...e }), /* @__PURE__ */ w(Qi, {})]
				}), t] }),
				/* @__PURE__ */ w(Ci, { children: n.map((e, t) => /* @__PURE__ */ T(wi, { children: [e.label && /* @__PURE__ */ w(Ti, { children: e.label }), /* @__PURE__ */ w(Di, { children: /* @__PURE__ */ w(Oi, { children: e.items.map((e) => e.children?.length ? /* @__PURE__ */ w(ra, { item: e }, e.href) : /* @__PURE__ */ T(B, { children: [/* @__PURE__ */ w(V, {
					asChild: !0,
					isActive: e.active,
					tooltip: e.title,
					className: Xi,
					children: /* @__PURE__ */ T("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ w(e.icon, {}), /* @__PURE__ */ w("span", { children: e.title })]
					})
				}), e.badge ? /* @__PURE__ */ w(ji, {
					className: "tabular-nums",
					"aria-label": `${e.badge} รายการ`,
					children: e.badge
				}) : null] }, e.href)) }) })] }, e.label ?? t)) }),
				r && /* @__PURE__ */ w(xi, { children: r }),
				/* @__PURE__ */ w(_i, {})
			]
		}), /* @__PURE__ */ T(vi, {
			className: "min-w-0 bg-background",
			children: [/* @__PURE__ */ T("header", {
				className: "sticky top-0 z-20 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-(--page-gutter) md:hidden",
				children: [/* @__PURE__ */ w(gi, {
					className: "-ml-2",
					"aria-label": "เปิดเมนู"
				}), e && /* @__PURE__ */ w("span", {
					className: "truncate text-sm font-semibold text-foreground",
					children: e.name
				})]
			}), /* @__PURE__ */ w("div", {
				className: "flex min-w-0 flex-1 flex-col gap-4 p-(--page-gutter)",
				children: a
			})]
		})]
	});
}
// src/components/patterns/badge-overflow.tsx
function aa({ items: t, max: n = 2, label: r = "ทั้งหมด" }) {
	let i = t.slice(0, n), a = t.length - i.length;
	return /* @__PURE__ */ T("div", {
		"data-slot": "badge-overflow",
		className: "flex flex-nowrap items-center gap-1",
		children: [i.map((t, n) => /* @__PURE__ */ w(e.Fragment, { children: t }, n)), a > 0 && /* @__PURE__ */ T(hr, {
			openDelay: 100,
			closeDelay: 100,
			children: [/* @__PURE__ */ w(gr, {
				asChild: !0,
				children: /* @__PURE__ */ w("button", {
					type: "button",
					"aria-label": `อีก ${a} รายการ`,
					className: "rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: /* @__PURE__ */ w(M, {
						variant: "secondary",
						className: "cursor-default px-2",
						children: "…"
					})
				})
			}), /* @__PURE__ */ T(_r, {
				align: "start",
				className: "w-auto min-w-44 p-3",
				children: [/* @__PURE__ */ T("p", {
					className: "mb-2 text-xs text-muted-foreground",
					children: [
						r,
						" (",
						t.length,
						")"
					]
				}), /* @__PURE__ */ w("div", {
					className: "flex flex-col items-start gap-1",
					children: t.map((t, n) => /* @__PURE__ */ w(e.Fragment, { children: t }, n))
				})]
			})]
		})]
	});
}
// src/components/patterns/blocker-badge.tsx
function oa({ children: e, variant: t = "destructive", ...n }) {
	return /* @__PURE__ */ T(M, {
		variant: t,
		...n,
		children: [/* @__PURE__ */ w(ie, {
			"data-icon": "inline-start",
			"aria-hidden": "true"
		}), e]
	});
}
// src/components/patterns/cell-stack.tsx
function sa({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "cell-stack",
		className: s("flex min-w-0 flex-col gap-0.5 py-1.5 text-xs leading-5", e),
		...t
	});
}
function ca({ label: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "labeled-line",
		className: s("flex min-w-0 items-center gap-1.5", n),
		...r,
		children: [/* @__PURE__ */ w("span", {
			className: "shrink-0 text-muted-foreground",
			children: e
		}), /* @__PURE__ */ w("span", {
			className: "min-w-0 truncate text-foreground",
			children: t
		})]
	});
}
// src/components/patterns/chart-card.tsx
function la({ title: t, description: n, table: r, children: i }) {
	let [a, o] = e.useState(!1), s = e.useId();
	return /* @__PURE__ */ T(zt, {
		"data-slot": "chart-card",
		children: [/* @__PURE__ */ T(Bt, { children: [
			/* @__PURE__ */ w(Vt, { children: t }),
			n && /* @__PURE__ */ w(Ht, { children: n }),
			/* @__PURE__ */ w("div", {
				className: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				children: /* @__PURE__ */ T(j, {
					variant: "ghost",
					size: "sm",
					"aria-pressed": a,
					"aria-controls": s,
					onClick: () => o((e) => !e),
					children: [w(a ? ue : Pe, { "data-icon": "inline-start" }), a ? "ดูกราฟ" : "ดูเป็นตาราง"]
				})
			})
		] }), /* @__PURE__ */ w(Wt, {
			id: s,
			children: a ? /* @__PURE__ */ T(H, { children: [
				/* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: t
				}),
				/* @__PURE__ */ w(U, { children: /* @__PURE__ */ T(G, { children: [/* @__PURE__ */ w(K, { children: r.rowLabel }), r.columns.map((e) => /* @__PURE__ */ w(K, {
					className: "text-right",
					children: e.label
				}, e.key))] }) }),
				/* @__PURE__ */ w(W, { children: r.rows.map((e) => /* @__PURE__ */ T(G, { children: [/* @__PURE__ */ w(q, { children: e[r.rowKey] }), r.columns.map((t) => /* @__PURE__ */ w(q, {
					className: "text-right",
					children: typeof e[t.key] == "number" ? e[t.key].toLocaleString("th-TH") : e[t.key]
				}, t.key))] }, String(e[r.rowKey]))) })
			] }) : i
		})]
	});
}
// src/components/patterns/combobox-search.ts
var J = (e) => e.normalize("NFC").toLowerCase().replace(/\s+/g, " ").trim();
function ua(e, t) {
	let n = J(t);
	return n ? e.filter((e) => J(e.label).includes(n)) : [...e];
}
function da(e, t) {
	let n = J(t);
	return n ? !e.some((e) => J(e.label) === n || J(e.value) === n) : !1;
}
// src/components/patterns/combobox.tsx
function fa({ value: t, options: n, onChange: r, onCreate: i, createLabel: a = (e) => `เพิ่ม "${e}"`, placeholder: o = "ค้นหา", emptyText: c = "ไม่พบรายการ", ariaLabel: l, className: u }) {
	let [d, f] = e.useState(!1), [p, m] = e.useState(""), h = ua(n, p), g = i !== void 0 && da(n, p), _ = n.find((e) => e.value === t);
	return /* @__PURE__ */ T(I, {
		open: d,
		onOpenChange: (e) => {
			f(e), e || m("");
		},
		children: [/* @__PURE__ */ w(L, {
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: "outline",
				role: "combobox",
				"aria-expanded": d,
				"aria-label": l,
				className: s("min-h-11 w-64 justify-between font-normal", u),
				children: [/* @__PURE__ */ w("span", {
					className: "truncate",
					children: _?.label ?? ""
				}), /* @__PURE__ */ w(he, {
					"data-icon": "inline-end",
					className: "opacity-50"
				})]
			})
		}), /* @__PURE__ */ w(R, {
			align: "start",
			className: "w-(--radix-popover-trigger-width) min-w-72 p-0",
			children: /* @__PURE__ */ T(On, {
				shouldFilter: !1,
				children: [/* @__PURE__ */ w(An, {
					value: p,
					onValueChange: m,
					placeholder: o
				}), /* @__PURE__ */ T(jn, { children: [h.length === 0 && !g && /* @__PURE__ */ w(Mn, { children: c }), /* @__PURE__ */ T(N, { children: [h.map((e) => /* @__PURE__ */ T(P, {
					value: e.value,
					className: "min-h-11",
					onSelect: () => {
						r(e.value), f(!1), m("");
					},
					children: [/* @__PURE__ */ w("span", {
						className: "flex-1",
						children: e.label
					}), e.value === t && /* @__PURE__ */ w(E, {})]
				}, e.value)), g && /* @__PURE__ */ T(P, {
					value: `__create__${p}`,
					className: "min-h-11 font-medium text-primary",
					onSelect: () => {
						let e = p.trim();
						f(!1), m(""), i?.(e);
					},
					children: [/* @__PURE__ */ w(De, {}), a(p.trim())]
				})] })] })]
			})
		})]
	});
}
// src/components/patterns/confirm-dialog.tsx
function pa({ trigger: t, title: n, description: r, confirmLabel: i, cancelLabel: a = "ยกเลิก", tone: o = "default", onConfirm: s }) {
	let [c, l] = e.useState(!1), [u, d] = e.useState(!1);
	async function f(e) {
		e.preventDefault(), d(!0);
		try {
			await s(), l(!1);
		} catch {} finally {
			d(!1);
		}
	}
	return /* @__PURE__ */ T(at, {
		open: c,
		onOpenChange: (e) => !u && l(e),
		children: [/* @__PURE__ */ w(ot, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ T(lt, { children: [/* @__PURE__ */ T(ut, { children: [/* @__PURE__ */ w(pt, { children: n }), /* @__PURE__ */ w(mt, { children: r })] }), /* @__PURE__ */ T(dt, { children: [/* @__PURE__ */ w(gt, {
			asChild: !0,
			children: /* @__PURE__ */ w(j, {
				variant: "outline",
				disabled: u,
				autoFocus: !0,
				children: a
			})
		}), /* @__PURE__ */ w(ht, {
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: o === "destructive" ? "destructive" : "default",
				onClick: f,
				disabled: u,
				"aria-busy": u,
				children: [u && /* @__PURE__ */ w(Li, { "data-icon": "inline-start" }), i]
			})
		})] })] })]
	});
}
// src/components/patterns/date-picker.tsx
var ma = (e) => e.toLocaleDateString("th-TH-u-ca-gregory", {
	day: "numeric",
	month: "short",
	year: "numeric"
});
function ha(e) {
	return {
		locale: Be,
		captionLayout: "dropdown",
		startMonth: new Date(e[0], 0),
		endMonth: new Date(e[1], 11),
		showOutsideDays: !1,
		formatters: { formatYearDropdown: (e) => String(e.getFullYear()) },
		labels: {
			labelMonthDropdown: () => "เดือน",
			labelYearDropdown: () => "ปี",
			labelNext: () => "เดือนถัดไป",
			labelPrevious: () => "เดือนก่อนหน้า"
		}
	};
}
var ga = [2020, 2035], _a = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), Y = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function va({ items: e }) {
	return /* @__PURE__ */ w("div", {
		role: "group",
		"aria-label": "ช่วงที่ใช้บ่อย",
		className: "flex w-0 min-w-full flex-wrap gap-1.5 border-t border-border p-3",
		children: e.map((e) => /* @__PURE__ */ w(M, {
			asChild: !0,
			variant: "secondary",
			children: /* @__PURE__ */ w("button", {
				type: "button",
				disabled: e.disabled,
				onClick: e.onPick,
				className: "h-control-sm cursor-pointer px-3 text-[13px] outline-none hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
				children: e.label
			})
		}, e.label))
	});
}
function ya(e = /* @__PURE__ */ new Date()) {
	let t = _a(e);
	return [
		{
			label: "วันนี้",
			date: t
		},
		{
			label: "เมื่อวาน",
			date: Y(t, -1)
		},
		{
			label: "7 วันที่แล้ว",
			date: Y(t, -7)
		},
		{
			label: "30 วันที่แล้ว",
			date: Y(t, -30)
		}
	];
}
function ba({ id: t, value: n, onChange: r, placeholder: i = "เลือกวันที่", disabled: a, invalid: o, min: c, max: l, defaultMonth: u, yearRange: d = ga, presets: f, className: p, ...m }) {
	let [h, g] = e.useState(!1), _ = [c && { before: c }, l && { after: l }].filter(Boolean);
	return /* @__PURE__ */ T(I, {
		open: h,
		onOpenChange: g,
		children: [/* @__PURE__ */ w(L, {
			asChild: !0,
			children: /* @__PURE__ */ T("button", {
				id: t,
				type: "button",
				disabled: a,
				"aria-invalid": o || void 0,
				"aria-label": m["aria-label"],
				"data-empty": !n || void 0,
				className: s("flex h-control w-full min-w-40 items-center justify-between gap-1.5 rounded-lg border border-input bg-background pr-2 pl-2 text-left text-base text-foreground transition-colors outline-none md:text-sm", "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground", "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground", "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30", "data-[empty]:text-foreground-secondary", p),
				children: [/* @__PURE__ */ w("span", {
					className: "truncate tabular-nums",
					children: n ? ma(n) : i
				}), /* @__PURE__ */ w(le, {
					className: "size-4 shrink-0 text-foreground-secondary",
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ T(R, {
			align: "start",
			className: "w-auto p-0",
			"aria-label": m["aria-label"] ?? i,
			children: [
				/* @__PURE__ */ w(Lt, {
					mode: "single",
					...ha(d),
					selected: n,
					defaultMonth: n ?? u,
					disabled: _,
					onSelect: (e) => {
						r(e), g(!1);
					}
				}),
				f && f.length > 0 && /* @__PURE__ */ w(va, { items: f.map((e) => ({
					label: e.label,
					disabled: !!(c && e.date < _a(c) || l && e.date > _a(l)),
					onPick: () => {
						r(e.date), g(!1);
					}
				})) }),
				n && /* @__PURE__ */ w("div", {
					className: "flex justify-end border-t border-border p-2",
					children: /* @__PURE__ */ T(j, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							r(void 0), g(!1);
						},
						children: [/* @__PURE__ */ w(k, { "data-icon": "inline-start" }), "ล้างวันที่"]
					})
				})
			]
		})]
	});
}
function xa({ id: t, value: n, onChange: r, placeholder: i = "เลือกช่วงวันที่", min: a, max: o, defaultMonth: c, yearRange: l = ga, today: u = /* @__PURE__ */ new Date(), className: d, ...f }) {
	let [p, m] = e.useState(!1), h = ti(), g = [a && { before: a }, o && { after: o }].filter(Boolean), _ = n.from ? `${ma(n.from)} – ${n.to ? ma(n.to) : "…"}` : i, v = _a(u), y = [
		{
			label: "วันนี้",
			range: {
				from: v,
				to: v
			}
		},
		{
			label: "7 วันล่าสุด",
			range: {
				from: Y(v, -6),
				to: v
			}
		},
		{
			label: "30 วันล่าสุด",
			range: {
				from: Y(v, -29),
				to: v
			}
		},
		{
			label: "เดือนนี้",
			range: {
				from: new Date(v.getFullYear(), v.getMonth(), 1),
				to: v
			}
		}
	];
	return /* @__PURE__ */ T(I, {
		open: p,
		onOpenChange: m,
		children: [/* @__PURE__ */ w(L, {
			asChild: !0,
			children: /* @__PURE__ */ T("button", {
				id: t,
				type: "button",
				"aria-label": f["aria-label"],
				"data-empty": !n.from || void 0,
				className: s("flex h-control w-full min-w-64 items-center justify-between gap-1.5 rounded-lg border border-input bg-background pr-2 pl-2 text-left text-base text-foreground transition-colors outline-none md:text-sm", "hover:border-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40", "data-[empty]:text-foreground-secondary", d),
				children: [/* @__PURE__ */ w("span", {
					className: "truncate tabular-nums",
					children: _
				}), /* @__PURE__ */ w(le, {
					className: "size-4 shrink-0 text-foreground-secondary",
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ T(R, {
			align: "start",
			className: "w-auto p-0",
			"aria-label": f["aria-label"] ?? i,
			children: [
				/* @__PURE__ */ w(Lt, {
					mode: "range",
					numberOfMonths: h ? 1 : 2,
					...ha(l),
					selected: n.from ? {
						from: n.from,
						to: n.to
					} : void 0,
					defaultMonth: n.from ?? c,
					disabled: g,
					onSelect: (e) => {
						r({
							from: e?.from,
							to: e?.to
						}), e?.from && e?.to && m(!1);
					}
				}),
				/* @__PURE__ */ w(va, { items: y.map((e) => ({
					label: e.label,
					onPick: () => {
						r(e.range), m(!1);
					}
				})) }),
				(n.from || n.to) && /* @__PURE__ */ w("div", {
					className: "flex justify-end border-t border-border p-2",
					children: /* @__PURE__ */ T(j, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							r({}), m(!1);
						},
						children: [/* @__PURE__ */ w(k, { "data-icon": "inline-start" }), "ล้างช่วงวันที่"]
					})
				})
			]
		})]
	});
}
function Sa({ value: t, onChange: n, fromLabel: r = "จากวันที่", toLabel: i = "ถึงวันที่", defaultMonth: a, yearRange: o, today: c, presets: l, className: u }) {
	let d = e.useId(), f = !!(t.from || t.to), p = l ?? ya(c);
	return /* @__PURE__ */ T("div", {
		"data-slot": "date-range-filter",
		className: s("flex w-full max-w-2xl items-end gap-3", u),
		children: [
			/* @__PURE__ */ T(cr, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ w(ur, {
					htmlFor: `${d}-from`,
					children: r
				}), /* @__PURE__ */ w(ba, {
					id: `${d}-from`,
					value: t.from,
					max: t.to,
					defaultMonth: a,
					yearRange: o,
					presets: p,
					className: "min-w-0",
					onChange: (e) => n({
						...t,
						from: e
					})
				})]
			}),
			/* @__PURE__ */ w("span", {
				"aria-hidden": !0,
				className: "flex h-control shrink-0 items-center text-muted-foreground",
				children: "–"
			}),
			/* @__PURE__ */ T(cr, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ w(ur, {
					htmlFor: `${d}-to`,
					children: i
				}), /* @__PURE__ */ w(ba, {
					id: `${d}-to`,
					value: t.to,
					min: t.from,
					defaultMonth: a,
					yearRange: o,
					presets: p,
					className: "min-w-0",
					onChange: (e) => n({
						...t,
						to: e
					})
				})]
			}),
			/* @__PURE__ */ T(j, {
				variant: "ghost",
				"aria-label": "ล้างตัวกรอง",
				className: s("shrink-0", !f && "invisible"),
				onClick: () => n({}),
				children: [/* @__PURE__ */ w(k, { "data-icon": "inline-start" }), /* @__PURE__ */ w("span", {
					className: "hidden sm:inline",
					children: "ล้างตัวกรอง"
				})]
			})
		]
	});
}
// src/components/patterns/feedback-states.tsx
function Ca({ kind: e, title: t, description: n, action: r }) {
	return /* @__PURE__ */ T(Yn, {
		"data-kind": e,
		className: "py-12",
		children: [/* @__PURE__ */ T(Xn, { children: [
			/* @__PURE__ */ w(Qn, {
				variant: "icon",
				children: /* @__PURE__ */ w(e === "no-data" ? ve : je, {})
			}),
			/* @__PURE__ */ w($n, { children: t ?? (e === "no-data" ? "ยังไม่มีข้อมูล" : "ไม่พบรายการที่ตรงกับตัวกรอง") }),
			/* @__PURE__ */ w(er, { children: n ?? (e === "no-data" ? "เมื่อมีข้อมูลเข้ามา รายการจะแสดงที่นี่" : "ลองเปลี่ยนคำค้นหาหรือล้างตัวกรองเพื่อดูรายการทั้งหมด") })
		] }), r && /* @__PURE__ */ w(tr, { children: r })]
	});
}
function wa({ title: e, description: t, reference: n, onRetry: r, retrying: i }) {
	return /* @__PURE__ */ T(Yn, {
		role: "alert",
		className: "py-12",
		children: [/* @__PURE__ */ T(Xn, { children: [
			/* @__PURE__ */ w(Qn, {
				variant: "icon",
				className: "bg-danger-subtle text-danger-foreground",
				children: /* @__PURE__ */ w(Me, {})
			}),
			/* @__PURE__ */ w($n, { children: e ?? "โหลดข้อมูลไม่สำเร็จ" }),
			/* @__PURE__ */ T(er, { children: [t ?? "เกิดข้อผิดพลาดระหว่างดึงข้อมูล ข้อมูลของคุณไม่ได้รับผลกระทบ ลองใหม่อีกครั้ง", n && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("br", {}), /* @__PURE__ */ T("span", {
				className: "font-mono text-xs",
				children: ["รหัสอ้างอิง ", n]
			})] })] })
		] }), r && /* @__PURE__ */ w(tr, { children: /* @__PURE__ */ T(j, {
			variant: "outline",
			onClick: r,
			disabled: i,
			"aria-busy": i,
			children: [/* @__PURE__ */ w(Oe, {
				"data-icon": "inline-start",
				className: i ? "animate-spin" : void 0
			}), "ลองใหม่"]
		}) })]
	});
}
// src/components/patterns/form-layout.tsx
function Ta({ hint: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sticky-actions",
		className: s("sticky bottom-0 z-10 -mx-4 flex flex-col gap-2 border-t bg-popover px-4 py-3 shadow-[0_-6px_12px_-10px_rgb(0_0_0/0.25)]", n),
		...r,
		children: [e, /* @__PURE__ */ w("div", {
			className: "flex flex-wrap items-center gap-2",
			children: t
		})]
	});
}
function Ea({ title: e, hint: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ T("section", {
		"data-slot": "form-section",
		className: s("flex flex-col gap-3 rounded-xl border p-4", r),
		...i,
		children: [/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w("h3", {
			className: "text-sm font-semibold",
			children: e
		}), t && /* @__PURE__ */ w("p", {
			className: "text-xs text-muted-foreground",
			children: t
		})] }), n]
	});
}
// src/components/patterns/stat-tone.ts
function Da(e) {
	return e === "danger" ? "destructive" : e === "neutral" ? "secondary" : e;
}
function Oa(e) {
	switch (e) {
		case "info": return "text-info-foreground";
		case "success": return "text-success-foreground";
		case "warning": return "text-warning-foreground";
		case "danger": return "text-danger-foreground";
		default: return "text-foreground";
	}
}
function ka(e) {
	switch (e) {
		case "info": return "bg-info";
		case "success": return "bg-success";
		case "warning": return "bg-warning";
		case "danger": return "bg-danger";
		default: return "bg-border";
	}
}
// src/components/patterns/kpi-card.tsx
function Aa({ label: e, value: t, sub: n, tone: r = "neutral", bar: i, pill: a, note: o, href: c, linkLabel: l, className: u, ...d }) {
	return /* @__PURE__ */ T(zt, {
		"data-slot": "kpi-card",
		className: s("relative overflow-hidden", u),
		...d,
		children: [i && /* @__PURE__ */ w("span", {
			"aria-hidden": "true",
			className: s("absolute inset-x-0 top-0 h-1", ka(i))
		}), /* @__PURE__ */ T(Bt, { children: [
			/* @__PURE__ */ w("p", {
				className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
				children: e
			}),
			/* @__PURE__ */ w(Vt, {
				className: s("text-3xl leading-none font-bold tabular-nums sm:text-4xl", Oa(r)),
				children: t
			}),
			n && /* @__PURE__ */ w("p", {
				className: "text-sm text-muted-foreground",
				children: n
			}),
			a && /* @__PURE__ */ w("div", { children: a }),
			o && /* @__PURE__ */ w("div", {
				className: "text-sm text-muted-foreground",
				children: o
			}),
			c && l && /* @__PURE__ */ w("a", {
				href: c,
				className: "inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline",
				children: l
			})
		] })]
	});
}
// src/components/patterns/page-header.tsx
function ja({ title: e, description: t, meta: n, actions: r, className: i }) {
	return /* @__PURE__ */ T("header", {
		"data-slot": "page-header",
		className: s("flex flex-wrap items-start justify-between gap-4", i),
		children: [/* @__PURE__ */ T("div", {
			className: "flex min-w-0 flex-col gap-1",
			children: [/* @__PURE__ */ T("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ w("h1", {
					className: "type-h1 text-foreground",
					children: e
				}), n]
			}), t && /* @__PURE__ */ w("p", {
				className: "text-sm text-muted-foreground",
				children: t
			})]
		}), r && /* @__PURE__ */ w("div", {
			className: "flex flex-wrap items-center gap-2",
			children: r
		})]
	});
}
// src/components/patterns/phone-text.tsx
function Ma({ children: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		...t,
		children: e
	});
}
// src/components/patterns/reason-dialog.tsx
function Na({ trigger: t, title: n, description: r, reasonLabel: i, confirmLabel: a, cancelLabel: o = "ยกเลิก", placeholder: s, onConfirm: c }) {
	let [l, u] = e.useState(!1), [d, f] = e.useState(""), [p, m] = e.useState(!1), h = e.useId();
	function g(e) {
		p || (u(e), e || f(""));
	}
	async function _(e) {
		e.preventDefault();
		let t = d.trim();
		if (t && !p) {
			m(!0);
			try {
				await c(t), u(!1), f("");
			} catch {} finally {
				m(!1);
			}
		}
	}
	return /* @__PURE__ */ T(cn, {
		open: l,
		onOpenChange: g,
		children: [/* @__PURE__ */ w(ln, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ T(pn, {
			showCloseButton: !p,
			onEscapeKeyDown: (e) => p && e.preventDefault(),
			onPointerDownOutside: (e) => p && e.preventDefault(),
			children: [/* @__PURE__ */ T(mn, { children: [/* @__PURE__ */ w(gn, { children: n }), /* @__PURE__ */ w(_n, { children: r })] }), /* @__PURE__ */ T("form", {
				onSubmit: _,
				children: [/* @__PURE__ */ w(or, { children: /* @__PURE__ */ T(cr, { children: [/* @__PURE__ */ w(ur, {
					htmlFor: h,
					children: i
				}), /* @__PURE__ */ w(yn, {
					id: h,
					value: d,
					onChange: (e) => f(e.target.value),
					placeholder: s,
					required: !0,
					disabled: p
				})] }) }), /* @__PURE__ */ T(hn, {
					className: "mt-4",
					children: [/* @__PURE__ */ w(j, {
						type: "button",
						variant: "outline",
						disabled: p,
						onClick: () => g(!1),
						children: o
					}), /* @__PURE__ */ T(j, {
						type: "submit",
						disabled: p || !d.trim(),
						"aria-busy": p,
						children: [p && /* @__PURE__ */ w(Li, { "data-icon": "inline-start" }), a]
					})]
				})]
			})]
		})]
	});
}
// src/components/patterns/row-flag.tsx
var Pa = {
	danger: Fe,
	info: Ne
};
function Fa({ tone: e, icon: t, label: n, className: r, ...i }) {
	let a = t ?? Pa[e];
	return /* @__PURE__ */ w("span", {
		"data-row-flag": e,
		role: "img",
		"aria-label": n,
		title: n,
		className: s("inline-flex shrink-0 items-center", e === "danger" ? "text-destructive" : "text-info", r),
		...i,
		children: /* @__PURE__ */ w(a, {
			className: "size-5",
			"aria-hidden": "true"
		})
	});
}
// src/components/patterns/stat-pill.tsx
function Ia({ tone: e = "neutral", className: t, ...n }) {
	return /* @__PURE__ */ w(M, {
		variant: Da(e),
		className: s("tabular-nums", t),
		...n
	});
}
// src/components/patterns/status-badge.tsx
function La({ children: e, variant: t = "secondary", ...n }) {
	return /* @__PURE__ */ T(M, {
		variant: t,
		...n,
		children: [/* @__PURE__ */ w(kt, {}), e]
	});
}
// src/components/patterns/user-menu.tsx
var Ra = (e) => e.trim().split(/\s+/).slice(0, 2).map((e) => e[0]).join("").toUpperCase();
function za({ user: e }) {
	return /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(St, {
		className: "size-8 rounded-lg",
		children: /* @__PURE__ */ w(wt, {
			className: "rounded-lg",
			children: Ra(e.name)
		})
	}), /* @__PURE__ */ T("div", {
		className: "grid flex-1 text-left text-sm leading-tight",
		children: [/* @__PURE__ */ w("span", {
			className: "truncate font-medium",
			children: e.name
		}), /* @__PURE__ */ w("span", {
			className: "truncate text-xs text-muted-foreground",
			children: e.email
		})]
	})] });
}
function Ba({ user: t, onLogout: n }) {
	let [r, i] = e.useState(!1);
	async function a() {
		i(!0);
		try {
			await n();
		} finally {
			i(!1);
		}
	}
	return /* @__PURE__ */ w(Oi, { children: /* @__PURE__ */ w(B, { children: /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(F, {
		asChild: !0,
		children: /* @__PURE__ */ T(V, {
			tooltip: t.name,
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
			children: [/* @__PURE__ */ w(St, {
				className: "size-6 rounded-full",
				children: /* @__PURE__ */ w(wt, {
					className: "rounded-full text-[10px]",
					children: Ra(t.name)
				})
			}), /* @__PURE__ */ w("span", {
				className: "truncate",
				children: t.name
			})]
		})
	}), /* @__PURE__ */ T(Ln, {
		className: "min-w-56 rounded-lg",
		side: "right",
		align: "end",
		sideOffset: 8,
		children: [
			/* @__PURE__ */ w(Un, {
				className: "flex items-center gap-2 p-1.5 font-normal",
				children: /* @__PURE__ */ w(za, { user: t })
			}),
			/* @__PURE__ */ w(Wn, {}),
			/* @__PURE__ */ w(Rn, { children: /* @__PURE__ */ T(zn, {
				disabled: !0,
				children: [
					/* @__PURE__ */ w(ce, {}),
					"บทบาท: ",
					t.role
				]
			}) }),
			/* @__PURE__ */ w(Wn, {}),
			/* @__PURE__ */ T(zn, {
				onSelect: a,
				disabled: r,
				children: [/* @__PURE__ */ w(xe, {}), r ? "กำลังออกจากระบบ…" : "ออกจากระบบ"]
			})
		]
	})] }) }) });
}
// src/components/patterns/data-table/data-table.tsx
var Va = "button, a, input, label, [role=checkbox], [role=menuitem]";
function Ha({ table: e, caption: t, status: n = "ready", empty: r, error: i, loadingRows: a = 10, onRowClick: o, className: c }) {
	let l = e.getVisibleLeafColumns(), u = e.getRowModel().rows;
	return /* @__PURE__ */ w("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", c),
		children: /* @__PURE__ */ T(H, {
			"aria-busy": n === "loading",
			children: [
				/* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: t
				}),
				/* @__PURE__ */ w(U, {
					className: "sticky top-0 z-10",
					children: e.getHeaderGroups().map((t) => /* @__PURE__ */ w(G, { children: t.headers.map((t) => {
						let n = t.column.columnDef.meta, r = t.column.getIsSorted();
						return /* @__PURE__ */ w(K, {
							"aria-sort": r === "asc" ? "ascending" : r === "desc" ? "descending" : t.column.getCanSort() ? "none" : void 0,
							className: s(n?.align === "right" && "text-right", n?.sticky && "sticky left-0 z-10 bg-secondary"),
							children: t.isPlaceholder ? null : /* @__PURE__ */ w(e.FlexRender, { header: t })
						}, t.id);
					}) }, t.id))
				}),
				/* @__PURE__ */ T(W, { children: [
					n === "loading" && Array.from({ length: a }, (e, t) => /* @__PURE__ */ w(G, {
						className: "hover:bg-transparent",
						children: l.map((e) => /* @__PURE__ */ w(q, { children: /* @__PURE__ */ w(ni, { className: "h-4 w-full max-w-32" }) }, e.id))
					}, `skeleton-${t}`)),
					n === "error" && /* @__PURE__ */ w(G, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ w(q, {
							colSpan: l.length,
							className: "h-auto p-0 whitespace-normal",
							children: i
						})
					}),
					n === "ready" && u.length === 0 && /* @__PURE__ */ w(G, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ w(q, {
							colSpan: l.length,
							className: "h-auto p-0 whitespace-normal",
							children: r
						})
					}),
					n === "ready" && u.map((t) => /* @__PURE__ */ w(G, {
						"data-state": t.getIsSelected() ? "selected" : void 0,
						className: s(o && "cursor-pointer"),
						onClick: o ? (e) => {
							e.target.closest(Va) || o(t);
						} : void 0,
						children: t.getVisibleCells().map((t) => {
							let n = t.column.columnDef.meta;
							return /* @__PURE__ */ w(q, {
								className: s(n?.align === "right" && "text-right", n?.sticky && "sticky left-0 bg-inherit"),
								children: /* @__PURE__ */ w(e.FlexRender, { cell: t })
							}, t.id);
						})
					}, t.id))
				] })
			]
		})
	});
}
// src/components/patterns/data-table/data-table-column-header.tsx
function Ua({ column: e, title: t, className: n }) {
	if (!e.getCanSort()) return /* @__PURE__ */ w("span", {
		className: n,
		children: t
	});
	let r = e.getIsSorted(), i = r === "asc" ? se : r === "desc" ? ae : he, a = e.getNextSortingOrder(), o = a === "asc" ? "เรียงจากน้อยไปมาก" : a === "desc" ? "เรียงจากมากไปน้อย" : "ยกเลิกการเรียง";
	return /* @__PURE__ */ T(j, {
		variant: "ghost",
		size: "sm",
		className: s("-mx-3 h-control-sm px-3 font-medium text-foreground-secondary data-[sorted=true]:text-primary", e.columnDef.meta?.align === "right" && "flex-row-reverse", n),
		"data-sorted": !!r,
		"aria-label": `${t}: ${o}`,
		onClick: e.getToggleSortingHandler(),
		children: [t, /* @__PURE__ */ w(i, {
			"data-icon": "inline-end",
			className: s("size-3.5", !r && "opacity-50"),
			"aria-hidden": !0
		})]
	});
}
// src/components/patterns/data-table/data-table-faceted-filter.tsx
function Wa({ column: e, title: t, options: n }) {
	let r = new Set(e?.getFilterValue() ?? []);
	function i(t) {
		let n = new Set(r);
		n.has(t) ? n.delete(t) : n.add(t), e?.setFilterValue(n.size ? [...n] : void 0);
	}
	return /* @__PURE__ */ T(I, { children: [/* @__PURE__ */ w(L, {
		asChild: !0,
		children: /* @__PURE__ */ T(j, {
			variant: "outline",
			className: "border-dashed text-foreground",
			children: [
				/* @__PURE__ */ w(Ee, { "data-icon": "inline-start" }),
				t,
				r.size > 0 && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(rr, {
					orientation: "vertical",
					className: "mx-1 h-4"
				}), r.size > 2 ? /* @__PURE__ */ T(M, {
					variant: "accent",
					children: ["เลือก ", r.size]
				}) : n.filter((e) => r.has(e.value)).map((e) => /* @__PURE__ */ w(M, {
					variant: "accent",
					children: e.label
				}, e.value))] })
			]
		})
	}), /* @__PURE__ */ w(R, {
		className: "w-64 p-0",
		align: "start",
		children: /* @__PURE__ */ T(On, { children: [/* @__PURE__ */ w(An, { placeholder: `ค้นหา${t}` }), /* @__PURE__ */ T(jn, { children: [
			/* @__PURE__ */ w(Mn, { children: "ไม่พบตัวเลือก" }),
			/* @__PURE__ */ w(N, { children: n.map((e) => {
				let t = r.has(e.value);
				return /* @__PURE__ */ T(P, {
					onSelect: () => i(e.value),
					"aria-selected": t,
					children: [
						/* @__PURE__ */ w("span", {
							"aria-hidden": !0,
							className: s("flex size-4 items-center justify-center rounded-sm border border-input", t && "border-primary bg-primary text-primary-foreground"),
							children: t && /* @__PURE__ */ w(E, { className: "size-3" })
						}),
						/* @__PURE__ */ w("span", {
							className: "flex-1",
							children: e.label
						}),
						e.count !== void 0 && /* @__PURE__ */ w("span", {
							className: "font-mono text-xs text-muted-foreground tabular-nums",
							children: e.count
						})
					]
				}, e.value);
			}) }),
			r.size > 0 && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(Nn, {}), /* @__PURE__ */ w(N, { children: /* @__PURE__ */ w(P, {
				onSelect: () => e?.setFilterValue(void 0),
				className: "justify-center",
				children: "ล้างตัวกรองนี้"
			}) })] })
		] })] })
	})] });
}
// src/components/patterns/data-table/data-table-pagination.tsx
var X = new Intl.NumberFormat("th-TH");
function Ga({ table: t, pageSizes: n = [
	20,
	50,
	100
] }) {
	let { pageIndex: r, pageSize: i } = t.state.pagination, a = t.getRowCount(), o = a === 0 ? 0 : r * i + 1, s = Math.min(a, (r + 1) * i), c = Object.keys(t.state.rowSelection ?? {}).length, l = e.useId();
	return /* @__PURE__ */ T("nav", {
		"aria-label": "แบ่งหน้า",
		"data-slot": "data-table-pagination",
		className: "flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ T("p", {
			"aria-live": "polite",
			className: "tabular-nums",
			children: [
				"แสดง ",
				X.format(o),
				"–",
				X.format(s),
				" จาก ",
				X.format(a),
				" รายการ",
				c > 0 && /* @__PURE__ */ T("span", {
					className: "text-foreground",
					children: [" · เลือกแล้ว ", X.format(c)]
				})
			]
		}), /* @__PURE__ */ T("div", {
			className: "flex items-center gap-4",
			children: [
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ w("span", {
						id: l,
						className: "hidden sm:inline",
						children: "แถวต่อหน้า"
					}), /* @__PURE__ */ T(Nr, {
						value: String(i),
						onValueChange: (e) => t.setPageSize(Number(e)),
						children: [/* @__PURE__ */ w(Ir, {
							className: "w-20",
							"aria-labelledby": l,
							children: /* @__PURE__ */ w(Fr, {})
						}), /* @__PURE__ */ w(Lr, { children: /* @__PURE__ */ w(Pr, { children: n.map((e) => /* @__PURE__ */ w(zr, {
							value: String(e),
							children: e
						}, e)) }) })]
					})]
				}),
				/* @__PURE__ */ T("span", {
					className: "tabular-nums text-foreground",
					children: [
						"หน้า ",
						X.format(r + 1),
						" / ",
						X.format(Math.max(1, t.getPageCount()))
					]
				}),
				/* @__PURE__ */ T("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ w(j, {
							variant: "outline",
							size: "icon",
							className: "hidden lg:inline-flex",
							"aria-label": "หน้าแรก",
							onClick: () => t.setPageIndex(0),
							disabled: !t.getCanPreviousPage(),
							children: /* @__PURE__ */ w(pe, {})
						}),
						/* @__PURE__ */ w(j, {
							variant: "outline",
							size: "icon",
							"aria-label": "หน้าก่อนหน้า",
							onClick: () => t.previousPage(),
							disabled: !t.getCanPreviousPage(),
							children: /* @__PURE__ */ w(de, {})
						}),
						/* @__PURE__ */ w(j, {
							variant: "outline",
							size: "icon",
							"aria-label": "หน้าถัดไป",
							onClick: () => t.nextPage(),
							disabled: !t.getCanNextPage(),
							children: /* @__PURE__ */ w(O, {})
						}),
						/* @__PURE__ */ w(j, {
							variant: "outline",
							size: "icon",
							className: "hidden lg:inline-flex",
							"aria-label": "หน้าสุดท้าย",
							onClick: () => t.setPageIndex(t.getPageCount() - 1),
							disabled: !t.getCanNextPage(),
							children: /* @__PURE__ */ w(me, {})
						})
					]
				})
			]
		})]
	});
}
// src/components/patterns/data-table/data-table-toolbar.tsx
function Ka({ table: t, searchPlaceholder: n = "ค้นหา", debounce: r = 300, filters: i, actions: a, columnsMenu: o = !0 }) {
	let s = t.state.globalFilter ?? "", [c, l] = e.useState(s), u = t.state.columnFilters.length > 0 || s !== "";
	e.useEffect(() => {
		if (c === s) return;
		let e = setTimeout(() => t.setGlobalFilter(c || void 0), r);
		return () => clearTimeout(e);
	}, [
		c,
		s,
		r,
		t
	]);
	function d() {
		l(""), t.resetColumnFilters(), t.setGlobalFilter(void 0);
	}
	return /* @__PURE__ */ T("div", {
		"data-slot": "data-table-toolbar",
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ T(bn, {
				className: "w-full sm:w-72",
				children: [
					/* @__PURE__ */ w(Sn, { children: /* @__PURE__ */ w(Ae, {}) }),
					/* @__PURE__ */ w(En, {
						type: "search",
						"aria-label": n,
						placeholder: n,
						value: c,
						onChange: (e) => l(e.target.value)
					}),
					c && /* @__PURE__ */ w(Sn, {
						align: "inline-end",
						children: /* @__PURE__ */ w(wn, {
							size: "icon-xs",
							"aria-label": "ล้างคำค้นหา",
							onClick: () => l(""),
							children: /* @__PURE__ */ w(k, {})
						})
					})
				]
			}),
			i,
			u && /* @__PURE__ */ T(j, {
				variant: "ghost",
				onClick: d,
				children: ["ล้างตัวกรอง", /* @__PURE__ */ w(k, { "data-icon": "inline-end" })]
			}),
			/* @__PURE__ */ T("div", {
				className: "ml-auto flex items-center gap-2",
				children: [a, o && /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(F, {
					asChild: !0,
					children: /* @__PURE__ */ T(j, {
						variant: "outline",
						children: [/* @__PURE__ */ w(_e, { "data-icon": "inline-start" }), "คอลัมน์"]
					})
				}), /* @__PURE__ */ w(Ln, {
					align: "end",
					className: "w-52",
					children: /* @__PURE__ */ T(Rn, { children: [
						/* @__PURE__ */ w(Un, { children: "แสดงคอลัมน์" }),
						/* @__PURE__ */ w(Wn, {}),
						t.getAllLeafColumns().filter((e) => e.getCanHide()).map((e) => /* @__PURE__ */ w(Bn, {
							checked: e.getIsVisible(),
							onCheckedChange: (t) => e.toggleVisibility(!!t),
							onSelect: (e) => e.preventDefault(),
							children: e.columnDef.meta?.label ?? e.id
						}, e.id))
					] })
				})] })]
			})
		]
	});
}
// src/components/patterns/data-table/features.ts
var qa = rt({
	rowSortingFeature: Qe,
	columnFilteringFeature: He,
	globalFilteringFeature: Ye,
	rowPaginationFeature: Xe,
	rowSelectionFeature: Ze,
	columnVisibilityFeature: Ue,
	sortedRowModel: Ke(),
	filteredRowModel: We(),
	paginatedRowModel: Ge(),
	filterFns: {
		includesString: Je,
		arrIncludesSome: qe
	},
	sortFns: {
		alphanumeric: $e,
		text: nt,
		datetime: tt,
		basic: et
	},
	columnMeta: {}
}), Ja = 64, Ya = 800, Xa = 160, Za = 16, Qa = "moove-table:", $a = 1;
function eo(e) {
	return Number.isFinite(e) ? Math.round(Math.min(800, Math.max(64, e))) : 160;
}
function Z(e, t) {
	let n = new Set(t), r = e.filter((t, r) => n.has(t) && e.indexOf(t) === r);
	return t.forEach((e, n) => {
		if (r.includes(e)) return;
		let i = 0;
		for (let e = n - 1; e >= 0; e--) {
			let n = r.indexOf(t[e]);
			if (n >= 0) {
				i = n + 1;
				break;
			}
		}
		r.splice(i, 0, e);
	}), r;
}
function to(e, t, n) {
	let r = e.indexOf(t), i = e.indexOf(n);
	if (r < 0 || i < 0 || r === i) return [...e];
	let a = [...e];
	return a.splice(r, 1), a.splice(i, 0, t), a;
}
function no(e, t, n, r) {
	let i = r ? e.filter((e) => e === t || r.includes(e)) : [...e], a = i.indexOf(t), o = i[a + n];
	return a < 0 || o === void 0 ? [...e] : to(e, t, o);
}
function ro(e, t, n = [], r = []) {
	let i = new Map(e.map((e) => [e.id, e])), a = (e) => e.map((e) => i.get(e)).filter((e) => e !== void 0), o = a(n), s = a(t.filter((e) => !n.includes(e) && !r.includes(e))), c = a(r), l = /* @__PURE__ */ new Set([
		...o,
		...s,
		...c
	]), u = e.filter((e) => !l.has(e));
	return [
		...o,
		...s,
		...u,
		...c
	];
}
function io(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
function ao(e, t) {
	return io(Z(e.order, t), t) && Object.keys(e.widths).length === 0;
}
function oo(e) {
	return {
		order: [...e],
		widths: {}
	};
}
function so(e, t) {
	switch (t.type) {
		case "load": return {
			order: Z(t.layout.order, t.ids),
			widths: co(t.layout.widths)
		};
		case "move": {
			let n = Z(e.order, t.ids), r = no(n, t.id, t.delta, t.visible);
			return io(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "moveTo": {
			let n = Z(e.order, t.ids), r = to(n, t.id, t.targetId);
			return io(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "resize": {
			let n = eo(t.width);
			return e.widths[t.id] === n ? e : {
				...e,
				widths: {
					...e.widths,
					[t.id]: n
				}
			};
		}
		case "ensureWidths": {
			let n = Object.entries(t.widths).filter(([t, n]) => e.widths[t] === void 0 && Number.isFinite(n) && n > 0);
			return n.length === 0 ? e : {
				...e,
				widths: {
					...e.widths,
					...Object.fromEntries(n.map(([e, t]) => [e, Math.round(t)]))
				}
			};
		}
		case "reset": return {
			order: [...t.ids],
			widths: {}
		};
	}
}
function co(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) typeof r == "number" && Number.isFinite(r) && r > 0 && (t[n] = Math.round(Math.min(800, r)));
	return t;
}
function lo(e) {
	return `${Qa}${e}`;
}
function uo(e, t) {
	if (!e) return null;
	try {
		let n = e.getItem(lo(t));
		if (!n) return null;
		let r = JSON.parse(n);
		if (r.v !== $a || !Array.isArray(r.order) || !r.order.every((e) => typeof e == "string")) return null;
		let i = r.widths && typeof r.widths == "object" && !Array.isArray(r.widths) ? co(r.widths) : {};
		return {
			order: r.order,
			widths: i
		};
	} catch {
		return null;
	}
}
function fo(e, t, n, r) {
	if (e) try {
		ao(n, r) ? e.removeItem(lo(t)) : e.setItem(lo(t), JSON.stringify({
			v: $a,
			order: n.order,
			widths: n.widths
		}));
	} catch {}
}
function po() {
	try {
		return typeof window > "u" ? null : window.localStorage;
	} catch {
		return null;
	}
}
function mo(e) {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
	return (t >>> 0).toString(36);
}
function ho(e, t) {
	let n = e.some((e) => t[e] !== void 0), r = e.map((e) => n ? t[e] ?? 160 : void 0);
	return {
		fixed: n,
		colWidths: r,
		totalWidth: r.reduce((e, t) => e + (t ?? 0), 0)
	};
}
// src/components/patterns/data-table/column-layout-parts.tsx
var Q = {
	arrange: "คอลัมน์",
	arrangeTitle: "แสดงและจัดคอลัมน์",
	arrangeHint: "ติ๊กเพื่อแสดงหรือซ่อน กดลูกศรเพื่อย้าย (บนสุดคือซ้ายสุดของตาราง) ปรับความกว้างได้โดยลากขีดที่ขอบขวาของหัวคอลัมน์",
	listLabel: "ลำดับคอลัมน์",
	reset: "รีเซ็ตคอลัมน์",
	show: (e) => `แสดงคอลัมน์ ${e}`,
	moveLeft: (e) => `ย้าย ${e} ไปทางซ้าย`,
	moveRight: (e) => `ย้าย ${e} ไปทางขวา`,
	resize: (e) => `ปรับความกว้างคอลัมน์ ${e} กดลูกศรซ้ายหรือขวา`
};
function go(e) {
	let t = {};
	return e.closest("table")?.querySelectorAll("thead th[data-col-id]").forEach((e) => {
		let n = e.dataset.colId;
		n && (t[n] = Math.ceil(e.getBoundingClientRect().width) + 1);
	}), t;
}
function _o({ layout: e, id: t, label: n }) {
	let i = r(null), a = r(0), o = e.widths[t], s = (n) => {
		if (o !== void 0) return o;
		let r = go(n);
		return e.ensureWidths(r), r[t] ?? 160;
	}, c = (t) => {
		if (t.pointerType !== "mouse" || t.button === 0) {
			t.preventDefault(), t.stopPropagation(), e.drag.lock(!0), i.current = {
				x: t.clientX,
				width: s(t.currentTarget)
			};
			try {
				t.currentTarget.setPointerCapture(t.pointerId);
			} catch {}
		}
	}, l = (n) => {
		let r = i.current;
		if (!r) return;
		n.preventDefault();
		let o = r.width + (n.clientX - r.x);
		cancelAnimationFrame(a.current), a.current = requestAnimationFrame(() => e.resize(t, o));
	}, u = (t) => {
		if (i.current) {
			i.current = null, e.drag.lock(!1);
			try {
				t.currentTarget.releasePointerCapture(t.pointerId);
			} catch {}
		}
	};
	return /* @__PURE__ */ w("div", {
		role: "separator",
		"aria-orientation": "vertical",
		"aria-label": Q.resize(n),
		"aria-valuenow": o,
		"aria-valuemin": 64,
		"aria-valuemax": 800,
		tabIndex: 0,
		"data-slot": "column-resize-handle",
		onPointerDown: c,
		onPointerMove: l,
		onPointerUp: u,
		onPointerCancel: u,
		onLostPointerCapture: u,
		onKeyDown: (n) => {
			if (n.key !== "ArrowLeft" && n.key !== "ArrowRight") return;
			n.preventDefault();
			let r = 16 * (n.shiftKey ? 4 : 1);
			e.resize(t, s(n.currentTarget) + (n.key === "ArrowRight" ? r : -r));
		},
		onClick: (e) => e.stopPropagation(),
		className: "absolute inset-y-0 right-0 flex w-3 cursor-col-resize touch-none items-center justify-end outline-none select-none after:h-6 after:w-px after:bg-border hover:after:w-0.5 hover:after:bg-primary focus-visible:bg-accent focus-visible:after:w-0.5 focus-visible:after:bg-primary active:after:w-0.5 active:after:bg-primary pointer-coarse:w-6"
	});
}
function vo({ layout: e, id: t, label: n, movable: r, resizable: i, className: a, ariaSort: o, children: c }) {
	let { drag: l } = e;
	return /* @__PURE__ */ T(K, {
		"data-col-id": t,
		"aria-sort": o,
		draggable: r || void 0,
		className: s(a, l.overId === t && "bg-accent ring-2 ring-primary ring-inset"),
		onDragStart: r ? (e) => {
			if (l.locked()) return e.preventDefault();
			e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", t), l.start(t);
		} : void 0,
		onDragOver: r ? (e) => {
			l.over(t) && (e.preventDefault(), e.dataTransfer.dropEffect = "move");
		} : void 0,
		onDrop: r ? (e) => {
			e.preventDefault(), l.drop(t);
		} : void 0,
		onDragEnd: r ? () => l.end() : void 0,
		children: [c, i && /* @__PURE__ */ w(_o, {
			layout: e,
			id: t,
			label: n
		})]
	});
}
function yo({ ids: e, sizing: t }) {
	return t.fixed ? /* @__PURE__ */ T("colgroup", { children: [e.map((e, n) => /* @__PURE__ */ w("col", { style: { width: t.colWidths[n] } }, e)), /* @__PURE__ */ w("col", {})] }) : null;
}
function bo({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ w(K, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function xo({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ w(q, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function So(e) {
	return e.fixed ? {
		"data-layout": "fixed",
		style: {
			tableLayout: "fixed",
			width: `max(100%, ${e.totalWidth}px)`,
			minWidth: e.totalWidth
		}
	} : {};
}
function Co({ layout: e, table: t, items: n }) {
	let r = t?.getAllLeafColumns() ?? [], i = new Map(r.map((e) => [e.id, e])), a = t ? e.order.flatMap((e) => {
		let t = i.get(e);
		return t ? [{
			id: e,
			label: t.columnDef.meta?.label ?? (typeof t.columnDef.header == "string" ? t.columnDef.header : t.id),
			shown: t.getIsVisible(),
			canHide: t.getCanHide(),
			toggle: (e) => t.toggleVisibility(e)
		}] : [];
	}) : (n ?? []).map((e) => ({
		id: e.id,
		label: e.label,
		shown: !0,
		canHide: !1,
		toggle: () => {}
	})), o = a.filter((e) => e.shown).map((e) => e.id), s = (e) => e.label, c = () => {
		e.reset(), t?.resetColumnVisibility();
	}, l = e.isCustom || a.some((e) => e.canHide && !e.shown);
	return /* @__PURE__ */ T(I, { children: [/* @__PURE__ */ w(L, {
		asChild: !0,
		children: /* @__PURE__ */ T(j, {
			variant: "outline",
			children: [/* @__PURE__ */ w(oe, { "data-icon": "inline-start" }), Q.arrange]
		})
	}), /* @__PURE__ */ T(R, {
		align: "end",
		className: "w-80 gap-0 p-0",
		children: [
			/* @__PURE__ */ T(Er, {
				className: "p-3",
				children: [/* @__PURE__ */ w(Dr, { children: Q.arrangeTitle }), /* @__PURE__ */ w(Or, { children: Q.arrangeHint })]
			}),
			/* @__PURE__ */ w("ol", {
				"aria-label": Q.listLabel,
				className: "max-h-[50dvh] overflow-y-auto border-y py-1",
				children: a.map((t) => {
					let n = t.shown, r = o.indexOf(t.id);
					return /* @__PURE__ */ T("li", {
						className: "flex items-center gap-1 px-3",
						children: [
							/* @__PURE__ */ T("label", {
								className: "flex min-h-11 min-w-0 flex-1 items-center gap-3 text-sm",
								children: [/* @__PURE__ */ w(rn, {
									checked: n,
									disabled: !t.canHide,
									onCheckedChange: (e) => t.toggle(e === !0),
									"aria-label": Q.show(s(t))
								}), /* @__PURE__ */ w("span", {
									className: "min-w-0 flex-1 truncate",
									children: s(t)
								})]
							}),
							/* @__PURE__ */ w(j, {
								size: "icon",
								variant: "ghost",
								"aria-label": Q.moveLeft(s(t)),
								disabled: !n || r <= 0,
								onClick: () => e.move(t.id, -1, o),
								children: /* @__PURE__ */ w(fe, {})
							}),
							/* @__PURE__ */ w(j, {
								size: "icon",
								variant: "ghost",
								"aria-label": Q.moveRight(s(t)),
								disabled: !n || r === o.length - 1,
								onClick: () => e.move(t.id, 1, o),
								children: /* @__PURE__ */ w(D, {})
							})
						]
					}, t.id);
				})
			}),
			/* @__PURE__ */ w("div", {
				className: "p-3",
				children: /* @__PURE__ */ T(j, {
					variant: "outline",
					className: "w-full",
					disabled: !l,
					onClick: c,
					children: [/* @__PURE__ */ w(ke, { "data-icon": "inline-start" }), Q.reset]
				})
			})
		]
	})] });
}
// src/components/patterns/data-table/column-layout-data-table.tsx
var wo = "button, a, input, label, [role=checkbox], [role=menuitem], [role=separator]";
function To({ table: e, layout: t, caption: n, empty: r, onRowClick: i, className: a }) {
	let o = e.getVisibleLeafColumns().map((e) => e.id), c = ho(o, t.widths), l = e.getRowModel().rows, u = new Set(t.order);
	return /* @__PURE__ */ w("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", a),
		children: /* @__PURE__ */ T(H, {
			...So(c),
			children: [
				/* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: n
				}),
				/* @__PURE__ */ w(yo, {
					ids: o,
					sizing: c
				}),
				/* @__PURE__ */ w(U, {
					className: "sticky top-0 z-10",
					children: e.getHeaderGroups().map((e) => /* @__PURE__ */ T(G, { children: [e.headers.map((e) => {
						let n = e.column, r = n.columnDef.meta, i = n.getIsSorted();
						return /* @__PURE__ */ w(vo, {
							layout: t,
							id: n.id,
							label: Eo(n.columnDef.meta, n.columnDef.header, n.id),
							movable: u.has(n.id),
							resizable: u.has(n.id),
							ariaSort: i === "asc" ? "ascending" : i === "desc" ? "descending" : n.getCanSort() ? "none" : void 0,
							className: s(r?.align === "right" && "text-right", r?.sticky && "sticky left-0 z-10 bg-secondary"),
							children: e.isPlaceholder ? null : /* @__PURE__ */ w(Ve, { header: e })
						}, e.id);
					}), /* @__PURE__ */ w(bo, { sizing: c })] }, e.id))
				}),
				/* @__PURE__ */ w(W, { children: l.length === 0 ? /* @__PURE__ */ w(G, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ w(q, {
						colSpan: o.length + +!!c.fixed,
						className: "h-auto p-0 whitespace-normal",
						children: r
					})
				}) : l.map((e) => /* @__PURE__ */ T(G, {
					"data-state": e.getIsSelected() ? "selected" : void 0,
					className: s(i && "cursor-pointer"),
					onClick: i ? (t) => !t.target.closest(wo) && i(e) : void 0,
					children: [e.getVisibleCells().map((e) => {
						let t = e.column.columnDef.meta;
						return /* @__PURE__ */ w(q, {
							className: s(t?.align === "right" && "text-right", t?.sticky && "sticky left-0 bg-inherit"),
							children: /* @__PURE__ */ w(Ve, { cell: e })
						}, e.id);
					}), /* @__PURE__ */ w(xo, { sizing: c })]
				}, e.id)) })
			]
		})
	});
}
function Eo(e, t, n) {
	return e?.label ?? (typeof t == "string" ? t : n);
}
function Do(e, t) {
	let n = new Set(t.order);
	return e.getVisibleLeafColumns().filter((e) => n.has(e.id)).map((e) => ({
		id: e.id,
		label: Eo(e.columnDef.meta, e.columnDef.header, e.id)
	}));
}
// src/components/patterns/data-table/use-column-layout.ts
var Oo = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map();
function Ao(e) {
	return Oo.has(e) || Oo.set(e, uo(po(), e)), Oo.get(e) ?? null;
}
function jo(e, t, n) {
	Oo.set(e, t), fo(po(), e, t, n);
	for (let t of ko.get(e) ?? []) t();
}
function Mo(e, t) {
	let n = ko.get(e) ?? /* @__PURE__ */ new Set();
	return n.add(t), ko.set(e, n), () => n.delete(t);
}
var No = () => null;
function Po(e, o) {
	let s = o.join("\0"), c = n(() => [...o], [s]), l = a(t((t) => Mo(e, t), [e]), () => Ao(e), No), u = n(() => oo(c), [c]), d = l ?? u, f = n(() => Z(d.order, c), [d.order, c]), p = d.widths, m = t((t) => {
		let n = Ao(e) ?? oo(c), r = so(n, t);
		r !== n && jo(e, r, c);
	}, [e, c]), h = r(null), g = r(!1), [_, v] = i(null);
	return {
		tableId: e,
		order: f,
		widths: p,
		isCustom: !ao(d, c),
		move: (e, t, n) => m({
			type: "move",
			ids: c,
			id: e,
			delta: t,
			visible: n
		}),
		moveTo: (e, t) => m({
			type: "moveTo",
			ids: c,
			id: e,
			targetId: t
		}),
		resize: (e, t) => m({
			type: "resize",
			id: e,
			width: t
		}),
		ensureWidths: (e) => m({
			type: "ensureWidths",
			widths: e
		}),
		reset: () => m({
			type: "reset",
			ids: c
		}),
		drag: {
			overId: _,
			start: (e) => {
				h.current = e;
			},
			over: (e) => h.current ? (h.current !== e && _ !== e && v(e), !0) : !1,
			drop: (e) => {
				h.current && h.current !== e && m({
					type: "moveTo",
					ids: c,
					id: h.current,
					targetId: e
				}), h.current = null, v(null);
			},
			end: () => {
				h.current = null, v(null);
			},
			locked: () => g.current,
			lock: (e) => {
				g.current = e;
			}
		}
	};
}
// src/components/patterns/data-table/column-layout-table.tsx
var $ = {
	left: "",
	right: "text-right",
	center: "text-center"
};
function Fo({ tableId: e, columns: t, rows: n, rowKey: r, caption: i, toolbar: a, className: o }) {
	let c = t.filter((e) => e.pin === "start").map((e) => e.id), l = t.filter((e) => e.pin === "end").map((e) => e.id), u = Po(e, t.filter((e) => !e.pin).map((e) => e.id)), d = ro(t, u.order, c, l), f = d.map((e) => e.id), p = ho(f, u.widths), m = d.some((e) => e.footer !== void 0), h = d.filter((e) => !e.pin).map((e) => ({
		id: e.id,
		label: e.label
	}));
	return /* @__PURE__ */ T("div", {
		className: s("flex flex-col gap-2", o),
		children: [/* @__PURE__ */ T("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ w("div", { children: a }), /* @__PURE__ */ w(Co, {
				layout: u,
				items: h
			})]
		}), /* @__PURE__ */ T(H, {
			...So(p),
			children: [
				i && /* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: i
				}),
				/* @__PURE__ */ w(yo, {
					ids: f,
					sizing: p
				}),
				/* @__PURE__ */ w(U, { children: /* @__PURE__ */ T(G, { children: [d.map((e) => e.pin ? /* @__PURE__ */ w(K, {
					"data-col-id": e.id,
					className: $[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id) : /* @__PURE__ */ w(vo, {
					layout: u,
					id: e.id,
					label: e.label,
					movable: !0,
					resizable: !0,
					className: $[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id)), /* @__PURE__ */ w(bo, { sizing: p })] }) }),
				/* @__PURE__ */ w(W, { children: n.map((e) => /* @__PURE__ */ T(G, { children: [d.map((t) => /* @__PURE__ */ w(q, {
					className: s($[t.align ?? "left"], t.align === "right" && "tabular-nums", t.className),
					children: t.cell(e)
				}, t.id)), /* @__PURE__ */ w(xo, { sizing: p })] }, r(e))) }),
				m && /* @__PURE__ */ w(Ri, { children: /* @__PURE__ */ T(G, { children: [d.map((e) => /* @__PURE__ */ w(q, {
					className: s($[e.align ?? "left"], e.align === "right" && "tabular-nums", e.className),
					children: e.footer
				}, e.id)), /* @__PURE__ */ w(xo, { sizing: p })] }) })
			]
		})]
	});
}
export { vt as Alert, xt as AlertAction, bt as AlertDescription, at as AlertDialog, ht as AlertDialogAction, gt as AlertDialogCancel, lt as AlertDialogContent, mt as AlertDialogDescription, dt as AlertDialogFooter, ut as AlertDialogHeader, ft as AlertDialogMedia, ct as AlertDialogOverlay, st as AlertDialogPortal, pt as AlertDialogTitle, ot as AlertDialogTrigger, yt as AlertTitle, ia as AppShell, St as Avatar, Tt as AvatarBadge, wt as AvatarFallback, Et as AvatarGroup, Dt as AvatarGroupCount, Ct as AvatarImage, M as Badge, kt as BadgeDot, aa as BadgeOverflow, oa as BlockerBadge, At as Breadcrumb, It as BreadcrumbEllipsis, Mt as BreadcrumbItem, Nt as BreadcrumbLink, jt as BreadcrumbList, Pt as BreadcrumbPage, Ft as BreadcrumbSeparator, j as Button, Lt as Calendar, Rt as CalendarDayButton, zt as Card, Ut as CardAction, Wt as CardContent, Ht as CardDescription, Gt as CardFooter, Bt as CardHeader, Vt as CardTitle, sa as CellStack, la as ChartCard, Xt as ChartContainer, en as ChartLegend, tn as ChartLegendContent, Zt as ChartStyle, Qt as ChartTooltip, $t as ChartTooltipContent, rn as Checkbox, an as Collapsible, sn as CollapsibleContent, on as CollapsibleTrigger, Co as ColumnLayoutControls, To as ColumnLayoutDataTable, Fo as ColumnLayoutTable, fa as Combobox, On as Command, kn as CommandDialog, Mn as CommandEmpty, N as CommandGroup, An as CommandInput, P as CommandItem, jn as CommandList, Nn as CommandSeparator, Pn as CommandShortcut, pa as ConfirmDialog, Xa as DEFAULT_COLUMN_WIDTH, Ha as DataTable, Ua as DataTableColumnHeader, Wa as DataTableFacetedFilter, Ga as DataTablePagination, Ka as DataTableToolbar, ba as DatePicker, Sa as DateRangeFilter, xa as DateRangePicker, cn as Dialog, dn as DialogClose, pn as DialogContent, _n as DialogDescription, hn as DialogFooter, mn as DialogHeader, fn as DialogOverlay, un as DialogPortal, gn as DialogTitle, ln as DialogTrigger, Fn as DropdownMenu, Bn as DropdownMenuCheckboxItem, Ln as DropdownMenuContent, Rn as DropdownMenuGroup, zn as DropdownMenuItem, Un as DropdownMenuLabel, In as DropdownMenuPortal, Vn as DropdownMenuRadioGroup, Hn as DropdownMenuRadioItem, Wn as DropdownMenuSeparator, Gn as DropdownMenuShortcut, Kn as DropdownMenuSub, Jn as DropdownMenuSubContent, qn as DropdownMenuSubTrigger, F as DropdownMenuTrigger, Yn as Empty, tr as EmptyContent, er as EmptyDescription, Xn as EmptyHeader, Qn as EmptyMedia, Ca as EmptyState, $n as EmptyTitle, wa as ErrorState, cr as Field, lr as FieldContent, fr as FieldDescription, mr as FieldError, or as FieldGroup, ur as FieldLabel, ar as FieldLegend, pr as FieldSeparator, ir as FieldSet, dr as FieldTitle, xo as FillerCell, bo as FillerHead, Ea as FormSection, hr as HoverCard, _r as HoverCardContent, gr as HoverCardTrigger, vn as Input, bn as InputGroup, Sn as InputGroupAddon, wn as InputGroupButton, En as InputGroupInput, Tn as InputGroupText, Dn as InputGroupTextarea, Aa as KpiCard, nr as Label, ca as LabeledLine, yo as LayoutColGroup, vo as LayoutHead, Ya as MAX_COLUMN_WIDTH, Ja as MIN_COLUMN_WIDTH, ja as PageHeader, vr as Pagination, yr as PaginationContent, wr as PaginationEllipsis, br as PaginationItem, xr as PaginationLink, Cr as PaginationNext, Sr as PaginationPrevious, Ma as PhoneText, I as Popover, Tr as PopoverAnchor, R as PopoverContent, Or as PopoverDescription, Er as PopoverHeader, Dr as PopoverTitle, L as PopoverTrigger, Ar as Progress, Za as RESIZE_STEP, Na as ReasonDialog, Fa as RowFlag, jr as ScrollArea, Mr as ScrollBar, Nr as Select, Lr as SelectContent, Pr as SelectGroup, zr as SelectItem, Rr as SelectLabel, Hr as SelectScrollDownButton, Vr as SelectScrollUpButton, Br as SelectSeparator, Ir as SelectTrigger, Fr as SelectValue, rr as Separator, Ur as Sheet, Gr as SheetClose, Jr as SheetContent, Qr as SheetDescription, Xr as SheetFooter, Yr as SheetHeader, Zr as SheetTitle, Wr as SheetTrigger, hi as Sidebar, Ci as SidebarContent, xi as SidebarFooter, wi as SidebarGroup, Ei as SidebarGroupAction, Di as SidebarGroupContent, Ti as SidebarGroupLabel, bi as SidebarHeader, yi as SidebarInput, vi as SidebarInset, Oi as SidebarMenu, Ai as SidebarMenuAction, ji as SidebarMenuBadge, V as SidebarMenuButton, B as SidebarMenuItem, Mi as SidebarMenuSkeleton, Ni as SidebarMenuSub, Fi as SidebarMenuSubButton, Pi as SidebarMenuSubItem, mi as SidebarProvider, _i as SidebarRail, Si as SidebarSeparator, gi as SidebarTrigger, ni as Skeleton, Li as Spinner, Ia as StatPill, La as StatusBadge, Ta as StickyActions, H as Table, W as TableBody, zi as TableCaption, q as TableCell, Ri as TableFooter, K as TableHead, U as TableHeader, G as TableRow, Bi as Tabs, Wi as TabsContent, Hi as TabsList, Ui as TabsTrigger, yn as Textarea, Ii as Toaster, Ki as Toggle, Ji as ToggleGroup, Yi as ToggleGroupItem, ii as Tooltip, oi as TooltipContent, ri as TooltipProvider, ai as TooltipTrigger, Ba as UserMenu, Do as arrangeItems, Ot as badgeVariants, po as browserStorage, it as buttonVariants, da as canCreateFromText, eo as clampWidth, o as cn, so as columnLayoutReducer, qa as dataTableFeatures, ya as defaultDatePresets, oo as defaultLayout, ua as filterComboboxOptions, ma as formatDate, mo as hashText, ao as isDefaultLayout, uo as loadLayout, no as moveColumnBy, to as moveColumnTo, Z as normalizeOrder, ro as orderColumns, fo as saveLayout, Da as statBadgeVariant, ka as statBarClass, Oa as statTextClass, lo as storageKey, So as tableProps, ho as tableSizing, Vi as tabsListVariants, Gi as toggleVariants, Po as useColumnLayout, ti as useIsMobile, z as useSidebar };
