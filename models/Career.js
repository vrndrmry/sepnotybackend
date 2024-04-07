import mongoose from "mongoose";
var{Schema} = mongoose

const CareerScehma = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: { type: mongoose.Schema.Types.String, ref: "User" },
    title: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    salaryRange: {
      type: String,
      required: true,
    },
    workMode: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    file: {
      name: String,
      filename: String,
      data: Buffer,
      contentType: String,
      path: String,
    },
  },
  { timestamps: true }
);

const careerPost = new mongoose.model("CareerModel", CareerScehma);

export default careerPost