import { useRef, useState } from "react";
import Draggable from "react-draggable";

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
            initialValue={-100}
            value={0.0}
            className="upper"
            setActive={setActive}
            isActive={isActive}
          />
          <RangeItem
            initialValue={0}
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

const RangeItem = ({ className, setActive, isActive, initialValue }: any) => {
  const [x, setX] = useState(initialValue);
  const checkActive = className === isActive;
  const parentRef = useRef(null);

  const handleDrag = (e: any, data: any) => {
    const parentWidth = parentRef.current.offsetWidth;
    const percent = Math.max(0, Math.min(100, (data.x / parentWidth) * 100));
    const value = (percent / 100) * 2933.0;
    setX(value);
  };

  const handleStop = () => {
    setActive("");
  };

  return (
    <div
      ref={parentRef}
      className="noUi-origin"
      style={{
        transform: `translate(${x}%, 0px)`,
        zIndex: 5,
      }}
    >
      <Draggable
        axis="x"
        bounds="parent"
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div
          className={`noUi-handle noUi-handle-${className} ${
            checkActive ? "noUi-active" : ""
          }`}
          data-handle={0}
          tabIndex={0}
          role="slider"
          aria-orientation="horizontal"
          aria-valuemin={0.0}
          aria-valuemax={2933.0}
          aria-valuenow={x}
          onMouseDown={() => setActive(className)}
        >
          <div className="noUi-touch-area" />
        </div>
      </Draggable>
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
