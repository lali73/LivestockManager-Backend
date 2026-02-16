import mongoose from "mongoose";

const financeSchema = new mongoose.Schema({
    type: { type: String, enum: ["income", "expense"], required: true },
    amount: { type: Number, required: true },
    reason: { type: String },
    date: { type: Date, default: Date.now }
});

export const Finance = mongoose.model("Finance", financeSchema);
