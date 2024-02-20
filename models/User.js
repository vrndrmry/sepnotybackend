import mongoose from "mongoose";
var {Schema} = mongoose

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        min:8
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    admin:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})


const User = new mongoose.model('User',UserSchema)

export default User