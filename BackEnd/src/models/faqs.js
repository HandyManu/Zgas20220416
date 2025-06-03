
import { Schema,model } from "mongoose";

const faqsSchema = new Schema({

    Questions: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500,
        trim:true
    },
    Answer:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 500,
        trim:true
    },
    Level: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        trim:true

    },
    isActive:{
        type: Boolean,
        required: true,
        default: true
    }  
},{
    timestamps:true,
    strict:false
})

export default model("Faqs",faqsSchema );