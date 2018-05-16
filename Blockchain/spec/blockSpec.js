let Block = require("../src/block");
let Chain = require("../src/blockchain");
let assert = require("assert");

describe("Class Block", () => {
  describe("Init block", () => {
    var myBlock;
    beforeEach(function() {
      myBlock = Block.createBlock("data");
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
      myChain = Chain.initBlockchain();
    });
    it("should get block index", () => {
      assert.equal(myChain.blocks.length, 1);
      myChain.addBlock(Block.createBlock("Block #1"));
      assert.equal(myChain.blocks[1].index, 1);
      assert.equal(myChain.blocks.length, 2);
    });
    it("should get block hash", () => {
      assert.equal(myChain.blocks[0].hash.length, 44); // hash sha256 -> 44 characters
    });
    it("should get block previous hash", () => {
      myChain.addBlock(Block.createBlock("Block #1"));
      console.log(myChain);
      assert.equal(myChain.blocks[1].previousHash, myChain.blocks[0].hash);
    });
  });
});
