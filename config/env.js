import {config} from "dotenv";
config({path:'./config/.env'})

export const {PORT} = process.env;