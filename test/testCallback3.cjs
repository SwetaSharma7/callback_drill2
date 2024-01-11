const listCard = require("../callback3.cjs");

const listID = "jwkh245";

listCard(listID, (err, data) => {
    if(err){
        throw err;
    }else{
        console.log(data);
    }
});