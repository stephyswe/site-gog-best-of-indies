import { Catalog } from "./Catalog";
import "./catalog.css";
import "./css/icon.css";
import "./store.css";
import "./styles/style1.css";
import "./styles/style2.css";
import "./styles/style3.css";
import "./styles/style4.css";
import "./styles/style5.css";
import "./styles/style6.css";
import "./styles/style7.css";
import "./styles/style8.css";
import "./styles/style9.css";

export default function StorePage() {
  return (
    <>
      <div ng-version="15.1.2" ng-server-context="ssr" className="app-root">
        <div className="wrapper" selenium-id="appWrapper">
          <div className="app__container">
            <div app-page>
              <div custom-colors=""></div>
              <Catalog />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "300px" }}></div>
    </>
  );
}
