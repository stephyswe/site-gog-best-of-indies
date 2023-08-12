"use client";

import { useEffect } from "react";

import { Catalog } from "./components/catalog/catalog";
import { ProductTileExpanded } from "./components/expanded/product-tile-expanded";
import { getData } from "@/data/temp-data";

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
  const data = getData;
  if (!data) return null;
  return (
    <>
      <div ng-version="15.1.2" ng-server-context="ssr" className="app-root">
        <div className="wrapper" selenium-id="appWrapper">
          <div className="app__container">
            <div app-page="true">
              <div custom-colors=""></div>
              <Catalog data={data} />
            </div>
          </div>
          <ProductTileExpanded />
        </div>
      </div>
      <div style={{ marginBottom: "300px" }}></div>
    </>
  );
}
