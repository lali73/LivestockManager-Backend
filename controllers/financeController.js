import { Finance } from "../models/Finance.js";

// Add Expense or Income
export const addRecord = async (req, res) => {
    try {
        const record = new Finance(req.body);
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all records (optionally filter by type)
export const getRecords = async (req, res) => {
    try {
        const type = req.query.type; // income or expense
        const filter = type ? { type } : {};
        const records = await Finance.find(filter).sort({ date: -1 });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Summary (total income/expense)
export const getSummary = async (req, res) => {
    try {
        const records = await Finance.find();
        const income = records.filter(r => r.type === "income").reduce((sum, r) => sum + r.amount, 0);
        const expense = records.filter(r => r.type === "expense").reduce((sum, r) => sum + r.amount, 0);
        res.json({ income, expense, profit: income - expense });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
