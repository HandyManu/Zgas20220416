import clientsModel from "../models/clients.js";
import costumersModel from "../models/costumers.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
    const { email, password } = req.body;

    try {

        let userFound;//para guardar el usuario
        let userType;//para guardar el tipo de usuario

        //admin

        if (email === config.emailAdmin.email && password === config.passwordAdmin.password) {
            userType = "admin";
            userFound = { _id: "admin" };

        } else {
            //empleado
            userFound = await clientsModel.findOne({ email });
            userType = "employee";

            if (!userFound) {
                userFound = await costumersModel.findOne({ email });
                userType = "costumer";
            }

        }
        if (!userFound) {
            console.log("no encontrados");
            return res.json({ message: "User not found" });
        }
        //comprobar la contraseña solo si no es admin 
        if (userType!== "admin") {
            const isMatch = await bcryptjs.compare(password, userFound.password);
            if (!isMatch) {
                return res.json({ message: "Incorrect password" });
            }
        }

        //generar el token
        jsonwebtoken.sign(
            //que voy a guardar 
            { id: userFound._id,userType},
            //secreto
            config.JWT.SECRET,
            //duracion del token 1h
            { expiresIn: config.JWT.EXPIRES_IN },
            //FUNCION FLECHA
            (err, token) => {
                if (error ) console.log(error);
                res.cookie("authToken",token)
                res.json({ message: "Logged in successfully" });
                
            }
        )



    }

    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
export default loginController;
