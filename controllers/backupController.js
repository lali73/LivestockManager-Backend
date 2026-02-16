import { Backup } from "../models/Backup.js";

// Save backup
export const saveBackup = async (req, res) => {
    try {
        const backup = new Backup({ data: req.body });
        await backup.save();
        res.status(201).json(backup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get latest backup
export const getLatestBackup = async (req, res) => {
    try {
        const backup = await Backup.findOne().sort({ createdAt: -1 });
        res.json(backup);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
