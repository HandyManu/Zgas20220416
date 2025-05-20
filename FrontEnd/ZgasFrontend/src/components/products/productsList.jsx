import ProductCard from "./productCard";
import React from "react";

const ProductsList = ({ products,loading, deleteProducts, updateProducts, loading }) => {
    return (
        <div className="container">
            <h1 className="text-2xl font-bold underline text-center">
                Listado de productos
            </h1>
            <div className="row">
                <div className="flex flex-wrap gap-4 justify-center mt-5">
                    {loading && <div className="text-center text-gray-500">Loading...</div>}
                    {products.map((product) => (
                        <div className="col-md-4" key={product._id}>
                            <ProductCard
                                key={product._id}
                                product={product}
                                deleteProducts={deleteProducts}
                                updateProducts={updateProducts}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProductsList;