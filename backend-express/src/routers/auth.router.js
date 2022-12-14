import { Router } from "express";
import { signIn, signUp, getAccount } from "../controllers/auth.controller";
import { verifyJwt } from "../middleware/auth.middleware";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/getaccount", verifyJwt, getAccount);

export default router;