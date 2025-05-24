import React, { useEffect } from "react";
import NavBar from "./NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Products from "../pages/products";
import Branches from "../pages/branches";
import Costumers from "../pages/costumers";
import { PrivateRoute } from "./PrivateRoute";
import { useAuth } from "../context/AuthContext";


function Navegation() {
  //en el frontned manejo la autenticacion con cookie osea obtengo lo que 
  //devuelve el backend y lo guardo en una cookie
  //y en el frontend lo guardo en el contexto
  const navigate = useNavigate();

  useEffect(() => {
    if (authCokie) {
      navigate("/dashboard");
    }
  }, [authCokie]);

  return (
    <>
      <NavBar />
      <Routes>
        {!authCokie ? <Route path="/" element={<Login />} /> : null}

        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/costumers" element={<Costumers />} />          
        </Route>
      </Routes>
    </>
  );
}
export default Navegation;