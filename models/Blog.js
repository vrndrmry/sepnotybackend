import mongoose from "mongoose";
var {Schema} = mongoose

const PostModel = new mongoose.Schema(
  {
    typeOfPost:{
        type:String,
        required:true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
        name:String,
        filename:String,
      data: Buffer,
      contentType: String,
      path:String
    },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: { type: mongoose.Schema.Types.String, ref: "User" },
  },
  { timestamps: true }
);

const postModel = new mongoose.model('PostModel',PostModel)

export default postModel