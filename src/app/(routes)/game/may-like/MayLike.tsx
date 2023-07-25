export const ProductMayLike = () => (
    <div
      className="layout-container hide-when-content-is-expanded ng-scope"
      recommended-products=""
      ng-hide="!recommendedProducts.isLoading && recommendedProducts.recommendedProductsIds.length == 0"
    >
      <div className="title ">
        <div className="title__underline-text">You may like these products</div>
        <div className="title__additional-options" />
      </div>
      <div
        className="recommended-products ng-scope"
        ng-class="{
        'is-loading': recommendedProducts.isLoading
    }"
        within-viewport="recommendedProducts.getRecommendedProducts()"
        within-viewport-offset={-600}
      >
        {/* ngRepeat: productId in recommendedProducts.recommendedProductsIds track by productId */}
        <div
          className="product-tile                                       has-discount"
          ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
          product-tile-id={2093619782}
          product-tile-modifier=""
          product-tile=""
          track-add-to-cart-category="productPage"
          track-add-to-cart-action="clickTile"
          track-add-to-cart-label="addToCart"
          track-add-to-cart-price={315}
          track-add-to-cart-title="Cyberpunk 2077"
          track-add-to-cart-id={2093619782}
          ng-repeat="productId in recommendedProducts.recommendedProductsIds track by productId"
        >
          <a
            className="product-tile__content js-content"
            href="/en/game/cyberpunk_2077"
            ng-href="/en/game/cyberpunk_2077"
          >
            <div
              ng-bind="tile.data.title"
              className="product-tile__title ng-binding"
            >
              Cyberpunk 2077
            </div>
            <div
              className="product-tile__cover              has-image"
              ng-class="{'has-image': tile.data.image}"
            >
              {/* ngIf: tile.data.image */}
              <picture
                ng-if="tile.data.image"
                className="product-tile__cover-picture js-cover-image  ng-scope"
              >
                <source
                  type="image/jpeg"
                  media="(max-width: 320px)"
                  ng-srcset="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_304.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_304.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 414px)"
                  ng-srcset="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_195.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_195.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 749px)"
                  ng-srcset="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_hover_398.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_hover_398.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  ng-srcset="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256.jpg 1x"
                />
                <img
                  className="product-tile__cover-img"
                  ng-src="https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256.jpg"
                  alt=""
                  src="https://images.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_product_tile_256.jpg"
                />
              </picture>
              {/* end ngIf: tile.data.image */}
              <div className="product-tile__labels" ng-class="tile.labelClasses">
                <span className="product-tile__label product-tile__label--in-library">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-library" />
                  </svg>
                  In library
                </span>
                <span className="product-tile__label product-tile__label--in-cart">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  In cart
                </span>
                <span className="product-tile__label product-tile__label--is-upcoming">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-upcoming" />
                  </svg>
                  Soon
                </span>
                <span className="product-tile__label product-tile__label--is-wishlisted">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-wishlisted" />
                  </svg>
                  Wishlisted
                </span>
              </div>
            </div>
            <div className="product-tile__info">
              <div
                className="product-tile__platforms                  product-tile__platforms--windows"
                ng-class="tile.platformClasses"
              >
                <div
                  className="product-tile__labels"
                  ng-class="tile.labelClasses"
                >
                  <span className="product-tile__label product-tile__label--in-library">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-library" />
                    </svg>
                    In library
                  </span>
                  <span className="product-tile__label product-tile__label--in-cart">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-cart" />
                    </svg>
                    In cart
                  </span>
                  <span className="product-tile__label product-tile__label--is-upcoming">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-upcoming" />
                    </svg>
                    Soon
                  </span>
                  <span className="product-tile__label product-tile__label--is-wishlisted">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-wishlisted" />
                    </svg>
                    Wishlisted
                  </span>
                </div>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--windows
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#windows" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--mac
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#mac" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--linux
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#linux" />
                </svg>
                <span
                  className="product-tile__movie-slug ng-hide"
                  ng-show="tile.data.isMovie"
                >
                  Movie
                </span>
              </div>
              <div
                className="product-tile__buy-block"
                ng-show="!tile.isTBA && !tile.isGaaS"
              >
                <div className="product-tile__prices">
                  {/* ngIf: tile.data.price.discountPercentage > 0 */}
                  <span
                    ng-if="tile.data.price.discountPercentage > 0"
                    ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                    className="product-tile__discount ng-binding ng-scope"
                  >
                    -50%
                  </span>
                  {/* end ngIf: tile.data.price.discountPercentage > 0 */}
                  <div className="product-tile__prices-inner">
                    {/* ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-if="tile.data.price.discountPercentage > 0"
                      ng-bind="tile.data.price.baseAmount"
                      className="product-tile__price _price ng-binding ng-scope"
                    >
                      630
                    </span>
                    {/* end ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-bind="tile.data.price.finalAmount"
                      ng-show="tile.isPriceVisible"
                      className="product-tile__price-discounted _price ng-binding"
                    >
                      315
                    </span>
                    <span
                      ng-show="tile.isFreeVisible && !tile.isGaaS"
                      className="product-tile__price-discounted ng-hide"
                    >
                      Free
                    </span>
                  </div>
                </div>
                <button
                  className="product-tile__button js-product-tile__button"
                  ng-class="{'product-tile__button--in-cart': tile.data.isInCart}"
                >
                  <svg role="img" className="product-tile__button-image">
                    {/* ngIf: tile.data.isInCart */}
                    {/* ngIf: !tile.data.isInCart */}
                    <use
                      ng-if="!tile.data.isInCart"
                      xlinkHref="#button-add-to-cart"
                      className="ng-scope"
                    />
                    {/* end ngIf: !tile.data.isInCart */}
                  </svg>
                </button>
              </div>
              <span
                ng-show="tile.isGaaS"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Play for free
              </span>
              <span
                ng-show="tile.isTBA"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Coming soon
              </span>
            </div>
          </a>
        </div>
        {/* end ngRepeat: productId in recommendedProducts.recommendedProductsIds track by productId */}
        <div
          className="product-tile

                "
          ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
          product-tile-id={1436760537}
          product-tile-modifier=""
          product-tile=""
          track-add-to-cart-category="productPage"
          track-add-to-cart-action="clickTile"
          track-add-to-cart-label="addToCart"
          track-add-to-cart-price={283}
          track-add-to-cart-title="Return to Monkey Island"
          track-add-to-cart-id={1436760537}
          ng-repeat="productId in recommendedProducts.recommendedProductsIds track by productId"
        >
          <a
            className="product-tile__content js-content"
            href="/en/game/return_to_monkey_island"
            ng-href="/en/game/return_to_monkey_island"
          >
            <div
              ng-bind="tile.data.title"
              className="product-tile__title ng-binding"
            >
              Return to Monkey Island
            </div>
            <div
              className="product-tile__cover              has-image"
              ng-class="{'has-image': tile.data.image}"
            >
              {/* ngIf: tile.data.image */}
              <picture
                ng-if="tile.data.image"
                className="product-tile__cover-picture js-cover-image  ng-scope"
              >
                <source
                  type="image/jpeg"
                  media="(max-width: 320px)"
                  ng-srcset="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_304.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_304.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 414px)"
                  ng-srcset="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_195.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_195.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 749px)"
                  ng-srcset="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_hover_398.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_hover_398.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  ng-srcset="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256.jpg 1x"
                />
                <img
                  className="product-tile__cover-img"
                  ng-src="https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256.jpg"
                  alt=""
                  src="https://images.gog-statics.com/f744339c7f1e0d3b7069b75744de56e61b20b9da631f00d360e7a2f286800c78_product_tile_256.jpg"
                />
              </picture>
              {/* end ngIf: tile.data.image */}
              <div className="product-tile__labels" ng-class="tile.labelClasses">
                <span className="product-tile__label product-tile__label--in-library">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-library" />
                  </svg>
                  In library
                </span>
                <span className="product-tile__label product-tile__label--in-cart">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  In cart
                </span>
                <span className="product-tile__label product-tile__label--is-upcoming">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-upcoming" />
                  </svg>
                  Soon
                </span>
                <span className="product-tile__label product-tile__label--is-wishlisted">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-wishlisted" />
                  </svg>
                  Wishlisted
                </span>
              </div>
            </div>
            <div className="product-tile__info">
              <div
                className="product-tile__platforms                  product-tile__platforms--windows product-tile__platforms--linux product-tile__platforms--mac"
                ng-class="tile.platformClasses"
              >
                <div
                  className="product-tile__labels"
                  ng-class="tile.labelClasses"
                >
                  <span className="product-tile__label product-tile__label--in-library">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-library" />
                    </svg>
                    In library
                  </span>
                  <span className="product-tile__label product-tile__label--in-cart">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-cart" />
                    </svg>
                    In cart
                  </span>
                  <span className="product-tile__label product-tile__label--is-upcoming">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-upcoming" />
                    </svg>
                    Soon
                  </span>
                  <span className="product-tile__label product-tile__label--is-wishlisted">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-wishlisted" />
                    </svg>
                    Wishlisted
                  </span>
                </div>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--windows
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#windows" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--mac
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#mac" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--linux
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#linux" />
                </svg>
                <span
                  className="product-tile__movie-slug ng-hide"
                  ng-show="tile.data.isMovie"
                >
                  Movie
                </span>
              </div>
              <div
                className="product-tile__buy-block"
                ng-show="!tile.isTBA && !tile.isGaaS"
              >
                <div className="product-tile__prices">
                  {/* ngIf: tile.data.price.discountPercentage > 0 */}
                  <div className="product-tile__prices-inner">
                    {/* ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-bind="tile.data.price.finalAmount"
                      ng-show="tile.isPriceVisible"
                      className="product-tile__price-discounted _price ng-binding"
                    >
                      283
                    </span>
                    <span
                      ng-show="tile.isFreeVisible && !tile.isGaaS"
                      className="product-tile__price-discounted ng-hide"
                    >
                      Free
                    </span>
                  </div>
                </div>
                <button
                  className="product-tile__button js-product-tile__button"
                  ng-class="{'product-tile__button--in-cart': tile.data.isInCart}"
                >
                  <svg role="img" className="product-tile__button-image">
                    {/* ngIf: tile.data.isInCart */}
                    {/* ngIf: !tile.data.isInCart */}
                    <use
                      ng-if="!tile.data.isInCart"
                      xlinkHref="#button-add-to-cart"
                      className="ng-scope"
                    />
                    {/* end ngIf: !tile.data.isInCart */}
                  </svg>
                </button>
              </div>
              <span
                ng-show="tile.isGaaS"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Play for free
              </span>
              <span
                ng-show="tile.isTBA"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Coming soon
              </span>
            </div>
          </a>
        </div>
        {/* end ngRepeat: productId in recommendedProducts.recommendedProductsIds track by productId */}
        <div
          className="product-tile                                       has-discount"
          ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
          product-tile-id={1640424747}
          product-tile-modifier=""
          product-tile=""
          track-add-to-cart-category="productPage"
          track-add-to-cart-action="clickTile"
          track-add-to-cart-label="addToCart"
          track-add-to-cart-price="149.7"
          track-add-to-cart-title="The Witcher 3: Wild Hunt - Complete Edition"
          track-add-to-cart-id={1640424747}
          ng-repeat="productId in recommendedProducts.recommendedProductsIds track by productId"
        >
          <a
            className="product-tile__content js-content"
            href="/en/game/the_witcher_3_wild_hunt_game_of_the_year_edition"
            ng-href="/en/game/the_witcher_3_wild_hunt_game_of_the_year_edition"
          >
            <div
              ng-bind="tile.data.title"
              className="product-tile__title ng-binding"
            >
              The Witcher 3: Wild Hunt - Complete Edition
            </div>
            <div
              className="product-tile__cover              has-image"
              ng-class="{'has-image': tile.data.image}"
            >
              {/* ngIf: tile.data.image */}
              <picture
                ng-if="tile.data.image"
                className="product-tile__cover-picture js-cover-image  ng-scope"
              >
                <source
                  type="image/jpeg"
                  media="(max-width: 320px)"
                  ng-srcset="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_304.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_304.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 414px)"
                  ng-srcset="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_195.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_195.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 749px)"
                  ng-srcset="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_hover_398.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_hover_398.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  ng-srcset="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256.jpg 1x"
                />
                <img
                  className="product-tile__cover-img"
                  ng-src="https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256.jpg"
                  alt=""
                  src="https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_tile_256.jpg"
                />
              </picture>
              {/* end ngIf: tile.data.image */}
              <div className="product-tile__labels" ng-class="tile.labelClasses">
                <span className="product-tile__label product-tile__label--in-library">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-library" />
                  </svg>
                  In library
                </span>
                <span className="product-tile__label product-tile__label--in-cart">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  In cart
                </span>
                <span className="product-tile__label product-tile__label--is-upcoming">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-upcoming" />
                  </svg>
                  Soon
                </span>
                <span className="product-tile__label product-tile__label--is-wishlisted">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-wishlisted" />
                  </svg>
                  Wishlisted
                </span>
              </div>
            </div>
            <div className="product-tile__info">
              <div
                className="product-tile__platforms                  product-tile__platforms--windows"
                ng-class="tile.platformClasses"
              >
                <div
                  className="product-tile__labels"
                  ng-class="tile.labelClasses"
                >
                  <span className="product-tile__label product-tile__label--in-library">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-library" />
                    </svg>
                    In library
                  </span>
                  <span className="product-tile__label product-tile__label--in-cart">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-cart" />
                    </svg>
                    In cart
                  </span>
                  <span className="product-tile__label product-tile__label--is-upcoming">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-upcoming" />
                    </svg>
                    Soon
                  </span>
                  <span className="product-tile__label product-tile__label--is-wishlisted">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-wishlisted" />
                    </svg>
                    Wishlisted
                  </span>
                </div>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--windows
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#windows" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--mac
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#mac" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--linux
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#linux" />
                </svg>
                <span
                  className="product-tile__movie-slug ng-hide"
                  ng-show="tile.data.isMovie"
                >
                  Movie
                </span>
              </div>
              <div
                className="product-tile__buy-block"
                ng-show="!tile.isTBA && !tile.isGaaS"
              >
                <div className="product-tile__prices">
                  {/* ngIf: tile.data.price.discountPercentage > 0 */}
                  <span
                    ng-if="tile.data.price.discountPercentage > 0"
                    ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                    className="product-tile__discount ng-binding ng-scope"
                  >
                    -70%
                  </span>
                  {/* end ngIf: tile.data.price.discountPercentage > 0 */}
                  <div className="product-tile__prices-inner">
                    {/* ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-if="tile.data.price.discountPercentage > 0"
                      ng-bind="tile.data.price.baseAmount"
                      className="product-tile__price _price ng-binding ng-scope"
                    >
                      499.4
                    </span>
                    {/* end ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-bind="tile.data.price.finalAmount"
                      ng-show="tile.isPriceVisible"
                      className="product-tile__price-discounted _price ng-binding"
                    >
                      149.7
                    </span>
                    <span
                      ng-show="tile.isFreeVisible && !tile.isGaaS"
                      className="product-tile__price-discounted ng-hide"
                    >
                      Free
                    </span>
                  </div>
                </div>
                <button
                  className="product-tile__button js-product-tile__button"
                  ng-class="{'product-tile__button--in-cart': tile.data.isInCart}"
                >
                  <svg role="img" className="product-tile__button-image">
                    {/* ngIf: tile.data.isInCart */}
                    {/* ngIf: !tile.data.isInCart */}
                    <use
                      ng-if="!tile.data.isInCart"
                      xlinkHref="#button-add-to-cart"
                      className="ng-scope"
                    />
                    {/* end ngIf: !tile.data.isInCart */}
                  </svg>
                </button>
              </div>
              <span
                ng-show="tile.isGaaS"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Play for free
              </span>
              <span
                ng-show="tile.isTBA"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Coming soon
              </span>
            </div>
          </a>
        </div>
        {/* end ngRepeat: productId in recommendedProducts.recommendedProductsIds track by productId */}
        <div
          className="product-tile

                "
          ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
          product-tile-id={1771589310}
          product-tile-modifier=""
          product-tile=""
          track-add-to-cart-category="productPage"
          track-add-to-cart-action="clickTile"
          track-add-to-cart-label="addToCart"
          track-add-to-cart-price={462}
          track-add-to-cart-title="Disco Elysium - The Final Cut"
          track-add-to-cart-id={1771589310}
          ng-repeat="productId in recommendedProducts.recommendedProductsIds track by productId"
        >
          <a
            className="product-tile__content js-content"
            href="/en/game/disco_elysium"
            ng-href="/en/game/disco_elysium"
          >
            <div
              ng-bind="tile.data.title"
              className="product-tile__title ng-binding"
            >
              Disco Elysium - The Final Cut
            </div>
            <div
              className="product-tile__cover              has-image"
              ng-class="{'has-image': tile.data.image}"
            >
              {/* ngIf: tile.data.image */}
              <picture
                ng-if="tile.data.image"
                className="product-tile__cover-picture js-cover-image  ng-scope"
              >
                <source
                  type="image/jpeg"
                  media="(max-width: 320px)"
                  ng-srcset="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_304.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_304_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_304.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 414px)"
                  ng-srcset="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_195.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_195_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_195.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  media="(max-width: 749px)"
                  ng-srcset="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_hover_398.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_hover_398_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_hover_398.jpg 1x"
                />
                <source
                  type="image/jpeg"
                  ng-srcset="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256.jpg 1x"
                  srcSet="
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256_2x.jpg 2x,
                https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256.jpg 1x"
                />
                <img
                  className="product-tile__cover-img"
                  ng-src="https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256.jpg"
                  alt=""
                  src="https://images.gog-statics.com/b0864505790d5178ededf477e1b28d3f96ccba8082ca6c6bacc10354e40201cd_product_tile_256.jpg"
                />
              </picture>
              {/* end ngIf: tile.data.image */}
              <div className="product-tile__labels" ng-class="tile.labelClasses">
                <span className="product-tile__label product-tile__label--in-library">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-library" />
                  </svg>
                  In library
                </span>
                <span className="product-tile__label product-tile__label--in-cart">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  In cart
                </span>
                <span className="product-tile__label product-tile__label--is-upcoming">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-upcoming" />
                  </svg>
                  Soon
                </span>
                <span className="product-tile__label product-tile__label--is-wishlisted">
                  <svg role="img" className="product-tile__label-icon">
                    <use xlinkHref="#is-wishlisted" />
                  </svg>
                  Wishlisted
                </span>
              </div>
            </div>
            <div className="product-tile__info">
              <div
                className="product-tile__platforms                  product-tile__platforms--windows product-tile__platforms--mac"
                ng-class="tile.platformClasses"
              >
                <div
                  className="product-tile__labels"
                  ng-class="tile.labelClasses"
                >
                  <span className="product-tile__label product-tile__label--in-library">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-library" />
                    </svg>
                    In library
                  </span>
                  <span className="product-tile__label product-tile__label--in-cart">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#in-cart" />
                    </svg>
                    In cart
                  </span>
                  <span className="product-tile__label product-tile__label--is-upcoming">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-upcoming" />
                    </svg>
                    Soon
                  </span>
                  <span className="product-tile__label product-tile__label--is-wishlisted">
                    <svg role="img" className="product-tile__label-icon">
                      <use xlinkHref="#is-wishlisted" />
                    </svg>
                    Wishlisted
                  </span>
                </div>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--windows
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#windows" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--mac
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#mac" />
                </svg>
                <svg
                  role="img"
                  className="product-tile__platforms-item product-tile__platforms-item--linux
                    "
                  ng-show="!tile.data.isMovie"
                >
                  <use xlinkHref="#linux" />
                </svg>
                <span
                  className="product-tile__movie-slug ng-hide"
                  ng-show="tile.data.isMovie"
                >
                  Movie
                </span>
              </div>
              <div
                className="product-tile__buy-block"
                ng-show="!tile.isTBA && !tile.isGaaS"
              >
                <div className="product-tile__prices">
                  {/* ngIf: tile.data.price.discountPercentage > 0 */}
                  <div className="product-tile__prices-inner">
                    {/* ngIf: tile.data.price.discountPercentage > 0 */}
                    <span
                      ng-bind="tile.data.price.finalAmount"
                      ng-show="tile.isPriceVisible"
                      className="product-tile__price-discounted _price ng-binding"
                    >
                      462
                    </span>
                    <span
                      ng-show="tile.isFreeVisible && !tile.isGaaS"
                      className="product-tile__price-discounted ng-hide"
                    >
                      Free
                    </span>
                  </div>
                </div>
                <button
                  className="product-tile__button js-product-tile__button"
                  ng-class="{'product-tile__button--in-cart': tile.data.isInCart}"
                >
                  <svg role="img" className="product-tile__button-image">
                    {/* ngIf: tile.data.isInCart */}
                    {/* ngIf: !tile.data.isInCart */}
                    <use
                      ng-if="!tile.data.isInCart"
                      xlinkHref="#button-add-to-cart"
                      className="ng-scope"
                    />
                    {/* end ngIf: !tile.data.isInCart */}
                  </svg>
                </button>
              </div>
              <span
                ng-show="tile.isGaaS"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Play for free
              </span>
              <span
                ng-show="tile.isTBA"
                className="product-tile__no-buy-block-slug ng-hide"
              >
                Coming soon
              </span>
            </div>
          </a>
        </div>
        {/* end ngRepeat: productId in recommendedProducts.recommendedProductsIds track by productId */}
        <div className="dots recommended-products__spinner">
          <span className="dots__single-dot dots__single-dot--1" />
          <span className="dots__single-dot dots__single-dot--2" />
          <span className="dots__single-dot dots__single-dot--3" />
        </div>
      </div>
    </div>
  )
