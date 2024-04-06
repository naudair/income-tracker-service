const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  id: String,
  email: String,
  name: String,
  password: String,
  avatar_img: String,
  createdAt: { type: Date, default: Date.now() },
  updatedAt: Date,
  CurrencyType: String,
});
const UserModel = model("users", UserSchema);

module.exports = UserModel;
