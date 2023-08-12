import React, { useEffect, useState } from "react";

import { Game } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";
import { ProductTile } from "./product-tile/product-tile";
import { useProductMinMaxState } from "@/store/useProductMinMax";
import { useProductSortState } from "@/store/useProductSortState";
import { useProductGenreState } from "@/store/useProductGenre";

// Define the possible sort ids
type SortId = 'priceDesc' | 'priceAsc'; // Add other sortIds as needed

// Define the type for the sort functions
type SortFunction = (a: Game, b: Game) => number;

// Use the SortFunctions type to type the sortFunctions object
const sortFunctions: Record<SortId, SortFunction> = {
  'priceAsc': (a, b) => parseFloat(a.price.current) - parseFloat(b.price.current),
  'priceDesc': (a, b) => parseFloat(b.price.current) - parseFloat(a.price.current),
  // ... Add other sorting methods based on sortId values you might have
};

const StoreProductGridComponent = ({data}: {
  data: Game[]
}) => {
  const [allGames, setAllGames] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const { setAllGamesLength, searchTerm } = useProductLengthState();
  const sortId = useProductSortState((state) => state.sortId)
  const values = useProductMinMaxState((state) => state.values);
  const genreIds = useProductGenreState((state) => state.genreIds);

  useEffect(() => {
    setIsLoading(true);

    let filteredGames = searchTerm
      ? data.filter((game) =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data;

    // Price filter
    filteredGames = filteredGames.filter((game) => {
      let currentPrice = parseFloat(game.price.current);
      return currentPrice >= values[0] && currentPrice <= values[1];
    });

    // Genre filtering logic
    if (genreIds && genreIds.length > 0) {
      filteredGames = filteredGames.filter(game =>
        game.genres?.some && game.genres.some(genre => genreIds.includes(genre.description))
      );
    }

    // Sorting logic
    if (sortFunctions.hasOwnProperty(sortId)) {
      const currentSortFunction = sortFunctions[sortId as SortId];
      filteredGames.sort(currentSortFunction);  
    } else {
      // handle the case where sortId is not a valid key
      // (This section might be redundant as there is a similar condition above. Consider merging them.)
    }

    setTimeout(() => {
      setAllGames(filteredGames);
      setAllGamesLength(filteredGames.length);
      setIsLoading(false);
    }, 2000);

}, [searchTerm, values, data, setAllGamesLength, sortId, genreIds]);


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
