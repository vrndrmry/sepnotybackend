import mongoose, { mongo } from "mongoose";

var {Schema} = mongoose

const nonAdminUser = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    author: {
      type: mongoose.Schema.Types.String,
      ref: "User",
    },
    employeeName: {
      type: String,
      required: true,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    blog: {
      description: "Access to blog",
      type: Object,
      properties: {
        create: {
          type: Boolean,
          default: false,
          description: "Can create Blog",
        },
        edit: {
          type: Boolean,
          default: false,
          description: "Can edit/Delete Blog",
        },
      },
    },
    article: {
      type: Object,
      description: "Access to article",
      properties: {
        create: {
          type: Boolean,
          default: false,
          description: "Can create Article",
        },
        edit: {
          type: Boolean,
          default: false,
          description: "Can edit/Delete Article",
        },
      },
    },
    career: {
      type: Object,
      description: "Access to career",
      properties: {
        create: {
          type: Boolean,
          default: false,
          description: "Can create career",
        },
        edit: {
          type: Boolean,
          default: false,
          description: "Can edit/Delete career",
        },
      },
    },
    reports: {
      type: Object,
      description: "Access to reports",
      properties: {
        create: {
          type: Boolean,
          description: "Can create report",
          default: false,
        },
        edit: {
          type: Boolean,
          description: "Can edit/delete report",
          default: false,
        },
      },
    },
    projects: {
      type: Object,
      description: "Access to projects",
      properties: {
        create: {
          type: Boolean,
          default: false,
          description: "Can create projects",
        },
        edit: {
          type: Boolean,
          default: false,
          description: "Can edit/delete projects",
        },
      },
    },
    contactusStatus: {
      type: Boolean,
      default: false,
    },
    applicantStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const nonAdminUserModel = new mongoose.model("NonAdminUserModel",nonAdminUser)

export default nonAdminUser