import { useState } from "react";

import { cn } from "@/lib/utils";

export const PriceContainer = ({ children }: any) => (
  <div className="price-filter__content filter-options ng-tns-c64-1">
    {children}
  </div>
);

export const PriceBodyData = () => (
  <>
    <div>
      <div className="range-slider">
        <FilterBodyPriceRange />
        <FilterBodyPriceRangeSliders />
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

const FilterBodyPriceRange = () => {
  const [isActive, setActive] = useState("");

  const isActiveAtAll = isActive !== "";
  return (
    <div
      className="range-slider__range ng2-nouislider ng-untouched ng-pristine ng-valid ng-star-inserted"
      _nghost-gogcom-store-c67=""
      selenium-id="priceRangeSlider"
      style={{}}
    >
      <div
        _ngcontent-gogcom-store-c67=""
        className={cn(
          "noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr",
          isActiveAtAll ? "noUi-state-drag" : ""
        )}
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
          <RangeItem
            transform="-100%"
            value={0.0}
            className="upper"
            setActive={setActive}
            isActive={isActive}
          />
          <RangeItem
            transform="0%"
            value={2933.0}
            className="lower"
            setActive={setActive}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
};

const RangeItem = ({
  transform,
  value,
  className,
  setActive,
  isActive,
}: any) => {
  const checkActive = className === isActive;
  return (
    <div
      className="noUi-origin"
      style={{
        transform: `translate(${transform}, 0px)`,
        zIndex: 5,
      }}
    >
      <div
        className={`noUi-handle noUi-handle-${className} ${checkActive ? "noUi-active" : ""}`}
        data-handle={0}
        tabIndex={0}
        role="slider"
        aria-orientation="horizontal"
        aria-valuemin={0.0}
        aria-valuemax={2933.0}
        aria-valuenow={value}
        onMouseDown={() => setActive(className)}
        onMouseUp={() => setActive("")}
      >
        <div className="noUi-touch-area" />
      </div>
    </div>
  );
};

const FilterBodyPriceRangeSliders = () => (
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
);
