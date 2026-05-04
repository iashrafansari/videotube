// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path: "./env"
})
import dns from "dns";
import { app } from './app.js';
dns.setDefaultResultOrder("ipv4first");




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is started at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    app.on("error", () => {
        console.log("MongoDB Connection Failed !!", error)
    })
})







// just an another method -- below

/*
const app = express()

;(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       app.on("error", () => {
        console.log("Errr", error)
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on ${process.env.PORT}`)
       })
    } catch (error) {
        console.error(`Error :`, error)
    }
})()

*/