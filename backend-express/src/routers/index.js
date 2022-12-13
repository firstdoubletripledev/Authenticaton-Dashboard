import { Router } from "express";
import authRouter from "./auth.routers";
import dashboardRouter from "./dashboard.routers";

const router = Router();

router.use("/auth", authRouter);
router.use("/dashboard", dashboardRouter);

export default router;