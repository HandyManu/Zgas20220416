import BranchCard from "./branchCard";
import React from "react";

const BrandList = ({ brands, loading, updateBrands, deleteBrands }) => {
    const safeBrands = Array.isArray(brands) ? brands : [];

    return (
        <div className="container py-4">
            <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-tight">
                Listado de Sucursales
            </h1>
            <div className="row justify-center">
                {loading && (
                    <div className="w-full text-center text-gray-500 my-8">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <div>Cargando sucursales...</div>
                    </div>
                )}
                {!loading && safeBrands.length === 0 && (
                    <div className="w-full text-center text-gray-400 my-8">
                        No hay sucursales registradas.
                    </div>
                )}
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                    {safeBrands.map((branch) => (
                        <BranchCard
                            key={branch._id}
                            branch={branch}
                            deleteBranch={deleteBrands}
                            updateBranch={updateBrands}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandList;
