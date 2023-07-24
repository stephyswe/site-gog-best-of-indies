import { ItemCyberpunk } from "./items/ItemCyberpunk";
import { ItemGrimDawn } from "./items/ItemGrimDawn";
import { ItemWarhammer } from "./items/ItemWarhammer";
import { ItemXeonauts } from "./items/ItemXeonauts";

export const LandingGallery = () => (
  <div className="container">
    <div
      className="small-spots__container small-spots__container--no-top-space"
      product-impressions='{
        "products": ["1412583633","1274966284","1428305992","2023885455"],
        "list": "SmallSpots",
        "domain": "Homepage"
    }'
    >
      <ItemCyberpunk />
      <ItemWarhammer />
      <ItemGrimDawn />
      <ItemXeonauts />
    </div>
  </div>
);
