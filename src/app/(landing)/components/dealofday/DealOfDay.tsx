export const DealOfDay = () => (
  <div className="container" id="093b300a-018d-11ec-9d22-fa163eee4696">
    <div className="section-title js-section-title section-title--with-border        ">
      <div className="section-title__icon-wrapper">
        <svg className="icon-wrapper-icon">
          <use xlinkHref="/svg/bf869f22.svg#icon-megaphone" />
        </svg>
      </div>
      <div className="section-title__title-wrapper">Deal of the Day</div>
    </div>
    <div
      custom-section="093b300a-018d-11ec-9d22-fa163eee4696"
      flash-deals=""
      className="custom-section-wrapper "
      product-impressions='{
            "products": ["1485689357","1755099353"],
            "list": "CustomSection_ss_2019_flash_deals",
            "domain": "Homepage"
        }'
    >
      {/**/}
      {/**/}
      <div ng-if="!customSection.isLoading">
        <div className="custom-section-collection custom-section-collection--grid custom-section-collection--flashdeals">
          {/**/}
          <div ng-repeat="page in customSection.splitPages">
            <div className="custom-section custom-section--triplet">
              {/**/}
              <div
                className="custom-section__tile"
                ng-repeat="tileData in page[0]"
              >
                <div
                  className="product-tile     product-tile--triplet                                  has-discount"
                  ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                  product-tile-id={1485689357}
                  product-tile-modifier="triplet"
                  product-tile=""
                  data-product_grid="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                  section-id="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                  flash-deal-active=""
                  track-add-to-cart-category="mainPage"
                  track-add-to-cart-action="clickTile"
                  track-add-to-cart-label="addToCart"
                  track-add-to-cart-price={141.0}
                  track-add-to-cart-title="Lumencraft"
                  track-add-to-cart-id={1485689357}
                  data-context="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                >
                  <a
                    className="product-tile__content js-content"
                    href="/en/game/lumencraft"
                    ng-href="/en/game/lumencraft"
                  >
                    <div
                      ng-bind="tile.data.title"
                      className="product-tile__title"
                    >
                      Lumencraft
                    </div>
                    <div
                      className="product-tile__cover              has-image"
                      ng-class="{'has-image': tile.data.image}"
                    >
                      {/**/}
                      <picture
                        ng-if="tile.data.image"
                        className="product-tile__cover-picture js-cover-image  lazy"
                      >
                        <source
                          type="image/webp"
                          media="(max-width: 320px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304.webp 1x"
                        />
                        <source
                          type="image/webp"
                          media="(max-width: 414px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398.webp 1x"
                        />
                        <source
                          type="image/webp"
                          media="(max-width: 749px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_536.webp"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_536.webp"
                        />
                        <source
                          type="image/webp"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349_2x.webp 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349.webp 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 320px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_304.jpg 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 414px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_398.jpg 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 749px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_536.jpg"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_536.jpg"
                        />
                        <source
                          type="image/jpeg"
                          lazy-srcset="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349_2x.jpg 2x,
                    //images-1.gog-statics.com/7bbe22fe411bb4c1741a1d066ca500975724bc74d87512b4bf7c446032d2f1a3_product_tile_349.jpg 1x"
                        />
                        <img
                          className="product-tile__cover-img"
                          lazy-src=""
                          alt=""
                        />
                      </picture>
                      {/**/}
                      <div
                        className="product-tile__labels"
                        ng-class="tile.labelClasses"
                      >
                        <span className="product-tile__label product-tile__label--in-library">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#in-library" />
                          </svg>
                          In library
                        </span>
                        <span className="product-tile__label product-tile__label--in-cart">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#in-cart" />
                          </svg>
                          in cart
                        </span>
                        <span className="product-tile__label product-tile__label--is-upcoming">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#is-upcoming" />
                          </svg>
                          soon
                        </span>
                        <span className="product-tile__label product-tile__label--is-wishlisted">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                          </svg>
                          wishlisted
                        </span>
                      </div>
                    </div>
                    <div className="product-tile__info">
                      <div
                        className="product-tile__platforms                  product-tile__platforms--windows product-tile__platforms--linux"
                        ng-class="tile.platformClasses"
                      >
                        <div
                          className="product-tile__labels"
                          ng-class="tile.labelClasses"
                        >
                          <span className="product-tile__label product-tile__label--in-library">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#in-library" />
                            </svg>
                            In library
                          </span>
                          <span className="product-tile__label product-tile__label--in-cart">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#in-cart" />
                            </svg>
                            in cart
                          </span>
                          <span className="product-tile__label product-tile__label--is-upcoming">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#is-upcoming" />
                            </svg>
                            soon
                          </span>
                          <span className="product-tile__label product-tile__label--is-wishlisted">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                            </svg>
                            wishlisted
                          </span>
                        </div>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--windows
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                        </svg>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--mac
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#mac" />
                        </svg>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--linux
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#linux" />
                        </svg>
                        <span
                          className="product-tile__movie-slug ng-hide"
                          ng-show="tile.data.isMovie"
                        >
                          movie
                        </span>
                      </div>
                      <div
                        className="product-tile__buy-block"
                        ng-show="!tile.isTBA && !tile.isGaaS"
                      >
                        <div className="product-tile__prices">
                          {/**/}
                          <span
                            ng-if="tile.data.price.discountPercentage > 0"
                            ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                            className="product-tile__discount"
                          >
                            -35%
                          </span>
                          {/**/}
                          <div className="product-tile__prices-inner">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage > 0"
                              ng-bind="tile.data.price.baseAmount"
                              className="product-tile__price _price"
                            >
                              217.00
                            </span>
                            {/**/}
                            <span
                              ng-bind="tile.data.price.finalAmount"
                              ng-show="tile.isPriceVisible"
                              className="product-tile__price-discounted _price"
                            >
                              141.00
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
                          <svg
                            role="img"
                            className="product-tile__button-image"
                          >
                            {/**/}
                            {/**/}
                            <use
                              ng-if="!tile.data.isInCart"
                              xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart"
                            />
                            {/**/}
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
                    {/**/}
                    <div
                      className="flashdeal-tile-countdown js-tile-counter"
                      ng-if="!customSection.isLoading"
                    >
                      <div
                        end-date={1690376399000}
                        current-date={1690232992000}
                      >
                        39 : 35 : 27 left
                      </div>
                    </div>
                    {/**/}
                    <div className="custom-section__flashdeals-overlay">
                      This offer is gone :(
                      <br />
                      Refresh page for new deals
                    </div>
                  </a>
                </div>
              </div>
              {/**/}
              <div
                className="custom-section__tile"
                ng-repeat="tileData in page[0]"
              >
                <div
                  className="product-tile     product-tile--triplet                                  has-discount"
                  ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                  product-tile-id={1755099353}
                  product-tile-modifier="triplet"
                  product-tile=""
                  data-product_grid="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                  section-id="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                  flash-deal-active=""
                  track-add-to-cart-category="mainPage"
                  track-add-to-cart-action="clickTile"
                  track-add-to-cart-label="addToCart"
                  track-add-to-cart-price="43.10"
                  track-add-to-cart-title="Iron Harvest - Operation Eagle"
                  track-add-to-cart-id={1755099353}
                  data-context="custom-section__093b300a-018d-11ec-9d22-fa163eee4696"
                >
                  <a
                    className="product-tile__content js-content"
                    href="/en/game/iron_harvest_operation_eagle"
                    ng-href="/en/game/iron_harvest_operation_eagle"
                  >
                    <div
                      ng-bind="tile.data.title"
                      className="product-tile__title"
                    >
                      Iron Harvest - Operation Eagle
                    </div>
                    <div
                      className="product-tile__cover              has-image"
                      ng-class="{'has-image': tile.data.image}"
                    >
                      {/**/}
                      <picture
                        ng-if="tile.data.image"
                        className="product-tile__cover-picture js-cover-image  lazy"
                      >
                        <source
                          type="image/webp"
                          media="(max-width: 320px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304.webp 1x"
                        />
                        <source
                          type="image/webp"
                          media="(max-width: 414px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398.webp 1x"
                        />
                        <source
                          type="image/webp"
                          media="(max-width: 749px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_536.webp"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_536.webp"
                        />
                        <source
                          type="image/webp"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349.webp 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349_2x.webp 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349.webp 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 320px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_304.jpg 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 414px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_398.jpg 1x"
                        />
                        <source
                          type="image/jpeg"
                          media="(max-width: 749px)"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_536.jpg"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_536.jpg"
                        />
                        <source
                          type="image/jpeg"
                          lazy-srcset="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349.jpg 1x"
                          srcSet="
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349_2x.jpg 2x,
                    //images-1.gog-statics.com/bcb12b6f7d2f779c1e84a54c7f755d807c24f04e0545095edabc8dfbd2397398_product_tile_349.jpg 1x"
                        />
                        <img
                          className="product-tile__cover-img"
                          lazy-src=""
                          alt=""
                        />
                      </picture>
                      {/**/}
                      <div
                        className="product-tile__labels"
                        ng-class="tile.labelClasses"
                      >
                        <span className="product-tile__label product-tile__label--in-library">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#in-library" />
                          </svg>
                          In library
                        </span>
                        <span className="product-tile__label product-tile__label--in-cart">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#in-cart" />
                          </svg>
                          in cart
                        </span>
                        <span className="product-tile__label product-tile__label--is-upcoming">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#is-upcoming" />
                          </svg>
                          soon
                        </span>
                        <span className="product-tile__label product-tile__label--is-wishlisted">
                          <svg role="img" className="product-tile__label-icon">
                            <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                          </svg>
                          wishlisted
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
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#in-library" />
                            </svg>
                            In library
                          </span>
                          <span className="product-tile__label product-tile__label--in-cart">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#in-cart" />
                            </svg>
                            in cart
                          </span>
                          <span className="product-tile__label product-tile__label--is-upcoming">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#is-upcoming" />
                            </svg>
                            soon
                          </span>
                          <span className="product-tile__label product-tile__label--is-wishlisted">
                            <svg
                              role="img"
                              className="product-tile__label-icon"
                            >
                              <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                            </svg>
                            wishlisted
                          </span>
                        </div>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--windows
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                        </svg>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--mac
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#mac" />
                        </svg>
                        <svg
                          role="img"
                          className="product-tile__platforms-item product-tile__platforms-item--linux
                        "
                          ng-show="!tile.data.isMovie"
                        >
                          <use xlinkHref="/svg/83ce6d0d.svg#linux" />
                        </svg>
                        <span
                          className="product-tile__movie-slug ng-hide"
                          ng-show="tile.data.isMovie"
                        >
                          movie
                        </span>
                      </div>
                      <div
                        className="product-tile__buy-block"
                        ng-show="!tile.isTBA && !tile.isGaaS"
                      >
                        <div className="product-tile__prices">
                          {/**/}
                          <span
                            ng-if="tile.data.price.discountPercentage > 0"
                            ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                            className="product-tile__discount"
                          >
                            -80%
                          </span>
                          {/**/}
                          <div className="product-tile__prices-inner">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage > 0"
                              ng-bind="tile.data.price.baseAmount"
                              className="product-tile__price _price"
                            >
                              215.80
                            </span>
                            {/**/}
                            <span
                              ng-bind="tile.data.price.finalAmount"
                              ng-show="tile.isPriceVisible"
                              className="product-tile__price-discounted _price"
                            >
                              43.10
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
                          <svg
                            role="img"
                            className="product-tile__button-image"
                          >
                            {/**/}
                            {/**/}
                            <use
                              ng-if="!tile.data.isInCart"
                              xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart"
                            />
                            {/**/}
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
                    {/**/}
                    <div
                      className="flashdeal-tile-countdown js-tile-counter"
                      ng-if="!customSection.isLoading"
                    >
                      <div
                        end-date={1690376399000}
                        current-date={1690232992000}
                      >
                        39 : 35 : 28 left
                      </div>
                    </div>
                    {/**/}
                    <div className="custom-section__flashdeals-overlay">
                      This offer is gone :(
                      <br />
                      Refresh page for new deals
                    </div>
                  </a>
                </div>
              </div>
              {/**/}
              {/**/}
              <div
                ng-if="customSection.isLastRow(page, 0) && customSection.isEmptySpaceLeftInPageForFlashInfo() && !!customSection.globalCountdownTime"
                className="custom-section__tile"
              >
                <div
                  className="
         product-tile
                           custom-section__flashdeals-counter-wrapper
         "
                >
                  <div className="product-tile__cover" />
                  <div
                    className="custom-section__flashdeals-counter"
                    ng-hide="customSection.isLoading"
                    end-date={1743631199000}
                    current-date={1690232992000}
                  >
                    {/**/}
                    <span ng-if="!customSection.isMoreDealsComing">
                      Act fast before those deals are gone for good!
                    </span>
                    {/**/}
                    {/**/}
                  </div>
                  <div className="product-tile__info" />
                </div>
              </div>
              {/**/}
              {/**/}
            </div>
          </div>
          {/**/}
        </div>
      </div>
      {/**/}
    </div>
  </div>
);
