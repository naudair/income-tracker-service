const { model, Schema } = require("mongoose");

const transactionSchema = new Schema({
  userID: { type: String, require: true },
  category: {
    type: String,
    enum: ["Food", "Shopping", "Bills", "Clothing"],
  },
  transactionTitle: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now().toString()},
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});

const TransactionModel = model("transaction", transactionSchema);

module.exports = TransactionModel;
