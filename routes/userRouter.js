const { Router } = require("express");
// const UserModel = require("../models/userModel");
const {signupUser, signinUser} = require('../controllers/userController')
const userRouter = Router();

// const validateInput = async() => {
//     const body = req.body
//     const user = await UserModel.findOne({email: body.email})
//     if(user) {
//         res.status(403).send({message: "email address is already used"})
//     } else{
//         next()
//     }
// }


// const validatePassword = () => {

// }

userRouter.post("/signup", signupUser);
userRouter.post("/signin", signinUser);

module.exports = userRouter;
