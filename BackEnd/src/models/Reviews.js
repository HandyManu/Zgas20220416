import { Schema,model } from "mongoose";

const reviewSchema = new Schema({
    comment:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
        min:1,
        max:5
    },
    idCliente:{
        type:Schema.Types.ObjectId,
        ref:"costumers",
        require:true
    }  
},{ timestamps:true,
    statics:false
})

export default model("reviews",reviewSchema)