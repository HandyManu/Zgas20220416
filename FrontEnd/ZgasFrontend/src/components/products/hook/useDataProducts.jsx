import { set } from "mongoose";
import React, { useState, useEffect } from "react";
import toast, {Toaster} from 'react-hot-toast';

const useDataProducts = () => {
    const ApiProducts = "http://localhost:4000/api/products";

     const [activeTab, setActiveTab] = useState("list");
      const [id, setId] = useState("");
        const [productName, setProductName] = useState("");
        const [ProductDescripcion, setProductDescripcion] = useState("");
        const [ProductPrice, setProductPrice] = useState("");
        const [ProductStock, setProductStock] = useState("");
        const [products, setProducts] = useState([]);
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);

        const cleanData = () => {
            setId("");
            setProductName("");
            setProductDescripcion("");
            setProductPrice("");
            setProductStock("");
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!productName || !ProductDescripcion || !ProductPrice || !ProductStock) {
                setError("Todos los campos son obligatorios");
                toast.error("Por favor completa todos los campos");
                return;
            }
            try{
                const newProduct = {
                    name: productName,
                    descripcion: ProductDescripcion,
                    price: ProductPrice,
                    stock: ProductStock
                }
            }
            catch (error) {
                setError("Error al registrar el producto");
                toast.error("Error al registrar el producto");
            }
        };
}