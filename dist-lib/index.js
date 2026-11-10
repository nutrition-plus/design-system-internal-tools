"use client";
import * as e from "react";
import { useCallback as t, useMemo as n, useRef as r, useState as i, useSyncExternalStore as a } from "react";
import { cn as o, cn as s } from "cn";
import { AlertDialog as c, Avatar as l, Checkbox as u, Collapsible as d, Dialog as f, DropdownMenu as p, HoverCard as m, Label as h, Popover as g, Progress as _, ScrollArea as v, Select as y, Separator as ee, Slot as b, Tabs as x, Toggle as te, ToggleGroup as ne, Tooltip as S } from "radix-ui";
import { cva as C } from "class-variance-authority";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
import { AlertTriangleIcon as re, ArrowDownIcon as ie, ArrowLeftRightIcon as ae, ArrowUpIcon as oe, BadgeCheckIcon as se, CalendarIcon as ce, ChartNoAxesColumnIcon as le, CheckIcon as D, ChevronDownIcon as O, ChevronLeftIcon as ue, ChevronRightIcon as k, ChevronUpIcon as de, ChevronsLeftIcon as fe, ChevronsRightIcon as pe, ChevronsUpDownIcon as me, CircleCheckIcon as he, Columns3Icon as ge, InboxIcon as _e, InfoIcon as ve, Loader2Icon as ye, LogOutIcon as be, MinusIcon as xe, MoreHorizontalIcon as Se, OctagonXIcon as Ce, PanelLeftIcon as we, PlusCircleIcon as Te, RefreshCwIcon as Ee, RotateCcwIcon as De, SearchIcon as Oe, SearchXIcon as ke, ServerCrashIcon as Ae, TableIcon as je, TriangleAlertIcon as Me, XIcon as A } from "lucide-react";
import { DayPicker as Ne, getDefaultClassNames as Pe } from "react-day-picker";
import * as Fe from "recharts";
import { Command as j } from "cmdk";
import { Toaster as Ie } from "sonner";
import { th as Le } from "react-day-picker/locale";
import { FlexRender as Re, columnFilteringFeature as ze, columnVisibilityFeature as Be, createFilteredRowModel as Ve, createPaginatedRowModel as He, createSortedRowModel as Ue, filterFn_arrIncludesSome as We, filterFn_includesString as Ge, globalFilteringFeature as Ke, rowPaginationFeature as qe, rowSelectionFeature as Je, rowSortingFeature as Ye, sortFn_alphanumeric as Xe, sortFn_basic as Ze, sortFn_datetime as Qe, sortFn_text as $e, tableFeatures as et } from "@tanstack/react-table";
// src/components/ui/button.tsx
var tt = C("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors duration-(--duration-fast) outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--icon-size)", {
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
function M({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	let a = r ? b.Root : "button";
	return /* @__PURE__ */ T(a, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: s(tt({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
// src/components/ui/alert-dialog.tsx
function nt({ ...e }) {
	return /* @__PURE__ */ T(c.Root, {
		"data-slot": "alert-dialog",
		...e
	});
}
function rt({ ...e }) {
	return /* @__PURE__ */ T(c.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...e
	});
}
function it({ ...e }) {
	return /* @__PURE__ */ T(c.Portal, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function at({ className: e, ...t }) {
	return /* @__PURE__ */ T(c.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function ot({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ E(it, { children: [/* @__PURE__ */ T(at, {}), /* @__PURE__ */ T(c.Content, {
		"data-slot": "alert-dialog-content",
		"data-size": t,
		className: s("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...n
	})] });
}
function st({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-dialog-header",
		className: s("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", e),
		...t
	});
}
function ct({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-dialog-footer",
		className: s("-mx-6 -mb-6 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-secondary px-6 py-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-dialog-media",
		className: s("mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", e),
		...t
	});
}
function ut({ className: e, ...t }) {
	return /* @__PURE__ */ T(c.Title, {
		"data-slot": "alert-dialog-title",
		className: s("font-heading type-h3 sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", e),
		...t
	});
}
function dt({ className: e, ...t }) {
	return /* @__PURE__ */ T(c.Description, {
		"data-slot": "alert-dialog-description",
		className: s("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
function ft({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ T(M, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ T(c.Action, {
			"data-slot": "alert-dialog-action",
			className: s(e),
			...r
		})
	});
}
function pt({ className: e, variant: t = "outline", size: n = "default", ...r }) {
	return /* @__PURE__ */ T(M, {
		variant: t,
		size: n,
		asChild: !0,
		children: /* @__PURE__ */ T(c.Cancel, {
			"data-slot": "alert-dialog-cancel",
			className: s(e),
			...r
		})
	});
}
// src/components/ui/alert.tsx
var mt = C("group/alert relative grid w-full gap-0.5 rounded-lg border border-l-4 px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-28 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-(--icon-size)", {
	variants: { variant: {
		default: "border-border border-l-input bg-card text-card-foreground *:data-[slot=alert-description]:text-muted-foreground",
		info: "border-info-border border-l-info bg-info-subtle text-info-foreground",
		success: "border-success-border border-l-success bg-success-subtle text-success-foreground",
		warning: "border-warning-border border-l-warning bg-warning-subtle text-warning-foreground",
		destructive: "border-danger-border border-l-danger bg-danger-subtle text-danger-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function ht({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert",
		"data-variant": t,
		role: t === "destructive" || t === "warning" ? "alert" : "status",
		className: s(mt({ variant: t }), e),
		...n
	});
}
function gt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-title",
		className: s("font-semibold group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3", e),
		...t
	});
}
function _t({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-description",
		className: s("text-sm text-pretty text-current [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-2", e),
		...t
	});
}
function vt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "alert-action",
		className: s("absolute top-1/2 right-3 -translate-y-1/2", e),
		...t
	});
}
// src/components/ui/avatar.tsx
function yt({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ T(l.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: s("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ T(l.Image, {
		"data-slot": "avatar-image",
		className: s("aspect-square size-full rounded-full object-cover", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ T(l.Fallback, {
		"data-slot": "avatar-fallback",
		className: s("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "avatar-badge",
		className: s("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function Ct({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "avatar-group",
		className: s("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "avatar-group-count",
		className: s("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
// src/components/ui/badge.tsx
var Tt = C("group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-4xl border border-transparent px-2.5 text-xs leading-none font-medium whitespace-nowrap transition-colors has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3.5!", {
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
function N({ className: e, variant: t = "secondary", asChild: n = !1, ...r }) {
	let i = n ? b.Root : "span";
	return /* @__PURE__ */ T(i, {
		"data-slot": "badge",
		"data-variant": t,
		className: s(Tt({ variant: t }), e),
		...r
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "badge-dot",
		"aria-hidden": !0,
		className: s("size-1.5 shrink-0 rounded-full bg-current", e),
		...t
	});
}
// src/components/ui/breadcrumb.tsx
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ T("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: s(e),
		...t
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ T("ol", {
		"data-slot": "breadcrumb-list",
		className: s("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground", e),
		...t
	});
}
function kt({ className: e, ...t }) {
	return /* @__PURE__ */ T("li", {
		"data-slot": "breadcrumb-item",
		className: s("inline-flex items-center gap-1", e),
		...t
	});
}
function At({ asChild: e, className: t, ...n }) {
	let r = e ? b.Root : "a";
	return /* @__PURE__ */ T(r, {
		"data-slot": "breadcrumb-link",
		className: s("transition-colors hover:text-foreground", t),
		...n
	});
}
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: s("font-normal text-foreground", e),
		...t
	});
}
function Mt({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ T("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: s("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ T(k, {})
	});
}
function Nt({ className: e, ...t }) {
	return /* @__PURE__ */ E("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: s("flex size-5 items-center justify-center [&>svg]:size-4", e),
		...t,
		children: [/* @__PURE__ */ T(Se, {}), /* @__PURE__ */ T("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
// src/components/ui/calendar.tsx
function Pt({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", locale: a, formatters: o, components: c, ...l }) {
	let u = Pe();
	return /* @__PURE__ */ T(Ne, {
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
			button_previous: s(tt({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: s(tt({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
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
			Root: ({ className: e, rootRef: t, ...n }) => /* @__PURE__ */ T("div", {
				"data-slot": "calendar",
				ref: t,
				className: s(e),
				...n
			}),
			Chevron: ({ className: e, orientation: t, ...n }) => T(t === "left" ? ue : t === "right" ? k : O, {
				className: s("size-4", e),
				...n
			}),
			DayButton: ({ ...e }) => /* @__PURE__ */ T(Ft, {
				locale: a,
				...e
			}),
			WeekNumber: ({ children: e, ...t }) => /* @__PURE__ */ T("td", {
				...t,
				children: /* @__PURE__ */ T("div", {
					className: "flex size-(--cell-size) items-center justify-center text-center",
					children: e
				})
			}),
			...c
		},
		...l
	});
}
function Ft({ className: t, day: n, modifiers: r, locale: i, ...a }) {
	let o = Pe(), c = e.useRef(null);
	return e.useEffect(() => {
		r.focused && c.current?.focus();
	}, [r.focused]), /* @__PURE__ */ T(M, {
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
function It({ className: e, size: t = "default", variant: n = "default", interactive: r = !1, ...i }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card",
		"data-size": t,
		"data-variant": n,
		"data-interactive": r || void 0,
		className: s("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl border border-border bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[interactive]:cursor-pointer data-[interactive]:transition-colors data-[interactive]:hover:bg-secondary data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[variant=muted]:border-transparent data-[variant=muted]:bg-secondary *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", e),
		...i
	});
}
function Lt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-header",
		className: s("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", e),
		...t
	});
}
function Rt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-title",
		className: s("font-heading type-h4 group-data-[size=sm]/card:type-body-strong", e),
		...t
	});
}
function zt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
function Bt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-action",
		className: s("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-content",
		className: s("px-(--card-spacing)", e),
		...t
	});
}
function Ht({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "card-footer",
		className: s("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", e),
		...t
	});
}
// src/components/ui/chart.tsx
var Ut = {
	light: "",
	dark: ".dark"
}, Wt = {
	width: 320,
	height: 200
}, Gt = e.createContext(null);
function Kt() {
	let t = e.useContext(Gt);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function qt({ id: t, className: n, children: r, config: i, initialDimension: a = Wt, ...o }) {
	let c = e.useId(), l = `chart-${t ?? c.replace(/:/g, "")}`;
	return /* @__PURE__ */ T(Gt.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ E("div", {
			"data-slot": "chart",
			"data-chart": l,
			className: s("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...o,
			children: [/* @__PURE__ */ T(Jt, {
				id: l,
				config: i
			}), /* @__PURE__ */ T(Fe.ResponsiveContainer, {
				initialDimension: a,
				children: r
			})]
		})
	});
}
var Jt = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
	return n.length ? /* @__PURE__ */ T("style", { dangerouslySetInnerHTML: { __html: Object.entries(Ut).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] ?? n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, Yt = Fe.Tooltip;
function Xt({ active: t, payload: n, className: r, indicator: i = "dot", hideLabel: a = !1, hideIndicator: o = !1, label: c, labelFormatter: l, labelClassName: u, formatter: d, color: f, nameKey: p, labelKey: m }) {
	let { config: h } = Kt(), g = e.useMemo(() => {
		if (a || !n?.length) return null;
		let [e] = n, t = `${m ?? e?.dataKey ?? e?.name ?? "value"}`, r = $t(h, e, t), i = !m && typeof c == "string" ? h[c]?.label ?? c : r?.label;
		return l ? /* @__PURE__ */ T("div", {
			className: s("font-medium", u),
			children: l(i, n)
		}) : i ? /* @__PURE__ */ T("div", {
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
	return /* @__PURE__ */ E("div", {
		className: s("grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", r),
		children: [_ ? null : g, /* @__PURE__ */ T("div", {
			className: "grid gap-1.5",
			children: n.filter((e) => e.type !== "none").map((e, t) => {
				let n = `${p ?? e.name ?? e.dataKey ?? "value"}`, r = $t(h, e, n), a = f ?? e.payload?.fill ?? e.color;
				return /* @__PURE__ */ T("div", {
					className: s("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", i === "dot" && "items-center"),
					children: d && e?.value !== void 0 && e.name ? d(e.value, e.name, e, t, e.payload) : /* @__PURE__ */ E(w, { children: [r?.icon ? /* @__PURE__ */ T(r.icon, {}) : !o && /* @__PURE__ */ T("div", {
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
					}), /* @__PURE__ */ E("div", {
						className: s("flex flex-1 justify-between leading-none", _ ? "items-end" : "items-center"),
						children: [/* @__PURE__ */ E("div", {
							className: "grid gap-1.5",
							children: [_ ? g : null, /* @__PURE__ */ T("span", {
								className: "text-muted-foreground",
								children: r?.label ?? e.name
							})]
						}), e.value != null && /* @__PURE__ */ T("span", {
							className: "font-mono font-medium text-foreground tabular-nums",
							children: typeof e.value == "number" ? e.value.toLocaleString() : String(e.value)
						})]
					})] })
				}, t);
			})
		})]
	});
}
var Zt = Fe.Legend;
function Qt({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: a } = Kt();
	return n?.length ? /* @__PURE__ */ T("div", {
		className: s("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, o = $t(a, e, r);
			return /* @__PURE__ */ E("div", {
				className: s("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
				children: [o?.icon && !t ? /* @__PURE__ */ T(o.icon, {}) : /* @__PURE__ */ T("div", {
					className: "h-2 w-2 shrink-0 rounded-[2px]",
					style: { backgroundColor: e.color }
				}), o?.label]
			}, n);
		})
	}) : null;
}
function $t(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
// src/components/ui/checkbox.tsx
function en({ className: e, ...t }) {
	return /* @__PURE__ */ T(u.Root, {
		"data-slot": "checkbox",
		className: s("peer group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-input bg-background transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:inset-[min(-0.5rem,calc((16px-var(--hit-min))/2))] focus-visible:border-ring enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-field-hover aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground disabled:data-[state=indeterminate]:bg-field-hover disabled:data-[state=indeterminate]:text-muted-foreground data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary-hover disabled:data-checked:bg-field-hover disabled:data-checked:text-muted-foreground", e),
		...t,
		children: /* @__PURE__ */ E(u.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3",
			children: [/* @__PURE__ */ T(D, { className: "group-data-[state=indeterminate]/checkbox:hidden" }), /* @__PURE__ */ T(xe, { className: "hidden group-data-[state=indeterminate]/checkbox:block" })]
		})
	});
}
// src/components/ui/collapsible.tsx
function tn({ ...e }) {
	return /* @__PURE__ */ T(d.Root, {
		"data-slot": "collapsible",
		...e
	});
}
function nn({ ...e }) {
	return /* @__PURE__ */ T(d.CollapsibleTrigger, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function rn({ ...e }) {
	return /* @__PURE__ */ T(d.CollapsibleContent, {
		"data-slot": "collapsible-content",
		...e
	});
}
// src/components/ui/dialog.tsx
function an({ ...e }) {
	return /* @__PURE__ */ T(f.Root, {
		"data-slot": "dialog",
		...e
	});
}
function on({ ...e }) {
	return /* @__PURE__ */ T(f.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function sn({ ...e }) {
	return /* @__PURE__ */ T(f.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function cn({ ...e }) {
	return /* @__PURE__ */ T(f.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function ln({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Overlay, {
		"data-slot": "dialog-overlay",
		className: s("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function un({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ E(sn, { children: [/* @__PURE__ */ T(ln, {}), /* @__PURE__ */ E(f.Content, {
		"data-slot": "dialog-content",
		className: s("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-popover p-6 text-sm text-popover-foreground shadow-lg duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [t, n && /* @__PURE__ */ T(f.Close, {
			"data-slot": "dialog-close",
			asChild: !0,
			children: /* @__PURE__ */ E(M, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm",
				children: [/* @__PURE__ */ T(A, {}), /* @__PURE__ */ T("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function dn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "dialog-header",
		className: s("flex flex-col gap-2", e),
		...t
	});
}
function fn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ E("div", {
		"data-slot": "dialog-footer",
		className: s("-mx-6 -mb-6 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-secondary px-6 py-4 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ T(f.Close, {
			asChild: !0,
			children: /* @__PURE__ */ T(M, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Title, {
		"data-slot": "dialog-title",
		className: s("font-heading type-h3", e),
		...t
	});
}
function mn({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Description, {
		"data-slot": "dialog-description",
		className: s("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
// src/components/ui/input.tsx
function hn({ className: e, type: t, size: n = "default", ...r }) {
	return /* @__PURE__ */ T("input", {
		type: t,
		"data-slot": "input",
		"data-size": n,
		className: s("h-control w-full min-w-0 rounded-lg border border-input bg-background px-2 py-0 text-base text-foreground data-[size=sm]:h-control-sm data-[size=sm]:px-1.5 data-[size=sm]:text-sm transition-colors duration-(--duration-fast) outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground read-only:border-transparent read-only:bg-secondary read-only:hover:border-transparent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 read-only:focus-visible:ring-0 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...r
	});
}
// src/components/ui/textarea.tsx
function gn({ className: e, ...t }) {
	return /* @__PURE__ */ T("textarea", {
		"data-slot": "textarea",
		className: s("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-background px-2 py-1 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...t
	});
}
// src/components/ui/input-group.tsx
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "input-group",
		role: "group",
		className: s("group/input-group relative flex h-control w-full min-w-0 items-center rounded-lg border border-input bg-background transition-colors outline-none hover:border-muted-foreground in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:border-transparent has-disabled:bg-secondary has-disabled:text-muted-foreground has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/40 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-2 has-[[data-slot][aria-invalid=true]]:ring-destructive/30 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", e),
		...t
	});
}
var vn = C("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function yn({ className: e, align: t = "inline-start", ...n }) {
	return /* @__PURE__ */ T("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": t,
		className: s(vn({ align: t }), e),
		onClick: (e) => {
			e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...n
	});
}
var bn = C("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-control-sm p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function xn({ className: e, type: t = "button", variant: n = "ghost", size: r = "xs", ...i }) {
	return /* @__PURE__ */ T(M, {
		type: t,
		"data-size": r,
		variant: n,
		className: s(bn({ size: r }), e),
		...i
	});
}
function Sn({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		className: s("flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", e),
		...t
	});
}
function Cn({ className: e, ...t }) {
	return /* @__PURE__ */ T(hn, {
		"data-slot": "input-group-control",
		className: s("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0", e),
		...t
	});
}
function wn({ className: e, ...t }) {
	return /* @__PURE__ */ T(gn, {
		"data-slot": "input-group-control",
		className: s("flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0", e),
		...t
	});
}
// src/components/ui/command.tsx
function Tn({ className: e, ...t }) {
	return /* @__PURE__ */ T(j, {
		"data-slot": "command",
		className: s("flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground", e),
		...t
	});
}
function En({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: i = !1, ...a }) {
	return /* @__PURE__ */ E(an, {
		...a,
		children: [/* @__PURE__ */ E(dn, {
			className: "sr-only",
			children: [/* @__PURE__ */ T(pn, { children: e }), /* @__PURE__ */ T(mn, { children: t })]
		}), /* @__PURE__ */ T(un, {
			className: s("top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0", r),
			showCloseButton: i,
			children: n
		})]
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "command-input-wrapper",
		className: "p-1 pb-0",
		children: /* @__PURE__ */ E(_n, {
			className: "h-control! rounded-lg! border-border bg-secondary shadow-none! *:data-[slot=input-group-addon]:pl-2!",
			children: [/* @__PURE__ */ T(j.Input, {
				"data-slot": "command-input",
				className: s("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e),
				...t
			}), /* @__PURE__ */ T(yn, { children: /* @__PURE__ */ T(Oe, { className: "size-4 shrink-0 opacity-50" }) })]
		})
	});
}
function On({ className: e, ...t }) {
	return /* @__PURE__ */ T(j.List, {
		"data-slot": "command-list",
		className: s("no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none", e),
		...t
	});
}
function kn({ className: e, ...t }) {
	return /* @__PURE__ */ T(j.Empty, {
		"data-slot": "command-empty",
		className: s("py-6 text-center text-sm", e),
		...t
	});
}
function An({ className: e, ...t }) {
	return /* @__PURE__ */ T(j.Group, {
		"data-slot": "command-group",
		className: s("overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function jn({ className: e, ...t }) {
	return /* @__PURE__ */ T(j.Separator, {
		"data-slot": "command-separator",
		className: s("-mx-1 h-px bg-border", e),
		...t
	});
}
function Mn({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ E(j.Item, {
		"data-slot": "command-item",
		className: s("group/command-item relative flex min-h-control-sm cursor-default items-center gap-2 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-accent data-selected:bg-muted data-selected:text-accent-foreground data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground", e),
		...n,
		children: [t, /* @__PURE__ */ T(D, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]
	});
}
function Nn({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "command-shortcut",
		className: s("ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground", e),
		...t
	});
}
// src/components/ui/dropdown-menu.tsx
function P({ ...e }) {
	return /* @__PURE__ */ T(p.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function Pn({ ...e }) {
	return /* @__PURE__ */ T(p.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function F({ ...e }) {
	return /* @__PURE__ */ T(p.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function I({ className: e, align: t = "start", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ T(p.Portal, { children: /* @__PURE__ */ T(p.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: n,
		align: t,
		className: s("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function Fn({ ...e }) {
	return /* @__PURE__ */ T(p.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function L({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ T(p.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: s("group/dropdown-menu-item relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", e),
		...r
	});
}
function In({ className: e, children: t, checked: n, inset: r, ...i }) {
	return /* @__PURE__ */ E(p.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": r,
		className: s("relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...i,
		children: [/* @__PURE__ */ T("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			children: /* @__PURE__ */ T(p.ItemIndicator, { children: /* @__PURE__ */ T(D, {}) })
		}), t]
	});
}
function Ln({ ...e }) {
	return /* @__PURE__ */ T(p.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Rn({ className: e, children: t, inset: n, ...r }) {
	return /* @__PURE__ */ E(p.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": n,
		className: s("relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [/* @__PURE__ */ T("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-radio-item-indicator",
			children: /* @__PURE__ */ T(p.ItemIndicator, { children: /* @__PURE__ */ T(D, {}) })
		}), t]
	});
}
function zn({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ T(p.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: s("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", e),
		...n
	});
}
function Bn({ className: e, ...t }) {
	return /* @__PURE__ */ T(p.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: s("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Vn({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: s("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", e),
		...t
	});
}
function Hn({ ...e }) {
	return /* @__PURE__ */ T(p.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Un({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ E(p.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: s("flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ T(k, { className: "ml-auto" })]
	});
}
function Wn({ className: e, ...t }) {
	return /* @__PURE__ */ T(p.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: s("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-lg duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...t
	});
}
// src/components/ui/empty.tsx
function Gn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty",
		className: s("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance", e),
		...t
	});
}
function Kn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty-header",
		className: s("flex max-w-sm flex-col items-center gap-2", e),
		...t
	});
}
var qn = C("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
function Jn({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty-icon",
		"data-variant": t,
		className: s(qn({
			variant: t,
			className: e
		})),
		...n
	});
}
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty-title",
		className: s("font-heading text-sm font-medium tracking-tight", e),
		...t
	});
}
function Xn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty-description",
		className: s("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function Zn({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "empty-content",
		className: s("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", e),
		...t
	});
}
// src/components/ui/label.tsx
function Qn({ className: e, ...t }) {
	return /* @__PURE__ */ T(h.Root, {
		"data-slot": "label",
		className: s("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
// src/components/ui/separator.tsx
function $n({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ T(ee.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: s("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", e),
		...r
	});
}
// src/components/ui/field.tsx
function er({ className: e, ...t }) {
	return /* @__PURE__ */ T("fieldset", {
		"data-slot": "field-set",
		className: s("flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", e),
		...t
	});
}
function tr({ className: e, variant: t = "legend", ...n }) {
	return /* @__PURE__ */ T("legend", {
		"data-slot": "field-legend",
		"data-variant": t,
		className: s("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", e),
		...n
	});
}
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "field-group",
		className: s("group/field-group @container/field-group flex w-full flex-col gap-6 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", e),
		...t
	});
}
var rr = C("group/field flex w-full gap-1.5 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function ir({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ T("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": t,
		className: s(rr({ orientation: t }), e),
		...n
	});
}
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "field-content",
		className: s("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", e),
		...t
	});
}
function or({ className: e, ...t }) {
	return /* @__PURE__ */ T(Qn, {
		"data-slot": "field-label",
		className: s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/25 *:data-[slot=field]:p-2.5", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", e),
		...t
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "field-label",
		className: s("flex w-fit items-center gap-2 text-sm font-medium text-foreground-secondary group-data-[disabled=true]/field:opacity-50", e),
		...t
	});
}
function cr({ className: e, ...t }) {
	return /* @__PURE__ */ T("p", {
		"data-slot": "field-description",
		className: s("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function lr({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ E("div", {
		"data-slot": "field-separator",
		"data-content": !!e,
		className: s("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", t),
		...n,
		children: [/* @__PURE__ */ T($n, { className: "absolute inset-0 top-1/2" }), e && /* @__PURE__ */ T("span", {
			className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
			"data-slot": "field-separator-content",
			children: e
		})]
	});
}
function ur({ className: e, children: t, errors: r, ...i }) {
	let a = n(() => {
		if (t) return t;
		if (!r?.length) return null;
		let e = [...new Map(r.map((e) => [e?.message, e])).values()];
		return e?.length == 1 ? e[0]?.message : /* @__PURE__ */ T("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: e.map((e, t) => e?.message && /* @__PURE__ */ T("li", { children: e.message }, t))
		});
	}, [t, r]);
	return a ? /* @__PURE__ */ T("div", {
		role: "alert",
		"data-slot": "field-error",
		className: s("text-sm font-normal text-destructive", e),
		...i,
		children: a
	}) : null;
}
// src/components/ui/hover-card.tsx
function dr({ ...e }) {
	return /* @__PURE__ */ T(m.Root, {
		"data-slot": "hover-card",
		...e
	});
}
function fr({ ...e }) {
	return /* @__PURE__ */ T(m.Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function pr({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ T(m.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ T(m.Content, {
			"data-slot": "hover-card-content",
			align: t,
			sideOffset: n,
			className: s("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-xl border border-border bg-popover p-3 text-sm text-popover-foreground shadow-md outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
			...r
		})
	});
}
// src/components/ui/pagination.tsx
function mr({ className: e, ...t }) {
	return /* @__PURE__ */ T("nav", {
		role: "navigation",
		"aria-label": "แบ่งหน้า",
		"data-slot": "pagination",
		className: s("mx-auto flex w-full justify-center", e),
		...t
	});
}
function hr({ className: e, ...t }) {
	return /* @__PURE__ */ T("ul", {
		"data-slot": "pagination-content",
		className: s("flex items-center gap-0.5", e),
		...t
	});
}
function gr({ ...e }) {
	return /* @__PURE__ */ T("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function _r({ className: e, isActive: t, size: n = "icon", ...r }) {
	return /* @__PURE__ */ T(M, {
		asChild: !0,
		variant: t ? "outline" : "ghost",
		size: n,
		className: s(e),
		children: /* @__PURE__ */ T("a", {
			"aria-current": t ? "page" : void 0,
			"data-slot": "pagination-link",
			"data-active": t,
			...r
		})
	});
}
function vr({ className: e, text: t = "ก่อนหน้า", ...n }) {
	return /* @__PURE__ */ E(_r, {
		size: "default",
		className: s("pl-1.5!", e),
		...n,
		children: [/* @__PURE__ */ T(ue, { "data-icon": "inline-start" }), /* @__PURE__ */ T("span", { children: t })]
	});
}
function yr({ className: e, text: t = "ถัดไป", ...n }) {
	return /* @__PURE__ */ E(_r, {
		size: "default",
		className: s("pr-1.5!", e),
		...n,
		children: [/* @__PURE__ */ T("span", { children: t }), /* @__PURE__ */ T(k, { "data-icon": "inline-end" })]
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ E("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: s("flex size-control items-center justify-center [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: [/* @__PURE__ */ T(Se, {}), /* @__PURE__ */ T("span", {
			className: "sr-only",
			children: "หน้าอื่น ๆ"
		})]
	});
}
// src/components/ui/popover.tsx
function R({ ...e }) {
	return /* @__PURE__ */ T(g.Root, {
		"data-slot": "popover",
		...e
	});
}
function z({ ...e }) {
	return /* @__PURE__ */ T(g.Trigger, {
		"data-slot": "popover-trigger",
		...e
	});
}
function B({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ T(g.Portal, { children: /* @__PURE__ */ T(g.Content, {
		"data-slot": "popover-content",
		align: t,
		sideOffset: n,
		className: s("z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg border border-border bg-popover p-2.5 text-sm text-popover-foreground shadow-md outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function xr({ ...e }) {
	return /* @__PURE__ */ T(g.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Sr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "popover-header",
		className: s("flex flex-col gap-0.5 text-sm", e),
		...t
	});
}
function Cr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "popover-title",
		className: s("font-medium", e),
		...t
	});
}
function wr({ className: e, ...t }) {
	return /* @__PURE__ */ T("p", {
		"data-slot": "popover-description",
		className: s("text-muted-foreground", e),
		...t
	});
}
// src/components/ui/progress.tsx
var Tr = {
	default: "bg-primary",
	success: "bg-success",
	warning: "bg-warning",
	danger: "bg-danger"
};
function Er({ className: e, value: t, tone: n = "default", ...r }) {
	return /* @__PURE__ */ T(_.Root, {
		"data-slot": "progress",
		value: t,
		className: s("relative flex h-2 w-full items-center overflow-hidden rounded-full bg-border", e),
		...r,
		children: /* @__PURE__ */ T(_.Indicator, {
			"data-slot": "progress-indicator",
			className: s("size-full flex-1 transition-transform duration-300 motion-reduce:transition-none", Tr[n]),
			style: { transform: `translateX(-${100 - (t || 0)}%)` }
		})
	});
}
// src/components/ui/scroll-area.tsx
function Dr({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ E(v.Root, {
		"data-slot": "scroll-area",
		className: s("relative", e),
		...n,
		children: [
			/* @__PURE__ */ T(v.Viewport, {
				"data-slot": "scroll-area-viewport",
				className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
				children: t
			}),
			/* @__PURE__ */ T(Or, {}),
			/* @__PURE__ */ T(v.Corner, {})
		]
	});
}
function Or({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ T(v.ScrollAreaScrollbar, {
		"data-slot": "scroll-area-scrollbar",
		"data-orientation": t,
		orientation: t,
		className: s("flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent", e),
		...n,
		children: /* @__PURE__ */ T(v.ScrollAreaThumb, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-full bg-border"
		})
	});
}
// src/components/ui/select.tsx
function kr({ ...e }) {
	return /* @__PURE__ */ T(y.Root, {
		"data-slot": "select",
		...e
	});
}
function Ar({ className: e, ...t }) {
	return /* @__PURE__ */ T(y.Group, {
		"data-slot": "select-group",
		className: s("scroll-my-1 p-1", e),
		...t
	});
}
function jr({ ...e }) {
	return /* @__PURE__ */ T(y.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Mr({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ E(y.Trigger, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: s("group/select-trigger flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-background py-0 pr-1.5 pl-2 text-base whitespace-nowrap text-foreground data-[size=sm]:gap-1 data-[size=sm]:pr-1 data-[size=sm]:pl-1.5 data-[size=sm]:text-sm transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-placeholder:text-foreground-secondary disabled:data-placeholder:text-muted-foreground data-[size=default]:h-control data-[size=sm]:h-control-sm data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 md:text-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ T(y.Icon, {
			asChild: !0,
			children: /* @__PURE__ */ T(O, { className: "pointer-events-none size-4 text-foreground-secondary group-disabled/select-trigger:text-muted-foreground" })
		})]
	});
}
function Nr({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ T(y.Portal, { children: /* @__PURE__ */ E(y.Content, {
		"data-slot": "select-content",
		"data-align-trigger": n === "item-aligned",
		className: s("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover text-popover-foreground shadow-md duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ T(Lr, {}),
			/* @__PURE__ */ T(y.Viewport, {
				"data-position": n,
				className: s("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", n === "popper" && ""),
				children: t
			}),
			/* @__PURE__ */ T(Rr, {})
		]
	}) });
}
function Pr({ className: e, ...t }) {
	return /* @__PURE__ */ T(y.Label, {
		"data-slot": "select-label",
		className: s("px-1.5 py-1 text-xs text-muted-foreground", e),
		...t
	});
}
function Fr({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ E(y.Item, {
		"data-slot": "select-item",
		className: s("relative flex min-h-control-sm w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-2 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ T("span", {
			className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ T(y.ItemIndicator, { children: /* @__PURE__ */ T(D, { className: "pointer-events-none" }) })
		}), /* @__PURE__ */ T(y.ItemText, { children: t })]
	});
}
function Ir({ className: e, ...t }) {
	return /* @__PURE__ */ T(y.Separator, {
		"data-slot": "select-separator",
		className: s("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Lr({ className: e, ...t }) {
	return /* @__PURE__ */ T(y.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ T(de, {})
	});
}
function Rr({ className: e, ...t }) {
	return /* @__PURE__ */ T(y.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ T(O, {})
	});
}
// src/components/ui/sheet.tsx
function zr({ ...e }) {
	return /* @__PURE__ */ T(f.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Br({ ...e }) {
	return /* @__PURE__ */ T(f.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Vr({ ...e }) {
	return /* @__PURE__ */ T(f.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function Hr({ ...e }) {
	return /* @__PURE__ */ T(f.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Ur({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Overlay, {
		"data-slot": "sheet-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function Wr({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ E(Hr, { children: [/* @__PURE__ */ T(Ur, {}), /* @__PURE__ */ E(f.Content, {
		"data-slot": "sheet-content",
		"data-side": n,
		className: s("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", e),
		...i,
		children: [t, r && /* @__PURE__ */ T(f.Close, {
			"data-slot": "sheet-close",
			asChild: !0,
			children: /* @__PURE__ */ E(M, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm",
				children: [/* @__PURE__ */ T(A, {}), /* @__PURE__ */ T("span", {
					className: "sr-only",
					children: "Close"
				})]
			})
		})]
	})] });
}
function Gr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sheet-header",
		className: s("flex flex-col gap-0.5 p-4", e),
		...t
	});
}
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sheet-footer",
		className: s("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Title, {
		"data-slot": "sheet-title",
		className: s("font-heading type-h3 text-foreground", e),
		...t
	});
}
function Jr({ className: e, ...t }) {
	return /* @__PURE__ */ T(f.Description, {
		"data-slot": "sheet-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
// src/hooks/use-mobile.ts
var Yr = "(max-width: 767px)";
function Xr(e) {
	let t = window.matchMedia(Yr);
	return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
function Zr() {
	return e.useSyncExternalStore(Xr, () => window.matchMedia(Yr).matches, () => !1);
}
// src/components/ui/skeleton.tsx
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "skeleton",
		className: s("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
// src/components/ui/tooltip.tsx
function $r({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ T(S.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function ei({ ...e }) {
	return /* @__PURE__ */ T(S.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function ti({ ...e }) {
	return /* @__PURE__ */ T(S.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function ni({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ T(S.Portal, { children: /* @__PURE__ */ E(S.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: s("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ T(S.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
// src/components/ui/sidebar.tsx
var ri = "sidebar_state", ii = 604800, ai = "16rem", oi = "18rem", si = "3rem", ci = "b", li = e.createContext(null);
function V() {
	let t = e.useContext(li);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function ui({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: a, children: o, ...c }) {
	let l = Zr(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${ri}=${t}; path=/; max-age=${ii}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === ci && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ T(li.Provider, {
		value: v,
		children: /* @__PURE__ */ T("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": ai,
				"--sidebar-width-icon": si,
				...a
			},
			className: s("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: o
		})
	});
}
function di({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, dir: a, ...o }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = V();
	return n === "none" ? /* @__PURE__ */ T("div", {
		"data-slot": "sidebar",
		className: s("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...o,
		children: i
	}) : c ? /* @__PURE__ */ T(zr, {
		open: u,
		onOpenChange: d,
		...o,
		children: /* @__PURE__ */ E(Wr, {
			dir: a,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": oi },
			side: e,
			children: [/* @__PURE__ */ E(Gr, {
				className: "sr-only",
				children: [/* @__PURE__ */ T(qr, { children: "Sidebar" }), /* @__PURE__ */ T(Jr, { children: "Displays the mobile sidebar." })]
			}), /* @__PURE__ */ T("div", {
				className: "flex h-full w-full flex-col",
				children: i
			})]
		})
	}) : /* @__PURE__ */ E("div", {
		className: "group peer hidden text-sidebar-foreground md:block",
		"data-state": l,
		"data-collapsible": l === "collapsed" ? n : "",
		"data-variant": t,
		"data-side": e,
		"data-slot": "sidebar",
		children: [/* @__PURE__ */ T("div", {
			"data-slot": "sidebar-gap",
			className: s("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t === "floating" || t === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)")
		}), /* @__PURE__ */ T("div", {
			"data-slot": "sidebar-container",
			"data-side": e,
			className: s("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)] md:flex", t === "floating" || t === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", r),
			...o,
			children: /* @__PURE__ */ T("div", {
				"data-sidebar": "sidebar",
				"data-slot": "sidebar-inner",
				className: "flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-sm group-data-[variant=floating]:ring-1 group-data-[variant=floating]:ring-sidebar-border",
				children: i
			})
		})]
	});
}
function fi({ className: e, onClick: t, ...n }) {
	let { toggleSidebar: r } = V();
	return /* @__PURE__ */ E(M, {
		"data-sidebar": "trigger",
		"data-slot": "sidebar-trigger",
		variant: "ghost",
		size: "icon-sm",
		className: s(e),
		onClick: (e) => {
			t?.(e), r();
		},
		...n,
		children: [/* @__PURE__ */ T(we, {}), /* @__PURE__ */ T("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function pi({ className: e, ...t }) {
	let { toggleSidebar: n } = V();
	return /* @__PURE__ */ T("button", {
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
function mi({ className: e, ...t }) {
	return /* @__PURE__ */ T("main", {
		"data-slot": "sidebar-inset",
		className: s("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function hi({ className: e, ...t }) {
	return /* @__PURE__ */ T(hn, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: s("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function gi({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function _i({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function vi({ className: e, ...t }) {
	return /* @__PURE__ */ T($n, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: s("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function yi({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: s("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: s("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function xi({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "div";
	return /* @__PURE__ */ T(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: s("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Si({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "button";
	return /* @__PURE__ */ T(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: s("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: s("w-full text-sm", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ T("ul", {
		"data-slot": "sidebar-menu",
		"data-sidebar": "menu",
		className: s("flex w-full min-w-0 flex-col gap-0", e),
		...t
	});
}
function H({ className: e, ...t }) {
	return /* @__PURE__ */ T("li", {
		"data-slot": "sidebar-menu-item",
		"data-sidebar": "menu-item",
		className: s("group/menu-item relative", e),
		...t
	});
}
var Ti = C("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
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
function U({ asChild: e = !1, isActive: t = !1, variant: n = "default", size: r = "default", tooltip: i, className: a, ...o }) {
	let c = e ? b.Root : "button", { isMobile: l, state: u } = V(), d = /* @__PURE__ */ T(c, {
		"data-slot": "sidebar-menu-button",
		"data-sidebar": "menu-button",
		"data-size": r,
		"data-active": t,
		className: s(Ti({
			variant: n,
			size: r
		}), a),
		...o
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ E(ei, { children: [/* @__PURE__ */ T(ti, {
		asChild: !0,
		children: d
	}), /* @__PURE__ */ T(ni, {
		side: "right",
		align: "center",
		hidden: u !== "collapsed" || l,
		...i
	})] })) : d;
}
function Ei({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? b.Root : "button";
	return /* @__PURE__ */ T(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: s("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0", e),
		...r
	});
}
function Di({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: s("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground", e),
		...t
	});
}
function Oi({ className: t, showIcon: n = !1, ...r }) {
	let [i] = e.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
	return /* @__PURE__ */ E("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: s("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ T(Qr, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ T(Qr, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function ki({ className: e, ...t }) {
	return /* @__PURE__ */ T("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: s("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Ai({ className: e, ...t }) {
	return /* @__PURE__ */ T("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: s("group/menu-sub-item relative", e),
		...t
	});
}
function ji({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
	let a = e ? b.Root : "a";
	return /* @__PURE__ */ T(a, {
		"data-slot": "sidebar-menu-sub-button",
		"data-sidebar": "menu-sub-button",
		"data-size": t,
		"data-active": n,
		className: s("flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden group-data-[collapsible=icon]:hidden hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[size=md]:text-sm data-[size=sm]:text-xs data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground", r),
		...i
	});
}
// src/components/ui/sonner.tsx
var Mi = ({ ...e }) => /* @__PURE__ */ T(Ie, {
	theme: "light",
	richColors: !0,
	className: "toaster group",
	icons: {
		success: /* @__PURE__ */ T(he, { className: "size-4" }),
		info: /* @__PURE__ */ T(ve, { className: "size-4" }),
		warning: /* @__PURE__ */ T(Me, { className: "size-4" }),
		error: /* @__PURE__ */ T(Ce, { className: "size-4" }),
		loading: /* @__PURE__ */ T(ye, { className: "size-4 animate-spin" })
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
function Ni({ className: e, ...t }) {
	return /* @__PURE__ */ T(ye, {
		"data-slot": "spinner",
		role: "status",
		"aria-label": "กำลังโหลด",
		className: s("size-4 animate-spin", e),
		...t
	});
}
// src/components/ui/table.tsx
function W({ className: e, ...t }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ T("table", {
			"data-slot": "table",
			className: s("w-full caption-bottom type-table tabular-nums", e),
			...t
		})
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ T("thead", {
		"data-slot": "table-header",
		className: s("bg-secondary [&_tr]:border-b [&_tr]:hover:bg-transparent", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ T("tbody", {
		"data-slot": "table-body",
		className: s("[&_tr:last-child]:border-0", e),
		...t
	});
}
function Pi({ className: e, ...t }) {
	return /* @__PURE__ */ T("tfoot", {
		"data-slot": "table-footer",
		className: s("border-t bg-secondary font-medium [&>tr]:last:border-b-0", e),
		...t
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ T("tr", {
		"data-slot": "table-row",
		className: s("border-b transition-colors hover:bg-secondary has-aria-expanded:bg-secondary data-[state=selected]:bg-accent", e),
		...t
	});
}
function J({ className: e, ...t }) {
	return /* @__PURE__ */ T("th", {
		"data-slot": "table-head",
		className: s("h-row-head px-3 text-left align-middle font-medium whitespace-nowrap text-foreground-secondary [&:has([role=checkbox])]:w-10 [&:has([role=checkbox])]:pr-0", e),
		...t
	});
}
function Y({ className: e, ...t }) {
	return /* @__PURE__ */ T("td", {
		"data-slot": "table-cell",
		className: s("h-row px-3 py-1 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", e),
		...t
	});
}
function Fi({ className: e, ...t }) {
	return /* @__PURE__ */ T("caption", {
		"data-slot": "table-caption",
		className: s("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
// src/components/ui/tabs.tsx
function Ii({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ T(x.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: s("group/tabs flex gap-2 data-horizontal:flex-col", e),
		...n
	});
}
var Li = C("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-control-sm group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-field",
		line: "gap-1 border-b border-border bg-transparent p-0 group-data-horizontal/tabs:w-full group-data-horizontal/tabs:justify-start"
	} },
	defaultVariants: { variant: "default" }
});
function Ri({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ T(x.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: s(Li({ variant: t }), e),
		...n
	});
}
function zi({ className: e, ...t }) {
	return /* @__PURE__ */ T(x.Trigger, {
		"data-slot": "tabs-trigger",
		className: s("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2.5 py-0.5 text-[13px] font-medium whitespace-nowrap text-muted-foreground transition-colors group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 group-data-[variant=default]/tabs-list:data-active:shadow-xs group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:flex-none group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:text-primary", "data-active:bg-background data-active:text-foreground", "after:absolute after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
function Bi({ className: e, ...t }) {
	return /* @__PURE__ */ T(x.Content, {
		"data-slot": "tabs-content",
		className: s("flex-1 text-sm outline-none", e),
		...t
	});
}
// src/components/ui/toggle.tsx
var Vi = C("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-secondary-hover hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-accent aria-pressed:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function Hi({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ T(te.Root, {
		"data-slot": "toggle",
		className: s(Vi({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
// src/components/ui/toggle-group.tsx
var Ui = e.createContext({
	size: "default",
	variant: "default",
	spacing: 2,
	orientation: "horizontal"
});
function Wi({ className: e, variant: t, size: n, spacing: r = 2, orientation: i = "horizontal", children: a, ...o }) {
	return /* @__PURE__ */ T(ne.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		"data-orientation": i,
		style: { "--gap": r },
		className: s("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch", e),
		...o,
		children: /* @__PURE__ */ T(Ui.Provider, {
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
function Gi({ className: t, children: n, variant: r = "default", size: i = "default", ...a }) {
	let o = e.useContext(Ui);
	return /* @__PURE__ */ T(ne.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": o.variant || r,
		"data-size": o.size || i,
		"data-spacing": o.spacing,
		className: s("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", Vi({
			variant: o.variant || r,
			size: o.size || i
		}), t),
		...a,
		children: n
	});
}
// src/components/patterns/app-shell.tsx
var Ki = "border border-transparent hover:border-muted-foreground hover:bg-background hover:text-foreground active:bg-background data-active:border-primary data-active:bg-background data-active:font-medium data-active:text-primary data-open:hover:bg-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";
function qi({ name: e, description: t, logo: n, href: r }) {
	let i = /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("span", {
		className: "flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary text-sm font-semibold text-primary-foreground [&_img]:size-full [&_img]:object-cover [&_svg]:size-4",
		children: n ?? e.trim().charAt(0).toUpperCase()
	}), /* @__PURE__ */ E("span", {
		className: "grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden",
		children: [/* @__PURE__ */ T("span", {
			className: "truncate text-sm font-semibold text-foreground",
			children: e
		}), t && /* @__PURE__ */ T("span", {
			className: "truncate text-xs text-muted-foreground",
			children: t
		})]
	})] }), a = "flex h-12 min-w-0 flex-1 items-center gap-2 rounded-md px-0 outline-hidden group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:flex-none";
	return r ? /* @__PURE__ */ T("a", {
		href: r,
		className: s(a, "focus-visible:ring-2 focus-visible:ring-ring/40"),
		children: i
	}) : /* @__PURE__ */ T("div", {
		className: a,
		children: i
	});
}
function Ji() {
	let { state: e, isMobile: t, toggleSidebar: n } = V();
	if (t) return /* @__PURE__ */ T(fi, {
		"aria-label": "ปิดเมนู",
		title: "ปิดเมนู",
		className: "ml-auto text-muted-foreground"
	});
	let r = e === "expanded", i = r ? "ยุบเมนู" : "ขยายเมนู";
	return /* @__PURE__ */ T("button", {
		type: "button",
		"data-slot": "sidebar-toggle",
		"aria-label": i,
		title: i,
		onClick: n,
		className: "absolute top-1/2 -right-5 z-30 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm outline-hidden transition-colors group-data-[collapsible=icon]:-right-[26px] after:absolute after:-inset-2 hover:border-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 [&_svg]:size-3.5",
		children: /* @__PURE__ */ T(r ? ue : k, {})
	});
}
function Yi({ count: e }) {
	return e === void 0 ? null : /* @__PURE__ */ T("span", {
		className: "ml-auto text-xs text-muted-foreground tabular-nums",
		children: e.toLocaleString("th-TH")
	});
}
function Xi({ item: e }) {
	let { state: t, isMobile: n } = V(), r = e.children ?? [], i = !!e.active || r.some((e) => e.active);
	return t === "collapsed" && !n ? /* @__PURE__ */ T(H, { children: /* @__PURE__ */ E(P, { children: [/* @__PURE__ */ T(F, {
		asChild: !0,
		children: /* @__PURE__ */ E(U, {
			tooltip: e.title,
			isActive: i,
			"aria-label": e.title,
			className: Ki,
			children: [/* @__PURE__ */ T(e.icon, {}), /* @__PURE__ */ T("span", { children: e.title })]
		})
	}), /* @__PURE__ */ E(I, {
		side: "right",
		align: "start",
		sideOffset: 8,
		className: "min-w-52",
		children: [/* @__PURE__ */ T(zn, { children: e.title }), r.map((e) => /* @__PURE__ */ T(L, {
			asChild: !0,
			className: s("min-h-11", e.active && "font-semibold text-primary"),
			children: /* @__PURE__ */ E("a", {
				href: e.href,
				"aria-current": e.active ? "page" : void 0,
				children: [/* @__PURE__ */ T("span", { children: e.title }), /* @__PURE__ */ T(Yi, { count: e.count })]
			})
		}, e.href))]
	})] }) }) : /* @__PURE__ */ T(tn, {
		asChild: !0,
		defaultOpen: i,
		className: "group/collapsible",
		children: /* @__PURE__ */ E(H, { children: [/* @__PURE__ */ T(nn, {
			asChild: !0,
			children: /* @__PURE__ */ E(U, {
				tooltip: e.title,
				className: s(Ki, i && "font-semibold"),
				children: [
					/* @__PURE__ */ T(e.icon, {}),
					/* @__PURE__ */ T("span", { children: e.title }),
					/* @__PURE__ */ T(O, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" })
				]
			})
		}), /* @__PURE__ */ T(rn, { children: /* @__PURE__ */ T(ki, {
			className: "gap-0.5 py-1",
			children: r.map((e) => /* @__PURE__ */ E(Ai, {
				className: "relative",
				children: [/* @__PURE__ */ T("span", {
					"aria-hidden": !0,
					className: s("absolute top-1/2 -left-[13.5px] size-1.5 -translate-y-1/2 rounded-full", e.active ? "bg-primary" : "bg-border")
				}), /* @__PURE__ */ T(ji, {
					asChild: !0,
					isActive: e.active,
					className: Ki,
					children: /* @__PURE__ */ E("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ T("span", { children: e.title }), /* @__PURE__ */ T(Yi, { count: e.count })]
					})
				})]
			}, e.href))
		}) })] })
	});
}
function Zi({ brand: e, header: t, nav: n, footer: r, defaultOpen: i = !0, children: a }) {
	return /* @__PURE__ */ E(ui, {
		defaultOpen: i,
		className: "min-h-svh",
		children: [/* @__PURE__ */ E(di, {
			collapsible: "icon",
			children: [
				/* @__PURE__ */ E(gi, { children: [/* @__PURE__ */ E("div", {
					className: "relative flex min-h-8 items-center gap-2",
					children: [e && /* @__PURE__ */ T(qi, { ...e }), /* @__PURE__ */ T(Ji, {})]
				}), t] }),
				/* @__PURE__ */ T(yi, { children: n.map((e, t) => /* @__PURE__ */ E(bi, { children: [e.label && /* @__PURE__ */ T(xi, { children: e.label }), /* @__PURE__ */ T(Ci, { children: /* @__PURE__ */ T(wi, { children: e.items.map((e) => e.children?.length ? /* @__PURE__ */ T(Xi, { item: e }, e.href) : /* @__PURE__ */ E(H, { children: [/* @__PURE__ */ T(U, {
					asChild: !0,
					isActive: e.active,
					tooltip: e.title,
					className: Ki,
					children: /* @__PURE__ */ E("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ T(e.icon, {}), /* @__PURE__ */ T("span", { children: e.title })]
					})
				}), e.badge ? /* @__PURE__ */ T(Di, {
					className: "tabular-nums",
					"aria-label": `${e.badge} รายการ`,
					children: e.badge
				}) : null] }, e.href)) }) })] }, e.label ?? t)) }),
				r && /* @__PURE__ */ T(_i, { children: r }),
				/* @__PURE__ */ T(pi, {})
			]
		}), /* @__PURE__ */ E(mi, {
			className: "min-w-0 bg-background",
			children: [/* @__PURE__ */ E("header", {
				className: "sticky top-0 z-20 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-(--page-gutter) md:hidden",
				children: [/* @__PURE__ */ T(fi, {
					className: "-ml-2",
					"aria-label": "เปิดเมนู"
				}), e && /* @__PURE__ */ T("span", {
					className: "truncate text-sm font-semibold text-foreground",
					children: e.name
				})]
			}), /* @__PURE__ */ T("div", {
				className: "flex min-w-0 flex-1 flex-col gap-4 p-(--page-gutter)",
				children: a
			})]
		})]
	});
}
// src/components/patterns/badge-overflow.tsx
function Qi({ items: t, max: n = 2, label: r = "ทั้งหมด" }) {
	let i = t.slice(0, n), a = t.length - i.length;
	return /* @__PURE__ */ E("div", {
		"data-slot": "badge-overflow",
		className: "flex flex-nowrap items-center gap-1",
		children: [i.map((t, n) => /* @__PURE__ */ T(e.Fragment, { children: t }, n)), a > 0 && /* @__PURE__ */ E(dr, {
			openDelay: 100,
			closeDelay: 100,
			children: [/* @__PURE__ */ T(fr, {
				asChild: !0,
				children: /* @__PURE__ */ T("button", {
					type: "button",
					"aria-label": `อีก ${a} รายการ`,
					className: "rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: /* @__PURE__ */ T(N, {
						variant: "secondary",
						className: "cursor-default px-2",
						children: "…"
					})
				})
			}), /* @__PURE__ */ E(pr, {
				align: "start",
				className: "w-auto min-w-44 p-3",
				children: [/* @__PURE__ */ E("p", {
					className: "mb-2 text-xs text-muted-foreground",
					children: [
						r,
						" (",
						t.length,
						")"
					]
				}), /* @__PURE__ */ T("div", {
					className: "flex flex-col items-start gap-1",
					children: t.map((t, n) => /* @__PURE__ */ T(e.Fragment, { children: t }, n))
				})]
			})]
		})]
	});
}
// src/components/patterns/blocker-badge.tsx
function $i({ children: e, variant: t = "destructive", ...n }) {
	return /* @__PURE__ */ E(N, {
		variant: t,
		...n,
		children: [/* @__PURE__ */ T(re, {
			"data-icon": "inline-start",
			"aria-hidden": "true"
		}), e]
	});
}
// src/components/patterns/chart-card.tsx
function ea({ title: t, description: n, table: r, children: i }) {
	let [a, o] = e.useState(!1), s = e.useId();
	return /* @__PURE__ */ E(It, {
		"data-slot": "chart-card",
		children: [/* @__PURE__ */ E(Lt, { children: [
			/* @__PURE__ */ T(Rt, { children: t }),
			n && /* @__PURE__ */ T(zt, { children: n }),
			/* @__PURE__ */ T("div", {
				className: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				children: /* @__PURE__ */ E(M, {
					variant: "ghost",
					size: "sm",
					"aria-pressed": a,
					"aria-controls": s,
					onClick: () => o((e) => !e),
					children: [T(a ? le : je, { "data-icon": "inline-start" }), a ? "ดูกราฟ" : "ดูเป็นตาราง"]
				})
			})
		] }), /* @__PURE__ */ T(Vt, {
			id: s,
			children: a ? /* @__PURE__ */ E(W, { children: [
				/* @__PURE__ */ T("caption", {
					className: "sr-only",
					children: t
				}),
				/* @__PURE__ */ T(G, { children: /* @__PURE__ */ E(q, { children: [/* @__PURE__ */ T(J, { children: r.rowLabel }), r.columns.map((e) => /* @__PURE__ */ T(J, {
					className: "text-right",
					children: e.label
				}, e.key))] }) }),
				/* @__PURE__ */ T(K, { children: r.rows.map((e) => /* @__PURE__ */ E(q, { children: [/* @__PURE__ */ T(Y, { children: e[r.rowKey] }), r.columns.map((t) => /* @__PURE__ */ T(Y, {
					className: "text-right",
					children: typeof e[t.key] == "number" ? e[t.key].toLocaleString("th-TH") : e[t.key]
				}, t.key))] }, String(e[r.rowKey]))) })
			] }) : i
		})]
	});
}
// src/components/patterns/confirm-dialog.tsx
function ta({ trigger: t, title: n, description: r, confirmLabel: i, cancelLabel: a = "ยกเลิก", tone: o = "default", onConfirm: s }) {
	let [c, l] = e.useState(!1), [u, d] = e.useState(!1);
	async function f(e) {
		e.preventDefault(), d(!0);
		try {
			await s(), l(!1);
		} catch {} finally {
			d(!1);
		}
	}
	return /* @__PURE__ */ E(nt, {
		open: c,
		onOpenChange: (e) => !u && l(e),
		children: [/* @__PURE__ */ T(rt, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ E(ot, { children: [/* @__PURE__ */ E(st, { children: [/* @__PURE__ */ T(ut, { children: n }), /* @__PURE__ */ T(dt, { children: r })] }), /* @__PURE__ */ E(ct, { children: [/* @__PURE__ */ T(pt, {
			asChild: !0,
			children: /* @__PURE__ */ T(M, {
				variant: "outline",
				disabled: u,
				autoFocus: !0,
				children: a
			})
		}), /* @__PURE__ */ T(ft, {
			asChild: !0,
			children: /* @__PURE__ */ E(M, {
				variant: o === "destructive" ? "destructive" : "default",
				onClick: f,
				disabled: u,
				"aria-busy": u,
				children: [u && /* @__PURE__ */ T(Ni, { "data-icon": "inline-start" }), i]
			})
		})] })] })]
	});
}
// src/components/patterns/date-picker.tsx
var na = (e) => e.toLocaleDateString("th-TH-u-ca-gregory", {
	day: "numeric",
	month: "short",
	year: "numeric"
});
function ra(e) {
	return {
		locale: Le,
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
var ia = [2020, 2035], aa = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), X = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function oa({ items: e }) {
	return /* @__PURE__ */ T("div", {
		role: "group",
		"aria-label": "ช่วงที่ใช้บ่อย",
		className: "flex w-0 min-w-full flex-wrap gap-1.5 border-t border-border p-3",
		children: e.map((e) => /* @__PURE__ */ T(N, {
			asChild: !0,
			variant: "secondary",
			children: /* @__PURE__ */ T("button", {
				type: "button",
				disabled: e.disabled,
				onClick: e.onPick,
				className: "h-control-sm cursor-pointer px-3 text-[13px] outline-none hover:bg-secondary-hover focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
				children: e.label
			})
		}, e.label))
	});
}
function sa(e = /* @__PURE__ */ new Date()) {
	let t = aa(e);
	return [
		{
			label: "วันนี้",
			date: t
		},
		{
			label: "เมื่อวาน",
			date: X(t, -1)
		},
		{
			label: "7 วันที่แล้ว",
			date: X(t, -7)
		},
		{
			label: "30 วันที่แล้ว",
			date: X(t, -30)
		}
	];
}
function ca({ id: t, value: n, onChange: r, placeholder: i = "เลือกวันที่", disabled: a, invalid: o, min: c, max: l, defaultMonth: u, yearRange: d = ia, presets: f, className: p, ...m }) {
	let [h, g] = e.useState(!1), _ = [c && { before: c }, l && { after: l }].filter(Boolean);
	return /* @__PURE__ */ E(R, {
		open: h,
		onOpenChange: g,
		children: [/* @__PURE__ */ T(z, {
			asChild: !0,
			children: /* @__PURE__ */ E("button", {
				id: t,
				type: "button",
				disabled: a,
				"aria-invalid": o || void 0,
				"aria-label": m["aria-label"],
				"data-empty": !n || void 0,
				className: s("flex h-control w-full min-w-40 items-center justify-between gap-1.5 rounded-lg border border-input bg-background pr-2 pl-2 text-left text-base text-foreground transition-colors outline-none md:text-sm", "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground", "disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground", "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30", "data-[empty]:text-foreground-secondary", p),
				children: [/* @__PURE__ */ T("span", {
					className: "truncate tabular-nums",
					children: n ? na(n) : i
				}), /* @__PURE__ */ T(ce, {
					className: "size-4 shrink-0 text-foreground-secondary",
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ E(B, {
			align: "start",
			className: "w-auto p-0",
			"aria-label": m["aria-label"] ?? i,
			children: [
				/* @__PURE__ */ T(Pt, {
					mode: "single",
					...ra(d),
					selected: n,
					defaultMonth: n ?? u,
					disabled: _,
					onSelect: (e) => {
						r(e), g(!1);
					}
				}),
				f && f.length > 0 && /* @__PURE__ */ T(oa, { items: f.map((e) => ({
					label: e.label,
					disabled: !!(c && e.date < aa(c) || l && e.date > aa(l)),
					onPick: () => {
						r(e.date), g(!1);
					}
				})) }),
				n && /* @__PURE__ */ T("div", {
					className: "flex justify-end border-t border-border p-2",
					children: /* @__PURE__ */ E(M, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							r(void 0), g(!1);
						},
						children: [/* @__PURE__ */ T(A, { "data-icon": "inline-start" }), "ล้างวันที่"]
					})
				})
			]
		})]
	});
}
function la({ id: t, value: n, onChange: r, placeholder: i = "เลือกช่วงวันที่", min: a, max: o, defaultMonth: c, yearRange: l = ia, today: u = /* @__PURE__ */ new Date(), className: d, ...f }) {
	let [p, m] = e.useState(!1), h = Zr(), g = [a && { before: a }, o && { after: o }].filter(Boolean), _ = n.from ? `${na(n.from)} – ${n.to ? na(n.to) : "…"}` : i, v = aa(u), y = [
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
				from: X(v, -6),
				to: v
			}
		},
		{
			label: "30 วันล่าสุด",
			range: {
				from: X(v, -29),
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
	return /* @__PURE__ */ E(R, {
		open: p,
		onOpenChange: m,
		children: [/* @__PURE__ */ T(z, {
			asChild: !0,
			children: /* @__PURE__ */ E("button", {
				id: t,
				type: "button",
				"aria-label": f["aria-label"],
				"data-empty": !n.from || void 0,
				className: s("flex h-control w-full min-w-64 items-center justify-between gap-1.5 rounded-lg border border-input bg-background pr-2 pl-2 text-left text-base text-foreground transition-colors outline-none md:text-sm", "hover:border-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40", "data-[empty]:text-foreground-secondary", d),
				children: [/* @__PURE__ */ T("span", {
					className: "truncate tabular-nums",
					children: _
				}), /* @__PURE__ */ T(ce, {
					className: "size-4 shrink-0 text-foreground-secondary",
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ E(B, {
			align: "start",
			className: "w-auto p-0",
			"aria-label": f["aria-label"] ?? i,
			children: [
				/* @__PURE__ */ T(Pt, {
					mode: "range",
					numberOfMonths: h ? 1 : 2,
					...ra(l),
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
				/* @__PURE__ */ T(oa, { items: y.map((e) => ({
					label: e.label,
					onPick: () => {
						r(e.range), m(!1);
					}
				})) }),
				(n.from || n.to) && /* @__PURE__ */ T("div", {
					className: "flex justify-end border-t border-border p-2",
					children: /* @__PURE__ */ E(M, {
						variant: "ghost",
						size: "sm",
						onClick: () => {
							r({}), m(!1);
						},
						children: [/* @__PURE__ */ T(A, { "data-icon": "inline-start" }), "ล้างช่วงวันที่"]
					})
				})
			]
		})]
	});
}
function ua({ value: t, onChange: n, fromLabel: r = "จากวันที่", toLabel: i = "ถึงวันที่", defaultMonth: a, yearRange: o, today: c, presets: l, className: u }) {
	let d = e.useId(), f = !!(t.from || t.to), p = l ?? sa(c);
	return /* @__PURE__ */ E("div", {
		"data-slot": "date-range-filter",
		className: s("flex w-full max-w-2xl items-end gap-3", u),
		children: [
			/* @__PURE__ */ E(ir, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ T(or, {
					htmlFor: `${d}-from`,
					children: r
				}), /* @__PURE__ */ T(ca, {
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
			/* @__PURE__ */ T("span", {
				"aria-hidden": !0,
				className: "flex h-control shrink-0 items-center text-muted-foreground",
				children: "–"
			}),
			/* @__PURE__ */ E(ir, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ T(or, {
					htmlFor: `${d}-to`,
					children: i
				}), /* @__PURE__ */ T(ca, {
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
			/* @__PURE__ */ E(M, {
				variant: "ghost",
				"aria-label": "ล้างตัวกรอง",
				className: s("shrink-0", !f && "invisible"),
				onClick: () => n({}),
				children: [/* @__PURE__ */ T(A, { "data-icon": "inline-start" }), /* @__PURE__ */ T("span", {
					className: "hidden sm:inline",
					children: "ล้างตัวกรอง"
				})]
			})
		]
	});
}
// src/components/patterns/feedback-states.tsx
function da({ kind: e, title: t, description: n, action: r }) {
	return /* @__PURE__ */ E(Gn, {
		"data-kind": e,
		className: "py-12",
		children: [/* @__PURE__ */ E(Kn, { children: [
			/* @__PURE__ */ T(Jn, {
				variant: "icon",
				children: /* @__PURE__ */ T(e === "no-data" ? _e : ke, {})
			}),
			/* @__PURE__ */ T(Yn, { children: t ?? (e === "no-data" ? "ยังไม่มีข้อมูล" : "ไม่พบรายการที่ตรงกับตัวกรอง") }),
			/* @__PURE__ */ T(Xn, { children: n ?? (e === "no-data" ? "เมื่อมีข้อมูลเข้ามา รายการจะแสดงที่นี่" : "ลองเปลี่ยนคำค้นหาหรือล้างตัวกรองเพื่อดูรายการทั้งหมด") })
		] }), r && /* @__PURE__ */ T(Zn, { children: r })]
	});
}
function fa({ title: e, description: t, reference: n, onRetry: r, retrying: i }) {
	return /* @__PURE__ */ E(Gn, {
		role: "alert",
		className: "py-12",
		children: [/* @__PURE__ */ E(Kn, { children: [
			/* @__PURE__ */ T(Jn, {
				variant: "icon",
				className: "bg-danger-subtle text-danger-foreground",
				children: /* @__PURE__ */ T(Ae, {})
			}),
			/* @__PURE__ */ T(Yn, { children: e ?? "โหลดข้อมูลไม่สำเร็จ" }),
			/* @__PURE__ */ E(Xn, { children: [t ?? "เกิดข้อผิดพลาดระหว่างดึงข้อมูล ข้อมูลของคุณไม่ได้รับผลกระทบ ลองใหม่อีกครั้ง", n && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T("br", {}), /* @__PURE__ */ E("span", {
				className: "font-mono text-xs",
				children: ["รหัสอ้างอิง ", n]
			})] })] })
		] }), r && /* @__PURE__ */ T(Zn, { children: /* @__PURE__ */ E(M, {
			variant: "outline",
			onClick: r,
			disabled: i,
			"aria-busy": i,
			children: [/* @__PURE__ */ T(Ee, {
				"data-icon": "inline-start",
				className: i ? "animate-spin" : void 0
			}), "ลองใหม่"]
		}) })]
	});
}
// src/components/patterns/page-header.tsx
function pa({ title: e, description: t, meta: n, actions: r, className: i }) {
	return /* @__PURE__ */ E("header", {
		"data-slot": "page-header",
		className: s("flex flex-wrap items-start justify-between gap-4", i),
		children: [/* @__PURE__ */ E("div", {
			className: "flex min-w-0 flex-col gap-1",
			children: [/* @__PURE__ */ E("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ T("h1", {
					className: "type-h1 text-foreground",
					children: e
				}), n]
			}), t && /* @__PURE__ */ T("p", {
				className: "text-sm text-muted-foreground",
				children: t
			})]
		}), r && /* @__PURE__ */ T("div", {
			className: "flex flex-wrap items-center gap-2",
			children: r
		})]
	});
}
// src/components/patterns/phone-text.tsx
function ma({ children: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		...t,
		children: e
	});
}
// src/components/patterns/reason-dialog.tsx
function ha({ trigger: t, title: n, description: r, reasonLabel: i, confirmLabel: a, cancelLabel: o = "ยกเลิก", placeholder: s, onConfirm: c }) {
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
	return /* @__PURE__ */ E(an, {
		open: l,
		onOpenChange: g,
		children: [/* @__PURE__ */ T(on, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ E(un, {
			showCloseButton: !p,
			onEscapeKeyDown: (e) => p && e.preventDefault(),
			onPointerDownOutside: (e) => p && e.preventDefault(),
			children: [/* @__PURE__ */ E(dn, { children: [/* @__PURE__ */ T(pn, { children: n }), /* @__PURE__ */ T(mn, { children: r })] }), /* @__PURE__ */ E("form", {
				onSubmit: _,
				children: [/* @__PURE__ */ T(nr, { children: /* @__PURE__ */ E(ir, { children: [/* @__PURE__ */ T(or, {
					htmlFor: h,
					children: i
				}), /* @__PURE__ */ T(gn, {
					id: h,
					value: d,
					onChange: (e) => f(e.target.value),
					placeholder: s,
					required: !0,
					disabled: p
				})] }) }), /* @__PURE__ */ E(fn, {
					className: "mt-4",
					children: [/* @__PURE__ */ T(M, {
						type: "button",
						variant: "outline",
						disabled: p,
						onClick: () => g(!1),
						children: o
					}), /* @__PURE__ */ E(M, {
						type: "submit",
						disabled: p || !d.trim(),
						"aria-busy": p,
						children: [p && /* @__PURE__ */ T(Ni, { "data-icon": "inline-start" }), a]
					})]
				})]
			})]
		})]
	});
}
// src/components/patterns/status-badge.tsx
function ga({ children: e, variant: t = "secondary", ...n }) {
	return /* @__PURE__ */ E(N, {
		variant: t,
		...n,
		children: [/* @__PURE__ */ T(Et, {}), e]
	});
}
// src/components/patterns/user-menu.tsx
var _a = (e) => e.trim().split(/\s+/).slice(0, 2).map((e) => e[0]).join("").toUpperCase();
function va({ user: e }) {
	return /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(yt, {
		className: "size-8 rounded-lg",
		children: /* @__PURE__ */ T(xt, {
			className: "rounded-lg",
			children: _a(e.name)
		})
	}), /* @__PURE__ */ E("div", {
		className: "grid flex-1 text-left text-sm leading-tight",
		children: [/* @__PURE__ */ T("span", {
			className: "truncate font-medium",
			children: e.name
		}), /* @__PURE__ */ T("span", {
			className: "truncate text-xs text-muted-foreground",
			children: e.email
		})]
	})] });
}
function ya({ user: t, onLogout: n }) {
	let [r, i] = e.useState(!1);
	async function a() {
		i(!0);
		try {
			await n();
		} finally {
			i(!1);
		}
	}
	return /* @__PURE__ */ T(wi, { children: /* @__PURE__ */ T(H, { children: /* @__PURE__ */ E(P, { children: [/* @__PURE__ */ T(F, {
		asChild: !0,
		children: /* @__PURE__ */ E(U, {
			tooltip: t.name,
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
			children: [/* @__PURE__ */ T(yt, {
				className: "size-6 rounded-full",
				children: /* @__PURE__ */ T(xt, {
					className: "rounded-full text-[10px]",
					children: _a(t.name)
				})
			}), /* @__PURE__ */ T("span", {
				className: "truncate",
				children: t.name
			})]
		})
	}), /* @__PURE__ */ E(I, {
		className: "min-w-56 rounded-lg",
		side: "right",
		align: "end",
		sideOffset: 8,
		children: [
			/* @__PURE__ */ T(zn, {
				className: "flex items-center gap-2 p-1.5 font-normal",
				children: /* @__PURE__ */ T(va, { user: t })
			}),
			/* @__PURE__ */ T(Bn, {}),
			/* @__PURE__ */ T(Fn, { children: /* @__PURE__ */ E(L, {
				disabled: !0,
				children: [
					/* @__PURE__ */ T(se, {}),
					"บทบาท: ",
					t.role
				]
			}) }),
			/* @__PURE__ */ T(Bn, {}),
			/* @__PURE__ */ E(L, {
				onSelect: a,
				disabled: r,
				children: [/* @__PURE__ */ T(be, {}), r ? "กำลังออกจากระบบ…" : "ออกจากระบบ"]
			})
		]
	})] }) }) });
}
// src/components/patterns/data-table/data-table.tsx
var ba = "button, a, input, label, [role=checkbox], [role=menuitem]";
function xa({ table: e, caption: t, status: n = "ready", empty: r, error: i, loadingRows: a = 10, onRowClick: o, className: c }) {
	let l = e.getVisibleLeafColumns(), u = e.getRowModel().rows;
	return /* @__PURE__ */ T("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", c),
		children: /* @__PURE__ */ E(W, {
			"aria-busy": n === "loading",
			children: [
				/* @__PURE__ */ T("caption", {
					className: "sr-only",
					children: t
				}),
				/* @__PURE__ */ T(G, {
					className: "sticky top-0 z-10",
					children: e.getHeaderGroups().map((t) => /* @__PURE__ */ T(q, { children: t.headers.map((t) => {
						let n = t.column.columnDef.meta, r = t.column.getIsSorted();
						return /* @__PURE__ */ T(J, {
							"aria-sort": r === "asc" ? "ascending" : r === "desc" ? "descending" : t.column.getCanSort() ? "none" : void 0,
							className: s(n?.align === "right" && "text-right", n?.sticky && "sticky left-0 z-10 bg-secondary"),
							children: t.isPlaceholder ? null : /* @__PURE__ */ T(e.FlexRender, { header: t })
						}, t.id);
					}) }, t.id))
				}),
				/* @__PURE__ */ E(K, { children: [
					n === "loading" && Array.from({ length: a }, (e, t) => /* @__PURE__ */ T(q, {
						className: "hover:bg-transparent",
						children: l.map((e) => /* @__PURE__ */ T(Y, { children: /* @__PURE__ */ T(Qr, { className: "h-4 w-full max-w-32" }) }, e.id))
					}, `skeleton-${t}`)),
					n === "error" && /* @__PURE__ */ T(q, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ T(Y, {
							colSpan: l.length,
							className: "h-auto p-0 whitespace-normal",
							children: i
						})
					}),
					n === "ready" && u.length === 0 && /* @__PURE__ */ T(q, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ T(Y, {
							colSpan: l.length,
							className: "h-auto p-0 whitespace-normal",
							children: r
						})
					}),
					n === "ready" && u.map((t) => /* @__PURE__ */ T(q, {
						"data-state": t.getIsSelected() ? "selected" : void 0,
						className: s(o && "cursor-pointer"),
						onClick: o ? (e) => {
							e.target.closest(ba) || o(t);
						} : void 0,
						children: t.getVisibleCells().map((t) => {
							let n = t.column.columnDef.meta;
							return /* @__PURE__ */ T(Y, {
								className: s(n?.align === "right" && "text-right", n?.sticky && "sticky left-0 bg-inherit"),
								children: /* @__PURE__ */ T(e.FlexRender, { cell: t })
							}, t.id);
						})
					}, t.id))
				] })
			]
		})
	});
}
// src/components/patterns/data-table/data-table-column-header.tsx
function Sa({ column: e, title: t, className: n }) {
	if (!e.getCanSort()) return /* @__PURE__ */ T("span", {
		className: n,
		children: t
	});
	let r = e.getIsSorted(), i = r === "asc" ? oe : r === "desc" ? ie : me, a = e.getNextSortingOrder(), o = a === "asc" ? "เรียงจากน้อยไปมาก" : a === "desc" ? "เรียงจากมากไปน้อย" : "ยกเลิกการเรียง";
	return /* @__PURE__ */ E(M, {
		variant: "ghost",
		size: "sm",
		className: s("-mx-3 h-control-sm px-3 font-medium text-foreground-secondary data-[sorted=true]:text-primary", e.columnDef.meta?.align === "right" && "flex-row-reverse", n),
		"data-sorted": !!r,
		"aria-label": `${t}: ${o}`,
		onClick: e.getToggleSortingHandler(),
		children: [t, /* @__PURE__ */ T(i, {
			"data-icon": "inline-end",
			className: s("size-3.5", !r && "opacity-50"),
			"aria-hidden": !0
		})]
	});
}
// src/components/patterns/data-table/data-table-faceted-filter.tsx
function Ca({ column: e, title: t, options: n }) {
	let r = new Set(e?.getFilterValue() ?? []);
	function i(t) {
		let n = new Set(r);
		n.has(t) ? n.delete(t) : n.add(t), e?.setFilterValue(n.size ? [...n] : void 0);
	}
	return /* @__PURE__ */ E(R, { children: [/* @__PURE__ */ T(z, {
		asChild: !0,
		children: /* @__PURE__ */ E(M, {
			variant: "outline",
			className: "border-dashed text-foreground",
			children: [
				/* @__PURE__ */ T(Te, { "data-icon": "inline-start" }),
				t,
				r.size > 0 && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T($n, {
					orientation: "vertical",
					className: "mx-1 h-4"
				}), r.size > 2 ? /* @__PURE__ */ E(N, {
					variant: "accent",
					children: ["เลือก ", r.size]
				}) : n.filter((e) => r.has(e.value)).map((e) => /* @__PURE__ */ T(N, {
					variant: "accent",
					children: e.label
				}, e.value))] })
			]
		})
	}), /* @__PURE__ */ T(B, {
		className: "w-64 p-0",
		align: "start",
		children: /* @__PURE__ */ E(Tn, { children: [/* @__PURE__ */ T(Dn, { placeholder: `ค้นหา${t}` }), /* @__PURE__ */ E(On, { children: [
			/* @__PURE__ */ T(kn, { children: "ไม่พบตัวเลือก" }),
			/* @__PURE__ */ T(An, { children: n.map((e) => {
				let t = r.has(e.value);
				return /* @__PURE__ */ E(Mn, {
					onSelect: () => i(e.value),
					"aria-selected": t,
					children: [
						/* @__PURE__ */ T("span", {
							"aria-hidden": !0,
							className: s("flex size-4 items-center justify-center rounded-sm border border-input", t && "border-primary bg-primary text-primary-foreground"),
							children: t && /* @__PURE__ */ T(D, { className: "size-3" })
						}),
						/* @__PURE__ */ T("span", {
							className: "flex-1",
							children: e.label
						}),
						e.count !== void 0 && /* @__PURE__ */ T("span", {
							className: "font-mono text-xs text-muted-foreground tabular-nums",
							children: e.count
						})
					]
				}, e.value);
			}) }),
			r.size > 0 && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(jn, {}), /* @__PURE__ */ T(An, { children: /* @__PURE__ */ T(Mn, {
				onSelect: () => e?.setFilterValue(void 0),
				className: "justify-center",
				children: "ล้างตัวกรองนี้"
			}) })] })
		] })] })
	})] });
}
// src/components/patterns/data-table/data-table-pagination.tsx
var Z = new Intl.NumberFormat("th-TH");
function wa({ table: t, pageSizes: n = [
	20,
	50,
	100
] }) {
	let { pageIndex: r, pageSize: i } = t.state.pagination, a = t.getRowCount(), o = a === 0 ? 0 : r * i + 1, s = Math.min(a, (r + 1) * i), c = Object.keys(t.state.rowSelection ?? {}).length, l = e.useId();
	return /* @__PURE__ */ E("nav", {
		"aria-label": "แบ่งหน้า",
		"data-slot": "data-table-pagination",
		className: "flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground",
		children: [/* @__PURE__ */ E("p", {
			"aria-live": "polite",
			className: "tabular-nums",
			children: [
				"แสดง ",
				Z.format(o),
				"–",
				Z.format(s),
				" จาก ",
				Z.format(a),
				" รายการ",
				c > 0 && /* @__PURE__ */ E("span", {
					className: "text-foreground",
					children: [" · เลือกแล้ว ", Z.format(c)]
				})
			]
		}), /* @__PURE__ */ E("div", {
			className: "flex items-center gap-4",
			children: [
				/* @__PURE__ */ E("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ T("span", {
						id: l,
						className: "hidden sm:inline",
						children: "แถวต่อหน้า"
					}), /* @__PURE__ */ E(kr, {
						value: String(i),
						onValueChange: (e) => t.setPageSize(Number(e)),
						children: [/* @__PURE__ */ T(Mr, {
							className: "w-20",
							"aria-labelledby": l,
							children: /* @__PURE__ */ T(jr, {})
						}), /* @__PURE__ */ T(Nr, { children: /* @__PURE__ */ T(Ar, { children: n.map((e) => /* @__PURE__ */ T(Fr, {
							value: String(e),
							children: e
						}, e)) }) })]
					})]
				}),
				/* @__PURE__ */ E("span", {
					className: "tabular-nums text-foreground",
					children: [
						"หน้า ",
						Z.format(r + 1),
						" / ",
						Z.format(Math.max(1, t.getPageCount()))
					]
				}),
				/* @__PURE__ */ E("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ T(M, {
							variant: "outline",
							size: "icon",
							className: "hidden lg:inline-flex",
							"aria-label": "หน้าแรก",
							onClick: () => t.setPageIndex(0),
							disabled: !t.getCanPreviousPage(),
							children: /* @__PURE__ */ T(fe, {})
						}),
						/* @__PURE__ */ T(M, {
							variant: "outline",
							size: "icon",
							"aria-label": "หน้าก่อนหน้า",
							onClick: () => t.previousPage(),
							disabled: !t.getCanPreviousPage(),
							children: /* @__PURE__ */ T(ue, {})
						}),
						/* @__PURE__ */ T(M, {
							variant: "outline",
							size: "icon",
							"aria-label": "หน้าถัดไป",
							onClick: () => t.nextPage(),
							disabled: !t.getCanNextPage(),
							children: /* @__PURE__ */ T(k, {})
						}),
						/* @__PURE__ */ T(M, {
							variant: "outline",
							size: "icon",
							className: "hidden lg:inline-flex",
							"aria-label": "หน้าสุดท้าย",
							onClick: () => t.setPageIndex(t.getPageCount() - 1),
							disabled: !t.getCanNextPage(),
							children: /* @__PURE__ */ T(pe, {})
						})
					]
				})
			]
		})]
	});
}
// src/components/patterns/data-table/data-table-toolbar.tsx
function Ta({ table: t, searchPlaceholder: n = "ค้นหา", debounce: r = 300, filters: i, actions: a, columnsMenu: o = !0 }) {
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
	return /* @__PURE__ */ E("div", {
		"data-slot": "data-table-toolbar",
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ E(_n, {
				className: "w-full sm:w-72",
				children: [
					/* @__PURE__ */ T(yn, { children: /* @__PURE__ */ T(Oe, {}) }),
					/* @__PURE__ */ T(Cn, {
						type: "search",
						"aria-label": n,
						placeholder: n,
						value: c,
						onChange: (e) => l(e.target.value)
					}),
					c && /* @__PURE__ */ T(yn, {
						align: "inline-end",
						children: /* @__PURE__ */ T(xn, {
							size: "icon-xs",
							"aria-label": "ล้างคำค้นหา",
							onClick: () => l(""),
							children: /* @__PURE__ */ T(A, {})
						})
					})
				]
			}),
			i,
			u && /* @__PURE__ */ E(M, {
				variant: "ghost",
				onClick: d,
				children: ["ล้างตัวกรอง", /* @__PURE__ */ T(A, { "data-icon": "inline-end" })]
			}),
			/* @__PURE__ */ E("div", {
				className: "ml-auto flex items-center gap-2",
				children: [a, o && /* @__PURE__ */ E(P, { children: [/* @__PURE__ */ T(F, {
					asChild: !0,
					children: /* @__PURE__ */ E(M, {
						variant: "outline",
						children: [/* @__PURE__ */ T(ge, { "data-icon": "inline-start" }), "คอลัมน์"]
					})
				}), /* @__PURE__ */ T(I, {
					align: "end",
					className: "w-52",
					children: /* @__PURE__ */ E(Fn, { children: [
						/* @__PURE__ */ T(zn, { children: "แสดงคอลัมน์" }),
						/* @__PURE__ */ T(Bn, {}),
						t.getAllLeafColumns().filter((e) => e.getCanHide()).map((e) => /* @__PURE__ */ T(In, {
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
var Ea = et({
	rowSortingFeature: Ye,
	columnFilteringFeature: ze,
	globalFilteringFeature: Ke,
	rowPaginationFeature: qe,
	rowSelectionFeature: Je,
	columnVisibilityFeature: Be,
	sortedRowModel: Ue(),
	filteredRowModel: Ve(),
	paginatedRowModel: He(),
	filterFns: {
		includesString: Ge,
		arrIncludesSome: We
	},
	sortFns: {
		alphanumeric: Xe,
		text: $e,
		datetime: Qe,
		basic: Ze
	},
	columnMeta: {}
}), Da = 64, Oa = 800, ka = 160, Aa = 16, ja = "moove-table:", Ma = 1;
function Na(e) {
	return Number.isFinite(e) ? Math.round(Math.min(800, Math.max(64, e))) : 160;
}
function Q(e, t) {
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
function Pa(e, t, n) {
	let r = e.indexOf(t), i = e.indexOf(n);
	if (r < 0 || i < 0 || r === i) return [...e];
	let a = [...e];
	return a.splice(r, 1), a.splice(i, 0, t), a;
}
function Fa(e, t, n, r) {
	let i = r ? e.filter((e) => e === t || r.includes(e)) : [...e], a = i.indexOf(t), o = i[a + n];
	return a < 0 || o === void 0 ? [...e] : Pa(e, t, o);
}
function Ia(e, t, n = [], r = []) {
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
function La(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Ra(e, t) {
	return La(Q(e.order, t), t) && Object.keys(e.widths).length === 0;
}
function za(e) {
	return {
		order: [...e],
		widths: {}
	};
}
function Ba(e, t) {
	switch (t.type) {
		case "load": return {
			order: Q(t.layout.order, t.ids),
			widths: Va(t.layout.widths)
		};
		case "move": {
			let n = Q(e.order, t.ids), r = Fa(n, t.id, t.delta, t.visible);
			return La(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "moveTo": {
			let n = Q(e.order, t.ids), r = Pa(n, t.id, t.targetId);
			return La(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "resize": {
			let n = Na(t.width);
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
function Va(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) typeof r == "number" && Number.isFinite(r) && r > 0 && (t[n] = Math.round(Math.min(800, r)));
	return t;
}
function Ha(e) {
	return `${ja}${e}`;
}
function Ua(e, t) {
	if (!e) return null;
	try {
		let n = e.getItem(Ha(t));
		if (!n) return null;
		let r = JSON.parse(n);
		if (r.v !== Ma || !Array.isArray(r.order) || !r.order.every((e) => typeof e == "string")) return null;
		let i = r.widths && typeof r.widths == "object" && !Array.isArray(r.widths) ? Va(r.widths) : {};
		return {
			order: r.order,
			widths: i
		};
	} catch {
		return null;
	}
}
function Wa(e, t, n, r) {
	if (e) try {
		Ra(n, r) ? e.removeItem(Ha(t)) : e.setItem(Ha(t), JSON.stringify({
			v: Ma,
			order: n.order,
			widths: n.widths
		}));
	} catch {}
}
function Ga() {
	try {
		return typeof window > "u" ? null : window.localStorage;
	} catch {
		return null;
	}
}
function Ka(e) {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
	return (t >>> 0).toString(36);
}
function qa(e, t) {
	let n = e.some((e) => t[e] !== void 0), r = e.map((e) => n ? t[e] ?? 160 : void 0);
	return {
		fixed: n,
		colWidths: r,
		totalWidth: r.reduce((e, t) => e + (t ?? 0), 0)
	};
}
// src/components/patterns/data-table/column-layout-parts.tsx
var $ = {
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
function Ja(e) {
	let t = {};
	return e.closest("table")?.querySelectorAll("thead th[data-col-id]").forEach((e) => {
		let n = e.dataset.colId;
		n && (t[n] = Math.ceil(e.getBoundingClientRect().width) + 1);
	}), t;
}
function Ya({ layout: e, id: t, label: n }) {
	let i = r(null), a = r(0), o = e.widths[t], s = (n) => {
		if (o !== void 0) return o;
		let r = Ja(n);
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
	return /* @__PURE__ */ T("div", {
		role: "separator",
		"aria-orientation": "vertical",
		"aria-label": $.resize(n),
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
function Xa({ layout: e, id: t, label: n, movable: r, resizable: i, className: a, ariaSort: o, children: c }) {
	let { drag: l } = e;
	return /* @__PURE__ */ E(J, {
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
		children: [c, i && /* @__PURE__ */ T(Ya, {
			layout: e,
			id: t,
			label: n
		})]
	});
}
function Za({ ids: e, sizing: t }) {
	return t.fixed ? /* @__PURE__ */ E("colgroup", { children: [e.map((e, n) => /* @__PURE__ */ T("col", { style: { width: t.colWidths[n] } }, e)), /* @__PURE__ */ T("col", {})] }) : null;
}
function Qa({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ T(J, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function $a({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ T(Y, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function eo(e) {
	return e.fixed ? {
		"data-layout": "fixed",
		style: {
			tableLayout: "fixed",
			width: `max(100%, ${e.totalWidth}px)`,
			minWidth: e.totalWidth
		}
	} : {};
}
function to({ layout: e, table: t, items: n }) {
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
	return /* @__PURE__ */ E(R, { children: [/* @__PURE__ */ T(z, {
		asChild: !0,
		children: /* @__PURE__ */ E(M, {
			variant: "outline",
			children: [/* @__PURE__ */ T(ae, { "data-icon": "inline-start" }), $.arrange]
		})
	}), /* @__PURE__ */ E(B, {
		align: "end",
		className: "w-80 gap-0 p-0",
		children: [
			/* @__PURE__ */ E(Sr, {
				className: "p-3",
				children: [/* @__PURE__ */ T(Cr, { children: $.arrangeTitle }), /* @__PURE__ */ T(wr, { children: $.arrangeHint })]
			}),
			/* @__PURE__ */ T("ol", {
				"aria-label": $.listLabel,
				className: "max-h-[50dvh] overflow-y-auto border-y py-1",
				children: a.map((t) => {
					let n = t.shown, r = o.indexOf(t.id);
					return /* @__PURE__ */ E("li", {
						className: "flex items-center gap-1 px-3",
						children: [
							/* @__PURE__ */ E("label", {
								className: "flex min-h-11 min-w-0 flex-1 items-center gap-3 text-sm",
								children: [/* @__PURE__ */ T(en, {
									checked: n,
									disabled: !t.canHide,
									onCheckedChange: (e) => t.toggle(e === !0),
									"aria-label": $.show(s(t))
								}), /* @__PURE__ */ T("span", {
									className: "min-w-0 flex-1 truncate",
									children: s(t)
								})]
							}),
							/* @__PURE__ */ T(M, {
								size: "icon",
								variant: "ghost",
								"aria-label": $.moveLeft(s(t)),
								disabled: !n || r <= 0,
								onClick: () => e.move(t.id, -1, o),
								children: /* @__PURE__ */ T(de, {})
							}),
							/* @__PURE__ */ T(M, {
								size: "icon",
								variant: "ghost",
								"aria-label": $.moveRight(s(t)),
								disabled: !n || r === o.length - 1,
								onClick: () => e.move(t.id, 1, o),
								children: /* @__PURE__ */ T(O, {})
							})
						]
					}, t.id);
				})
			}),
			/* @__PURE__ */ T("div", {
				className: "p-3",
				children: /* @__PURE__ */ E(M, {
					variant: "outline",
					className: "w-full",
					disabled: !l,
					onClick: c,
					children: [/* @__PURE__ */ T(De, { "data-icon": "inline-start" }), $.reset]
				})
			})
		]
	})] });
}
// src/components/patterns/data-table/column-layout-data-table.tsx
var no = "button, a, input, label, [role=checkbox], [role=menuitem], [role=separator]";
function ro({ table: e, layout: t, caption: n, empty: r, onRowClick: i, className: a }) {
	let o = e.getVisibleLeafColumns().map((e) => e.id), c = qa(o, t.widths), l = e.getRowModel().rows, u = new Set(t.order);
	return /* @__PURE__ */ T("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", a),
		children: /* @__PURE__ */ E(W, {
			...eo(c),
			children: [
				/* @__PURE__ */ T("caption", {
					className: "sr-only",
					children: n
				}),
				/* @__PURE__ */ T(Za, {
					ids: o,
					sizing: c
				}),
				/* @__PURE__ */ T(G, {
					className: "sticky top-0 z-10",
					children: e.getHeaderGroups().map((e) => /* @__PURE__ */ E(q, { children: [e.headers.map((e) => {
						let n = e.column, r = n.columnDef.meta, i = n.getIsSorted();
						return /* @__PURE__ */ T(Xa, {
							layout: t,
							id: n.id,
							label: io(n.columnDef.meta, n.columnDef.header, n.id),
							movable: u.has(n.id),
							resizable: u.has(n.id),
							ariaSort: i === "asc" ? "ascending" : i === "desc" ? "descending" : n.getCanSort() ? "none" : void 0,
							className: s(r?.align === "right" && "text-right", r?.sticky && "sticky left-0 z-10 bg-secondary"),
							children: e.isPlaceholder ? null : /* @__PURE__ */ T(Re, { header: e })
						}, e.id);
					}), /* @__PURE__ */ T(Qa, { sizing: c })] }, e.id))
				}),
				/* @__PURE__ */ T(K, { children: l.length === 0 ? /* @__PURE__ */ T(q, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ T(Y, {
						colSpan: o.length + +!!c.fixed,
						className: "h-auto p-0 whitespace-normal",
						children: r
					})
				}) : l.map((e) => /* @__PURE__ */ E(q, {
					"data-state": e.getIsSelected() ? "selected" : void 0,
					className: s(i && "cursor-pointer"),
					onClick: i ? (t) => !t.target.closest(no) && i(e) : void 0,
					children: [e.getVisibleCells().map((e) => {
						let t = e.column.columnDef.meta;
						return /* @__PURE__ */ T(Y, {
							className: s(t?.align === "right" && "text-right", t?.sticky && "sticky left-0 bg-inherit"),
							children: /* @__PURE__ */ T(Re, { cell: e })
						}, e.id);
					}), /* @__PURE__ */ T($a, { sizing: c })]
				}, e.id)) })
			]
		})
	});
}
function io(e, t, n) {
	return e?.label ?? (typeof t == "string" ? t : n);
}
function ao(e, t) {
	let n = new Set(t.order);
	return e.getVisibleLeafColumns().filter((e) => n.has(e.id)).map((e) => ({
		id: e.id,
		label: io(e.columnDef.meta, e.columnDef.header, e.id)
	}));
}
// src/components/patterns/data-table/use-column-layout.ts
var oo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map();
function co(e) {
	return oo.has(e) || oo.set(e, Ua(Ga(), e)), oo.get(e) ?? null;
}
function lo(e, t, n) {
	oo.set(e, t), Wa(Ga(), e, t, n);
	for (let t of so.get(e) ?? []) t();
}
function uo(e, t) {
	let n = so.get(e) ?? /* @__PURE__ */ new Set();
	return n.add(t), so.set(e, n), () => n.delete(t);
}
var fo = () => null;
function po(e, o) {
	let s = o.join("\0"), c = n(() => [...o], [s]), l = a(t((t) => uo(e, t), [e]), () => co(e), fo), u = n(() => za(c), [c]), d = l ?? u, f = n(() => Q(d.order, c), [d.order, c]), p = d.widths, m = t((t) => {
		let n = co(e) ?? za(c), r = Ba(n, t);
		r !== n && lo(e, r, c);
	}, [e, c]), h = r(null), g = r(!1), [_, v] = i(null);
	return {
		tableId: e,
		order: f,
		widths: p,
		isCustom: !Ra(d, c),
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
var mo = {
	left: "",
	right: "text-right",
	center: "text-center"
};
function ho({ tableId: e, columns: t, rows: n, rowKey: r, caption: i, toolbar: a, className: o }) {
	let c = t.filter((e) => e.pin === "start").map((e) => e.id), l = t.filter((e) => e.pin === "end").map((e) => e.id), u = po(e, t.filter((e) => !e.pin).map((e) => e.id)), d = Ia(t, u.order, c, l), f = d.map((e) => e.id), p = qa(f, u.widths), m = d.some((e) => e.footer !== void 0), h = d.filter((e) => !e.pin).map((e) => ({
		id: e.id,
		label: e.label
	}));
	return /* @__PURE__ */ E("div", {
		className: s("flex flex-col gap-2", o),
		children: [/* @__PURE__ */ E("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ T("div", { children: a }), /* @__PURE__ */ T(to, {
				layout: u,
				items: h
			})]
		}), /* @__PURE__ */ E(W, {
			...eo(p),
			children: [
				i && /* @__PURE__ */ T("caption", {
					className: "sr-only",
					children: i
				}),
				/* @__PURE__ */ T(Za, {
					ids: f,
					sizing: p
				}),
				/* @__PURE__ */ T(G, { children: /* @__PURE__ */ E(q, { children: [d.map((e) => e.pin ? /* @__PURE__ */ T(J, {
					"data-col-id": e.id,
					className: mo[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id) : /* @__PURE__ */ T(Xa, {
					layout: u,
					id: e.id,
					label: e.label,
					movable: !0,
					resizable: !0,
					className: mo[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id)), /* @__PURE__ */ T(Qa, { sizing: p })] }) }),
				/* @__PURE__ */ T(K, { children: n.map((e) => /* @__PURE__ */ E(q, { children: [d.map((t) => /* @__PURE__ */ T(Y, {
					className: s(mo[t.align ?? "left"], t.align === "right" && "tabular-nums", t.className),
					children: t.cell(e)
				}, t.id)), /* @__PURE__ */ T($a, { sizing: p })] }, r(e))) }),
				m && /* @__PURE__ */ T(Pi, { children: /* @__PURE__ */ E(q, { children: [d.map((e) => /* @__PURE__ */ T(Y, {
					className: s(mo[e.align ?? "left"], e.align === "right" && "tabular-nums", e.className),
					children: e.footer
				}, e.id)), /* @__PURE__ */ T($a, { sizing: p })] }) })
			]
		})]
	});
}
export { ht as Alert, vt as AlertAction, _t as AlertDescription, nt as AlertDialog, ft as AlertDialogAction, pt as AlertDialogCancel, ot as AlertDialogContent, dt as AlertDialogDescription, ct as AlertDialogFooter, st as AlertDialogHeader, lt as AlertDialogMedia, at as AlertDialogOverlay, it as AlertDialogPortal, ut as AlertDialogTitle, rt as AlertDialogTrigger, gt as AlertTitle, Zi as AppShell, yt as Avatar, St as AvatarBadge, xt as AvatarFallback, Ct as AvatarGroup, wt as AvatarGroupCount, bt as AvatarImage, N as Badge, Et as BadgeDot, Qi as BadgeOverflow, $i as BlockerBadge, Dt as Breadcrumb, Nt as BreadcrumbEllipsis, kt as BreadcrumbItem, At as BreadcrumbLink, Ot as BreadcrumbList, jt as BreadcrumbPage, Mt as BreadcrumbSeparator, M as Button, Pt as Calendar, Ft as CalendarDayButton, It as Card, Bt as CardAction, Vt as CardContent, zt as CardDescription, Ht as CardFooter, Lt as CardHeader, Rt as CardTitle, ea as ChartCard, qt as ChartContainer, Zt as ChartLegend, Qt as ChartLegendContent, Jt as ChartStyle, Yt as ChartTooltip, Xt as ChartTooltipContent, en as Checkbox, tn as Collapsible, rn as CollapsibleContent, nn as CollapsibleTrigger, to as ColumnLayoutControls, ro as ColumnLayoutDataTable, ho as ColumnLayoutTable, Tn as Command, En as CommandDialog, kn as CommandEmpty, An as CommandGroup, Dn as CommandInput, Mn as CommandItem, On as CommandList, jn as CommandSeparator, Nn as CommandShortcut, ta as ConfirmDialog, ka as DEFAULT_COLUMN_WIDTH, xa as DataTable, Sa as DataTableColumnHeader, Ca as DataTableFacetedFilter, wa as DataTablePagination, Ta as DataTableToolbar, ca as DatePicker, ua as DateRangeFilter, la as DateRangePicker, an as Dialog, cn as DialogClose, un as DialogContent, mn as DialogDescription, fn as DialogFooter, dn as DialogHeader, ln as DialogOverlay, sn as DialogPortal, pn as DialogTitle, on as DialogTrigger, P as DropdownMenu, In as DropdownMenuCheckboxItem, I as DropdownMenuContent, Fn as DropdownMenuGroup, L as DropdownMenuItem, zn as DropdownMenuLabel, Pn as DropdownMenuPortal, Ln as DropdownMenuRadioGroup, Rn as DropdownMenuRadioItem, Bn as DropdownMenuSeparator, Vn as DropdownMenuShortcut, Hn as DropdownMenuSub, Wn as DropdownMenuSubContent, Un as DropdownMenuSubTrigger, F as DropdownMenuTrigger, Gn as Empty, Zn as EmptyContent, Xn as EmptyDescription, Kn as EmptyHeader, Jn as EmptyMedia, da as EmptyState, Yn as EmptyTitle, fa as ErrorState, ir as Field, ar as FieldContent, cr as FieldDescription, ur as FieldError, nr as FieldGroup, or as FieldLabel, tr as FieldLegend, lr as FieldSeparator, er as FieldSet, sr as FieldTitle, $a as FillerCell, Qa as FillerHead, dr as HoverCard, pr as HoverCardContent, fr as HoverCardTrigger, hn as Input, _n as InputGroup, yn as InputGroupAddon, xn as InputGroupButton, Cn as InputGroupInput, Sn as InputGroupText, wn as InputGroupTextarea, Qn as Label, Za as LayoutColGroup, Xa as LayoutHead, Oa as MAX_COLUMN_WIDTH, Da as MIN_COLUMN_WIDTH, pa as PageHeader, mr as Pagination, hr as PaginationContent, br as PaginationEllipsis, gr as PaginationItem, _r as PaginationLink, yr as PaginationNext, vr as PaginationPrevious, ma as PhoneText, R as Popover, xr as PopoverAnchor, B as PopoverContent, wr as PopoverDescription, Sr as PopoverHeader, Cr as PopoverTitle, z as PopoverTrigger, Er as Progress, Aa as RESIZE_STEP, ha as ReasonDialog, Dr as ScrollArea, Or as ScrollBar, kr as Select, Nr as SelectContent, Ar as SelectGroup, Fr as SelectItem, Pr as SelectLabel, Rr as SelectScrollDownButton, Lr as SelectScrollUpButton, Ir as SelectSeparator, Mr as SelectTrigger, jr as SelectValue, $n as Separator, zr as Sheet, Vr as SheetClose, Wr as SheetContent, Jr as SheetDescription, Kr as SheetFooter, Gr as SheetHeader, qr as SheetTitle, Br as SheetTrigger, di as Sidebar, yi as SidebarContent, _i as SidebarFooter, bi as SidebarGroup, Si as SidebarGroupAction, Ci as SidebarGroupContent, xi as SidebarGroupLabel, gi as SidebarHeader, hi as SidebarInput, mi as SidebarInset, wi as SidebarMenu, Ei as SidebarMenuAction, Di as SidebarMenuBadge, U as SidebarMenuButton, H as SidebarMenuItem, Oi as SidebarMenuSkeleton, ki as SidebarMenuSub, ji as SidebarMenuSubButton, Ai as SidebarMenuSubItem, ui as SidebarProvider, pi as SidebarRail, vi as SidebarSeparator, fi as SidebarTrigger, Qr as Skeleton, Ni as Spinner, ga as StatusBadge, W as Table, K as TableBody, Fi as TableCaption, Y as TableCell, Pi as TableFooter, J as TableHead, G as TableHeader, q as TableRow, Ii as Tabs, Bi as TabsContent, Ri as TabsList, zi as TabsTrigger, gn as Textarea, Mi as Toaster, Hi as Toggle, Wi as ToggleGroup, Gi as ToggleGroupItem, ei as Tooltip, ni as TooltipContent, $r as TooltipProvider, ti as TooltipTrigger, ya as UserMenu, ao as arrangeItems, Tt as badgeVariants, Ga as browserStorage, tt as buttonVariants, Na as clampWidth, o as cn, Ba as columnLayoutReducer, Ea as dataTableFeatures, sa as defaultDatePresets, za as defaultLayout, na as formatDate, Ka as hashText, Ra as isDefaultLayout, Ua as loadLayout, Fa as moveColumnBy, Pa as moveColumnTo, Q as normalizeOrder, Ia as orderColumns, Wa as saveLayout, Ha as storageKey, eo as tableProps, qa as tableSizing, Li as tabsListVariants, Vi as toggleVariants, po as useColumnLayout, Zr as useIsMobile, V as useSidebar };
