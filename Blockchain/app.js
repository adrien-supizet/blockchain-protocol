let { myBlockchain } = require("./server");
const { totalSupply } = require("./config/coin");
let circulatingSupply = 0;

setInterval(function() {
  if (myBlockchain.circulatingSupply < totalSupply) {
    myBlockchain.minePendingTransaction("Miner");
    console.log("--------CirculatingSupply: " + myBlockchain.circulatingSupply);
    console.log(
      "Adrien: " +
        myBlockchain.getBalance("Adrien") +
        " -- Miner:" +
        myBlockchain.getBalance("Miner") +
        "\n"
    );
  }
}, 0);
