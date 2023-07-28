import { updatedDataProductTiles } from "@/data/temp-data";
import useProductExpandState from "@/store/useProductExpandState";

import { ProductItemFeatures } from "./partials/item-features";
import { ProductItemLanguage } from "./partials/item-language";
import { ProductItemOS } from "./partials/item-os";
import { ProductItemPrice } from "./partials/item-price";
import { ProductItemRating } from "./partials/item-rating";
import { ProductTitle } from "./partials/item-title";
import { ProductExpandedSlider } from "./product-expanded-slider";

export const ProductTileExpanded = () => {
  const productExpanded = useProductExpandState();
  if (!productExpanded.isOpen) return <div></div>;
  const id = productExpanded.idOpen;
  const product = updatedDataProductTiles.find((product) => product.id === id);

  const {
    title,
    href,
    price,
    expanded: { os, language, rating, tags, features },
  } = product!;

  return null;

  return (
    <div>
      <div
        _nghost-gogcom-store-c47=""
        className="ng-tns-c47-15 ng-trigger ng-trigger-mount ng-star-inserted ng-animating"
        selenium-id="productTileExtended"
        style={{
          width: 432,
          minHeight: "391.885px",
          top: "129.206px",
          left: "590.164px",
        }}
      >
        <a
          _ngcontent-gogcom-store-c47=""
          //customcolors=""
          className="ng-tns-c47-15"
          href={href}
        >
          <ProductExpandedSlider />
          <div
            _ngcontent-gogcom-store-c47=""
            className="product-tile-extended__content-wrapper ng-tns-c47-15"
            selenium-id="productTileExtendedContent"
          >
            <div _ngcontent-gogcom-store-c47="" className="ng-tns-c47-15">
              <ProductTitle title={title} />
              <div _ngcontent-gogcom-store-c47="" className="ng-tns-c47-15">
                <div
                  _ngcontent-gogcom-store-c47=""
                  className="product-tile-extended__row ng-tns-c47-15"
                >
                  <div
                    _ngcontent-gogcom-store-c47=""
                    className="product-tile-extended__row-segment ng-tns-c47-15"
                  >
                    <ProductItemOS os={os} />
                    <ProductItemLanguage language={language} />
                  </div>
                  <ProductItemRating rating={rating} />
                </div>
                <div
                  _ngcontent-gogcom-store-c47=""
                  className="ng-tns-c47-15"
                  _nghost-gogcom-store-c42=""
                  selenium-id="productTileExtendedProductTags"
                >
                  {tags.join(", ")}
                </div>
                <ProductItemFeatures features={features} />
              </div>
            </div>
            <div
              _ngcontent-gogcom-store-c47=""
              className="product-tile-extended__row align-bottom ng-tns-c47-15"
            >
              <div
                _ngcontent-gogcom-store-c47=""
                className="ng-tns-c47-15"
              ></div>
              <ProductItemPrice
                className="ng-tns-c47-15"
                addToCart
                price={price}
              />
            </div>
          </div>
          <ProductTitleExtendedLabel />
        </a>
      </div>
    </div>
  );
};

const ProductTitleExtendedLabel = () => (
  <div
    _ngcontent-gogcom-store-c47=""
    className="ng-tns-c47-15"
    _nghost-gogcom-store-c40=""
    selenium-id="productTileExtendedProductLabel"
  ></div>
);
