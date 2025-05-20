import React from "react";
import Button from "../Button";

const productsCard = ({ product  , deleteProducts , updateProducts }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.descripcion}</p>
            <p className="card-text"><small className="text-muted">Price: ${product.price}</small></p>
            <p className="card-text"><small className="text-muted">Stock: {product.stock}</small></p>
            <Button text={"Eliminar"} onClick={() => deleteProducts(product._id)} />
            <Button text={"Actualizar"} onClick={() => updateProducts(product)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default productsCard;