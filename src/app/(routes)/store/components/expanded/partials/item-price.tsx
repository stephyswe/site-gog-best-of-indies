const ProductItemAddToCart = () => (
  <div
    _ngcontent-gogcom-store-c39=""
    selenium-id="productPriceAddToCartButton"
    className="ng-star-inserted"
    style={{}}
  >
    <button
      className="button-primary add-to-cart"
      selenium-id="addToCartButton"
    >
      <span
        className="add-to-cart__icon icon-gog-cart ng-star-inserted"
        selenium-id="addToCartButtonIconAddToCart"
      />
    </button>
  </div>
);

export const PriceDiscount = ({ price }: any) => {
  const { before, current } = price;
  if (!before) return null;
  const priceDropPercentage = Math.round(((before - current) / before) * 100);

  if (priceDropPercentage === 0) return null;

  return (
    <div
      _ngcontent-gogcom-store-c39=""
      _nghost-gogcom-store-c37=""
      selenium-id="productPriceDiscount"
      className="ng-star-inserted"
      style={{}}
    >
      -{priceDropPercentage}%
    </div>
  );
};

const ProductPriceBefore = ({ price }: any) => {
  if (!price.before) return null;
  return (
    <span
      _ngcontent-gogcom-store-c38=""
      className="base-value ng-star-inserted"
    >
      {price.currency}&nbsp;{price.before}
    </span>
  );
};

export const ProductItemPrice = ({ price, addToCart, className }: any) => (
  <div
    _ngcontent-gogcom-store-c47=""
    className={className}
    _nghost-gogcom-store-c39=""
    selenium-id="productPrice"
  >
    <PriceDiscount price={price} />
    <div
      _ngcontent-gogcom-store-c39=""
      _nghost-gogcom-store-c38=""
      selenium-id="productPriceValue"
      className="ng-star-inserted"
      style={{}}
    >
      <ProductPriceBefore price={price} />
      <span _ngcontent-gogcom-store-c38="" className="final-value">
        {price.currency}&nbsp;{price.current}
      </span>
    </div>
    {addToCart ? <ProductItemAddToCart /> : null}
  </div>
);
