"use client";

import { cn } from "@/lib/utils";

import useMenuStore from "../../store/useMenuState";
import { MenuTray } from "./menus/tray";
import { MenuMain } from "./menus/main";
import { Logo } from "./logo";

export const Navbar = () => {
  const store = useMenuStore();
  const isOpen = store.isOpen === true;
  return (
    <>
      <div
        className={cn("menu-overlay", isOpen ? "is-visible" : "")}
        gog-menu-overlay=""
      ></div>
      <nav
        gog-menu=""
        className={cn(
          "menu menu-prices-in-sek menu--windows menu-curr-symbol-before menu-language-en-us",
          isOpen ? "menu--store-expanded menu--expanded" : ""
        )}
      >
        <div className="menu__container">
          <Logo />
          <MenuMain />
          <MenuTray />
        </div>
        <MenuFonts />
      </nav>
    </>
  );
};

const MenuFonts = () => (
  <div className="menu-fonts-preloader">
    <span style={{ fontWeight: 300 }}>.</span>
    <span style={{ fontWeight: 400 }}>.</span>
    <span style={{ fontWeight: 500 }}>.</span>
    <span style={{ fontWeight: 600 }}>.</span>
    <span style={{ fontWeight: 700 }}>.</span>
    <span style={{ fontWeight: 800 }}>.</span>
  </div>
)