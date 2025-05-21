import React from "react";

const ProductsRegister = ({
  setProductName,
  productName,
  setProductDescripcion,
  ProductDescripcion,
  setProductPrice,
  ProductPrice,
  setProductStock,
  ProductStock,
  id,
  handleSubmit,
  handleUpdate,
}) => (
  <form onSubmit={id ? handleUpdate : handleSubmit}>
    <h1>id: {id}</h1>
    <input
      type="text"
      placeholder="Nombre"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      required
    />
    <input
      type="text"
      placeholder="Descripción"
      value={ProductDescripcion}
      onChange={(e) => setProductDescripcion(e.target.value)}
      required
    />
    <input
      type="number"
      placeholder="Precio"
      value={ProductPrice}
      onChange={(e) => setProductPrice(e.target.value)}
      required
    />
    <input
      type="number"
      placeholder="Stock"
      value={ProductStock}
      onChange={(e) => setProductStock(e.target.value)}
      required
    />
    <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
  </form>
);

export default ProductsRegister;