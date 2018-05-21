let { myBlockchain } = require("../server");
const { totalSupply } = require("../config/coin");
let circulatingSupply = 0;

setInterval(function() {
  if (myBlockchain.circulatingSupply < totalSupply) {
    myBlockchain.minePendingTransaction("Adrien");
    console.log("Adrien: " + myBlockchain.getBalance("Adrien"));
  } else {
    //console.log("totalSupply reached.");
  }
}, 0);
