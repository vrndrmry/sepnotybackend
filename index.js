import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactusRoute from './routes/contactUs.js'
import proposalRoute from './routes/proposal.js'
import loginForm from './routes/user.js'
import bodyParser from 'body-parser'
import post from './routes/blog.js'
const app = express()
// Load environment variables from .env file

const PORTBACKEND = 3000

dotenv.config()

// MongoDB connection
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

app.use('/api/contact/uploads',express.static('uploads'))
app.use('/api/contact',contactusRoute)
app.use('/api/proposal',proposalRoute)
app.use('/api/login',loginForm)
app.use('/api',post)


// Listening to the post
app.listen(process.env.PORT || PORTBACKEND,()=>{
    connect()
    console.log("Connected to backend port ")
})