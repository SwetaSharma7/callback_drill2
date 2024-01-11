const getBoardInfo = require('../callback1.cjs');

const boardID="mcu453ed";

getBoardInfo(boardID,(err, data)=>{
    if(err){
        throw err;
    }
    else{
        console.log(data);
    }
})
