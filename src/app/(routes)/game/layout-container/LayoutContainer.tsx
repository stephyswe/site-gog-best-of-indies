export const ProductLayoutContainer = () => (
    <div className="layout-container">
      <div className="productcard-basics hide-when-content-is-expanded ">
        <h1 className="productcard-basics__title" data-cy="product-title">
          Prince of Persia®: The Sands of Time
        </h1>
        <div className="productcard-basics__wrapper">
          <div
            className="owned-status ng-hide"
            ng-show="cardProduct.product.isOwned"
          >
            <svg className="ic-svg owned-status__icon">
              <use xlinkHref="#owned" />
            </svg>
            <span className="owned-status__label">in library</span>
          </div>
          <div className="productcard-rating ">
            <div className="productcard-rating__star-icon-wrapper">
              <svg className="ic-svg productcard-rating__star-icon">
                <use xlinkHref="#star-full" />
              </svg>
            </div>
            <div className="rating productcard-rating__score">4.5/5</div>
          </div>
          <div className="productcard-basics__separator" />
          <div className="productcard-os-support">
            <svg className="ic-svg productcard-os-support__system productcard-os-support__system--windows">
              <use xlinkHref="#windows" />
            </svg>
          </div>
          <div className="productcard-basics__separator productcard-basics__separator--languages hide-on-small-screens" />
          <div className="hide-on-small-screens productcard-basics__languages">
            English &amp; 3 more
          </div>
        </div>
      </div>
      <div
        product-actions=""
        className="product-actions hide-when-content-is-expanded      ng-scope"
      >
        <div className="product-actions__promo-end-date ab-test-b">
          <span className="product-actions__offer-ends-in">Offer ends in: </span>
          <span
            className="product-actions__time ng-scope"
            //timer="2023-08-02 00:59:59.000000+03:00"
          >
            <span ng-show="timer.daysLeft > 0" className="">
              <span ng-bind="timer.daysLeft" className="ng-binding">
                7
              </span>
              d{" "}
            </span>
            <span
              ng-show="timer.daysLeft > 0 || timer.hoursLeft > 0"
              className=""
            >
              <span ng-bind="timer.hoursLeft" className="ng-binding">
                04
              </span>
              h{" "}
            </span>
            <span
              ng-show="timer.daysLeft > 0 || timer.hoursLeft > 0 || timer.minutesLeft > 0"
              className=""
            >
              <span ng-bind="timer.minutesLeft" className="ng-binding">
                29
              </span>
              m{" "}
            </span>
            <span ng-bind="timer.secondsLeft" className="ng-binding">
              26
            </span>
            s
          </span>
        </div>
        <div className="product-actions__promo-end-date ab-test-c">
          <span className="product-actions__offer-ends-in">Offer ends on: </span>
          <span className="product-actions__time">02/08/2023 00:59 EEST</span>
        </div>
        <div
          className="product-actions__promo-end-date ab-test-d ng-scope"
          //timer="2023-08-02 00:59:59.000000+03:00"
        >
          {/* ngIf: timer.daysLeft >= 3 */}
          <div ng-if="timer.daysLeft >= 3" className="ng-scope">
            <span className="product-actions__offer-ends-in">
              Offer ends on:{" "}
            </span>
            <span className="product-actions__time">02/08/2023 00:59 EEST</span>
          </div>
          {/* end ngIf: timer.daysLeft >= 3 */}
          {/* ngIf: timer.daysLeft < 3 */}
        </div>
        <div className="product-actions-body">
          <div
            className="product-actions-price                                      product-actions-price--discounted"
            ng-class="{
                    'product-actions-price--discounted': cardProduct.product.price.discountPercentage != 0
                }"
          >
            <span
              className="product-actions-price__discount ng-binding"
              ng-bind="'-'+cardProduct.product.price.discountPercentage+'%'"
            >
              -83%
            </span>
            <span
              className="product-actions-price__base-amount _price ng-binding"
              ng-bind="cardProduct.product.price.baseAmount|number:2"
            >
              115.40
            </span>
            <span
              className="product-actions-price__final-amount _price ng-binding"
              ng-bind="cardProduct.product.price.finalAmount|number:2"
            >
              19.50
            </span>
          </div>
          <div className="product-actions__lowest-price-before-discount">
            Lowest price in the last 30 days before discount:
            <span className="_price">19.50</span>
          </div>
          <div main-button-decider={1207658747} className="ng-scope">
            <button
              className="button button--big cart-button ng-scope"
              ng-click="cardProduct.product.addToCart()"
              ng-show="!mainButtonDecider.isInstallButtonVisible && !cardProduct.product.isInCart"
              ng-class="{
                            'cart-button--owned': cardProduct.product.isOwned
                        }"
              data-cy="add-to-cart-button"
              gog-track-event="{
                            eventAction: 'click',
                            eventCategory: 'productPageCart',
                            eventLabel: 'addToCartMain',
                            product_title: 'Prince of Persia®: The Sands of Time',
                            product_id: '1207658747',
                            product_price: '19.50'
                        }"
            >
              <span className="cart-button__wrapper">
                <span className="cart-button__state-in-cart">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  Check out now
                </span>
                <span className="cart-button__state-default">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#add-to-cart" />
                  </svg>
                  Add to cart
                </span>
                <span className="cart-button__state-owned">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#gift" />
                  </svg>
                  Buy as a gift
                </span>
              </span>
            </button>
            <button
              className="button                             button--big cart-button                             cart-button--in-cart                          ng-scope ng-hide"
              ng-click="productActions.goToCheckout('en')"
              ng-show="!mainButtonDecider.isInstallButtonVisible && cardProduct.product.isInCart"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPageCart', eventLabel: 'goToCheckoutMain'}"
            >
              <span className="cart-button__wrapper">
                <span className="cart-button__state-in-cart">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#in-cart" />
                  </svg>
                  Check out now
                </span>
                <span className="cart-button__state-default">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#add-to-cart" />
                  </svg>
                  Add to cart
                </span>
                <span className="cart-button__state-owned">
                  <svg className="ic-svg button__icon">
                    <use xlinkHref="#gift" />
                  </svg>
                  Buy as a gift
                </span>
              </span>
            </button>
            <button
              className="button button--big install-button ng-scope ng-hide"
              ng-click="install.onClick()"
              ng-show="mainButtonDecider.isInstallButtonVisible"
              button-install={1207658747}
              gog-track-event="{
                    eventAction: 'click',
                    eventCategory: 'productPageCart',
                    eventLabel: 'addToCartMain',
                    product_title: 'Prince of Persia®: The Sands of Time',
                    product_id: '1207658747',
                    product_price: '19.50'
                }"
            >
              <span className="install-button__wrapper">
                <svg className="ic-svg button__icon">
                  <use xlinkHref="#download" />
                </svg>
                Install
              </span>
            </button>
          </div>
          <button
            className="button button--big wishlist-button ng-scope"
            ng-click="productActions.toggleWishlisted()"
            ng-hide="cardProduct.product.isOwned"
            ng-class="{
                'wishlist-button--on-wishlist': cardProduct.product.isWishlisted
            }"
            gog-track-event="{eventAction: 'click', eventCategory: 'productPageCart', eventLabel: 'wishlist_toggle'}"
          >
            <span className="wishlist-button__wrapper">
              <span className="wishlist-button__state-default">
                <svg className="ic-svg button__icon">
                  <use xlinkHref="#heart-empty" />
                </svg>
                Wishlist it
              </span>
              <span className="wishlist-button__state-on-wishlist">
                <svg className="ic-svg button__icon wishlist-button__heart-filled">
                  <use xlinkHref="#heart-filled" />
                </svg>
                Wishlisted
              </span>
            </span>
          </button>
          <button
            className="button button--big go-to-library-button ng-hide"
            ng-click="productActions.goToLibrary('en')"
            ng-hide="!cardProduct.product.isOwned"
          >
            <span className="go-to-library-button__wrapper">
              <svg className="ic-svg button__icon">
                <use xlinkHref="#all-games" />
              </svg>
              Go to my library
            </span>
          </button>
        </div>
      </div>
    </div>
  )
