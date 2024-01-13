/* 
	Problem 4: Write a function that will use the previously 
    written functions to get the following information.
     You do not need to pass control back to the code that called 
     it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

const fs = require("fs");
const path = require("path");

let boards = require("./promise1.cjs");
let lists = require("./promise2.cjs");
let cards = require("./promise3.cjs");

function Problem() {
  let boardsPath = path.join(__dirname, "boards.json");

  fs.readFile(boardsPath, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const boardsData = JSON.parse(data);
    let id = "";
    boardsData.forEach((ele) => {
      if (ele.name == "Thanos") {
        id = ele.id;
      }
    });

    async function run() {
        try {
          const data = await boards(id);
          console.log(data);
        } catch (err) {
          console.error(err.message);
        }
      }
      
      run();
    
    
    async function test() {

        try {
            const data = await lists(id);
            console.log(data);
        }catch(err) {
            console.error(err.message);
        }
    }
    test()
    
    let listsPath = path.join(__dirname, "lists_1.json");

    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      const listData = JSON.parse(data);
      let mindId = "";
      Object.keys(listData).forEach((ele) => {
        const arr = listData[ele];
        arr.forEach((obj) => {
          if (obj.name == "Mind") {
            mindId = obj.id;
          }
        });
      });

      async function runTest() {
        try {
          const data = await cards(mindId);
          console.log(data);
        } catch (err) {
          console.error(err.message);
        }
      }
      
      runTest();
    });
});
}

module.exports = Problem;
