import gameData from "./steam_data.json";

export const dataProductTiles = [
  {
    id: 1029210,
    href: "/the_witcher",
    title: "The Witcher: Enhanced Edition",
    thumbnail:
      "https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.jpg, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.jpg 2x",
    price: {
      currency: "SEK",
      before: "86.00",
      current: "12.80",
    },
    expanded: {
      os: ["windows", "osx"],
      language: {
        name: "English",
        options: "(audio, text)",
      },
      rating: "4.6",
      tags: [
        "Fantasy, Story Rich, Atmospheric, Classic, Great Soundtrack, Choices Matter, Open World, Third Person, Nudity, Multiple Endings, Magic, Mature, Medieval",
      ],
      features: {
        player: ["singleplayer"],
        controller: ["cloud-saves"],
      },
    },
  },
];

export const updatedDataProductTiles = dataProductTiles.map((product) => {
  // check if the product id matches the gameData id
  if (product.id === gameData.id) {
    // if it does, overwrite the product data with the gameData
    return {
      ...product,
      title: gameData.title,
      thumbnail: gameData.thumbnail,
      // replace other properties as required
    };
  }

  // if the product id doesn't match, return the product unmodified
  return product;
});
