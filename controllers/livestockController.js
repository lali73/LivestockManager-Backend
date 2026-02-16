import Livestock from "../models/Livestock.js";

// Add new livestock
export const addLivestock = async (req, res) => {
    try {
        const livestock = new Livestock(req.body);
        await livestock.save();
        res.status(201).json(livestock);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all livestock
export const getLivestock = async (req, res) => {
    try {
        const all = await Livestock.find();
        res.json(all);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get single livestock
export const getSingleLivestock = async (req, res) => {
    try {
        const animal = await Livestock.findOne({ tagNumber: req.params.tagNumber });
        if (!animal) return res.status(404).json({ error: "Animal not found" });
        res.json(animal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update livestock info
export const updateLivestock = async (req, res) => {
    try {
        const updated = await Livestock.findOneAndUpdate(
            { tagNumber: req.params.tagNumber },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
