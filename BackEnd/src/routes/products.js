//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express"
const router = express.Router

router.route("/").get().post().put().delete()