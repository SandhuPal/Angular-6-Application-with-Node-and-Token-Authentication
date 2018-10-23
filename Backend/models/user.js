const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
  email: String,
  pwd: String,
  name: String,
  description: String
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("pwd")) return next();

  bcrypt.hash(user.pwd, null, null, (err, hash) => {
    if (err) return next(ner);

    user.pwd = hash;
    next();
  });
});

module.exports = mongoose.model("User", userSchema);
