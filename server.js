const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const cookieSession = require("cookie-session");
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

// routes
// app.use(routes);
app.get("/api/auth/login", (req, res)=> {
  res.json({bingo:"lets go!"})
})

let PORT = process.env.PORT || 3001;
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
