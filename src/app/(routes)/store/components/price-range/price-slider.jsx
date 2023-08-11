import { useEffect, useState } from "react";

export const PriceRangeJSX = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);

  const validation = (price, setPrice, otherPrice, min, max) => {
    if (/^\d*$/.test(price)) {
      if (price > max) {
        setPrice(max);
      } else if (price < min) {
        setPrice(min);
      } else {
        setPrice(price);
      }
    } else {
      setPrice(min);
    }
  };

  const minTrigger = (e) => {
    let value = parseInt(e.target.value);
    validation(value, setMinPrice, maxPrice, 0, 10000);
    setMinThumb(((minPrice - 0) / (10000 - 0)) * 100);
  };

  const maxTrigger = (e) => {
    let value = parseInt(e.target.value);
    validation(value, setMaxPrice, minPrice, 200, 10000);
    setMaxThumb(100 - ((maxPrice - 0) / (10000 - 0)) * 100);
  };

  useEffect(() => {
    setMinThumb(((minPrice - 0) / (10000 - 0)) * 100);
    setMaxThumb(100 - ((maxPrice - 0) / (10000 - 0)) * 100);
  }, [minPrice, maxPrice]);

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
              maxLength="5"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength="5"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
              className="w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
