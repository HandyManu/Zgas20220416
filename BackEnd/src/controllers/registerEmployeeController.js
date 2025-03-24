import employeeModel from "../models/costumers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken"; 
import { config } from "../config.js";

const registerEmployeeController = {};

registerEmployeeController.register = async (req, res) => {
    const { name , lastName ,birthday , email, address ,hireDate , password ,phone ,dui ,isssNumber ,isVerified } = req.body;

    try {
        //verificamos si el usuario existe
        const existingEmployee = await employeeModel.findOne({ email });
        if (existingEmployee) {
            return res.json({ message: "Email already exists" });
        }
        //ciframos la contraseña
        const passwordHash  = await bcryptjs.hash(password,10);
        
        //creamos el nuevo usuario
        const newEmployee = new employeeModel({ 
            name ,
            lastName ,
            birthday ,
            email,
            address ,
            hireDate ,
            password : passwordHash ,
            phone ,
            dui ,
            isssNumber ,
            isVerified 
        });
        await newEmployee.save();

        //generamos el token
        
        jsonwebtoken.sign({ id: newEmployee._id }, //secreto
            config.JWT.SECRET, 
            //cuando expira 
            { expiresIn: config.JWT.SECRET.JWT.expiresIn }, 
            (error , token) => {
                if (error) console.log(error);
                res.cookie("authToken", token);
            }
        );   


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
        
    }};

    export default registerEmployeeController;

