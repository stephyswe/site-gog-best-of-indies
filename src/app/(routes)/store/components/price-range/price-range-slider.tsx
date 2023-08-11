import { ChangeEvent, useEffect, useState } from "react";

import "./price-range.css";

export const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [minThumb, setMinThumb] = useState<number>(0);
  const [maxThumb, setMaxThumb] = useState<number>(0);

  const validation = (
    price: number,
    setPrice: React.Dispatch<React.SetStateAction<number>>,
    otherPrice: number,
    min: number,
    max: number
  ) => {
    if (/^\d*$/.test(price.toString())) {
      if (price > max) {
        setPrice(9500);
      }
      if (price < min) {
        setPrice(min);
      }
    } else {
      setPrice(0);
    }
  };

  const minTrigger = () => {
    validation(minPrice, setMinPrice, maxPrice, 0, 10000);
    setMinPrice(Math.min(minPrice, maxPrice - 500));
    setMinThumb(((minPrice - 0) / (10000 - 0)) * 100);
  };

  const maxTrigger = () => {
    validation(maxPrice, setMaxPrice, minPrice, 200, 10000);
    setMaxPrice(Math.max(maxPrice, minPrice + 200));
    setMaxThumb(100 - ((maxPrice - 0) / (10000 - 0)) * 100);
  };

  useEffect(() => {
    minTrigger();
    maxTrigger();
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            min={0}
            max={10000}
            onChange={minTrigger}
            value={minPrice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <input
            type="range"
            step="100"
            min={0}
            max={10000}
            onChange={maxTrigger}
            value={maxPrice}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{ right: maxThumb + "%", left: minThumb + "%" }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2"
              style={{ left: minThumb + "%" }}
            ></div>

            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2"
              style={{ right: maxThumb + "%" }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700">
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={handleMinPriceChange}
              value={minPrice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength={5}
              onChange={handleMaxPriceChange}
              value={maxPrice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
