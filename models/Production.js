import mongoose from "mongoose";

const productionSchema = new mongoose.Schema({
    animalTag: { type: String, required: true },
    type: { type: String, enum: ["milk", "meat"], required: true },
    shift: { type: String, enum: ["morning", "afternoon"], default: "morning" },
    quantityLiters: { type: Number },
    quantityKg: { type: Number },
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Production", productionSchema);
