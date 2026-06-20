import express from "express";
import { listProducts, getProduct, createProduct, deleteProduct } from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router = express.Router();
router.get("/", listProducts);
router.get("/:id", getProduct);
router.post("/", protect, adminOnly, createProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);
export default router;
