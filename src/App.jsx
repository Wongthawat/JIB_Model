import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppHeader from "./layouts/AppHeader/AppHeader";
import HomeLayouts from "./layouts/AppHome/HomeLayouts";
import AppLogin from "./layouts/AppLogin/AppLogin";
import AppRegister from "./layouts/AppRegister/AppRegister";
import FooterPage from "./components/Footer/FooterPage";
import NavbarPage from "./components/Navbar/NavbarPage";
import ComputerSpec from "./layouts/ComputerSpec/ComputerSpec";
import Shop from "./layouts/Shopping/Shop/Shop"
import Cart from "./layouts/Shopping/Cart/Cart"
import Product from "./layouts/Shopping/Product/Product";

function App() {
  return (
    <div className="app">
        <AppHeader />
        <NavbarPage />
        <div className="mxp-10 bg-white">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<HomeLayouts />} />
            <Route path="/login" element={<AppLogin />} />
            <Route path="/register" element={<AppRegister />} />
            <Route path="/computerspec" element={<ComputerSpec />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
        <FooterPage />
    </div>
  );
}

export default App;
