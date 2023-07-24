import { cn } from "@/lib/utils";
import useMenuState from "@/store/useMenuState";

import { MenuItem, MenuSeparator, SubMenuItem } from "./NavPartials";
import { SectionClassical } from "./section-classical";

export const NavItem = ({ title, items, subItems }: any) => {
  const store = useMenuState();
  const isActive = store.idOpen === title;

  return (
    <div
      className={cn(
        "menu-item has-submenu menu-item--animated hide-in-lite-mode js-menu-store",
        isActive ? "is-expanded animation-mode--long" : ""
      )}
      ng-controller="menuGamesCtrl as games"
      ng-mouseenter="menu.showWithDelay($event, 'store')"
      ng-mouseleave="menu.hide($event, 'store')"
      hook-test="menuStore"
      onMouseEnter={() => store.onOpen("Store")}
      onMouseLeave={() => store.onClose("")}
    >
      <a
        className="menu-link menu-uppercase js-menu-link"
        href="/en/games"
        ng-touchstart="$event.preventDefault(); menu.toggle($event, 'store')"
        hook-test="menuStoreButton"
      >
        Store
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
          <use xlinkHref="#icon-arrow-down2" />
        </svg>
      </a>
      <span className="menu-triangle" />
      <div
        className={cn(
          "menu-submenu menu-store__submenu js-menu-sloped-submenu",
          isActive ? "menu-store__submenu--category-expanded" : ""
        )}
        ng-mouseenter="menu.cancelTimeout('store')"
        ng-class="{ 'menu-store__submenu--category-expanded': games.isLayerExpanded }"
      >
        {isActive ? <SectionClassical /> : null}
        {/**/}
        {items.map((item: any, index: number) => {
          if (item.title === "separator") return <MenuSeparator key={index} />;
          if (item.type === "submenu")
            return <SubMenuItem key={item.title} {...item} />;
          return <MenuItem key={item.title} {...item} />;
        })}
        {subItems.map((item: any, index: number) => {
          return <SubMenuItem key={index} title={item} />;
        })}
        {/**/}
        <div className="menu-submenu-separator" />
        <div
          className="menu-submenu-item "
          ng-mouseover="games.selectCategory('all')"
          ng-class="{'is-active': games.selectedCategory.name == 'all'}"
          hook-test="storeMenuall"
          ng-show="games.hasCategory('all')"
        >
          <a
            className="menu-submenu-link   js-menu-category-link"
            href="/en/games"
            gog-track-event='{eventAction: "goToLink", eventCategory: "topBar", eventLabel: "all STORE"}'
            ng-touchstart="$event.preventDefault(); games.selectCategory('all')"
            hook-test="storeMenuallButton"
          >
            Browse all games
            <svg viewBox="0 0 32 32" className="menu-submenu-icon">
              <use xlinkHref="#icon-arrow-right4" />
            </svg>
            <svg viewBox="0 0 32 32" className="menu-submenu-icon">
              <use xlinkHref="#icon-arrow-right4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
