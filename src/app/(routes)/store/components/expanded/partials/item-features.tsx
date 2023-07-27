export const ProductItemFeatures2 = ({ features }: any) => (
  <div
    _ngcontent-gogcom-store-c47=""
    _nghost-gogcom-store-c45=""
    className="ng-tns-c47-15 ng-star-inserted"
    selenium-id="productTileExtendedProductFeatures"
    style={{}}
  >
    <span _ngcontent-gogcom-store-c45="">Features:</span>
    <div
      _ngcontent-gogcom-store-c45=""
      className="features__icon-group game-modes ng-star-inserted"
    >
      <span
        _ngcontent-gogcom-store-c45=""
        className="icon-singleplayer ng-star-inserted"
      />
    </div>

    <div
      _ngcontent-gogcom-store-c45=""
      className="features__dot ng-star-inserted"
    />

    <div
      _ngcontent-gogcom-store-c45=""
      className="features__icon-group game-features ng-star-inserted"
    >
      <span
        _ngcontent-gogcom-store-c45=""
        className="icon-cloud-saves ng-star-inserted"
      />
    </div>
  </div>
);

const renderFeatures = (features: string[], className: string) => (
  <div
    _ngcontent-gogcom-store-c45=""
    className={`features__icon-group ${className} ng-star-inserted`}
  >
    {features.map((item, index) => (
      <span
        key={index}
        _ngcontent-gogcom-store-c45=""
        className={`icon-${item} ng-star-inserted`}
      />
    ))}
  </div>
);

export const ProductItemFeatures = ({
  features: { player, controller },
}: {
  features: {
    player: string[];
    controller: string[];
  };
}) => (
  <div
    _ngcontent-gogcom-store-c47=""
    _nghost-gogcom-store-c45=""
    className="ng-tns-c47-15 ng-star-inserted"
    selenium-id="productTileExtendedProductFeatures"
    style={{}}
  >
    <span _ngcontent-gogcom-store-c45="">Features:</span>

    {renderFeatures(player, "game-modes")}

    <div
      _ngcontent-gogcom-store-c45=""
      className="features__dot ng-star-inserted"
    />

    {renderFeatures(controller, "game-features")}
  </div>
);
