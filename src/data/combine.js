const fs = require('fs').promises;
const path = require('path');

const directory = path.join('/home', 'public', 'dev', 'gog-indie', 'game-data');
let gameNames = [];

const handleFormat = (initial) => {
  let formatted = initial / 100;
  return formatted.toFixed(2);
};

const processFile = async (file) => {
  if (path.extname(file) === '.json') {
    let filePath = path.join(directory, file);

    try {
      const data = await fs.readFile(filePath, { encoding: 'utf-8' });
      let jsonData = JSON.parse(data);

      let price;
      if (jsonData.is_free) {
        price = {
          currency: 'FREE',
          current: '0.00',
          before: '0.00',
        };
      } else if (jsonData.price_overview) {
        let final = handleFormat(jsonData.price_overview.final);
        let current = handleFormat(jsonData.price_overview.initial);
        current = current === final ? null : current;
        price = {
          currency: jsonData.price_overview.currency,
          current: final,
          before: current,
        };
      }

      if (price) {
        gameNames.push({
          title: jsonData.name,
          id: jsonData.steam_appid,
          thumbnail: jsonData.header_image,
          price: price,
          genres: jsonData.genres,
          categories: jsonData.categories,
          screenshots: jsonData.screenshots,
          short_description: jsonData.short_description,
        });
      }
    } catch (err) {
      console.error('Error reading or processing file:', err);
    }
  }
};

const main = async () => {
  try {
    const files = await fs.readdir(directory);
    const promises = files.map(processFile); // process all files concurrently
    await Promise.all(promises);

    // Write to combine.json
    await fs.writeFile('./combine.json', JSON.stringify(gameNames, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
};

main();
