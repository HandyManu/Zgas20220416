import { Schema,model } from "mongoose";

const reviewSchema = new Schema({
    comment:{
        type:String,
        required: true
    },
    rating:{
        type:Number,
        required: true,
        min:1,
        max:5
    },
    idCliente:{
        type:Schema.Types.ObjectId,
        ref:"costumers",
        required: true
    }  
},{ timestamps:true,
    statics:false
})

export default model("reviews",reviewSchema)