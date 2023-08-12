import { cn } from "@/lib/utils";
import { useProductLengthState } from "@/store/useProductLengthState";

export const CatalogFilterList = () => {
  // get searchTerm from useProductLengthState
  const searchTerm = useProductLengthState((state) => state.searchTerm);

  const searchTermHasValue = searchTerm !== "";

  return (
    <div
      _ngcontent-gogcom-store-c78=""
      selenium-id="clearingList"
      className="ng-star-inserted"
    >
      <div className="filter-clearing-list__scrollbar">
        <div
          className={cn(
            "filter-clearing-list__wrapper",
            searchTermHasValue ? "has-margin" : ""
          )}
          selenium-id="filterClearingList"
          style={{ display: "flex" }}
        >
          {/* first is searchTerm */}
          <CatalogFilterItemSearchTerm searchTerm={searchTerm} />
          {/**/}
        </div>
      </div>
    </div>
  );
};

const CatalogFilterItemSearchTerm = ({ searchTerm }: any) => {
  const {setSearchTerm} = useProductLengthState();
  const onClick = () => {
    // set searchTerm to null
    setSearchTerm("");
  };
  if (!searchTerm) return null;

  return (
    <div className="ng-star-inserted">
      <div
        className="filter-clearing-item__wrapper"
        selenium-id="filterClearingItem"
        onClick={onClick}
      >
        <span className="filter-clearing-item__text">
          <span
            className="filter-clearing-item__label"
            selenium-id="filterClearingItemLabel"
          >
            Results for
          </span>
          <span
            className="filter-clearing-item__name ng-star-inserted"
            selenium-id="filterClearingItemName"
          >
            {" "}
            {searchTerm}
          </span>
        </span>
        <span
          className="filter-clearing-item__icon icon-cross-circle"
          selenium-id="filterClearingItemIcon"
        />
      </div>
    </div>
  );
};

const CatalogFilterItem = () => (
  <div className="ng-star-inserted">
    <div
      className="filter-clearing-item__wrapper"
      selenium-id="filterClearingItem"
    >
      <span className="filter-clearing-item__text">
        <span
          className="filter-clearing-item__label"
          selenium-id="filterClearingItemLabel"
        >
          Results for
        </span>
        <span
          className="filter-clearing-item__name ng-star-inserted"
          selenium-id="filterClearingItemName"
        >
          {" "}
          bald
        </span>
      </span>
      <span
        className="filter-clearing-item__icon icon-cross-circle"
        selenium-id="filterClearingItemIcon"
      />
    </div>
  </div>
);
