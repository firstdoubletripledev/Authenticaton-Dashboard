import { Router } from "express";
import { createProduct, readProducts, readProduct, updateProduct, deleteProduct } from "../controllers/product.controller";
import { verifyJwt } from "../middleware/auth.middleware";

const router = Router();

router.post("/create", createProduct);
router.get("/reads", readProducts);
router.get("/read", readProduct);
router.put("/update", updateProduct);
router.delete("/delete", deleteProduct);

export default router;