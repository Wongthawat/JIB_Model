import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "react-use-cart";
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
  ServicesComplaints,
  Products,
  ReadProduct,
  ProfileInfo,
  BranchContact
} from "./pages/index";
import Header from "./components/Header/Header";
import FooterPage from "./components/Footer/FooterPage";
import NavbarPage from "./components/Navbar/NavbarPage";

function App() {
  return (
    <CartProvider className="app">
      <Header />
      <NavbarPage />
      <div className="mxp-10 bg-white mb-10">
        <Routes>
          {/* <Route path="*" element={} /> */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/ComputerSpec" element={<PageEditSpec />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/ServicesComplaints" element={<ServicesComplaints />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/readproduct/:id/:name" element={<ReadProduct />} />
          <Route path="/ProfileInfo/:firstname" element={<ProfileInfo />} />
          <Route path="/BranchContact" element={<BranchContact />} />
        </Routes>
      </div>
      <FooterPage />
    </CartProvider>
  );
}

export default App;
