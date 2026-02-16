import express from "express";
import { addProduction, getProduction, updateProduction } from "../controllers/productionController.js";

const router = express.Router();

router.post("/", addProduction);             // Add milk/meat production
router.get("/", getProduction);              // Get all production records
router.put("/:id", updateProduction);       // Edit a production record

export default router;
