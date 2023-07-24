import { useState } from "react";

import { MenuItem, MenuSeparator, SubMenuItem } from "./NavPartials";
import { SectionClassical } from "./section-classical";

export const MenuList = ({ items, subItems }: any) => {
  const [isMenuActive, setMenuActive] = useState("");

  return (
    <>
      {isMenuActive === "Good Old Games" ? <SectionClassical /> : null}
      {items &&
        items.map((item: any, index: number) => {
          if (item.title === "separator") return <MenuSeparator key={index} />;
          if (item.type === "submenu")
            return <SubMenuItem key={item.title} {...item} />;
          return (
            <MenuItem
              key={item.title}
              {...item}
              isMenuActive={isMenuActive}
              setMenuActive={setMenuActive}
            />
          );
        })}
      {subItems &&
        subItems.map((item: any, index: number) => {
          return <SubMenuItem key={index} title={item} />;
        })}
    </>
  );
};
