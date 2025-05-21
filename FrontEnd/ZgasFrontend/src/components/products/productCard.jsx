import React from "react";

const ProductCard = ({ product, deleteProducts, updateProducts }) => {
  return (
    <div
      className="card shadow-lg rounded-lg overflow-hidden mb-4"
      style={{
        maxWidth: "400px",
        minWidth: "300px",
        border: "1px solid #cdd4da",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="p-3 flex justify-center items-center"
        style={{
          height: "180px",
          backgroundColor: "#045481",
          color: "#ffffff",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        {product.name.charAt(0).toUpperCase()}
      </div>
      <div className="card-body p-4" style={{ backgroundColor: "#f9f9f9" }}>
        <h5
          className="card-title font-bold text-lg mb-2"
          style={{ color: "#045481" }}
        >
          {product.name}
        </h5>
        <p className="card-text mb-1" style={{ color: "#6c757d" }}>
           Descripcion de producto:{product.descripcion}
        </p>
        <div className="flex justify-between items-center mb-3">
          <span
            className="badge px-2 py-1"
            style={{
              backgroundColor: "#94cb3e",
              color: "#ffffff",
              borderRadius: "5px",
            }}
          >
            Stock: {product.stock}
          </span>
          <span
            className="font-semibold"
            style={{ color: "#045481", fontSize: "1.2rem" }}
          >
            $ precio {product.price}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="btn flex-1"
            style={{
              backgroundColor: "#cdd4da",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              fontWeight: "bold",
            }}
            onClick={() => deleteProducts(product._id)}
          >
            <i className="bi bi-trash"></i> Eliminar
          </button>
          <button
            className="btn flex-1"
            style={{
              backgroundColor: "#94cb3e",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
              fontWeight: "bold",
            }}
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