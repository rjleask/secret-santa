// const db = require("../models");

module.exports = function(app) {
  // cookie on initial page load
  app.get("/", function(req, res) {
    res.render("index");
  });
};
