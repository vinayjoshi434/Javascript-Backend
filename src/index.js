//  modular approach
import Connection from "./db/db.js";
import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
    path: "./env"
})
const app=express()


Connection().
    then(() => {
        app.on("error" ,(err) => {
             console.log(`Error encounter in connection: ${err}`)
        }
        )


        app.listen(process.env.PORT || 4000, () => {
            console.log(`server is running at port :  ${process.env.PORT}`);
        })
    }).
    catch((err) => {
        console.log(`Mongo db conection failed !! ${err}`);
    })




// first approach

/*



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