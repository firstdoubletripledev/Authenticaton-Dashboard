const router = require("express").Router();

import authRouter from "./auth.routers";
router.use("/auth", authRouter);
router.use("/dashboard", require("./dashboard.routers"));

module.exports = router;