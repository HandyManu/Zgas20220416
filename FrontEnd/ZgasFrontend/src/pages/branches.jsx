import React, { useState, useEffect, use } from "react";
import RegisterBranches from "../components/branches/branchRegister";
import BrandList from "../components/branches/brandList";
import { Toaster } from 'react-hot-toast';

import useDataBranches from "../components/branches/hook/useDataBrand";

const Branches = () => {

    useEffect(() => {
        document.title = "Sucursales";
    }, []);

    const {
        activeTab,
        setActiveTab,
        id,
        setId,
        branchName,
        setBranchName,
        branchAddress,
        setBranchAddress,
        branchPhone,
        setBranchPhone,
        branchSchedule,
        setBranchSchedule,
        branches,
        setBranches,
        loading,
        setLoading,
        success,
        setSuccess,
        error,
        setError,
        handleSubmit,
        deleteBranches,
        updateBranches,
        handleUpdate,
    } = useDataBranches();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Sucursales</h1>
                <div>
                    <div className="flex border-b border-gray-200 mb-4">
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => setActiveTab("list")}
                        >
                            Lista de Sucursales
                        </button>
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => {
                                setActiveTab("form");
                                cleanData(); // Asegúrate de que esta función limpia los datos correctamente
                            }}
                        >
                            Gestionar Sucursales
                        </button>
                    </div>
                    <div>
                        {activeTab === "list" && (
                            <div>
                                <BrandList
                                    branches={branches}
                                    setBranches={setBranches}
                                    loading={loading}
                                    setLoading={setLoading}
                                    error={error}
                                    setError={setError}
                                    deleteBranches={deleteBranches}
                                    updateBranches={updateBranches}
                                    setId={setId}
                                    setActiveTab={setActiveTab}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        )}
                        {activeTab === "form" && (
                            <div>
                                <RegisterBranches
                                handleUpdate={handleUpdate}
                                    branchName={branchName}
                                    setBranchName={setBranchName}
                                    branchAddress={branchAddress}
                                    setBranchAddress={setBranchAddress}
                                    branchPhone={branchPhone}
                                    setBranchPhone={setBranchPhone}
                                    branchSchedule={branchSchedule}
                                    setBranchSchedule={setBranchSchedule}
                                    handleSubmit={handleSubmit}
                                    loading={loading}
                                    setLoading={setLoading}
                                    success={success}
                                    setSuccess={setSuccess}
                                    error={error}
                                    setError={setError}
                                    id={id}
                                    setId={setId}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Toaster
                toastOptions={{
                    duration: 1000,
                }}
            />
        </div>


    );

    
}

export default Branches;



