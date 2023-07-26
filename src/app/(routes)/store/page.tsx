import { Catalog } from "./Catalog";
import "./icon.css";

export default function StorePage() {
  return (
    <>
      <div ng-version="15.1.2" ng-server-context="ssr">
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
