const crypto = require("crypto");

class Block {
  constructor(data) {
    this.data = data;
    this.timestamp = Date.now();
    // default data, written when block is added
    this.index = 0;
    this.previousHash = 0;
    this.hash = 0;
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

function createBlock(data) {
  return new Block(data);
}

module.exports = {
  createBlock
};
