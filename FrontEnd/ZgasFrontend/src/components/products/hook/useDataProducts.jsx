import { useState, useEffect } from "react";
import toast from "react-hot-toast";

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
        
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(ApiProducts);
            if (!response.ok) throw new Error("Error al obtener los productos");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!productName || !ProductDescripcion || !ProductPrice || !ProductStock) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        try {
            const newProduct = {
                name: productName,
                descripcion: ProductDescripcion,
                price: ProductPrice,
                stock: ProductStock,
            };
            const response = await fetch(ApiProducts, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
            if (!response.ok) throw new Error("Error al registrar el producto");
            toast.success("Producto registrado con éxito");
            setSuccess("El producto se ha registrado con éxito");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al registrar el producto");
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${ApiProducts}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar el producto");
            toast.success("Producto eliminado con éxito");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al eliminar el producto");
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = (dataProducts) => {
        setId(dataProducts._id);
        setProductName(dataProducts.name);
        setProductDescripcion(dataProducts.descripcion);
        setProductPrice(dataProducts.price);
        setProductStock(dataProducts.stock);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const updatedProduct = {
                name: productName,
                descripcion: ProductDescripcion,
                price: ProductPrice,
                stock: ProductStock,
            };
            const response = await fetch(`${ApiProducts}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) throw new Error("Error al actualizar el producto");
            toast.success("Producto actualizado con éxito");
            setSuccess("El producto se ha actualizado con éxito");
            cleanData();
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al actualizar el producto");
        } finally {
            setLoading(false);
        }
    };

    console.log("products:", products);

    return {
        activeTab,
        setActiveTab,
        id,
        setId,
        productName,
        setProductName,
        ProductDescripcion,
        setProductDescripcion,
        ProductPrice,
        setProductPrice,
        ProductStock,
        setProductStock,
        products,
        loading,
        success,
        error,
        handleSubmit,
        deleteProducts: deleteProduct,
        updateProducts: updateProduct,
        handleUpdate,
        cleanData,
        
    };
};

export default useDataProducts;