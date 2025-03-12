//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import costumersController  from "../controllers/costumersControllers.js";

const router = express.Router ()

router.route("/").get(costumersController.getCostumers)
.post(costumersController.insertCostumers)

router.route("/:id")
.put(costumersController.updateCostummers)
.delete(costumersController.deleteCostumers)

export default router;