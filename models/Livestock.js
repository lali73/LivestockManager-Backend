import mongoose from "mongoose";

const livestockSchema = new mongoose.Schema({
    tagNumber: { type: String, required: true, unique: true },
    nickname: { type: String },
    type: { type: String, enum: ["cow", "ox", "calf", "sheep", "chicken"], required: true },
    breed: { type: String },
    age: { type: Number },
    gender: { type: String, enum: ["male", "female"] },
    photoUrl: { type: String },
    status: { type: String, default: "healthy" },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Livestock", livestockSchema);
