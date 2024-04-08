import mongoose from "mongoose";
var { Schema } = mongoose;

const websitePropsalSchema = new mongoose.Schema(
  {
    typeofDevelopment: {
      type: String,
      required: true,
      description:
        "It will contain the type of the proposal that the user wants preferrably website for this model",
      default: "",
    },
    typeOfWebsite: {
      type: [String],
      required: true,
      description: "It will contain the array of the industry type",
      default: [],
    },
    numberOfPages: {
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
    indstryotherDetails: {
      type: String,
      description: "Other industry type  details",
      default: "",
    },
    services: {
      type: String,
      required: true,
      description: "Type of services that the user need",
      default: "",
    },
    otherServiceDetails: {
      type: String,
      description: "Other services type",
      default: "",
    },
    UIDesignMockups: {
      type: String,
      required: true,
      description: "Store Design Mockups information",
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
      description:
        "If the user chooses other option then he/she can enter the required text here",
      default: "",
    },
    appFeatures: {
      type: [String],
      required: true,
      description: "It will contain the list of app features",
      default: [],
    },
    typeOfMedia: {
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
    otherFeatureDetails: {
      type: String,
      description: "other feature details",
      default: "",
    },
    otherMediaDetails: {
      type: String,
      description: "Other media details",
      default: "",
    },
    otherTypeOfWebsite: {
      type: String,
      description: "Other type of website",
      default: "",
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
    otherCompliance: {
      type: String,
      description: "Other compliance details",
      default: "",
    },
    integrationDetails: {
      type: String,
      description: "Intergration details if have",
    },
    details: {
      type: String,
      required: true,
      description: "Details of the website",
      default: false,
    },
    websiteLink: {
      type: String,
      description: "Link of existing website Link",
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

const websiteProposalModel = new mongoose.model(
  "websiteProposalModel",
  websitePropsalSchema
);

export default websiteProposalModel;
