const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// register user route
router
  .route("/user")
  .get(profileController.getUser)
  .post(profileController.updateCookie);
console.log("got to login");

router.route("/user/unique").get(profileController.getUniqueUser);

module.exports = router;
