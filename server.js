const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./config/passport-setup");
let keys = require("./config/keys");
let cook = keys.session.cookieKey;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(
  cookieSession({
    // cookie expires after a day
    name: "user",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [cook],
    httpOnly: false
  })
);
// initialize passport
app.use(passport.initialize());
app.use(passport.session());
// routes
app.use(routes);

let PORT = process.env.PORT || 3001;
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
