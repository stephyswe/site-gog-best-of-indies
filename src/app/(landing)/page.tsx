import { Footer } from "@/ui/footer/Footer";

import { LandingSlider } from "./components/slider/Slider";

export default function LandingPage() {
  return (
    <>
      {/* <!--menugogcomisupandrunningwithoutaproblem--> */}
      <div className="wrapper cf _prices-in-sek _price-currency-symbol-before">
        <div className="content cf">
          <Content />
        </div>
        {/* <!-- force end any comment tags before the partial --> */}
        <link
          rel="stylesheet"
          href="https://menu-static.gog-statics.com/assets/css/footer_v2.01842d6e18cce865d6ec80368bda3d00461eb4c6.css"
        ></link>
        <Footer />
      </div>
    </>
  );
}

const Content = () => {
  return (
    <>
      <div className="nav-spacer menu-spacer"></div>
      <welcome-offer-banner
        className="welcome-offer-placeholder js-welcome-offer-placeholder"
        current-date="1690229621000"
      ></welcome-offer-banner>
      <link
        href="//www4-static.gog-statics.com/css/8dcc9db-149f4c5.css"
        rel="stylesheet"
      ></link>
      <LandingContainer />
      <LandingSlider />
    </>
  );
};

export const LandingContainer = () => (
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
