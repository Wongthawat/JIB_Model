import React, { useState } from "react";
import { Col, Row, Input, Popover, Badge } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLine } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavbarHeadData from "../Navbar/NavbarHeadData";

// CSS
import "../layouts.css";

const { Search } = Input;
// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);

const Title = (
  <div>
    <span>{"รายการสินค้า"}</span>
  </div>
);

const ListOrder = (
  <div>
    <hr />
    <div className="wp-300">
      <Row>
        <Col span={18}>
          <span>{"คอมพิวเตอร์"}</span>
        </Col>
        <Col span={6}>
          <span>{"19,400"}</span>
        </Col>
      </Row>
    </div>
    <hr />
  </div>
);

function AppHeader() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };
  return (
    <Row>
      <Col className="ContainerHeader">
        <Row className="justify-center align-center">
          <Col span={3} className="justify-center text-center">
            <a href="">
              <img
                alt=""
                src={"/images/logo-w.webp"}
                className="wp-120"
                onClick={() => NavigateTo("home")}
              />
            </a>
          </Col>
          <Col span={14} className="pa-4">
            <Search placeholder={"ค้นหารายการ"} />
          </Col>
          <Col span={1}>
            <Badge count={1}>
              <Popover content={ListOrder} title={Title}>
                <a href="#">
                  <FontAwesomeIcon icon={faCartShopping} size="2xl" className="text-white" />
                </a>
              </Popover>
            </Badge>
          </Col>
          <Col span={3}>
            <Row className="justify-center">
              {NavbarHeadData.ListBar.map((Get, key) => (
                <a
                  className="pxp-5 text-white"
                  key={key}
                  onClick={() => NavigateTo(Get.list)}
                >
                  <p>{Get.name}</p>
                </a>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AppHeader;
