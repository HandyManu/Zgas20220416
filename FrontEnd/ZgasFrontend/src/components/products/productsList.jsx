import ProductCard from "./productCard";
import React from "react";

const ProductsList = ({ products, loading, deleteProducts, updateProducts }) => {
    return (
        <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-tight">
                Listado de Productos
            </h1>
            <div className="row justify-center">
                {loading && (
                    <div className="w-full text-center text-gray-500 my-8">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <div>Cargando productos...</div>
                    </div>
                )}
                {!loading && products.length === 0 && (
                    <div className="w-full text-center text-gray-400 my-8">
                        No hay productos registrados.
                    </div>
                )}
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {Array.isArray(products) && products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            deleteProducts={deleteProducts}
                            updateProducts={updateProducts}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsList;