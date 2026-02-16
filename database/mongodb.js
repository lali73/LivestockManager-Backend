import mongoose from 'mongoose';

import{DB_URI as DB_URI}from"./../config/env.js"
if(!DB_URI){
    throw new Error('MongoDB URI is missing');
}

const conectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log('MongoDB Connected');
    }
    catch(err){
        console.log("MONGO_URI:", process.env.DB_URI);

        console.error('Error connecting to database ',err);
        process.exit(1);
    }
}
export default conectToDatabase