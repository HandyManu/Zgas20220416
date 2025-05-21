import React from "react";

const ProductCard = ({ product, deleteProducts, updateProducts }) => {
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden mb-4" style={{ maxWidth: "400px", minWidth: "300px" }}>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 flex justify-center items-center" style={{ height: "180px" }}>
        <img
          src={product.image || "https://via.placeholder.com/120"}
          className="img-fluid rounded shadow"
          alt={product.name}
          style={{ maxHeight: "120px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body p-4">
        <h5 className="card-title font-bold text-lg text-blue-800 mb-2">{product.name}</h5>
        <p className="card-text text-gray-700 mb-1">{product.descripcion}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="badge bg-success text-white px-2 py-1">Stock: {product.stock}</span>
          <span className="text-blue-700 font-semibold">${product.price}</span>
        </div>
        <div className="flex gap-2">
          <button
            className="btn btn-outline-danger flex-1"
            onClick={() => deleteProducts(product._id)}
          >
            <i className="bi bi-trash"></i> Eliminar
          </button>
          <button
            className="btn btn-outline-primary flex-1"
            onClick={() => updateProducts(product)}
          >
            <i className="bi bi-pencil"></i> Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;