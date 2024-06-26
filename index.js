import express from "express";
import https from "https";
import fs from 'fs';
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactusRoute from "./routes/contactUs.js";
import loginForm from "./routes/user.js";
import bodyParser from "body-parser";
import post from "./routes/blog.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import websiteProposalRoute from './routes/proposal/websiteProposalRoute.js';
import softwareProposalRoute from './routes/proposal/softwareProposalRoute.js';
import applicationProposalRoute from './routes/proposal/applicationProposalRoute.js';
import candidateResumeRoute from './routes/candidateResume.js';

const app = express();
// Load environment variables from .env file
dotenv.config();

// Middleware related to SSL certificate handling
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});


// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw new Error(err);
  }
};

// HTTPS Options
const httpsOptions = {
    // key: fs.readFileSync('/etc/letsencrypt/live/back.shivdas.live/privkey.pem'),
    // cert: fs.readFileSync('/etc/letsencrypt/live/back.shivdas.live/fullchain.pem')
};

// Create HTTPS Server
const server = https.createServer(httpsOptions, app);


app.use("/api/contact/uploads/contactus", express.static("uploads"));
app.use("/api/candidate/uploads/candidateResume", express.static("uploads"));

app.use("/api/contact", contactusRoute);
app.use("/api/proposal/website", websiteProposalRoute);
app.use("/api/proposal/software", softwareProposalRoute);
app.use('/api/proposal/application', applicationProposalRoute);
app.use('/api/candidate',candidateResumeRoute)
app.use("/api/login", loginForm);
app.use("/api", post);


// Listening to the port while testing on localhost
// app.listen(process.env.PORT, () => {
//   connect();
//   console.log("Connected to backend port");
// });

// Listening to the port
server.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to backend port");
});