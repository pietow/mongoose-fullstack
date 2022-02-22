const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fname: {
    type: String,
    minLength: [2, "fname is too short"],
    maxLength: [50, "too long"],
    required: true,
  },
  lname: {
    type: String,
    minLength: [2, "lname is too short"],
    maxLength: [50, "too long"],
    required: true,
  },
  user: {
    type: String,
    minLength: [2, "name is too short"],
    maxLength: [50, "too long"],
    required: true,
  },
  email: {
    type: String,
    minLength: [2, "name is too short"],
    maxLength: [50, "too long"],
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  "birth date": {
    type: Date,
    required: true,
  },
  verified: Boolean,
  savedAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
