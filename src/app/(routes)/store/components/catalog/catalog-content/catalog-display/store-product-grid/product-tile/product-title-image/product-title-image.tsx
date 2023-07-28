export const ProductTitleImage = ({ thumbnail }: any) => (
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
