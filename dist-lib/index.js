"use client";
import * as e from "react";
import { useCallback as t, useMemo as n, useRef as r, useState as i, useSyncExternalStore as a } from "react";
import { cn as o, cn as s } from "cn";
import { AlertDialog as c, Avatar as l, Checkbox as u, Collapsible as d, Dialog as f, DropdownMenu as p, HoverCard as m, Label as h, Popover as g, Progress as _, ScrollArea as v, Select as y, Separator as ee, Slot as b, Tabs as te, Toggle as ne, ToggleGroup as re, Tooltip as x } from "radix-ui";
import { cva as S } from "class-variance-authority";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import { AlertTriangleIcon as ie, ArrowDownIcon as ae, ArrowLeftRightIcon as oe, ArrowUpIcon as se, BadgeCheckIcon as ce, CalendarIcon as le, ChartNoAxesColumnIcon as ue, CheckIcon as E, ChevronDownIcon as D, ChevronLeftIcon as de, ChevronRightIcon as O, ChevronUpIcon as fe, ChevronsLeftIcon as pe, ChevronsRightIcon as me, ChevronsUpDownIcon as he, CircleCheckIcon as ge, Columns3Icon as _e, InboxIcon as ve, InfoIcon as ye, Loader2Icon as be, LockIcon as xe, LogOutIcon as Se, MinusIcon as Ce, MoreHorizontalIcon as we, OctagonXIcon as Te, PanelLeftIcon as Ee, PlusCircleIcon as De, PlusIcon as Oe, RefreshCwIcon as ke, RotateCcwIcon as Ae, SearchIcon as je, SearchXIcon as Me, ServerCrashIcon as Ne, SparklesIcon as Pe, TableIcon as Fe, TriangleAlertIcon as Ie, XIcon as k } from "lucide-react";
import { DayPicker as Le, getDefaultClassNames as Re } from "react-day-picker";
import * as ze from "recharts";
import { Command as A } from "cmdk";
import { Toaster as Be } from "sonner";
import { th as Ve } from "react-day-picker/locale";
import { FlexRender as He, columnFilteringFeature as Ue, columnVisibilityFeature as We, createFilteredRowModel as Ge, createPaginatedRowModel as Ke, createSortedRowModel as qe, filterFn_arrIncludesSome as Je, filterFn_includesString as Ye, globalFilteringFeature as Xe, rowPaginationFeature as Ze, rowSelectionFeature as Qe, rowSortingFeature as $e, sortFn_alphanumeric as et, sortFn_basic as tt, sortFn_datetime as nt, sortFn_text as rt, tableFeatures as it } from "@tanstack/react-table";
// src/components/ui/button.tsx
var at = S("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors duration-(--duration-fast) outline-none select-none active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--icon-size)", {
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
		className: s(at({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
// src/components/ui/alert-dialog.tsx
function ot({ ...e }) {
	return /* @__PURE__ */ w(c.Root, {
		"data-slot": "alert-dialog",
		...e
	});
}
function st({ ...e }) {
	return /* @__PURE__ */ w(c.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...e
	});
}
function ct({ ...e }) {
	return /* @__PURE__ */ w(c.Portal, {
		"data-slot": "alert-dialog-portal",
		...e
	});
}
function lt({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Overlay, {
		"data-slot": "alert-dialog-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function ut({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ T(ct, { children: [/* @__PURE__ */ w(lt, {}), /* @__PURE__ */ w(c.Content, {
		"data-slot": "alert-dialog-content",
		"data-size": t,
		className: s("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-popover p-6 text-popover-foreground shadow-lg duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...n
	})] });
}
function dt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-header",
		className: s("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", e),
		...t
	});
}
function ft({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-footer",
		className: s("-mx-6 -mb-6 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-secondary px-6 py-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function pt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-dialog-media",
		className: s("mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", e),
		...t
	});
}
function mt({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Title, {
		"data-slot": "alert-dialog-title",
		className: s("font-heading type-h3 sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", e),
		...t
	});
}
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ w(c.Description, {
		"data-slot": "alert-dialog-description",
		className: s("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
function gt({ className: e, variant: t = "default", size: n = "default", ...r }) {
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
function _t({ className: e, variant: t = "outline", size: n = "default", ...r }) {
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
var vt = S("group/alert relative grid w-full gap-0.5 rounded-lg border border-l-4 px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-28 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-(--icon-size)", {
	variants: { variant: {
		default: "border-border border-l-input bg-card text-card-foreground *:data-[slot=alert-description]:text-muted-foreground",
		info: "border-info-border border-l-info bg-info-subtle text-info-foreground",
		success: "border-success-border border-l-success bg-success-subtle text-success-foreground",
		warning: "border-warning-border border-l-warning bg-warning-subtle text-warning-foreground",
		destructive: "border-danger-border border-l-danger bg-danger-subtle text-danger-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function yt({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert",
		"data-variant": t,
		role: t === "destructive" || t === "warning" ? "alert" : "status",
		className: s(vt({ variant: t }), e),
		...n
	});
}
function bt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-title",
		className: s("font-semibold group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3", e),
		...t
	});
}
function xt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-description",
		className: s("text-sm text-pretty text-current [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-2", e),
		...t
	});
}
function St({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "alert-action",
		className: s("absolute top-1/2 right-3 -translate-y-1/2", e),
		...t
	});
}
// src/components/ui/avatar.tsx
function Ct({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ w(l.Root, {
		"data-slot": "avatar",
		"data-size": t,
		className: s("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6", e),
		...n
	});
}
function wt({ className: e, ...t }) {
	return /* @__PURE__ */ w(l.Image, {
		"data-slot": "avatar-image",
		className: s("aspect-square size-full rounded-full object-cover", e),
		...t
	});
}
function Tt({ className: e, ...t }) {
	return /* @__PURE__ */ w(l.Fallback, {
		"data-slot": "avatar-fallback",
		className: s("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", e),
		...t
	});
}
function Et({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "avatar-badge",
		className: s("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", e),
		...t
	});
}
function Dt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "avatar-group",
		className: s("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background", e),
		...t
	});
}
function Ot({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "avatar-group-count",
		className: s("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", e),
		...t
	});
}
// src/components/ui/badge.tsx
var kt = S("group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-4xl border border-transparent px-2.5 text-xs leading-none font-medium whitespace-nowrap transition-colors has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3.5!", {
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
		className: s(kt({ variant: t }), e),
		...r
	});
}
function At({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "badge-dot",
		"aria-hidden": !0,
		className: s("size-1.5 shrink-0 rounded-full bg-current", e),
		...t
	});
}
// src/components/ui/breadcrumb.tsx
function jt({ className: e, ...t }) {
	return /* @__PURE__ */ w("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: s(e),
		...t
	});
}
function Mt({ className: e, ...t }) {
	return /* @__PURE__ */ w("ol", {
		"data-slot": "breadcrumb-list",
		className: s("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground", e),
		...t
	});
}
function Nt({ className: e, ...t }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "breadcrumb-item",
		className: s("inline-flex items-center gap-1", e),
		...t
	});
}
function Pt({ asChild: e, className: t, ...n }) {
	let r = e ? b.Root : "a";
	return /* @__PURE__ */ w(r, {
		"data-slot": "breadcrumb-link",
		className: s("transition-colors hover:text-foreground", t),
		...n
	});
}
function Ft({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: s("font-normal text-foreground", e),
		...t
	});
}
function It({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: s("[&>svg]:size-3.5", t),
		...n,
		children: e ?? /* @__PURE__ */ w(O, {})
	});
}
function Lt({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: s("flex size-5 items-center justify-center [&>svg]:size-4", e),
		...t,
		children: [/* @__PURE__ */ w(we, {}), /* @__PURE__ */ w("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
// src/components/ui/calendar.tsx
function Rt({ className: e, classNames: t, showOutsideDays: n = !0, captionLayout: r = "label", buttonVariant: i = "ghost", locale: a, formatters: o, components: c, ...l }) {
	let u = Re();
	return /* @__PURE__ */ w(Le, {
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
			button_previous: s(at({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_previous),
			button_next: s(at({ variant: i }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", u.button_next),
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
			DayButton: ({ ...e }) => /* @__PURE__ */ w(zt, {
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
function zt({ className: t, day: n, modifiers: r, locale: i, ...a }) {
	let o = Re(), c = e.useRef(null);
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
function Bt({ className: e, size: t = "default", variant: n = "default", interactive: r = !1, ...i }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card",
		"data-size": t,
		"data-variant": n,
		"data-interactive": r || void 0,
		className: s("group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl border border-border bg-card py-(--card-spacing) text-sm text-card-foreground [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[interactive]:cursor-pointer data-[interactive]:transition-colors data-[interactive]:hover:bg-secondary data-[size=sm]:[--card-spacing:--spacing(4)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 data-[variant=muted]:border-transparent data-[variant=muted]:bg-secondary *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", e),
		...i
	});
}
function Vt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-header",
		className: s("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)", e),
		...t
	});
}
function Ht({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-title",
		className: s("font-heading type-h4 group-data-[size=sm]/card:type-body-strong", e),
		...t
	});
}
function Ut({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
function Wt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-action",
		className: s("col-start-2 row-span-2 row-start-1 self-start justify-self-end", e),
		...t
	});
}
function Gt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-content",
		className: s("px-(--card-spacing)", e),
		...t
	});
}
function Kt({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "card-footer",
		className: s("flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)", e),
		...t
	});
}
// src/components/ui/chart.tsx
var qt = {
	light: "",
	dark: ".dark"
}, Jt = {
	width: 320,
	height: 200
}, Yt = e.createContext(null);
function Xt() {
	let t = e.useContext(Yt);
	if (!t) throw Error("useChart must be used within a <ChartContainer />");
	return t;
}
function Zt({ id: t, className: n, children: r, config: i, initialDimension: a = Jt, ...o }) {
	let c = e.useId(), l = `chart-${t ?? c.replace(/:/g, "")}`;
	return /* @__PURE__ */ w(Yt.Provider, {
		value: { config: i },
		children: /* @__PURE__ */ T("div", {
			"data-slot": "chart",
			"data-chart": l,
			className: s("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", n),
			...o,
			children: [/* @__PURE__ */ w(Qt, {
				id: l,
				config: i
			}), /* @__PURE__ */ w(ze.ResponsiveContainer, {
				initialDimension: a,
				children: r
			})]
		})
	});
}
var Qt = ({ id: e, config: t }) => {
	let n = Object.entries(t).filter(([, e]) => e.theme ?? e.color);
	return n.length ? /* @__PURE__ */ w("style", { dangerouslySetInnerHTML: { __html: Object.entries(qt).map(([t, r]) => `
${r} [data-chart=${e}] {
${n.map(([e, n]) => {
		let r = n.theme?.[t] ?? n.color;
		return r ? `  --color-${e}: ${r};` : null;
	}).join("\n")}
}
`).join("\n") } }) : null;
}, $t = ze.Tooltip;
function en({ active: t, payload: n, className: r, indicator: i = "dot", hideLabel: a = !1, hideIndicator: o = !1, label: c, labelFormatter: l, labelClassName: u, formatter: d, color: f, nameKey: p, labelKey: m }) {
	let { config: h } = Xt(), g = e.useMemo(() => {
		if (a || !n?.length) return null;
		let [e] = n, t = `${m ?? e?.dataKey ?? e?.name ?? "value"}`, r = rn(h, e, t), i = !m && typeof c == "string" ? h[c]?.label ?? c : r?.label;
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
				let n = `${p ?? e.name ?? e.dataKey ?? "value"}`, r = rn(h, e, n), a = f ?? e.payload?.fill ?? e.color;
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
var tn = ze.Legend;
function nn({ className: e, hideIcon: t = !1, payload: n, verticalAlign: r = "bottom", nameKey: i }) {
	let { config: a } = Xt();
	return n?.length ? /* @__PURE__ */ w("div", {
		className: s("flex items-center justify-center gap-4", r === "top" ? "pb-3" : "pt-3", e),
		children: n.filter((e) => e.type !== "none").map((e, n) => {
			let r = `${i ?? e.dataKey ?? "value"}`, o = rn(a, e, r);
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
function rn(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0, i = n;
	return n in t && typeof t[n] == "string" ? i = t[n] : r && n in r && typeof r[n] == "string" && (i = r[n]), i in e ? e[i] : e[n];
}
// src/components/ui/checkbox.tsx
function an({ className: e, ...t }) {
	return /* @__PURE__ */ w(u.Root, {
		"data-slot": "checkbox",
		className: s("peer group/checkbox relative flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-input bg-background transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:inset-[min(-0.5rem,calc((16px-var(--hit-min))/2))] focus-visible:border-ring enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-field-hover aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground disabled:data-[state=indeterminate]:bg-field-hover disabled:data-[state=indeterminate]:text-muted-foreground data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary-hover disabled:data-checked:bg-field-hover disabled:data-checked:text-muted-foreground", e),
		...t,
		children: /* @__PURE__ */ T(u.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3",
			children: [/* @__PURE__ */ w(E, { className: "group-data-[state=indeterminate]/checkbox:hidden" }), /* @__PURE__ */ w(Ce, { className: "hidden group-data-[state=indeterminate]/checkbox:block" })]
		})
	});
}
// src/components/ui/collapsible.tsx
function on({ ...e }) {
	return /* @__PURE__ */ w(d.Root, {
		"data-slot": "collapsible",
		...e
	});
}
function sn({ ...e }) {
	return /* @__PURE__ */ w(d.CollapsibleTrigger, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function cn({ ...e }) {
	return /* @__PURE__ */ w(d.CollapsibleContent, {
		"data-slot": "collapsible-content",
		...e
	});
}
// src/components/ui/dialog.tsx
function ln({ ...e }) {
	return /* @__PURE__ */ w(f.Root, {
		"data-slot": "dialog",
		...e
	});
}
function un({ ...e }) {
	return /* @__PURE__ */ w(f.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function dn({ ...e }) {
	return /* @__PURE__ */ w(f.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function fn({ ...e }) {
	return /* @__PURE__ */ w(f.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function pn({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Overlay, {
		"data-slot": "dialog-overlay",
		className: s("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function mn({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ T(dn, { children: [/* @__PURE__ */ w(pn, {}), /* @__PURE__ */ T(f.Content, {
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
function hn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "dialog-header",
		className: s("flex flex-col gap-2", e),
		...t
	});
}
function gn({ className: e, showCloseButton: t = !1, children: n, ...r }) {
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
function _n({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Title, {
		"data-slot": "dialog-title",
		className: s("font-heading type-h3", e),
		...t
	});
}
function vn({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Description, {
		"data-slot": "dialog-description",
		className: s("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", e),
		...t
	});
}
// src/components/ui/input.tsx
function yn({ className: e, type: t, size: n = "default", ...r }) {
	return /* @__PURE__ */ w("input", {
		type: t,
		"data-slot": "input",
		"data-size": n,
		className: s("h-control w-full min-w-0 rounded-lg border border-input bg-background px-2 py-0 text-base text-foreground data-[size=sm]:h-control-sm data-[size=sm]:px-1.5 data-[size=sm]:text-sm transition-colors duration-(--duration-fast) outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground read-only:border-transparent read-only:bg-secondary read-only:hover:border-transparent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 read-only:focus-visible:ring-0 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...r
	});
}
// src/components/ui/textarea.tsx
function bn({ className: e, ...t }) {
	return /* @__PURE__ */ w("textarea", {
		"data-slot": "textarea",
		className: s("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-background px-2 py-1 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 enabled:hover:border-muted-foreground disabled:cursor-not-allowed disabled:border-transparent disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 md:text-sm", e),
		...t
	});
}
// src/components/ui/input-group.tsx
function xn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "input-group",
		role: "group",
		className: s("group/input-group relative flex h-control w-full min-w-0 items-center rounded-lg border border-input bg-background transition-colors outline-none hover:border-muted-foreground in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:border-transparent has-disabled:bg-secondary has-disabled:text-muted-foreground has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/40 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-2 has-[[data-slot][aria-invalid=true]]:ring-destructive/30 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", e),
		...t
	});
}
var Sn = S("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function N({ className: e, align: t = "inline-start", ...n }) {
	return /* @__PURE__ */ w("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": t,
		className: s(Sn({ align: t }), e),
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
	return /* @__PURE__ */ w(yn, {
		"data-slot": "input-group-control",
		className: s("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0", e),
		...t
	});
}
function Dn({ className: e, ...t }) {
	return /* @__PURE__ */ w(bn, {
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
	return /* @__PURE__ */ T(ln, {
		...a,
		children: [/* @__PURE__ */ T(hn, {
			className: "sr-only",
			children: [/* @__PURE__ */ w(_n, { children: e }), /* @__PURE__ */ w(vn, { children: t })]
		}), /* @__PURE__ */ w(mn, {
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
		children: /* @__PURE__ */ T(xn, {
			className: "h-control! rounded-lg! border-border bg-secondary shadow-none! *:data-[slot=input-group-addon]:pl-2!",
			children: [/* @__PURE__ */ w(A.Input, {
				"data-slot": "command-input",
				className: s("w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", e),
				...t
			}), /* @__PURE__ */ w(N, { children: /* @__PURE__ */ w(je, { className: "size-4 shrink-0 opacity-50" }) })]
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
function P({ className: e, ...t }) {
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
function F({ className: e, children: t, ...n }) {
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
function Ln({ ...e }) {
	return /* @__PURE__ */ w(p.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function Rn({ className: e, align: t = "start", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ w(p.Portal, { children: /* @__PURE__ */ w(p.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: n,
		align: t,
		className: s("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-md duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r
	}) });
}
function zn({ ...e }) {
	return /* @__PURE__ */ w(p.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function Bn({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ w(p.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: s("group/dropdown-menu-item relative flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", e),
		...r
	});
}
function Vn({ className: e, children: t, checked: n, inset: r, ...i }) {
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
function Hn({ ...e }) {
	return /* @__PURE__ */ w(p.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function Un({ className: e, children: t, inset: n, ...r }) {
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
function Wn({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ w(p.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: s("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", e),
		...n
	});
}
function Gn({ className: e, ...t }) {
	return /* @__PURE__ */ w(p.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: s("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Kn({ className: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: s("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", e),
		...t
	});
}
function qn({ ...e }) {
	return /* @__PURE__ */ w(p.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Jn({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ T(p.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: s("flex min-h-control-sm cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-[13px] outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ w(O, { className: "ml-auto" })]
	});
}
function Yn({ className: e, ...t }) {
	return /* @__PURE__ */ w(p.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: s("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-input bg-popover p-1 text-popover-foreground shadow-lg duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...t
	});
}
// src/components/ui/empty.tsx
function Xn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty",
		className: s("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-xl border-dashed p-6 text-center text-balance", e),
		...t
	});
}
function Zn({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-header",
		className: s("flex max-w-sm flex-col items-center gap-2", e),
		...t
	});
}
var Qn = S("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4"
	} },
	defaultVariants: { variant: "default" }
});
function $n({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-icon",
		"data-variant": t,
		className: s(Qn({
			variant: t,
			className: e
		})),
		...n
	});
}
function er({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-title",
		className: s("font-heading text-sm font-medium tracking-tight", e),
		...t
	});
}
function tr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-description",
		className: s("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function nr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "empty-content",
		className: s("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", e),
		...t
	});
}
// src/components/ui/label.tsx
function rr({ className: e, ...t }) {
	return /* @__PURE__ */ w(h.Root, {
		"data-slot": "label",
		className: s("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...t
	});
}
// src/components/ui/separator.tsx
function ir({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ w(ee.Root, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: s("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", e),
		...r
	});
}
// src/components/ui/field.tsx
function ar({ className: e, ...t }) {
	return /* @__PURE__ */ w("fieldset", {
		"data-slot": "field-set",
		className: s("flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", e),
		...t
	});
}
function or({ className: e, variant: t = "legend", ...n }) {
	return /* @__PURE__ */ w("legend", {
		"data-slot": "field-legend",
		"data-variant": t,
		className: s("mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base", e),
		...n
	});
}
function sr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-group",
		className: s("group/field-group @container/field-group flex w-full flex-col gap-6 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", e),
		...t
	});
}
var cr = S("group/field flex w-full gap-1.5 data-[invalid=true]:text-destructive", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function lr({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ w("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": t,
		className: s(cr({ orientation: t }), e),
		...n
	});
}
function ur({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-content",
		className: s("group/field-content flex flex-1 flex-col gap-0.5 leading-snug", e),
		...t
	});
}
function dr({ className: e, ...t }) {
	return /* @__PURE__ */ w(rr, {
		"data-slot": "field-label",
		className: s("group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-muted/50 has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-3 has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/25 *:data-[slot=field]:p-2.5", "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col", e),
		...t
	});
}
function fr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "field-label",
		className: s("flex w-fit items-center gap-2 text-sm font-medium text-foreground-secondary group-data-[disabled=true]/field:opacity-50", e),
		...t
	});
}
function pr({ className: e, ...t }) {
	return /* @__PURE__ */ w("p", {
		"data-slot": "field-description",
		className: s("text-left text-sm leading-normal font-normal text-muted-foreground group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", e),
		...t
	});
}
function mr({ children: e, className: t, ...n }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "field-separator",
		"data-content": !!e,
		className: s("relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2", t),
		...n,
		children: [/* @__PURE__ */ w(ir, { className: "absolute inset-0 top-1/2" }), e && /* @__PURE__ */ w("span", {
			className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
			"data-slot": "field-separator-content",
			children: e
		})]
	});
}
function hr({ className: e, children: t, errors: r, ...i }) {
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
function gr({ ...e }) {
	return /* @__PURE__ */ w(m.Root, {
		"data-slot": "hover-card",
		...e
	});
}
function _r({ ...e }) {
	return /* @__PURE__ */ w(m.Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function vr({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
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
function yr({ className: e, ...t }) {
	return /* @__PURE__ */ w("nav", {
		role: "navigation",
		"aria-label": "แบ่งหน้า",
		"data-slot": "pagination",
		className: s("mx-auto flex w-full justify-center", e),
		...t
	});
}
function br({ className: e, ...t }) {
	return /* @__PURE__ */ w("ul", {
		"data-slot": "pagination-content",
		className: s("flex items-center gap-0.5", e),
		...t
	});
}
function xr({ ...e }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "pagination-item",
		...e
	});
}
function Sr({ className: e, isActive: t, size: n = "icon", ...r }) {
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
function Cr({ className: e, text: t = "ก่อนหน้า", ...n }) {
	return /* @__PURE__ */ T(Sr, {
		size: "default",
		className: s("pl-1.5!", e),
		...n,
		children: [/* @__PURE__ */ w(de, { "data-icon": "inline-start" }), /* @__PURE__ */ w("span", { children: t })]
	});
}
function wr({ className: e, text: t = "ถัดไป", ...n }) {
	return /* @__PURE__ */ T(Sr, {
		size: "default",
		className: s("pr-1.5!", e),
		...n,
		children: [/* @__PURE__ */ w("span", { children: t }), /* @__PURE__ */ w(O, { "data-icon": "inline-end" })]
	});
}
function Tr({ className: e, ...t }) {
	return /* @__PURE__ */ T("span", {
		"aria-hidden": !0,
		"data-slot": "pagination-ellipsis",
		className: s("flex size-control items-center justify-center [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: [/* @__PURE__ */ w(we, {}), /* @__PURE__ */ w("span", {
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
function Er({ ...e }) {
	return /* @__PURE__ */ w(g.Anchor, {
		"data-slot": "popover-anchor",
		...e
	});
}
function Dr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "popover-header",
		className: s("flex flex-col gap-0.5 text-sm", e),
		...t
	});
}
function Or({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "popover-title",
		className: s("font-medium", e),
		...t
	});
}
function kr({ className: e, ...t }) {
	return /* @__PURE__ */ w("p", {
		"data-slot": "popover-description",
		className: s("text-muted-foreground", e),
		...t
	});
}
// src/components/ui/progress.tsx
var Ar = {
	default: "bg-primary",
	success: "bg-success",
	warning: "bg-warning",
	danger: "bg-danger"
};
function jr({ className: e, value: t, tone: n = "default", ...r }) {
	return /* @__PURE__ */ w(_.Root, {
		"data-slot": "progress",
		value: t,
		className: s("relative flex h-2 w-full items-center overflow-hidden rounded-full bg-border", e),
		...r,
		children: /* @__PURE__ */ w(_.Indicator, {
			"data-slot": "progress-indicator",
			className: s("size-full flex-1 transition-transform duration-300 motion-reduce:transition-none", Ar[n]),
			style: { transform: `translateX(-${100 - (t || 0)}%)` }
		})
	});
}
// src/components/ui/scroll-area.tsx
function Mr({ className: e, children: t, ...n }) {
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
			/* @__PURE__ */ w(Nr, {}),
			/* @__PURE__ */ w(v.Corner, {})
		]
	});
}
function Nr({ className: e, orientation: t = "vertical", ...n }) {
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
function Pr({ ...e }) {
	return /* @__PURE__ */ w(y.Root, {
		"data-slot": "select",
		...e
	});
}
function Fr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Group, {
		"data-slot": "select-group",
		className: s("scroll-my-1 p-1", e),
		...t
	});
}
function Ir({ ...e }) {
	return /* @__PURE__ */ w(y.Value, {
		"data-slot": "select-value",
		...e
	});
}
function Lr({ className: e, size: t = "default", children: n, ...r }) {
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
function Rr({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ w(y.Portal, { children: /* @__PURE__ */ T(y.Content, {
		"data-slot": "select-content",
		"data-align-trigger": n === "item-aligned",
		className: s("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-input bg-popover text-popover-foreground shadow-md duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ w(Hr, {}),
			/* @__PURE__ */ w(y.Viewport, {
				"data-position": n,
				className: s("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", n === "popper" && ""),
				children: t
			}),
			/* @__PURE__ */ w(Ur, {})
		]
	}) });
}
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Label, {
		"data-slot": "select-label",
		className: s("px-1.5 py-1 text-xs text-muted-foreground", e),
		...t
	});
}
function Br({ className: e, children: t, ...n }) {
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
function Vr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.Separator, {
		"data-slot": "select-separator",
		className: s("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function Hr({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.ScrollUpButton, {
		"data-slot": "select-scroll-up-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ w(fe, {})
	});
}
function Ur({ className: e, ...t }) {
	return /* @__PURE__ */ w(y.ScrollDownButton, {
		"data-slot": "select-scroll-down-button",
		className: s("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t,
		children: /* @__PURE__ */ w(D, {})
	});
}
// src/components/ui/sheet.tsx
function Wr({ ...e }) {
	return /* @__PURE__ */ w(f.Root, {
		"data-slot": "sheet",
		...e
	});
}
function Gr({ ...e }) {
	return /* @__PURE__ */ w(f.Trigger, {
		"data-slot": "sheet-trigger",
		...e
	});
}
function Kr({ ...e }) {
	return /* @__PURE__ */ w(f.Close, {
		"data-slot": "sheet-close",
		...e
	});
}
function qr({ ...e }) {
	return /* @__PURE__ */ w(f.Portal, {
		"data-slot": "sheet-portal",
		...e
	});
}
function Jr({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Overlay, {
		"data-slot": "sheet-overlay",
		className: s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", e),
		...t
	});
}
function Yr({ className: e, children: t, side: n = "right", showCloseButton: r = !0, ...i }) {
	return /* @__PURE__ */ T(qr, { children: [/* @__PURE__ */ w(Jr, {}), /* @__PURE__ */ T(f.Content, {
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
function Xr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sheet-header",
		className: s("flex flex-col gap-0.5 p-4", e),
		...t
	});
}
function Zr({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sheet-footer",
		className: s("mt-auto flex flex-col gap-2 p-4", e),
		...t
	});
}
function Qr({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Title, {
		"data-slot": "sheet-title",
		className: s("font-heading type-h3 text-foreground", e),
		...t
	});
}
function $r({ className: e, ...t }) {
	return /* @__PURE__ */ w(f.Description, {
		"data-slot": "sheet-description",
		className: s("text-sm text-muted-foreground", e),
		...t
	});
}
// src/hooks/use-mobile.ts
var ei = "(max-width: 767px)";
function ti(e) {
	let t = window.matchMedia(ei);
	return t.addEventListener("change", e), () => t.removeEventListener("change", e);
}
function ni() {
	return e.useSyncExternalStore(ti, () => window.matchMedia(ei).matches, () => !1);
}
// src/components/ui/skeleton.tsx
function ri({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "skeleton",
		className: s("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
// src/components/ui/tooltip.tsx
function ii({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ w(x.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function ai({ ...e }) {
	return /* @__PURE__ */ w(x.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function oi({ ...e }) {
	return /* @__PURE__ */ w(x.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function si({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ w(x.Portal, { children: /* @__PURE__ */ T(x.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: s("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ w(x.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
// src/components/ui/sidebar.tsx
var ci = "sidebar_state", li = 604800, ui = "16rem", di = "18rem", fi = "3rem", pi = "b", mi = e.createContext(null);
function z() {
	let t = e.useContext(mi);
	if (!t) throw Error("useSidebar must be used within a SidebarProvider.");
	return t;
}
function hi({ defaultOpen: t = !0, open: n, onOpenChange: r, className: i, style: a, children: o, ...c }) {
	let l = ni(), [u, d] = e.useState(!1), [f, p] = e.useState(t), m = n ?? f, h = e.useCallback((e) => {
		let t = typeof e == "function" ? e(m) : e;
		r ? r(t) : p(t), document.cookie = `${ci}=${t}; path=/; max-age=${li}`;
	}, [r, m]), g = e.useCallback(() => l ? d((e) => !e) : h((e) => !e), [
		l,
		h,
		d
	]);
	e.useEffect(() => {
		let e = (e) => {
			e.key === pi && (e.metaKey || e.ctrlKey) && (e.preventDefault(), g());
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
	return /* @__PURE__ */ w(mi.Provider, {
		value: v,
		children: /* @__PURE__ */ w("div", {
			"data-slot": "sidebar-wrapper",
			style: {
				"--sidebar-width": ui,
				"--sidebar-width-icon": fi,
				...a
			},
			className: s("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", i),
			...c,
			children: o
		})
	});
}
function gi({ side: e = "left", variant: t = "sidebar", collapsible: n = "offcanvas", className: r, children: i, dir: a, ...o }) {
	let { isMobile: c, state: l, openMobile: u, setOpenMobile: d } = z();
	return n === "none" ? /* @__PURE__ */ w("div", {
		"data-slot": "sidebar",
		className: s("flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground", r),
		...o,
		children: i
	}) : c ? /* @__PURE__ */ w(Wr, {
		open: u,
		onOpenChange: d,
		...o,
		children: /* @__PURE__ */ T(Yr, {
			dir: a,
			"data-sidebar": "sidebar",
			"data-slot": "sidebar",
			"data-mobile": "true",
			className: "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
			style: { "--sidebar-width": di },
			side: e,
			children: [/* @__PURE__ */ T(Xr, {
				className: "sr-only",
				children: [/* @__PURE__ */ w(Qr, { children: "Sidebar" }), /* @__PURE__ */ w($r, { children: "Displays the mobile sidebar." })]
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
function _i({ className: e, onClick: t, ...n }) {
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
		children: [/* @__PURE__ */ w(Ee, {}), /* @__PURE__ */ w("span", {
			className: "sr-only",
			children: "Toggle Sidebar"
		})]
	});
}
function vi({ className: e, ...t }) {
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
function yi({ className: e, ...t }) {
	return /* @__PURE__ */ w("main", {
		"data-slot": "sidebar-inset",
		className: s("relative flex w-full flex-1 flex-col bg-background md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", e),
		...t
	});
}
function bi({ className: e, ...t }) {
	return /* @__PURE__ */ w(yn, {
		"data-slot": "sidebar-input",
		"data-sidebar": "input",
		className: s("h-8 w-full bg-background shadow-none", e),
		...t
	});
}
function xi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-header",
		"data-sidebar": "header",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Si({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-footer",
		"data-sidebar": "footer",
		className: s("flex flex-col gap-2 p-2", e),
		...t
	});
}
function Ci({ className: e, ...t }) {
	return /* @__PURE__ */ w(ir, {
		"data-slot": "sidebar-separator",
		"data-sidebar": "separator",
		className: s("mx-2 w-auto bg-sidebar-border", e),
		...t
	});
}
function wi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-content",
		"data-sidebar": "content",
		className: s("no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden", e),
		...t
	});
}
function Ti({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-group",
		"data-sidebar": "group",
		className: s("relative flex w-full min-w-0 flex-col p-2", e),
		...t
	});
}
function Ei({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "div";
	return /* @__PURE__ */ w(r, {
		"data-slot": "sidebar-group-label",
		"data-sidebar": "group-label",
		className: s("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Di({ className: e, asChild: t = !1, ...n }) {
	let r = t ? b.Root : "button";
	return /* @__PURE__ */ w(r, {
		"data-slot": "sidebar-group-action",
		"data-sidebar": "group-action",
		className: s("absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", e),
		...n
	});
}
function Oi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-group-content",
		"data-sidebar": "group-content",
		className: s("w-full text-sm", e),
		...t
	});
}
function ki({ className: e, ...t }) {
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
var Ai = S("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-sidebar-accent data-active:font-medium data-active:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", {
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
		className: s(Ai({
			variant: n,
			size: r
		}), a),
		...o
	});
	return i ? (typeof i == "string" && (i = { children: i }), /* @__PURE__ */ T(ai, { children: [/* @__PURE__ */ w(oi, {
		asChild: !0,
		children: d
	}), /* @__PURE__ */ w(si, {
		side: "right",
		align: "center",
		hidden: u !== "collapsed" || l,
		...i
	})] })) : d;
}
function ji({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }) {
	let i = t ? b.Root : "button";
	return /* @__PURE__ */ w(i, {
		"data-slot": "sidebar-menu-action",
		"data-sidebar": "menu-action",
		className: s("absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring outline-hidden transition-transform group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 after:absolute after:-inset-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 md:after:hidden [&>svg]:size-4 [&>svg]:shrink-0", n && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-active/menu-button:text-sidebar-accent-foreground aria-expanded:opacity-100 md:opacity-0", e),
		...r
	});
}
function Mi({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "sidebar-menu-badge",
		"data-sidebar": "menu-badge",
		className: s("pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium text-sidebar-foreground tabular-nums select-none group-data-[collapsible=icon]:hidden peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[size=default]/menu-button:top-1.5 peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1 peer-data-active/menu-button:text-sidebar-accent-foreground", e),
		...t
	});
}
function Ni({ className: t, showIcon: n = !1, ...r }) {
	let [i] = e.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);
	return /* @__PURE__ */ T("div", {
		"data-slot": "sidebar-menu-skeleton",
		"data-sidebar": "menu-skeleton",
		className: s("flex h-8 items-center gap-2 rounded-md px-2", t),
		...r,
		children: [n && /* @__PURE__ */ w(ri, {
			className: "size-4 rounded-md",
			"data-sidebar": "menu-skeleton-icon"
		}), /* @__PURE__ */ w(ri, {
			className: "h-4 max-w-(--skeleton-width) flex-1",
			"data-sidebar": "menu-skeleton-text",
			style: { "--skeleton-width": i }
		})]
	});
}
function Pi({ className: e, ...t }) {
	return /* @__PURE__ */ w("ul", {
		"data-slot": "sidebar-menu-sub",
		"data-sidebar": "menu-sub",
		className: s("mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden", e),
		...t
	});
}
function Fi({ className: e, ...t }) {
	return /* @__PURE__ */ w("li", {
		"data-slot": "sidebar-menu-sub-item",
		"data-sidebar": "menu-sub-item",
		className: s("group/menu-sub-item relative", e),
		...t
	});
}
function Ii({ asChild: e = !1, size: t = "md", isActive: n = !1, className: r, ...i }) {
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
var Li = ({ ...e }) => /* @__PURE__ */ w(Be, {
	theme: "light",
	richColors: !0,
	className: "toaster group",
	icons: {
		success: /* @__PURE__ */ w(ge, { className: "size-4" }),
		info: /* @__PURE__ */ w(ye, { className: "size-4" }),
		warning: /* @__PURE__ */ w(Ie, { className: "size-4" }),
		error: /* @__PURE__ */ w(Te, { className: "size-4" }),
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
function Ri({ className: e, ...t }) {
	return /* @__PURE__ */ w(be, {
		"data-slot": "spinner",
		role: "status",
		"aria-label": "กำลังโหลด",
		className: s("size-4 animate-spin", e),
		...t
	});
}
// src/components/ui/table.tsx
function H({ className: e, stickyFirstColumn: t = !1, ...n }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ w("table", {
			"data-slot": "table",
			"data-sticky-first": t || void 0,
			className: s("w-full caption-bottom type-table tabular-nums", e),
			...n
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
function zi({ className: e, ...t }) {
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
function Bi({ className: e, ...t }) {
	return /* @__PURE__ */ w("caption", {
		"data-slot": "table-caption",
		className: s("mt-4 text-sm text-muted-foreground", e),
		...t
	});
}
// src/components/ui/tabs.tsx
function Vi({ className: e, orientation: t = "horizontal", ...n }) {
	return /* @__PURE__ */ w(te.Root, {
		"data-slot": "tabs",
		"data-orientation": t,
		className: s("group/tabs flex gap-2 data-horizontal:flex-col", e),
		...n
	});
}
var Hi = S("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-control-sm group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-field",
		line: "gap-1 border-b border-border bg-transparent p-0 group-data-horizontal/tabs:w-full group-data-horizontal/tabs:justify-start"
	} },
	defaultVariants: { variant: "default" }
});
function Ui({ className: e, variant: t = "default", ...n }) {
	return /* @__PURE__ */ w(te.List, {
		"data-slot": "tabs-list",
		"data-variant": t,
		className: s(Hi({ variant: t }), e),
		...n
	});
}
function Wi({ className: e, ...t }) {
	return /* @__PURE__ */ w(te.Trigger, {
		"data-slot": "tabs-trigger",
		className: s("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2.5 py-0.5 text-[13px] font-medium whitespace-nowrap text-muted-foreground transition-colors group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 group-data-[variant=default]/tabs-list:data-active:shadow-xs group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:flex-none group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:text-primary", "data-active:bg-background data-active:text-foreground", "after:absolute after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-1px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", e),
		...t
	});
}
function Gi({ className: e, ...t }) {
	return /* @__PURE__ */ w(te.Content, {
		"data-slot": "tabs-content",
		className: s("flex-1 text-sm outline-none", e),
		...t
	});
}
// src/components/ui/toggle.tsx
var Ki = S("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-secondary-hover hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-accent aria-pressed:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
function qi({ className: e, variant: t = "default", size: n = "default", ...r }) {
	return /* @__PURE__ */ w(ne.Root, {
		"data-slot": "toggle",
		className: s(Ki({
			variant: t,
			size: n,
			className: e
		})),
		...r
	});
}
// src/components/ui/toggle-group.tsx
var Ji = e.createContext({
	size: "default",
	variant: "default",
	spacing: 2,
	orientation: "horizontal"
});
function Yi({ className: e, variant: t, size: n, spacing: r = 2, orientation: i = "horizontal", children: a, ...o }) {
	return /* @__PURE__ */ w(re.Root, {
		"data-slot": "toggle-group",
		"data-variant": t,
		"data-size": n,
		"data-spacing": r,
		"data-orientation": i,
		style: { "--gap": r },
		className: s("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch", e),
		...o,
		children: /* @__PURE__ */ w(Ji.Provider, {
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
function Xi({ className: t, children: n, variant: r = "default", size: i = "default", ...a }) {
	let o = e.useContext(Ji);
	return /* @__PURE__ */ w(re.Item, {
		"data-slot": "toggle-group-item",
		"data-variant": o.variant || r,
		"data-size": o.size || i,
		"data-spacing": o.spacing,
		className: s("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t", Ki({
			variant: o.variant || r,
			size: o.size || i
		}), t),
		...a,
		children: n
	});
}
// src/components/patterns/app-shell.tsx
var Zi = "border border-transparent hover:border-muted-foreground hover:bg-background hover:text-foreground active:bg-background data-active:border-primary data-active:bg-background data-active:font-medium data-active:text-primary data-open:hover:bg-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";
function Qi({ name: e, description: t, logo: n, href: r }) {
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
function $i() {
	let { state: e, isMobile: t, toggleSidebar: n } = z();
	if (t) return /* @__PURE__ */ w(_i, {
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
function ea(e) {
	return e.some((e) => !!e.active || ea(e.children ?? []));
}
function ta({ count: e }) {
	return e === void 0 ? null : /* @__PURE__ */ w("span", {
		className: "ml-auto text-xs text-muted-foreground tabular-nums",
		children: e.toLocaleString("th-TH")
	});
}
function na({ items: t, depth: n }) {
	return t.map((t) => /* @__PURE__ */ T(e.Fragment, { children: [/* @__PURE__ */ w(Bn, {
		asChild: !0,
		className: s("min-h-11", n > 0 && "pl-6", t.active && "font-semibold text-primary"),
		children: /* @__PURE__ */ T("a", {
			href: t.href,
			"aria-current": t.active ? "page" : void 0,
			children: [/* @__PURE__ */ w("span", { children: t.title }), /* @__PURE__ */ w(ta, { count: t.count })]
		})
	}), t.children?.length ? /* @__PURE__ */ w(na, {
		items: t.children,
		depth: n + 1
	}) : null] }, t.href));
}
function ra({ items: e }) {
	return /* @__PURE__ */ w(Pi, {
		className: "gap-0.5 py-1",
		children: e.map((e) => /* @__PURE__ */ T(Fi, {
			className: "relative",
			children: [
				/* @__PURE__ */ w("span", {
					"aria-hidden": !0,
					className: s("absolute top-3.5 -left-[13.5px] size-1.5 -translate-y-1/2 rounded-full", e.active ? "bg-primary" : "bg-border")
				}),
				/* @__PURE__ */ w(Ii, {
					asChild: !0,
					isActive: e.active,
					className: Zi,
					children: /* @__PURE__ */ T("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ w("span", { children: e.title }), /* @__PURE__ */ w(ta, { count: e.count })]
					})
				}),
				e.children?.length ? /* @__PURE__ */ w(ra, { items: e.children }) : null
			]
		}, e.href))
	});
}
function ia({ item: e }) {
	let { state: t, isMobile: n } = z(), r = e.children ?? [], i = !!e.active || ea(r);
	return t === "collapsed" && !n ? /* @__PURE__ */ w(B, { children: /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(Ln, {
		asChild: !0,
		children: /* @__PURE__ */ T(V, {
			tooltip: e.title,
			isActive: i,
			"aria-label": e.title,
			className: Zi,
			children: [/* @__PURE__ */ w(e.icon, {}), /* @__PURE__ */ w("span", { children: e.title })]
		})
	}), /* @__PURE__ */ T(Rn, {
		side: "right",
		align: "start",
		sideOffset: 8,
		className: "min-w-52",
		children: [/* @__PURE__ */ w(Wn, { children: e.title }), /* @__PURE__ */ w(na, {
			items: r,
			depth: 0
		})]
	})] }) }) : /* @__PURE__ */ w(on, {
		asChild: !0,
		defaultOpen: i,
		className: "group/collapsible",
		children: /* @__PURE__ */ T(B, { children: [/* @__PURE__ */ w(sn, {
			asChild: !0,
			children: /* @__PURE__ */ T(V, {
				tooltip: e.title,
				className: s(Zi, i && "font-semibold"),
				children: [
					/* @__PURE__ */ w(e.icon, {}),
					/* @__PURE__ */ w("span", { children: e.title }),
					/* @__PURE__ */ w(D, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" })
				]
			})
		}), /* @__PURE__ */ w(cn, { children: /* @__PURE__ */ w(ra, { items: r }) })] })
	});
}
function aa({ brand: e, header: t, nav: n, footer: r, defaultOpen: i = !0, children: a }) {
	return /* @__PURE__ */ T(hi, {
		defaultOpen: i,
		className: "min-h-svh",
		children: [/* @__PURE__ */ T(gi, {
			collapsible: "icon",
			children: [
				/* @__PURE__ */ T(xi, { children: [/* @__PURE__ */ T("div", {
					className: "relative flex min-h-8 items-center gap-2",
					children: [e && /* @__PURE__ */ w(Qi, { ...e }), /* @__PURE__ */ w($i, {})]
				}), t] }),
				/* @__PURE__ */ w(wi, { children: n.map((e, t) => /* @__PURE__ */ T(Ti, { children: [e.label && /* @__PURE__ */ w(Ei, { children: e.label }), /* @__PURE__ */ w(Oi, { children: /* @__PURE__ */ w(ki, { children: e.items.map((e) => e.children?.length ? /* @__PURE__ */ w(ia, { item: e }, e.href) : /* @__PURE__ */ T(B, { children: [/* @__PURE__ */ w(V, {
					asChild: !0,
					isActive: e.active,
					tooltip: e.title,
					className: Zi,
					children: /* @__PURE__ */ T("a", {
						href: e.href,
						"aria-current": e.active ? "page" : void 0,
						children: [/* @__PURE__ */ w(e.icon, {}), /* @__PURE__ */ w("span", { children: e.title })]
					})
				}), e.badge ? /* @__PURE__ */ w(Mi, {
					className: "tabular-nums",
					"aria-label": `${e.badge} รายการ`,
					children: e.badge
				}) : null] }, e.href)) }) })] }, e.label ?? t)) }),
				r && /* @__PURE__ */ w(Si, { children: r }),
				/* @__PURE__ */ w(vi, {})
			]
		}), /* @__PURE__ */ T(yi, {
			className: "min-w-0 bg-background",
			children: [/* @__PURE__ */ T("header", {
				className: "sticky top-0 z-20 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-(--page-gutter) md:hidden",
				children: [/* @__PURE__ */ w(_i, {
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
function oa({ items: t, max: n = 2, label: r = "ทั้งหมด" }) {
	let i = t.slice(0, n), a = t.length - i.length;
	return /* @__PURE__ */ T("div", {
		"data-slot": "badge-overflow",
		className: "flex flex-nowrap items-center gap-1",
		children: [i.map((t, n) => /* @__PURE__ */ w(e.Fragment, { children: t }, n)), a > 0 && /* @__PURE__ */ T(gr, {
			openDelay: 100,
			closeDelay: 100,
			children: [/* @__PURE__ */ w(_r, {
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
			}), /* @__PURE__ */ T(vr, {
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
function sa({ children: e, variant: t = "destructive", ...n }) {
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
function ca({ className: e, ...t }) {
	return /* @__PURE__ */ w("div", {
		"data-slot": "cell-stack",
		className: s("flex min-w-0 flex-col gap-0.5 py-1.5 text-xs leading-5", e),
		...t
	});
}
function la({ label: e, children: t, className: n, ...r }) {
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
function ua({ title: t, description: n, table: r, children: i }) {
	let [a, o] = e.useState(!1), s = e.useId();
	return /* @__PURE__ */ T(Bt, {
		"data-slot": "chart-card",
		children: [/* @__PURE__ */ T(Vt, { children: [
			/* @__PURE__ */ w(Ht, { children: t }),
			n && /* @__PURE__ */ w(Ut, { children: n }),
			/* @__PURE__ */ w("div", {
				className: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				children: /* @__PURE__ */ T(j, {
					variant: "ghost",
					size: "sm",
					"aria-pressed": a,
					"aria-controls": s,
					onClick: () => o((e) => !e),
					children: [w(a ? ue : Fe, { "data-icon": "inline-start" }), a ? "ดูกราฟ" : "ดูเป็นตาราง"]
				})
			})
		] }), /* @__PURE__ */ w(Gt, {
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
function da(e, t) {
	let n = J(t);
	return n ? e.filter((e) => J(e.label).includes(n)) : [...e];
}
function fa(e, t) {
	let n = J(t);
	return n ? !e.some((e) => J(e.label) === n || J(e.value) === n) : !1;
}
function pa(e, t, n) {
	return n ? n([...e], t) : da(e, t);
}
function ma(e, t) {
	return typeof e == "function" ? e(t) : e;
}
// src/components/patterns/combobox.tsx
function ha({ value: t, options: n, onChange: r, onCreate: i, createLabel: a = (e) => `เพิ่ม "${e}"`, placeholder: o, searchPlaceholder: c = "ค้นหา", emptyText: l = "ไม่พบรายการ", search: u, invalid: d, ariaLabel: f, className: p }) {
	let [m, h] = e.useState(!1), [g, _] = e.useState(""), v = pa(n, g, u), y = i !== void 0 && fa(n, g), ee = n.find((e) => e.value === t);
	return /* @__PURE__ */ T(I, {
		open: m,
		onOpenChange: (e) => {
			h(e), e || _("");
		},
		children: [/* @__PURE__ */ w(L, {
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: "outline",
				role: "combobox",
				"aria-expanded": m,
				"aria-label": f,
				"aria-invalid": d || void 0,
				className: s("min-h-11 w-64 justify-between font-normal", p),
				children: [/* @__PURE__ */ w("span", {
					className: s("truncate", !ee && "text-muted-foreground"),
					children: ee?.label ?? o ?? ""
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
					value: g,
					onValueChange: _,
					placeholder: c
				}), /* @__PURE__ */ T(jn, { children: [v.length === 0 && !y && /* @__PURE__ */ w(Mn, { children: ma(l, g) }), /* @__PURE__ */ T(P, { children: [v.map((e) => /* @__PURE__ */ T(F, {
					value: e.value,
					className: "min-h-11",
					onSelect: () => {
						r(e.value), h(!1), _("");
					},
					children: [/* @__PURE__ */ w("span", {
						className: "flex-1",
						children: e.label
					}), e.value === t && /* @__PURE__ */ w(E, {})]
				}, e.value)), y && /* @__PURE__ */ T(F, {
					value: `__create__${g}`,
					className: "min-h-11 font-medium text-primary",
					onSelect: () => {
						let e = g.trim();
						h(!1), _(""), i?.(e);
					},
					children: [/* @__PURE__ */ w(Oe, {}), a(g.trim())]
				})] })] })]
			})
		})]
	});
}
// src/components/patterns/confirm-dialog.tsx
function ga({ trigger: t, title: n, description: r, confirmLabel: i, cancelLabel: a = "ยกเลิก", tone: o = "default", onConfirm: s }) {
	let [c, l] = e.useState(!1), [u, d] = e.useState(!1);
	async function f(e) {
		e.preventDefault(), d(!0);
		try {
			await s(), l(!1);
		} catch {} finally {
			d(!1);
		}
	}
	return /* @__PURE__ */ T(ot, {
		open: c,
		onOpenChange: (e) => !u && l(e),
		children: [/* @__PURE__ */ w(st, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ T(ut, { children: [/* @__PURE__ */ T(dt, { children: [/* @__PURE__ */ w(mt, { children: n }), /* @__PURE__ */ w(ht, { children: r })] }), /* @__PURE__ */ T(ft, { children: [/* @__PURE__ */ w(_t, {
			asChild: !0,
			children: /* @__PURE__ */ w(j, {
				variant: "outline",
				disabled: u,
				autoFocus: !0,
				children: a
			})
		}), /* @__PURE__ */ w(gt, {
			asChild: !0,
			children: /* @__PURE__ */ T(j, {
				variant: o === "destructive" ? "destructive" : "default",
				onClick: f,
				disabled: u,
				"aria-busy": u,
				children: [u && /* @__PURE__ */ w(Ri, { "data-icon": "inline-start" }), i]
			})
		})] })] })]
	});
}
// src/components/patterns/conflict-rows.ts
function _a(e) {
	return e.some((e) => e.yours !== void 0);
}
// src/components/patterns/conflict-dialog.tsx
function va({ open: e, onOpenChange: t, title: n = "ข้อมูลถูกแก้ไขโดยผู้อื่นแล้ว", description: r = "การบันทึกของคุณยังไม่ถูกบันทึก กรุณาตรวจสอบข้อมูลล่าสุด แล้วบันทึกอีกครั้ง", detail: i, rows: a = [], valueLabel: o = "ข้อมูลล่าสุด", yoursLabel: s = "ที่คุณแก้", onReload: c, reloadLabel: l = "โหลดข้อมูลล่าสุด", closeLabel: u = "ปิด" }) {
	let d = _a(a), f = d ? "grid-cols-3" : "grid-cols-2";
	return /* @__PURE__ */ w(ln, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ T(mn, {
			"data-slot": "conflict-dialog",
			children: [
				/* @__PURE__ */ T(hn, { children: [/* @__PURE__ */ w(_n, { children: n }), /* @__PURE__ */ w(vn, { children: r })] }),
				i && /* @__PURE__ */ w("div", {
					className: "text-sm",
					children: i
				}),
				a.length > 0 && /* @__PURE__ */ T("div", {
					className: "overflow-hidden rounded-md border text-sm",
					children: [/* @__PURE__ */ T("div", {
						className: `grid ${f} gap-2 border-b bg-secondary px-3 py-2 font-medium`,
						children: [
							/* @__PURE__ */ w("span", {}),
							d && /* @__PURE__ */ w("span", { children: s }),
							/* @__PURE__ */ w("span", { children: o })
						]
					}), a.map((e) => /* @__PURE__ */ T("div", {
						className: `grid ${f} gap-2 px-3 py-2`,
						children: [
							/* @__PURE__ */ w("span", {
								className: "text-muted-foreground",
								children: e.label
							}),
							d && /* @__PURE__ */ w("span", { children: e.yours }),
							/* @__PURE__ */ w("span", { children: e.value })
						]
					}, e.label))]
				}),
				/* @__PURE__ */ T(gn, { children: [c && /* @__PURE__ */ w(j, {
					variant: "outline",
					onClick: c,
					children: l
				}), /* @__PURE__ */ w(j, {
					onClick: () => t(!1),
					children: u
				})] })
			]
		})
	});
}
// src/components/patterns/date-picker.tsx
var ya = (e) => e.toLocaleDateString("th-TH-u-ca-gregory", {
	day: "numeric",
	month: "short",
	year: "numeric"
});
function ba(e) {
	return {
		locale: Ve,
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
var xa = [2020, 2035], Sa = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), Y = (e, t) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
function Ca({ items: e }) {
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
function wa(e = /* @__PURE__ */ new Date()) {
	let t = Sa(e);
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
function Ta({ id: t, value: n, onChange: r, placeholder: i = "เลือกวันที่", disabled: a, invalid: o, min: c, max: l, defaultMonth: u, yearRange: d = xa, presets: f, className: p, ...m }) {
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
					children: n ? ya(n) : i
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
				/* @__PURE__ */ w(Rt, {
					mode: "single",
					...ba(d),
					selected: n,
					defaultMonth: n ?? u,
					disabled: _,
					onSelect: (e) => {
						r(e), g(!1);
					}
				}),
				f && f.length > 0 && /* @__PURE__ */ w(Ca, { items: f.map((e) => ({
					label: e.label,
					disabled: !!(c && e.date < Sa(c) || l && e.date > Sa(l)),
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
function Ea({ id: t, value: n, onChange: r, placeholder: i = "เลือกช่วงวันที่", min: a, max: o, defaultMonth: c, yearRange: l = xa, today: u = /* @__PURE__ */ new Date(), className: d, ...f }) {
	let [p, m] = e.useState(!1), h = ni(), g = [a && { before: a }, o && { after: o }].filter(Boolean), _ = n.from ? `${ya(n.from)} – ${n.to ? ya(n.to) : "…"}` : i, v = Sa(u), y = [
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
				/* @__PURE__ */ w(Rt, {
					mode: "range",
					numberOfMonths: h ? 1 : 2,
					...ba(l),
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
				/* @__PURE__ */ w(Ca, { items: y.map((e) => ({
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
function Da({ value: t, onChange: n, fromLabel: r = "จากวันที่", toLabel: i = "ถึงวันที่", defaultMonth: a, yearRange: o, today: c, presets: l, className: u }) {
	let d = e.useId(), f = !!(t.from || t.to), p = l ?? wa(c);
	return /* @__PURE__ */ T("div", {
		"data-slot": "date-range-filter",
		className: s("flex w-full max-w-2xl items-end gap-3", u),
		children: [
			/* @__PURE__ */ T(lr, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ w(dr, {
					htmlFor: `${d}-from`,
					children: r
				}), /* @__PURE__ */ w(Ta, {
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
			/* @__PURE__ */ T(lr, {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ w(dr, {
					htmlFor: `${d}-to`,
					children: i
				}), /* @__PURE__ */ w(Ta, {
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
function Oa({ kind: e, title: t, description: n, action: r }) {
	return /* @__PURE__ */ T(Xn, {
		"data-kind": e,
		className: "py-12",
		children: [/* @__PURE__ */ T(Zn, { children: [
			/* @__PURE__ */ w($n, {
				variant: "icon",
				children: /* @__PURE__ */ w(e === "no-data" ? ve : Me, {})
			}),
			/* @__PURE__ */ w(er, { children: t ?? (e === "no-data" ? "ยังไม่มีข้อมูล" : "ไม่พบรายการที่ตรงกับตัวกรอง") }),
			/* @__PURE__ */ w(tr, { children: n ?? (e === "no-data" ? "เมื่อมีข้อมูลเข้ามา รายการจะแสดงที่นี่" : "ลองเปลี่ยนคำค้นหาหรือล้างตัวกรองเพื่อดูรายการทั้งหมด") })
		] }), r && /* @__PURE__ */ w(nr, { children: r })]
	});
}
function ka({ title: e, description: t, reference: n, onRetry: r, retrying: i }) {
	return /* @__PURE__ */ T(Xn, {
		role: "alert",
		className: "py-12",
		children: [/* @__PURE__ */ T(Zn, { children: [
			/* @__PURE__ */ w($n, {
				variant: "icon",
				className: "bg-danger-subtle text-danger-foreground",
				children: /* @__PURE__ */ w(Ne, {})
			}),
			/* @__PURE__ */ w(er, { children: e ?? "โหลดข้อมูลไม่สำเร็จ" }),
			/* @__PURE__ */ T(tr, { children: [t ?? "เกิดข้อผิดพลาดระหว่างดึงข้อมูล ข้อมูลของคุณไม่ได้รับผลกระทบ ลองใหม่อีกครั้ง", n && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("br", {}), /* @__PURE__ */ T("span", {
				className: "font-mono text-xs",
				children: ["รหัสอ้างอิง ", n]
			})] })] })
		] }), r && /* @__PURE__ */ w(nr, { children: /* @__PURE__ */ T(j, {
			variant: "outline",
			onClick: r,
			disabled: i,
			"aria-busy": i,
			children: [/* @__PURE__ */ w(ke, {
				"data-icon": "inline-start",
				className: i ? "animate-spin" : void 0
			}), "ลองใหม่"]
		}) })]
	});
}
// src/components/patterns/form-layout.tsx
function Aa({ hint: e, children: t, className: n, ...r }) {
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
function ja({ title: e, hint: t, children: n, className: r, ...i }) {
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
function Ma(e) {
	return e === "danger" ? "destructive" : e === "neutral" ? "secondary" : e;
}
function Na(e) {
	switch (e) {
		case "info": return "text-info-foreground";
		case "success": return "text-success-foreground";
		case "warning": return "text-warning-foreground";
		case "danger": return "text-danger-foreground";
		default: return "text-foreground";
	}
}
function Pa(e) {
	switch (e) {
		case "info": return "bg-info";
		case "success": return "bg-success";
		case "warning": return "bg-warning";
		case "danger": return "bg-danger";
		default: return "bg-border";
	}
}
function Fa(e, t = "up") {
	return e === "same" ? "neutral" : e === t ? "success" : "danger";
}
function Ia(e, t) {
	if (t) return { style: { backgroundColor: t } };
	if (e) return { className: Pa(e) };
}
function La(e = "default") {
	return e === "lg" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl";
}
// src/components/patterns/kpi-card.tsx
function Ra({ label: e, value: t, sub: n, tone: r = "neutral", size: i = "default", bar: a, barColor: o, pill: c, pillPlacement: l = "below", note: u, href: d, linkPlacement: f = "line", linkLabel: p, linkComponent: m = "a", className: h, ...g }) {
	let _ = Ia(a, o), v = !!d && f === "card", y = /* @__PURE__ */ w(Ht, {
		className: s("leading-none font-bold tabular-nums", La(i), Na(r)),
		children: t
	});
	return /* @__PURE__ */ T(Bt, {
		"data-slot": "kpi-card",
		interactive: v || void 0,
		className: s("relative overflow-hidden", v && "has-[[data-slot=kpi-card-link]:focus-visible]:ring-2 has-[[data-slot=kpi-card-link]:focus-visible]:ring-ring", h),
		...g,
		children: [
			_ && /* @__PURE__ */ w("span", {
				"aria-hidden": "true",
				"data-slot": "kpi-card-bar",
				className: s("absolute inset-x-0 top-0 h-1", _.className),
				style: _.style
			}),
			/* @__PURE__ */ T(Vt, { children: [
				/* @__PURE__ */ w("p", {
					className: "text-xs font-semibold tracking-wide text-muted-foreground uppercase",
					children: e
				}),
				c && l === "inline" ? /* @__PURE__ */ T("div", {
					className: "flex items-center justify-between gap-2",
					children: [y, c]
				}) : y,
				n && /* @__PURE__ */ w("p", {
					className: "text-sm text-muted-foreground",
					children: n
				}),
				c && l === "below" && /* @__PURE__ */ w("div", { children: c }),
				u && /* @__PURE__ */ w("div", {
					className: "text-sm text-muted-foreground",
					children: u
				}),
				d && !v && p && /* @__PURE__ */ w(m, {
					href: d,
					className: "inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline",
					children: p
				})
			] }),
			v && /* @__PURE__ */ w(m, {
				href: d,
				"data-slot": "kpi-card-link",
				"aria-label": p ?? e,
				className: "absolute inset-0 z-10 rounded-xl"
			})
		]
	});
}
// src/components/patterns/page-header.tsx
function za({ title: e, description: t, meta: n, actions: r, className: i }) {
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
// src/components/patterns/permission.tsx
function Ba({ title: e = "ไม่มีสิทธิ์เปิดหน้านี้", description: t = "บัญชีของคุณไม่มีสิทธิ์ใช้งานส่วนนี้ กรุณาติดต่อผู้ดูแลระบบ", action: n, className: r, ...i }) {
	return /* @__PURE__ */ T("div", {
		"data-slot": "no-permission",
		className: s("mx-auto flex max-w-md flex-col items-center gap-3 py-16 text-center", r),
		...i,
		children: [
			/* @__PURE__ */ w(xe, {
				className: "size-8 text-muted-foreground",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ w("h1", {
				className: "text-lg font-semibold",
				children: e
			}),
			/* @__PURE__ */ w("p", {
				className: "text-sm text-muted-foreground",
				children: t
			}),
			n
		]
	});
}
function Va({ allowed: e, fallback: t = null, children: n }) {
	return /* @__PURE__ */ w(C, { children: e ? n : t });
}
// src/components/patterns/phone-text.tsx
function Ha({ children: e, ...t }) {
	return /* @__PURE__ */ w("span", {
		...t,
		children: e
	});
}
// src/components/patterns/reason-dialog.tsx
function Ua({ trigger: t, title: n, description: r, reasonLabel: i, confirmLabel: a, cancelLabel: o = "ยกเลิก", placeholder: s, onConfirm: c }) {
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
	return /* @__PURE__ */ T(ln, {
		open: l,
		onOpenChange: g,
		children: [/* @__PURE__ */ w(un, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ T(mn, {
			showCloseButton: !p,
			onEscapeKeyDown: (e) => p && e.preventDefault(),
			onPointerDownOutside: (e) => p && e.preventDefault(),
			children: [/* @__PURE__ */ T(hn, { children: [/* @__PURE__ */ w(_n, { children: n }), /* @__PURE__ */ w(vn, { children: r })] }), /* @__PURE__ */ T("form", {
				onSubmit: _,
				children: [/* @__PURE__ */ w(sr, { children: /* @__PURE__ */ T(lr, { children: [/* @__PURE__ */ w(dr, {
					htmlFor: h,
					children: i
				}), /* @__PURE__ */ w(bn, {
					id: h,
					value: d,
					onChange: (e) => f(e.target.value),
					placeholder: s,
					required: !0,
					disabled: p
				})] }) }), /* @__PURE__ */ T(gn, {
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
						children: [p && /* @__PURE__ */ w(Ri, { "data-icon": "inline-start" }), a]
					})]
				})]
			})]
		})]
	});
}
// src/components/patterns/row-flag.tsx
var Wa = {
	danger: Ie,
	info: Pe
};
function Ga({ tone: e, icon: t, label: n, className: r, ...i }) {
	let a = t ?? Wa[e];
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
// src/components/patterns/stat-delta.tsx
var Ka = {
	up: se,
	down: ae,
	same: Ce
};
function qa({ direction: e, goodWhen: t = "up", className: n, children: r, ...i }) {
	let a = Ka[e];
	return /* @__PURE__ */ T(M, {
		"data-slot": "stat-delta",
		"data-direction": e,
		variant: Ma(Fa(e, t)),
		className: s("tabular-nums", n),
		...i,
		children: [/* @__PURE__ */ w(a, {
			"data-icon": "inline-start",
			"aria-hidden": "true"
		}), r]
	});
}
// src/components/patterns/stat-pill.tsx
function Ja({ tone: e = "neutral", className: t, ...n }) {
	return /* @__PURE__ */ w(M, {
		variant: Ma(e),
		className: s("tabular-nums", t),
		...n
	});
}
// src/components/patterns/status-badge.tsx
function Ya({ children: e, variant: t = "secondary", ...n }) {
	return /* @__PURE__ */ T(M, {
		variant: t,
		...n,
		children: [/* @__PURE__ */ w(At, {}), e]
	});
}
// src/components/patterns/user-menu.tsx
var Xa = (e) => e.trim().split(/\s+/).slice(0, 2).map((e) => e[0]).join("").toUpperCase();
function Za({ user: e }) {
	return /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(Ct, {
		className: "size-8 rounded-lg",
		children: /* @__PURE__ */ w(Tt, {
			className: "rounded-lg",
			children: Xa(e.name)
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
function Qa({ user: t, onLogout: n }) {
	let [r, i] = e.useState(!1);
	async function a() {
		i(!0);
		try {
			await n();
		} finally {
			i(!1);
		}
	}
	return /* @__PURE__ */ w(ki, { children: /* @__PURE__ */ w(B, { children: /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(Ln, {
		asChild: !0,
		children: /* @__PURE__ */ T(V, {
			tooltip: t.name,
			className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
			children: [/* @__PURE__ */ w(Ct, {
				className: "size-6 rounded-full",
				children: /* @__PURE__ */ w(Tt, {
					className: "rounded-full text-[10px]",
					children: Xa(t.name)
				})
			}), /* @__PURE__ */ w("span", {
				className: "truncate",
				children: t.name
			})]
		})
	}), /* @__PURE__ */ T(Rn, {
		className: "min-w-56 rounded-lg",
		side: "right",
		align: "end",
		sideOffset: 8,
		children: [
			/* @__PURE__ */ w(Wn, {
				className: "flex items-center gap-2 p-1.5 font-normal",
				children: /* @__PURE__ */ w(Za, { user: t })
			}),
			/* @__PURE__ */ w(Gn, {}),
			/* @__PURE__ */ w(zn, { children: /* @__PURE__ */ T(Bn, {
				disabled: !0,
				children: [
					/* @__PURE__ */ w(ce, {}),
					"บทบาท: ",
					t.role
				]
			}) }),
			/* @__PURE__ */ w(Gn, {}),
			/* @__PURE__ */ T(Bn, {
				onSelect: a,
				disabled: r,
				children: [/* @__PURE__ */ w(Se, {}), r ? "กำลังออกจากระบบ…" : "ออกจากระบบ"]
			})
		]
	})] }) }) });
}
// src/components/patterns/data-table/data-table.tsx
var $a = "button, a, input, label, [role=checkbox], [role=menuitem]";
function eo({ table: e, caption: t, status: n = "ready", empty: r, error: i, loadingRows: a = 10, onRowClick: o, className: c, stickyFirstColumn: l }) {
	let u = e.getVisibleLeafColumns(), d = e.getRowModel().rows;
	return /* @__PURE__ */ w("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", c),
		children: /* @__PURE__ */ T(H, {
			"aria-busy": n === "loading",
			stickyFirstColumn: l,
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
						children: u.map((e) => /* @__PURE__ */ w(q, { children: /* @__PURE__ */ w(ri, { className: "h-4 w-full max-w-32" }) }, e.id))
					}, `skeleton-${t}`)),
					n === "error" && /* @__PURE__ */ w(G, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ w(q, {
							colSpan: u.length,
							className: "h-auto p-0 whitespace-normal",
							children: i
						})
					}),
					n === "ready" && d.length === 0 && /* @__PURE__ */ w(G, {
						className: "hover:bg-transparent",
						children: /* @__PURE__ */ w(q, {
							colSpan: u.length,
							className: "h-auto p-0 whitespace-normal",
							children: r
						})
					}),
					n === "ready" && d.map((t) => /* @__PURE__ */ w(G, {
						"data-state": t.getIsSelected() ? "selected" : void 0,
						className: s(o && "cursor-pointer"),
						onClick: o ? (e) => {
							e.target.closest($a) || o(t);
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
function to({ column: e, title: t, className: n }) {
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
function no({ column: e, title: t, options: n }) {
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
				/* @__PURE__ */ w(De, { "data-icon": "inline-start" }),
				t,
				r.size > 0 && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(ir, {
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
			/* @__PURE__ */ w(P, { children: n.map((e) => {
				let t = r.has(e.value);
				return /* @__PURE__ */ T(F, {
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
			r.size > 0 && /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w(Nn, {}), /* @__PURE__ */ w(P, { children: /* @__PURE__ */ w(F, {
				onSelect: () => e?.setFilterValue(void 0),
				className: "justify-center",
				children: "ล้างตัวกรองนี้"
			}) })] })
		] })] })
	})] });
}
// src/components/patterns/data-table/data-table-pagination.tsx
var X = new Intl.NumberFormat("th-TH");
function ro({ table: t, pageSizes: n = [
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
					}), /* @__PURE__ */ T(Pr, {
						value: String(i),
						onValueChange: (e) => t.setPageSize(Number(e)),
						children: [/* @__PURE__ */ w(Lr, {
							className: "w-20",
							"aria-labelledby": l,
							children: /* @__PURE__ */ w(Ir, {})
						}), /* @__PURE__ */ w(Rr, { children: /* @__PURE__ */ w(Fr, { children: n.map((e) => /* @__PURE__ */ w(Br, {
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
function io({ table: t, searchPlaceholder: n = "ค้นหา", debounce: r = 300, filters: i, actions: a, columnsMenu: o = !0 }) {
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
			/* @__PURE__ */ T(xn, {
				className: "w-full sm:w-72",
				children: [
					/* @__PURE__ */ w(N, { children: /* @__PURE__ */ w(je, {}) }),
					/* @__PURE__ */ w(En, {
						type: "search",
						"aria-label": n,
						placeholder: n,
						value: c,
						onChange: (e) => l(e.target.value)
					}),
					c && /* @__PURE__ */ w(N, {
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
				children: [a, o && /* @__PURE__ */ T(Fn, { children: [/* @__PURE__ */ w(Ln, {
					asChild: !0,
					children: /* @__PURE__ */ T(j, {
						variant: "outline",
						children: [/* @__PURE__ */ w(_e, { "data-icon": "inline-start" }), "คอลัมน์"]
					})
				}), /* @__PURE__ */ w(Rn, {
					align: "end",
					className: "w-52",
					children: /* @__PURE__ */ T(zn, { children: [
						/* @__PURE__ */ w(Wn, { children: "แสดงคอลัมน์" }),
						/* @__PURE__ */ w(Gn, {}),
						t.getAllLeafColumns().filter((e) => e.getCanHide()).map((e) => /* @__PURE__ */ w(Vn, {
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
var ao = it({
	rowSortingFeature: $e,
	columnFilteringFeature: Ue,
	globalFilteringFeature: Xe,
	rowPaginationFeature: Ze,
	rowSelectionFeature: Qe,
	columnVisibilityFeature: We,
	sortedRowModel: qe(),
	filteredRowModel: Ge(),
	paginatedRowModel: Ke(),
	filterFns: {
		includesString: Ye,
		arrIncludesSome: Je
	},
	sortFns: {
		alphanumeric: et,
		text: rt,
		datetime: nt,
		basic: tt
	},
	columnMeta: {}
}), oo = 64, so = 800, co = 160, lo = 16, uo = "moove-table:", fo = 1;
function po(e) {
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
function mo(e, t, n) {
	let r = e.indexOf(t), i = e.indexOf(n);
	if (r < 0 || i < 0 || r === i) return [...e];
	let a = [...e];
	return a.splice(r, 1), a.splice(i, 0, t), a;
}
function ho(e, t, n, r) {
	let i = r ? e.filter((e) => e === t || r.includes(e)) : [...e], a = i.indexOf(t), o = i[a + n];
	return a < 0 || o === void 0 ? [...e] : mo(e, t, o);
}
function go(e, t, n = [], r = []) {
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
function _o(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
function vo(e, t) {
	return _o(Z(e.order, t), t) && Object.keys(e.widths).length === 0;
}
function yo(e) {
	return {
		order: [...e],
		widths: {}
	};
}
function bo(e, t) {
	switch (t.type) {
		case "load": return {
			order: Z(t.layout.order, t.ids),
			widths: xo(t.layout.widths)
		};
		case "move": {
			let n = Z(e.order, t.ids), r = ho(n, t.id, t.delta, t.visible);
			return _o(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "moveTo": {
			let n = Z(e.order, t.ids), r = mo(n, t.id, t.targetId);
			return _o(r, n) ? e : {
				...e,
				order: r
			};
		}
		case "resize": {
			let n = po(t.width);
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
function xo(e) {
	let t = {};
	for (let [n, r] of Object.entries(e)) typeof r == "number" && Number.isFinite(r) && r > 0 && (t[n] = Math.round(Math.min(800, r)));
	return t;
}
function Q(e) {
	return `${uo}${e}`;
}
function So(e, t) {
	if (!e) return null;
	try {
		let n = e.getItem(Q(t));
		if (!n) return null;
		let r = JSON.parse(n);
		if (r.v !== fo || !Array.isArray(r.order) || !r.order.every((e) => typeof e == "string")) return null;
		let i = r.widths && typeof r.widths == "object" && !Array.isArray(r.widths) ? xo(r.widths) : {};
		return {
			order: r.order,
			widths: i
		};
	} catch {
		return null;
	}
}
function Co(e, t, n, r) {
	if (e) try {
		vo(n, r) ? e.removeItem(Q(t)) : e.setItem(Q(t), JSON.stringify({
			v: fo,
			order: n.order,
			widths: n.widths
		}));
	} catch {}
}
function wo() {
	try {
		return typeof window > "u" ? null : window.localStorage;
	} catch {
		return null;
	}
}
function To(e) {
	let t = 5381;
	for (let n = 0; n < e.length; n++) t = (t << 5) + t + e.charCodeAt(n) | 0;
	return (t >>> 0).toString(36);
}
function Eo(e, t) {
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
function Do(e) {
	let t = {};
	return e.closest("table")?.querySelectorAll("thead th[data-col-id]").forEach((e) => {
		let n = e.dataset.colId;
		n && (t[n] = Math.ceil(e.getBoundingClientRect().width) + 1);
	}), t;
}
function Oo({ layout: e, id: t, label: n }) {
	let i = r(null), a = r(0), o = e.widths[t], s = (n) => {
		if (o !== void 0) return o;
		let r = Do(n);
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
function ko({ layout: e, id: t, label: n, movable: r, resizable: i, className: a, ariaSort: o, children: c }) {
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
		children: [c, i && /* @__PURE__ */ w(Oo, {
			layout: e,
			id: t,
			label: n
		})]
	});
}
function Ao({ ids: e, sizing: t }) {
	return t.fixed ? /* @__PURE__ */ T("colgroup", { children: [e.map((e, n) => /* @__PURE__ */ w("col", { style: { width: t.colWidths[n] } }, e)), /* @__PURE__ */ w("col", {})] }) : null;
}
function jo({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ w(K, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function Mo({ sizing: e }) {
	return e.fixed ? /* @__PURE__ */ w(q, {
		"aria-hidden": !0,
		className: "p-0"
	}) : null;
}
function No(e) {
	return e.fixed ? {
		"data-layout": "fixed",
		style: {
			tableLayout: "fixed",
			width: `max(100%, ${e.totalWidth}px)`,
			minWidth: e.totalWidth
		}
	} : {};
}
function Po({ layout: e, table: t, items: n }) {
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
			children: [/* @__PURE__ */ w(oe, { "data-icon": "inline-start" }), $.arrange]
		})
	}), /* @__PURE__ */ T(R, {
		align: "end",
		className: "w-80 gap-0 p-0",
		children: [
			/* @__PURE__ */ T(Dr, {
				className: "p-3",
				children: [/* @__PURE__ */ w(Or, { children: $.arrangeTitle }), /* @__PURE__ */ w(kr, { children: $.arrangeHint })]
			}),
			/* @__PURE__ */ w("ol", {
				"aria-label": $.listLabel,
				className: "max-h-[50dvh] overflow-y-auto border-y py-1",
				children: a.map((t) => {
					let n = t.shown, r = o.indexOf(t.id);
					return /* @__PURE__ */ T("li", {
						className: "flex items-center gap-1 px-3",
						children: [
							/* @__PURE__ */ T("label", {
								className: "flex min-h-11 min-w-0 flex-1 items-center gap-3 text-sm",
								children: [/* @__PURE__ */ w(an, {
									checked: n,
									disabled: !t.canHide,
									onCheckedChange: (e) => t.toggle(e === !0),
									"aria-label": $.show(s(t))
								}), /* @__PURE__ */ w("span", {
									className: "min-w-0 flex-1 truncate",
									children: s(t)
								})]
							}),
							/* @__PURE__ */ w(j, {
								size: "icon",
								variant: "ghost",
								"aria-label": $.moveLeft(s(t)),
								disabled: !n || r <= 0,
								onClick: () => e.move(t.id, -1, o),
								children: /* @__PURE__ */ w(fe, {})
							}),
							/* @__PURE__ */ w(j, {
								size: "icon",
								variant: "ghost",
								"aria-label": $.moveRight(s(t)),
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
					children: [/* @__PURE__ */ w(Ae, { "data-icon": "inline-start" }), $.reset]
				})
			})
		]
	})] });
}
// src/components/patterns/data-table/column-layout-data-table.tsx
var Fo = "button, a, input, label, [role=checkbox], [role=menuitem], [role=separator]";
function Io({ table: e, layout: t, caption: n, empty: r, onRowClick: i, className: a, stickyFirstColumn: o }) {
	let c = e.getVisibleLeafColumns().map((e) => e.id), l = Eo(c, t.widths), u = e.getRowModel().rows, d = new Set(t.order);
	return /* @__PURE__ */ w("div", {
		"data-slot": "data-table",
		className: s("overflow-hidden rounded-xl border border-border bg-card", a),
		children: /* @__PURE__ */ T(H, {
			...No(l),
			stickyFirstColumn: o,
			children: [
				/* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: n
				}),
				/* @__PURE__ */ w(Ao, {
					ids: c,
					sizing: l
				}),
				/* @__PURE__ */ w(U, {
					className: "sticky top-0 z-10",
					children: e.getHeaderGroups().map((e) => /* @__PURE__ */ T(G, { children: [e.headers.map((e) => {
						let n = e.column, r = n.columnDef.meta, i = n.getIsSorted();
						return /* @__PURE__ */ w(ko, {
							layout: t,
							id: n.id,
							label: Lo(n.columnDef.meta, n.columnDef.header, n.id),
							movable: d.has(n.id),
							resizable: d.has(n.id),
							ariaSort: i === "asc" ? "ascending" : i === "desc" ? "descending" : n.getCanSort() ? "none" : void 0,
							className: s(r?.align === "right" && "text-right", r?.sticky && "sticky left-0 z-10 bg-secondary"),
							children: e.isPlaceholder ? null : /* @__PURE__ */ w(He, { header: e })
						}, e.id);
					}), /* @__PURE__ */ w(jo, { sizing: l })] }, e.id))
				}),
				/* @__PURE__ */ w(W, { children: u.length === 0 ? /* @__PURE__ */ w(G, {
					className: "hover:bg-transparent",
					children: /* @__PURE__ */ w(q, {
						colSpan: c.length + +!!l.fixed,
						className: "h-auto p-0 whitespace-normal",
						children: r
					})
				}) : u.map((e) => /* @__PURE__ */ T(G, {
					"data-state": e.getIsSelected() ? "selected" : void 0,
					className: s(i && "cursor-pointer"),
					onClick: i ? (t) => !t.target.closest(Fo) && i(e) : void 0,
					children: [e.getVisibleCells().map((e) => {
						let t = e.column.columnDef.meta;
						return /* @__PURE__ */ w(q, {
							className: s(t?.align === "right" && "text-right", t?.sticky && "sticky left-0 bg-inherit"),
							children: /* @__PURE__ */ w(He, { cell: e })
						}, e.id);
					}), /* @__PURE__ */ w(Mo, { sizing: l })]
				}, e.id)) })
			]
		})
	});
}
function Lo(e, t, n) {
	return e?.label ?? (typeof t == "string" ? t : n);
}
function Ro(e, t) {
	let n = new Set(t.order);
	return e.getVisibleLeafColumns().filter((e) => n.has(e.id)).map((e) => ({
		id: e.id,
		label: Lo(e.columnDef.meta, e.columnDef.header, e.id)
	}));
}
// src/components/patterns/data-table/use-column-layout.ts
var zo = /* @__PURE__ */ new Map(), Bo = /* @__PURE__ */ new Map();
function Vo(e) {
	return zo.has(e) || zo.set(e, So(wo(), e)), zo.get(e) ?? null;
}
function Ho(e, t, n) {
	zo.set(e, t), Co(wo(), e, t, n);
	for (let t of Bo.get(e) ?? []) t();
}
function Uo(e, t) {
	let n = Bo.get(e) ?? /* @__PURE__ */ new Set();
	return n.add(t), Bo.set(e, n), () => n.delete(t);
}
var Wo = () => null;
function Go(e, o) {
	let s = o.join("\0"), c = n(() => [...o], [s]), l = a(t((t) => Uo(e, t), [e]), () => Vo(e), Wo), u = n(() => yo(c), [c]), d = l ?? u, f = n(() => Z(d.order, c), [d.order, c]), p = d.widths, m = t((t) => {
		let n = Vo(e) ?? yo(c), r = bo(n, t);
		r !== n && Ho(e, r, c);
	}, [e, c]), h = r(null), g = r(!1), [_, v] = i(null);
	return {
		tableId: e,
		order: f,
		widths: p,
		isCustom: !vo(d, c),
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
var Ko = {
	left: "",
	right: "text-right",
	center: "text-center"
};
function qo({ tableId: e, columns: t, rows: n, rowKey: r, caption: i, toolbar: a, className: o, stickyFirstColumn: c }) {
	let l = t.filter((e) => e.pin === "start").map((e) => e.id), u = t.filter((e) => e.pin === "end").map((e) => e.id), d = Go(e, t.filter((e) => !e.pin).map((e) => e.id)), f = go(t, d.order, l, u), p = f.map((e) => e.id), m = Eo(p, d.widths), h = f.some((e) => e.footer !== void 0), g = f.filter((e) => !e.pin).map((e) => ({
		id: e.id,
		label: e.label
	}));
	return /* @__PURE__ */ T("div", {
		className: s("flex flex-col gap-2", o),
		children: [/* @__PURE__ */ T("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ w("div", { children: a }), /* @__PURE__ */ w(Po, {
				layout: d,
				items: g
			})]
		}), /* @__PURE__ */ T(H, {
			...No(m),
			stickyFirstColumn: c,
			children: [
				i && /* @__PURE__ */ w("caption", {
					className: "sr-only",
					children: i
				}),
				/* @__PURE__ */ w(Ao, {
					ids: p,
					sizing: m
				}),
				/* @__PURE__ */ w(U, { children: /* @__PURE__ */ T(G, { children: [f.map((e) => e.pin ? /* @__PURE__ */ w(K, {
					"data-col-id": e.id,
					className: Ko[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id) : /* @__PURE__ */ w(ko, {
					layout: d,
					id: e.id,
					label: e.label,
					movable: !0,
					resizable: !0,
					className: Ko[e.align ?? "left"],
					children: e.header ?? e.label
				}, e.id)), /* @__PURE__ */ w(jo, { sizing: m })] }) }),
				/* @__PURE__ */ w(W, { children: n.map((e) => /* @__PURE__ */ T(G, { children: [f.map((t) => /* @__PURE__ */ w(q, {
					className: s(Ko[t.align ?? "left"], t.align === "right" && "tabular-nums", t.className),
					children: t.cell(e)
				}, t.id)), /* @__PURE__ */ w(Mo, { sizing: m })] }, r(e))) }),
				h && /* @__PURE__ */ w(zi, { children: /* @__PURE__ */ T(G, { children: [f.map((e) => /* @__PURE__ */ w(q, {
					className: s(Ko[e.align ?? "left"], e.align === "right" && "tabular-nums", e.className),
					children: e.footer
				}, e.id)), /* @__PURE__ */ w(Mo, { sizing: m })] }) })
			]
		})]
	});
}
export { yt as Alert, St as AlertAction, xt as AlertDescription, ot as AlertDialog, gt as AlertDialogAction, _t as AlertDialogCancel, ut as AlertDialogContent, ht as AlertDialogDescription, ft as AlertDialogFooter, dt as AlertDialogHeader, pt as AlertDialogMedia, lt as AlertDialogOverlay, ct as AlertDialogPortal, mt as AlertDialogTitle, st as AlertDialogTrigger, bt as AlertTitle, aa as AppShell, Ct as Avatar, Et as AvatarBadge, Tt as AvatarFallback, Dt as AvatarGroup, Ot as AvatarGroupCount, wt as AvatarImage, M as Badge, At as BadgeDot, oa as BadgeOverflow, sa as BlockerBadge, jt as Breadcrumb, Lt as BreadcrumbEllipsis, Nt as BreadcrumbItem, Pt as BreadcrumbLink, Mt as BreadcrumbList, Ft as BreadcrumbPage, It as BreadcrumbSeparator, j as Button, Rt as Calendar, zt as CalendarDayButton, Bt as Card, Wt as CardAction, Gt as CardContent, Ut as CardDescription, Kt as CardFooter, Vt as CardHeader, Ht as CardTitle, ca as CellStack, ua as ChartCard, Zt as ChartContainer, tn as ChartLegend, nn as ChartLegendContent, Qt as ChartStyle, $t as ChartTooltip, en as ChartTooltipContent, an as Checkbox, on as Collapsible, cn as CollapsibleContent, sn as CollapsibleTrigger, Po as ColumnLayoutControls, Io as ColumnLayoutDataTable, qo as ColumnLayoutTable, ha as Combobox, On as Command, kn as CommandDialog, Mn as CommandEmpty, P as CommandGroup, An as CommandInput, F as CommandItem, jn as CommandList, Nn as CommandSeparator, Pn as CommandShortcut, ga as ConfirmDialog, va as ConflictDialog, co as DEFAULT_COLUMN_WIDTH, eo as DataTable, to as DataTableColumnHeader, no as DataTableFacetedFilter, ro as DataTablePagination, io as DataTableToolbar, Ta as DatePicker, Da as DateRangeFilter, Ea as DateRangePicker, ln as Dialog, fn as DialogClose, mn as DialogContent, vn as DialogDescription, gn as DialogFooter, hn as DialogHeader, pn as DialogOverlay, dn as DialogPortal, _n as DialogTitle, un as DialogTrigger, Fn as DropdownMenu, Vn as DropdownMenuCheckboxItem, Rn as DropdownMenuContent, zn as DropdownMenuGroup, Bn as DropdownMenuItem, Wn as DropdownMenuLabel, In as DropdownMenuPortal, Hn as DropdownMenuRadioGroup, Un as DropdownMenuRadioItem, Gn as DropdownMenuSeparator, Kn as DropdownMenuShortcut, qn as DropdownMenuSub, Yn as DropdownMenuSubContent, Jn as DropdownMenuSubTrigger, Ln as DropdownMenuTrigger, Xn as Empty, nr as EmptyContent, tr as EmptyDescription, Zn as EmptyHeader, $n as EmptyMedia, Oa as EmptyState, er as EmptyTitle, ka as ErrorState, lr as Field, ur as FieldContent, pr as FieldDescription, hr as FieldError, sr as FieldGroup, dr as FieldLabel, or as FieldLegend, mr as FieldSeparator, ar as FieldSet, fr as FieldTitle, Mo as FillerCell, jo as FillerHead, ja as FormSection, gr as HoverCard, vr as HoverCardContent, _r as HoverCardTrigger, yn as Input, xn as InputGroup, N as InputGroupAddon, wn as InputGroupButton, En as InputGroupInput, Tn as InputGroupText, Dn as InputGroupTextarea, Ra as KpiCard, rr as Label, la as LabeledLine, Ao as LayoutColGroup, ko as LayoutHead, so as MAX_COLUMN_WIDTH, oo as MIN_COLUMN_WIDTH, Ba as NoPermission, za as PageHeader, yr as Pagination, br as PaginationContent, Tr as PaginationEllipsis, xr as PaginationItem, Sr as PaginationLink, wr as PaginationNext, Cr as PaginationPrevious, Va as PermissionGate, Ha as PhoneText, I as Popover, Er as PopoverAnchor, R as PopoverContent, kr as PopoverDescription, Dr as PopoverHeader, Or as PopoverTitle, L as PopoverTrigger, jr as Progress, lo as RESIZE_STEP, Ua as ReasonDialog, Ga as RowFlag, Mr as ScrollArea, Nr as ScrollBar, Pr as Select, Rr as SelectContent, Fr as SelectGroup, Br as SelectItem, zr as SelectLabel, Ur as SelectScrollDownButton, Hr as SelectScrollUpButton, Vr as SelectSeparator, Lr as SelectTrigger, Ir as SelectValue, ir as Separator, Wr as Sheet, Kr as SheetClose, Yr as SheetContent, $r as SheetDescription, Zr as SheetFooter, Xr as SheetHeader, Qr as SheetTitle, Gr as SheetTrigger, gi as Sidebar, wi as SidebarContent, Si as SidebarFooter, Ti as SidebarGroup, Di as SidebarGroupAction, Oi as SidebarGroupContent, Ei as SidebarGroupLabel, xi as SidebarHeader, bi as SidebarInput, yi as SidebarInset, ki as SidebarMenu, ji as SidebarMenuAction, Mi as SidebarMenuBadge, V as SidebarMenuButton, B as SidebarMenuItem, Ni as SidebarMenuSkeleton, Pi as SidebarMenuSub, Ii as SidebarMenuSubButton, Fi as SidebarMenuSubItem, hi as SidebarProvider, vi as SidebarRail, Ci as SidebarSeparator, _i as SidebarTrigger, ri as Skeleton, Ri as Spinner, qa as StatDelta, Ja as StatPill, Ya as StatusBadge, Aa as StickyActions, H as Table, W as TableBody, Bi as TableCaption, q as TableCell, zi as TableFooter, K as TableHead, U as TableHeader, G as TableRow, Vi as Tabs, Gi as TabsContent, Ui as TabsList, Wi as TabsTrigger, bn as Textarea, Li as Toaster, qi as Toggle, Yi as ToggleGroup, Xi as ToggleGroupItem, ai as Tooltip, si as TooltipContent, ii as TooltipProvider, oi as TooltipTrigger, Qa as UserMenu, Ro as arrangeItems, kt as badgeVariants, wo as browserStorage, at as buttonVariants, fa as canCreateFromText, po as clampWidth, o as cn, bo as columnLayoutReducer, _a as conflictShowsYours, ao as dataTableFeatures, wa as defaultDatePresets, yo as defaultLayout, da as filterComboboxOptions, ya as formatDate, To as hashText, vo as isDefaultLayout, Ia as kpiBarSpec, La as kpiValueSizeClass, So as loadLayout, ho as moveColumnBy, mo as moveColumnTo, Z as normalizeOrder, go as orderColumns, ma as resolveEmptyText, Co as saveLayout, pa as searchComboboxOptions, Ma as statBadgeVariant, Pa as statBarClass, Fa as statDeltaTone, Na as statTextClass, Q as storageKey, No as tableProps, Eo as tableSizing, Hi as tabsListVariants, Ki as toggleVariants, Go as useColumnLayout, ni as useIsMobile, z as useSidebar };
