//este archivo tiene los metodos del crud 

//creo un array defunciones 

const productsController  = {};

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
}