import gameData from "./combine.json";

//import gameData from './games/24420.json';

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

export let gamesAdded = 0;

export const updatedDataProductTiles = gameData.map((game) => {
  // Since dataProductTiles is a single item array,
  // you can access the first item directly.
  const defaultProduct = dataProductTiles[0];

  gamesAdded++; // Increase the count for each game added

  return { ...defaultProduct, ...game };
});
