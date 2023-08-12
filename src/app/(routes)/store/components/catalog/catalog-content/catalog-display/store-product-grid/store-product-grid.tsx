import React, { useEffect, useState } from "react";

import { Game, updatedDataProductTiles } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";
import { ProductTile } from "./product-tile/product-tile";
import { useProductMinMaxState } from "@/store/useProductMinMax";



const StoreProductGridComponent = ({data}: {
  data: Game[]
}) => {
  const [allGames, setAllGames] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const { setSearchTerm, setAllGamesLength, searchTerm } = useProductLengthState();
  const values = useProductMinMaxState((state) => state.values);

  useEffect(() => {
    setIsLoading(true);

    let filteredGames = searchTerm
      ? data.filter((game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data;

    filteredGames = filteredGames.filter((game) => {
      let currentPrice = parseFloat(game.price.current);
      return currentPrice >= values[0] && currentPrice <= values[1];
    });

    setTimeout(() => {
      setAllGames(filteredGames);
      setAllGamesLength(filteredGames.length);
      setIsLoading(false);
    }, 2000);

  }, [searchTerm, values, data, setAllGamesLength]);

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
         {allGames.slice(0,5).map((item) => (
          <ProductTile key={item.title} {...item} />
        ))} 
      </div> 
    </div>
  );
};

// Wrapping the StoreProductGridComponent with React.memo
export const StoreProductGrid = React.memo(StoreProductGridComponent);
