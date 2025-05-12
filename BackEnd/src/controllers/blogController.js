import blogModel from "../models/blog.js";
import {v2 as cloudinary} from "cloudinary";
import { config } from "../config.js";

cloudinary.config({
cloud_name: config.cloudinary.CLOUDINARY_CLOUD_NAME,
api_key: config.cloudinary.CLOUDINARY_API_KEY,
api_secret: config.cloudinary.CLOUDINARY_API_SECRET
})

const blogController = {};

blogController.getAllBlog = async (req, res) => {
    
        const blogs = await blogModel.find();
        res.json(blogs);
    
}

blogController.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        let imageUrl = "";
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path
                , {
                    folder: "public",
                    allowed_formats: ["jpg", "png", "jpeg"]
                }
            );

            imageUrl = result.secure_url;
        }
        const newBlog = new blogModel({
            title,
            content,
            image: imageUrl
        })
        newBlog.save();
        res.json({
            message: "Blog created successfully"
        })
    } catch (error) {
        console.log("error" + error);
    }
};

export default blogController;