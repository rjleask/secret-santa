const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const cookieParser = require("cookie-parser");
const db = require("./models");

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public/assets"));
app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// require("./routes/user-api.js")(app);
// require("./routes/settings-api.js")(app);
require("./routes/index.js")(app);

let PORT = process.env.PORT || 3000;
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
