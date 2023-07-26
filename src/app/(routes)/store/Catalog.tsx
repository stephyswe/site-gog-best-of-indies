export const Catalog = () => (
  <div _nghost-gogcom-store-c79 className="ng-star-inserted">
    <div
      _ngcontent-gogcom-store-c79=""
      custom-colors=""
      className="ng-star-inserted"
    >
      <div
        _ngcontent-gogcom-store-c79=""
        data-sid="57add9e5-b0bf-4b32-9028-65820c9f1992"
      >
        <CatalogHeader />
      </div>
    </div>
  </div>
);

export const CatalogHeader = () => (
  <div
    _ngcontent-gogcom-store-c79=""
    _nghost-gogcom-store-c53=""
    className="ng-star-inserted"
  >
    <div
      _ngcontent-gogcom-store-c53=""
      id="catalogHeader"
      className="catalog__header"
      selenium-id="catalogHeaderComponent"
    >
      <search _ngcontent-gogcom-store-c53="" className="catalog__search">
        <form
          //noValidate=""
          className="search ng-untouched ng-pristine ng-valid"
          selenium-id="searchComponentForm"
        >
          <input
            name="query"
            type="text"
            className="search__input ng-untouched ng-pristine ng-valid"
            placeholder="Search store by title, publisher or tag"
            selenium-id="searchComponentInput"
          />
          <span className="search__icon icon-magnifying-glass" />
          {/**/}
          {/**/}
        </form>
      </search>
      <div
        _ngcontent-gogcom-store-c53=""
        className="catalog__page-header"
      >
        <h1 className="page-header" selenium-id="pageHeader">
          {" "}
          Showing 8390 games{/**/} {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
        </h1>
      </div>
    </div>
  </div>
);
