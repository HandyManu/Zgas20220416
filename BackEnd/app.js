//importo todos los elemnetos de la ibreria express 

import express from "express";
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

//creo una contante d ela libreria que acabo de importar y la ejecuto

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use("/api/products",productRoutes);
app.use("/api/clients",ClientsRoutes);
app.use("/api/costumers",CostumersRoutes);
app.use("/api/branch",branchRoutes);
app.use("/api/review",ReviewsRouters);
app.use("/api/evaluation",EvaluationRouters)
app.use("/api/registerEmployee",registerEmployeesRoutes);
app.use("/api/login",loginRoutes);
app.use("/api/logout",logoutRoutes);
app.use("/api/registerClients")



//exporto la constante para usarla cuando quiera 

export default app;