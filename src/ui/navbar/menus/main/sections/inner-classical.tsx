export const SectionClassical = () => (
    <div
      className="menu-section-layer menu-section-layer--classical-section is-visible"
      ng-class="{ 'is-visible': games.isLayerExpanded }"
      ng-mouseover="games.holdCategory()"
    >
      {/**/}
      <div
        className="menu-custom-category menu-product-state-holder product-row--has-card is-buyable ng-hide"
        ng-show="games.selectedCategory.isSpecial && games.selectedCategory.customisation.isSingle"
        ng-if="games.selectedCategory.products[0].id"
        menu-product={1207658787}
        menu-product-repository="menuStoreProducts"
      >
        <a
          className="menu-custom-category__link"
          gog-track-event='{eventAction: "goToLink featured game1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
          ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
          href="/en/game/heroes_of_might_and_magic_3_complete_edition"
        />
        <div className="menu-custom-category__bg-container">
          <div
            className="menu-custom-category__bg"
            ng-style="{'background-image': 'url('+games.selectedCategory.customisation.backgroundImage+')', 'background-color': games.selectedCategory.customisation.categoryColor}"
            style={{
              backgroundImage:
                'url("https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png")',
              backgroundColor: "rgb(0, 123, 88)",
            }}
          />
        </div>
        <div className="menu-custom-category__content">
          <img
            className="menu-custom-category__logo"
            ng-src="https://images.gog.com/0fb48558abec34de8b0fd86cc314a2a3f358cd32523b2de80b92a1852d0e945d.png"
            src="https://images.gog.com/0fb48558abec34de8b0fd86cc314a2a3f358cd32523b2de80b92a1852d0e945d.png"
          />
          <p
            className="menu-custom-category__description"
            ng-bind="games.selectedCategory.customisation.description"
          />
          <div
            className="menu-custom-category__price"
            ng-class="{'menu-custom-category__price--pre-order': product.isComingSoon && product.buyable }"
            ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
          >
            <span
              className="menu-custom-category__price-regular _price"
              ng-show="product.isPricingEnabled"
              ng-bind="product.price.amount"
            >
              107.80
            </span>
            <a
              className="menu-custom-category__price-btn"
              ng-click="menuProduct.addToCart($event);"
              gog-track-event='{eventAction: "addToCart featured game1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
            >
              <span className="menu-custom-category__price-btn-content--in-cart">
                <svg
                  viewBox="0 0 32 32"
                  className="menu-custom-category__price-btn-icon"
                >
                  <use xlinkHref="#icon-cart2" />
                </svg>
              </span>
              <span className="menu-custom-category__price-btn-content--owned">
                Owned
              </span>
              <span
                className="menu-custom-category__price-btn-content--buy-now"
                ng-show="!product.isComingSoon && product.buyable"
              >
                Buy now
              </span>
              <span
                className="menu-custom-category__price-btn-content--buy-now ng-hide"
                ng-show="product.isComingSoon && product.buyable"
              >
                Pre-order now
              </span>
            </a>
          </div>
          <a
            className="menu-custom-category__join-btn ng-hide"
            ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
            ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
            href="/en/game/heroes_of_might_and_magic_3_complete_edition"
          >
            <span className="menu-custom-category__join-btn-content--owned">
              Owned
            </span>
            <span className="menu-custom-category__join-btn-content--join-now">
              Play for free
            </span>
          </a>
        </div>
      </div>
      {/**/}
      <div
        className="menu-section-layer__custom-bg ng-hide"
        ng-show="games.selectedCategory.name === 'cdpr'"
      >
        <section
          className="menu-cdpr-category"
          ng-style="{ 'background': games.selectedCategory.customisation.categoryColor }"
          style={{ background: "rgb(0, 123, 88)" }}
        >
          {/**/}
          <picture
            ng-if="games.selectedCategory.customisation.backgroundImage"
            className="menu-cdpr-category-background"
          >
            <source
              ng-srcset="https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png"
              srcSet="https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png"
            />
            <img
              className="menu-cdpr-category-background__image"
              loading="lazy"
            />
          </picture>
          {/**/}
          <h2 className="menu-cdpr-category__title">
            Discover CD PROJEKT RED games
          </h2>
          <section className="menu-cdpr-category-products">
            <h3 className="menu-cdpr-category-products__title">Highlights</h3>
            <div className="menu-cdpr-category-products__tiles">
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207658787}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        107.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                    ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                    href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 3: Complete
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 3: Complete"
                        ng-srcset="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x, https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x,https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 3: Complete"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1312824873}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        231.10
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                    ng-href="/en/game/fallout_new_vegas_ultimate_edition"
                    href="/en/game/fallout_new_vegas_ultimate_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Fallout: New Vegas Ultimate Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Fallout: New Vegas Ultimate Edition"
                        ng-srcset="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x, https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x,https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                      />
                      <img
                        alt="Fallout: New Vegas Ultimate Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207666373}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        184.90
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                    ng-href="/en/game/baldurs_gate_2_enhanced_edition"
                    href="/en/game/baldurs_gate_2_enhanced_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Baldurs Gate II: Enhanced Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Baldur's Gate II: Enhanced Edition"
                        ng-srcset="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x, https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x,https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                      />
                      <img
                        alt="Baldur's Gate II: Enhanced Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207659022}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        215.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                    ng-href="/en/game/heroes_of_might_and_magic_5_bundle"
                    href="/en/game/heroes_of_might_and_magic_5_bundle"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 5: Bundle
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 5: Bundle"
                        ng-srcset="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x, https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x,https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 5: Bundle"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207659254}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        100.00
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                    ng-href="/en/game/the_settlers_4_gold_edition"
                    href="/en/game/the_settlers_4_gold_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        The Settlers® 4: Gold Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="The Settlers® 4: Gold Edition"
                        ng-srcset="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x, https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x,https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                      />
                      <img
                        alt="The Settlers® 4: Gold Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207658915}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        107.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                    ng-href="/en/game/heroes_of_might_and_magic_4_complete"
                    href="/en/game/heroes_of_might_and_magic_4_complete"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 4: Complete
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 4: Complete"
                        ng-srcset="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x, https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x,https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 4: Complete"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
            </div>
          </section>
          <div className="menu-cdpr-category__footer-links">
            <a
              className="menu-cdpr-category__link gtm-menu-cdpr-link-merch"
              target="_blank"
              rel="noopener"
              ng-href="https://gear.cdprojektred.com"
              href="https://gear.cdprojektred.com"
            >
              Visit <b>CD PROJEKT RED</b> GEAR
              <svg viewBox="0 0 8 7" className="menu-cdpr-category__link-arrow">
                <use xlinkHref="#icon-external-link-arrow" />
              </svg>
            </a>
            <a
              className="menu-cdpr-category__link menu-cdpr-category__link--button gtm-menu-cdpr-link-catalog"
              href="/en/games?publishers=cd-projekt-red"
            >
              Browse all CD PROJEKT RED games »
            </a>
          </div>
        </section>
      </div>
      <div
        className="menu-section-layer__custom-bg"
        ng-show="games.selectedCategory.name === 'classical-section'"
      >
        <section
          className="menu-classical-category"
          ng-style="{ 'background': games.selectedCategory.customisation.categoryColor }"
          style={{ background: "rgb(0, 123, 88)" }}
        >
          {/**/}
          <picture
            ng-if="games.selectedCategory.customisation.backgroundImage"
            className="menu-classical-category-background"
          >
            <source
              ng-srcset="https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png"
              srcSet="https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png"
            />
            <img
              className="menu-classical-category-background__image"
              loading="lazy"
            />
          </picture>
          {/**/}
          <div className="menu-classical-category-content">
            {/**/}
            <picture
              ng-if="games.selectedCategory.customisation.logoImage"
              className="menu-classical-category-content__logo"
            >
              <source
                ng-srcset="https://images.gog.com/0fb48558abec34de8b0fd86cc314a2a3f358cd32523b2de80b92a1852d0e945d.png"
                srcSet="https://images.gog.com/0fb48558abec34de8b0fd86cc314a2a3f358cd32523b2de80b92a1852d0e945d.png"
              />
              <img alt="logo" loading="lazy" />
            </picture>
            {/**/}
            <div className="menu-classical-category-products">
              <h3 className="menu-classical-category-products__title">
                Featured
              </h3>
              <div className="menu-classical-category-products__row">
                <div className="menu-classical-category-products__column">
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1207658787}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            107.80
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                        ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                        href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            Heroes of Might and Magic® 3: Complete
                          </span>
                          <img
                            className="menu-product__image"
                            alt="Heroes of Might and Magic® 3: Complete"
                            ng-srcset="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x, https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x,https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                          />
                          <img
                            alt="Heroes of Might and Magic® 3: Complete"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1312824873}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            231.10
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                        ng-href="/en/game/fallout_new_vegas_ultimate_edition"
                        href="/en/game/fallout_new_vegas_ultimate_edition"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            Fallout: New Vegas Ultimate Edition
                          </span>
                          <img
                            className="menu-product__image"
                            alt="Fallout: New Vegas Ultimate Edition"
                            ng-srcset="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x, https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x,https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                          />
                          <img
                            alt="Fallout: New Vegas Ultimate Edition"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
                <div className="menu-classical-category-products__column">
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1207666373}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            184.90
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                        ng-href="/en/game/baldurs_gate_2_enhanced_edition"
                        href="/en/game/baldurs_gate_2_enhanced_edition"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            Baldurs Gate II: Enhanced Edition
                          </span>
                          <img
                            className="menu-product__image"
                            alt="Baldur's Gate II: Enhanced Edition"
                            ng-srcset="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x, https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x,https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                          />
                          <img
                            alt="Baldur's Gate II: Enhanced Edition"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1207659022}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            215.80
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                        ng-href="/en/game/heroes_of_might_and_magic_5_bundle"
                        href="/en/game/heroes_of_might_and_magic_5_bundle"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            Heroes of Might and Magic® 5: Bundle
                          </span>
                          <img
                            className="menu-product__image"
                            alt="Heroes of Might and Magic® 5: Bundle"
                            ng-srcset="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x, https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x,https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                          />
                          <img
                            alt="Heroes of Might and Magic® 5: Bundle"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
                <div className="menu-classical-category-products__column">
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1207659254}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            100.00
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                        ng-href="/en/game/the_settlers_4_gold_edition"
                        href="/en/game/the_settlers_4_gold_edition"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            The Settlers® 4: Gold Edition
                          </span>
                          <img
                            className="menu-product__image"
                            alt="The Settlers® 4: Gold Edition"
                            ng-srcset="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x, https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x,https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                          />
                          <img
                            alt="The Settlers® 4: Gold Edition"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                  <div
                    className="menu-category-item"
                    ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
                  >
                    {/**/}
                    <div
                      ng-if="!gamesProduct.isCollection"
                      menu-product={1207658915}
                      menu-product-repository="menuStoreProducts"
                      className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                      ng-click="menuProduct.productClicked($index + 1)"
                    >
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                        ng-click="menuProduct.addToCart($event);"
                        ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                        gog-track-event='{eventAction: "addToCart classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                        ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                      >
                        <span
                          className="menu-product__price-btn-text"
                          ng-hide="!product.isPricingEnabled"
                        >
                          <span className="product-status__in-cart">
                            <svg
                              viewBox="0 0 32 32"
                              className="menu-product__cart-icon"
                            >
                              <use xlinkHref="#icon-cart2" />
                            </svg>
                          </span>
                          <span className="product-state__is-tba">TBA</span>
                          <span className="price-btn__text--owned product-state__is-owned">
                            Owned
                          </span>
                          <span className="product-state__is-free">Free</span>
                          <span
                            className="_price product-state__price"
                            ng-bind="product.price.amount"
                          >
                            107.80
                          </span>
                        </span>
                        <span
                          className="menu-product__price-btn-text ng-hide"
                          ng-hide="product.isPricingEnabled"
                        >
                          Buy
                        </span>
                      </div>
                      <div
                        className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                        ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                      >
                        <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                          <span className="price-btn__text--owned">Owned</span>
                          <span className="price-btn__text--join">Free</span>
                        </span>
                      </div>
                      <a
                        className="menu-product__link"
                        gog-track-event='{eventAction: "goToLink classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                        ng-href="/en/game/heroes_of_might_and_magic_4_complete"
                        href="/en/game/heroes_of_might_and_magic_4_complete"
                      >
                        <div
                          ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                          className="menu-product__picture"
                        >
                          <span className="menu-product__loader-title">
                            Heroes of Might and Magic® 4: Complete
                          </span>
                          <img
                            className="menu-product__image"
                            alt="Heroes of Might and Magic® 4: Complete"
                            ng-srcset="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x, https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                            ng-hide="gamesProduct.isTall"
                            srcSet="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x,https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                          />
                          <img
                            alt="Heroes of Might and Magic® 4: Complete"
                            className="menu-product__image menu-product__image--tall ng-hide"
                            ng-show="gamesProduct.isTall"
                          />
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-product__is-wishlisted ng-hide"
                            ng-show="product.isWishlisted"
                          >
                            <use xlinkHref="#icon-wishlisted2" />
                          </svg>
                        </div>
                        <div className="menu-product__content ">
                          <div className="menu-product__content-in">
                            <div className="menu-product__os js-os-support">
                              <span ng-show="product.isGame">
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--windows"
                                  ng-show="product.worksOn.Windows"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                                  ng-show="product.worksOn.Mac"
                                />
                                <i
                                  className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                                  ng-show="product.worksOn.Linux"
                                />
                              </span>
                            </div>
                            <div
                              className="menu-product__movie-label ng-hide"
                              ng-show="product.isMovie"
                            >
                              movie
                            </div>
                            <div className="menu-product__flags">
                              <span
                                ng-show="product.isComingSoon"
                                className="menu-product__flag menu-product__flag--soon ng-hide"
                              >
                                SOON
                              </span>
                              <span
                                ng-show="product.isInDevelopment"
                                className="menu-product__flag menu-product__flag--in-dev ng-hide"
                              >
                                IN DEV
                              </span>
                            </div>
                            <div className="menu-product__discount product-state__discount">
                              <span className="menu-product__discount-text">
                                <span ng-bind="product.price.discountPercentage">
                                  0
                                </span>
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
            <div className="menu-classical-category-footer">
              <a
                role="button"
                className="menu-classical-category-footer__button"
                href="/en/good-old-games"
              >
                Browse all Good Old Games »
              </a>
            </div>
          </div>
        </section>
      </div>
      <div
        className="menu-section-layer__custom-bg  ng-hide"
        ng-show="games.selectedCategory.name !== 'cdpr' && games.selectedCategory.name !== 'classical-section' && games.selectedCategory.isSpecial && !games.selectedCategory.customisation.isSingle"
        ng-style="{'background-image': 'url('+games.selectedCategory.customisation.backgroundImage+')', 'background-color': games.selectedCategory.customisation.categoryColor}"
        style={{
          backgroundImage:
            'url("https://images.gog.com/a5b199e090f862a3eb1de5890366afe1ca93b50a747984b71556bbd5a88ea0dd.png")',
          backgroundColor: "rgb(0, 123, 88)",
        }}
      >
        <div className="menu-inside-category">
          <p
            className="menu-inside-category__title"
            ng-bind="games.selectedCategory.categoryTitle"
          >
            Good Old Games
          </p>
          <div className="menu-products cf">
            <div
              className="menu-inside-category__column"
              ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 1}"
            >
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207658787}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        107.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                    ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                    href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 3: Complete
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 3: Complete"
                        ng-srcset="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x, https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x,https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 3: Complete"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1312824873}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        231.10
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                    ng-href="/en/game/fallout_new_vegas_ultimate_edition"
                    href="/en/game/fallout_new_vegas_ultimate_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Fallout: New Vegas Ultimate Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Fallout: New Vegas Ultimate Edition"
                        ng-srcset="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x, https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x,https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                      />
                      <img
                        alt="Fallout: New Vegas Ultimate Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
            </div>
            <div
              className="menu-inside-category__column"
              ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 2}"
            >
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207666373}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        184.90
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                    ng-href="/en/game/baldurs_gate_2_enhanced_edition"
                    href="/en/game/baldurs_gate_2_enhanced_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Baldurs Gate II: Enhanced Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Baldur's Gate II: Enhanced Edition"
                        ng-srcset="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x, https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x,https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                      />
                      <img
                        alt="Baldur's Gate II: Enhanced Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207659022}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        215.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                    ng-href="/en/game/heroes_of_might_and_magic_5_bundle"
                    href="/en/game/heroes_of_might_and_magic_5_bundle"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 5: Bundle
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 5: Bundle"
                        ng-srcset="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x, https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x,https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 5: Bundle"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
            </div>
            <div
              className="menu-inside-category__column"
              ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 3}"
            >
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207659254}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        100.00
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                    ng-href="/en/game/the_settlers_4_gold_edition"
                    href="/en/game/the_settlers_4_gold_edition"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        The Settlers® 4: Gold Edition
                      </span>
                      <img
                        className="menu-product__image"
                        alt="The Settlers® 4: Gold Edition"
                        ng-srcset="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x, https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x,https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                      />
                      <img
                        alt="The Settlers® 4: Gold Edition"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
              <div
                className="menu-category-item"
                ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              >
                {/**/}
                <div
                  ng-if="!gamesProduct.isCollection"
                  menu-product={1207658915}
                  menu-product-repository="menuStoreProducts"
                  className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                  ng-click="menuProduct.productClicked($index + 1)"
                >
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                    ng-click="menuProduct.addToCart($event);"
                    ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                    gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                    ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                  >
                    <span
                      className="menu-product__price-btn-text"
                      ng-hide="!product.isPricingEnabled"
                    >
                      <span className="product-status__in-cart">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-product__cart-icon"
                        >
                          <use xlinkHref="#icon-cart2" />
                        </svg>
                      </span>
                      <span className="product-state__is-tba">TBA</span>
                      <span className="price-btn__text--owned product-state__is-owned">
                        Owned
                      </span>
                      <span className="product-state__is-free">Free</span>
                      <span
                        className="_price product-state__price"
                        ng-bind="product.price.amount"
                      >
                        107.80
                      </span>
                    </span>
                    <span
                      className="menu-product__price-btn-text ng-hide"
                      ng-hide="product.isPricingEnabled"
                    >
                      Buy
                    </span>
                  </div>
                  <div
                    className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                    ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                  >
                    <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                      <span className="price-btn__text--owned">Owned</span>
                      <span className="price-btn__text--join">Free</span>
                    </span>
                  </div>
                  <a
                    className="menu-product__link"
                    gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                    ng-href="/en/game/heroes_of_might_and_magic_4_complete"
                    href="/en/game/heroes_of_might_and_magic_4_complete"
                  >
                    <div
                      ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                      className="menu-product__picture"
                    >
                      <span className="menu-product__loader-title">
                        Heroes of Might and Magic® 4: Complete
                      </span>
                      <img
                        className="menu-product__image"
                        alt="Heroes of Might and Magic® 4: Complete"
                        ng-srcset="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x, https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                        ng-hide="gamesProduct.isTall"
                        srcSet="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x,https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                      />
                      <img
                        alt="Heroes of Might and Magic® 4: Complete"
                        className="menu-product__image menu-product__image--tall ng-hide"
                        ng-show="gamesProduct.isTall"
                      />
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__is-wishlisted ng-hide"
                        ng-show="product.isWishlisted"
                      >
                        <use xlinkHref="#icon-wishlisted2" />
                      </svg>
                    </div>
                    <div className="menu-product__content ">
                      <div className="menu-product__content-in">
                        <div className="menu-product__os js-os-support">
                          <span ng-show="product.isGame">
                            <i
                              className="menu-product__os-icon menu-product__os-icon--windows"
                              ng-show="product.worksOn.Windows"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                              ng-show="product.worksOn.Mac"
                            />
                            <i
                              className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                              ng-show="product.worksOn.Linux"
                            />
                          </span>
                        </div>
                        <div
                          className="menu-product__movie-label ng-hide"
                          ng-show="product.isMovie"
                        >
                          movie
                        </div>
                        <div className="menu-product__flags">
                          <span
                            ng-show="product.isComingSoon"
                            className="menu-product__flag menu-product__flag--soon ng-hide"
                          >
                            SOON
                          </span>
                          <span
                            ng-show="product.isInDevelopment"
                            className="menu-product__flag menu-product__flag--in-dev ng-hide"
                          >
                            IN DEV
                          </span>
                        </div>
                        <div className="menu-product__discount product-state__discount">
                          <span className="menu-product__discount-text">
                            <span ng-bind="product.price.discountPercentage">
                              0
                            </span>
                            %
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/**/}
              </div>
              {/**/}
            </div>
          </div>
          <a
            className="menu-btn menu-btn--full menu-category-btn"
            ng-hide="games.selectedCategory.name == 'all'"
            ng-bind="games.selectedCategory.categoryButton"
            gog-track-event='{eventAction: "goToLink", eventCategory: "topBar", eventLabel: "All classical-section Games "}'
            ng-href="en/good-old-games"
            href="en/good-old-games"
          >
            classical_button
          </a>
        </div>
      </div>
      <div
        className="menu-inside-category ng-hide"
        ng-show="!games.selectedCategory.isSpecial"
        hook-test="storeSectionMenu"
      >
        <p
          className="menu-inside-category__title"
          ng-bind="games.selectedCategory.categoryTitle"
        >
          Good Old Games
        </p>
        <div className="menu-products cf">
          <div
            className="menu-inside-category__column"
            ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 1}"
          >
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              ng-if="games.selectedCategory.columns[0].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1207658787}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      107.80
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 1-1", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 3: Complete"}'
                  ng-href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                  href="/en/game/heroes_of_might_and_magic_3_complete_edition"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      Heroes of Might and Magic® 3: Complete
                    </span>
                    <img
                      className="menu-product__image"
                      alt="Heroes of Might and Magic® 3: Complete"
                      ng-srcset="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x, https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_196.jpg 1x,https://images.gog-statics.com/a18a7017bdca7bdd14fb003a46522e320051d3e9c1fb939559a4517d90f86170_392.jpg 2x"
                    />
                    <img
                      alt="Heroes of Might and Magic® 3: Complete"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[0]"
              ng-if="games.selectedCategory.columns[0].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1312824873}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      231.10
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 2-1", eventCategory: "topBar", eventLabel: "Fallout: New Vegas Ultimate Edition"}'
                  ng-href="/en/game/fallout_new_vegas_ultimate_edition"
                  href="/en/game/fallout_new_vegas_ultimate_edition"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      Fallout: New Vegas Ultimate Edition
                    </span>
                    <img
                      className="menu-product__image"
                      alt="Fallout: New Vegas Ultimate Edition"
                      ng-srcset="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x, https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_196.jpg 1x,https://images.gog-statics.com/d18b14716866d6edda0361a30661f25a4e326698561e03d3b5ac1ce15d97e884_392.jpg 2x"
                    />
                    <img
                      alt="Fallout: New Vegas Ultimate Edition"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[0].length < 2"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[0].length == 0"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
          </div>
          <div
            className="menu-inside-category__column"
            ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 2}"
          >
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              ng-if="games.selectedCategory.columns[1].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1207666373}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      184.90
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 1-2", eventCategory: "topBar", eventLabel: "Baldur&apos;s Gate II: Enhanced Edition"}'
                  ng-href="/en/game/baldurs_gate_2_enhanced_edition"
                  href="/en/game/baldurs_gate_2_enhanced_edition"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      Baldurs Gate II: Enhanced Edition
                    </span>
                    <img
                      className="menu-product__image"
                      alt="Baldur's Gate II: Enhanced Edition"
                      ng-srcset="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x, https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_196.jpg 1x,https://images.gog-statics.com/865e412024677b4594a91ea7cc3da75077ce8114adc26d5b92cb82c7f9b4509f_392.jpg 2x"
                    />
                    <img
                      alt="Baldur's Gate II: Enhanced Edition"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[1]"
              ng-if="games.selectedCategory.columns[1].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1207659022}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      215.80
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 2-2", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 5: Bundle"}'
                  ng-href="/en/game/heroes_of_might_and_magic_5_bundle"
                  href="/en/game/heroes_of_might_and_magic_5_bundle"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      Heroes of Might and Magic® 5: Bundle
                    </span>
                    <img
                      className="menu-product__image"
                      alt="Heroes of Might and Magic® 5: Bundle"
                      ng-srcset="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x, https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_196.jpg 1x,https://images.gog-statics.com/463a31a169013ea4177dffdcc99e5c6374a0b7c3b9c55dbe754321b0a8624e6c_392.jpg 2x"
                    />
                    <img
                      alt="Heroes of Might and Magic® 5: Bundle"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[1].length < 2"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[1].length == 0"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
          </div>
          <div
            className="menu-inside-category__column"
            ng-class="{'menu-inside-category__column--expendable': games.selectedCategory.hideColumn == 3}"
          >
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              ng-if="games.selectedCategory.columns[2].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1207659254}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      100.00
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 1-3", eventCategory: "topBar", eventLabel: "The Settlers® 4: Gold Edition"}'
                  ng-href="/en/game/the_settlers_4_gold_edition"
                  href="/en/game/the_settlers_4_gold_edition"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      The Settlers® 4: Gold Edition
                    </span>
                    <img
                      className="menu-product__image"
                      alt="The Settlers® 4: Gold Edition"
                      ng-srcset="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x, https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_196.jpg 1x,https://images.gog-statics.com/ec17bc980b3f67c8318cb8b92807b42381b2061c076ecf12ca10d6b240bc311a_392.jpg 2x"
                    />
                    <img
                      alt="The Settlers® 4: Gold Edition"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            {/**/}
            <div
              className="menu-category-item"
              ng-repeat="gamesProduct in games.selectedCategory.columns[2]"
              ng-if="games.selectedCategory.columns[2].length > 0"
            >
              {/**/}
              <div
                ng-if="!gamesProduct.isCollection"
                menu-product={1207658915}
                menu-product-repository="menuStoreProducts"
                className="menu-product menu-product--grid menu-product-state-holder js-focusable-element product-row--has-card is-buyable"
                ng-click="menuProduct.productClicked($index + 1)"
              >
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active"
                  ng-click="menuProduct.addToCart($event);"
                  ng-hide="product.customAttributes.customPriceButtonVariant == 'join'"
                  gog-track-event='{eventAction: "addToCart classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                  ng-class="{
                  'price-btn--in-cart' : product.inCart,
                  'price-btn--free': product.price.isFree
              }"
                >
                  <span
                    className="menu-product__price-btn-text"
                    ng-hide="!product.isPricingEnabled"
                  >
                    <span className="product-status__in-cart">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-product__cart-icon"
                      >
                        <use xlinkHref="#icon-cart2" />
                      </svg>
                    </span>
                    <span className="product-state__is-tba">TBA</span>
                    <span className="price-btn__text--owned product-state__is-owned">
                      Owned
                    </span>
                    <span className="product-state__is-free">Free</span>
                    <span
                      className="_price product-state__price"
                      ng-bind="product.price.amount"
                    >
                      107.80
                    </span>
                  </span>
                  <span
                    className="menu-product__price-btn-text ng-hide"
                    ng-hide="product.isPricingEnabled"
                  >
                    Buy
                  </span>
                </div>
                <div
                  className="product-state__price-btn menu-product__price-btn menu-product__price-btn--active ng-hide"
                  ng-show="product.customAttributes.customPriceButtonVariant == 'join'"
                >
                  <span className="menu-product__price-btn-text menu-product__price-btn-text--join">
                    <span className="price-btn__text--owned">Owned</span>
                    <span className="price-btn__text--join">Free</span>
                  </span>
                </div>
                <a
                  className="menu-product__link"
                  gog-track-event='{eventAction: "goToLink classical-section 2-3", eventCategory: "topBar", eventLabel: "Heroes of Might and Magic® 4: Complete"}'
                  ng-href="/en/game/heroes_of_might_and_magic_4_complete"
                  href="/en/game/heroes_of_might_and_magic_4_complete"
                >
                  <div
                    ng-class="{
                      'menu-product__tall-picture': gamesProduct.isTall,
                      'menu-product__picture': !gamesProduct.isTall
                  }"
                    className="menu-product__picture"
                  >
                    <span className="menu-product__loader-title">
                      Heroes of Might and Magic® 4: Complete
                    </span>
                    <img
                      className="menu-product__image"
                      alt="Heroes of Might and Magic® 4: Complete"
                      ng-srcset="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x, https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                      ng-hide="gamesProduct.isTall"
                      srcSet="https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_196.jpg 1x,https://images.gog-statics.com/3549b565446a62a7aa085620de0de02d2d587df6bf9a0f3fe6b8445a4f63c525_392.jpg 2x"
                    />
                    <img
                      alt="Heroes of Might and Magic® 4: Complete"
                      className="menu-product__image menu-product__image--tall ng-hide"
                      ng-show="gamesProduct.isTall"
                    />
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-product__is-wishlisted ng-hide"
                      ng-show="product.isWishlisted"
                    >
                      <use xlinkHref="#icon-wishlisted2" />
                    </svg>
                  </div>
                  <div className="menu-product__content ">
                    <div className="menu-product__content-in">
                      <div className="menu-product__os js-os-support">
                        <span ng-show="product.isGame">
                          <i
                            className="menu-product__os-icon menu-product__os-icon--windows"
                            ng-show="product.worksOn.Windows"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--mac ng-hide"
                            ng-show="product.worksOn.Mac"
                          />
                          <i
                            className="menu-product__os-icon menu-product__os-icon--linux ng-hide"
                            ng-show="product.worksOn.Linux"
                          />
                        </span>
                      </div>
                      <div
                        className="menu-product__movie-label ng-hide"
                        ng-show="product.isMovie"
                      >
                        movie
                      </div>
                      <div className="menu-product__flags">
                        <span
                          ng-show="product.isComingSoon"
                          className="menu-product__flag menu-product__flag--soon ng-hide"
                        >
                          SOON
                        </span>
                        <span
                          ng-show="product.isInDevelopment"
                          className="menu-product__flag menu-product__flag--in-dev ng-hide"
                        >
                          IN DEV
                        </span>
                      </div>
                      <div className="menu-product__discount product-state__discount">
                        <span className="menu-product__discount-text">
                          <span ng-bind="product.price.discountPercentage">
                            0
                          </span>
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/**/}
              {/**/}
            </div>
            {/**/}
            {/**/}
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[2].length < 2"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
            <a
              href="/en/games"
              className="menu-category-item-wishlist-placeholder ng-hide"
              ng-show="games.selectedCategory.columns[2].length == 0"
            >
              <svg
                viewBox="0 0 32 32"
                className="menu-category-item-wishlist-placeholder__icon"
              >
                <use xlinkHref="#icon-wishlist3" />
              </svg>
              <span className="menu-category-item-wishlist-placeholder__text">
                Add more games to your wishlist
              </span>
            </a>
          </div>
        </div>
        <a
          className="menu-btn menu-btn--full menu-category-btn"
          ng-hide="games.selectedCategory.name == 'all'"
          ng-bind="games.selectedCategory.categoryButton"
          gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'All classical-section Games '}"
          ng-href="en/good-old-games"
          href="en/good-old-games"
        >
          classical_button
        </a>
      </div>
    </div>
  );
  