import React from "react";
import { Row } from "antd";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarHeadData from "./NavbarHeadData";
import { useNavigate } from "react-router-dom";

function NavbarHead() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <Navbar className="BodyNavHead">
      <Row className="NavbarHead">
        {NavbarHeadData.ListBar.map((Get, Key) => (
          <a
            className="NavFontsHd"
            Key={Key}
            onClick={() => NavigateTo(Get.list)}
          >
            <p>{Get.name}</p>
          </a>
        ))}
      </Row>
    </Navbar>
  );
}

export default NavbarHead;
