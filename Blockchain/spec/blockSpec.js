let Transaction = require("../src/transaction");
let Block = require("../src/block");
let Chain = require("../src/blockchain");
const { hostURI } = require("../config/config");
let assert = require("assert");
const request = require("request");

describe("Class Block", () => {
  describe("Init", () => {
    let myBlock;
    beforeEach(function() {
      myBlock = Block.createBlock("data");
    });
    it("should get the block and read data", () => {
      assert.equal(myBlock.data, "data");
    });
    it("should get block timestamp", () => {
      assert.notEqual(myBlock.timestamp, NaN);
    });
  });
});
describe("Class Transaction", () => {
  describe("Init", () => {
    let myTransaction;
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
    let myChain;
    beforeEach(function() {
      myChain = Chain.initBlockchain();
    });
    it("should get block index", () => {
      console.log("Mining difficulty: " + myChain.miningDifficulty);
      assert.equal(myChain.blocks.length, 1);
      myChain.minePendingTransaction("Miner");
      assert.equal(myChain.blocks.length, 2);
    });
    it("should get block hash", () => {
      assert.equal(myChain.blocks[0].hash.length, 44); // hash sha256 -> 44 characters
    });
    it("should get block previous hash", () => {
      myChain.minePendingTransaction();
      assert.equal(myChain.blocks[1].previousHash, myChain.blocks[0].hash);
    });
    it("should mine a transaction", () => {
      myChain.addTransaction("Alex", "Adrien", 5);
      myChain.minePendingTransaction("Test");
      const trans = myChain.getLatestBlock().data.slice(-1)[0];
      assert.equal(trans.amount, 5);
      assert.equal(trans.from, "Alex");
      assert.equal(trans.to, "Adrien");
    });
    it("should read transactions", () => {
      myChain.minePendingTransaction("Miner");
      myChain.addTransaction("Alex", "Adrien", 25);
      myChain.addTransaction("Adrien", "Alex", 10);
      myChain.minePendingTransaction("Miner");
      assert.equal(myChain.getLatestBlock().data.length, 3);
    });
    it("should give mining reward", () => {
      myChain.minePendingTransaction("Test");
      myChain.minePendingTransaction("Test");
      assert.equal(myChain.getBalance("Test"), myChain.miningReward);
    });
  });

  describe("Check Integrity", () => {
    let myChain;
    beforeEach(function() {
      myChain = Chain.initBlockchain();
      myChain.minePendingTransaction("Miner");
      myChain.minePendingTransaction("Miner");
      myChain.minePendingTransaction("Miner");
      myChain.minePendingTransaction("Miner");
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

describe("Nodes", () => {
  let myChain;
  beforeEach(function() {
    myChain = Chain.initBlockchain();
    myChain.minePendingTransaction("Miner");
    myChain.minePendingTransaction("Miner");
  });
  it("should create a node", done => {
    let resp;
    request.get(hostURI + "/node", (error, response, body) => {
      resp = response.statusCode;
      expect(resp).toBe(200);
      expect(body).toBeTruthy();
      done();
    });
  });
  it("should get node's first block", done => {
    let resp;
    request.get(hostURI + "/block/0", (error, response, body) => {
      resp = response.statusCode;
      expect(resp).toBe(200);
      expect(JSON.parse(body).data).toBe("Genesis Block");
      done();
    });
  });
});
