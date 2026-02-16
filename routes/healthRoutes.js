import express from "express";
import { addRecord, getRecords } from "../controllers/healthController.js";

const router = express.Router();

router.post("/add", addRecord);
router.get("/", getRecords);

export default router;
