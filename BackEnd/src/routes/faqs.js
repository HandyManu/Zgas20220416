import express from "express";
import FaqController from "../controllers/faqsController.js";

const router = express.Router();
router.route("/")
  .get(FaqController.getAllFaqs)
  .post(FaqController.createFaq);

router.route("/:id")
    .put(FaqController.updateFaq)
    .delete(FaqController.deleteFaq);

export default router;