import { cn } from "@/lib/utils";

import useMenuState from "@/store/useMenuState";

import { DataAllItem } from "../data";
import { NavItemSeperator, NavItemTriangle } from "@/ui/navbar/partials";
import { NavItemContainer } from "./container";
import { NavItemLink } from "./nav-item-link";
import { SubMenuItemBrowse } from "../sections/menu-browse";
import { MenuList } from "./sub-list";
import { SubMenuItem } from "./sub-list/sub-menu-item";

export const NavItem: React.FC<any> = ({ title, items, subItems }) => {
  const store = useMenuState();
  const isActive = store.idOpen === title;

  return (
    <NavItemContainer store={store} isActive={isActive} title={title} >
      <NavItemLink title={title} />
      <NavItemTriangle />
      <ItemContent isActive={isActive} subItems={subItems} items={items} />
    </NavItemContainer>
  );
};

const ItemContent: React.FC<{
  isActive: boolean;
  subItems?: any[];
  items: any[];
}> = ({ isActive, subItems, items }) => (
  <div
    className={cn(
      "menu-submenu menu-store__submenu js-menu-sloped-submenu",
      isActive && "menu-store__submenu--category-expanded"
    )}
    ng-mouseenter="menu.cancelTimeout('store')"
    ng-class="{ 'menu-store__submenu--category-expanded': games.isLayerExpanded }"
  >
    <MenuList items={items} subItems={subItems} />

    {subItems?.map((item, index) => (
      <SubMenuItem key={index} title={item} />
    ))}

    <NavItemSeperator />
    <SubMenuItemBrowse />
  </div>
);



