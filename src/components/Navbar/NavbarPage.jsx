import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import NavbarData from "./NavbarData";
import { useNavigate } from "react-router-dom";

function NavbarPage() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <div className="pxp-10 bg-white">
      <Navbar expand="xl">
        <Navbar.Toggle aria-controls="navbarScroll" className="mx-0 ml-auto w-100"/>
        <Navbar.Collapse id="navbarScroll" className="w-100">
          <Nav
            className="mr-auto my-2 my-lg-0 w-100"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
              {NavbarData.ListBar.map((Get, key) => (
                <Nav.Link
                  key={key}
                  onClick={() => NavigateTo(Get.list)}
                  className="font-size-s"
                >
                  {Get.name}
                </Nav.Link>
              ))}
            {/* <Nav className="my-2 my-lg-0"> */}
              {/* <Nav.Link
                className="font-size-s"
                onClick={() => NavigateTo("register")}
              >
                สมัครสมาชิก
              </Nav.Link>

              <Nav.Link
                className="font-size-s"
                onClick={() => NavigateTo("login")}
              >
                เข้าสู่ระบบ
              </Nav.Link> */}
            {/* </Nav> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarPage;
