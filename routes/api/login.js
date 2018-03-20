const router = require("express").Router();

// register user route
router.route("/login");
// .get(profileController.getUser)
// .post(profileController.updateCookie)
console.log("got to login");

router.route("/login/unique");
// .get(profileController.getUniqueUser);

module.exports = router;
