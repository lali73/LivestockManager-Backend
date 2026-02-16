import Production from "../models/Production.js";

export const addProduction = async (req, res) => {
    try {
        const prod = new Production(req.body);
        await prod.save();
        res.status(201).json(prod);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getProduction = async (req, res) => {
    try {
        const all = await Production.find();
        res.json(all);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduction = async (req, res) => {
    try {
        const updated = await Production.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
