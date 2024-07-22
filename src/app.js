import express from 'express'
import cookieparser from 'cookie-parser'
import cors from 'cors'

const app = express()

// cors handeling
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential:true

}))

// here we specify setting that configure the incomming data which is json ,url data, fornm data in body etc

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true , limit:"20kb"}))   // this will take care the url encoded data

app.use(express.static("public"))          // if we want to preserve content in the server itself for wnich we have here a public folder

/* cookie-parser work
cookie -parser works is to set and access the browser cookie through server
*/

app.use(cookieparser())



// router import 
import UserRouter from './routes/userrouter.js'

//routes declaration
app.use('/api/v1/users' ,UserRouter)    // here we take  router as a seperate in order to make code modular and clean i.e we use middleware.use() for using router 
// whenever the /users request is entered the control is given to the Userrouter




//URL

export default app