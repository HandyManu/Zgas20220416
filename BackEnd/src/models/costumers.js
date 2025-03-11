//CEmpleados name lastName birthday  email address hireDate  password phone dui isssNumber isVerified

import { Schema,model } from "mongoose";

const CostumersSchema = new Schema({

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
    address: {
        type: String,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
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
    isssNumber: {
        type: String,
        required: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
},{
    timestamps:true,
    strict:false
})

export default model("costumers",CostumersSchema );