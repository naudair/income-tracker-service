const { Router } = require("express");
// const UserSchema = require("../models/userModel");
const {signupUser} = require('../controllers/userController')
const userRouter = Router();

// const validateInput = () => {

// }

// const validatePassword = () => {

// }

userRouter.post("/signup", signupUser);
// router.post("signin", validatePassword, signinUser);

module.exports = userRouter;
