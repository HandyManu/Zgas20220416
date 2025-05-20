import React from 'react';

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

}) => {
    return (
      <div className="container mt-5">
        <h1 className="text-2xl font-bold underline text-center">
          Registro de productos
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Nombre del producto
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescripcion" className="form-label">
              Descripción
            </label>
            <input
              type="text"
              className="form-control"
              id="productDescripcion"
              value={ProductDescripcion}
              onChange={(e) => setProductDescripcion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Precio
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              value={ProductPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productStock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control"
              id="productStock"
              value={ProductStock}
              onChange={(e) => setProductStock(e.target.value)}
            />
          </div>
          
          {!id ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={(e) => saveProduct(e)}
            >
              Guardar
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={(e) => handleEdit(e)}
            >
              Editar
            </button>
          )}
        </form>
      </div>
    );
};

export default ProductsRegister;