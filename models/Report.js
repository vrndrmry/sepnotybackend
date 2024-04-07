import mongoose from "mongoose";

var{Scehma} = mongoose


const reportSchema = new mongoose.Schema(
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

const reportModel = new mongoose.model("ReportModel", reportSchema);

export default reportModel