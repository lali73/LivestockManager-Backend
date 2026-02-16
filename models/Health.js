import mongoose from "mongoose";

const healthSchema = new mongoose.Schema({
    animalId: { type: mongoose.Schema.Types.ObjectId, ref: "Animal", required: true },
    recordType: { type: String, enum: ["medicine", "vaccination", "semen", "pregnancyCheck", "birth"], required: true },
    description: { type: String },
    status: { type: String, enum: ["none", "inseminated", "pregnant", "healthy"], default: "none" },
    date: { type: Date, default: Date.now }
});

export const Health = mongoose.model("Health", healthSchema);
