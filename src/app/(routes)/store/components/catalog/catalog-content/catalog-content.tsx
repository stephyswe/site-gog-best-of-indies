import { StoreNavigation } from "./catalog-display/store-navigation/store-navigation";
import { StoreProductGrid } from "./catalog-display/store-product-grid/store-product-grid";
import { CatalogFilterList } from "./catalog-display/catalog-filter-list/catalog-filter-list";
import { FilterSimpleBar } from "./filter-simple-bar/filter-simple-bar";

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
    <CatalogFilterList />
    <StoreProductGrid />
  </div>
);
