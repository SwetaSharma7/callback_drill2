/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID
    that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using
    a callback function.
*/

const fs = require("fs").promises;
const path = require("path");

function getCardsInfo(listID) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const cardsPath = path.join(__dirname, "cards_1.json");
        const data = await fs.readFile(cardsPath, "utf-8");
        const cardsData = JSON.parse(data);

        const listIdCards = Object.keys(cardsData).find((listid) => listid == listID);

        if (listIdCards) {
          resolve(cardsData[listIdCards]);
        } else {
          reject(new Error("Could not find data"));
        }
      } catch (error) {
        reject(new Error("Error parsing JSON: " + error.message));
      }
    }, 2000);
  });
}

module.exports = getCardsInfo;
