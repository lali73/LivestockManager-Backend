import express from 'express';
import {config} from 'dotenv';
import {PORT} from './config/env.js';
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('This is the backend of the Livestock Manager!')
})

app.listen(PORT,async()=>{
    console.log(`server running on port ${PORT}`);
})