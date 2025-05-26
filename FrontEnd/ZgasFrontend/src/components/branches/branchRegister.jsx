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
    <>
        <style>
            {`
                form {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                }
                ul li {
                    margin-bottom: 15px;
                }
                label {
                    display: block;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    padding: 8px;
                    box-sizing: border-box;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            `}
        </style>
        <form onSubmit={id ? handleUpdate : handleSubmit}>
            <h1>{id ? `Actualizar Sucursal (ID: ${id})` : "Registrar Sucursal"}</h1>
            <ul>
                <li>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Dirección:</label>
                    <input
                        type="text"
                        placeholder="Dirección"
                        value={branchAddress}
                        onChange={(e) => setBranchAddress(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={branchPhone}
                        onChange={(e) => setBranchPhone(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Horario:</label>
                    <input
                        type="text"
                        placeholder="Horario"
                        value={branchSchedule}
                        onChange={(e) => setBranchSchedule(e.target.value)}
                        required
                    />
                </li>
            </ul>
            <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
        </form>
    </>
);

export default BranchRegister;
