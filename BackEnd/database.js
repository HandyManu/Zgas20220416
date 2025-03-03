//importarvtodo lo de la libreria que acabo de descargar 
import mongoose from "mongoose";

import {config} from "./src/config.js";
//guardoen una constante la url de mi base de datos 

//const uri = "mongodb://127.0.0.1:27017/zgasdb";

//conecto la base  de datos 
mongoose.connect(config.MONGO_URI);

//comprobar que todo funcione 

//Creo una constante que es igual a la conexion 
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("db is connected");
});

connection.on("Disconnected",()=>{
    console.log("db is disconnected");
});

connection.on("error",(error)=>{
    console.log("error found"+ error);
});