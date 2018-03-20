const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const cookieSession = require("cookie-session");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(
  cookieSession({
    // cookie expires after a day
    name: "user",
    maxAge: 24 * 60 * 60 * 1000,
    keys: "secretcookie",
    httpOnly: false
  })
);
app.use(routes);

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// require("./routes/user-api.js")(app);
// require("./routes/settings-api.js")(app);
let PORT = process.env.PORT || 3001;
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
