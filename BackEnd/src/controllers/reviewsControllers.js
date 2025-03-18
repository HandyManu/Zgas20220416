const reviewsControllers = {};
import ReviewsModel from "../models/Reviews.js";

//select

reviewsControllers.getReviews = async (req,res)=>{
    const Reviews = await ReviewsModel.find().populate("idCliente")
    res.json(Reviews)
}

//insert 

reviewsControllers.insertReview = async (req,res) => {
    const { comment , rating , idCliente} = req.body;
    const newReview = new ReviewsModel({ comment , rating , idCliente})
    await newReview.save()
    res.json({message:"review saved"});
}


//delete

reviewsControllers.deleteReview = async(req,res) => {
    await ReviewsModel.findByIdAndDelete(req.params.id)
    res.json({message:"review deleted"})
}

//update 

reviewsControllers.updateReview = async(req,res) =>{
    const {comment , rating , idCliente} = req.body;
    await ReviewsModel.findByIdAndUpdate(req.params.id,{comment , rating , idCliente} , {new:true})
    res.json({message:"reviews updated"})
}

export default reviewsControllers;

