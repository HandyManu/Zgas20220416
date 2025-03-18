import express from "express";
import reviewsControllers from "../controllers/reviewsControllers.js";

const router = express.Router();

router.route("/")
.get(reviewsControllers.getReviews)
.post(reviewsControllers.insertReview);

router.route("/:id")
.put(reviewsControllers.updateReview)
.delete(reviewsControllers.deleteReview);

export default router;