const getCardsInfo = require("../promise3.cjs");

const listID = "jwkh245";

async function run() {
  try {
    const data = await getCardsInfo(listID);
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

run();
