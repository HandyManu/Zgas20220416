import CostumersCard from "../costumers/costumersCard";
import React from "react";

const CostumersList = ({ costumers = [], loading, updateCostumer , deleteCostumer }) => {

    return(
        <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-tight">
                Listado de Trabajadores
            </h1>
            <div className="row justify-center">
                {loading && (
                    <div className="w-full text-center text-gray-500 my-8">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <div>Cargando Trabajadores...</div>
                    </div>
                )}
                {!loading && costumers.length === 0 && (
                    <div className="w-full text-center text-gray-400 my-8">
                        No hay trabajadores registrados.
                    </div>
                )}
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {Array.isArray(costumers) && costumers.map((costumer) =>
                        costumer && (
                            <CostumersCard
                                key={costumer._id}
                                costumer={costumer}
                                deleteCostumer={deleteCostumer}
                                updateCostumer={updateCostumer}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default CostumersList;
