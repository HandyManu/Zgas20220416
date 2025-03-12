import { Schema,model } from "mongoose";

const BranchSchema = new Schema({

    name: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      schedule: {
        type: String,
        required: true
      }
},{
    timestamps:true,
    strict:false
})

export default model("Branches",BranchSchema );