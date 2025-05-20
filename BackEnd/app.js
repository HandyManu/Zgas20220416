//importo todos los elemnetos de la ibreria express 

import express from "express";
import corse from "cors"; 
import productRoutes from "../BackEnd/src/routes/products.js"
import ClientsRoutes from "../BackEnd/src/routes/clients.js"
import CostumersRoutes from "../BackEnd/src/routes/costumers.js"
import branchRoutes from "../BackEnd/src/routes/branch.js"
import ReviewsRouters from "../BackEnd/src/routes/review.js";
import EvaluationRouters from "../BackEnd/src/routes/evaluations.js";
import registerEmployeesRoutes from "../BackEnd/src/routes/registerEmployee.js";
import cookieParser from "cookie-parser";
import loginRoutes from "../BackEnd/src/routes/login.js";
import logoutRoutes from "../BackEnd/src/routes/logout.js";
import registerClients from "../BackEnd/src/routes/registerClients.js";
import blogRoutes from "../BackEnd/src/routes/blog.js"; //importo la ruta de los blogs
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

//creo una contante d ela libreria que acabo de importar y la ejecuto

const app = express();

app.use(
    corse({
        origin:"*",
        Credentials:true,
    })
);

app.use(cookieParser());

app.use(express.json());
app.use("/api/products",validateAuthToken(["costumer","admin"]),productRoutes);
app.use("/api/clients",ClientsRoutes);
app.use("/api/costumers",CostumersRoutes);
app.use("/api/branch",branchRoutes);
app.use("/api/review",validateAuthToken(["costumer"]),ReviewsRouters);
app.use("/api/evaluation",EvaluationRouters)
app.use("/api/registerEmployee",registerEmployeesRoutes);
app.use("/api/login",loginRoutes);
app.use("/api/logout",logoutRoutes);
app.use("/api/registerClients",registerClients);
app.use("/api/blog",validateAuthToken(["costumer"]),blogRoutes); 



//exporto la constante para usarla cuando quiera 

export default app;