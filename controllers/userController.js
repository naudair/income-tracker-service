const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signupUser = async (req, res) => {
  const body = req.body;
  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data = { ...body, password: hashedPassword };
  try {
    await UserModel.create(data);
    res.status(200).send({ message: "created" });
  } catch (err) {
    res.status(500).send(err);
  }
};

const signinUser = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.status(200).send({user, message: "amjilttai nevterle" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { signupUser, signinUser };
