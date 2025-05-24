import React, { useState, useEffect, use } from "react";
import RegisterCostumers from "../components/costumers/costumersRegister";
import CostumerList from "../components/costumers/costumersList";
import { Toaster } from 'react-hot-toast';

import useDataCostumers from "../components/costumers/hook/useDataCostumers";

const Costumers = () => {

     useEffect(() => {
        document.title = "Trabajadores";
    }, []);

    const {
        activeTab,
        setActiveTab,
        id,
        setId,
        costumerName,
        setCostumerName,
        costumerLastName,
        setCostumerLastName,
        costumerBirthday,
        setCostumerBirthday,
        costumerEmail,
        setCostumerEmail,
        costumerAddress,
        setCostumerAddress,
        costumerHireDate,
        setCostumerHireDate,
        costumerPassword,
        setCostumerPassword,
        costumerPhone,
        setCostumerPhone,
        costumerDui,
        setCostumerDui,
        costumerIsssNumber,
        setCostumerIsssNumber,
        costumerIsVerified,
        setCostumerIsVerified,
        costumers,
        setCostumers,
        cleanData,
        loading,
        setLoading,
        success,
        setSuccess,
        error,
        setError,
        handleSubmit,
        deleteCostumers,
        updateCostumers,
        handleUpdate,
    } = useDataCostumers();

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Trabajadores</h1>
                <div>
                    <div className="flex border-b border-gray-200 mb-4">
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => setActiveTab("list")}
                        >
                            Lista de Trabajadores
                        </button>
                        <button
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                            onClick={() => {
                                setActiveTab("form");
                                cleanData(); // Asegúrate de que esta función limpia los datos correctamente
                            }}
                        >
                            Gestionar Trabajadores
                        </button>
                    </div>
                    <div>
                        {activeTab === "list" && (
                            <div>
                                <CostumerList
                                    costumers={costumers}
                                    setCostumers={setCostumers}
                                    loading={loading}
                                    setLoading={setLoading}
                                    error={error}
                                    setError={setError}
                                    deleteCostumers={deleteCostumers}
                                    updateCostumers={updateCostumers}
                                    setId={setId}
                                    setActiveTab={setActiveTab}
                                    handleUpdate={handleUpdate}
                                />
                            </div>
                        )}
                        {activeTab === "form" && (
                            <div>
                                <RegisterCostumers
                                handleUpdate={handleUpdate}
                                    costumerName={costumerName}
                                    setCostumerName={setCostumerName}
                                    costumerLastName={costumerLastName}
                                    setCostumerLastName={setCostumerLastName}
                                    costumerBirthday={costumerBirthday}
                                    setCostumerBirthday={setCostumerBirthday}
                                    costumerEmail={costumerEmail}
                                    setCostumerEmail={setCostumerEmail}
                                    costumerAddress={costumerAddress}
                                    setCostumerAddress={setCostumerAddress}
                                    costumerHireDate={costumerHireDate}
                                    setCostumerHireDate={setCostumerHireDate}
                                    costumerPassword={costumerPassword}
                                    setCostumerPassword={setCostumerPassword}
                                    costumerPhone={costumerPhone}
                                    setCostumerPhone={setCostumerPhone}
                                    costumerDui={costumerDui}
                                    setCostumerDui={setCostumerDui}
                                    costumerIsssNumber={costumerIsssNumber}
                                    setCostumerIsssNumber={setCostumerIsssNumber}
                                    costumerIsVerified={costumerIsVerified}
                                    setCostumerIsVerified={setCostumerIsVerified}
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

export default Costumers;

