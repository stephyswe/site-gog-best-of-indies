import { useEffect, useState } from "react";
import Rcslider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from "query-string";
import { useRouter } from "next/navigation";

import { getMinMaxPrices } from "@/data/temp-data";
import { useProductMinMaxState } from "@/store/useProductMinMax";

export const PriceContainer = ({ children }: any) => (
  <div className="price-filter__content filter-options ng-tns-c64-1">
    {children}
  </div>
);

const intoNumber = (localValues: any) => localValues.map((value: any) => parseFloat(value));
const intoString = (numbers: number[]) => numbers.map(value => value.toFixed(2));

export const PriceBodyData = () => {
  const router = useRouter();
  const { setMinMax, minMax, values, setValues } = useProductMinMaxState();
  const defaultValues = minMax ? [minMax.min, minMax.max] : [0, 0];
  const [sliderValue, setSliderValue] = useState<number[]>(defaultValues);
  const [localValues, setLocalValues] = useState<[string, string]>(defaultValues.map(String) as [string, string]);

  const adjustToCustomStep = (value: number): number => {
    if (minMax && Math.abs(value - minMax.max) <= 1) {
      return minMax.max;
    }

    if (value <= 25) return Math.round(value);
    if (value > 25) return Math.round(value / 5) * 5;
    return Math.round(value / 10) * 10;
  }

  const handleSlide = (values: number | number[]) => {
    // Check if values is an array, if not convert it to an array
    const processedValues = Array.isArray(values) ? values : [values];
    const adjustedValues = processedValues.map(adjustToCustomStep);



    setSliderValue(adjustedValues);
    const stringValues = intoString(adjustedValues)
    setLocalValues(stringValues as [string, string]);
};

const addToQueryString = (values: string[]) => {
  const query = {priceRange: `${values[0]},${values[1]}`}
  let url = qs.stringifyUrl(
    {
      url: decodeUrl(window.location.href),
      query,
    },
    { skipNull: true },
  );

  url = encodeUrl(url);
  router.push(url);
  router.refresh()
}

  const handleValuesChange = (values: any) => {
    const adjustedValues = values.map(adjustToCustomStep);
    //setValues(adjustedValues);
    console.log('adj', adjustedValues)
    //TODO: add to query-string
    addToQueryString(adjustedValues)
  }

  useEffect(() => {
    const minMaxValues = getMinMaxPrices();
    setMinMax(minMaxValues);

    if (minMaxValues) {
      setLocalValues([minMaxValues.min.toString(), minMaxValues.max.toString()]);
      setValues([minMaxValues.min, minMaxValues.max]);
      setSliderValue([minMaxValues.min, minMaxValues.max]);
    }
  }, []);

  useEffect(() => {
    setSliderValue(values)
    setLocalValues(intoString(values) as [string, string]);
  }, [values])

  const handleInputChange = (index: number, e: any) => {
    const value = e.target.value;
    let newLocalValues: [string, string] = [...localValues];
    newLocalValues[index] = value;
    setLocalValues(newLocalValues);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      let parsedValues = intoNumber(localValues)

      if (minMax) {
        if (+parsedValues[1] > +minMax.max) {
          parsedValues[1] = minMax.max;
        }
      }

      if (!isNaN(parsedValues[0]) && !isNaN(parsedValues[1])) {
        setValues(parsedValues as [number, number]);
        setSliderValue(parsedValues as number[]);
        setLocalValues(intoString(parsedValues) as [string, string]);
      } else {
        console.error("Invalid numeric input.");
      }
    }
  };

  return (
    <>
      <div className="range-slider">
        {minMax ? <Rcslider range allowCross={false} value={sliderValue} defaultValue={defaultValues} onChange={handleSlide} onAfterChange={handleValuesChange} min={0} max={minMax?.max} /> : null}
        {minMax ? <FilterBodyPriceRangeSliders onKeyDown={handleKeyPress} onChange={handleInputChange} localValues={localValues} values={values} /> : null}
      </div>
      <label className="price-filter__additional-option checkbox__label checkbox__label--price-filter" selenium-id="filterPriceRangeShowOnlyFreeGamesCheckbox">
        <input type="checkbox" className="checkbox__input ng-untouched ng-pristine ng-valid" />
        Show only free games
      </label>
    </>
  );
};


export function encodeUrl(url: string): string {
  return url.replace("%2C", ',');
}

export function decodeUrl(url: string): string {
  return url.replace(",", '%2C');
}

const FilterBodyPriceRangeSliders = ({ values, localValues, onKeyDown, onChange }: any) => {
  return (
    <div className="range-slider__inputs">
      <label className="range-slider__label">
        <input
          type="text"
          className="range-slider__input ng-untouched ng-pristine ng-valid"
          value={localValues[0]}
          onChange={(e) => onChange(0, e)}
          onKeyDown={onKeyDown}
          selenium-id="priceRangeFrom"
        />
      </label>
      <span className="range-slider__separator">-</span>
      <label className="range-slider__label">
        <input
          type="text"
          className="range-slider__input ng-untouched ng-pristine ng-valid"
          value={localValues[1]}
          onChange={(e) => onChange(1, e)}
          onKeyDown={onKeyDown}
          selenium-id="priceRangeTo"
        />
      </label>
    </div>
  );
};
