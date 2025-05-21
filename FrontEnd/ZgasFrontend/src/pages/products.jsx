import React, { useState, useEffect, use } from "react";
import RegisterProducts from "../components/products/productsRegister";
import ListProducts from "../components/products/productsList";
import { Toaster } from 'react-hot-toast';

import useDataProducts from "../components/products/hook/useDataProducts";

const Products = () => {

    useEffect(() => {
        document.title = "Productos";
    }, []);

    const {
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
        setProducts,
        loading,
        setLoading,
        success,
        setSuccess,
        error,
        setError,
        handleSubmit,
        deleteProducts,
        updateProducts,
        handleUpdate,
    } = useDataProducts();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Productos</h1>
                <div>
                    <div className="flex border-b border-gray-200 mb-4">
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => setActiveTab("list")}
                        >
                            Lista de Productos
                        </button>
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => {
                                setActiveTab("form");
                                cleanData(); // Asegúrate de que esta función limpia los datos correctamente
                            }}
                        >
                            Gestionar Productos
                        </button>
                    </div>
                    <div>
                        {activeTab === "list" && (
                            <div>
                                <ListProducts
                                    products={products}
                                    setProducts={setProducts}
                                    loading={loading}
                                    setLoading={setLoading}
                                    error={error}
                                    setError={setError}
                                    deleteProducts={deleteProducts}
                                    updateProducts={updateProducts}
                                    setId={setId}
                                    setActiveTab={setActiveTab}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        )}
                        {activeTab === "form" && (
                            <div>
                                <RegisterProducts
                                handleUpdate={handleUpdate}
                                    productName={productName}
                                    setProductName={setProductName}
                                    ProductDescripcion={ProductDescripcion}
                                    setProductDescripcion={setProductDescripcion}
                                    ProductPrice={ProductPrice}
                                    setProductPrice={setProductPrice}
                                    ProductStock={ProductStock}
                                    setProductStock={setProductStock}
                                    handleSubmit={handleSubmit}
                                    loading={loading}
                                    setLoading={setLoading}
                                    success={success}
                                    setSuccess={setSuccess}
                                    error={error}
                                    setError={setError}
                                    id={id}
                                    setId={setId}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    duration: 1000,
                }}
            />
        </div>


    );
}
export default Products;