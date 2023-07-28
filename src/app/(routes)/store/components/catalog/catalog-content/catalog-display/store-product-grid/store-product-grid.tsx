import { useEffect, useState } from "react";

import { updatedDataProductTiles } from "@/data/temp-data";
import { useProductLengthState } from "@/store/useProductLengthState";

import { ProductTile } from "./product-tile/product-tile";

export const StoreProductGrid = () => {
  const [fullData] = useState(updatedDataProductTiles); // state to hold the full data
  const [allGames, setAllGames] = useState(updatedDataProductTiles); // state to hold the filtered data
  const searchTerm = useProductLengthState((state) => state.searchTerm);
  const productLength = useProductLengthState();

  useEffect(() => {
    if (searchTerm) {
      // if search term is not empty
      const filteredData = fullData.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setAllGames(filteredData);
      productLength.setAllGamesLength(filteredData.length);
    } else {
      // if search term is empty
      setAllGames(fullData);
      productLength.setAllGamesLength(fullData.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div
      _ngcontent-gogcom-store-c78=""
      selenium-id="catalogProductsGrid"
      className="ng-star-inserted"
    >
      <div
        className="paginated-products-grid grid"
        selenium-id="paginatedProductsGrid"
      >
        {allGames.map((item) => (
          <ProductTile key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
