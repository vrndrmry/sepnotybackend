import { mongoose } from "mongoose";

const candidateResumeSchema = new mongoose.Schema(
  {
    applicantName: {
      type: String,
      required: true,
      description: "Name of the candidate",
    },
    email: {
      type: String,
      required: true,
      description: "Email address of the candidate",
    },
    phoneNumber: {
      type: Number,
      required: true,
      description: "Phone Number",
    },
    resumeFile: {
      type: String,
      required: true,
      description: "Resume file",
    },
  },
  { timestamps: true }
);


export default mongoose.model("candidateResumeModel",candidateResumeSchema)