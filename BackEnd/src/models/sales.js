
import { Schema,model } from "mongoose";

const salesSchema = new Schema({

    Products: {
        type: String,
        required: true,
    },
    Category:{
        type:String,
        required:true,
    },
    Customer: {
        type: String,
        required:true,
    },
    Total: {
        type: Number,
        required:true,
    },
   
},{
    timestamps:true,
    strict:false
})

export default model("Sales",salesSchema );