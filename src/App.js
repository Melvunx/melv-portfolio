import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Formation from "./pages/Formation";
import Experience from "./pages/Experience";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
