const router = require("express").Router();

const authController = require("../controllers/controllerAuth");
const verifyJwt = require("../middlewares/verifyJwt");

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.post("/getaccount", verifyJwt, authController.getAccount);

module.exports = router;