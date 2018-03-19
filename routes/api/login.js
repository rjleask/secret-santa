const router = require("express").Router();

// register user route
router.post("/login", function(req, res) {
  console.log("got to login");
});

module.exports = router;
