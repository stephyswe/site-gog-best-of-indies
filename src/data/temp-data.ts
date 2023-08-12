import gameData from "./combine.json";
import fx from 'money';


type Currency = "EUR" | "USD" | "RUB" | "THB" | "CAD" | "GBP" | "TWD" | "BRL" | "SGD" | "AUD";

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

export type Game = {
  title: string,
  id: number,
  thumbnail: string,
  price: {
    currency: string,//"USD" | "EUR",
    current: string,
    before: string | null
  }
}

export function currencyData(data: any) {
  const { current, currency } = data;
  const number = parseInt(current);
  const exchange = fx.convert(number, { from: currency, to: "EUR" });
  return {
    current: exchange.toFixed(2),
    currency: "EUR"
  }
}

const adjustPricesToEUR = (game: any) => {
  return {
    ...game,
    price: currencyData(game.price)
  }

}

export function getMinMaxPrices() {
  const newData = newPrices();
  const prices = newData.map((game: any) => parseFloat(game.price.current));
  newData.sort((a: any, b: any) => parseFloat(b.price.current) - parseFloat(a.price.current));
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}



const getRateForCurrency = (currency: Currency) => {
  const defaultRates: Record<Currency, number> = {
    "EUR": 0.85,    // Roughly, 1 USD was around 0.85 EUR
    "USD": 1,       // Base currency
    "AUD": 1.3,     // Roughly, 1 USD was around 1.3 AUD
    "RUB": 75,      // Roughly, 1 USD was around 75 RUB
    "THB": 31,      // Roughly, 1 USD was around 31 THB
    "CAD": 1.25,    // Roughly, 1 USD was around 1.25 CAD
    "GBP": 0.75,    // Roughly, 1 USD was around 0.75 GBP
    "TWD": 28,      // Roughly, 1 USD was around 28 TWD
    "BRL": 5.2,     // Roughly, 1 USD was around 5.2 BRL
    "SGD": 1.35     // Roughly, 1 USD was around 1.35 SGD
  };

  return defaultRates[currency] || null; // returns null if currency is not found in defaultRates
};

export const newPrices = () => {
  // find all currencies in gameData
  const allCurrenciesSet = new Set(gameData.map(game => game.price.currency));

  // remove Free
  allCurrenciesSet.delete("FREE")

  // Convert Set back to array
  const sampleRates = [...allCurrenciesSet] as Currency[];

  // Sample function to get the rate for a given currency
  // In a real-world scenario, you'd fetch these from an API or have them predefined
  sampleRates.forEach((currency: Currency) => {
    const rate = getRateForCurrency(currency);
    if (rate !== null) {
      fx.rates[currency] = rate;
    } else {
      console.warn(`Rate for ${currency} not found. Please update the getRateForCurrency function.`);
    }
  });
  fx.base = "USD";

  // all not "FREE"
  /* const gameNotFree = gameData.filter((game: any) => game.price.currency !== "FREE")
  const newData = gameData.filter((game: any) => game.price.currency !== "EUR" ) */

  const filteredData = gameData.filter((game: any) => game.price.currency !== "FREE" && game.price.currency !== "EUR");

  const gamesInEUR = filteredData.map(adjustPricesToEUR);


  // connect with GameInEuro and GameInFree
  const connectData = gameData.filter((game: any) => game.price.currency === "FREE" || game.price.currency === "EUR");

  // merge connectData and gamesInEUR
  const mergedData = [...connectData, ...gamesInEUR];

  return mergedData
};

const newData = newPrices();

export const updatedDataProductTiles = newData.map((game: Game) => {

  // Since dataProductTiles is a single item array,
  // you can access the first item directly.
  const defaultProduct = dataProductTiles[0];

  gamesAdded++; // Increase the count for each game added

  return { ...defaultProduct, ...game };
});

const generateUpdatedDataProductTiles = (): Game[] => {
  const newData = newPrices();

  return newData.map((game: Game) => {
      // Since dataProductTiles is a single item array,
      // you can access the first item directly.
      const defaultProduct = dataProductTiles[0];

      gamesAdded++; // Increase the count for each game added

      return { ...defaultProduct, ...game };
  });
};

export const getData = generateUpdatedDataProductTiles();
