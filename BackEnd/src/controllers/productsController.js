//este archivo tiene los metodos del crud 

//creo un array defunciones 

const productsController  = {};

import req from "express/lib/request";
import productsModel from "../models/products.js"

//select
productsController.getProducts = async(req,res) => {
const products = await productsModel.find()
res.json(products)
}

//insert 

productsController.insertProducts = async(req,res)=>{
    const{name,descripcion,price,stock}= req.body;
    const newProduct = new productsModel({ name,descripcion,price,stock })
    await newProduct.save()
    res.json({message:"products saved"})
}

//delete
productsController.deleteProducts = async(req,res)=>{
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message:"products eliminated"})
}

//update
productsController.updateProducts=async(req,res) => {
    const {name,descripcion,price,stock} =req.body
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id,
        {name,descripcion,price,stock},{new:true})
        res.json({message:"products updated"})
}

export default productsController;