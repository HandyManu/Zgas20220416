//este archivo sirve para definir que metoos del cud va atener mi ruta /api/products 

import express from "express";
import branchController  from "../controllers/branchController.js";

const router = express.Router ()

router.route("/").get(branchController.getBranch)
.post(branchController.insertBranch)

router.route("/:id")
.put(branchController.updateBranch)
.delete(branchController.deleteBranch)

export default router;