import { Health } from "../models/Health.js";

// Add health record
export const addRecord = async (req, res) => {
    try {
        const record = new Health(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all health records
export const getRecords = async (req, res) => {
    try {
        const records = await Health.find().sort({ date: -1 });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
