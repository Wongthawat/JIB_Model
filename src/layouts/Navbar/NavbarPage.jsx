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
        <Row className="NavbarStyle">
          {NavbarData.ListBar.map((Get, Key) => (
            <a className="NavFonts" Key={Key} onClick={() => NavigateTo(Get.list)}>
              <p>{Get.name}</p>
            </a>
          ))}
        </Row>
      </Nav>
    </Navbar>
  );
}

export default NavbarPage;
