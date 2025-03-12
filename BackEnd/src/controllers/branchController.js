// Creo un array de funciones

const branchController = {};

import branchModel from "../models/branch.js";

// SELECT
branchController.getBranch = async (req, res) => {
  const branch = await branchModel.find();
  res.json(branch);
};

// INSERT
branchController.insertBranch = async (req, res) => {
  const { name, address, phone, schedule  } = req.body;
  const newBranch = new branchModel({ name, address, phone, schedule});
  await newBranch.save();
  res.json({ message: "Branch saved" });
};

// DELETE
branchController.deleteBranch = async (req, res) => {
  await branchModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Branch deleted" });
};

// UPDATE
branchController.updateBranch = async (req, res) => {
  const { name, address, phone, schedule } = req.body;
  const updateBranch = await branchModel.findByIdAndUpdate(
    req.params.id,
    { name, address, phone, schedule },
    { new: true }
  );
  res.json({ message: "Branch updated successfully" });
};


export default branchController;