export const ProductLayoutSeries = () => (
    <div
      className="layout-container series hide-when-content-is-expanded has-product-tiles-and-transform ng-scope"
      //series=""
      within-viewport-only-once="trackEvent.sendEvent({eventAction: 'scroll', eventCategory: 'productPageGameSeries', eventLabel: 'GameSeries'})"
    >
      <div className="title ">
        <div className="title__underline-text">Buy series (4)</div>
        <div className="title__additional-options">
          <span
            className="series__buy-all ng-scope"
            ng-click="series.buyAll()"
            ng-hide="series.isInCart || series.userOwnsAllGames"
            gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameSeries', eventLabel: 'Series_addToCart_series Prince of Persia®: The Sands of Time'}"
          >
            <svg className="ic-svg series__cart-icon">
              <use xlinkHref="#add-to-cart" />
            </svg>
            Buy all series for{" "}
            <span
              className="_price ng-binding"
              ng-bind="series.price.finalAmount|number:2"
            >
              88.50
            </span>
          </span>
          <a
            className="series__buy-all ng-hide"
            ng-show="series.isInCart && !series.userOwnsAllGames"
            href="/checkout"
          >
            <svg className="ic-svg series__cart-icon">
              <use xlinkHref="#in-cart" />
            </svg>
            Check out now
          </a>
        </div>
      </div>
      <div
        className="
        series__slider
        productcard-slider
        hide-when-content-is-expanded
        has-product-tiles-and-transform
        _gog-module-slider
                "
        data-overflow-class="_gog-module-slider__items-container"
      >
        <div
          className="
        series__slider-items-container
        productcard-slider__items-container
        has-product-tiles-and-transform
        _gog-module-slider__items-container
    "
        >
          <div className="js-items-wrapper series__slider-items">
            <div
              className="
                    productcard-slider__slide
                    series-slider__slide
                    js-item
                    slider__item
                    _gog-slider__item
                "
            >
              <div
                className="product-tile                          ng-scope has-discount"
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207658747}
                product-tile-modifier=""
                product-tile=""
                track-add-to-cart-category="productPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="19.5"
                track-add-to-cart-title="Prince of Persia®: The Sands of Time"
                track-add-to-cart-id={1207658747}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/prince_of_persia_the_sands_of_time"
                  ng-href="/en/game/prince_of_persia_the_sands_of_time"
                >
                  <div
                    ng-bind="tile.data.title"
                    className="product-tile__title ng-binding"
                  >
                    Prince of Persia®: The Sands of Time
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image">
                      <source
                        type="image/jpeg"
                        media="(max-width: 320px)"
                        srcSet="
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_304_2x.jpg
   2x,
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_304.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 414px)"
                        srcSet="
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_195_2x.jpg
   2x,
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_195.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        srcSet="
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_hover_398_2x.jpg
   2x,
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_hover_398.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_256_2x.jpg
   2x,
                    https://images.gog-statics.com/b39f745aea99e997ec9eb2052761bdb3e93985e8eb07c23b54c86c448350da9f_product_tile_256.jpg
   1x"
                      />
                      <img className="product-tile__cover-img" src="" alt="" />
                    </picture>
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
                  </div>
                  <div className="product-tile__info">
                    <div
                      className="product-tile__platforms
                                product-tile__platforms--windows
            "
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
              <div
                className="product-tile                          ng-scope has-discount"
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207659082}
                product-tile-modifier=""
                product-tile=""
                track-add-to-cart-category="productPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={23}
                track-add-to-cart-title="Prince of Persia: Warrior Within"
                track-add-to-cart-id={1207659082}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/prince_of_persia_warrior_within"
                  ng-href="/en/game/prince_of_persia_warrior_within"
                >
                  <div
                    ng-bind="tile.data.title"
                    className="product-tile__title ng-binding"
                  >
                    Prince of Persia: Warrior Within
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image">
                      <source
                        type="image/jpeg"
                        media="(max-width: 320px)"
                        srcSet="
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_304_2x.jpg
   2x,
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_304.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 414px)"
                        srcSet="
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_195_2x.jpg
   2x,
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_195.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        srcSet="
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_hover_398_2x.jpg
   2x,
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_hover_398.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_256_2x.jpg
   2x,
                    https://images.gog-statics.com/80b9c3f18cb3c38c0afe796a43e3eadf5482b2388f09ea5a5102adc70a90dd7e_product_tile_256.jpg
   1x"
                      />
                      <img className="product-tile__cover-img" src="" alt="" />
                    </picture>
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
                  </div>
                  <div className="product-tile__info">
                    <div
                      className="product-tile__platforms
                                product-tile__platforms--windows
            "
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
              <div
                className="product-tile                          ng-scope has-discount"
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207659091}
                product-tile-modifier=""
                product-tile=""
                track-add-to-cart-category="productPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={23}
                track-add-to-cart-title="Prince of Persia: The Two Thrones"
                track-add-to-cart-id={1207659091}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/prince_of_persia_the_two_thrones"
                  ng-href="/en/game/prince_of_persia_the_two_thrones"
                >
                  <div
                    ng-bind="tile.data.title"
                    className="product-tile__title ng-binding"
                  >
                    Prince of Persia: The Two Thrones
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image">
                      <source
                        type="image/jpeg"
                        media="(max-width: 320px)"
                        srcSet="
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_304_2x.jpg
   2x,
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_304.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 414px)"
                        srcSet="
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_195_2x.jpg
   2x,
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_195.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        srcSet="
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_hover_398_2x.jpg
   2x,
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_hover_398.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_256_2x.jpg
   2x,
                    https://images.gog-statics.com/dbff543e65d4b28e73efca18e0c395a1d3bffadee59513fff00ea3d83735f6c8_product_tile_256.jpg
   1x"
                      />
                      <img className="product-tile__cover-img" src="" alt="" />
                    </picture>
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
                  </div>
                  <div className="product-tile__info">
                    <div
                      className="product-tile__platforms
                                product-tile__platforms--windows
            "
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
              <div
                className="product-tile                          ng-scope has-discount"
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207659109}
                product-tile-modifier=""
                product-tile=""
                track-add-to-cart-category="productPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={23}
                track-add-to-cart-title="Prince of Persia"
                track-add-to-cart-id={1207659109}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/prince_of_persia"
                  ng-href="/en/game/prince_of_persia"
                >
                  <div
                    ng-bind="tile.data.title"
                    className="product-tile__title ng-binding"
                  >
                    Prince of Persia
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image">
                      <source
                        type="image/jpeg"
                        media="(max-width: 320px)"
                        srcSet="
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_304_2x.jpg
   2x,
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_304.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 414px)"
                        srcSet="
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_195_2x.jpg
   2x,
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_195.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        srcSet="
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_hover_398_2x.jpg
   2x,
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_hover_398.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        srcSet="
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_256_2x.jpg
   2x,
                    https://images.gog-statics.com/465413237cb962d9b0ded6b3eaaaa96ea78d029c39b68f00e10f3727fad7f7e3_product_tile_256.jpg
   1x"
                      />
                      <img className="product-tile__cover-img" src="" alt="" />
                    </picture>
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
                  </div>
                  <div className="product-tile__info">
                    <div
                      className="product-tile__platforms
                                product-tile__platforms--windows
            "
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
            </div>
          </div>
        </div>
        {/* ngIf: 4 > slider.galleryItemsPerPage */}
      </div>
    </div>
  )
