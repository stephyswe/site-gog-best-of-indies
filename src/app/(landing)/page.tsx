import { Footer } from "@/ui/footer/Footer";

import { DealOfDay } from "./components/dealofday/DealOfDay";
import { LandingGallery } from "./components/gallery/Gallery";
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
        <Footer />
      </div>
    </>
  );
}

const Content = () => {
  return (
    <>
      <div className="nav-spacer menu-spacer"></div>
      {/* <welcome-offer-banner
        className="welcome-offer-placeholder js-welcome-offer-placeholder"
        current-date="1690229621000"
      ></welcome-offer-banner> */}
      <LandingContainer />
      <LandingSlider />
      <LandingGallery />
      <DealOfDay />
      <div
        style={{
          marginBottom: "1400px",
        }}
      ></div>
    </>
  );
};

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
