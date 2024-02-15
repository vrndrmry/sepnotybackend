import mongoose from "mongoose";
var {Schema} = mongoose

const ContactUsSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"can't be blank"]
    },
    email:{
        type:String,
        require:true,
    },
    companyName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:10
    },
    message:{
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
    },
    uploadFile:{
        type:String
    }
    
},{timestamps:true})


export default mongoose.model("contactUs",ContactUsSchema)