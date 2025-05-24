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
}) => (<form onSubmit={id ? handleUpdate : handleSubmit}>
        <h1>id: {id}</h1>
        <input
            type="text"
            placeholder="Nombre"
            value={costumerName}
            onChange={(e) => setCostumerName(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Apellido"
            value={costumerLastName}
            onChange={(e) => setCostumerLastName(e.target.value)}
            required
        />
        <input
            type="date"
            placeholder="Fecha de nacimiento"
            value={costumerBirthday}
            onChange={(e) => setCostumerBirthday(e.target.value)}
            required
        />
        <input
            type="email"
            placeholder="Correo electrónico"
            value={costumerEmail}
            onChange={(e) => setCostumerEmail(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Dirección"
            value={costumerAddress}
            onChange={(e) => setCostumerAddress(e.target.value)}
            required
        />
        <input
            type="date"
            placeholder="Fecha de contratación"
            value={costumerHireDate}
            onChange={(e) => setCostumerHireDate(e.target.value)}
            required
        />
        <input
            type="password"
            placeholder="Contraseña"
            value={costumerPassword}
            onChange={(e) => setCostumerPassword(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Teléfono"
            value={costumerPhone}
            onChange={(e) => setCostumerPhone(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="DUI"
            value={costumerDui}
            onChange={(e) => setCostumerDui(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Número de ISSS"
            value={costumerIsssNumber}
            onChange={(e) => setCostumerIsssNumber(e.target.value)}
            required
        />
        <input
            type="checkbox"
            placeholder="Verificado"
            value={costumerIsVerified}
            onChange={(e) => setCostumerIsVerified(e.target.checked)}

        />
        <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
    </form>
    
);
export default CostumerRegister;