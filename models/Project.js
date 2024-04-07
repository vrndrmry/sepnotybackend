import mongoose from "mongoose";

var { Schema } = mongoose;

const ProjectSchema = new mongoose.model(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    author: {
      type: mongoose.Schema.Types.String,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    challenge: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    results: {
      type: String,
      required: true,
    },
    technologyAndTools: {
      type: String,
      required: true,
    },
    image: {
      name: String,
      filename: String,
      data: Buffer,
      contentType: String,
      path: String,
    },
  },
  { timestamps: true }
);

const projectModel = new mongoose.model("ProjectModel", ProjectSchema);

export default projectModel;
