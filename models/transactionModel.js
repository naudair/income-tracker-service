const { mongoose, Schema } = require("mongoose");

const transactionSchema = new Schema({
  userID: { type: String, require: true },
  category: {
    type: String,
    enum: ["food", "shopping", "bills", "clothing"],
  },
  transactionTitle: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now() },
  note: String,
  transactionType: {
    type: String,
    enum: ["income", "expense"],
  },
});

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;
