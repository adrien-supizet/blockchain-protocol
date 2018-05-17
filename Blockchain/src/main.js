let Transaction = require("./transaction");
let Block = require("./block");
let Chain = require("./blockchain");

let myChain = Chain.initBlockchain();
myChain.addTransaction(Transaction.create("Alex", "Adrien", 25));
myChain.addTransaction(Transaction.create("Adrien", "Alex", 15));
myChain.minePendingTransaction("Alex"); // reward 10 coins
myChain.addTransaction(Transaction.create("Alex", "Adrien", 5));
myChain.minePendingTransaction("Alex"); // reward 10 coins
myChain.minePendingTransaction("Adrien"); // reward will be added when next block is forged

console.log("balance Adrien: " + myChain.getBalance("Adrien"));
console.log("balance Alex " + myChain.getBalance("Alex"));
