class Transaction {
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }

  verify(fromBalance) {
    if (this.amount > 0) {
      if (this.from === null) {
        return true;
      } else if (this.amount <= fromBalance) {
        return true;
      }
    }
    return false;
  }
}

function create(from, to, amount) {
  return new Transaction(from, to, amount);
}

module.exports = { create };
