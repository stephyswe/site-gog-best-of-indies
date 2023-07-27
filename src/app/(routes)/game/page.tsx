"use client";

import { useEffect } from "react";

// game page
import { ProductLayoutContainerSec } from "./layout-container-sec/LayoutContainerSec";
import { ProductLayoutContainer } from "./layout-container/LayoutContainer";
import { ProductLayoutSeries } from "./layout-series/LayoutSeries";
import { ProductMayLike } from "./may-like/MayLike";
import { ProductSmallScreens } from "./small-screens/SmallScreeens";

export default function GamePage() {
  useEffect(() => {
    // update html tag
    var html: any = document.querySelector("html");
    html.setAttribute("lang", "en");
    html.setAttribute("ng-app", "productcard");
    html.setAttribute("id", "pageTop");
    html.setAttribute("class", "ng-scope");

    var body: any = document.querySelector("body");
    body.setAttribute(
      "class",
      "productcard _prices-in-sek _price-currency-symbol-before"
    );
    body.setAttribute("login-status", null);
  }, []);

  return (
    <>
      <ProductCardPlayer />
      <ProductBackground />
      <ProductSmallScreens />
      <ProductLayoutContainer />
      <ProductLayoutContainerSec />
      <ProductLayoutSeries />
      <ProductMayLike />
    </>
  );
}

const ProductBackground = () => (
  <div className="productcard-background productcard-image"></div>
);

const ProductCardPlayer = () => (
  <div
    //parallax=""
    className="productcard-player productcard-image hide-when-content-is-expanded ng-scope"
  >
    <div
      //player=""
      className="productcard-player__container layout-container layout-container--no-padding ng-scope"
    />
  </div>
);
