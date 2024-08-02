
import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    bookname:{
        type:"String",
        required:true,
        unique:true
    },
    image:{
        type:"String",
        required:true,
        unique:true
    },
    description:{
        type:"String",
        required:true,
        unique:true
    },
    price:{
        type: Number,
        required: true,
    },
    //who created the books?
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
})

export default mongoose.model("Books",bookSchema)