"use client";

import { useState } from "react";

import { ItemE } from "./items/ItemE";
import { ItemF } from "./items/ItemF";
import { ItemG } from "./items/ItemG";
import { ItemD } from "./items/ItemD";
import { ItemC } from "./items/ItemC";
import { ItemB } from "./items/ItemB";
import { ItemA } from "./items/ItemA";
import { ItemA9 } from "./items/ItemA9";
import { ItemH } from "./items/ItemH";

export const LandingSlider = () => {
  const [isMenuTransform, setMenuTransform] = useState(4448);

  const onNext = () => {
    // use prev value
    setMenuTransform((prev) => prev + 1112);
  };
  const onPrev = () => {
    setMenuTransform((prev) => prev - 1112);
  };

  return (
    <div className="big-spots-container big-spot-height">
      <div
        big-spots-swipe=""
        className="big-spots-wrapper js-big-spots-slider glide--ltr glide--carousel is-slider-initialized glide--swipeable"
      >
        <div
          className="slide-hover slide-hover--left"
          ng-click="spots.prev()"
          onClick={() => onPrev()}
        />
        <div
          className="slide-hover slide-hover--right"
          ng-click="spots.next()"
          onClick={() => onNext()}
        />
        <div
          className="glide slide-hover-container slide-hover-transition"
          ng-swipe-right="spots.prev(true)"
          ng-swipe-left="spots.next(true)"
          ng-swipe-disable-mouse=""
        >
          <div className="big-spots__arrows" data-glide-el="controls">
            <div
              className="big-spots__arrow-wrapper slider-stays-in-place slide-hover-transition"
              data-glide-dir="<"
            >
              <svg className="big-spots__arrow-icon big-spots__arrow-icon--left cc-fill-secondary cc-stroke-background">
                <use xlinkHref="/svg/bf869f22.svg#icon-chevron-circled" />
              </svg>
            </div>
            <div
              className="big-spots__arrow-wrapper slider-stays-in-place slide-hover-transition"
              data-glide-dir=">"
            >
              <svg className="big-spots__arrow-icon cc-fill-secondary cc-stroke-background">
                <use xlinkHref="/svg/bf869f22.svg#icon-chevron-circled" />
              </svg>
            </div>
          </div>
          <div className="glide__track" data-glide-el="track">
            <div
              className="glide__slides js-slides-holder big-spot-height"
              style={{
                transition:
                  "transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s",
                width: 21112,
                transform: `translate3d(-${isMenuTransform}px, 0px, 0px)`,
              }}
            >
              <ItemA9 />
              <ItemA />
              <ItemB />
              <ItemC />
              <ItemD />
              <ItemE />
              <ItemF />
              <ItemG />
              <ItemH />
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1202885143}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/tomb_raider_anniversary"
                  className="big-spot"
                 /*  onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221202885143\u0022,\u0022title\u0022\u003A\u0022Now\u0020on\u0020sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u002260.00\u0022,\u0022finalAmount\u0022\u003A\u00226.50\u0022,\u0022discountPercentage\u0022\u003A89,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/tomb_raider_anniversary\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022Tomb\u0020Raider\u003A\u0020Anniversary\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/92c641695b50309a119682a3632d01b309e4b21324567a36f28f4adb867612de\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/tomb_raider_anniversary\u0022,\u0022colour\u0022\u003A\u0022rgba\u0028108,86,61,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u0028108,86,61,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T00\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u0022ce6456d2\u002D2a16\u002D11ee\u002Dad4d\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '7'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":7},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/tomb_raider_anniversary"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-4.gog-statics.com/92c641695b50309a119682a3632d01b309e4b21324567a36f28f4adb867612de_bs_background_500.jpg"
                      srcSet="//images-4.gog-statics.com/92c641695b50309a119682a3632d01b309e4b21324567a36f28f4adb867612de_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_800.webp"
                      srcSet="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_800.jpg"
                      srcSet="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_1275.webp"
                      srcSet="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_1275.jpg"
                      srcSet="//images-3.gog-statics.com/5e11340018cd6fd4dcdcd5828e95ba5fbbab5398c0a972a376e1b3525ba0c706_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-6"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-6" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small.webp,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small_2x.webp 2x"
                              srcSet="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small.webp,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big.webp,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big_2x.webp 2x"
                              srcSet="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big.webp,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small.png,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small_2x.png 2x"
                              srcSet="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small.png,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big.png,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big_2x.png 2x"
                              srcSet="//images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big.png,
                //images-1.gog-statics.com/bf44b9ecaa2ae92d9ee359e60db591fb9305332c34936abfa2c23dd4aef1d00d_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Now on sale
                            </div>
                          </div>
                          <div className="big-spot__title">
                            Tomb Raider: Anniversary
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage"
                              ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                              className="big-spot__discount"
                            >
                              -89%
                            </span>
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                6.50
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-6 {\n            background: linear-gradient(7deg, rgb(108,86,61), rgba(108,86,61, .65) 30%, rgba(108,86,61, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-6 {\n            background: linear-gradient(7deg, rgb(108,86,61), rgba(108,86,61, .65) 30%, rgba(108,86,61, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1446213994}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/no_mans_sky"
                  className="big-spot"
                  /* onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221446213994\u0022,\u0022title\u0022\u003A\u0022Now\u0020on\u0020sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u0022555.00\u0022,\u0022finalAmount\u0022\u003A\u0022277.40\u0022,\u0022discountPercentage\u0022\u003A50,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/no_mans_sky\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022No\u0020Man\u0027s\u0020Sky\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D2.gog\u002Dstatics.com\\\/178e689e5577e39c6c13a7a0b586de5b807786c9b7290f1a1ea45cfbc2bcce11\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/no_mans_sky\u0022,\u0022colour\u0022\u003A\u0022rgba\u002857,102,127,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002857,102,127,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u002242d14fc8\u002D2956\u002D11ee\u002Da881\u002Dfa163ec3f57d\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '8'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":8},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/no_mans_sky"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-2.gog-statics.com/178e689e5577e39c6c13a7a0b586de5b807786c9b7290f1a1ea45cfbc2bcce11_bs_background_500.jpg"
                      srcSet="//images-2.gog-statics.com/178e689e5577e39c6c13a7a0b586de5b807786c9b7290f1a1ea45cfbc2bcce11_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_800.webp"
                      srcSet="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_800.jpg"
                      srcSet="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_1275.webp"
                      srcSet="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_1275.jpg"
                      srcSet="//images-4.gog-statics.com/a2b1366fd7575f294732be1db77d6ee2864bca9c9ea609a2ab37bc5cccd5aef2_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-7"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-7" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small.webp,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small_2x.webp 2x"
                              srcSet="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small.webp,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big.webp,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big_2x.webp 2x"
                              srcSet="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big.webp,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small.png,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small_2x.png 2x"
                              srcSet="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small.png,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big.png,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big_2x.png 2x"
                              srcSet="//images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big.png,
                //images-1.gog-statics.com/4acec986f6c4483310a3850344e33019724d02c9a74afbd44b269c11fec6e1c8_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Now on sale
                            </div>
                          </div>
                          <div className="big-spot__title">No Mans Sky</div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage"
                              ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                              className="big-spot__discount"
                            >
                              -50%
                            </span>
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                277.40
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-7 {\n            background: linear-gradient(7deg, rgb(57,102,127), rgba(57,102,127, .65) 30%, rgba(57,102,127, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-7 {\n            background: linear-gradient(7deg, rgb(57,102,127), rgba(57,102,127, .65) 30%, rgba(57,102,127, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                data-spot-id="2c985e88-2567-11ee-bdd7-fa163ec3f57d"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="https://www.gog.com/promo/2023_breezy_indie_sale"
                  className="big-spot"
                  /* onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022subtitle\u0022\u003A\u0022290\u0020indie\u0020deals\u0020up\u0020to\u0020\u002D90\u0025\u0022,\u0022title\u0022\u003A\u0022\u0020\u0022,\u0022customButtonMessage\u0022\u003A\u0022Browse\u0022,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003A\u0022https\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_breezy_indie_sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D2.gog\u002Dstatics.com\\\/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af\u0022,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/70ab8068dcc64e0a5658a121a9d9498c79f1c568a9e17c16c4a52dc1ffe8a4e8\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D2.gog\u002Dstatics.com\\\/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022https\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_breezy_indie_sale\u0022,\u0022colour\u0022\u003A\u0022rgba\u0028243,212,98,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u0028243,212,98,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u00222c985e88\u002D2567\u002D11ee\u002Dbdd7\u002Dfa163ec3f57d\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '9'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":9},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"https:\/\/www.gog.com\/promo\/2023_breezy_indie_sale"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-4.gog-statics.com/70ab8068dcc64e0a5658a121a9d9498c79f1c568a9e17c16c4a52dc1ffe8a4e8_bs_background_500.jpg"
                      srcSet="//images-4.gog-statics.com/70ab8068dcc64e0a5658a121a9d9498c79f1c568a9e17c16c4a52dc1ffe8a4e8_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_800.webp"
                      srcSet="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_800.jpg"
                      srcSet="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_1275.webp"
                      srcSet="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_1275.jpg"
                      srcSet="//images-2.gog-statics.com/9a6230e7b45da6d0e24bfb037198d1fae2a3c78e248aa47e72ba516d8388d9af_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-8"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-8" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small.webp,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small_2x.webp 2x"
                              srcSet="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small.webp,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big.webp,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big_2x.webp 2x"
                              srcSet="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big.webp,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small.png,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small_2x.png 2x"
                              srcSet="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small.png,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big.png,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big_2x.png 2x"
                              srcSet="//images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big.png,
                //images-2.gog-statics.com/64132c6e958e75cf8514877b25816f48817c6ea85fdcb345e9e88e34ab5adfaf_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title" />
                          <div className="big-spot__title">
                            290 indie deals up to -90%
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                            big-spot__button--custom                                                         js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'Browse' }"
                          >
                            <div className="big-spot__button-content">
                              <div className="big-spot__button-text">
                                Browse{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-8 {\n            background: linear-gradient(7deg, rgb(243,212,98), rgba(243,212,98, .65) 30%, rgba(243,212,98, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-8 {\n            background: linear-gradient(7deg, rgb(243,212,98), rgba(243,212,98, .65) 30%, rgba(243,212,98, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1640424747}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/the_witcher_3_wild_hunt_game_of_the_year_edition"
                  className="big-spot"
                 /*  onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221640424747\u0022,\u0022title\u0022\u003Anull,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u0022499.40\u0022,\u0022finalAmount\u0022\u003A\u0022499.40\u0022,\u0022discountPercentage\u0022\u003A0,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/the_witcher_3_wild_hunt_game_of_the_year_edition\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022The\u0020Witcher\u00203\u003A\u0020Wild\u0020Hunt\u0020\u002D\u0020Complete\u0020Edition\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/74f66bd5c4c2037a6e58d300d71cd2489a8330e5f05b84561415cb67be20b195\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/the_witcher_3_wild_hunt_game_of_the_year_edition\u0022,\u0022colour\u0022\u003A\u0022rgba\u002860,93,87,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002860,93,87,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u002240b80aa8\u002D2a17\u002D11ee\u002Da678\u002Dfa163ec3f57d\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '10'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":10},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/the_witcher_3_wild_hunt_game_of_the_year_edition"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-4.gog-statics.com/74f66bd5c4c2037a6e58d300d71cd2489a8330e5f05b84561415cb67be20b195_bs_background_500.jpg"
                      srcSet="//images-4.gog-statics.com/74f66bd5c4c2037a6e58d300d71cd2489a8330e5f05b84561415cb67be20b195_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_800.webp"
                      srcSet="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_800.jpg"
                      srcSet="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_1275.webp"
                      srcSet="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_1275.jpg"
                      srcSet="//images-4.gog-statics.com/7809c7dbb669c753234bf81df927521d2084f54e14f97ad1a3fecfbac10f2df4_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-9"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-9" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small.webp,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small.webp,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big.webp,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big.webp,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small.png,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small.png,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big.png,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big.png,
                //images-3.gog-statics.com/90dc4e2c86b036c2b2c392adea197ad7dc6b750ce01af0416ed8b37f3d0101c9_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                          </div>
                          <div className="big-spot__title">
                            The Witcher 3: Wild Hunt - Complete Edition
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                499.40
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-9 {\n            background: linear-gradient(7deg, rgb(60,93,87), rgba(60,93,87, .65) 30%, rgba(60,93,87, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-9 {\n            background: linear-gradient(7deg, rgb(60,93,87), rgba(60,93,87, .65) 30%, rgba(60,93,87, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1789205383}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/super_catboy"
                  className="big-spot"
                 /*  onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221789205383\u0022,\u0022title\u0022\u003A\u0022Now\u0020available\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D2.gog\u002Dstatics.com\\\/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u0022114.00\u0022,\u0022finalAmount\u0022\u003A\u002291.10\u0022,\u0022discountPercentage\u0022\u003A20,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/super_catboy\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022Super\u0020Catboy\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/4b720b37858448ae15b504c78f94b778735a050df46ef820ed96ddf7e2d13017\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/super_catboy\u0022,\u0022colour\u0022\u003A\u0022rgba\u0028123,96,36,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u0028123,96,36,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u00227739b95a\u002D2a17\u002D11ee\u002Da37d\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '11'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":11},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/super_catboy"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-1.gog-statics.com/4b720b37858448ae15b504c78f94b778735a050df46ef820ed96ddf7e2d13017_bs_background_500.jpg"
                      srcSet="//images-1.gog-statics.com/4b720b37858448ae15b504c78f94b778735a050df46ef820ed96ddf7e2d13017_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_800.webp"
                      srcSet="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_800.jpg"
                      srcSet="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_1275.webp"
                      srcSet="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_1275.jpg"
                      srcSet="//images-2.gog-statics.com/c70b6cc354c583d009655b1c01d75eb897ce9901ccb48e42d66dedcf586593bc_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-10"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-10" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small.webp,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small.webp,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big.webp,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big.webp,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small.png,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small.png,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big.png,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big.png,
                //images-3.gog-statics.com/5dcd310f83a2f5257bdbfcb086213f4e7787415c32f9eb6d06d45ccdbb75aca0_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Now available
                            </div>
                          </div>
                          <div className="big-spot__title">Super Catboy</div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage"
                              ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                              className="big-spot__discount"
                            >
                              -20%
                            </span>
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                91.10
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-10 {\n            background: linear-gradient(7deg, rgb(123,96,36), rgba(123,96,36, .65) 30%, rgba(123,96,36, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-10 {\n            background: linear-gradient(7deg, rgb(123,96,36), rgba(123,96,36, .65) 30%, rgba(123,96,36, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1508621918}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/axe_cop"
                  className="big-spot"
                 /*  onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221508621918\u0022,\u0022title\u0022\u003A\u0022Now\u0020available\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u002295.00\u0022,\u0022finalAmount\u0022\u003A\u002295.00\u0022,\u0022discountPercentage\u0022\u003A0,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/axe_cop\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022Axe\u0020Cop\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/bfb697b552379213be73bb46e3314651a716f842b47d090f1f53c23d95d68f20\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/axe_cop\u0022,\u0022colour\u0022\u003A\u0022rgba\u002890,74,32,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002890,74,32,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u002247a45340\u002D2a16\u002D11ee\u002D9947\u002Dfa163ec3f57d\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '12'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":12},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/axe_cop"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-1.gog-statics.com/bfb697b552379213be73bb46e3314651a716f842b47d090f1f53c23d95d68f20_bs_background_500.jpg"
                      srcSet="//images-1.gog-statics.com/bfb697b552379213be73bb46e3314651a716f842b47d090f1f53c23d95d68f20_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_800.webp"
                      srcSet="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_800.jpg"
                      srcSet="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_1275.webp"
                      srcSet="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_1275.jpg"
                      srcSet="//images-3.gog-statics.com/90952560004c4fe978ec2aebc1c82be21686def768a69ddab24d34850ef7377d_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-11"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-11" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small.webp,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small.webp,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big.webp,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big.webp,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small.png,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small.png,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big.png,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big.png,
                //images-3.gog-statics.com/3f18c639442966ad074c39e92a54f2afa134e01da7eed04af31b7de3b7a29172_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Now available
                            </div>
                          </div>
                          <div className="big-spot__title">Axe Cop</div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                95.00
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-11 {\n            background: linear-gradient(7deg, rgb(90,74,32), rgba(90,74,32, .65) 30%, rgba(90,74,32, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-11 {\n            background: linear-gradient(7deg, rgb(90,74,32), rgba(90,74,32, .65) 30%, rgba(90,74,32, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height"
                product-tile=""
                product-tile-id={1207658696}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/jagged_alliance_2"
                  className="big-spot"
               /*    onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221207658696\u0022,\u0022title\u0022\u003A\u0022Now\u0020on\u0020sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D2.gog\u002Dstatics.com\\\/631e2aa4aa1f662ae136d5aa1462a2fcdceebd7db982884c0407cbeaf0601104\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u002254.00\u0022,\u0022finalAmount\u0022\u003A\u002210.80\u0022,\u0022discountPercentage\u0022\u003A80,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/jagged_alliance_2\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Afalse,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022Jagged\u0020Alliance\u00202\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/6fa53012430f2ab8db9a4133e8f4b4351b19b1e8d13bff26fce39ef8bb3b5daa\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/jagged_alliance_2\u0022,\u0022colour\u0022\u003A\u0022rgba\u002844,32,30,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002844,32,30,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u00226d2520c4\u002D2956\u002D11ee\u002D81a7\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '13'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":13},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/jagged_alliance_2"}]'
                >
                  <picture>
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      srcSet="//images-1.gog-statics.com/6fa53012430f2ab8db9a4133e8f4b4351b19b1e8d13bff26fce39ef8bb3b5daa_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-2.gog-statics.com/631e2aa4aa1f662ae136d5aa1462a2fcdceebd7db982884c0407cbeaf0601104_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-2.gog-statics.com/631e2aa4aa1f662ae136d5aa1462a2fcdceebd7db982884c0407cbeaf0601104_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-2.gog-statics.com/631e2aa4aa1f662ae136d5aa1462a2fcdceebd7db982884c0407cbeaf0601104_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-2.gog-statics.com/631e2aa4aa1f662ae136d5aa1462a2fcdceebd7db982884c0407cbeaf0601104_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-12"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-12" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small.webp,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small.webp,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big.webp,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big_2x.webp 2x"
                              srcSet="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big.webp,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small.png,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small.png,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big.png,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big_2x.png 2x"
                              srcSet="//images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big.png,
                //images-3.gog-statics.com/55b10ea6fbc874eb9cd54517ddeebbdc07340fc183b32d4cde20d9e0bcf5a58b_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Now on sale
                            </div>
                          </div>
                          <div className="big-spot__title">
                            Jagged Alliance 2
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-if="tile.data.price.discountPercentage"
                              ng-bind="'-' + tile.data.price.discountPercentage + '%'"
                              className="big-spot__discount"
                            >
                              -80%
                            </span>
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                10.80
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-12 {\n            background: linear-gradient(7deg, rgb(44,32,30), rgba(44,32,30, .65) 30%, rgba(44,32,30, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-12 {\n            background: linear-gradient(7deg, rgb(44,32,30), rgba(44,32,30, .65) 30%, rgba(44,32,30, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height glide__slide--clone"
                data-spot-id="01b47702-24a3-11ee-bb25-fa163eebc216"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="https://www.gog.com/promo/2023_summer_classics_sale"
                  className="big-spot"
                 /*  onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022subtitle\u0022\u003A\u0022Deals\u0020ending\u0020in\u003A\u0020\u0025countdown\u0025\u0022,\u0022title\u0022\u003A\u0022Discover\u0020the\u0020timeless\u0020magic\u0020of\u0020gaming\u0020up\u0020to\u0020\u002D89\u0025\u0022,\u0022customButtonMessage\u0022\u003A\u0022Browse\u0022,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003A\u0022https\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_summer_classics_sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/b42f35531e9daf1db73b039fbbf9f5dd707c31bc296fa57be4405739eedbe7bd\u0022,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/38699c5ad47c7e57cac811cb472dacf717a3322b5c86eabb42eff758fc16dd29\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D3.gog\u002Dstatics.com\\\/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022https\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_summer_classics_sale\u0022,\u0022colour\u0022\u003A\u0022rgba\u002836,41,64,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002836,41,64,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D24T23\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u002201b47702\u002D24a3\u002D11ee\u002Dbb25\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '1'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":1},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"https:\/\/www.gog.com\/promo\/2023_summer_classics_sale"}]'
                >
                  <picture>
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      srcSet="//images-3.gog-statics.com/38699c5ad47c7e57cac811cb472dacf717a3322b5c86eabb42eff758fc16dd29_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-1.gog-statics.com/b42f35531e9daf1db73b039fbbf9f5dd707c31bc296fa57be4405739eedbe7bd_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-1.gog-statics.com/b42f35531e9daf1db73b039fbbf9f5dd707c31bc296fa57be4405739eedbe7bd_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-1.gog-statics.com/b42f35531e9daf1db73b039fbbf9f5dd707c31bc296fa57be4405739eedbe7bd_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-1.gog-statics.com/b42f35531e9daf1db73b039fbbf9f5dd707c31bc296fa57be4405739eedbe7bd_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-0"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-0" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture>
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              srcSet="//images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_small.webp,
                //images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              srcSet="//images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_big.webp,
                //images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              srcSet="//images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_small.png,
                //images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              srcSet="//images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_big.png,
                //images-3.gog-statics.com/e7d4ae15ae7b8ef6b4d96349c2c4b43de005b5fb8e79b327020dd9326bd4bf49_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            Discover the timeless magic of gaming up to -89%
                          </div>
                          <div className="big-spot__title">
                           {/*  <gog-countdown-timer
                              end-date="2023-07-24T23:59:59+03:00"
                              current-date={1690230980000}
                            >
                              <div ng-if="gogCountdownTimer.timeLeft > 0">
                                Deals ending in: <span>00 : 21 : 38</span>
                                <span
                                  className="timer-placeholder ng-hide"
                                  ng-hide="gogCountdownTimer.timeToEvent.hours && gogCountdownTimer.timeToEvent.minutes && gogCountdownTimer.timeToEvent.seconds"
                                >
                                  00:00:00
                                </span>
                              </div>

                            </gog-countdown-timer> */}
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                            big-spot__button--custom                                                         js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'Browse' }"
                          >
                            <div className="big-spot__button-content">
                              <div className="big-spot__button-text">
                                Browse{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-0 {\n            background: linear-gradient(7deg, rgb(36,41,64), rgba(36,41,64, .65) 30%, rgba(36,41,64, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-0 {\n            background: linear-gradient(7deg, rgb(36,41,64), rgba(36,41,64, .65) 30%, rgba(36,41,64, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height glide__slide--clone"
                product-tile=""
                product-tile-id={1456460669}
                section-id="big_spot"
                data-context="BIG_SPOT"
                style={{ width: 1096, marginLeft: 8, marginRight: 8 }}
              >
                <a
                  href="/en/game/baldurs_gate_iii"
                  className="big-spot"
                  /* onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022id\u0022\u003A\u00221456460669\u0022,\u0022title\u0022\u003A\u0022Pre\u002DOrder\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319\u0022,\u0022price\u0022\u003A\u007B\u0022baseAmount\u0022\u003A\u0022678.00\u0022,\u0022finalAmount\u0022\u003A\u0022678.00\u0022,\u0022discountPercentage\u0022\u003A0,\u0022isFree\u0022\u003Afalse\u007D,\u0022supportedOperatingSystems\u0022\u003A\u005B\u0022mac\u0022,\u0022windows\u0022\u005D,\u0022url\u0022\u003A\u0022\\\/en\\\/game\\\/baldurs_gate_iii\u0022,\u0022isComingSoon\u0022\u003Afalse,\u0022inDevelopment\u0022\u003Atrue,\u0022buyable\u0022\u003Atrue,\u0022isAvailableForSale\u0022\u003Atrue,\u0022isMovie\u0022\u003Afalse,\u0022isVisibleInCatalog\u0022\u003Atrue,\u0022isPreorder\u0022\u003Afalse,\u0022subtitle\u0022\u003A\u0022Baldur\u0027s\u0020Gate\u00203\u0022,\u0022customButtonMessage\u0022\u003Anull,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003Anull,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/2d1ed8857b8d9ef7f0de60443a715abe70e71b195add4c6b5e4e0af344fc078a\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022\\\/en\\\/game\\\/baldurs_gate_iii\u0022,\u0022colour\u0022\u003A\u0022rgba\u002842,71,99,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002842,71,99,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u0022bbaf4124\u002D27c7\u002D11ee\u002D9454\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '2'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":2},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"\/en\/game\/baldurs_gate_iii"}]'
                >
                  <picture>
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      srcSet="//images-1.gog-statics.com/2d1ed8857b8d9ef7f0de60443a715abe70e71b195add4c6b5e4e0af344fc078a_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-4.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      srcSet="//images-4.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-4.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      srcSet="//images-4.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-1"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-1" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_small.webp,
                //images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_big.webp,
                //images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_small.png,
                //images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_big.png,
                //images-4.gog-statics.com/ef2b52a72fa3c85ff741144da29ec0106b8e092003d4469c54c725a26520ce76_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            <div
                              className="product-tile__labels product-ribbon big-spot__ribbon-wrapper"
                              ng-class="tile.labelClasses"
                            >
                              <span className="product-tile__label product-tile__label--in-library big-spot__ribbon">
                                In library
                              </span>
                              <span className="product-tile__label product-tile__label--in-cart big-spot__ribbon">
                                in cart
                              </span>
                              <span className="product-tile__label product-tile__label--is-upcoming big-spot__ribbon">
                                soon
                              </span>
                              <span className="product-tile__label product-tile__label--is-wishlisted big-spot__ribbon">
                                <svg
                                  role="img"
                                  className="product-tile__label-icon"
                                >
                                  <use xlinkHref="/svg/83ce6d0d.svg#is-wishlisted" />
                                </svg>
                                wishlisted
                              </span>
                            </div>
                            <div
                              className="product-tile__platforms big-spot__platforms
            product-tile__platforms--mac
            product-tile__platforms--windows
          "
                            >
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#windows" />
                              </svg>
                              <svg className="big-spot__platforms-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#mac" />
                              </svg>
                            </div>
                            <div className="big-spot__super-title-text">
                              Pre-Order
                            </div>
                          </div>
                          <div className="big-spot__title">Baldurs Gate 3</div>
                        </div>
                        <div className="big-spot__action">
                          <div className="big-spot__action-left-side">
                            {/**/}
                            <span
                              ng-show="tile.isPriceVisible"
                              className="big-spot__price _price"
                            >
                              <span
                                className="big-spot__price-amount"
                                ng-bind="tile.data.price.finalAmount"
                              >
                                678.00
                              </span>
                            </span>
                            {/**/}
                          </div>
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                                                                                     js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'addToCart' }"
                          >
                            <div className="big-spot__button-content">
                              <svg className="big-spot__add-to-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-add-to-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Add to cart{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-1 {\n            background: linear-gradient(7deg, rgb(42,71,99), rgba(42,71,99, .65) 30%, rgba(42,71,99, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-1 {\n            background: linear-gradient(7deg, rgb(42,71,99), rgba(42,71,99, .65) 30%, rgba(42,71,99, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
              <div
                className="big-spot-wrapper glide__slide big-spot-height glide__slide--clone"
                data-spot-id="7abf1a1a-2a18-11ee-b7b4-fa163eebc216"
                style={{ width: 1096, marginLeft: 8 }}
              >
                <a
                  href="http://www.gog.com/promo/2023_slayin_it_sale"
                  className="big-spot"
                  /* onclick="window.gogTools.sendPromotionClick(
        '\u007B\u0022subtitle\u0022\u003A\u0022Hack\u0027n\u0027Slash\u0020games\u0020up\u0020to\u0020\u002D90\u0025\u0022,\u0022title\u0022\u003A\u0022Torchlight\u00202,\u0020Darkest\u0020Dungeon,\u0020Apotheon\u0022,\u0022customButtonMessage\u0022\u003A\u0022Browse\u0022,\u0022customDiscountMessage\u0022\u003Anull,\u0022customTargetUrl\u0022\u003A\u0022http\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_slayin_it_sale\u0022,\u0022image\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/5725cd3d1780d5a2d376401df178edfb665a4bf03e7829599aed5b8b2bec50db\u0022,\u0022mobileImage\u0022\u003A\u0022\\\/\\\/images\u002D1.gog\u002Dstatics.com\\\/e8ed959cb8071829ee1c3070970971c8526ba56e2b16045eb276e207c2a6d427\u0022,\u0022logo\u0022\u003A\u0022\\\/\\\/images\u002D4.gog\u002Dstatics.com\\\/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091\u0022,\u0022logoForMobile\u0022\u003Anull,\u0022targetUrl\u0022\u003A\u0022http\u003A\\\/\\\/www.gog.com\\\/promo\\\/2023_slayin_it_sale\u0022,\u0022colour\u0022\u003A\u0022rgba\u002881,6,6,1.00\u0029\u0022,\u0022colourMobile\u0022\u003A\u0022rgba\u002881,6,6,1.00\u0029\u0022,\u0022visibleTo\u0022\u003A\u00222023\u002D07\u002D25T15\u003A59\u003A59\u002B03\u003A00\u0022,\u0022spotId\u0022\u003A\u00227abf1a1a\u002D2a18\u002D11ee\u002Db7b4\u002Dfa163eebc216\u0022,\u0022darkTheme\u0022\u003Afalse\u007D',
        {
            idKey: 'spotId',
            creative: 'big_spot',
            position: '3'
        });" */
                  gog-track-event='[{"eventCategory":"bigSpot","eventAction":"click","eventLabel":3},{"eventCategory":"bigSpot","eventAction":"click","eventLabel":"http:\/\/www.gog.com\/promo\/2023_slayin_it_sale"}]'
                >
                  <picture className="lazy big-spot__background-wrapper">
                    <source
                      className="big-spot__background-source"
                      media="(max-width:425px)"
                      lazy-srcset="//images-1.gog-statics.com/e8ed959cb8071829ee1c3070970971c8526ba56e2b16045eb276e207c2a6d427_bs_background_500.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-1.gog-statics.com/5725cd3d1780d5a2d376401df178edfb665a4bf03e7829599aed5b8b2bec50db_bs_background_800.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:426px) and (max-width: 704px)"
                      lazy-srcset="//images-1.gog-statics.com/5725cd3d1780d5a2d376401df178edfb665a4bf03e7829599aed5b8b2bec50db_bs_background_800.jpg"
                    />
                    <source
                      type="image/webp"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-1.gog-statics.com/5725cd3d1780d5a2d376401df178edfb665a4bf03e7829599aed5b8b2bec50db_bs_background_1275.webp"
                    />
                    <source
                      type="image/jpeg"
                      className="big-spot__background-source"
                      media="(min-width:705px) "
                      lazy-srcset="//images-1.gog-statics.com/5725cd3d1780d5a2d376401df178edfb665a4bf03e7829599aed5b8b2bec50db_bs_background_1275.jpg"
                    />
                    <img
                      className="big-spot__background js-background-2"
                      src=""
                    />
                  </picture>
                  <div className="big-spot__gradient big-spot__gradient-2" />
                  <div className="big-spot__container">
                    <div className="big-spot__content js-hoverable">
                      <div className="big-spot__body">
                        <div className="big-spot__logo">
                          <picture className="lazy">
                            <source
                              type="image/webp"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_small.webp,
                //images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_small_2x.webp 2x"
                            />
                            <source
                              type="image/webp"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_big.webp,
                //images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_big_2x.webp 2x"
                            />
                            <source
                              type="image/png"
                              media="(max-width: 1023px)"
                              lazy-srcset="//images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_small.png,
                //images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_small_2x.png 2x"
                            />
                            <source
                              type="image/png"
                              media="(min-width: 1024px)"
                              lazy-srcset="//images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_big.png,
                //images-4.gog-statics.com/a0e0790b9fcd18652947b8467400873ebee0202cd91351f18c6b91c5fa97c091_bs_logo_big_2x.png 2x"
                            />
                            <img className="big-spot__logo-image" src="" />
                          </picture>
                        </div>
                        <div className="big-spot__text">
                          <div className="big-spot__super-title">
                            Torchlight 2, Darkest Dungeon, Apotheon
                          </div>
                          <div className="big-spot__title">
                            HacknSlash games up to -90%
                          </div>
                        </div>
                        <div className="big-spot__action">
                          <button
                            ng-show="!tile.data.isInCart && '1'"
                            className="
                            big-spot__button
                            big-spot__button--custom                                                         js-product-tile__button"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'Browse' }"
                          >
                            <div className="big-spot__button-content">
                              <div className="big-spot__button-text">
                                Browse{" "}
                              </div>
                            </div>
                          </button>
                          <button
                            big-spot-checkout=""
                            ng-show="tile.data.isInCart"
                            ng-click="bigSpotCheckout.checkout($event)"
                            className="big-spot__button js-product-tile__button ng-hide"
                            gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'checkoutNow' }"
                          >
                            <div
                              className="big-spot__button-content"
                              ng-class="{
                            'big-spot__button-redirecting': bigSpotCheckout.isRedirecting
                        }"
                            >
                              <svg className="big-spot__in-cart-icon">
                                <use xlinkHref="/svg/83ce6d0d.svg#button-in-cart" />
                              </svg>
                              <div className="big-spot__button-text">
                                Checkout now
                              </div>
                              <div className="spinner-wrapper">
                                <span className="spinner" />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style
                    media="(max-width:767px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-2 {\n            background: linear-gradient(7deg, rgb(81,6,6), rgba(81,6,6, .65) 30%, rgba(81,6,6, 0) 50%);\n        }\n    ",
                    }}
                  />
                  <style
                    media="(min-width:768px)"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n         .big-spot__gradient-2 {\n            background: linear-gradient(7deg, rgb(81,6,6), rgba(81,6,6, .65) 30%, rgba(81,6,6, 0) 50%);\n        }\n    ",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="big-spot__carousel-pages-container slider-stays-in-place slide-hover-transition"
            data-glide-el="controls[nav]"
          >
            <span
              className="carousel__page carousel__page--click js-page-0"
              data-glide-dir="=0"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 1' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-1"
              data-glide-dir="=1"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 2' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-2 glide__bullet--active"
              data-glide-dir="=2"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 3' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-3"
              data-glide-dir="=3"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 4' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-4"
              data-glide-dir="=4"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 5' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-5"
              data-glide-dir="=5"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 6' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-6"
              data-glide-dir="=6"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 7' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-7"
              data-glide-dir="=7"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 8' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-8"
              data-glide-dir="=8"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 9' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-9"
              data-glide-dir="=9"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 10' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-10"
              data-glide-dir="=10"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 11' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-11"
              data-glide-dir="=11"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 12' }"
            />
            <span
              className="carousel__page carousel__page--click js-page-12"
              data-glide-dir="=12"
              gog-track-event="{ eventCategory: 'bigSpot', eventAction: 'click', eventLabel: 'pagination: 13' }"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
