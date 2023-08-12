import { ProductItemPrice } from "@/app/(routes)/store/components/expanded/partials/item-price";
import useProductExpandState from "@/store/useProductExpandState";

import { ProductTileReleaseLabel } from "./product-tile-releaselabel/product-tile-releaselabel";
import { ProductTileTitle } from "./product-tile-title/product-tile-title";
import { ProductTitleImage } from "./product-title-image/product-title-image";
import { useRef, useState } from "react";
import { useProductExpandPosState } from "@/store/useProductExpandPosState";

export const ProductTile = ({ id, title, price, href, thumbnail }: any) => {
  const productExpand = useProductExpandState();
  const {setExpandedPosition} = useProductExpandPosState();

  const onMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      // Activate product expand
      productExpand.onOpen(id);
      if (gridItemRef.current) {
        const rect = gridItemRef.current.getBoundingClientRect();
        setExpandedPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }, 500); // 500ms delay
  };

  const onMouseLeave = () => {
    // Clear the timeout if it exists to prevent activation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // any other logic you might want on mouse leave
  };

  const gridItemRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // This ref will handle the timeout

  return (
    <div
      ref={gridItemRef}
      _ngcontent-gogcom-store-c78=""
      className="ng-star-inserted"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/**/}
      <a
        //eventstrackeronviewportenter=""
        className="product-tile product-tile--grid"
        href={href}
        selenium-id="productTile"
        data-product-id={1207658924}
        data-product-index={0}
        data-list-id="57add9e5-b0bf-4b32-9028-65820c9f1992"
        data-list-name="CATALOG_SECTION"
      >
        <ProductTitleImage thumbnail={thumbnail} />
        <div className="product-tile__info">
          <ProductTileTitle title={title} />
          <div className="product-tile__footer">
            <ProductTileReleaseLabel />
            <div className="product-tile__price-info">
              <ProductItemPrice price={price} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
