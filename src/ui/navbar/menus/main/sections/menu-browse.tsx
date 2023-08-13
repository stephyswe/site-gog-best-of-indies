import { SvgSubMenuRightArrow } from "@/ui/navbar/svg";

export const SubMenuItemBrowse = () => (
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
        <SvgSubMenuRightArrow />
        <SvgSubMenuRightArrow />
      </a>
    </div>
  )