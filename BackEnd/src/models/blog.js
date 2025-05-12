import { Schema,model } from "mongoose";

const blogSchema = new Schema({

    title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
},{
    timestamps:true,
    strict:false
})

export default model("blog",blogSchema );