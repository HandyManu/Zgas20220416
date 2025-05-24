import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataCostumers = () => {
    const ApiCostumers = "http://localhost:4000/api/costumers";

    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [costumerName, setCostumerName] = useState("");
    const [costumerLastName, setCostumerLastName] = useState("");
    const [costumerBirthday, setCostumerBirthday] = useState("");
    const [costumerEmail, setCostumerEmail] = useState("");
    const [costumerAddress, setCostumerAddress] = useState("");
    const [costumerHireDate, setCostumerHireDate] = useState("");
    const [costumerPassword, setCostumerPassword] = useState("");
    const [costumerPhone, setCostumerPhone] = useState("");
    const [costumerDui, setCostumerDui] = useState("");
    const [costumerIsssNumber, setCostumerIsssNumber] = useState("");
    const [costumerIsVerified, setCostumerIsVerified] = useState(false);
    const [costumers, setCostumers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const cleanData = () => {
        setId("");
        setCostumerName("");
        setCostumerLastName("");
        setCostumerBirthday("");
        setCostumerEmail("");
        setCostumerAddress("");
        setCostumerHireDate("");
        setCostumerPassword("");
        setCostumerPhone("");
        setCostumerDui("");
        setCostumerIsssNumber("");
        setCostumerIsVerified(false);
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(ApiCostumers);
            if (!response.ok) throw new Error("Error al obtener los Trabajadores");
            const data = await response.json();
            setCostumers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!costumerName || !costumerLastName || !costumerBirthday ||
             !costumerEmail || !costumerAddress || !costumerHireDate ||
              !costumerPassword || !costumerPhone || !costumerDui ||
               !costumerIsssNumber )  {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        try {
            const newCostumer = {
                name: costumerName,
                lastName: costumerLastName,
                birthday: costumerBirthday,
                email: costumerEmail,
                address: costumerAddress,
                hireDate: costumerHireDate,
                password: costumerPassword,
                phone: costumerPhone,
                dui: costumerDui,
                isssNumber: costumerIsssNumber,
                isVerified: costumerIsVerified
            };
            const response = await fetch(ApiCostumers, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCostumer),
            });
            if (!response.ok) throw new Error("Error al registrar el trabajador");
            toast.success("Trabajador registrado con éxito");
            setSuccess("El trabajador se ha registrado con éxito");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al registrar el trabajador");
        } finally {
            setLoading(false);
        }
    };

    const deleteCostumer = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${ApiCostumers}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar el trabajador");
            toast.success("Trabajador eliminada con éxito");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al eliminar el trabajador");
        } finally {
            setLoading(false);
        }
    };

    const updateCostumer = (dataCostumers) => {
        setId(dataCostumers._id);
        setCostumerName(dataCostumers.name);
        setCostumerLastName(dataCostumers.lastName);
        setCostumerBirthday(dataCostumers.birthday);
        setCostumerEmail(dataCostumers.email);
        setCostumerAddress(dataCostumers.address);
        setCostumerHireDate(dataCostumers.hireDate);
        setCostumerPassword(dataCostumers.password);
        setCostumerPhone(dataCostumers.phone);
        setCostumerDui(dataCostumers.dui);
        setCostumerIsssNumber(dataCostumers.isssNumber);
        setCostumerIsVerified(dataCostumers.isVerified);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => {

        e.preventDefault();
        if (!costumerName || !costumerLastName || !costumerBirthday ||
             !costumerEmail || !costumerAddress || !costumerHireDate || 
             !costumerPassword || !costumerPhone || !costumerDui ||
              !costumerIsssNumber ) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        console.log("id:", id);
        try {
            const updatedCostumers = {
                name: costumerName,
                lastName: costumerLastName,
                birthday: costumerBirthday,
                email: costumerEmail,
                address: costumerAddress,
                hireDate: costumerHireDate,
                password: costumerPassword,
                phone: costumerPhone,
                dui: costumerDui,
                isssNumber: costumerIsssNumber,
                isVerified: costumerIsVerified
            };
            const response = await fetch(`${ApiCostumers}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedCostumers),
            });
            if(!response.ok) throw new Error("Error al actualizar el trabajador");

            toast.success("el trabajador se ha  actualizado con éxito");
            setSuccess("el trabajador se ha actualizado con éxito");
            cleanData();
            //setActiveTab("list");
            console.log("en funcion update");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al actualizar el trabajador");
        } finally {
            setLoading(false);
        }
    };

    console.log("Costumers:", costumers);

    return {
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
        loading,
        success,
        error,
        handleSubmit,
        deleteCostumer,
        updateCostumer,
        handleUpdate,
        cleanData,
        
    };


}

export default useDataCostumers;