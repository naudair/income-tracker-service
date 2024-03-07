const express = require("express");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const connect = require("./utils/connectDatabase");
const { transactionRoute } = require("./routes/transactionRoute");


const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

connect();

app.use(userRouter);
app.use(transactionRoute);

app.listen(port, () => {
  console.log(`your backend server is running on ${port}`);
});
