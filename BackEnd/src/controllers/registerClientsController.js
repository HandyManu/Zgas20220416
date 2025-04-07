import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";

import clientsModel from "../models/clients.js"
import { config } from "../config.js";

const registerClientsController ={};
registerClientsController.register=async (req,res)=>{

    const {name,lastName,birthday,email,password,phone,dui,isVerified}=req.body;

    try {
        const existingClient = await clientsModel.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: "El cliente ya existe" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newClient = new clientsModel({
            name,
            lastName,
            birthday,
            email,
            password: hashedPassword,
            phone,
            dui: dui || null,
            isVerified : isVerified || false,
        });
        await newClient.save();

        //generar un codigo aleatorio para el correo 

        const verificationCode = crypto.randomBytes(3).toString("hex");

        //generar un token que contenga el codigo de verificacion
        const tokenCode = jsonwebtoken.sign(

            { email,verificationCode },

             config.JWT.secret,

              {expiresIn: "3h",}
    );

    res.cookie("verificationToken", tokenCode, { maxAge: 3 * 60 * 60 * 1000 });

    //enviar el correo al cliente
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.email,
            pass: config.password,
        },
    });

    } catch (error) {
        
    }
}