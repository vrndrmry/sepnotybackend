import mongoose from "mongoose";
var {Schema} = mongoose


const ProposalSchema = new mongoose.Schema({
    typeOfWebsite:{
        type:[String],
        required:true,
        default:[]
    },
    numberOfPages:{
        type:String,
        required:true,
    },
    industryType:{
        type:String,
        required:true
    },
    services:{
        type:String,
        required:true
    },
    UIDesignMockups:{
        type:String,
        required:true
    },
    chosenCMS:{
        type:String,
        require:true
    },
    appFeatures:{
        type:[String],
        default:[],
        required:true
    },
    typeOfMedia:{
        type:[String],
        default:[],
        required:true
    },
    paymentSystem:{
        type:Boolean,
        default:false,
        require:true
    },
    visitors:{
        type:String,
        required:true
    },
    complianceRequirements:{
        type:[String],
        required:true
    },
    externalIntegration:{
        type:Boolean,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:[true,"can't be blank"]
    },
    email:{
        type:String,
        require:[true,"can't be blank"]
    },
    companyName:{
        type:String,
        required:[true,"can't be blank"]
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:10
    },
    wayOfCommunication:{
        type:String,
        required:true
    },
    agreement:{
        description:"Agreement details",
        type:Object,
        properties:{
            contact:{
                type:Boolean,
                description:"I agree to have Sepnoty contact me via email, phone, messengers",
                default:false
            },
            requestInfo:{
                type:Boolean,
                description:"I agree to have Sepnoty provide my request Information to Sepnoty affiliated development center",
                default:false
            }
        }
    }
},{timestamps:true})

const Proposal = new mongoose.model('Proposal',ProposalSchema)
export default Proposal