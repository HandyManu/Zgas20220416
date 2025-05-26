import React from "react";

const ProductCard = ({ product, deleteProducts, updateProducts }) => {
  return (
    <div
      style={{
        border: "1px solid #cdd4da",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        maxWidth: "400px",
        minWidth: "300px",
        backgroundColor: "#ffffff",
        marginBottom: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#045481",
          color: "#ffffff",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {product.name.charAt(0).toUpperCase()}
      </div>

      {/* Body */}
      <div style={{ padding: "20px" }}>
        <h5
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            color: "#045481",
            marginBottom: "15px",
          }}
        >
          {product.name}
        </h5>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Descripción:</strong> {product.descripcion}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Precio:</strong> ${product.price}
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>Stock:</strong> {product.stock}
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 20px",
          borderTop: "1px solid #cdd4da",
          backgroundColor: "#f9f9f9",
        }}
      >
        <button
          style={{
            padding: "8px 12px",
            backgroundColor: "#28a745", // Verde
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => updateProducts(product)}
        >
          Editar
        </button>
        <button
          style={{
            padding: "8px 12px",
            backgroundColor: "#dc3545", // Rojo
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => deleteProducts(product._id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;