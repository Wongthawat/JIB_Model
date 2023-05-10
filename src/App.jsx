import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  PageEditSpec,
  CartPage,
  CategoryProductPage,
  ProductSignlePage,
  SearchPage,
  ServicesComplaints
} from "./pages/index";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/FooterPage";
import NavbarPage from "./components/Navbar/NavbarPage";

function App() {
  return (
    <CartProvider className="app">
      <BrowserRouter>
        <Header />
        <NavbarPage />
        <div className="mxp-10 bg-white mb-10">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/ComputerSpec" element={<PageEditSpec />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/ServicesComplaints" element={<ServicesComplaints />} />
          </Routes>
        </div>
        <FooterPage />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
