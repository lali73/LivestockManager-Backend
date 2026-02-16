import Backup from "../models/Backup.js";

export const saveBackup = async (req, res) => {
    try {
        const backup = new Backup({ data: req.body });
        await backup.save();
        res.status(200).json({ message: "Backup saved" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLatestBackup = async (req, res) => {
    try {
        const backup = await Backup.findOne().sort({ createdAt: -1 });
        res.json(backup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
