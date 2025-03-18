
import { Schema,model } from "mongoose";

const EvaluationSchema = new Schema({

    Comment: {
        type: String,
        required: true
    },
    Grade:{
        type:Number,
        require:true,
        min:1,
        max:5
    },
    Role: {
        type: String,
        required: true
    },
    idCliente:{
        type:Schema.Types.ObjectId,
        ref:"costumers",
        require:true
    }  
},{
    timestamps:true,
    strict:false
})

export default model("evaluation",EvaluationSchema );