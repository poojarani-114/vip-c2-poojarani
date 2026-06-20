import express from "express";
import { getAdminData, updateAdminData } from "../controllers/adminController.js";
import { protect, adminOnly } from "../middleware/auth.js";
const router = express.Router();
router.get("/", getAdminData);
router.put("/", protect, adminOnly, updateAdminData);
export default router;
