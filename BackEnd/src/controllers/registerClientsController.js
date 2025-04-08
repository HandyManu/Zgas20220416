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
        const existingClient = await clientsModel.findOne( { email });
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

             config.JWT.SECRET, //secreto

              {expiresIn: "3h",}
    );

    res.cookie("verificationToken", tokenCode, { maxAge: 3 * 60 * 60 * 1000 });

    //enviar el correo al cliente
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.email.email_user,
            pass: config.email.email_pass,
        },
    })

    const mailOptions = {
        from: config.email.email_user,
        to: email,
        subject: "Verificación de cuenta",
        text: "Tu código de verificación es:" + verificationCode + "/n expira en 3 horas",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error al enviar el correo:", error);
        }
        console.log("Correo enviado:" + info);
        
    });

    res.json({ message: "Cliente registrado exitosamente,por favor verifica el correo " });   

    } catch (error) {
        console.log("Error al registrar el cliente:" + error);        
    }
};
registerClientsController.verifyCodeEmail=async (req,res)=>{
    const {requiredCode}=req.body;
    const token = req.cookies.verificationToken;

    try {
        
        const decodedToken = jsonwebtoken.verify(token, config.JWT.secret);
        const { email, verificationCode: storedCode} = decodedToken;

        if (requiredCode !== storedCode) {
            return res.json({ message: "Código de verificación incorrecto" });
        }

        const client = await clientsModel.findOne({ email });
        client.isVerified = true;
        await client.save();

        res.clearCookie("verificationToken");

        res.status(200).json({ message: "Código de verificación correcto" });

        
    } catch (error) {
        console.log("Error al verificar el código de verificación:" + error);
        
    }
}
export default registerClientsController;