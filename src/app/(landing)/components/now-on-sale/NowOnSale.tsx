export const LandingNowOnSale = () => (
    <div className="container" id="NOW_ON_SALE">
      <div
        tabbed-section="now_on_sale"
        data-default-tab="all_discounts"
        data-extra-value="bigThingy"
        className="tabbed-section now-on-sale__content"
      >
        <div className="tabbed-section__head now-on-sale__title js-head">
          <div className="section-title js-section-title         tabbed-section__title  ">
            <div className="section-title__icon-wrapper">
              <svg className="icon-wrapper-icon">
                <use xlinkHref="/svg/bf869f22.svg#icon-discount-stamp" />
              </svg>
            </div>
            <div className="section-title__title-wrapper">Now on sale</div>
          </div>
          <div className="tabs-wrapper tabs-wrapper--inverted tabs-wrapper--shift-breakpoint-1 js-tabs-wrapper">
            <div
              ng-show="!tabbedSection.sectionReady"
              className="tabbed-section__tab tabbed-section__tab--active tab-placeholder ng-hide"
            >
              Featured deals
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
              Featured deals
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
              Breezy Indie Sale
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
              Weekly Sale
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
              Slayin' it Sale
            </div>
            {/**/}
            {/**/}
          </div>
        </div>
        {/**/}
        {/**/}
        <div
          ng-repeat="tab in tabbedSection.tabs"
          className="now-on-sale__tab-products now-on-sale__tab-products--visible"
          ng-class="{
            'now-on-sale__tab-products--visible': tabbedSection.activeTab === tab.tabId
        }"
        >
          <div
            gog-promo=""
            end-date=""
            now-on-sale-products="all_discounts"
            data-products-loading=""
            data-default-tab="all_discounts"
          >
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            <div
              ng-if="!nowOnSale.defaultTabLoading"
              ng-class="{'now-on-sale__disable-wrapper' : gogPromo.showDisableOverlay }"
            >
              <div
                className="carousel now-on-sale__carousel scrollbar-17 is-ready"
                gog-slider=""
                data-with-dynamic-content="true"
                data-overflow-class="carousel__items-container"
                data-with-spacing={1}
              >
                <div className="_gog-module-slider__items-container carousel__items-container has-product-tiles-and-transform">
                  <div
                    className="js-items-wrapper"
                    style={{
                      width: 8120,
                      transition: "transform 333ms ease-in-out 0s",
                      transform: "translateX(0px)"
                    }}
                  >
                    <div className="now-on-sale__tab-collection">
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group now-on-sale__group--with-banner"
                        ng-repeat="bigThingy in nowOnSale.bigThingies track by $index"
                      >
                        <span
                          className="now-on-sale__banner"
                          ng-class="{'now-on-sale__banner--without-products' : nowOnSale.carouselGroups.length === 0 }"
                        >
                          <a
                            className="big-thingy"
                            big-thingy-banner="Breezy Indie Sale"
                            ng-href="https://www.gog.com/promo/2023_breezy_indie_sale"
                            gog-track-event="{ eventCategory: 'nowOnSale', eventAction: 'click', eventLabel: 'Browse' }"
                            ng-style="{'background-image': 'url(//images-1.gog-statics.com/cd89008e710f8c9958d5dd515b2522d1ec092b115a635835449161472e966872.jpg)',
    'box-shadow': 'inset 0 0 0 1000px rgba(99,154,165,0.75)' }"
                            href="https://www.gog.com/promo/2023_breezy_indie_sale"
                            style={{
                              backgroundImage:
                                'url("//images-1.gog-statics.com/cd89008e710f8c9958d5dd515b2522d1ec092b115a635835449161472e966872.jpg")',
                              boxShadow:
                                "rgba(99, 154, 165, 0.75) 0px 0px 0px 1000px inset"
                            }}
                          >
                            <div className="big-thingy__logo-wrapper">
                              {/**/}
                              <div
                                className="big-thingy__text big-thingy__text--no-logo"
                                ng-class="{ 'big-thingy__text--no-logo': ! bigThingy.logo }"
                              >
                                Breezy Indie Sale
                              </div>
                            </div>
                            <div className="big-thingy__discount-wrapper">
                              <div
                                className="big-thingy__up-to"
                                ng-class="{ 'big-thingy__up-to--hidden': ! bigThingy.discountIsUpTo }"
                              >
                                Up To
                              </div>
                              <div className="big-thingy__discount">-90%</div>
                            </div>
                            <div className="big-thingy__bottom-wrapper">
                              <gog-countdown-timer
                                end-date={1690322399000}
                                current-date={1690259707000}
                                days-clock="true"
                              >
                                <div className="big-thingy__time">
                                  {/**/} 16H 44M 16S left
                                </div>
                              </gog-countdown-timer>
                              <button className="big-thingy__button">
                                Browse Deals
                              </button>
                            </div>
                          </a>
                        </span>
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group now-on-sale__group--with-banner"
                        ng-repeat="bigThingy in nowOnSale.bigThingies track by $index"
                      >
                        <span
                          className="now-on-sale__banner"
                          ng-class="{'now-on-sale__banner--without-products' : nowOnSale.carouselGroups.length === 0 }"
                        >
                          <a
                            className="big-thingy"
                            big-thingy-banner="weekly_sale"
                            ng-href="https://www.gog.com/promo/20230724_weekly_sale"
                            gog-track-event="{ eventCategory: 'nowOnSale', eventAction: 'click', eventLabel: 'Browse' }"
                            ng-style="{'background-image': 'url(//images-3.gog-statics.com/9eac14f4fd7957a5f1ed1103f13a10dca627457a1a7247cf6a524856292621fe.jpg)',
    'box-shadow': 'inset 0 0 0 1000px rgba(104,55,44,0.75)' }"
                            href="https://www.gog.com/promo/20230724_weekly_sale"
                            style={{
                              backgroundImage:
                                'url("//images-3.gog-statics.com/9eac14f4fd7957a5f1ed1103f13a10dca627457a1a7247cf6a524856292621fe.jpg")',
                              boxShadow:
                                "rgba(104, 55, 44, 0.75) 0px 0px 0px 1000px inset"
                            }}
                          >
                            <div className="big-thingy__logo-wrapper">
                              {/**/}
                              <div
                                className="big-thingy__text big-thingy__text--no-logo"
                                ng-class="{ 'big-thingy__text--no-logo': ! bigThingy.logo }"
                              >
                                Weekly Sale
                              </div>
                            </div>
                            <div className="big-thingy__discount-wrapper">
                              <div
                                className="big-thingy__up-to"
                                ng-class="{ 'big-thingy__up-to--hidden': ! bigThingy.discountIsUpTo }"
                              >
                                Up To
                              </div>
                              <div className="big-thingy__discount">-90%</div>
                            </div>
                            <div className="big-thingy__bottom-wrapper">
                              <gog-countdown-timer
                                end-date={1690840799000}
                                current-date={1690259707000}
                                days-clock="true"
                              >
                                <div className="big-thingy__time">
                                  {/**/}
                                  <span ng-if="gogCountdownTimer.timeToEvent.days > 0">
                                    6D,
                                  </span>
                                  {/**/} 16H 44M 32S left
                                </div>
                              </gog-countdown-timer>
                              <button className="big-thingy__button">
                                Browse Deals
                              </button>
                            </div>
                          </a>
                        </span>
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group now-on-sale__group--with-banner"
                        ng-repeat="bigThingy in nowOnSale.bigThingies track by $index"
                      >
                        <span
                          className="now-on-sale__banner"
                          ng-class="{'now-on-sale__banner--without-products' : nowOnSale.carouselGroups.length === 0 }"
                        >
                          <a
                            className="big-thingy"
                            big-thingy-banner="Slayin' it Sale"
                            ng-href="https://www.gog.com/promo/2023_slayin_it_sale"
                            gog-track-event="{ eventCategory: 'nowOnSale', eventAction: 'click', eventLabel: 'Browse' }"
                            ng-style="{'background-image': 'url(//images-4.gog-statics.com/a4e69624a7e0b5a70f28b4cb427a5bf758926ee152bdab5c57b4d0a81a5495e5.jpg)',
    'box-shadow': 'inset 0 0 0 1000px rgba(111,21,23,0.75)' }"
                            href="https://www.gog.com/promo/2023_slayin_it_sale"
                            style={{
                              backgroundImage:
                                'url("//images-4.gog-statics.com/a4e69624a7e0b5a70f28b4cb427a5bf758926ee152bdab5c57b4d0a81a5495e5.jpg")',
                              boxShadow:
                                "rgba(111, 21, 23, 0.75) 0px 0px 0px 1000px inset"
                            }}
                          >
                            <div className="big-thingy__logo-wrapper">
                              {/**/}
                              <div
                                className="big-thingy__text big-thingy__text--no-logo"
                                ng-class="{ 'big-thingy__text--no-logo': ! bigThingy.logo }"
                              >
                                Slayin' it Sale
                              </div>
                            </div>
                            <div className="big-thingy__discount-wrapper">
                              <div
                                className="big-thingy__up-to"
                                ng-class="{ 'big-thingy__up-to--hidden': ! bigThingy.discountIsUpTo }"
                              >
                                Up To
                              </div>
                              <div className="big-thingy__discount">-90%</div>
                            </div>
                            <div className="big-thingy__bottom-wrapper">
                              <gog-countdown-timer
                                end-date={1690840799000}
                                current-date={1690259707000}
                                days-clock="true"
                              >
                                <div className="big-thingy__time">
                                  {/**/}
                                  <span ng-if="gogCountdownTimer.timeToEvent.days > 0">
                                    6D,
                                  </span>
                                  {/**/} 16H 44M 44S left
                                </div>
                              </gog-countdown-timer>
                              <button className="big-thingy__button">
                                Browse Deals
                              </button>
                            </div>
                          </a>
                        </span>
                      </div>
                      {/**/}
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1434554947}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="53.90"
                              track-add-to-cart-title="Mini Metro"
                              track-add-to-cart-id={1434554947}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/mini_metro"
                                ng-href="/en/game/mini_metro"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Mini Metro
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
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304.webp 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195.webp 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398.webp 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.webp 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304.jpg 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195.jpg 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398.jpg 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.jpg 1x"
                                      srcSet="
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.jpg"
                                      alt=""
                                      src="//images-2.gog-statics.com/67af998e886cef4bed4448580021c7f435122674c3366644ef41b574ce8f6b1c_product_tile_256.jpg"
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -50%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          107.80
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          53.90
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1790689959}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="153.80"
                              track-add-to-cart-title="Almastriga: Relics of Azathoth"
                              track-add-to-cart-id={1790689959}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/almastriga_relics_of_azathoth"
                                ng-href="/en/game/almastriga_relics_of_azathoth"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Almastriga: Relics of Azathoth
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
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304.webp 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195.webp 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398.webp 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.webp 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304.jpg 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195.jpg 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398.jpg 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.jpg 1x"
                                      srcSet="
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.jpg"
                                      alt=""
                                      src="//images-1.gog-statics.com/0753267d62e74a2f5c3a34d5472bb6b020e667e1ed49483e2890077fc8b5aeff_product_tile_256.jpg"
                                    />
                                  </picture>
                                  {/**/}
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
                                        -10%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          171.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          153.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1789205383}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="91.10"
                              track-add-to-cart-title="Super Catboy"
                              track-add-to-cart-id={1789205383}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/super_catboy"
                                ng-href="/en/game/super_catboy"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Super Catboy
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
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/d76d7db452148872050846677d0f52efb03a8ccc10f73c3c338a226e18035150_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -20%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          114.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          91.10
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1597073672}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="129.50"
                              track-add-to-cart-title="Loretta's Brand-New Job"
                              track-add-to-cart-id={1597073672}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/lorettas_brandnew_job"
                                ng-href="/en/game/lorettas_brandnew_job"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Loretta's Brand-New Job
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
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/0f5f42ed6f089a0da9caada080939f8d5e27ffb7e90c24bf4111eb6957c832a4_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -10%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          144.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          129.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1168832459}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="64.40"
                              track-add-to-cart-title="ΔV: Rings of Saturn"
                              track-add-to-cart-id={1168832459}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/dv_rings_of_saturn"
                                ng-href="/en/game/dv_rings_of_saturn"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  ΔV: Rings of Saturn
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
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/3e9ecf10bc096d35674fe69db9f9004928266b01b1ed94576fcefeee3c493340_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -25%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          86.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          64.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1168260588}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="106.80"
                              track-add-to-cart-title="Interstellar Space: Genesis"
                              track-add-to-cart-id={1168260588}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/interstellar_space_genesis"
                                ng-href="/en/game/interstellar_space_genesis"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Interstellar Space: Genesis
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
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/0ab83508e8040b907833e6e320c929f64df241f5edf0643fb5785a66b5b4b4bb_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -67%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          323.60
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          106.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1435264427}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="102.20"
                              track-add-to-cart-title="Interstellar Space: Genesis - Evolving Empires"
                              track-add-to-cart-id={1435264427}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/interstellar_space_genesis_evolving_empires"
                                ng-href="/en/game/interstellar_space_genesis_evolving_empires"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Interstellar Space: Genesis - Evolving Empires
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
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/2f17f87890a60e20bd96d621b288724d0a1a02e705a8a9dbd9bdfc4116f35613_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -34%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          155.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          102.20
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1616396963}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="57.60"
                              track-add-to-cart-title="Interstellar Space: Genesis - Natural Law DLC"
                              track-add-to-cart-id={1616396963}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/interstellar_space_genesis_natural_law_dlc"
                                ng-href="/en/game/interstellar_space_genesis_natural_law_dlc"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Interstellar Space: Genesis - Natural Law DLC
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
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/ff267ca4d64b6f94b92464376a62b474f4e4010cff980c99ea623d31f733b478_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -50%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          115.40
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          57.60
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1416269373}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="28.80"
                              track-add-to-cart-title="Interstellar Space: Genesis Soundtrack"
                              track-add-to-cart-id={1416269373}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/interstellar_space_genesis_soundtrack"
                                ng-href="/en/game/interstellar_space_genesis_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Interstellar Space: Genesis Soundtrack
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
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/578be1f9a6dbba336be3d1c6e11f5cb54cb6fb1d8baf3c1ffbe2fa87dfd25b7c_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -50%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          57.60
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          28.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1422870624}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="40.40"
                              track-add-to-cart-title="Apotheon"
                              track-add-to-cart-id={1422870624}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/apotheon"
                                ng-href="/en/game/apotheon"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Apotheon
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
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/64515e743af795a8ef1522b8562f89e9be264b399b98747ae2c6e42db2287447_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          161.80
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          40.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={2023885455}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="348.40"
                              track-add-to-cart-title="Grim Dawn Definitive Edition"
                              track-add-to-cart-id={2023885455}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/grim_dawn_definitive_edition"
                                ng-href="/en/game/grim_dawn_definitive_edition"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Grim Dawn Definitive Edition
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
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/55e0cdb94eebffac178c9dd305f6a5437a803d7010da1f79a41297aa1346afe2_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -45%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          633.50
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          348.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1428305992}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="46.20"
                              track-add-to-cart-title="Warhammer: Chaosbane Slayer Edition"
                              track-add-to-cart-id={1428305992}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/warhammer_chaosbane_slayer_edition"
                                ng-href="/en/game/warhammer_chaosbane_slayer_edition"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Warhammer: Chaosbane Slayer Edition
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
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/674c50f72e5aef21a0b04868390f7d74fb4dc68ccf9cb355f6cb9ff7d8b2533e_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -90%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          462.40
                                        </span>
                                        {/**/}
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1268757981}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="29.90"
                              track-add-to-cart-title="The Incredible Adventures of Van Helsing: Final Cut"
                              track-add-to-cart-id={1268757981}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/the_incredible_adventures_of_van_helsing_final_cut"
                                ng-href="/en/game/the_incredible_adventures_of_van_helsing_final_cut"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  The Incredible Adventures of Van Helsing: Final
                                  Cut
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
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/76429f49cff98626b2f10335bbc5b37adc3100b59c40a0148a391b650678d5b4_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -90%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          300.00
                                        </span>
                                        {/**/}
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1691765782}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="60.60"
                              track-add-to-cart-title="Unto The End"
                              track-add-to-cart-id={1691765782}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/unto_the_end"
                                ng-href="/en/game/unto_the_end"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Unto The End
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
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/937b3240bd98367fd88192d292bf240a9c3089c8770cec69234722ce2a7a527c_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          242.60
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          60.60
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1207659173}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="12.80"
                              track-add-to-cart-title="Hocus Pocus"
                              track-add-to-cart-id={1207659173}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/hocus_pocus"
                                ng-href="/en/game/hocus_pocus"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Hocus Pocus
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
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/1800e3bb88f376e36d255d72cbe010b8aca2670b5b54c7e5170f7df5550acbfd_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          64.70
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          12.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1207659182}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="12.80"
                              track-add-to-cart-title="Realms of Chaos"
                              track-add-to-cart-id={1207659182}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/realms_of_chaos"
                                ng-href="/en/game/realms_of_chaos"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Realms of Chaos
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
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/62f91adf7e5205477436aad9bc83861b5acc3929e4a9d0ab71c1f331d6db9246_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          64.70
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          12.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1207665483}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="12.80"
                              track-add-to-cart-title="Wacky Wheels"
                              track-add-to-cart-id={1207665483}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/wacky_wheels"
                                ng-href="/en/game/wacky_wheels"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Wacky Wheels
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
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/95400ccafacfad840b2ab7087938b871437808e6901e8d27c58fa3055681fcb3_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          64.70
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          12.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1440698356}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="8.50"
                              track-add-to-cart-title="Satellite Reign - Artbook"
                              track-add-to-cart-id={1440698356}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/satellite_reign_artbook"
                                ng-href="/en/game/satellite_reign_artbook"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Satellite Reign - Artbook
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
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/69dc4836d6c2714bf1305536a410a4847afe899d22dec11e719ae468a1e7630e_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          43.10
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1440698146}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="8.50"
                              track-add-to-cart-title="Satellite Reign - Reboot Prequel Novella"
                              track-add-to-cart-id={1440698146}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/satellite_reign_novella"
                                ng-href="/en/game/satellite_reign_novella"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Satellite Reign - Reboot Prequel Novella
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
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/2d2f2fa7fdb4c573a8b839f85c4a7af299ed826ec079b17af626fde7a6cd8cf3_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          43.10
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1440698774}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="17.20"
                              track-add-to-cart-title="Satellite Reign - Soundtrack"
                              track-add-to-cart-id={1440698774}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/satellite_reign_soundtrack"
                                ng-href="/en/game/satellite_reign_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Satellite Reign - Soundtrack
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
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/1b76c9fa333d0206cb015454889e34fc21599393505ef523debf88605b4f265c_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                          86.30
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          17.20
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1578751181}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="40.50"
                              track-add-to-cart-title="Darkwood"
                              track-add-to-cart-id={1578751181}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/darkwood"
                                ng-href="/en/game/darkwood"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Darkwood
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
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/d229654e383dd842314bfef21f6130c914c6569c184863116a02511abeb282ea_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          162.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          40.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={2044653500}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="45.70"
                              track-add-to-cart-title="A Short Hike"
                              track-add-to-cart-id={2044653500}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/a_short_hike"
                                ng-href="/en/game/a_short_hike"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  A Short Hike
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
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/9dc15cadd8b45e0a945e1dbeeb4302ab72b609c09a3bf918e107e85df673a1f4_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -40%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          76.10
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          45.70
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1566652906}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="69.30"
                              track-add-to-cart-title="Headlander"
                              track-add-to-cart-id={1566652906}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/headlander"
                                ng-href="/en/game/headlander"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Headlander
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
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/a020d1327a70f6e61c9be5e4e83b1518f7f1e1579780cb7fd988628b66f9a9b1_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -70%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          231.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          69.30
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1415931005}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="79.80"
                              track-add-to-cart-title="Headlander + Soundtrack"
                              track-add-to-cart-id={1415931005}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/headlander_and_ost"
                                ng-href="/en/game/headlander_and_ost"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Headlander + Soundtrack
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
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/a3a40df9f726e327d5cc712dba37787c38b316e3022148e059bc7dc435889864_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -70%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          266.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          79.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1400394572}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="21.20"
                              track-add-to-cart-title="Desert Child - Soundtrack"
                              track-add-to-cart-id={1400394572}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/desert_child_soundtrack"
                                ng-href="/en/game/desert_child_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Desert Child - Soundtrack
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
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/9f850b9564b22426efaf5f3df99c8c822599d975b3cb27a8ef59f5b210c1e720_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          85.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          21.20
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1413035173}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="44.70"
                              track-add-to-cart-title="Etherborn"
                              track-add-to-cart-id={1413035173}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/etherborn"
                                ng-href="/en/game/etherborn"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Etherborn
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
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/3d844ab2ec6b6a116f07ec2df7d31c3b8611d6040633e9ded22f455b186a21b8_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          179.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          44.70
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1629555343}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price={8.0}
                              track-add-to-cart-title="Etherborn Art & Design Book"
                              track-add-to-cart-id={1629555343}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/etherborn_art_design_book"
                                ng-href="/en/game/etherborn_art_design_book"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Etherborn Art &amp; Design Book
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
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/7ac00b4f8af9fe42c0042cd638cf99d74599b50a4e8ebda22eb3681bcc2da0c9_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          32.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.00
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1813045561}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="26.40"
                              track-add-to-cart-title="Etherborn Original Soundtrack"
                              track-add-to-cart-id={1813045561}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/etherborn_original_soundtrack"
                                ng-href="/en/game/etherborn_original_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Etherborn Original Soundtrack
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
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/8bae8abe0b0fa720f161b69751f94863dfee2bf9f6b70b08f78f134584bcdf86_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          106.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          26.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1433694728}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="14.40"
                              track-add-to-cart-title="Gone Viral Soundtrack"
                              track-add-to-cart-id={1433694728}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/gone_viral_soundtrack"
                                ng-href="/en/game/gone_viral_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Gone Viral Soundtrack
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
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/68caa08c6321670e917df77772095e060c5127ef05050a317c35016e3da424a0_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -55%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          32.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          14.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1447542207}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="51.70"
                              track-add-to-cart-title="GRIME - Score"
                              track-add-to-cart-id={1447542207}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/grime_score"
                                ng-href="/en/game/grime_score"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  GRIME - Score
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
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/396115b2b9d91ed728a83daa824431397d5b4d95e6d11b2017ba33d0e86dff74_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                          79.60
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          51.70
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1642301647}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="68.90"
                              track-add-to-cart-title="GRIME - Soundtrack"
                              track-add-to-cart-id={1642301647}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/grime_soundtrack"
                                ng-href="/en/game/grime_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  GRIME - Soundtrack
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
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/9fd4d69c7b9d3d020be3826da9883135739817a91eab0106f4e82409641a4a75_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                          106.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          68.90
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1274808665}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="74.20"
                              track-add-to-cart-title="Kardboard Kings - Soundtrack"
                              track-add-to-cart-id={1274808665}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/kardboard_kings_soundtrack"
                                ng-href="/en/game/kardboard_kings_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Kardboard Kings - Soundtrack
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
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/658195681c044a24394b8323e4d3a7b1545486f88d713f94352e1e532050681b_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -30%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          106.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          74.20
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={2027101020}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="8.80"
                              track-add-to-cart-title="Keep in Mind: Remastered"
                              track-add-to-cart-id={2027101020}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/keep_in_mind_remastered"
                                ng-href="/en/game/keep_in_mind_remastered"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Keep in Mind: Remastered
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
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/3bf6f3601808ee6519248991f55d607f5606717768543581967cda3fdff52e40_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -60%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          22.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1900997221}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="8.80"
                              track-add-to-cart-title="Keep in Mind: Remastered - Soundtrack"
                              track-add-to-cart-id={1900997221}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/keep_in_mind_remastered_soundtrack"
                                ng-href="/en/game/keep_in_mind_remastered_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Keep in Mind: Remastered - Soundtrack
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
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/c9087999010ca25c6037444b9f76d0a08fc5cdef4515dc210052ee9689f866b8_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -60%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          22.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1740359094}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="42.30"
                              track-add-to-cart-title="Mutazione - Soundtrack"
                              track-add-to-cart-id={1740359094}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/mutazione_soundtrack"
                                ng-href="/en/game/mutazione_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Mutazione - Soundtrack
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
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/e9db230b2adf5dd7f74bb8c6568cc9cd27813d4ee92f49bb5041b1e2a19c59dd_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -60%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          106.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          42.30
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1157151317}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price={40.0}
                              track-add-to-cart-title="Relic Hunters Zero: Remix - Soundtrack"
                              track-add-to-cart-id={1157151317}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/relic_hunters_zero_remix_soundtrack"
                                ng-href="/en/game/relic_hunters_zero_remix_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Relic Hunters Zero: Remix - Soundtrack
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
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/b1b87fba6b9673feaa35ff837edf8ac493d95b75870966559b5176adaf543e43_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -50%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          80.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          40.00
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1242544404}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="35.70"
                              track-add-to-cart-title="Spinch - Soundtrack"
                              track-add-to-cart-id={1242544404}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/spinch_soundtrack"
                                ng-href="/en/game/spinch_soundtrack"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Spinch - Soundtrack
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
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/9158a0ef1b9559c98935cd6ac4c9e42cfc95fcd3f093267fff59a87d69238b2b_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -55%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          79.60
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          35.70
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1788373596}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="8.10"
                              track-add-to-cart-title="Star Vikings Forever Soundtrack"
                              track-add-to-cart-id={1788373596}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/star_vikings_forever_ost"
                                ng-href="/en/game/star_vikings_forever_ost"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Star Vikings Forever Soundtrack
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
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/8726ef681b22ba4a9ba724457572d8cbb6740ceb8b1e4b0602e8281d17d6d98a_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -85%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          54.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          8.10
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1244373161}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="48.30"
                              track-add-to-cart-title="The Darkside Detective"
                              track-add-to-cart-id={1244373161}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/the_darkside_detective"
                                ng-href="/en/game/the_darkside_detective"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  The Darkside Detective
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
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/5e26c5b2986213c5f98d22e05d7f063ebaf2b78f8e65992aee156b8cda8e3676_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -70%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          161.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          48.30
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1112943757}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="12.50"
                              track-add-to-cart-title="Necrosmith"
                              track-add-to-cart-id={1112943757}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/necrosmith"
                                ng-href="/en/game/necrosmith"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Necrosmith
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
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/94a073e0460043615dd14be283637a673693952d256520ea29f80e172ba76318_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -40%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          21.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          12.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1090025519}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="59.60"
                              track-add-to-cart-title="Unbound: Worlds Apart"
                              track-add-to-cart-id={1090025519}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/unbound_worlds_apart"
                                ng-href="/en/game/unbound_worlds_apart"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Unbound: Worlds Apart
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
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/584d97c6b34aad2befbbdeef03766514f301bca6a7bdbb2d363fb93a6b9407e2_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -70%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          199.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          59.60
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1586826606}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="98.10"
                              track-add-to-cart-title="Crystal Project"
                              track-add-to-cart-id={1586826606}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/crystal_project"
                                ng-href="/en/game/crystal_project"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Crystal Project
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
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/8bcce83a4d1bcebcbfa750d601179f1146abb8229d7a08d97e2ce2745c82e095_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows product-tile__platforms--linux"
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
                                        -25%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          131.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          98.10
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1183022406}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="57.80"
                              track-add-to-cart-title="Anima: Gate of Memories"
                              track-add-to-cart-id={1183022406}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/anima_gate_of_memories"
                                ng-href="/en/game/anima_gate_of_memories"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Anima: Gate of Memories
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
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/33b96fcbd624b2c494ca07a62730ed1d523f9c0613ec6cf8968390e0dc11e578_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          231.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          57.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1117352613}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="98.20"
                              track-add-to-cart-title="Ashen"
                              track-add-to-cart-id={1117352613}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/ashen"
                                ng-href="/en/game/ashen"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Ashen
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
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/a1e8d83b4f9855cdb2cbcdd5133895a3459aaf01cfb9788d491262f233e42de5_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          393.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          98.20
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1988613419}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="48.60"
                              track-add-to-cart-title="Gorogoa"
                              track-add-to-cart-id={1988613419}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/gorogoa"
                                ng-href="/en/game/gorogoa"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Gorogoa
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
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/7030a468e153266797bd90733d9504c194d1350108e91400f1a3dda74b1650a0_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                </div>
                                <div className="product-tile__info">
                                  <div
                                    className="product-tile__platforms                  product-tile__platforms--mac product-tile__platforms--windows"
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
                                        -70%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          162.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          48.60
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1651927092}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="57.80"
                              track-add-to-cart-title="What Remains of Edith Finch"
                              track-add-to-cart-id={1651927092}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/what_remains_of_edith_finch"
                                ng-href="/en/game/what_remains_of_edith_finch"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  What Remains of Edith Finch
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
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_304_2x.webp 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_195_2x.webp 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_hover_398_2x.webp 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_256_2x.webp 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_304_2x.jpg 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_195_2x.jpg 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_hover_398_2x.jpg 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_256_2x.jpg 2x,
                //images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-1.gog-statics.com/b55fc72410714d3b10a866de04462ad02a2f6ad86ae36eb27360d897a2402d1d_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -75%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          231.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          57.80
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1457841769}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="152.50"
                              track-add-to-cart-title="Gamedec - Definitive Edition"
                              track-add-to-cart-id={1457841769}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/gamedec"
                                ng-href="/en/game/gamedec"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Gamedec - Definitive Edition
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
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_304_2x.webp 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_195_2x.webp 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_hover_398_2x.webp 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_256_2x.webp 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_304_2x.jpg 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_195_2x.jpg 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_hover_398_2x.jpg 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_256_2x.jpg 2x,
                //images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-2.gog-statics.com/0d879aa4623f30c44ce4f33aba0c0ca5b010a9863527ef02097c0c5bc4434feb_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -55%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          339.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          152.50
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={2134721059}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="178.30"
                              track-add-to-cart-title="Gamedec - Digital Deluxe Edition"
                              track-add-to-cart-id={2134721059}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/gamedec_digital_deluxe_edition"
                                ng-href="/en/game/gamedec_digital_deluxe_edition"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Gamedec - Digital Deluxe Edition
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
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_304_2x.webp 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_195_2x.webp 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_hover_398_2x.webp 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_256_2x.webp 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_304_2x.jpg 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_195_2x.jpg 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_hover_398_2x.jpg 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_256_2x.jpg 2x,
                //images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-4.gog-statics.com/58dbc15de356c1e7dcfe6cf930da7081c9a8aa195ba4c316a50a1af805576600_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -55%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          396.50
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          178.30
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      <div
                        className="js-item carousel__item now-on-sale__group"
                        ng-repeat="group in nowOnSale.carouselGroups track by $index"
                        ng-class="{'now-on-sale__group--with-banner ': nowOnSale.bigThingy && $first}"
                      >
                        <div className="now-on-sale__products">
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1089321138}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="150.30"
                              track-add-to-cart-title="Bread & Fred"
                              track-add-to-cart-id={1089321138}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/bread_fred"
                                ng-href="/en/game/bread_fred"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Bread &amp; Fred
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
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/17211db05053ca4eac2bde9951754698b2126fc4c0c74bf57953c1d3587fec2a_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -10%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          167.00
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          150.30
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                          <div
                            className="now-on-sale__tile"
                            ng-repeat="tileData in group track by $index"
                          >
                            <div
                              className="product-tile                                       has-discount"
                              ng-class="{'has-discount': tile.data.price.discountPercentage > 0}"
                              product-tile-id={1207658732}
                              product-tile-modifier=""
                              product-tile=""
                              data-product_grid="now-on-sale__all_discounts"
                              track-add-to-cart-category="mainPage"
                              track-add-to-cart-action="clickTile"
                              track-add-to-cart-label="addToCart"
                              track-add-to-cart-price="6.40"
                              track-add-to-cart-title="Rise of the Triad: Dark War"
                              track-add-to-cart-id={1207658732}
                              section-id="now_on_sale#all_discounts"
                              data-context="NOW_ON_SALE"
                            >
                              <a
                                className="product-tile__content js-content"
                                href="/en/game/rise_of_the_triad__dark_war"
                                ng-href="/en/game/rise_of_the_triad__dark_war"
                              >
                                <div
                                  ng-bind="tile.data.title"
                                  className="product-tile__title"
                                >
                                  Rise of the Triad: Dark War
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
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_304_2x.webp 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_304.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_195_2x.webp 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_195.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_hover_398_2x.webp 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_hover_398.webp 1x"
                                    />
                                    <source
                                      type="image/webp"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_256_2x.webp 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_256.webp 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 320px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_304_2x.jpg 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_304.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 414px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_195_2x.jpg 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_195.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      media="(max-width: 749px)"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_hover_398_2x.jpg 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_hover_398.jpg 1x"
                                    />
                                    <source
                                      type="image/jpeg"
                                      lazy-srcset="
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_256_2x.jpg 2x,
                //images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_256.jpg 1x"
                                    />
                                    <img
                                      className="product-tile__cover-img"
                                      lazy-src="//images-3.gog-statics.com/008cb9e7683e31837410a2f35eab52ec563279461d18844003ef3f2600c71332_product_tile_256.jpg"
                                      alt=""
                                    />
                                  </picture>
                                  {/**/}
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
                                        -90%
                                      </span>
                                      {/**/}
                                      <div className="product-tile__prices-inner">
                                        {/**/}
                                        <span
                                          ng-if="tile.data.price.discountPercentage > 0"
                                          ng-bind="tile.data.price.baseAmount"
                                          className="product-tile__price _price"
                                        >
                                          64.70
                                        </span>
                                        {/**/}
                                        <span
                                          ng-bind="tile.data.price.finalAmount"
                                          ng-show="tile.isPriceVisible"
                                          className="product-tile__price-discounted _price"
                                        >
                                          6.40
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
                              </a>
                            </div>
                          </div>
                          {/**/}
                        </div>
                        {/**/}
                      </div>
                      {/**/}
                      {/**/}
                      <div
                        ng-if="tab.tabId === 'all_discounts'"
                        className="js-item carousel__item now-on-sale__group now-on-sale__group--with-banner"
                      >
                        <span
                          className="now-on-sale__banner"
                          ng-class="{'now-on-sale__banner--without-products' : nowOnSale.carouselGroups.length === 0 }"
                        >
                          <a
                            className="big-thingy see-all-banner"
                            href="en/games/discounted"
                            gog-track-event="{ eventCategory: 'nowOnSale', eventAction: 'click', eventLabel: 'Browse' }"
                          >
                            <div className="see-all-banner__text-wrapper">
                              <div className="see-all-banner__title">
                                Not enough?
                              </div>
                              <div className="see-all-banner__sub-title">
                                We have more discounted games!
                              </div>
                            </div>
                            <div className="see-all-banner__discount-wrapper">
                              <div className="discount-wrapper__rhombus-collection">
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--medium">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--medium">
                                    -85%
                                  </div>
                                </div>
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--small">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--small">
                                    -80%
                                  </div>
                                </div>
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--small">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--small">
                                    -75%
                                  </div>
                                </div>
                              </div>
                              <div className="discount-wrapper__rhombus discount-wrapper__rhombus--big">
                                <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--big">
                                  -90%
                                </div>
                              </div>
                              <div className="discount-wrapper__rhombus-collection">
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--medium">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--medium">
                                    -85%
                                  </div>
                                </div>
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--small">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--small">
                                    -80%
                                  </div>
                                </div>
                                <div className="discount-wrapper__rhombus discount-wrapper__rhombus--small">
                                  <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--small">
                                    -75%
                                  </div>
                                </div>
                              </div>
                              <div className="discount-wrapper__rhombus discount-wrapper__rhombus--big">
                                <div className="discount-wrapper__rhombus-text discount-wrapper__rhombus-text--big">
                                  -90%
                                </div>
                              </div>
                            </div>
                            <div className="see-all-banner__button-wrapper">
                              <div className="see-all-banner__button">
                                <div className="see-all-banner__button-text">
                                  Browse all discounts
                                </div>
                                <svg className="see-all-banner__button-icon">
                                  <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </span>
                      </div>
                      {/**/}
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-pagination big-arrows"
                  ng-class="{ 'carousel-pagination--hidden': slider.pages.length <= 1 }"
                >
                  <a
                    className="carousel__nav carousel__nav--left"
                    ng-click="slider.prev()"
                  >
                    <svg className="arrow-icon cc-fill-secondary cc-stroke-none">
                      <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
                    </svg>
                  </a>
                  <a
                    className="carousel__nav carousel__nav--right"
                    ng-click="slider.next()"
                  >
                    <svg className="arrow-icon cc-fill-secondary cc-stroke-none">
                      <use xlinkHref="/svg/bf869f22.svg#icon-arrow" />
                    </svg>
                  </a>
                  {/**/}
                  <a
                    className="carousel-pagination__page is-active"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                  <a
                    className="carousel-pagination__page"
                    ng-repeat="page in slider.pages track by $index"
                    ng-click="slider.goto($index)"
                    ng-class="{
            'is-active': slider.currentPage == $index
        }"
                  />
                  {/**/}
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
        {/**/}
        <div
          ng-repeat="tab in tabbedSection.tabs"
          className="now-on-sale__tab-products"
          ng-class="{
            'now-on-sale__tab-products--visible': tabbedSection.activeTab === tab.tabId
        }"
        >
          <div
            gog-promo=""
            end-date=""
            now-on-sale-products="f6f79798-2567-11ee-bd25-fa163eebc216"
            data-products-loading=""
            data-default-tab="all_discounts"
          >
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
        </div>
        {/**/}
        <div
          ng-repeat="tab in tabbedSection.tabs"
          className="now-on-sale__tab-products"
          ng-class="{
            'now-on-sale__tab-products--visible': tabbedSection.activeTab === tab.tabId
        }"
        >
          <div
            gog-promo=""
            end-date=""
            now-on-sale-products="e829dfe2-2a25-11ee-8b13-fa163eebc216"
            data-products-loading=""
            data-default-tab="all_discounts"
          >
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
        </div>
        {/**/}
        <div
          ng-repeat="tab in tabbedSection.tabs"
          className="now-on-sale__tab-products"
          ng-class="{
            'now-on-sale__tab-products--visible': tabbedSection.activeTab === tab.tabId
        }"
        >
          <div
            gog-promo=""
            end-date=""
            now-on-sale-products="aa44cb00-2a12-11ee-b03e-fa163ec3f57d"
            data-products-loading=""
            data-default-tab="all_discounts"
          >
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
        </div>
        {/**/}
        {/**/}
        {/**/}
      </div>
    </div>
  )
