// game page
import "./game-prince-of-persia.css";
import "./game-product.css";
import { ProductLayoutContainerSec } from "./layout-container-sec/LayoutContainerSec";
import { ProductLayoutContainer } from "./layout-container/LayoutContainer";
import { ProductLayoutSeries } from "./layout-series/LayoutSeries";
import { ProductMayLike } from "./may-like/MayLike";
import { ProductSmallScreens } from "./small-screens/SmallScreeens";

export default function GamePage() {
  return (
    <>
      <ProductCardPlayer />
      <ProductBackground />
      <ProductSmallScreens />
      <ProductLayoutContainer />
      <ProductLayoutContainerSec />
      <ProductLayoutSeries />
      <ProductMayLike />
    </>
  );
}

const ProductBackground = () => (
  <div className="productcard-background productcard-image"></div>
);

const ProductCardPlayer = () => (
  <div
    //parallax=""
    className="productcard-player productcard-image hide-when-content-is-expanded ng-scope"
  >
    <div
      //player=""
      className="productcard-player__container layout-container layout-container--no-padding ng-scope"
    />
  </div>
);
