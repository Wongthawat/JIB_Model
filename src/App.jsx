import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import { ScrollTop } from 'primereact/scrolltop';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css";    

import {
  HomePage,
  LoginPage,
  RegisterPage,
  PageEditSpec,
  CartPage,
  CategoryProductPage,
  ProductSignlePage,
  SearchPage,
  ServicesComplaints,
  Products
} from "./pages/index";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/FooterPage";
import NavbarPage from "./components/Navbar/NavbarPage";
import ModalPage from "./components/Modal/ModalPage"
import QuarterCircle from "./components/SpeedDial/QuarterCircle";

function App() {
  return (
    <CartProvider className="app">
      <BrowserRouter>
        <Header />
        <NavbarPage />
        <ModalPage />
        <div className="mxp-10 bg-white mb-10">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/ComputerSpec" element={<PageEditSpec />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/ServicesComplaints" element={<ServicesComplaints />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </div>
        <FooterPage />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
