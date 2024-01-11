/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given
    data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

const fs = require("fs");
const path = require("path");

function getListInfo(boardID, callback) {
    setTimeout(() => {
        let boardPath = path.join(__dirname, "lists_1.json");
        fs.readFile(boardPath, "utf-8", (err, data) => {
            if(err){
                callback(err, null);
                return;
            }try{
                const lists = JSON.parse(data);
        
              const foundList= Object.keys(lists).find(ele =>{
                   return ele == boardID;
               });

            //    console.log(lists);
                if(foundList){
                    callback(null, lists[foundList]);
                }else{
                    callback("List not found", null);
                }
            }catch(error){
                callback("error parshing JSON", null);
            }
        });
    }, 2000);

    
}

module.exports = getListInfo;
// getListInfo("111", () =>{

// })
