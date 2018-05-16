const crypto = require("crypto");

class Block {
  constructor(data) {
    this.data = data;
    this.timestamp = Date.now();
    // default data, written when block is added
    this.index = 0;
    this.previousHash = 0;
    this.hash = 0;
    // random data for mining
    this.nonce = 0;
  }
  get transactions() {
    return this.data;
  }

  generateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index + this.data + this.timestamp + this.previousHash + this.nonce
      )
      .digest("base64");
  }

  mineBlock(difficulty) {
    let hash;
    do {
      this.nonce++;
      hash = this.generateHash();
    } while (hash.substring(0, difficulty) !== Array(difficulty + 1).join("0"));
    console.log(
      "Block #" +
        this.index +
        " mined after " +
        this.nonce +
        " iterations with hash: " +
        hash
    );
    return hash;
  }
}

function createBlock(data) {
  return new Block(data);
}

module.exports = {
  createBlock
};
