
// Creo un array de funciones

const clientsController = {};

import clientsModel from "../models/clients.js";

// SELECT
clientsController.getClients = async (req, res) => {
  const clients = await clientsModel.find();
  res.json(clients);
};

// INSERT
productsController.insertProducts = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const newProduct = new productsModel({ name, description, price, stock });
  await newProduct.save();
  res.json({ message: "Products saved" });
};

// DELETE
productsController.deleteProducts = async (req, res) => {
  await productsModel.findByIdAndDelete(req.params.id);
  res.json({ message: "product deleted" });
};

// UPDATE
productsController.updateProducts = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const updatedProducts = await productsModel.findByIdAndUpdate(
    req.params.id,
    { name, description, price, stock },
    { new: true }
  );
  res.json({ message: "product updated successfully" });
};

export default productsController;