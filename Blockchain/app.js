let { myBlockchain } = require("./server");
const { totalSupply } = require("./config/coin");
let circulatingSupply = 0;

setInterval(function() {
  if (myBlockchain.circulatingSupply < totalSupply) {
    myBlockchain.minePendingTransaction("Miner");
    console.log("circulatingSupply: " + myBlockchain.circulatingSupply);
    console.log("Adrien: " + myBlockchain.getBalance("Adrien"));
  } else {
    //console.log("totalSupply reached.");
  }
}, 0);
