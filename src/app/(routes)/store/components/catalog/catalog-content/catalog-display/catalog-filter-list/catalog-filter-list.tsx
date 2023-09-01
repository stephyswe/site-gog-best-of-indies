import { cn } from "@/lib/utils";
import { useProductCategoriesState } from "@/store/useProductCategories";
import { useProductGenreState } from "@/store/useProductGenre";
import { useProductLengthState } from "@/store/useProductLengthState";
import { useProductMinMaxState } from "@/store/useProductMinMax";
import { useSearchParams } from "next/navigation";

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
  // get searchTerm from useProductLengthState
  const {cateIds, setCateIds} = useProductCategoriesState();
  const {genreIds, setGenreIds} = useProductGenreState();
  const {setSearchTerm, searchTerm} = useProductLengthState();
  const {values, setValues, minMax} = useProductMinMaxState();

  const searchParams = useSearchParams();
  const paramsPriceRange = searchParams.get('priceRange');
  // slice paramsPriceRange by ","
  const priceValues = paramsPriceRange?.split(",").map(Number);

  // price range text
  const stringFromValues = priceValues && `EUR ${priceValues[0].toFixed(2)} - ${priceValues[1].toFixed(2)}`

  const searchTermHasValue = searchTerm !== "";
  const priceHasValue = !arraysEqual(priceValues, [0, minMax?.max])
  const checkBothValue = searchTermHasValue && priceHasValue;

  const hasMargin = searchTermHasValue || priceHasValue || genreIds.length > 0 || cateIds.length > 0

  const onSearchTerm = () => {
    setSearchTerm("");
  }

  const onPrice = () => {
    if (minMax) setValues([minMax?.min, minMax.max])
  }

  const onGenre = (item: any) => {
    // remove from genreIds
    setGenreIds(prevIds => prevIds.filter(id => id !== item));
  }

  const onCate = (item: any) => {
    // remove from genreIds
    setCateIds(prevIds => prevIds.filter(id => id !== item));
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
          style={{ display: "flex", flexWrap: 'wrap' }}
        >
          {/* first is searchTerm */}
          {/* <CatalogFilterItemSearchTerm empty={checkBothValue} onClick={onSearchTerm} value={searchTerm} title="Results for" /> */}
          <CatalogFilterItemSearchTerm hasValue={searchTermHasValue} value={searchTerm} title="Results for" onClick={onSearchTerm} />
          <CatalogFilterItemSearchTerm hasValue={priceHasValue} value={stringFromValues} title="Price range" onClick={onPrice} />
          {genreIds.map(item => (
            <CatalogFilterItemSearchTerm key={item} hasValue={true} value={item} title="Genres" onClick={() => onGenre(item)} />
          ))}
          {cateIds.map(item => (
            <CatalogFilterItemSearchTerm key={item} hasValue={true} value={item} title="Categories" onClick={() => onCate(item)} />
          ))}
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
