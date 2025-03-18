import express from "express";
import EvaluationController from "../controllers/evaluationController.js";

const router = express.Router();

router.route("/")
.get(EvaluationController.getEvaluation)
.post(EvaluationController.insertEvaluation);

router.route("/:id")
.put(EvaluationController.updateEvaluation)
.delete(EvaluationController.deleteEvaluation);

export default router