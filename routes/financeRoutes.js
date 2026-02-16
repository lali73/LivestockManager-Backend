import express from "express";
import { addRecord, getRecords, getSummary } from "../controllers/financeController.js";

const router = express.Router();

router.post("/add", addRecord);
router.get("/", getRecords);
router.get("/summary", getSummary);

export default router;
