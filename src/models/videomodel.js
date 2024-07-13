import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// this package act as a plugin ..through which we can write aggregation queries/ aggregation pipeline 
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'





const videoschema=Schema({
videoFile:{
    type:String, // cloudinary url
    required:true
},
thumbnail:{
    type:String, // cloudinary url
    required:true
},
title:{
    type:String, 
    required:true
},
    

description:{
       type:String, 
        required:true
    
},
duration:{
    type:Number,   // ye bhi cloudinary url se hi milega 
    required:true
},
views:{
    type:Number,
    default:0
},
owner:{
type:Schema.Types.ObjectId,
ref:User
},
published:{
    type:Boolean,
    default:true
}







},{timestamps:true})




videoschema.plugin(mongooseAggregatePaginate)
// here we have hooks in mongoose that is used to append a certiain functionality 







export const Video=mongoose.model("Video",videoschema,)  