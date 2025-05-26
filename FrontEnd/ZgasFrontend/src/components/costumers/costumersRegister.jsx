import React from "react";

const CostumerRegister = ({
    setCostumerName,
    costumerName,
    setCostumerLastName,
    costumerLastName,
    setCostumerBirthday,
    costumerBirthday,
    setCostumerEmail,
    costumerEmail,
    setCostumerAddress,
    costumerAddress,
    setCostumerHireDate,
    costumerHireDate,
    setCostumerPassword,
    costumerPassword,
    setCostumerPhone,
    costumerPhone,
    setCostumerDui,
    costumerDui,
    setCostumerIsssNumber,
    costumerIsssNumber,
    setCostumerIsVerified,
    costumerIsVerified,
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
            <h1>id: {id}</h1>
            <ul>
                <li>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={costumerName}
                        onChange={(e) => setCostumerName(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={costumerLastName}
                        onChange={(e) => setCostumerLastName(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Fecha de nacimiento:</label>
                    <input
                        type="date"
                        value={costumerBirthday}
                        onChange={(e) => setCostumerBirthday(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={costumerEmail}
                        onChange={(e) => setCostumerEmail(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Dirección:</label>
                    <input
                        type="text"
                        placeholder="Dirección"
                        value={costumerAddress}
                        onChange={(e) => setCostumerAddress(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Fecha de contratación:</label>
                    <input
                        type="date"
                        value={costumerHireDate}
                        onChange={(e) => setCostumerHireDate(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={costumerPassword}
                        onChange={(e) => setCostumerPassword(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Teléfono:</label>
                    <input
                        type="text"
                        placeholder="Teléfono"
                        value={costumerPhone}
                        onChange={(e) => setCostumerPhone(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>DUI:</label>
                    <input
                        type="text"
                        placeholder="DUI"
                        value={costumerDui}
                        onChange={(e) => setCostumerDui(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>Número de ISSS:</label>
                    <input
                        type="text"
                        placeholder="Número de ISSS"
                        value={costumerIsssNumber}
                        onChange={(e) => setCostumerIsssNumber(e.target.value)}
                        required
                    />
                </li>
                <li>
                    <label>
                        <input
                            type="checkbox"
                            checked={costumerIsVerified}
                            onChange={(e) => setCostumerIsVerified(e.target.checked)}
                        />
                        Verificado
                    </label>
                </li>
            </ul>
            <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
        </form>
    </>
);

export default CostumerRegister;