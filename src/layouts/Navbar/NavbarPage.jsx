import React from "react";
import { Row } from "antd";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarData from "./NavbarData";

function NavbarPage() {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="me-auto">
        <Row className="NavbarStyle">
          {NavbarData.ListBar.map((Get, Key) => (
            <a className="NavFonts">
              <p>{Get.name}</p>
            </a>
          ))}
        </Row>
      </Nav>
    </Navbar>
    // <Navbar bg="light" variant="light">
    //   <Nav className="me-auto">
    //     <Row className="NavbarStyle">
    //       {NavbarData.ListBar.map((Get, Key) => (
    //         <p className="NavFonts" key={Key}>
    //           <a href="">{Get.name}</a>
    //         </p>
    //       ))}
    //     </Row>
    //   </Nav>
    // </Navbar>
  );
}

export default NavbarPage;
