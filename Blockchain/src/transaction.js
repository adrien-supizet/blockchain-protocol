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

function verify(amount, fromBalance) {
  if (amount <= fromBalance && amount > 0) {
    return true;
  } else return false;
}

module.exports = { create, verify };
