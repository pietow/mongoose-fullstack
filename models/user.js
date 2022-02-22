const mongoose = require("mongoose");

const MAILREGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const today = new Date()
const eighteenYearsAgo = today.setFullYear(today.getFullYear()-18);
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
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return MAILREGEX.test(v);
      },
      message: props => `${props.value} is not a valid email`
    },
  },
  password: {
    type: String,
    required: true,
  },
  "birth date": {
    type: Date,
    required: true,
    max: [eighteenYearsAgo.toString(), 'your are too young']
  },
  verified: Boolean,
  savedAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
