//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import productsController from "../controllers/productsController";

const router = express.Router

router.route("/").get(productsController.getProducts)
.post(productsController.insertProducts)
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)

