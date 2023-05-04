import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import AppHeader from "./layouts/AppHeader/AppHeader";
import HomeLayouts from "./layouts/AppHome/HomeLayouts";
import AppLogin from "./layouts/AppLogin/AppLogin";
import AppRegister from "./layouts/AppRegister/AppRegister"
import FooterPage from "./layouts/Footer/FooterPage"
import NavbarPage from "./layouts/Navbar/NavbarPage";

function App() {
  return (
    <div>
      <AppHeader />
      <NavbarPage />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<HomeLayouts />} />
        <Route path="/login" element={<AppLogin />} />
        <Route path="/register" element={<AppRegister />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
