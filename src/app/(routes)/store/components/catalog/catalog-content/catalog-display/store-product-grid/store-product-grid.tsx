import { useEffect, useState } from "react";

import { updatedDataProductTiles } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";

import { ProductTile } from "./product-tile/product-tile";
import { useProductMinMaxState } from "@/store/useProductMinMax";

export const StoreProductGrid = () => {
  const [nextGames, setNextGames] = useState(updatedDataProductTiles); // state to hold the next set of games
  const [isLoading, setIsLoading] = useState(false);
  const [fullData] = useState(updatedDataProductTiles); // state to hold the full data
  const [allGames, setAllGames] = useState(updatedDataProductTiles); // state to hold the filtered data
   const {setSearchTerm, setAllGamesLength, searchTerm} = useProductLengthState();

  // getMinMax too
  const values = useProductMinMaxState(state => state.values)


  useEffect(() => {
    setIsLoading(true); // Set loading state when searchTerm changes
  
    const newGames = searchTerm
      ? fullData.filter((game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : fullData;

    setNextGames(newGames);

    setTimeout(() => {
      setAllGames(nextGames);
      setAllGamesLength(nextGames.length);
      setIsLoading(false); // Clear loading state after processing is done
    }, 2000); // Fake load of 2 seconds
  
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true); // Set loading state when values change

    const newGames = fullData.filter(game => {
      let currentPrice = parseFloat(game.price.current);
      return currentPrice >= values[0] && currentPrice <= values[1];
    });

    setNextGames(newGames);

    setTimeout(() => {
      setAllGames(nextGames);
      setIsLoading(false); // Clear loading state after processing is done
    }, 2000); // Fake load of 2 seconds

  }, [values]);

  console.log('searchTerm', searchTerm)

  return (
    <div
      _ngcontent-gogcom-store-c78=""
      selenium-id="catalogProductsGrid"
      className="ng-star-inserted"
    >
      <div
        className={`paginated-products-grid grid ${isLoading ? "is-loading" : ""}`}
        selenium-id="paginatedProductsGrid"
      >
        {allGames.map((item) => (
          <ProductTile key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
