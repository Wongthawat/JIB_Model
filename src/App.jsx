import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";

import AppHeader from "./layouts/AppHeader/AppHeader";
import HomeLayouts from "./layouts/AppHome/HomeLayouts";
import AppLogin from "./layouts/AppLogin/AppLogin";

function App() {
  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeLayouts />} />
        <Route path="/login" element={<AppLogin />} />
      </Routes>
    </div>
  );
}

export default App;
