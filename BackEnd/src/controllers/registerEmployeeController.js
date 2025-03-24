import employeeModel from "../models/employee.js";
import bcryptjs from "bcryptjs.js";
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
        const token = jsonwebtoken.sign({ id: newEmployee._id }, config.SECRET_KEY, { expiresIn: '1d' });


    } catch (error) {
        
    }