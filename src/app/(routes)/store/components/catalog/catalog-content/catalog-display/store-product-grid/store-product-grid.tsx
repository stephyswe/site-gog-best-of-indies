import React, { useEffect, useState } from "react";

import { Game, updatedDataProductTiles } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";
import { ProductTile } from "./product-tile/product-tile";
import { useProductMinMaxState } from "@/store/useProductMinMax";



const StoreProductGridComponent = ({data}: {
  data: Game[]
}) => {
  //console.log('render StoreProductGrid')
  const [nextGames, setNextGames] = useState(data); 
  const [isLoading, setIsLoading] = useState(false);
  const [fullData] = useState(data);
  const [allGames, setAllGames] = useState(data); // modified to show only 5 items
  const {setSearchTerm, setAllGamesLength, searchTerm} = useProductLengthState();

  // getMinMax too
  const values = useProductMinMaxState(state => state.values)


  useEffect(() => {
    console.log('run effect')
    setIsLoading(true);
  
    const newGames = searchTerm
      ? fullData.filter((game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : fullData;

    setNextGames(newGames);

    setTimeout(() => {
      setAllGames(nextGames);
      setAllGamesLength(nextGames.length);
      setIsLoading(false);
    }, 2000); 
  }, [searchTerm]);

  useEffect(() => {
    setIsLoading(true);

    const newGames = fullData.filter(game => {
      let currentPrice = parseFloat(game.price.current);
      return currentPrice >= values[0] && currentPrice <= values[1];
    });

    setNextGames(newGames);

    setTimeout(() => {
      setAllGames(nextGames);
      setIsLoading(false);
    }, 2000);
  }, [values]);

  console.log('allGames', allGames)

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

// Wrapping the StoreProductGridComponent with React.memo
export const StoreProductGrid = React.memo(StoreProductGridComponent);
