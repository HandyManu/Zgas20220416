//importo todos los elemnetos de la ibreria express 

import express from "express";

import productRoutes from "../BackEnd/src/routes/products.js"

import ClientsRoutes from "../BackEnd/src/routes/clients.js"

import CostumersRoutes from "../BackEnd/src/routes/costumers.js"

import branchRoutes from "../BackEnd/src/routes/branch.js"

import ReviewsRouters from "../BackEnd/src/routes/review.js";

import EvaluationRouters from "../BackEnd/src/routes/evaluations.js";

//creo una contante d ela libreria que acabo de importar y la ejecuto

const app = express();

app.use(express.json());

app.use("/api/products",productRoutes);

app.use("/api/clients",ClientsRoutes);

app.use("/api/costumers",CostumersRoutes);

app.use("/api/branch",branchRoutes);

app.use("/api/review",ReviewsRouters);

app.use("/api/evaluation",EvaluationRouters)

//exporto la constante para usarla cuando quiera 

export default app;