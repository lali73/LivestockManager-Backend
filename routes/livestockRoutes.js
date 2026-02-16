import express from "express";
import { addLivestock, getLivestock, getSingleLivestock, updateLivestock } from "../controllers/livestockController.js";

const router = express.Router();

router.post("/", addLivestock);                // Add new livestock
router.get("/", getLivestock);                 // Get all livestock
router.get("/:tagNumber", getSingleLivestock); // Get single livestock details
router.put("/:tagNumber", updateLivestock);   // Update livestock info

export default router;
