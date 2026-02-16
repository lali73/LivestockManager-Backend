import mongoose from "mongoose";

const backupSchema = new mongoose.Schema({
    data: { type: Object, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Backup = mongoose.model("Backup", backupSchema);

export default Backup;
