let Transaction = require("../src/transaction");
let Block = require("../src/block");
let Chain = require("../src/blockchain");
const { hostURI } = require("../config/config");
let assert = require("assert");
const request = require("request");

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
describe("Class Transaction", () => {
  describe("Init", () => {
    var myTransaction;
    beforeEach(function() {
      myTransaction = Transaction.create("A", "B", 10);
    });
    it("should get transaction information", () => {
      assert.equal(myTransaction.from, "A");
      assert.equal(myTransaction.to, "B");
      assert.equal(myTransaction.amount, 10);
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
      myChain.minePendingTransaction();
      assert.equal(myChain.blocks.length, 2);
    });
    it("should get block hash", () => {
      assert.equal(myChain.blocks[0].hash.length, 44); // hash sha256 -> 44 characters
    });
    it("should get block previous hash", () => {
      myChain.minePendingTransaction();
      assert.equal(myChain.blocks[1].previousHash, myChain.blocks[0].hash);
    });
  });

  describe("Check Integrity", () => {
    var myChain;
    beforeEach(function() {
      myChain = Chain.initBlockchain();
      myChain.minePendingTransaction();
      myChain.minePendingTransaction();
      myChain.minePendingTransaction();
      myChain.minePendingTransaction();
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
      console.log(myChain.blocks[3].transactions);
    });
  });
});

describe("Nodes", () => {
  var myChain;
  beforeEach(function() {
    myChain = Chain.initBlockchain();
    myChain.minePendingTransaction();
    myChain.minePendingTransaction();
  });
  it("should create a node", done => {
    var resp;
    request.get(hostURI + "/node", (error, response, body) => {
      resp = response.statusCode;
      expect(resp).toBe(200);
      expect(body).toBeTruthy();
      done();
    });
  });
});
