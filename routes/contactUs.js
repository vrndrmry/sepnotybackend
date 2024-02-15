import express from "express";
import { contactUsForm } from "../controllers/contactus.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// router.get('/',contactus)
router.get("/", (req, res) => {
  res.send("Hello from routes");
});
router.post("/contactus", upload.single(`uploadFile`),contactUsForm);

export default router;
