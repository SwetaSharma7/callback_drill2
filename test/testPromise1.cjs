const getBoardInfo = require("../promise1.cjs");

async function run() {
  const boardID = "mcu453ed";

  try {
    const data = await getBoardInfo(boardID);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

run();
