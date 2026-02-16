import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String },
    contractType: { type: String, enum: ["daily", "weekly", "monthly"], default: "daily" },
    littersPerDay: { type: Number, default: 0 },
    pricePerLitter: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    startDate: { type: Date, default: Date.now }
});

export const Customer = mongoose.model("Customer", customerSchema);
