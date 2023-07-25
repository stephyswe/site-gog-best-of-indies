export const LandingDiscoverGames = () => (
    <div className="container container--two-columns">
      <div className="container--two-columns__child--discover-games">
        <div
          tabbed-section="discover_games"
          data-default-tab="popular"
          data-extra-value="showMoreLink"
          className="tabbed-section "
        >
          <div className="tabbed-section__head discover-games__header js-head">
            <div className="section-title js-section-title         tabbed-section__title  ">
              <div className="section-title__icon-wrapper">
                <svg className="icon-wrapper-icon">
                  <use xlinkHref="/svg/bf869f22.svg#icon-compass" />
                </svg>
              </div>
              <div className="section-title__title-wrapper">Discover games</div>
            </div>
            <div className="tabs-wrapper  tabs-wrapper--shift-breakpoint-1 js-tabs-wrapper">
              <div
                ng-show="!tabbedSection.sectionReady"
                className="tabbed-section__tab tabbed-section__tab--active tab-placeholder ng-hide"
              >
                Bestselling
              </div>
              {/**/}
              <div
                ng-repeat="visibleTab in tabbedSection.visibleTabs track by $index"
                ng-click="tabbedSection.retrieveProducts(visibleTab)"
                className="tabbed-section__tab js-section-tab tabbed-section__tab--active js-active-tab"
                ng-class="{
                'tabbed-section__tab--active js-active-tab': tabbedSection.activeTabTranslation === visibleTab,
                'tabs-not-ready': !tabbedSection.sectionReady
            }"
              >
                Bestselling
              </div>
              {/**/}
              <div
                ng-repeat="visibleTab in tabbedSection.visibleTabs track by $index"
                ng-click="tabbedSection.retrieveProducts(visibleTab)"
                className="tabbed-section__tab js-section-tab"
                ng-class="{
                'tabbed-section__tab--active js-active-tab': tabbedSection.activeTabTranslation === visibleTab,
                'tabs-not-ready': !tabbedSection.sectionReady
            }"
              >
                New
              </div>
              {/**/}
              <div
                ng-repeat="visibleTab in tabbedSection.visibleTabs track by $index"
                ng-click="tabbedSection.retrieveProducts(visibleTab)"
                className="tabbed-section__tab js-section-tab"
                ng-class="{
                'tabbed-section__tab--active js-active-tab': tabbedSection.activeTabTranslation === visibleTab,
                'tabs-not-ready': !tabbedSection.sectionReady
            }"
              >
                Upcoming
              </div>
              {/**/}
              {/**/}
            </div>
          </div>
          {/**/}
          <div
            className="discover-games__products"
            product-impressions='{
            "products": ["1456460669","1256837418","1428305992","1207660013","1207658696","1380961633","1268757981","1412601690","1900745791","1520361304"],
            "list": "DiscoverGames",
            "domain": "Homepage"
        }'
          >
            <div ng-show="tabbedSection.activeTab === 'popular'">
              <div
                className="product-tile
      product-tile--list                    "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1456460669}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={678.0}
                track-add-to-cart-title="Baldur's Gate 3"
                track-add-to-cart-id={1456460669}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={0}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/baldurs_gate_iii"
                  ng-href="/en/game/baldurs_gate_iii"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Baldurs Gate 3
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116_2x.webp
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116.webp
   1x"
                        srcSet="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116_2x.webp
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136_2x.webp
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136.webp
   1x"
                        srcSet="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136_2x.webp
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116_2x.jpg
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116_2x.jpg
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136_2x.jpg
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136_2x.jpg
   2x,
                    //images-3.gog-statics.com/da2b2d57e2b8654397043377654b1aa3ce6c11a03435c9afa28325e4f0fcc610_product_tile_136.jpg
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
                      className="product-tile__platforms
                                product-tile__platforms--mac
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
                        <div className="product-tile__prices-inner">
                          {/**/}
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            678.00
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                    "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1256837418}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="323.80"
                track-add-to-cart-title="Cyberpunk 2077: Phantom Liberty"
                track-add-to-cart-id={1256837418}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={1}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/cyberpunk_2077_phantom_liberty"
                  ng-href="/en/game/cyberpunk_2077_phantom_liberty"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Cyberpunk 2077: Phantom Liberty
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116_2x.webp
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116.webp
   1x"
                        srcSet="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116_2x.webp
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136_2x.webp
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136.webp
   1x"
                        srcSet="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136_2x.webp
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116_2x.jpg
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116_2x.jpg
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136_2x.jpg
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136_2x.jpg
   2x,
                    //images-1.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_tile_136.jpg
   1x"
                      />
                      <img className="product-tile__cover-img" src="" alt="" />
                    </picture>
                    <div
                      className="product-tile__labels product-tile__labels--is-upcoming"
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
                      className="product-tile__platforms
                                product-tile__platforms--windows
            "
                      ng-class="tile.platformClasses"
                    >
                      <div
                        className="product-tile__labels product-tile__labels--is-upcoming"
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
                        <div className="product-tile__prices-inner">
                          {/**/}
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            323.80
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                has-discount
            "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1428305992}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="46.20"
                track-add-to-cart-title="Warhammer: Chaosbane Slayer Edition"
                track-add-to-cart-id={1428305992}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={2}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/warhammer_chaosbane_slayer_edition"
                  ng-href="/en/game/warhammer_chaosbane_slayer_edition"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Warhammer: Chaosbane Slayer Edition
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_136.jpg
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
                        <span
                          ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                          className="product-tile__discount"
                        >
                          -90%
                        </span>
                        <div className="product-tile__prices-inner">
                          <span
                            ng-bind="tile.data.price.baseAmount"
                            className="product-tile__price _price"
                          >
                            462.40
                          </span>
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            46.20
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                has-discount
            "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207660013}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="21.50"
                track-add-to-cart-title="Rune Classic"
                track-add-to-cart-id={1207660013}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={3}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/rune_classic"
                  ng-href="/en/game/rune_classic"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Rune Classic
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/aaba7de32452f6cba243f80ac597e08e404913db90084b6a7bf817f12e5c01e5_product_tile_136.jpg
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
                        <span
                          ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                          className="product-tile__discount"
                        >
                          -80%
                        </span>
                        <div className="product-tile__prices-inner">
                          <span
                            ng-bind="tile.data.price.baseAmount"
                            className="product-tile__price _price"
                          >
                            107.80
                          </span>
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            21.50
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                    "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1207658696}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={54.0}
                track-add-to-cart-title="Jagged Alliance 2"
                track-add-to-cart-id={1207658696}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={4}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/jagged_alliance_2"
                  ng-href="/en/game/jagged_alliance_2"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Jagged Alliance 2
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/0bd69a02f78359063bcba7966ed6941d0efbd74c9bdf3a04f938e862fed98961_product_tile_136.jpg
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
                        <div className="product-tile__prices-inner">
                          {/**/}
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            54.00
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                has-discount
            "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1380961633}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="6.80"
                track-add-to-cart-title="Desert Law"
                track-add-to-cart-id={1380961633}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={5}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/desert_law"
                  ng-href="/en/game/desert_law"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Desert Law
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/533ae7499afa15f10681cd75cc5aad296f752d9ce8fddcf3af0435672bb01d8d_product_tile_136.jpg
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
                        <span
                          ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                          className="product-tile__discount"
                        >
                          -80%
                        </span>
                        <div className="product-tile__prices-inner">
                          <span
                            ng-bind="tile.data.price.baseAmount"
                            className="product-tile__price _price"
                          >
                            34.00
                          </span>
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            6.80
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                has-discount
            "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1268757981}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="29.90"
                track-add-to-cart-title="The Incredible Adventures of Van Helsing: Final Cut"
                track-add-to-cart-id={1268757981}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={6}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/the_incredible_adventures_of_van_helsing_final_cut"
                  ng-href="/en/game/the_incredible_adventures_of_van_helsing_final_cut"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    The Incredible Adventures of Van Helsing: Final Cut
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_136.jpg
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
                        <span
                          ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                          className="product-tile__discount"
                        >
                          -90%
                        </span>
                        <div className="product-tile__prices-inner">
                          <span
                            ng-bind="tile.data.price.baseAmount"
                            className="product-tile__price _price"
                          >
                            300.00
                          </span>
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            29.90
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                    "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1412601690}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="107.80"
                track-add-to-cart-title="Diablo + Hellfire"
                track-add-to-cart-id={1412601690}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={7}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/diablo"
                  ng-href="/en/game/diablo"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Diablo + Hellfire
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116_2x.webp
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136.webp
   1x"
                        srcSet="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136_2x.webp
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116_2x.jpg
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136_2x.jpg
   2x,
                    //images-2.gog-statics.com/2a351ec2315d2b082c120a1499434480758e56603d2cf21a93e544300c0f3829_product_tile_136.jpg
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
                        <div className="product-tile__prices-inner">
                          {/**/}
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            107.80
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                    "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1900745791}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price={60.0}
                track-add-to-cart-title="Tomb Raider: Underworld"
                track-add-to-cart-id={1900745791}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={8}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/tomb_raider_underworld"
                  ng-href="/en/game/tomb_raider_underworld"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Tomb Raider: Underworld
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116_2x.webp
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136.webp
   1x"
                        srcSet="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136_2x.webp
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116_2x.jpg
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136_2x.jpg
   2x,
                    //images-4.gog-statics.com/93ed2f65c201ee3bb0323de19946175bb0c4e4abda5b637574064c89c0cd12af_product_tile_136.jpg
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
                        <div className="product-tile__prices-inner">
                          {/**/}
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            60.00
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
                </a>
              </div>
              <div
                className="product-tile
      product-tile--list                has-discount
            "
                ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                product-tile-id={1520361304}
                product-tile-modifier="list"
                product-tile=""
                track-add-to-cart-category="mainPage"
                track-add-to-cart-action="clickTile"
                track-add-to-cart-label="addToCart"
                track-add-to-cart-price="34.70"
                track-add-to-cart-title="Tower Hunter: Erzas Trial"
                track-add-to-cart-id={1520361304}
                data-context="discover_games#popular"
                section-id="discover_games#popular"
                //position={9}
              >
                <a
                  className="product-tile__content js-content"
                  href="/en/game/tower_hunter_erzas_trial"
                  ng-href="/en/game/tower_hunter_erzas_trial"
                >
                  <div ng-bind="tile.data.title" className="product-tile__title">
                    Tower Hunter: Erzas Trial
                  </div>
                  <div
                    className="product-tile__cover
        has-image"
                    ng-class="{'has-image': tile.data.image}"
                  >
                    <picture className="product-tile__cover-picture js-cover-image lazy">
                      <source
                        type="image/webp"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116_2x.webp
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116.webp
   1x"
                        srcSet="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116_2x.webp
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116.webp
   1x"
                      />
                      <source
                        type="image/webp"
                        lazy-srcset="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136_2x.webp
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136.webp
   1x"
                        srcSet="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136_2x.webp
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136.webp
   1x"
                      />
                      <source
                        type="image/jpeg"
                        media="(max-width: 749px)"
                        lazy-srcset="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116_2x.jpg
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116.jpg
   1x"
                        srcSet="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116_2x.jpg
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_116.jpg
   1x"
                      />
                      <source
                        type="image/jpeg"
                        lazy-srcset="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136_2x.jpg
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136.jpg
   1x"
                        srcSet="
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136_2x.jpg
   2x,
                    //images-1.gog-statics.com/2039eb6c42bd533330a24a2c1064c15fefc6154472cd48b094ed8e77888c377f_product_tile_136.jpg
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
                        <span
                          ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                          className="product-tile__discount"
                        >
                          -80%
                        </span>
                        <div className="product-tile__prices-inner">
                          <span
                            ng-bind="tile.data.price.baseAmount"
                            className="product-tile__price _price"
                          >
                            173.30
                          </span>
                          <span
                            ng-bind="tile.data.price.finalAmount"
                            ng-show="tile.isPriceVisible"
                            className="product-tile__price-discounted _price"
                          >
                            34.70
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
                </a>
              </div>
            </div>
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            <div
              ng-repeat="tab in tabbedSection.tabs"
              ng-if="tab.tabId !== tabbedSection.defaultTab"
              ng-show="tabbedSection.activeTab === tab.tabId"
              className="ng-hide"
            >
              {/**/}
            </div>
            {/**/}
            {/**/}
            {/**/}
            <div
              ng-repeat="tab in tabbedSection.tabs"
              ng-if="tab.tabId !== tabbedSection.defaultTab"
              ng-show="tabbedSection.activeTab === tab.tabId"
              className="ng-hide"
            >
              {/**/}
            </div>
            {/**/}
            {/**/}
            <a
              className="discover-games-more"
              ng-show="!tabbedSection.productsLoading && tabbedSection.activeTab === 'popular'"
              href="/games"
            >
              <div className="discover-games-more__text">Show more</div>
              <svg className="discover-games-more__icon cc-fill-secondary">
                <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
              </svg>
            </a>
            <a
              className="discover-games-more ng-hide"
              ng-show="!tabbedSection.productsLoading && tabbedSection.activeTab === 'new'"
              href="/games/new"
            >
              <div className="discover-games-more__text">Show more</div>
              <svg className="discover-games-more__icon cc-fill-secondary">
                <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
              </svg>
            </a>
            <a
              className="discover-games-more ng-hide"
              ng-show="!tabbedSection.productsLoading && tabbedSection.activeTab === 'upcoming'"
              href="/games?releaseStatuses=upcoming"
            >
              <div className="discover-games-more__text">Show more</div>
              <svg className="discover-games-more__icon cc-fill-secondary">
                <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container--two-columns__child--curated-collection">
        <div className="section-title js-section-title section-title--with-border        ">
          <div className="section-title__icon-wrapper">
            <svg className="icon-wrapper-icon">
              <use xlinkHref="/svg/bf869f22.svg#icon-snapshots" />
            </svg>
          </div>
          <div className="section-title__title-wrapper">Featured</div>
        </div>
        <div className="curated-collection-section">
          <div className="curated-collection-section__group">
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos1
                        curated-collection-tile-wrapper--left
                        curated-collection-tile-wrapper--huge"
            >
              <a
                className="curated-tile curated-tile--huge "
                href="/en/game/cyberpunk_2077_phantom_liberty"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/game/cyberpunk_2077_phantom_liberty' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile_2x.webp 2x,
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile.webp 1x"
                    srcSet="
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile_2x.webp 2x,
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile_2x.jpg 2x,
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile.jpg 1x"
                    srcSet="
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile_2x.jpg 2x,
            //images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos4
                        curated-collection-tile-wrapper--left
                        curated-collection-tile-wrapper--small"
            >
              <a
                className="curated-tile curated-tile--small "
                href="/en/game/cyberpunk_2077"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/game/cyberpunk_2077' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile_2x.webp 2x,
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile.webp 1x"
                    srcSet="
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile_2x.webp 2x,
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile_2x.jpg 2x,
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile.jpg 1x"
                    srcSet="
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile_2x.jpg 2x,
            //images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos4
                        curated-collection-tile-wrapper--right
                        curated-collection-tile-wrapper--vertical"
            >
              <a
                className="curated-tile curated-tile--vertical "
                href="/en/good-old-games"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/good-old-games' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile_2x.webp 2x,
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile.webp 1x"
                    srcSet="
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile_2x.webp 2x,
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile_2x.jpg 2x,
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile.jpg 1x"
                    srcSet="
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile_2x.jpg 2x,
            //images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos5
                        curated-collection-tile-wrapper--left
                        curated-collection-tile-wrapper--small"
            >
              <a
                className="curated-tile curated-tile--small "
                href="/en/partner/free_games"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/partner/free_games' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile_2x.webp 2x,
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile.webp 1x"
                    srcSet="
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile_2x.webp 2x,
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile_2x.jpg 2x,
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile.jpg 1x"
                    srcSet="
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile_2x.jpg 2x,
            //images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos6
                        curated-collection-tile-wrapper--left
                        curated-collection-tile-wrapper--small"
            >
              <a
                className="curated-tile curated-tile--small "
                href="/en/account/settings/subscriptions"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/account/settings/subscriptions' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile_2x.webp 2x,
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile.webp 1x"
                    srcSet="
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile_2x.webp 2x,
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile_2x.jpg 2x,
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile.jpg 1x"
                    srcSet="
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile_2x.jpg 2x,
            //images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
            <div
              className="curated-collection-tile-wrapper
                        curated-collection-tile-wrapper--pos6
                        curated-collection-tile-wrapper--right
                        curated-collection-tile-wrapper--small"
            >
              <a
                className="curated-tile curated-tile--small "
                href="/en/partner/streamteam"
                gog-track-event="{ eventCategory: 'curatedCollection', eventAction: 'click', eventLabel: '/en/partner/streamteam' }"
              >
                <picture className="curated-tile__bg lazy">
                  <source
                    type="image/webp"
                    lazy-srcset="
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile_2x.webp 2x,
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile.webp 1x"
                    srcSet="
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile_2x.webp 2x,
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile.webp 1x"
                  />
                  <source
                    type="image/jpeg"
                    lazy-srcset="
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile_2x.jpg 2x,
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile.jpg 1x"
                    srcSet="
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile_2x.jpg 2x,
            //images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile.jpg 1x"
                  />
                  <img className="curated-tile__bg-img" src="" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
