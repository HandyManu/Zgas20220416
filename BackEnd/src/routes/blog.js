import express from 'express'
import multer from 'multer'
import blogController from "../controllers/blogController.js"


const router = express.Router()

const upload = multer({
    dest: "public/"
})

router.route("/")
.get(blogController.getAllBlog)

.post(upload.single("image"),blogController.createBlog)

router.route("/:id")
    .get(blogController.getBlogById) // Obtener un blog por ID
    .put(blogController.updateBlog) // Actualizar un blog por ID
    .delete(blogController.deleteBlog); // Eliminar un blog por ID

export default router