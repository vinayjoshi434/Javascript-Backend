//  modular approach
import Connection from "./db/db.js";

import dotenv from 'dotenv'

dotenv.config({
    path:"./env"
})
Connection();




// first approach

/*
const app=express()


//here we use iffi i.e imeadiate envocked function  

(async function connection() {
    try {
        await mongoose.connect(`${proces.env.db_URI} / ${db_name}`)
        app.on("error",(err)=>{
                     console.log("Err:" ,  err)
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listning on port ${process.env.PORT}`);
        })
    }
    catch (err) {
        throw err
    }
})();
*/