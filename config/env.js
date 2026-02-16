import {config} from "dotenv";
config({path:'./config/.env'})

export const {PORT,DB_URI} = process.env;