import React from "react";

const BranchRegister = ({
    setBranchName,
    branchName,
    setBranchAddress, 
    branchAddress,    
    setBranchPhone,
    branchPhone,
    setBranchSchedule,
    branchSchedule,
    id,
    handleSubmit,
    handleUpdate,
}) => (
    <form onSubmit={id ? handleUpdate : handleSubmit}>
        <h1>id: {id}</h1>
        <input
            type="text"
            placeholder="Nombre"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Dirección"
            value={branchAddress} // corregido
            onChange={(e) => setBranchAddress(e.target.value)} // corregido
            required
        />
        <input
            type="text"
            placeholder="Teléfono"
            value={branchPhone}
            onChange={(e) => setBranchPhone(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Horario"
            value={branchSchedule}
            onChange={(e) => setBranchSchedule(e.target.value)}
            required
        />
        <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
    </form>
);

export default BranchRegister;
