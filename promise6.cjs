const fs = require("fs");
const path = require("path");

let boards = require("./promise1.cjs");
let lists = require("./promise2.cjs");
let cards = require("./promise3.cjs");

function Problem6() {
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
      } catch (err) {
        console.error(err.message);
      }
    }
    test();

    let listsPath = path.join(__dirname, "lists_1.json");

    fs.readFile(listsPath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }

      const listData = JSON.parse(data);
      
      Object.keys(listData).forEach((ele) => {
        const arr = listData[ele];
        arr.forEach((obj) => {
          async function runList() {
            try {
              const data = await cards(obj.id);
              console.log(data);
            } catch (err) {
              console.error(err.message);
            }
          }
    
          runList();
        });
      });

      
    });
  });
}

module.exports = Problem6;
