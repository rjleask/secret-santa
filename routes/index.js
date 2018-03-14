const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });
  // register user route
  app.post("/login", function(req, res) {
    console.log("this " + req.body.password);
    db.User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(function(data) {
      // console.log(data);
      if (data) {
        console.log("user exists");
        res.redirect("/");
      } else {
        db.User.create({
          username: req.body.username,
          password: req.body.password
        });
        res.redirect("/");
      }
      console.log("good to go");
    });
  });
};
