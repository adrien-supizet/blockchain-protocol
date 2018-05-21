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

function verify(transaction, fromBalance) {
  if (transaction.amount <= fromBalance && transaction.amount > 0) {
    return false;
  } else return true;
}

module.exports = { create, verify };
