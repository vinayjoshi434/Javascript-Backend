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


export default app