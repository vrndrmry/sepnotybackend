import mongoose from "mongoose";
var {Schema} = mongoose

const PostModel = new mongoose.Schema({
    author:{tpe: Schema.Types.ObjectId, ref:"User"},
    title:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        data:buffer,
        contentType:String
    }
},{timestamps:true})

const postModel = new mongoose.model('PostModel',PostModel)

export default postModel