/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID t
    hat is passed from the given list of boards in boards.json and then pass control back to the code that called 
    it by using a callback function.
*/

const fs = require("fs");
const path = require("path");

function getBoardInfo(boardID, callback) {
    setTimeout(() => {
        let boardPath = path.join(__dirname, "boards.json");
        fs.readFile(boardPath, "utf-8", (err, data) => {
            if(err) {
                callback(err, null);
                return;
            }
            try{
                const boards = JSON.parse(data);
                const foundBoard = boards.find((board) => {
                    return board.id === boardID;
                });

                if(foundBoard) {
                    callback(null, foundBoard);
                }else {
                    callback("Board not found", null);
                }
            }catch(error){
                callback("error parshing JSON", null);
            }
        });
    }, 2000);
}
module.exports = getBoardInfo;