import mongoose from "mongoose";
var { Schema } = mongoose;

const eventandworkshopScehma = new mongoose.Schema(
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
    program: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    localtion: {
      type: String,
      required: true,
    },
    entryFee: {
      type: Number,
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

const eventModel = new mongoose.model("EventModel", eventandworkshopScehma);

export default eventModel;
