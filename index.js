import express from "express";
import fs from 'fs'
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactusRoute from "./routes/contactUs.js";
import loginForm from "./routes/user.js";
import bodyParser from "body-parser";
import post from "./routes/blog.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import websiteProposalRoute from './routes/proposal/websiteProposalRoute.js'
import softwareProposalRoute from './routes/proposal/softwareProposalRoute.js'
import applicationProposalRoute from './routes/proposal/applicationProposalRoute.js'

const app = express();
// Load environment variables from .env file

const PORTBACKEND = 8801; //Alternative for port

dotenv.config();

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (err) {
    throw new Error(err);
  }
};

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());
// app.use(cookieParser());
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Allow certain methods
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Allow certain headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // Allow credentials (if required)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// HTTPS Options
const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/back.shivdas.live/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/back.shivdas.live/fullchain.pem')
};

// Create HTTPS Server
const server = https.createServer(httpsOptions, app);


app.use("/api/contact/uploads/contactus", express.static("uploads"));

app.use("/api/contact", contactusRoute);
app.use("/api/login", loginForm);
app.use("/api", post);
app.use("/api/proposal/website",websiteProposalRoute)
app.use("/api/proposal/software",softwareProposalRoute)
app.use('/api/proposal/application',applicationProposalRoute)


// Listening to the post
app.listen(process.env.PORT || PORTBACKEND, () => {
  connect();
  console.log("Connected to backend port ");
});
