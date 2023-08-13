import { cn } from "@/lib/utils";
import { useState } from "react";

export const SubMenuItem = ({ title, isFeatured }: any) => {
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