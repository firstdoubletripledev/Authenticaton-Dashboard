const router = require("express").Router();

router.use("/auth", require("./auth.routers"));
router.use("/dashboard", require("./dashboard.routers"));

module.exports = router;