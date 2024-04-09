const { Router } = require("express");
const { signupUser, signinUser } = require("../controllers/userController");
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");
const userRouter = Router();

const validateEmail = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });
  if (user) {
    res.status(403).send({ message: "email address is already used" });
  } else {
    next();
  }
};

const validatePassword = async (req, res, next) => {
  const body = req.body;
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    const isPasswordCorrect = await bcrypt.compare(
      body.password,
      user?.password
    );

    if (isPasswordCorrect) {
      next();
    } else {
      res.status(404).send("Password is incorrect");
    }
  } else {
    res.status(404).send("user not found");
  }
};

userRouter.post("/signup", validateEmail, signupUser);
userRouter.post("/signin", validatePassword, signinUser);

module.exports = userRouter;
