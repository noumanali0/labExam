const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  image: { type: "String", required: true },
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  phone: { type: "String", required: true },
  state: { type: "String", required: true },
  city: { type: "String", required: true },
  address: { type: "String", required: true },
  zip: { type: "String", required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
