const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const userSchema = Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
