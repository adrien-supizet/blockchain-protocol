let b = require("./block");

class Blockchain {
  constructor(genesisBlock) {
    this.blockIndex = 0;
    this.blocks = [];
    this.addBlock(genesisBlock);
  }

  addBlock(data) {
    let myBlock = b.createBlock(data, this.blockIndex, this.getPreviousHash());
    this.blocks.push(myBlock);
    this.blockIndex++;
  }

  getPreviousHash(index) {
    if (index > 0) {
      return this.blocks[index - 1].hash;
    } else return 0;
  }
}

function initBlockchain(data) {
  return new Blockchain(b.createBlock(data, 0));
}

module.exports = { initBlockchain, Blockchain };
