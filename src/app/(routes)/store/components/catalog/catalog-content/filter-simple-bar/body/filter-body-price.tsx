export const FilterBodyPrice = () => (
  <div className="price-filter__content filter-options ng-tns-c64-1">
    <div>
      <div className="range-slider">
        <div
          className="range-slider__range ng2-nouislider ng-untouched ng-pristine ng-valid ng-star-inserted"
          _nghost-gogcom-store-c67=""
          selenium-id="priceRangeSlider"
          style={{}}
        >
          <div
            _ngcontent-gogcom-store-c67=""
            className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
          >
            <div className="noUi-base">
              <div className="noUi-connects">
                <div
                  className="noUi-connect"
                  style={{
                    transform: "translate(0%, 0px) scale(1, 1)",
                  }}
                />
              </div>
              <div
                className="noUi-origin"
                style={{
                  transform: "translate(-100%, 0px)",
                  zIndex: 5,
                }}
              >
                <div
                  className="noUi-handle noUi-handle-lower"
                  data-handle={0}
                  tabIndex={0}
                  role="slider"
                  aria-orientation="horizontal"
                  aria-valuemin={0.0}
                  aria-valuemax={2933.0}
                  aria-valuenow={0.0}
                  //aria-valuetext={0}
                >
                  <div className="noUi-touch-area" />
                </div>
              </div>
              <div
                className="noUi-origin"
                style={{
                  transform: "translate(0%, 0px)",
                  zIndex: 4,
                }}
              >
                <div
                  className="noUi-handle noUi-handle-upper"
                  data-handle={1}
                  tabIndex={0}
                  role="slider"
                  aria-orientation="horizontal"
                  aria-valuemin={0.0}
                  aria-valuemax={2933.0}
                  aria-valuenow={2933.0}
                  //aria-valuetext={2933}
                >
                  <div className="noUi-touch-area" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        {/**/}
        <div className="range-slider__inputs">
          <label className="range-slider__label">
            <input
              type="text"
              className="range-slider__input ng-untouched ng-pristine ng-valid"
              min={0}
              max={2933}
              selenium-id="priceRangeFrom"
            />
          </label>
          <span className="range-slider__separator">-</span>
          <label className="range-slider__label">
            <input
              type="text"
              className="range-slider__input ng-untouched ng-pristine ng-valid"
              min={0}
              max={2933}
              selenium-id="priceRangeTo"
            />
          </label>
        </div>
      </div>
    </div>
    <label
      className="price-filter__additional-option checkbox__label checkbox__label--price-filter"
      selenium-id="filterPriceRangeShowOnlyFreeGamesCheckbox"
    >
      <input
        type="checkbox"
        className="checkbox__input ng-untouched ng-pristine ng-valid"
      />
      Show only free games{/**/}
    </label>
  </div>
);

export const PriceContainer = ({ children }: any) => (
  <div className="price-filter__content filter-options ng-tns-c64-1">
    {children}
  </div>
);

export const PriceBodyData = () => (
  <>
    <div>
      <div className="range-slider">
        <div
          className="range-slider__range ng2-nouislider ng-untouched ng-pristine ng-valid ng-star-inserted"
          _nghost-gogcom-store-c67=""
          selenium-id="priceRangeSlider"
          style={{}}
        >
          <div
            _ngcontent-gogcom-store-c67=""
            className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
          >
            <div className="noUi-base">
              <div className="noUi-connects">
                <div
                  className="noUi-connect"
                  style={{
                    transform: "translate(0%, 0px) scale(1, 1)",
                  }}
                />
              </div>
              <div
                className="noUi-origin"
                style={{
                  transform: "translate(-100%, 0px)",
                  zIndex: 5,
                }}
              >
                <div
                  className="noUi-handle noUi-handle-lower"
                  data-handle={0}
                  tabIndex={0}
                  role="slider"
                  aria-orientation="horizontal"
                  aria-valuemin={0.0}
                  aria-valuemax={2933.0}
                  aria-valuenow={0.0}
                  //aria-valuetext={0}
                >
                  <div className="noUi-touch-area" />
                </div>
              </div>
              <div
                className="noUi-origin"
                style={{
                  transform: "translate(0%, 0px)",
                  zIndex: 4,
                }}
              >
                <div
                  className="noUi-handle noUi-handle-upper"
                  data-handle={1}
                  tabIndex={0}
                  role="slider"
                  aria-orientation="horizontal"
                  aria-valuemin={0.0}
                  aria-valuemax={2933.0}
                  aria-valuenow={2933.0}
                  //aria-valuetext={2933}
                >
                  <div className="noUi-touch-area" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        {/**/}
        <div className="range-slider__inputs">
          <label className="range-slider__label">
            <input
              type="text"
              className="range-slider__input ng-untouched ng-pristine ng-valid"
              min={0}
              max={2933}
              selenium-id="priceRangeFrom"
            />
          </label>
          <span className="range-slider__separator">-</span>
          <label className="range-slider__label">
            <input
              type="text"
              className="range-slider__input ng-untouched ng-pristine ng-valid"
              min={0}
              max={2933}
              selenium-id="priceRangeTo"
            />
          </label>
        </div>
      </div>
    </div>
    <label
      className="price-filter__additional-option checkbox__label checkbox__label--price-filter"
      selenium-id="filterPriceRangeShowOnlyFreeGamesCheckbox"
    >
      <input
        type="checkbox"
        className="checkbox__input ng-untouched ng-pristine ng-valid"
      />
      Show only free games{/**/}
    </label>
  </>
);
