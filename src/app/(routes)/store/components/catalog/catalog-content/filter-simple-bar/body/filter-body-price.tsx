import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Rcslider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { cn } from "@/lib/utils";
import { getMinMaxPrices, newPrices } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";
import { useProductMinMaxState } from "@/store/useProductMinMax";

export const PriceContainer = ({ children }: any) => (
  <div className="price-filter__content filter-options ng-tns-c64-1">
    {children}
  </div>
);

interface Props {
  minMax: {
    min: number,
    max: number
  },
  onValuesChanged: (values: number[]) => void
}


export const PriceBodyData = () => {
  const { setMinMax, minMax } = useProductMinMaxState();

 useEffect(() => {
    const minMaxValues = getMinMaxPrices();
    setMinMax(minMaxValues);  // Update minMax in Zustand state
  }, []); 

 // If minMax is null, use default values (e.g., [0, 0]), otherwise use minMax values
 const defaultValues = minMax ? [minMax.min, minMax.max] : [0, 0];
  
  // SET value getMinMaxPrices into state
  useEffect(() => {
    const prices = newPrices();

  }, []) 

  // Update values whenever minMax changes
  useEffect(() => {
    setValues(defaultValues as [number, number]);
  }, []);

  const { values, setValues } = useProductMinMaxState();

  const adjustToCustomStep = (value: number): number => {
    if (value <= 25) return Math.round(value);
    if (value > 25) return Math.round(value / 5) * 5; // snap to nearest 5
    return Math.round(value / 10) * 10; // snap to nearest 10 for anything above 60
  }

  const handleValuesChange = (values: any) => {
    const adjustedValues = values.map(adjustToCustomStep);
    setValues(adjustedValues);
  }

  return (

    <>
      <div>
        <div className="range-slider">
          {/*  <FilterBodyPriceRange /> */}
          {minMax ? <Rcslider range allowCross={false} defaultValue={defaultValues} onChange={handleValuesChange} min={0} max={minMax?.max} />: null}
          {minMax ? <FilterBodyPriceRangeSliders values={values} /> : null}
        </div>
      </div>
      <label
        className="price-filter__additional-option checkbox__label checkbox__label--price-filter"
        selenium-id="filterPriceRangeShowOnlyFreeGamesCheckbox"
      >
        <input
          type="checkbox"
          className="checkbox__input ng-untouched ng-pristine ng-valid" />
        Show only free games
      </label>
    </>
  );
};

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
            initialValue={-202}
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
  const parentRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = (e: any, data: any) => {
    if (parentRef.current) {
      const parentWidth = parentRef.current.offsetWidth;
      const percent = Math.max(Math.min((data.x / parentWidth) * 100, 100), 0); // Converts x position to percentage
      setX(percent);
    }
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

const FilterBodyPriceRangeSliders = ({values}: any) => (
  <div className="range-slider__inputs">
    <label className="range-slider__label">
      <input
        type="text"
        className="range-slider__input ng-untouched ng-pristine ng-valid"
        value={values[0]}
        selenium-id="priceRangeFrom"
        readOnly
      />
    </label>
    <span className="range-slider__separator">-</span>
    <label className="range-slider__label">
      <input
        type="text"
        className="range-slider__input ng-untouched ng-pristine ng-valid"
        value={values[1]}
        selenium-id="priceRangeTo"
        readOnly
      />
    </label>
  </div>
);
