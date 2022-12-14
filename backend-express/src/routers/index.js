import { Router } from "express";
import authRouter from "./auth.router";
import dashboardRouter from "./dashboard.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/dashboard", dashboardRouter);

export default router;