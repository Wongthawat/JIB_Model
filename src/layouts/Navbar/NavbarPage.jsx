import React from "react";
import { Row } from "antd";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarData from "./NavbarData";
import { useNavigate } from "react-router-dom";


function NavbarPage() {

  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <Navbar bg="light" variant="light">
      <Nav className="me-auto">
        <Row className="justify-center">
          {NavbarData.ListBar.map((Get, key) => (
            <a className="px-3 text-dark" key={key} onClick={() => NavigateTo(Get.list)}>
              <p>{Get.name}</p>
            </a>
          ))}
        </Row>
      </Nav>
    </Navbar>
  );
}

export default NavbarPage;
