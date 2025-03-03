//importo el archivo de app
import app from "./app.js"
//importo el archivo de conexion de la base d e dtaos 
import"./database.js";

import{config} from "./src/config.js";
//creo un afuncion que ejecuta el servidor 
async function main() {
    app.listen(config.PORT);
    console.log("server functioning");
}
//ejecutamos la funcion  
main();