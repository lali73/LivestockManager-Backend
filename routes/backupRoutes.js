import express from "express";
import { saveBackup, getLatestBackup } from "../controllers/backupController.js";

const router = express.Router();

router.post("/save", saveBackup);
router.get("/latest", getLatestBackup);

export default router;
