import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataBranches = () => {
    const ApiBrands = "http://localhost:4000/api/branch";
    const [activeTab, setActiveTab] = useState("list");
    const [id, setId] = useState("");
    const [branchName, setBranchName] = useState("");
    const [branchAdress, setBranchAdress] = useState("");
    const [branchPhone, setBranchPhone] = useState("");
    const [branchSchedule, setBranchSchedule] = useState("");
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const cleanData = () => {
        setId("");
        setBranchName("");
        setBranchAdress("");
        setBranchPhone("");
        setBranchSchedule("");
        
    };
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(ApiBrands);
            if (!response.ok) throw new Error("Error al obtener los productos");
            const data = await response.json();
            setBranches(data);
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
        if (!branchName || !branchAdress || !branchPhone || !branchSchedule) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        try {
            const newBrand = {
                name: branchName,
                adress: branchAdress,
                phone: branchPhone,
                schedule: branchSchedule,
            };
            const response = await fetch(ApiBrands, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBrand),
            });
            if (!response.ok) throw new Error("Error al registrar el producto");
            toast.success("Producto registrado con éxito");
            setSuccess("El producto se ha registrado con éxito");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al registrar el producto");
        } finally {
            setLoading(false);
        }
    };

    const deleteBranches = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${ApiBrands}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar el producto");
            toast.success("Producto eliminado con éxito");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al eliminar el producto");
        } finally {
            setLoading(false);
        }
    };

    const updateBranches = (dataBranches) => {
        setId(dataBranches._id);
        setBranchName(dataBranches.name);
        setBranchAdress(dataBranches.adress);
        setBranchPhone(dataBranches.phone);
        setBranchSchedule(dataBranches.schedule);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => {

        e.preventDefault();
        if (!branchName || !branchAdress || !branchPhone || !branchSchedule) {
            setError("Todos los campos son obligatorios");
            toast.error("Por favor completa todos los campos");
            return;
        }
        setLoading(true);
        console.log("id:", id);
        try {
            const updatedBrands = {
                name: branchName,
                adress: branchAdress,
                phone: branchPhone,
                schedule: branchSchedule,
            };
            const response = await fetch(`${ApiBrands}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedBrands),
            });
            if(!response.ok) throw new Error("Error al actualizar el producto");

            toast.success("Producto actualizado con éxito");
            setSuccess("El producto se ha actualizado con éxito");
            cleanData();
            //setActiveTab("list");
            console.log("en funcion update");
            fetchData();
        } catch (error) {
            setError(error.message);
            toast.error("Ocurrió un error al actualizar el producto");
        } finally {
            setLoading(false);
        }
    };

    console.log("Brands:", branches);

    return {
        activeTab,
        setActiveTab,
        id,
        setId,
        branchName,
        setBranchName,
        branchAdress,
        setBranchAdress,
        branchPhone,
        setBranchPhone,
        branchSchedule,
        setBranchSchedule,
        branches,
        loading,
        success,
        error,
        handleSubmit,
        deleteBranches,
        updateBranches,
        handleUpdate,
        cleanData,
        
    };


}

export default useDataBranches;