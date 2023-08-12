export const StoreNavigation = () => {
  console.log('render StoreNavigation')
  return (
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
              selenium-id="smallPaginationInput" />
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

      <div
        _ngcontent-gogcom-store-c78=""
        className="catalog__sort-component ng-star-inserted"
      >
        <div _ngcontent-gogcom-store-c78="">
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
                <p className="sort__active">Bestselling (recently)</p>
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
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="trendingDesc"
                        selenium-id="sortOptionTrendingDesc"
                      >
                        Bestselling (recently)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="trendingDesc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="bestsellingDesc"
                        selenium-id="sortOptionBestsellingDesc"
                      >
                        Bestselling (all time)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="bestsellingDesc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="priceAsc"
                        selenium-id="sortOptionPriceAsc"
                      >
                        Price (from lowest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="priceAsc" />
                      </label>

                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="priceDesc"
                        selenium-id="sortOptionPriceDesc"
                      >
                        Price (from highest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="priceDesc" />
                      </label>

                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="discountDesc"
                        selenium-id="sortOptionDiscountDesc"
                      >
                        Discount (from highest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="discountDesc" />
                      </label>

                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="titleAsc"
                        selenium-id="sortOptionTitleAsc"
                      >
                        Title (A to Z)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="titleAsc" />
                      </label>

                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="titleDesc"
                        selenium-id="sortOptionTitleDesc"
                      >
                        Title (Z to A)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="titleDesc" />
                      </label>

                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="releaseDateDesc"
                        selenium-id="sortOptionReleaseDateDesc"
                      >
                        Release date (from newest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="releaseDateDesc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="releaseDateAsc"
                        selenium-id="sortOptionReleaseDateAsc"
                      >
                        Release date (from oldest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="releaseDateAsc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="storeReleaseDateAsc"
                        selenium-id="sortOptionStoreReleaseDateAsc"
                      >
                        Date added to store (from oldest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="storeReleaseDateAsc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="storeReleaseDateDesc"
                        selenium-id="sortOptionStoreReleaseDateDesc"
                      >
                        Date added to store (from newest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="storeReleaseDateDesc" />
                      </label>
                      <label
                        className="sort__checkbox-label ng-star-inserted"
                        htmlFor="ratingDesc"
                        selenium-id="sortOptionRatingDesc"
                      >
                        Rating (from highest)
                        <input
                          type="radio"
                          name="sortOptions"
                          className="checkbox__input sort__checkbox-input"
                          id="ratingDesc" />
                      </label>
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
        </div>
      </div>
    </div>
  );
};
