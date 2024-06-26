import mongoose from "mongoose";
var { Schema } = mongoose;

const softwarePropsalSchema = new mongoose.Schema(
  {
    typeofDevelopment: {
      type: String,
      required: true,
      description:
        "It will contain the type of the proposal that the user wants preferrably software for this model",
      default: "",
    },
    industryotherDetails: {
      type: String,
      description:
        "This field is used to provide any additional details related to industry or other fields",
      default: "",
    },

    integrationDetails: {
      type: String,
      description: "This field is used store inetgration details",
      default: "",
    },
    typeOfSoftware: {
      type: [String],
      required: true,
      description: "It will contain the array of the industry type",
      default: [],
    },
    numberofTools: {
      type: String,
      required: true,
      description:
        "It will contain the number of pages that the user needs (The input will be in radio)",
      default: "",
    },
    industryType: {
      type: [String],
      required: true,
      description: "It will contain an array of industry types",
      default: [],
    },
    services: {
      type: String,
      required: true,
      description: "Type of services that the user need",
      default: "",
    },
    otherServiceDetails: {
      type: String,
      description: "Other details about service",
      default: "",
    },
    UIDesignMockups: {
      type: String,
      required: true,
      description: "Store Design Mockups information",
      default: "",
    },
    otherCompliance: {
      type: String,
      description: "Any other compliances",
      default: "",
    },
    otherFeatureDetails: {
      type: String,
      description: "Other feature details",
      default: "",
    },
    otherMediaDetails: {
      type: String,
      description:
        "Other media files related to project like sketch file or any other design tools files.",
      default: "",
    },
    otherSoftwareDetails: {
      type: String,
      description:
        "If there is any third party software/tools used in this project then mention it here.",
      default: "",
    },
    chosenCMS: {
      type: String,
      required: true,
      description: "CMS status",
      default: "",
    },
    cmsDetails: {
      type: String,
      description: "More CMS Details",
      default: "",
    },
    appFeatures: {
      type: [String],
      required: true,
      description: "It will contain the list of app features",
      default: [],
    },
    typeofMedia: {
      type: [String],
      required: true,
      description: "Type of media files that it will contain",
      default: [],
    },
    paymentSystem: {
      type: Boolean,
      required: true,
      description: "Status of payment",
      default: false,
    },
    visitors: {
      type: String,
      required: true,
      description: "Number of expected visitors",
      default: "",
    },
    complianceRequirements: {
      type: [String],
      required: true,
      description: "List of compliance requirements",
      default: [],
    },
    details: {
      type: String,
      required: true,
      description: "Details of the software",
      default: false,
    },
    websiteLink: {
      type: String,
      description: "Link of existing software Link",
      default: "",
    },
    username: {
      type: String,
      required: true,
      description: "Full name of the user",
      default: "",
    },
    companyName: {
      type: String,
      required: true,
      description: "Name of the company",
      default: "",
    },
    email: {
      type: String,
      required: true,
      description: "Email address of the requesting person",
      default: "",
    },
    phoneNumber: {
      type: Number,
      required: true,
      description: "Mobile number of the person",
    },
    wayOfCommunication: {
      type: String,
      required: true,
      description: "Preferred way of communication",
      default: "",
    },
    agreement: {
      type: Object,
      description: "Contains terms and conditions while submitting the request",
      properties: {
        contact: {
          type: Boolean,
          description:
            "I agree to have Sepnoty contact me via email, phone, messengers",
          default: false,
        },
        requestInfo: {
          type: Boolean,
          description:
            "I agree to have Sepnoty provide my request Information to Sepnoty affiliated development center",
          default: false,
        },
      },
    },
  },
  { timestamps: true }
);

const softwareProposalModel = new mongoose.model(
  "softwareProposalModel",
  softwarePropsalSchema
);

export default softwareProposalModel;
