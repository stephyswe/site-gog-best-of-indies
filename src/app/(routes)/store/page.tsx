"use client";

import { useEffect } from "react";

import { Catalog } from "./Catalog";
import { ProductTileExpanded } from "./components/expanded/product-tile-expanded";

export default function StorePage() {
  useEffect(() => {
    // update html tag
    var html: any = document.querySelector("html");
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");

    var body: any = document.querySelector("body");
    body.setAttribute("class", "light-theme");
  }, []);

  // handle with useProductExpandState

  return (
    <>
      <div ng-version="15.1.2" ng-server-context="ssr" className="app-root">
        <div className="wrapper" selenium-id="appWrapper">
          <div className="app__container">
            <div app-page="true">
              <div custom-colors=""></div>
              <Catalog />
            </div>
          </div>
          <ProductTileExpanded />
        </div>
      </div>
      <div style={{ marginBottom: "300px" }}></div>
    </>
  );
}
