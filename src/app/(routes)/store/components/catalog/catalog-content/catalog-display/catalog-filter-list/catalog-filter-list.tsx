import { cn } from "@/lib/utils";
import { useProductLengthState } from "@/store/useProductLengthState";
import { useProductMinMaxState } from "@/store/useProductMinMax";

const arraysEqual = (a: any, b: any) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const CatalogFilterList = () => {
  console.log('render CatalogFilterList')
  // get searchTerm from useProductLengthState
  const {setSearchTerm, searchTerm} = useProductLengthState();
  const {values, setValues, minMax} = useProductMinMaxState();
  const stringFromValues = `EUR ${values[0].toFixed(2)} - ${values[1].toFixed(2)}`

  const searchTermHasValue = searchTerm !== "";
  const priceHasValue = !arraysEqual(values, [0, minMax?.max])
  const checkBothValue = searchTermHasValue && priceHasValue;

  const hasMargin = searchTermHasValue || priceHasValue

  const onSearchTerm = () => {
    setSearchTerm("");
  }

  const onPrice = () => {
    if (minMax) setValues([minMax?.min, minMax.max])
  }

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
            hasMargin ? "has-margin" : ""
          )}
          selenium-id="filterClearingList"
          style={{ display: "flex" }}
        >
          {/* first is searchTerm */}
          {/* <CatalogFilterItemSearchTerm empty={checkBothValue} onClick={onSearchTerm} value={searchTerm} title="Results for" /> */}
          <CatalogFilterItemSearchTerm hasValue={searchTermHasValue} value={searchTerm} title="Results for" onClick={onSearchTerm} />
          <CatalogFilterItemSearchTerm hasValue={priceHasValue} value={stringFromValues} title="Price range" onClick={onPrice} />
          {/**/}
        </div>
      </div>
    </div>
  );
};

const CatalogFilterItemSearchTerm = ({ hasValue, onClick, value, title }: any) => {

  if (!hasValue) return null;

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
            {title}
          </span>
          <span
            className="filter-clearing-item__name ng-star-inserted"
            selenium-id="filterClearingItemName"
          >
            {" "}
            {value}
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
