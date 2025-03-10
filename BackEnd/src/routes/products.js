//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router()

router.route("/").get(productsController.getProducts)
.post(productsController.insertProducts)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)

export default router;

