const getListInfo = require('../callback2.cjs');

const boardID = "mcu453ed";

getListInfo(boardID, (err, data) => {
    if(err) {
        throw err;
    }else{
        console.log(data);
    }
})