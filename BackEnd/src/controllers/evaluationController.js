const EvaluationController  = {};

import EvaluationModel from "../models/evaluations.js"

EvaluationController.getEvaluation = async (req,res)=>{
    const Evaluation = await EvaluationModel.find().populate("idCliente")
    res.json(Evaluation)
}

EvaluationController.insertEvaluation = async(req,res)=>{
    const{Comment,Grade,Role,idCliente}= req.body;
    const newEvalution = new EvaluationModel({ Comment,Grade,Role,idCliente })
    await newEvalution.save()
    res.json({message:"Evaluation saved"})
}

//delete
EvaluationController.deleteEvaluation = async(req,res)=>{
    await EvaluationModel.findByIdAndDelete(req.params.id)
    res.json({message:"Evaluation eliminated"})
}

//update
EvaluationController.updateEvaluation = async(req,res) => {
    const {Comment,Grade,Role,idCliente} = req.body;
    const updateEvaluation = await EvaluationModel.findByIdAndUpdate
    (req.params.id,
        {Comment,Grade,Role,idCliente},
        {new:true});
        res.json({message:"Evaluation updated"});
}

export default EvaluationController;