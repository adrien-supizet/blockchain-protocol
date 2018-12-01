const Block = require('./block');
const Transaction = require('./transaction');

let myBlockchain = initBlockchain();

class Blockchain {
    constructor() {
        this.blocks = [];
        this.pendingTransactions = [];
        this.miningDifficulty = 3;
        this.miningReward = 1;
        this.circulatingSupply = 0;
        const genesisBlock = Block.createBlock('Genesis Block');
        genesisBlock.hash = genesisBlock.generateHash();
        this.blocks.push(genesisBlock);
    }

    minePendingTransaction(rewardAddress) {
        const newBlock = Block.createBlock(this.pendingTransactions);
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.data = this.pendingTransactions;
        newBlock.hash = newBlock.mineBlock(this.miningDifficulty);
        this.blocks.push(newBlock);
        this.pendingTransactions = [Transaction.create(null, rewardAddress, this.miningReward)];
        this.circulatingSupply += this.miningReward;
    }

    addTransaction(from, to, amount) {
        const trans = Transaction.create(from, to, amount);
        if (trans.verify(this.getBalance(from))) {
            this.pendingTransactions.push(trans);
        } else {
            console.log('Abort ', trans);
        }
    }
    getLatestBlock() {
        return this.blocks[this.blocks.length - 1];
    }

    isValid() {
        for (let i = 1; i < this.blocks.length - 1; i++) {
            const previousBlock = this.blocks[i - 1];
            const currentBlock = this.blocks[i];
            if (currentBlock.previousHash != previousBlock.hash) {
                return false;
            }
            if (currentBlock.generateHash() != currentBlock.hash) {
                return false;
            }
        }
        return true;
    }

    getBalance(address) {
        let balance = 0;
        if (address === null) {
            return 1000;
        }
        for (const blocks of this.blocks) {
            for (const trans of blocks.data) {
                if (trans.from === address) {
                    balance -= trans.amount;
                }
                if (trans.to === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }
}

initBlockchain = () => new Blockchain();

exports.myBlockchain = myBlockchain;
exports.Blockchain = Blockchain;
exports.initBlockchain = initBlockchain();
