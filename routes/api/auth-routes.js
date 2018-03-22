const router = require("express").Router();
const passport = require("passport");
// const environment = require("../../config/environment");

// auth login
router.get("/login", (req, res) => {
  // res.render('login', { user: req.user });
  console.log("got to the login " + req.user);
  res.send(req.user);
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  // builtin passport function amazing
  req.logout();
  res.redirect("http://localhost:3000/home");
});

// auth with google+
router.get(
  "/google",
  passport.authenticate(
    "google",
    {
      scope: ["profile"]
    },
    function() {}
  )
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("http://localhost:3000/home");
});

module.exports = router;
