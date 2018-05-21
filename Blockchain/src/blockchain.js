let Block = require("./block");
let Transaction = require("./transaction");

let myBlockchain;

class Blockchain {
  constructor() {
    this.blocks = [];
    this.pendingTransactions = [];
    this.miningDifficulty = 3;
    this.miningReward = 1;
    this.circulatingSupply = 0;
    let genesisBlock = Block.createBlock("Genesis Block");
    genesisBlock.hash = genesisBlock.generateHash();
    this.blocks.push(genesisBlock);
  }

  minePendingTransaction(rewardAddress) {
    let newBlock = Block.createBlock(this.pendingTransactions);
    newBlock.previousHash = this.getLatestBlock().hash;
    console.log("Transactions to mine: " + this.pendingTransactions.length);
    newBlock.data = this.pendingTransactions;
    newBlock.hash = newBlock.mineBlock(this.miningDifficulty);
    this.blocks.push(newBlock);
    this.pendingTransactions = [
      Transaction.create(null, rewardAddress, this.miningReward)
    ];
    this.circulatingSupply += this.miningReward;
  }

  addTransaction(from, to, amount) {
    this.pendingTransactions.push(Transaction.create(from, to, amount));
  }
  getLatestBlock() {
    return this.blocks[this.blocks.length - 1];
  }

  isValid() {
    for (let i = 1; i < this.blocks.length - 1; i++) {
      let previousBlock = this.blocks[i - 1];
      let currentBlock = this.blocks[i];
      if (currentBlock.previousHash != previousBlock.hash) {
        return false;
      }
      if (currentBlock.generateHash() != currentBlock.hash) {
        return false;
      }
    }
    return true;
  }

  getBalance(address) {
    let balance = 0;
    for (const b of this.blocks) {
      for (const trans of b.data) {
        if (trans.from === address) {
          balance -= trans.amount;
        }
        if (trans.to === address) {
          balance += trans.amount;
        }
      }
    }
    return balance;
  }
}

function initBlockchain() {
  let chain = new Blockchain();
  // Specify custom Genesis block here
  return chain;
}

if (!myBlockchain) {
  myBlockchain = new Blockchain();
}

exports.myBlockchain = myBlockchain;
exports.Blockchain = Blockchain;
exports.initBlockchain = initBlockchain();
