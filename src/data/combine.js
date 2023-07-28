const fs = require("fs");
const path = require("path");

const directory = path.join("D:", "dev", "scrape-youtube", "game_found");
let gameNames = [];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    if (path.extname(file) === ".json") {
      let filePath = path.join(directory, file);

      console.log("Reading file:", filePath);

      fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
        } else {
          let jsonData = JSON.parse(data);

          let price;
          if (jsonData.is_free) {
            price = {
              currency: "FREE",
              current: "0.00",
              before: "0.00",
            };
          } else if (jsonData.price_overview) {
            let final = handleFormat(jsonData.price_overview.final);
            let current = handleFormat(jsonData.price_overview.initial);

            current = current === final ? null : current;
            price = {
              currency: jsonData.price_overview.currency,
              current: current,
              before: final,
            };
          }

          if (price) {
            gameNames.push({
              title: jsonData.name,
              id: jsonData.steam_appid,
              thumbnail: jsonData.header_image,
              price: price,
            });
          }
        }
      });
    }
  });
});

function handleFormat(initial) {
  let formatted = initial / 100;
  formatted = formatted.toFixed(2);
  return formatted;
}

// Wait for a while to allow async read to complete
setTimeout(() => {
  //console.log(gameNames);

  // Write to combine.json
  fs.writeFile("./combine.json", JSON.stringify(gameNames, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
    }
  });
}, 2000);
