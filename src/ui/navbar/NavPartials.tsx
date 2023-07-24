import { useState } from "react";

import { cn } from "@/lib/utils";

const MenuSeparator = () => (
  <div
    className="menu-submenu-separator"
    ng-show="games.customCategoriesCount > 0"
  />
);

const SubMenuItem = ({ title, isFeatured }: any) => {
  const [isActive, setIsActive] = useState("");
  return (
    <div
      className={cn("menu-submenu-item", isActive === title ? "is-active" : "")}
      ng-mouseover="games.selectCategory('new-releases')"
      ng-class="{'is-active': games.selectedCategory.name == 'new-releases'}"
      hook-test="storeMenunew-releases"
      ng-show="games.hasCategory('new-releases')"
      onMouseLeave={() => setIsActive("")}
      onMouseOver={() => setIsActive(title)}
    >
      <a
        className={cn(
          "menu-submenu-link",
          isFeatured ? "menu-submenu-link--featured" : "",
          "js-menu-category-link"
        )}
        href="/en/games/new"
        gog-track-event='{eventAction: "goToLink", eventCategory: "topBar", eventLabel: "new-releases STORE"}'
        ng-touchstart="$event.preventDefault(); games.selectCategory('new-releases')"
        hook-test="storeMenunew-releasesButton"
      >
        {title}
        <svg viewBox="0 0 32 32" className="menu-submenu-icon">
          <use xlinkHref="#icon-arrow-right4" />
        </svg>
        <svg viewBox="0 0 32 32" className="menu-submenu-icon">
          <use xlinkHref="#icon-arrow-right4" />
        </svg>
      </a>
    </div>
  );
};

function MenuItem({ setMenuActive, isMenuActive, title, color }: any) {
  return (
    <div ng-repeat="customCategory in games.customCategories track by customCategory.name">
      {/**/}
      <div
        className={cn(
          "menu-submenu-item menu-submenu-item--custom",
          isMenuActive === title ? "is-active" : ""
        )}
        ng-mouseover="games.selectCategory(customCategory.name)"
        ng-class="{'is-active': games.selectedCategory.name == customCategory.name}"
        onMouseLeave={() => setMenuActive("")}
        onMouseOver={() => setMenuActive(title)}
      >
        <a
          className="menu-submenu-link menu-custom-category-link menu-custom-category-link js-menu-category-link"
          ng-style="{'color': customCategory.customisation.categoryColor }"
          ng-href="/en/good-old-games"
          ng-touchstart="$event.preventDefault(); games.selectCategory(customCategory.name)"
          href="/en/good-old-games"
          style={{ color: color }}
        >
          {" "}
          {title}
          <svg
            viewBox="0 0 32 32"
            className="menu-submenu-icon menu-submenu-icon--custom"
            ng-style="{'fill': customCategory.customisation.categoryColor}"
            style={{ fill: color }}
          >
            <use xlinkHref="#icon-arrow-right4" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            className="menu-submenu-icon menu-submenu-icon--custom"
            ng-style="{'fill': customCategory.customisation.categoryColor}"
            style={{ fill: color }}
          >
            <use xlinkHref="#icon-arrow-right4" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export { MenuSeparator, SubMenuItem, MenuItem };
