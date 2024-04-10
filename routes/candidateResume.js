import express from "express";
import candidateResumeMiddleware from "../middleware/candidateResume.js";
import { candidateResume } from "../controllers/candidateResume.js";
const router = express.Router();

router.post(
  "/candidateResume",
  candidateResumeMiddleware.single("resumeFile"),
  candidateResume
);

export default router;
