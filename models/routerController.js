// import emailSender
/* const emailSender = require("./emailSender"); */
const emailService = require('../lib/email')()
const User = require("../models/user.js");
const encrypt = require("../lib/encrypt");

const getHome = (req, res) => {
  res.render("index");
};

const getAbout = (req, res) => {
  res.render("about");
};

const getContact = (req, res) => {
  res.render("contact");
};

const getRegister = (req, res) => {
  res.render("register");
};
const postRegister = (req, res) => {
  const { fname, lname, user, email, password, repassword, date } = req.body;
  console.log(email)
  console.log('calling sendgrid')
  emailService.send('bla', email, 'test', 'bla')
  console.log('sending email...')

  if (password === repassword) {
    User.find(async (err, users) => {
      if (err) return console.log(err);
      const userItem = new User({
        fname,
        lname,
        user,
        email,
        password: await encrypt(password),
        birthDate: new Date(date),
        verified: false,
        savedAt: new Date(),
      });
      /* console.log(userItem); */
      userItem.save((e) => {
        if (e) {
          if (e.code) {
            res.json({ result: "DB Error: " + e.code });
          } else if (e.errors) {
            const key = Object.keys(e.errors)[0];
            res.json({ result: e.errors[key].message });
          }
        } else {
          res.json({ result: "ok" });
        }
      });
    });
  }
};

const getVideos = (req, res) => {
  res.render("videos");
};

const postContact = (req, res) => {
  console.log(req.body);
  emailSender
    .sendEmail(req.body)
    .then((info) => {
      console.log(info);
      res.json({ result: "done" });
    })
    .catch((error) => {
      console.log(error);
      res.json({ result: "error" });
    });
};
module.exports = {
  getHome,
  getAbout,
  getContact,
  getRegister,
  postRegister,
  postContact,
  getVideos,
};
