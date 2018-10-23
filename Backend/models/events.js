var mongoose = require("mongoose");

module.exports = mongoose.model("Event", {
  name: String,
  address: String,
  country: String,
  phone: String,
  msg: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
