const TransactionModel = require("../models/TransactionModel");

const createTransaction = async (req, res) => {
  const data = req.body;
  try {
    const response = await TransactionModel.create(data);
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTransaction = async (req, res) => {
  const data = req.body;
  const {id, ...transaction} = data
  console.log(data)
  try {
    const response = await TransactionModel.findByIdAndUpdate(id, transaction, {new:true});
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};


const getTransactions = async (req, res) => {
    try {
      const response = await TransactionModel.find().sort({createdAt: 'desc'})
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const deleteTransaction = async (req, res) => {
    const transactionId = req.params.transactionId
    try{
      const transaction = await TransactionModel.findByIdAndDelete(transactionId)
      if(transaction){
        res.status(200).send(transaction._id)
      } else{
        res.status(404).send("transaction not found.")
      }
    } catch (error) {
      res.status(500).send("Internal Error.")
    }
  }

module.exports = { getTransactions, createTransaction, deleteTransaction, updateTransaction };
