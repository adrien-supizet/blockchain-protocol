let { chain } = require("./blockchain");
const { totalSupply } = require("../config/coin");
let circulatingSupply = 0;

while (chain.circulatingSupply < totalSupply) {
  chain.minePendingTransaction("Adrien");
  console.log("circulatingSupply: " + chain.circulatingSupply);
}
console.log("totalSupply reached.");
console.log("balance Adrien: " + chain.getBalance("Adrien"));
