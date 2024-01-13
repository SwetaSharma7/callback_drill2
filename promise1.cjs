/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID
    that is passed from the given list of boards in boards.json and then pass control back to the code that called 
    it by using a callback function.
*/

const fs = require("fs").promises;
const path = require("path");

function getBoardInfo(boardID) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const boardPath = path.join(__dirname, "boards.json");
        const data = await fs.readFile(boardPath, "utf-8");
        const boards = JSON.parse(data);

        const foundData = boards.find((board) => board.id === boardID);

        if (foundData) {
          resolve(foundData);
        } else {
          reject(new Error("List not found"));
        }
      } catch (error) {
        reject(new Error("Error parsing data: " + error.message));
      }
    }, 2000); 
  });
}

module.exports = getBoardInfo;
