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
            
            userFound = await clientsModel.findOne({ email });
            userType = "clients";

            //empleado

            if (!userFound) {
                userFound = await costumersModel.findOne({ email });
                userType = "costumer";
            }

        }
        if (!userFound) {
            console.log("no encontrados");
            return res.json({ message: "User not found" });
        }

        // verificamos si el usuario esta blockeado 

        if (userType !== "Admin") {
          if (userFound.lockTime > Date.now()) {
            const minutosRestantes = Math.ceil(
              (userFound.lockTime - Date.now()) / 60000
            );
            return res
              .status(403)
              .json({
                message:
                  "cuenta blockeada , faltan" + minutosRestantes + "minutos",
              });
          }
        }
        //comprobar la contraseña solo si no es admin
        if (userType !== "admin") {
          const isMatch = await bcryptjs.compare(password, userFound.password);
          if (!isMatch) {
            userFound.loginAttemps = userFound.loginAttemps + 1;

            if (userFound.loginAttemps > 5) {
              userFound.locktime = Date.now() + 15 * 60 * 1000;
              await userFound.save();

              return res.status(403).json({ message: "cuenta blockeada" });
            }

            await userFound.save();
            return res.json({ message: "Incorrect password" });
          }
          userFound.loginAttemps = 0;
          userFound.lockTime = null;
          await userFound.save();
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
            (error, token) => {
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
