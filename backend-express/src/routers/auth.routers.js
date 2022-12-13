const router = require("express").Router();

const authController = require("../controllers/auth.controllers");
// const verifyJwt = require("../middleware/verifyJwt.middleware");
import verifyJwt from "../middleware/verifyJwt.middleware";

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/getaccount", verifyJwt, authController.getAccount);

module.exports = router;