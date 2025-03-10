//importo todos los elemnetos de la ibreria express 
import express from "express";
//creo una contante d ela libreria que acabo de importar y la ejecuto
const app = express();

app.use("/api/products")
//exporto la constante para usarla cuando quiera 
export default app;