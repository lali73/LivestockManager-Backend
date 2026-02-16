import mongoose from "mongoose";

const backupSchema = new mongoose.Schema({
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Backup = mongoose.model("Backup", backupSchema);
