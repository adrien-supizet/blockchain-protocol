const crypto = require("crypto");

class Block {
  constructor(data) {
    this.data = data;
    this.timestamp = Date.now();
    // default data, written when block is added
    this.previousHash = 0;
    this.hash = 0;
    // random data for mining
    this.nonce = 0;
  }
  get transactions() {
    return JSON.stringify(this.data);
  }

  get info() {
    return "Timestamp: " + this.timestamp + "  -  Hash: " + this.hash;
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
      "Block mined after " + this.nonce + " iteration with hash: " + hash
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
