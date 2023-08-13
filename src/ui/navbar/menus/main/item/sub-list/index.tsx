import React, { Fragment, useState } from "react";

import { SectionClassical } from "../../sections/inner-classical";
import { MenuSeparator } from "@/ui/navbar/partials";
import { MenuItem } from "./menu-item";
import { SubMenuItem } from "./sub-menu-item";

type MenuListProps = {
    items?: any[];
    subItems?: any[];
};

const renderMenuItem = (item: any, isMenuActive: string, setMenuActive: React.Dispatch<React.SetStateAction<string>>) => {
    if (item.title === "separator") return <MenuSeparator />;
    if (item.type === "submenu") return <SubMenuItem {...item} />;

    return (
        <MenuItem
            {...item}
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
        />
    );
};

export const MenuList: React.FC<MenuListProps> = ({ items, subItems }) => {
    const [isMenuActive, setMenuActive] = useState<string>("");

    return (
        <>
            {isMenuActive === "Good Old Games" && <SectionClassical />}
            {items?.map((item, index) => <Fragment key={index}>{renderMenuItem(item, isMenuActive, setMenuActive)}</Fragment>)}
            {subItems?.map((item, index) => <SubMenuItem key={index} title={item} />)}
        </>
    );
};
