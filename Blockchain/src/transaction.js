class Transaction {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }
}

function create(from, to, amount) {
  return new Transaction(from, to, amount);
}

module.exports = { create };
