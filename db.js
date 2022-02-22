const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://piet:" +
  process.env.MONGO_PASSWORD +
  "@cluster1.lyqjf.mongodb.net/FBW-e05-1";
if (!connectionString) {
  console.log("Missing connection string");
  process.exit(1);
}
mongoose.connect(connectionString);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("err");
  process.exit(1);
});
db.once("open", () => {
  console.log("MongoDB connection established");
});

const User = require("./models/user.js");
User.find((err, users) => {
  if (err) return console.log(err);
  if (users.length) return;
  User.init()
    .then(() =>
      new User({
        fname: "Piet",
        lname: "Pro",
        user: "aded",
        email: "pp@poste.de",
        password: 1234,
        "birth date": new Date(1986, 4, 26, 20),
        verified: false,
      }).save()
    )
    .catch((e) => {
      console.log(e);
    });
});
