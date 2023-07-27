import { updatedDataProductTiles } from "@/data/temp-data";
import useProductExpandState from "@/store/useProductExpandState";

import { ProductItemPrice } from "../../expanded/partials/item-price";
import { FilterSimpleBar } from "./filter/filter";

export const CatalogContent = () => (
  <div _ngcontent-gogcom-store-c79="" _nghost-gogcom-store-c78="" id="Catalog">
    <div
      _ngcontent-gogcom-store-c78=""
      className="catalog__content"
      selenium-id="catalogContent"
    >
      <Filters />
      <CatalogDisplay />
    </div>
  </div>
);

const Filters = () => (
  <div
    _ngcontent-gogcom-store-c78=""
    className="catalog__filters-outer-wrapper"
    style={{ "--s-filters-offset": "149px" } as any}
  >
    <div _ngcontent-gogcom-store-c78="" className="filters-wrapper-component">
      <FilterSimpleBar />
    </div>
  </div>
);

const CatalogDisplay = () => (
  <div
    _ngcontent-gogcom-store-c78=""
    className="catalog__display-wrapper catalog__grid-wrapper"
  >
    <StoreNavigation />
    <StoreClearingList />
    <StoreProductGrid />
  </div>
);

const StoreProductGrid = () => (
  <div
    _ngcontent-gogcom-store-c78=""
    selenium-id="catalogProductsGrid"
    className="ng-star-inserted"
  >
    <div
      className="paginated-products-grid grid"
      selenium-id="paginatedProductsGrid"
    >
      {updatedDataProductTiles.map((item) => (
        <ProductTile key={item.title} {...item} />
      ))}
    </div>
  </div>
);

const ProductTitleImage = ({ thumbnail }: any) => (
  <div className="product-tile__image-wrapper">
    <div _nghost-gogcom-store-c30="" className="ng-star-inserted">
      <picture _ngcontent-gogcom-store-c30="">
        {/*  <source
          _ngcontent-gogcom-store-c30=""
          srcSet="https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.webp, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.webp 2x"
          type="image/webp"
          media="(min-width:768px)"
          className="ng-star-inserted"
        /> */}
        <source
          _ngcontent-gogcom-store-c30=""
          srcSet={thumbnail}
          type="image/jpeg"
          media="(min-width:768px)"
          className="ng-star-inserted"
        />
        {/**/}
        {/**/}
        {/* <source
          _ngcontent-gogcom-store-c30=""
          srcSet="https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_117h.webp, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_117h_2x.webp 2x"
          type="image/webp"
          className="ng-star-inserted"
        />
        <source
          _ngcontent-gogcom-store-c30=""
          srcSet="https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_117h.jpg, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_117h_2x.jpg 2x"
          type="image/jpeg"
          className="ng-star-inserted"
        /> */}
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        <img
          _ngcontent-gogcom-store-c30=""
          selenium-id="productTileGameCover"
          className="ng-star-inserted"
        />
        {/**/}
      </picture>
    </div>
    {/**/}
    {/**/}
    <div
      className="product-tile__release-label--grid"
      _nghost-gogcom-store-c40=""
      selenium-id="productTileReleaseLabel"
    >
      {/**/}
      {/**/}
      {/**/}
    </div>
  </div>
);

const ProductTileTitle = ({ title }: any) => (
  <div
    className="product-tile__title"
    title={title}
    selenium-id="productTileGameTitle"
  >
    <div
      _nghost-gogcom-store-c41=""
      selenium-id="productTitle"
      className="small"
    >
      {/**/}
      <span _ngcontent-gogcom-store-c41="">{title}</span>
    </div>
  </div>
);

const ProductTileReleaseLabel = () => (
  <div
    className="product-tile__release-label--list"
    _nghost-gogcom-store-c40=""
    selenium-id="productTileReleaseLabel"
  ></div>
);

const ProductTile = ({ id, title, price, href, thumbnail }: any) => {
  const productExpand = useProductExpandState();

  const onMouseEnter = () => {
    // activate product expand
    productExpand.onOpen(id);
  };

  return (
    <div
      _ngcontent-gogcom-store-c78=""
      className="ng-star-inserted"
      onMouseEnter={onMouseEnter}
    >
      {/**/}
      <a
        //eventstrackeronviewportenter=""
        className="product-tile product-tile--grid"
        href={href}
        selenium-id="productTile"
        data-product-id={1207658924}
        data-product-index={0}
        data-list-id="57add9e5-b0bf-4b32-9028-65820c9f1992"
        data-list-name="CATALOG_SECTION"
      >
        <ProductTitleImage thumbnail={thumbnail} />
        <div className="product-tile__info">
          <ProductTileTitle title={title} />
          <div className="product-tile__footer">
            <ProductTileReleaseLabel />
            <div className="product-tile__price-info">
              <ProductItemPrice price={price} />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const StoreClearingList = () => (
  <div
    _ngcontent-gogcom-store-c78=""
    selenium-id="clearingList"
    className="ng-star-inserted"
  >
    <div className="filter-clearing-list__scrollbar">
      <div
        className="filter-clearing-list__wrapper"
        selenium-id="filterClearingList"
      >
        {/**/}
        {/**/}
      </div>
    </div>
  </div>
);

const StoreNavigation = () => (
  <div
    _ngcontent-gogcom-store-c78=""
    className="catalog__navigation"
    selenium-id="catalogNavigation"
  >
    <div
      _ngcontent-gogcom-store-c78=""
      className="catalog__small-pagination-component ng-star-inserted"
    >
      <div className="small-pagination" selenium-id="smallPagination">
        <button
          className="small-pagination__item small-pagination__item--previous disabled"
          selenium-id="smallPaginationPrev"
        >
          <span className="small-pagination__icon icon-angle-right" />
        </button>
        <div>
          <input
            type="number"
            className="pagination-input__item ng-untouched ng-pristine ng-valid"
            selenium-id="smallPaginationInput"
          />
        </div>
        <span className="small-pagination--middle">of</span>
        <button
          className="small-pagination__item"
          selenium-id="smallPaginationPage"
        >
          <span>175</span>
        </button>
        <button
          className="small-pagination__item small-pagination__item--next"
          selenium-id="smallPaginationNext"
        >
          <span className="small-pagination__icon icon-angle-right" />
        </button>
      </div>
    </div>
    {/**/}
    <div
      _ngcontent-gogcom-store-c78=""
      className="catalog__sort-component ng-star-inserted"
    >
      <div _ngcontent-gogcom-store-c78="">
        {/**/}
        <div className="sort__wrapper">
          <div className="sort-mobile">
            <span className="icon-sorting-mobile sort-mobile__icon" />
            <span className="sort-mobile__label">Sort</span>
          </div>
          <div className="sort" selenium-id="sort">
            <div className="sort__label-wrapper">
              <p className="sort__label">
                <span>Sort by:</span>
              </p>
              <p className="sort__active">
                {/**/}Bestselling (recently){/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </p>
            </div>
            <span className="sort__icon icon-angle-right" />
          </div>
          <div selenium-id="sortDropdown">
            <div className="dropdown__wrapper">
              <div className="dropdown__mobile-backdrop" />
              <menu className="dropdown" selenium-id="dropdown">
                <div className="dropdown__triangle-container">
                  <div className="dropdown__triangle" />
                </div>
                <div className="dropdown__content">
                  <div className="filter-options">
                    <div className="sort__mobile-dropdown-header">
                      <h3 className="sort__mobile-dropdown-header-text">
                        Sort by
                      </h3>
                      <span className="sort__close-button icon-close" />
                    </div>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="trendingDesc"
                      selenium-id="sortOptionTrendingDesc"
                    >
                      {/**/}Bestselling (recently){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="trendingDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="bestsellingDesc"
                      selenium-id="sortOptionBestsellingDesc"
                    >
                      {/**/}
                      {/**/}Bestselling (all time){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="bestsellingDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="priceAsc"
                      selenium-id="sortOptionPriceAsc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Price (from lowest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="priceAsc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="priceDesc"
                      selenium-id="sortOptionPriceDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Price (from highest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="priceDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="discountDesc"
                      selenium-id="sortOptionDiscountDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Discount (from highest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="discountDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="titleAsc"
                      selenium-id="sortOptionTitleAsc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Title (A to Z){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="titleAsc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="titleDesc"
                      selenium-id="sortOptionTitleDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Title (Z to A){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="titleDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="releaseDateDesc"
                      selenium-id="sortOptionReleaseDateDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}Release date (from newest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="releaseDateDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="releaseDateAsc"
                      selenium-id="sortOptionReleaseDateAsc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Release date (from oldest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="releaseDateAsc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="storeReleaseDateAsc"
                      selenium-id="sortOptionStoreReleaseDateAsc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Date added to store (from oldest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="storeReleaseDateAsc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="storeReleaseDateDesc"
                      selenium-id="sortOptionStoreReleaseDateDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Date added to store (from newest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="storeReleaseDateDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    <label
                      className="sort__checkbox-label ng-star-inserted"
                      htmlFor="ratingDesc"
                      selenium-id="sortOptionRatingDesc"
                    >
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}Rating (from highest){/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      <input
                        type="radio"
                        name="sortOptions"
                        className="checkbox__input sort__checkbox-input"
                        id="ratingDesc"
                      />
                    </label>
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </menu>
            </div>
          </div>
        </div>
      </div>
      <div _ngcontent-gogcom-store-c78="">
        <div className="display-switch">
          <button
            className="display-switch__button display-switch__button--active"
            selenium-id="gridButton"
          >
            <span className="display-switch__icon icon-grid" />
          </button>
          <button className="display-switch__button" selenium-id="listButton">
            <span className="display-switch__icon icon-list" />
          </button>
        </div>
      </div>
      <div _ngcontent-gogcom-store-c78="" className="catalog__filter-switch">
        <span _ngcontent-gogcom-store-c78="" className="icon-filtering" />
        <span _ngcontent-gogcom-store-c78="">Filter</span>
        {/**/}
      </div>
    </div>
    {/**/}
    {/**/}
  </div>
);
