"use client"

import * as React from "react"
import { cn } from "cn"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  type LucideIcon,
} from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

/**
 * Menu item states follow the input pattern: no box at rest, a visible border on hover,
 * a primary border + text when selected, and the same focus ring as fields.
 * Uses the same `data-active` variant as shadcn's sidebar so these classes replace its fill.
 */
const MENU_ITEM =
  "border border-transparent hover:border-muted-foreground hover:bg-background hover:text-foreground active:bg-background data-active:border-primary data-active:bg-background data-active:font-medium data-active:text-primary data-open:hover:bg-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"

export type NavSubItem = {
  title: string
  href: string
  active?: boolean
  /** Count shown on the right, e.g. open orders in that view. */
  count?: number
  /** Items grouped under this one, shown indented below it (for example "Work queue" with "To review" and "Ready to book"). */
  children?: NavSubItem[]
}

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
  active?: boolean
  /** Count of items needing attention, e.g. open blockers. */
  badge?: number
  /** Sub-items. When present the item expands and collapses (shadcn sidebar-07 pattern). A sub-item can have its own sub-items. */
  children?: NavSubItem[]
}

export type NavGroup = { label?: string; items: NavItem[] }

export type AppShellBrand = {
  /** Company or system name, e.g. "MOOVE". */
  name: string
  /** Second line, e.g. the system name "OMS". */
  description?: string
  /** Logo mark shown in a 32px square: an <img> or a Lucide icon element. Defaults to the first letter of `name`. */
  logo?: React.ReactNode
  /** Makes the brand a link, usually to the home page. */
  href?: string
}

type AppShellProps = {
  /** Company name and logo at the top of the sidebar (shadcn sidebar-07 pattern). Collapses to the logo. */
  brand?: AppShellBrand
  /** Extra sidebar header content below the brand, e.g. a search field. */
  header?: React.ReactNode
  nav: NavGroup[]
  footer?: React.ReactNode
  defaultOpen?: boolean
  children: React.ReactNode
}

function SidebarBrand({ name, description, logo, href }: AppShellBrand) {
  const content = (
    <>
      <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-primary text-sm font-semibold text-primary-foreground [&_img]:size-full [&_img]:object-cover [&_svg]:size-4">
        {logo ?? name.trim().charAt(0).toUpperCase()}
      </span>
      <span className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
        <span className="truncate text-sm font-semibold text-foreground">
          {name}
        </span>
        {description && (
          <span className="truncate text-xs text-muted-foreground">
            {description}
          </span>
        )}
      </span>
    </>
  )
  const className =
    "flex h-12 min-w-0 flex-1 items-center gap-2 rounded-md px-0 outline-hidden group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:flex-none"

  return href ? (
    <a
      href={href}
      className={cn(
        className,
        "focus-visible:ring-2 focus-visible:ring-ring/40"
      )}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  )
}

/**
 * Collapse/expand button. On desktop it is a small circle straddling the sidebar's right edge,
 * level with the logo. In the mobile Sheet it is a plain close button inside the header.
 */
function SidebarToggle() {
  const { state, isMobile, toggleSidebar } = useSidebar()

  if (isMobile) {
    return (
      <SidebarTrigger
        aria-label="ปิดเมนู"
        title="ปิดเมนู"
        className="ml-auto text-muted-foreground"
      />
    )
  }

  const expanded = state === "expanded"
  const label = expanded ? "ยุบเมนู" : "ขยายเมนู"
  const Icon = expanded ? ChevronLeftIcon : ChevronRightIcon

  return (
    <button
      type="button"
      data-slot="sidebar-toggle"
      aria-label={label}
      title={label}
      onClick={toggleSidebar}
      // 24px circle centred on the edge (header has 8px padding, so -right-5 = 8 + 12).
      // Collapsed, the 48px rail leaves only 8px beside the logo, so the circle moves out to clear it.
      // The ::after extends the tap area to 40px for touch.
      className="absolute top-1/2 -right-5 z-30 flex size-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm outline-hidden transition-colors group-data-[collapsible=icon]:-right-[26px] after:absolute after:-inset-2 hover:border-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 [&_svg]:size-3.5"
    >
      <Icon />
    </button>
  )
}

/** True when the item or any item below it is the current page. */
function anyActive(items: NavSubItem[]): boolean {
  return items.some((c) => !!c.active || anyActive(c.children ?? []))
}

function NavCount({ count }: { count?: number }) {
  if (count === undefined) return null
  return (
    <span className="ml-auto text-xs text-muted-foreground tabular-nums">
      {count.toLocaleString("th-TH")}
    </span>
  )
}

/** Sub-items in the collapsed rail's menu. Items under another item are indented. */
function RailItems({ items, depth }: { items: NavSubItem[]; depth: number }) {
  return items.map((child) => (
    <React.Fragment key={child.href}>
      <DropdownMenuItem
        asChild
        className={cn(
          "min-h-11",
          depth > 0 && "pl-6",
          child.active && "font-semibold text-primary"
        )}
      >
        <a href={child.href} aria-current={child.active ? "page" : undefined}>
          <span>{child.title}</span>
          <NavCount count={child.count} />
        </a>
      </DropdownMenuItem>
      {child.children?.length ? (
        <RailItems items={child.children} depth={depth + 1} />
      ) : null}
    </React.Fragment>
  ))
}

/** Sub-items of an expanded group. An item with its own sub-items shows them indented below it. */
function SubItems({ items }: { items: NavSubItem[] }) {
  return (
    <SidebarMenuSub className="gap-0.5 py-1">
      {items.map((child) => (
        <SidebarMenuSubItem key={child.href} className="relative">
          {/* dot sitting on the vertical guide line */}
          <span
            aria-hidden
            className={cn(
              "absolute top-3.5 -left-[13.5px] size-1.5 -translate-y-1/2 rounded-full",
              child.active ? "bg-primary" : "bg-border"
            )}
          />
          <SidebarMenuSubButton
            asChild
            isActive={child.active}
            className={MENU_ITEM}
          >
            <a
              href={child.href}
              aria-current={child.active ? "page" : undefined}
            >
              <span>{child.title}</span>
              <NavCount count={child.count} />
            </a>
          </SidebarMenuSubButton>
          {child.children?.length ? <SubItems items={child.children} /> : null}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenuSub>
  )
}

/**
 * A nav item with sub-items. Expanded sidebar: it opens and closes in place. Collapsed to the icon rail
 * (desktop): the sub-items are hidden by the sidebar, so the icon opens a menu to its right instead.
 */
function NavGroupItem({ item }: { item: NavItem }) {
  const { state, isMobile } = useSidebar()
  const children = item.children ?? []
  const isActive = !!item.active || anyActive(children)

  if (state === "collapsed" && !isMobile) {
    return (
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              tooltip={item.title}
              isActive={isActive}
              aria-label={item.title}
              className={MENU_ITEM}
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={8}
            className="min-w-52"
          >
            <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
            <RailItems items={children} depth={0} />
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    )
  }

  return (
    <Collapsible asChild defaultOpen={isActive} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            className={cn(MENU_ITEM, isActive && "font-semibold")}
          >
            <item.icon />
            <span>{item.title}</span>
            <ChevronDownIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SubItems items={children} />
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

/**
 * SidebarInset renders the page's <main> landmark, so children must not add another one.
 * Standard layout: collapsible sidebar (Sheet on < 768px) with the brand and collapse button at the top,
 * content on the white surface with the page gutter from the density token. No top bar on desktop.
 */
function AppShell({
  brand,
  header,
  nav,
  footer,
  defaultOpen = true,
  children,
}: AppShellProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen} className="min-h-svh">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="relative flex min-h-8 items-center gap-2">
            {brand && <SidebarBrand {...brand} />}
            <SidebarToggle />
          </div>
          {header}
        </SidebarHeader>
        <SidebarContent>
          {nav.map((group, i) => (
            <SidebarGroup key={group.label ?? i}>
              {group.label && (
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) =>
                    item.children?.length ? (
                      <NavGroupItem key={item.href} item={item} />
                    ) : (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.active}
                          tooltip={item.title}
                          className={MENU_ITEM}
                        >
                          <a
                            href={item.href}
                            aria-current={item.active ? "page" : undefined}
                          >
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                        {item.badge ? (
                          <SidebarMenuBadge
                            className="tabular-nums"
                            aria-label={`${item.badge} รายการ`}
                          >
                            {item.badge}
                          </SidebarMenuBadge>
                        ) : null}
                      </SidebarMenuItem>
                    )
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        {footer && <SidebarFooter>{footer}</SidebarFooter>}
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="min-w-0 bg-background">
        {/* No top bar on desktop. On < 768px the sidebar is a Sheet, so a slim bar keeps a button to open it. */}
        <header className="sticky top-0 z-20 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background px-(--page-gutter) md:hidden">
          <SidebarTrigger className="-ml-2" aria-label="เปิดเมนู" />
          {brand && (
            <span className="truncate text-sm font-semibold text-foreground">
              {brand.name}
            </span>
          )}
        </header>
        <div className="flex min-w-0 flex-1 flex-col gap-4 p-(--page-gutter)">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export { AppShell }
