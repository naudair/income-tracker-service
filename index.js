const express = require("express");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const connect = require("./utils/connectDatabase");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

connect();

app.use(userRouter);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(port, () => {
  console.log(`your backend server is running on ${port}`);
});
