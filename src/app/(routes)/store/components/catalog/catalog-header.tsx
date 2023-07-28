import { useProductLengthState } from "@/store/useProductLengthState";

export const CatalogHeader = () => {
  const productLength = useProductLengthState();
  const setSearchTerm = useProductLengthState(state => state.setSearchTerm);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  return (
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
              onChange={handleInputChange}
            />
            <span className="search__icon icon-magnifying-glass" />
            {/**/}
            {/**/}
          </form>
        </search>
        <div _ngcontent-gogcom-store-c53="" className="catalog__page-header">
          <h1 className="page-header" selenium-id="pageHeader">
            {" "}
            Showing {productLength.allGamesLength} games{/**/} {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </h1>
        </div>
      </div>
    </div>
  );
};
