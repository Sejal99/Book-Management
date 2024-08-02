import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
})

export default mongoose.model("User",userSchema);