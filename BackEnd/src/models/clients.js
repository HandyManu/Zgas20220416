//Clientes name lastName birthday email password telephone dui isVerified
import { Schema,model } from "mongoose";

const ClientSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dui: {
        type: String,
        required: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    loginAttemps:{
        type:Number,
        default:0
    },
    lockTime:{
        type:Date,
        default:null
    }
},{
    timestamps:true,
    strict:false
})

export default model("clients",ClientSchema );