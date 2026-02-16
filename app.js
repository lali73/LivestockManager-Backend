import express from 'express';
import {config} from 'dotenv';
import {PORT} from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import backupRoutes from "./routes/backupRoutes.js";

import financeRoutes from "./routes/financeRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
const app = express();
app.use(express.json());
app.use("/api/backup", backupRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/customer", customerRoutes);
app.get('/', (req, res) => {
    res.send('This is the backend of the Livestock Manager!')
})

app.listen(PORT,async()=>{
    console.log(`server running on port ${PORT}`);
    await connectToDatabase();
})
