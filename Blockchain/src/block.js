const crypto = require("crypto");

class Block {
  constructor(data, index, previousHash) {
    this.index = index;
    this.data = data;
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.hash = this.generateHash(
      this.index,
      this.data,
      this.timestamp,
      this.previousHash
    );
  }
  get transactions() {
    return this.data;
  }

  generateHash() {
    return crypto
      .createHash("sha256")
      .update(this.index + this.data + this.timestamp + this.previousHash)
      .digest("base64");
  }
}

function createBlock(data, index) {
  return new Block(data, index);
}

module.exports = {
  createBlock
};
