// Creo un array de funciones

const costumerController = {};

import costumerModel from "../models/costumers.js";

// SELECT
costumerController.getCostumers = async (req, res) => {
  const costumers = await costumerModel.find();
  res.json(costumers);
};

// INSERT
costumerController.insertCostumers = async (req, res) => {
  const { name , lastName ,birthday , email, address ,hireDate , password ,phone ,dui ,isssNumber ,isVerified } = req.body;
  const newCostumers = new costumerModel({ name , lastName ,birthday , email, address ,hireDate , password ,phone ,dui ,isssNumber ,isVerified});
  await newCostumers.save();
  res.json({ message: "Costumers saved" });
};

// DELETE
costumerController.deleteCostumers = async (req, res) => {
  await costumerModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Costummers deleted" });
};

// UPDATE
costumerController.updateCostummers = async (req, res) => {
  const { name , lastName ,birthday , email, address ,hireDate , password ,phone ,dui ,isssNumber ,isVerified } = req.body;
  const updateCostumer = await costumerModel.findByIdAndUpdate(
    req.params.id,
    { name , lastName ,birthday , email, address ,hireDate , password ,phone ,dui ,isssNumber ,isVerified },
    { new: true }
  );
  res.json({ message: "Costummers updated successfully" });
};

export default costumerController;