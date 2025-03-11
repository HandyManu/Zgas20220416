//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import clientsController  from "../controllers/clientsControllers.js";

const router = express.Router ()

router.route("/").get(clientsController.getClients)
.post(clientsController.insertClientsts)

router.route("/:id")
.put(clientsController.updateClient)
.delete(clientsController.deleteClient)

export default router;