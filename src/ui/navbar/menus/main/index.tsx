import { Fragment } from "react";
import { NavItem } from "./item";
import { NavItemStoreMore } from "./nav-item-more";
import { DataAllItem, dataAll } from "./data";
import { SectionCommunity } from "./sections/community";
import { SectionSupport } from "./sections/support";
import { SectionSignIn } from "./sections/sign-in";
import { SectionViewMobile } from "./sections/view-mobile";

export const MenuMain = () => {
    const renderNavItem = (item: DataAllItem) => {
        return item.title === "Store" ? (
            <Fragment key={item.title}>
                <NavItem {...item} />
                <NavItemStoreMore />
            </Fragment>
        ) : (
            <NavItem key={item.title} {...item} />
        );
    }

    return (
        <div className="menu-main hide-in-lite-mode">
            {dataAll.map(renderNavItem)}
            <SectionCommunity />
            <SectionSupport />
            <SectionSignIn />
            <SectionViewMobile />
        </div>
    );
}
