const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anudari:anudari0112@cluster0.hk79mx6.mongodb.net/income-tracker?retryWrites=true&w=majority"
    );
    console.log("Connected to Database ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDatabase;
