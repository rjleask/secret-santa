const router = require("express").Router();
const loginRoutes = require("./auth-routes");
const profileRoutes = require("./profile");

router.use("/auth", loginRoutes);
router.use("/profile", profileRoutes);
module.exports = router;
