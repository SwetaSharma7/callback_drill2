/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given
    data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

const fs = require("fs").promises;
const path = require("path");

function getListInfo(boardID) {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const boardPath = path.join(__dirname, "lists_1.json");
                const data = await fs.readFile(boardPath, "utf-8");
                const lists = JSON.parse(data);

                const foundData = Object.keys(lists).find((list) => list === boardID);

                if (foundData) {
                    resolve(lists[foundData]);
                } else {
                    reject(new Error("List not found"));
                }
            } catch (error) {
                reject(new Error("Error parsing data: " + error.message));
            }
        }, 2000); 
    });
}

module.exports = getListInfo;
