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
