import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Productos from "./pages/products";
import Branches from "./pages/branches";
import Costumers from "./pages/costumers";


import Nav from "./components/Nav";
import Home from "./pages/inicio"; 

function App() {
  return (
    <Router>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/branch" element={<Branches />} />
          <Route path="/costumers" element={<Costumers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
