"use client";

import { Fragment } from "react";

import { cn } from "@/lib/utils";

import useMenuStore from "../../store/useMenuState";
import { NavItem } from "./NavItem";
import { NavItemStoreMore } from "./NavItemStoreMore";
import { dataAll } from "./data";

export const Navbar = () => {
  const store = useMenuStore();
  const isOpen = store.isOpen === true;
  return (
    <>
      <div
        className={cn("menu-overlay", isOpen ? "is-visible" : "")}
        gog-menu-overlay=""
      ></div>
      <nav
        gog-menu=""
        className={cn(
          "menu menu-prices-in-sek menu--windows menu-curr-symbol-before menu-language-en-us",
          isOpen ? "menu--store-expanded menu--expanded" : ""
        )}
      >
        <div className="menu__container">
          <a href="/en" className="menu__logo">
            <svg viewBox="0 0 32 32" className="menu__logo-icon">
              <use xlinkHref="#icon-logo-gog" />
            </svg>
          </a>
          <div className="menu-main hide-in-lite-mode">
            {dataAll.map((item) => {
              if (item.title === "Store") {
                return (
                  <Fragment key={item.title}>
                    <NavItem {...item} />
                    <NavItemStoreMore />
                  </Fragment>
                );
              }
              return <NavItem key={item.title} {...item} />;
            })}

            <div
              className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-normal-mode menu-item--grouped js-menu-grouped"
              ng-mouseenter="menu.showWithDelay($event, 'grouped')"
              ng-mouseleave="menu.hide($event, 'grouped')"
              hook-test="menuMore"
            >
              <a
                className="menu-link menu-uppercase"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'grouped')"
              >
                More
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </a>
              <span className="menu-triangle" />
              <div className="menu-submenu js-menu">
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="/about_gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG.com ABOUT'}"
                  >
                    GOG.com
                  </a>
                </div>
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="/galaxy"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy App ABOUT'}"
                  >
                    GOG Galaxy
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/work"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'We are hiring ABOUT'}"
                  >
                    Join the team
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201400969?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Game Technical Issues SUPPORT'}"
                  >
                    Game technical issues
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201552965?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and payments SUPPORT'}"
                  >
                    Orders and payments
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201552985?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Account and Website SUPPORT'}"
                  >
                    Account and website
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201553005?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Downloads SUPPORT'}"
                  >
                    Downloads
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201553025?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy SUPPORT'}"
                  >
                    GOG Galaxy
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="/forum"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Forums COMMUNITY'}"
                  >
                    Forums
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/wishlist"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Community Wishlist COMMUNITY'}"
                  >
                    Community wishlist
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://www.facebook.com/gogcom"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Facebook COMMUNITY'}"
                  >
                    Facebook
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://twitter.com/GOGcom"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitter COMMUNITY'}"
                  >
                    Twitter
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://www.twitch.tv/gogcom"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitch COMMUNITY'}"
                  >
                    Twitch
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-grouped-mode js-menu-about"
              ng-mouseenter="menu.showWithDelay($event, 'about')"
              ng-mouseleave="menu.hide($event, 'about')"
              hook-test="menuAbout"
            >
              <a
                href="/en/about_gog"
                className="menu-link menu-uppercase"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'about')"
              >
                About
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </a>
              <span className="menu-triangle" />
              <div className="menu-submenu js-menu">
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="/en/about_gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG.com ABOUT'}"
                  >
                    GOG.com
                  </a>
                </div>
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="/galaxy"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy App ABOUT'}"
                  >
                    GOG Galaxy
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/work"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'We are hiring ABOUT'}"
                  >
                    Join the team
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-grouped-mode js-menu-community"
              ng-mouseenter="menu.showWithDelay($event, 'community')"
              ng-mouseleave="menu.hide($event, 'community')"
              hook-test="menuCommunity"
              menu-pending-notifications=""
            >
              <a
                className="menu-link menu-uppercase"
                href="/forum"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'community')"
                hook-test="menuCommunityButton"
                ng-class="{'menu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0}"
              >
                Community
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </a>
              <span className="menu-triangle" />
              <div className="menu-submenu js-menu">
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="/forum"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'All forums COMMUNITY'}"
                  >
                    All forums
                  </a>
                </div>
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="/forum/general"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'General discussion forums COMMUNITY'}"
                  >
                    General discussion forum
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    hook-test="menuAccountForumReplies"
                    href="/forum/myrecentposts"
                    ng-class="{'menu-submenu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0}"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Forum replies COMMUNITY'}"
                  >
                    Forum replies
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="/wishlist"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Community Wishlist COMMUNITY'}"
                  >
                    Community wishlist
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="/blog"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Blog'}"
                  >
                    Blog
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="https://www.facebook.com/gogcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Facebook COMMUNITY'}"
                  >
                    Facebook
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="https://twitter.com/GOGcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitter COMMUNITY'}"
                  >
                    Twitter
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    className="menu-submenu-link"
                    href="https://www.twitch.tv/gogcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitch COMMUNITY'}"
                  >
                    Twitch
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-grouped-mode js-menu-support"
              ng-mouseenter="menu.showWithDelay($event, 'support')"
              ng-mouseleave="menu.hide($event, 'support')"
              hook-test="menuSupport"
            >
              <a
                href="https://support.gog.com/hc/en-us?product=gog"
                className="menu-link menu-uppercase"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'support')"
              >
                Support
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </a>
              <span className="menu-triangle" />
              <div className="menu-submenu js-menu">
                <div className="menu-submenu-item  menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201400969?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Game Technical Issues SUPPORT'}"
                  >
                    Game technical issues
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201552965?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and payments SUPPORT'}"
                  >
                    Orders and payments
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201552985?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Account and Website SUPPORT'}"
                  >
                    Account and website
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201553005?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Downloads SUPPORT'}"
                  >
                    Downloads
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="https://support.gog.com/hc/en-us/categories/201553025?product=gog"
                    className="menu-submenu-link"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy SUPPORT'}"
                  >
                    GOG Galaxy
                  </a>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-item--animated has-submenu menu-anonymous js-menu-anonymous"
              ng-controller="menuAnonymousCtrl as anonymous"
              ng-show="anonymous.isResponseFetched && !anonymous.isUserLoggedIn"
              ng-mouseenter="menu.show($event, 'anonymous')"
              ng-mouseleave="menu.hide($event, 'anonymous')"
              hook-test="menuAnonymous"
            >
              <a
                className="menu-link menu-link--anonymous menu-uppercase hide-on-touch-device"
                ng-click="anonymous.openLogin()"
                hook-test="menuAnonymousButton"
              >
                <span gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }">
                  Sign in
                </span>
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
                <span className="menu-triangle menu-triangle--others menu-triangle--anonymous" />
              </a>
              <a
                className="menu-link menu-link--anonymous menu-uppercase hide-on-non-touch-device"
                hook-test="menuLoginMobile"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'anonymous')"
              >
                <span gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }">
                  Sign in
                </span>
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
                <span className="menu-triangle menu-triangle--others menu-triangle--anonymous" />
              </a>
              <div
                className="menu-submenu menu-anonymous__submenu"
                ng-click="menu.stopPropagation($event)"
                ng-mouseenter="menu.cancelTimeout('anonymous')"
              >
                <div className="menu-header menu-anonymous-header">
                  <a
                    className="menu-btn menu-btn--gray menu-anonymous-header__btn menu-anonymous-header__btn--create-account menu-uppercase"
                    ng-click="anonymous.openRegistration()"
                    hook-test="menuSignUp"
                    gog-track-event="{eventCategory: 'topBar', eventAction:'register', eventLabel:'Register' }"
                  >
                    Create account
                  </a>
                  <span className="menu-anonymous-header__separator" />
                  <a
                    className="menu-btn menu-anonymous-header__btn menu-anonymous-header__btn--sign-in menu-uppercase"
                    ng-click="anonymous.openLogin()"
                    hook-test="menuLogin"
                    gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }"
                  >
                    Sign in
                  </a>
                </div>
                <figure className="menu-anonymous__shelf" />
                <p className="menu-anonymous__about">
                  <b>
                    GOG.com is a digital distribution platform – an online store
                    with a curated selection of games, an optional gaming client
                    giving you freedom of choice, and a vivid community of
                    gamers.
                  </b>
                  All of this born from a deeply rooted love for games, utmost
                  care about customers, and a belief that you should own the
                  things you buy.
                </p>
                <p className="menu-anonymous__features-header">
                  <span className="menu-anonymous__features-header-in">
                    What is GOG.com about?
                  </span>
                </p>
                <div
                  className="menu-features-slider"
                  gog-menu-features-slider=""
                  ng-mouseenter="slider.stop()"
                  ng-mouseleave="slider.play()"
                >
                  <span
                    className="menu-features-slider__nav menu-features-slider__nav--left js-no-prevent-default"
                    ng-click="slider.triggerPrevSlide()"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-features-slider__nav-icon"
                    >
                      <use xlinkHref="#icon-fat-arrow-left" />
                    </svg>
                  </span>
                  <span
                    className="menu-features-slider__nav menu-features-slider__nav--right js-no-prevent-default"
                    ng-click="slider.triggerNextSlide()"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-features-slider__nav-icon"
                    >
                      <use xlinkHref="#icon-fat-arrow-right" />
                    </svg>
                  </span>
                  <div className="menu-features-slider__slide js-slide is-active">
                    <div className="menu-features-slider__slide-text">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide1"
                      >
                        <use xlinkHref="#icon-star" />
                      </svg>
                      <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide1">
                        Hand-picking the best in gaming.
                      </b>{" "}
                      A selection of great games, from modern hits to all-time
                      classics, that you really shouldn’t miss.
                    </div>
                  </div>
                  <div className="menu-features-slider__slide js-slide">
                    <div className="menu-features-slider__slide-text">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide2"
                      >
                        <use xlinkHref="#icon-heart" />
                      </svg>
                      <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide2">
                        Customer-first approach.
                      </b>{" "}
                      Delivering user-friendly support enriched with additional
                      customer benefits.
                    </div>
                  </div>
                  <div className="menu-features-slider__slide js-slide">
                    <div className="menu-features-slider__slide-text">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide3"
                      >
                        <use xlinkHref="#icon-hand-picked" />
                      </svg>
                      <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide3">
                        Gamer-friendly platform.
                      </b>{" "}
                      We’re here to make a difference in the way you buy and
                      play your games, giving you freedom of choice and a
                      hassle-free experience.
                    </div>
                  </div>
                  <div className="menu-features-slider__timer is-on js-timer">
                    <span className="menu-features-slider__timer-section js-timer-section" />
                    <span className="menu-features-slider__timer-section js-timer-section" />
                    <span className="menu-features-slider__timer-section js-timer-section" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-item--animated menu-account has-submenu js-menu-account ng-hide"
              ng-controller="menuAccountCtrl as account"
              ng-show="account.isUserLoggedIn"
              ng-mouseenter="menu.showWithDelay($event, 'account')"
              ng-mouseleave="menu.hide($event, 'account')"
              hook-test="menuAccount"
              menu-pending-notifications=""
            >
              <a
                ng-href="/feed"
                className="menu-link"
                hook-test="menuAccountButton"
                ng-touchstart="$event.preventDefault(); menu.toggle($event, 'account')"
                ng-class="{'menu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0}"
                data-hj-suppress=""
                href="/feed"
              >
                {/**/}
                <span
                  id="menuUsername"
                  className="menu-username"
                  ng-bind="account.username"
                  data-hj-suppress=""
                />
                <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
                <span className="menu-triangle menu-triangle--others" />
              </a>
              <div
                className="menu-submenu menu-account__submenu"
                ng-mouseenter="menu.cancelTimeout('account')"
              >
                <div className="menu-header menu-account__user">
                  <div className="menu-account__user-in" data-hj-suppress="">
                    {/**/}
                    <span className="menu-header__label">Your account</span>
                    <span
                      className="menu-account__user-name"
                      ng-bind="account.username"
                      data-hj-suppress=""
                    />
                  </div>
                </div>
                <div
                  className="menu-submenu-item menu-submenu-item--hover"
                  ng-show="account.isUserProfileEnabled"
                >
                  <a
                    href="/feed"
                    className="menu-submenu-link"
                    hook-test="menuAccountFeed"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Feed ACCOUNT'}"
                    ng-class="{'menu-submenu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0}"
                  >
                    Activity feed
                  </a>
                </div>
                <div
                  className="menu-submenu-item menu-submenu-item--hover"
                  ng-show="account.isUserProfileEnabled"
                >
                  <a
                    href="/u"
                    className="menu-submenu-link"
                    hook-test="menuAccountProfile"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Profile ACCOUNT'}"
                  >
                    Your profile
                  </a>
                </div>
                <div
                  className="menu-submenu-separator"
                  ng-show="account.isUserProfileEnabled"
                />
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account"
                    className="menu-submenu-link"
                    hook-test="menuAccountGames"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Games ACCOUNT'}"
                  >
                    Games
                    <span
                      className="menu-submenu-item__label ng-hide"
                      ng-show="account.userGamesCount > 0"
                      ng-bind="account.userGamesCount"
                    >
                      0
                    </span>
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account/movies"
                    className="menu-submenu-link"
                    hook-test="menuAccountMovies"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Movies ACCOUNT'}"
                  >
                    Movies
                    <span
                      className="menu-submenu-item__label ng-hide"
                      ng-show="account.userMoviesCount > 0"
                      ng-bind="account.userMoviesCount"
                    >
                      0
                    </span>
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account/wishlist"
                    className="menu-submenu-link"
                    hook-test="menuAccountWishlist"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Wishlist ACCOUNT'}"
                  >
                    Wishlist
                    <span
                      className="menu-submenu-item__label ng-hide"
                      ng-show="account.userWishlistedItemsCount > 0"
                      ng-bind="account.userWishlistedItemsCount"
                    >
                      0
                    </span>
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/redeem"
                    className="menu-submenu-link"
                    hook-test="menuAccountRedeemCode"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Redeem ACCOUNT'}"
                  >
                    Redeem a code
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account/friends"
                    className="menu-submenu-link"
                    hook-test="menuAccountFrieds"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Friends ACCOUNT'}"
                  >
                    Friends
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account/chat"
                    className="menu-submenu-link"
                    hook-test="menuAccountChat"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Chat ACCOUNT'}"
                  >
                    Chat
                  </a>
                </div>
                <div className="menu-submenu-separator" />
                <div className="menu-submenu-item menu-submenu-item--hover menu-submenu-item--with-wallet">
                  <a
                    href="/en/wallet"
                    className="menu-submenu-link"
                    hook-test="menuAccountWallet"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Wallet ACCOUNT'}"
                  >
                    Your Wallet
                    <span
                      className="menu-submenu-item__label _price ng-hide"
                      ng-show="account.userWalletBalance > 0"
                      ng-bind="account.userWalletBalance"
                    >
                      0
                    </span>
                  </a>
                </div>
                <div className="menu-submenu-item menu-submenu-item--hover">
                  <a
                    href="/en/account/settings/orders"
                    className="menu-submenu-link"
                    hook-test="menuAccountOrdersAndSettings"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and settings ACCOUNT'}"
                  >
                    Orders &amp; settings
                  </a>
                </div>
                <div
                  className="menu-submenu-item menu-submenu-item--static menu-submenu-item--hover"
                  gog-menu-lang-and-currency=""
                  ng-class="{ 'is-active': langAndCurrency.isVisible }"
                  ng-mouseenter="langAndCurrency.show()"
                  ng-mouseleave="langAndCurrency.hide()"
                >
                  <a
                    href="/en/account/settings/personal"
                    className="menu-submenu-link"
                    hook-test="menuAccountLangAndCurrency"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Language and currency ACCOUNT'}"
                    ng-touchstart="$event.preventDefault(); langAndCurrency.show()"
                  >
                    Language &amp; currency
                    <svg viewBox="0 0 32 32" className="menu-submenu-icon">
                      <use xlinkHref="#icon-arrow-right4" />
                    </svg>
                    <svg viewBox="0 0 32 32" className="menu-submenu-icon">
                      <use xlinkHref="#icon-arrow-right4" />
                    </svg>
                  </a>
                  <div
                    className="menu-language-and-currency"
                    ng-class="{ 'is-visible': langAndCurrency.isVisible }"
                    ng-mouseenter="langAndCurrency.cancelHidding()"
                  >
                    <div className="menu-language">
                      <p className="menu-language-and-currency__header">
                        Language:
                      </p>
                      <ul className="menu-language-and-currency__list">
                        <li
                          className="menu-language-and-currency__list-item is-active"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'en-US'}"
                          ng-click="langAndCurrency.changeLanguage('en-US')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          English
                        </li>
                        <li
                          className="menu-language-and-currency__list-item"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'de-DE'}"
                          ng-click="langAndCurrency.changeLanguage('de-DE')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          Deutsch
                        </li>
                        <li
                          className="menu-language-and-currency__list-item"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'fr-FR'}"
                          ng-click="langAndCurrency.changeLanguage('fr-FR')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          Français
                        </li>
                        <li
                          className="menu-language-and-currency__list-item"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'pl-PL'}"
                          ng-click="langAndCurrency.changeLanguage('pl-PL')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          Polski
                        </li>
                        <li
                          className="menu-language-and-currency__list-item"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'ru-RU'}"
                          ng-click="langAndCurrency.changeLanguage('ru-RU')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          Pусский
                        </li>
                        <li
                          className="menu-language-and-currency__list-item"
                          ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'zh-Hans'}"
                          ng-click="langAndCurrency.changeLanguage('zh-Hans')"
                        >
                          <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                          >
                            <use xlinkHref="#icon-tick" />
                          </svg>
                          中文(简体)
                        </li>
                      </ul>
                    </div>
                    <p className="menu-language-and-currency__header">
                      Currency:
                    </p>
                    <ul className="menu-language-and-currency__list">
                      <li
                        className="menu-language-and-currency__list-item is-active"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'SEK'}"
                        ng-click="langAndCurrency.changeCurrency('SEK')"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-language-and-currency__tick"
                        >
                          <use xlinkHref="#icon-tick" />
                        </svg>
                        SEK
                      </li>
                      <li
                        className="menu-language-and-currency__list-item"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'EUR'}"
                        ng-click="langAndCurrency.changeCurrency('EUR')"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-language-and-currency__tick"
                        >
                          <use xlinkHref="#icon-tick" />
                        </svg>
                        EUR
                      </li>
                      <li
                        className="menu-language-and-currency__list-item"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'USD'}"
                        ng-click="langAndCurrency.changeCurrency('USD')"
                      >
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-language-and-currency__tick"
                        >
                          <use xlinkHref="#icon-tick" />
                        </svg>
                        USD
                      </li>
                    </ul>
                    <div
                      className="menu-language-and-currency__footer"
                      ng-class="{'is-visible': langAndCurrency.showApplyButton}"
                    >
                      <a
                        className="menu-language-and-currency__apply"
                        ng-click="langAndCurrency.applyChanges()"
                        hook-test="menuAccountLangAndCurrencyApply"
                      >
                        Apply changes
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-submenu-separator" />
                <div
                  className="menu-submenu-item menu-submenu-item--hover"
                  hook-test="menuAccountSignOut"
                  gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Sign out ACCOUNT'}"
                >
                  <a ng-click="account.logout()" className="menu-submenu-link">
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-tray">
            <div
              className="menu-item menu-item--invisible-on-loading menu-notifications has-submenu js-menu-notifications ng-hide"
              ng-controller="menuNotificationsCtrl as notifications"
              ng-show="notifications.isVisible"
              hook-test="menuNotifications"
            >
              <a
                className="menu-link menu-link--icon"
                ng-click="menu.toggle($event, 'notifications', true)"
                ng-mouseleave="menu.hide($event, 'notifications', 600)"
                ng-mouseenter="menu.cancelTimeout('notifications')"
                ng-class="{ 'is-notifying': notifications.newNotificationAnimation }"
                hook-test="menuNotificationsButton"
              >
                <svg
                  viewBox="0 0 15 16"
                  className="menu-icon-svg menu-icon-svg--notifications"
                  ng-class="{ 'got-notification': notifications.newNotificationAnimation }"
                >
                  <use xlinkHref="#icon-notification" />
                </svg>
                <span
                  className="menu-item__count menu-item__count--notifications"
                  ng-bind="notifications.notificationsCountLabel"
                  ng-class="{ 'is-highlighted': notifications.haveNewNotifications }"
                >
                  0
                </span>
                <span className="menu-triangle menu-triangle--centered  menu-triangle--others" />
              </a>
              <div
                className="menu-submenu menu-notifications__submenu"
                ng-mouseleave="menu.hideOnMouseleave($event, 'notifications', 600)"
                ng-mouseenter="menu.cancelTimeout('notifications')"
              >
                <div
                  className="menu-header menu-header-notifications ng-hide"
                  ng-show="notifications.list.length > 0"
                  ng-class="{
            'has-unread-notifications': notifications.notificationsCount > 0
        }"
                >
                  <div className="menu-header__label">Your notifications</div>
                  <div className="menu-header__unread menu-header-notifications--has-unread-notifications">
                    0 pending
                  </div>
                  <div className="menu-header__unread menu-header-notifications--no-unread-notifications">
                    There’s nothing to read yet
                  </div>
                  <a
                    className="menu-btn menu-btn--gray menu-header__btn menu-header-notifications__btn--mark-all-as-read menu-uppercase"
                    ng-click="notifications.deleteAllNotifications(); menu.cancelTimeout('notifications')"
                    hook-test="clearAllNotifications"
                  >
                    Clear all
                  </a>
                </div>
                <div
                  className="menu-notifications-empty"
                  ng-show="notifications.showEmptyNotificationsMessage"
                >
                  <div className="menu-notifications-empty__header menu-uppercase">
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-notifications-empty__header-icon"
                    >
                      <use xlinkHref="#icon-notifications-empty" />
                    </svg>
                    Your Notifications
                  </div>
                  <hr className="menu-notifications-empty__line" />
                  <div className="menu-notifications-empty__description">
                    See new chat messages, friend invites, as well as important
                    announcements and deals relevant to you
                  </div>
                </div>
                <div
                  className="menu-notifications__list gog-custom-scrollbar ng-hide"
                  gog-custom-scrollbar=""
                  custom-scrollbar-refresh={0}
                  ng-hide="notifications.showEmptyNotificationsMessage"
                >
                  <div className="js-gog-custom-scrollbar-wrapper gog-custom-scrollbar__wrapper">
                    <div
                      className="js-gog-custom-scrollbar-content gog-custom-scrollbar__content menu-notifications__content"
                      style={{ width: "100%" }}
                    >
                      <div className="menu-notifications__list-in">{/**/}</div>
                      <div className="js-gog-custom-scrollbar-bar gog-custom-scrollbar__bar menu-scrollbar__bar is-disabled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-friends has-submenu js-menu-friends ng-hide"
              ng-controller="menuFriendsCtrl as friends"
              ng-show="friends.isVisible"
            >
              <a
                className="menu-link menu-link--icon"
                ng-click="menu.toggle($event, 'friends', true)"
                hook-test="menuFriends"
              >
                <svg
                  viewBox="0 0 17 16"
                  className="menu-icon-svg menu-icon-svg--friends"
                >
                  <use xlinkHref="#icon-friends2" />
                </svg>
                <span
                  className="menu-item__count menu-item__count--friends"
                  ng-bind="friends.online"
                >
                  0
                </span>
                <span className="menu-triangle menu-triangle--centered  menu-triangle--others" />
              </a>
              <div className="menu-submenu menu-friends__submenu">
                <div className="menu-header ng-hide" ng-show="friends.total">
                  <div className="menu-header__label">Your friends</div>
                  <div
                    className="menu-header__online ng-hide"
                    ng-show="friends.total"
                  >
                    <span ng-bind="friends.online">0</span>
                    online right now
                  </div>
                  <div className="menu-header__online" ng-hide="friends.total">
                    Friends list is currently empty
                  </div>
                  <a
                    href="/account/friends"
                    className="menu-btn menu-header__btn menu-friends__btn menu-uppercase ng-hide"
                    ng-show="friends.total"
                  >
                    Manage friends
                  </a>
                </div>
                <div className="menu-friends-empty" ng-hide="friends.total">
                  <div className="menu-friends-empty__header menu-uppercase">
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-friends-empty__header-icon"
                    >
                      <use xlinkHref="#icon-friends2" />
                    </svg>
                    Connect with friends
                  </div>
                  <hr className="menu-friends-empty__line" />
                  <div
                    className="menu-friends-empty__description"
                    ng-hide="friends.isLoadingFriendlist"
                  >
                    Play, chat, and share experiences with your friends on
                    GOG.com
                  </div>
                  <div
                    className="menu-friends-empty__spinner is-spinning ng-hide"
                    ng-show="friends.isLoadingFriendlist"
                  />
                  <a
                    href="/account/friends"
                    className="menu-btn menu-friends-empty__btn menu-uppercase"
                    ng-hide="friends.isLoadingFriendlist"
                  >
                    Invite friends
                  </a>
                </div>
                <div
                  className="menu-friends__list gog-custom-scrollbar ng-hide"
                  gog-custom-scrollbar=""
                  custom-scrollbar-refresh={0}
                  ng-show="friends.total"
                >
                  <div className="js-gog-custom-scrollbar-wrapper gog-custom-scrollbar__wrapper">
                    <div
                      className="js-gog-custom-scrollbar-content gog-custom-scrollbar__content menu-friends__content"
                      style={{ width: "100%" }}
                    >
                      <div className="menu-friends__list-in">{/**/}</div>
                      <div className="js-gog-custom-scrollbar-bar gog-custom-scrollbar__bar menu-scrollbar__bar is-disabled" />
                    </div>
                  </div>
                  <span className="menu__list-shadow" />
                </div>
              </div>
            </div>
            <div
              className="menu-item menu-cart has-submenu js-menu-cart"
              ng-controller="menuCartCtrl as cart"
              hook-test="menuCart"
            >
              <a
                className="menu-link menu-link--icon menu-link--cart"
                ng-click="menu.toggle($event, 'cart', true)"
                ng-mouseleave="menu.hide($event, 'cart', 600)"
                ng-mouseenter="menu.cancelTimeout('cart')"
                ng-class="{ 'is-notifying': cart.itemAddedAnimation }"
                data-cy="menu-cart-open-button"
                hook-test="menuCartButton"
              >
                <svg viewBox="0 0 32 32" className="menu-icon-svg">
                  <use xlinkHref="#icon-cart2" />
                </svg>
                <span
                  className="menu-item__count menu-item__count--cart"
                  ng-bind="cart.cartCountView"
                  ng-class="{ 'is-highlighted': cart.itemAdded }"
                  hook-test="cartCounter"
                >
                  0
                </span>
                <span
                  className="menu-triangle menu-triangle--centered"
                  ng-class="{'menu-triangle--others': !cart.isCartEmpty}"
                />
              </a>
              <div
                className="menu-submenu menu-cart__submenu"
                ng-mouseleave="menu.hideOnMouseleave($event, 'cart', 600)"
                ng-mouseenter="menu.cancelTimeout('cart')"
              >
                <div
                  className="menu-header menu-header-cart ng-hide"
                  ng-hide="cart.isCartEmpty"
                >
                  <a
                    className="menu-cart__btn menu-btn menu-btn--green ng-hide"
                    ng-click="cart.goToCheckout()"
                    ng-class="{ 'is-spinning': cart.isSpinnerVisible }"
                    ng-show="!cart.isCartEmpty"
                    data-cy="menu-cart-checkout-button"
                    hook-test="cartCheckoutNow"
                  >
                    Go to checkout
                  </a>
                  <div
                    className="menu-cart-items"
                    ng-hide="cart.isSpinnerVisible"
                  >
                    <span className="menu-header__label hide-in-lite-mode">
                      Your shopping cart
                    </span>
                    <span
                      className="menu-header__label hide-in-normal-mode hide-in-grouped-mode"
                      ng-show="cart.isCartEmpty"
                    >
                      Your shopping cart
                    </span>
                    <span
                      className="menu-header__items"
                      ng-show="cart.isCartEmpty"
                    >
                      is empty right now.
                    </span>
                    <span
                      className="menu-header__label hide-in-normal-mode hide-in-grouped-mode ng-hide"
                      ng-show="!cart.isCartEmpty"
                    >
                      <span ng-bind="cart.cartCount">0</span>&nbsp;
                      {/* <ng-pluralize
                        count="cart.cartCount"
                        when="{
                    'one' : 'Item in cart',
                    'few' : 'Items in cart',
                    'many' : 'Items in cart',
                    'other': 'Items in cart'
                 }"
                      >
                        Items in cart
                      </ng-pluralize> */}
                    </span>
                    <span
                      className="menu-header__items hide-in-lite-mode ng-hide"
                      ng-show="!cart.isCartEmpty"
                    >
                      <span ng-bind="cart.cartCount">0</span>&nbsp;
                      {/*  <ng-pluralize
                        count="cart.cartCount"
                        when="{
                    'one' : 'Item added',
                    'few' : 'Items added',
                    'many' : 'Items added',
                    'other': 'Items added'
                 }"
                      >
                        Items added
                      </ng-pluralize> */}
                    </span>
                  </div>
                  <div
                    className="menu-cart__total-price _price ng-hide"
                    ng-bind="cart.cartTotalPrice.amount"
                    ng-hide="cart.isSpinnerVisible || cart.cartTotalPrice.isZero || cart.isCartEmpty"
                    hook-test="cartTotalPrice"
                  >
                    0.00
                  </div>
                </div>
                <div className="menu-cart-empty" ng-show="cart.isCartEmpty">
                  <div className="menu-cart-empty__header menu-uppercase">
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-cart-empty__header-icon"
                    >
                      <use xlinkHref="#icon-cart2" />
                    </svg>
                    Your cart is empty
                  </div>
                  <hr className="menu-cart-empty__line" />
                  <div className="menu-cart-empty__description">
                    Explore great games and offers
                  </div>
                  <a
                    className="menu-btn menu-cart-empty__btn menu-uppercase"
                    href="/en/games"
                  >
                    Browse bestsellers
                  </a>
                  <a
                    className="menu-btn menu-cart-empty__btn menu-cart-empty__btn--wishlist menu-uppercase ng-hide"
                    ng-show="cart.isWishlistButtonVisible"
                    href="/en/account/wishlist"
                  >
                    Your wishlist
                  </a>
                </div>
                <div
                  className="menu-cart__products-list"
                  data-cy="menu-cart-products-list"
                >
                  <div
                    className=" gog-custom-scrollbar"
                    gog-custom-scrollbar=""
                    custom-scrollbar-refresh={0}
                  >
                    <div className="js-gog-custom-scrollbar-wrapper gog-custom-scrollbar__wrapper">
                      <div
                        className="js-gog-custom-scrollbar-content gog-custom-scrollbar__content menu-cart__content"
                        style={{ width: "100%" }}
                      >
                        {/**/}
                        <div className="js-gog-custom-scrollbar-bar gog-custom-scrollbar__bar menu-scrollbar__bar is-disabled" />
                      </div>
                    </div>
                    <span className="menu__list-shadow" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="menu-item js-menu-search"
              ng-controller="menuSearchCtrl as search"
            >
              <a
                className="menu-link menu-link--last menu-link--search menu-link--icon"
                ng-click="menu.toggle($event, 'search', true)"
                hook-test="menuSearch"
              >
                <svg
                  viewBox="0 0 14.69 16"
                  className="menu-icon-svg menu-icon-svg--search"
                >
                  <use xlinkHref="#icon-search2" />
                </svg>
              </a>
              <div className="menu-submenu menu-search" gog-menu-search="">
                <div className="menu-search-toolbar">
                  <svg viewBox="0 0 32 32" className="menu-search-icon">
                    <use xlinkHref="#icon-search2" />
                  </svg>
                  <div className="menu-search-input">
                    <input
                      type="text"
                      className="menu-search-input__field js-menu-search-input ng-pristine ng-untouched ng-valid ng-empty"
                      ng-model="search.searchTerm"
                      ng-change="search.searchTermChange()"
                      ng-model-options="{ debounce: {'default': 300} }"
                      hook-test="menuSearchInput"
                    />
                    <a
                      className="menu-search-input__clear menu-search-loader menu-uppercase ng-hide"
                      ng-class="{ 'is-loading': search.isLoading }"
                      ng-click="search.clear()"
                      ng-show="search.searchTerm.length > 0"
                    >
                      clear
                      <span className="menu-search-loader__ball" />
                      <span className="menu-search-loader__ball" />
                      <span className="menu-search-loader__ball" />
                      <span className="menu-search-loader__ball" />
                    </a>
                  </div>
                  <a
                    className="menu-search-toolbar__results-count menu-uppercase ng-hide"
                    ng-class="{ 'is-active': search.selectedCategory == 'games' }"
                    ng-click="search.showGames()"
                    ng-show="search.totalGames"
                    hook-test="menuSearchGames"
                  >
                    <span ng-bind="search.totalGames">0</span> Games
                    <span className="menu-triangle menu-triangle--centered" />
                  </a>
                  <a
                    className="menu-search-toolbar__results-count menu-uppercase ng-hide"
                    ng-class="{ 'is-active': search.selectedCategory == 'movies' }"
                    ng-click="search.showMovies()"
                    ng-show="search.totalMovies"
                    hook-test="menuSearchMovies"
                  >
                    <span ng-bind="search.totalMovies">0</span> Movies
                    <span className="menu-triangle menu-triangle--centered" />
                  </a>
                  <a
                    className="menu-search-toolbar__close"
                    ng-click="menu.hide($event, 'search')"
                  >
                    <svg viewBox="0 0 32 32" className="menu-icon-svg">
                      <use xlinkHref="#icon-close4" />
                    </svg>
                  </a>
                </div>
                <div
                  className="menu-search__no-results ng-hide"
                  ng-show="search.selectedCategoryProducts.length == 0 && search.searchCount > 0 && !search.isLoading"
                >
                  <div className="menu-search-empty">
                    <div className="menu-search-empty__header menu-uppercase">
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-search-empty__header-icon"
                      >
                        <use xlinkHref="#icon-search2" />
                      </svg>
                      No results found
                    </div>
                    <hr className="menu-search-empty__line" />
                    <div className="menu-search-empty__description">
                      Try adjusting the terms of your search, you can search by
                      game titles, publishers, developers and tags.
                    </div>
                    <a
                      href="/en/games"
                      className="menu-btn menu-search-empty__btn menu-uppercase ng-hide"
                      ng-show="search.selectedCategory == 'games'"
                    >
                      Browse all games
                    </a>
                    <a
                      href="/en/movies"
                      className="menu-btn menu-search-empty__btn menu-uppercase ng-hide"
                      ng-show="search.selectedCategory == 'movies'"
                    >
                      Browse movies
                    </a>
                  </div>
                </div>
                <div
                  className="menu-search__results ng-hide"
                  ng-show="search.selectedCategoryProducts.length"
                >
                  <div
                    className="menu-search__results-list gog-custom-scrollbar"
                    gog-custom-scrollbar=""
                    custom-scrollbar-refresh={0}
                  >
                    <div className="js-gog-custom-scrollbar-wrapper gog-custom-scrollbar__wrapper">
                      <div
                        className="js-gog-custom-scrollbar-content gog-custom-scrollbar__content menu-search__content js-menu-search-content"
                        style={{ width: "100%" }}
                      >
                        <div className="menu-search__results-rows list--rows">
                          {/**/}
                          <a
                            ng-href="/en/games?query="
                            className="menu-btn menu-btn--full menu-search__results-more ng-hide"
                            ng-show="search.selectedCategory == 'games' && search.totalGames > 20"
                            href="/en/games?query="
                          >
                            BROWSE <span ng-bind="search.totalGames">0</span>{" "}
                            GAMES
                          </a>
                          <a
                            ng-href="/movies?search="
                            className="menu-btn menu-btn--full menu-search__results-more ng-hide"
                            ng-show="search.selectedCategory == 'movies' && search.totalMovies > 20"
                            href="/movies?search="
                          >
                            BROWSE <span ng-bind="search.totalMovies">0</span>{" "}
                            MOVIES
                          </a>
                        </div>
                      </div>
                      <div className="js-gog-custom-scrollbar-bar gog-custom-scrollbar__bar menu-scrollbar__bar is-disabled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item menu-lite js-menu-lite">
              <a
                className="menu-lite-link hide-in-normal-mode hide-in-grouped-mode menu-uppercase"
                ng-click="menu.toggle($event, 'lite', true)"
              >
                <span className="menu-hamburger">
                  <span className="menu-hamburger__line" />
                  <span className="menu-hamburger__line" />
                  <span className="menu-hamburger__line" />
                </span>
                Menu
              </a>
              <div
                className="menu-submenu menu-lite__submenu"
                gog-menu-accordion=""
              >
                <div className="menu-submenu-item">
                  <a
                    href="/games"
                    className="menu-submenu-link menu-submenu-link--lite"
                  >
                    Store
                  </a>
                  <span
                    className="menu-submenu-item__expand-trigger"
                    ng-click="accordion.toggle('store')"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-submenu-item__expand-icon"
                      ng-class="{'is-expanded': accordion.expandedSections.store}"
                    >
                      <use xlinkHref="#icon-arrow-down2" />
                    </svg>
                  </span>
                  <div
                    className="menu-accordion"
                    ng-class="{'is-expanded': accordion.expandedSections.store }"
                  >
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a className="menu-submenu-item-link" href="/games/new">
                        New releases
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a className="menu-submenu-item-link" href="/games">
                        Bestsellers
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        className="menu-submenu-item-link"
                        href="/games/discounted"
                      >
                        On sale now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-submenu-item">
                  <a
                    href="/about_gog"
                    className="menu-submenu-link menu-submenu-link--lite"
                  >
                    About
                  </a>
                  <span
                    className="menu-submenu-item__expand-trigger"
                    ng-click="accordion.toggle('about')"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-submenu-item__expand-icon"
                      ng-class="{'is-expanded': accordion.expandedSections.about}"
                    >
                      <use xlinkHref="#icon-arrow-down2" />
                    </svg>
                  </span>
                  <div
                    className="menu-accordion"
                    ng-class="{'is-expanded': accordion.expandedSections.about }"
                  >
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/about_gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG.com ABOUT'}"
                      >
                        GOG.com
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/galaxy"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy App ABOUT'}"
                      >
                        GOG Galaxy
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/work"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'We are hiring ABOUT'}"
                      >
                        Join the team
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-submenu-item">
                  <a
                    href="/forum"
                    className="menu-submenu-link menu-submenu-link--lite"
                    ng-class="{
                'menu-submenu-link--pending-notifications': !accordion.expandedSections.community && menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0
            }"
                  >
                    Community
                  </a>
                  <span
                    className="menu-submenu-item__expand-trigger"
                    ng-click="accordion.toggle('community')"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-submenu-item__expand-icon"
                      ng-class="{'is-expanded': accordion.expandedSections.community}"
                    >
                      <use xlinkHref="#icon-arrow-down2" />
                    </svg>
                  </span>
                  <div
                    className="menu-accordion"
                    ng-class="{'is-expanded': accordion.expandedSections.community }"
                  >
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/forum"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'All forums COMMUNITY'}"
                      >
                        All forums
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/forum/general"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'General discussion forums COMMUNITY'}"
                      >
                        General discussion forum
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="/forum/myrecentposts"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Forum replies COMMUNITY'}"
                        ng-class="{'menu-submenu-item--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0}"
                      >
                        Forum replies
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-submenu-item">
                  <a
                    href="https://support.gog.com/hc/en-us?product=gog"
                    className="menu-submenu-link menu-submenu-link--lite"
                  >
                    Support
                  </a>
                  <span
                    className="menu-submenu-item__expand-trigger"
                    ng-click="accordion.toggle('support')"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      className="menu-submenu-item__expand-icon"
                      ng-class="{'is-expanded': accordion.expandedSections.support}"
                    >
                      <use xlinkHref="#icon-arrow-down2" />
                    </svg>
                  </span>
                  <div
                    className="menu-accordion"
                    ng-class="{'is-expanded': accordion.expandedSections.support }"
                  >
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="https://support.gog.com/hc/en-us/categories/201400969?product=gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Game Technical Issues SUPPORT'}"
                      >
                        Game technical issues
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="https://support.gog.com/hc/en-us/categories/201552965?product=gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and payments SUPPORT'}"
                      >
                        Orders and payments
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="https://support.gog.com/hc/en-us/categories/201552985?product=gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Account and Website SUPPORT'}"
                      >
                        Account and website
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="https://support.gog.com/hc/en-us/categories/201553005?product=gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Downloads SUPPORT'}"
                      >
                        Downloads
                      </a>
                    </div>
                    <div className="menu-submenu-item menu-submenu-item--small">
                      <a
                        href="https://support.gog.com/hc/en-us/categories/201553025?product=gog"
                        className="menu-submenu-item-link"
                        gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy SUPPORT'}"
                      >
                        GOG Galaxy
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="menu-lite-account ng-hide"
                  ng-controller="menuAccountCtrl as account"
                  ng-show="account.isUserLoggedIn"
                  gog-menu-swipe=""
                >
                  <div
                    className="menu-header menu-account__user js-no-prevent-default"
                    ng-click="menuSwipe.toggle()"
                  >
                    <div
                      className="menu-account__user-in js-no-prevent-default"
                      data-hj-suppress=""
                    >
                      {/**/}
                      <span
                        className="menu-account__pending-notifications ng-hide"
                        ng-show="menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0"
                      />
                      <span
                        className="menu-account__user-name js-no-prevent-default"
                        ng-bind="account.username"
                        data-hj-suppress=""
                      />
                    </div>
                  </div>
                  <div
                    className="menu-account__list _gog-menu-scrollbar"
                    gog-menu-scrollbar=""
                  >
                    <div className="js-gog-scrollbar-wrapper _gog-menu-scrollbar__wrapper">
                      <div
                        className="js-gog-scrollbar-content _gog-menu-scrollbar__content menu-account__content"
                        ng-touchstart="$event.stopPropagation();"
                        style={{ width: "calc(100% + 17px)" }}
                      >
                        {/**/}
                        <a
                          href="/feed"
                          className="menu-account-link js-no-prevent-default"
                          ng-class="{'menu-account-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0}"
                          ng-if="account.isUserProfileEnabled"
                        >
                          Activity feed
                        </a>
                        {/**/}
                        {/**/}
                        <a
                          href="/u"
                          className="menu-account-link js-no-prevent-default"
                          ng-if="account.isUserProfileEnabled"
                        >
                          Your profile
                        </a>
                        {/**/}
                        {/**/}
                        <div
                          className="menu-submenu-separator menu-submenu-separator--transparent"
                          ng-if="account.isUserProfileEnabled"
                        />
                        {/**/}
                        <a
                          href="/en/account"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Games
                          <span
                            className="menu-submenu-item__label ng-hide"
                            ng-show="account.userGamesCount > 0"
                            ng-bind="account.userGamesCount"
                          >
                            0
                          </span>
                        </a>
                        <a
                          href="/en/account/movies"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Movies
                          <span
                            className="menu-submenu-item__label ng-hide"
                            ng-show="account.userMoviesCount > 0"
                            ng-bind="account.userMoviesCount"
                          >
                            0
                          </span>
                        </a>
                        <a
                          href="/en/account/wishlist"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Wishlist
                          <span
                            className="menu-submenu-item__label ng-hide"
                            ng-show="account.userWishlistedItemsCount > 0"
                            ng-bind="account.userWishlistedItemsCount"
                          >
                            0
                          </span>
                        </a>
                        <a
                          href="/en/redeem"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Redeem a code
                        </a>
                        <div className="menu-submenu-separator menu-submenu-separator--transparent" />
                        <a
                          href="/en/account/friends"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Friends
                        </a>
                        <a
                          href="/en/account/chat"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Chat
                        </a>
                        <div className="menu-submenu-separator menu-submenu-separator--transparent" />
                        <a
                          href="/en/wallet"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Your Wallet
                          <span
                            className="menu-submenu-item__label _price ng-hide"
                            ng-show="account.userWalletBalance > 0"
                            ng-bind="account.userWalletBalance"
                          >
                            0
                          </span>
                        </a>
                        <a
                          href="/en/account/settings/orders"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Orders &amp; settings
                        </a>
                        <a
                          href="/en/account/settings/personal"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Language &amp; currency
                        </a>
                        <div className="menu-submenu-separator menu-submenu-separator--transparent" />
                        <a
                          ng-click="account.logout()"
                          className="menu-account-link js-no-prevent-default"
                        >
                          Sign out
                        </a>
                        <div className="js-gog-scrollbar-bar _gog-menu-scrollbar__bar is-disabled" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="menu-lite-anonymous"
                  ng-controller="menuAnonymousCtrl as anonymous"
                  ng-show="anonymous.isResponseFetched && !anonymous.isUserLoggedIn"
                  gog-menu-swipe=""
                >
                  <a
                    className="menu-link menu-link--anonymous js-no-prevent-default"
                    ng-click="menuSwipe.toggle()"
                  >
                    <span className="js-no-prevent-default">Sign in</span>
                  </a>
                  <div className="menu-header menu-anonymous-header">
                    <button
                      className="menu-btn js-no-prevent-default menu-btn--gray menu-anonymous-header__btn menu-anonymous-header__btn--create-account menu-uppercase"
                      ng-click="anonymous.openRegistration(true); menuSwipe.toggle()"
                    >
                      Create account
                    </button>
                    <span className="menu-anonymous-header__separator" />
                    <button
                      className="menu-btn js-no-prevent-default menu-anonymous-header__btn menu-anonymous-header__btn--sign-in menu-uppercase"
                      ng-click="anonymous.openLogin(true); menuSwipe.toggle()"
                    >
                      Sign in
                    </button>
                  </div>
                  <figure className="menu-anonymous__shelf" />
                  <p className="menu-anonymous__about">
                    <b>
                      GOG.com is a digital distribution platform – an online
                      store with a curated selection of games, an optional
                      gaming client giving you freedom of choice, and a vivid
                      community of gamers.
                    </b>
                    All of this born from a deeply rooted love for games, utmost
                    care about customers, and a belief that you should own the
                    things you buy.
                  </p>
                  <p className="menu-anonymous__features-header">
                    <span className="menu-anonymous__features-header-in">
                      What is GOG.com about?
                    </span>
                  </p>
                  <div
                    className="menu-features-slider"
                    gog-menu-features-slider=""
                    ng-mouseenter="slider.stop()"
                    ng-mouseleave="slider.play()"
                  >
                    <span
                      className="menu-features-slider__nav menu-features-slider__nav--left js-no-prevent-default"
                      ng-click="slider.triggerPrevSlide()"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__nav-icon"
                      >
                        <use xlinkHref="#icon-fat-arrow-left" />
                      </svg>
                    </span>
                    <span
                      className="menu-features-slider__nav menu-features-slider__nav--right js-no-prevent-default"
                      ng-click="slider.triggerNextSlide()"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__nav-icon"
                      >
                        <use xlinkHref="#icon-fat-arrow-right" />
                      </svg>
                    </span>
                    <div className="menu-features-slider__slide js-slide is-active">
                      <div className="menu-features-slider__slide-text">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide1"
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                        <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide1">
                          Hand-picking the best in gaming.
                        </b>{" "}
                        A selection of great games, from modern hits to all-time
                        classics, that you really shouldn’t miss.
                      </div>
                    </div>
                    <div className="menu-features-slider__slide js-slide">
                      <div className="menu-features-slider__slide-text">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide2"
                        >
                          <use xlinkHref="#icon-heart" />
                        </svg>
                        <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide2">
                          Customer-first approach.
                        </b>{" "}
                        Delivering user-friendly support enriched with
                        additional customer benefits.
                      </div>
                    </div>
                    <div className="menu-features-slider__slide js-slide">
                      <div className="menu-features-slider__slide-text">
                        <svg
                          viewBox="0 0 32 32"
                          className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide3"
                        >
                          <use xlinkHref="#icon-hand-picked" />
                        </svg>
                        <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide3">
                          Gamer-friendly platform.
                        </b>{" "}
                        We’re here to make a difference in the way you buy and
                        play your games, giving you freedom of choice and a
                        hassle-free experience.
                      </div>
                    </div>
                    <div className="menu-features-slider__timer is-on js-timer">
                      <span className="menu-features-slider__timer-section js-timer-section" />
                      <span className="menu-features-slider__timer-section js-timer-section" />
                      <span className="menu-features-slider__timer-section js-timer-section" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-fonts-preloader">
          <span style={{ fontWeight: 300 }}>.</span>
          <span style={{ fontWeight: 400 }}>.</span>
          <span style={{ fontWeight: 500 }}>.</span>
          <span style={{ fontWeight: 600 }}>.</span>
          <span style={{ fontWeight: 700 }}>.</span>
          <span style={{ fontWeight: 800 }}>.</span>
        </div>
      </nav>
    </>
  );
};
