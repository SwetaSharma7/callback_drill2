const getListInfo = require('../promise2.cjs');

async function run() {
    const boardID = "mcu453ed";

    try {
        const data = await getListInfo(boardID);
        console.log(data);
    }catch(err) {
        console.error(err.message);
    }
}

run();