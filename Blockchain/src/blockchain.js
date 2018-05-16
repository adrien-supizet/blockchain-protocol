let b = require("./block");

class Blockchain {
  constructor(genesisBlock) {
    this.blocks = [];
  }

  addBlock(newBlock) {
    newBlock.index = this.blocks.length;
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.generateHash();
    this.blocks.push(newBlock);
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
}

function initBlockchain() {
  let chain = new Blockchain();
  let genesisBlock = b.createBlock("Genesis Block", 0);
  genesisBlock.index = 0;
  genesisBlock.hash = genesisBlock.generateHash();
  chain.blocks.push(genesisBlock);
  return chain;
}

module.exports = { initBlockchain, Blockchain };
