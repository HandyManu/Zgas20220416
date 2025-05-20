import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import CardBlog from "./components/blog/cardBlog";
import Home from "./pages/inicio"; 

function App() {
  return (
    <Router>
      <Nav />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
