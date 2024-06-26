import express from "express";
import { contactUsForm } from "../controllers/contactUs.js";
import upload from "../middleware/upload.js";
// import { awsFunction, uploadFileToS3 } from "../middleware/aws.js";

const router = express.Router();

// router.get('/',contactus)
// router.get("/", (req, res) => {
//   res.send("Hello from routes");
// });
router.post("/contactus",upload.single(`files`), contactUsForm);

export default router;
