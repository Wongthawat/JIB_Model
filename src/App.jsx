import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";

import AppHeader from "./layouts/AppHeader/AppHeader";
import HomeLayouts from "./layouts/AppHome/HomeLayouts";
import AppLogin from "./layouts/AppLogin/AppLogin";
import FooterPage from "./layouts/Footer/FooterPage"
import NavbarPage from "./layouts/Navbar/NavbarPage";
import NavbarHead from "./layouts/Navbar/NavbarHead"

function App() {
  return (
    <div>
      <NavbarHead />
      <AppHeader />
      <NavbarPage />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeLayouts />} />
        <Route path="/login" element={<AppLogin />} />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
