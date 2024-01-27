const UserModel = require("../models/userModel");
// const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  const body = req.body;
  // const password = body.password;
  // const hashedPassword = bcrypt.hashSync(password, 1);
  // const data = { ...body, password: hashedPassword };
  try {
    await UserModel.create(body);
    res.status(200).send({ message: "created" });
  } catch (err) {
    res.status(500).send(err);
  }
};

// const signinUser = async (req, res) => {

// }

module.exports = { signupUser };
