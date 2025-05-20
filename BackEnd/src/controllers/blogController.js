import blogModel from "../models/blog.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

cloudinary.config({
  cloud_name: config.cloudinary.CLOUDINARY_CLOUD_NAME,
  api_key: config.cloudinary.CLOUDINARY_API_KEY,
  api_secret: config.cloudinary.CLOUDINARY_API_SECRET,
});

const blogController = {};

blogController.getAllBlog = async (req, res) => {
  const blogs = await blogModel.find();
  res.json(blogs);
};

blogController.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg"],
      });

      imageUrl = result.secure_url;
    }

    const newBlog = new blogModel({
      title,
      content,
      image: imageUrl,
    });

    await newBlog.save(); 

    res.json({
      message: "Blog created successfully",
    });
  } catch (error) {
    
    console.error("Error:", error);
    res.status(500).json({ message: "Error al crear el blog", error });
  }
};

// Actualizar un blog
blogController.updateBlog = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
  
      const updatedBlog = await blogModel.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
  
      if (!updatedBlog) {
        return res.status(404).json({ message: "Blog no encontrado" });
      }
  
      res.json({
        message: "Blog actualizado exitosamente",
        blog: updatedBlog,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error al actualizar el blog", error });
    }
  };
  
  // Eliminar un blog
  blogController.deleteBlog = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedBlog = await blogModel.findByIdAndDelete(id);
  
      if (!deletedBlog) {
        return res.status(404).json({ message: "Blog no encontrado" });
      }
  
      res.json({ message: "Blog eliminado exitosamente" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error al eliminar el blog", error });
    }
  };

export default blogController;
