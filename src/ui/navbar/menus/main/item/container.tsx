import { cn } from "@/lib/utils";

export const NavItemContainer = ({ store, children, title, isActive }: any) => (
    <div
      className={cn(
        "menu-item has-submenu menu-item--animated hide-in-lite-mode js-menu-store",
        isActive ? "is-expanded animation-mode--long" : ""
      )}
      ng-controller="menuGamesCtrl as games"
      ng-mouseenter="menu.showWithDelay($event, 'store')"
      ng-mouseleave="menu.hide($event, 'store')"
      hook-test="menuStore"
      onMouseEnter={() => store.onOpen(title)}
      onMouseLeave={() => store.onClose("")}
    >
      {children}
    </div>
  )