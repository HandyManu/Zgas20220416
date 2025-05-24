import React from "react";

const CostumerCard = ({ costumer, deleteCostumer, updateCostumer }) => {
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
            <div className="card-body p-4" style={{ backgroundColor: "#f9f9f9" }}>
                <h5
                    className="card-title font-bold text-lg mb-2"
                    style={{ color: "#045481" }}
                >
                    {costumer.name} {costumer.lastName}
                </h5>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>Email:</strong> {costumer.email}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>Dirección:</strong> {costumer.address}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>Teléfono:</strong> {costumer.phone}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>DUI:</strong> {costumer.dui}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>ISSS:</strong> {costumer.isssNumber}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>Fecha de nacimiento:</strong> {new Date(costumer.birthday).toLocaleDateString()}
                </p>
                <p className="card-text mb-1" style={{ color: "#6c757d" }}>
                    <strong>Fecha de contratación:</strong> {new Date(costumer.hireDate).toLocaleDateString()}
                </p>
                <p className="card-text mb-2" style={{ color: "#6c757d" }}>
                    <strong>Verificado:</strong> {costumer.isVerified ? "Sí" : "No"}
                </p>
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
                        onClick={() => deleteCostumer(costumer._id)}
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
                        onClick={() => updateCostumer(costumer)}
                    >
                        <i className="bi bi-pencil"></i> Editar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CostumerCard;