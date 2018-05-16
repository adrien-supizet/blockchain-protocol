let block = require("../src/block");
let chain = require("../src/blockchain");
let assert = require("assert");

describe("Class Block", () => {
  describe("Init block", () => {
    var myBlock;
    beforeEach(function() {
      myBlock = block.createBlock("data", 0);
    });
    it("should create a block", () => {
      assert.notEqual(myBlock, undefined);
    });
    it("should get the block and read data", () => {
      assert.equal(myBlock.transactions, "data");
    });
    it("should get block timestamp", () => {
      assert.notEqual(myBlock.timestamp, NaN);
    });
  });
  describe("Init blockchain", () => {
    var myChain;
    beforeEach(function() {
      myChain = chain.initBlockchain("Block #0");
    });
    it("should get block index", () => {
      assert.equal(myChain.blockIndex, 1);
      myChain.addBlock("Block #1");
      assert.equal(myChain.blocks[1].index, 1);
      assert.equal(myChain.blockIndex, 2);
    });
    it("should get block hash", () => {
      assert.equal(myChain.blocks[0].hash.length, 44);
    });
    it("should get block previous hash", () => {
      myChain.addBlock("Block #1");
      assert.notEqual(myChain.blocks[1].previousHash, myChain.blocks[0].hash);
    });
  });
});
