import React from "react";

const BranchRegister = ({
    setBranchName,
    branchName,
    setBranchAdress, // corregido
    branchAdress,    // corregido
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
            value={branchAdress} // corregido
            onChange={(e) => setBranchAdress(e.target.value)} // corregido
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
