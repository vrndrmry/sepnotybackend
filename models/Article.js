import mongoose from "mongoose";

var {Schema} = mongoose

const ArticleScehma = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: { type: mongoose.Schema.Types.String, ref: "User" },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
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

const articleModel = new mongoose.model("ArticleModel", ArticleScehma);

export default articleModel