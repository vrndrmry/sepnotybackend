import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactusRoute from './routes/contactUs.js'
import bodyParser from 'body-parser'

const app = express()
const PORTBACKEND = 3000

dotenv.config()

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    }catch(err){
        throw new Error(err)
    }
}


// Middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
// app.use('uploads',express.static('uploads'))
app.use('/api/contact',contactusRoute)



app.listen(process.env.PORT || PORTBACKEND,()=>{
    connect()
    console.log("Connected to backend port ")
})