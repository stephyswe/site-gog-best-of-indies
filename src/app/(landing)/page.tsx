"use client";

import { useEffect } from "react";

import { DealOfDay } from "./components/dealofday/DealOfDay";
import { LandingDiscoverGames } from "./components/discover-games/DiscoverGames";
import { SectionGalaxy } from "./components/galaxy/Galaxy";
import { LandingGallery } from "./components/gallery/Gallery";
import { LandingHotPicks } from "./components/hot-picks/HotPicks";
import { LandingNews } from "./components/news/News";
import { LandingNowOnSale } from "./components/now-on-sale/NowOnSale";
import { LandingSlider } from "./components/slider/Slider";

export default function LandingPage() {
  useEffect(() => {
    // update html tag
    var html: any = document.querySelector("html");
    html.setAttribute("data-theme", "light");
    html.setAttribute("lang", "en-US");
    html.setAttribute("ng-app", "gogFrontpage");

    var body: any = document.querySelector("body");
    body.setAttribute(
      "ng-init",
      "userModel = {isUser: false, isAnonymous: false, bodyClass:false}; bodyModel = {bodyClass: ''}"
    );
    body.setAttribute(
      "ng-class",
      "{'is-user':userModel.isUser, 'is-anonymous':userModel.isAnonymous}"
    );
    body.setAttribute(
      "class",
      "productcard _prices-in-sek _price-currency-symbol-before"
    );
  }, []);
  return (
    <>
      {/*  <HandleHtmlBody /> */}
      <div className="nav-spacer menu-spacer"></div>
      {/* <welcome-offer-banner
        className="welcome-offer-placeholder js-welcome-offer-placeholder"
        current-date="1690229621000"
      ></welcome-offer-banner> */}
      <LandingContainer />
      <LandingSlider />
      <LandingGallery />
      <DealOfDay />
      <SectionGalaxy />
      <LandingNowOnSale />
      <LandingHotPicks />
      <LandingDiscoverGames />
      <LandingNews />
      <div
        style={{
          marginBottom: "244px",
        }}
      ></div>
    </>
  );
}

const LandingContainer = () => (
  <div className="container">
    <div className="section-title js-section-title section-title--with-border         big-spots-header ">
      <div className="section-title__icon-wrapper">
        <svg className="icon-wrapper-icon">
          <use xlinkHref="/svg/bf869f22.svg#icon-highlighter" />
        </svg>
      </div>
      <div className="section-title__title-wrapper">Highlights</div>
    </div>
  </div>
);
