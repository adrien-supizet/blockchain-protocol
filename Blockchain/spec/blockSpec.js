let Block = require("../src/block");
let Chain = require("../src/blockchain");
let assert = require("assert");

describe("Class Block", () => {
  describe("Init", () => {
    var myBlock;
    beforeEach(function() {
      myBlock = Block.createBlock("data");
    });
    it("should create a block", () => {
      assert.equal(myBlock.transactions, "data");
    });
    it("should get the block and read data", () => {
      assert.equal(myBlock.transactions, "data");
    });
    it("should get block timestamp", () => {
      assert.notEqual(myBlock.timestamp, NaN);
    });
  });
});
describe("Class Blockchain", () => {
  describe("Init", () => {
    var myChain;
    beforeEach(function() {
      myChain = Chain.initBlockchain();
    });
    it("should get block index", () => {
      console.log("Mining difficulty: " + myChain.miningDifficulty);
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
      assert.equal(myChain.blocks[1].previousHash, myChain.blocks[0].hash);
    });
  });

  describe("Check Integrity", () => {
    var myChain;
    beforeEach(function() {
      myChain = Chain.initBlockchain();
      myChain.addBlock(Block.createBlock("Block #1"));
      myChain.addBlock(Block.createBlock("Block #2"));
      myChain.addBlock(Block.createBlock("Block #3"));
      myChain.addBlock(Block.createBlock("Block #4"));
    });
    it("should have matching hashes", () => {
      assert.equal(myChain.isValid(), true);
    });
    it("should NOT have matching stored and calculated hashes", () => {
      myChain.blocks[1].data = "Altered data";
      assert.notEqual(myChain.blocks[1].hash, myChain.blocks[1].generateHash());
      assert.equal(myChain.isValid(), false);
    });
    it("should NOT have matching hashes and previous hashes", () => {
      let oldHash = myChain.blocks[2].hash;
      myChain.blocks[2].data = "Altered data";
      myChain.blocks[2].hash = myChain.blocks[2].generateHash();
      assert.notEqual(oldHash, myChain.blocks[2].hash);
      assert.equal(myChain.isValid(), false);
    });
  });
});
