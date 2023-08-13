import { SvgMenuDropDown } from "@/ui/navbar/svg";

export const NavItemLink = ({ title }: any) => (
    <a
      className="menu-link menu-uppercase js-menu-link"
      href="/en/games"
      ng-touchstart="$event.preventDefault(); menu.toggle($event, 'store')"
      hook-test="menuStoreButton"
    >
      {title}
      <SvgMenuDropDown />
    </a>
  )