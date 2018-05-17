let Block = require("./block");
let Transaction = require("./transaction");

class Blockchain {
  constructor(genesisBlock) {
    this.blocks = [];
    this.pendingTransactions = [];
    this.miningDifficulty = 2;
    this.miningReward = 10;
  }

  minePendingTransaction(rewardAddress) {
    let newBlock = Block.createBlock(this.pendingTransactions);
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.data = this.pendingTransactions;
    newBlock.hash = newBlock.mineBlock(this.miningDifficulty);
    this.blocks.push(newBlock);
    this.pendingTransactions = [
      Transaction.create(null, rewardAddress, this.miningReward)
    ];
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
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
  let genesisBlock = Block.createBlock("Genesis Block");
  genesisBlock.hash = genesisBlock.generateHash();
  chain.blocks.push(genesisBlock);
  return chain;
}

module.exports = { initBlockchain };
