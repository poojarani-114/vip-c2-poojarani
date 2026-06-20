import express from "express";
import { placeOrder, myOrders, allOrders } from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router = express.Router();
router.post("/", protect, placeOrder);
router.get("/me", protect, myOrders);
router.get("/", protect, adminOnly, allOrders);
export default router;
