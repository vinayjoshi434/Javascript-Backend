import mongoose from "mongoose";

import { db_name } from "../constants.js";


console.log(`${process.env.MongoDB_URI}`);
const Connection = async () => {
    try {
        const connectInstance =await  mongoose.connect(`${process.env.MongoDB_URI}/ ${db_name}`)// mongoose returns a object hence we can store this in a const 
        console.log(`\n Mongo DB connected!! DBHost: ${
            connectInstance.connection.host}`)
    }
    catch (err) {
        console.log(`Mongo-DB connection error: ${err}`);
        process.exit(1)  // here we have a process object in nodejs that have various methods
    }



}


export default Connection