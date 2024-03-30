const { Router } = require("express");
const { getTransactions, createTransaction, deleteTransaction, updateTransaction } = require("../controllers/transactionController");

const transactionRoute = Router();

transactionRoute.get("/get-transaction", getTransactions);
transactionRoute.post("/create-transaction", createTransaction);
transactionRoute.delete("/delete-transaction/:transactionId", deleteTransaction);
transactionRoute.post("/update-transaction/", updateTransaction);


module.exports = { transactionRoute };
