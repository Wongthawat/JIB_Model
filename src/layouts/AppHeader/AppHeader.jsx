import React, { useState } from "react";
import { Col, Row, Input, Popover, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
    <p>{"รายการสินค้า"}</p>
  </div>
);

const ListOrder = (
  <div>
    <hr />
    <div>
      <Row>
        <Col span={18}>
          <p>{"คอมพิวเตอร์"}</p>
        </Col>
        <Col span={6}>
          <p>{"19,400"}</p>
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
        <Row className="BodyHeader">
          <Col span={3} className="LogoBody">
            <a href="">
              <img
                alt=""
                src={"/images/logo-w.webp"}
                className="ImgLogo"
                onClick={() => NavigateTo("home")}
              />
            </a>
          </Col>
          <Col span={14} className="SearchBar">
            <Search placeholder={"ค้นหารายการ"} />
          </Col>
          <Col span={1} className="IconShipping">
            <Badge count={1}>
              <Popover content={ListOrder} title={Title}>
                <a href="#">
                  <ShoppingCartOutlined className="SizeIcon" />
                </a>
              </Popover>
            </Badge>
          </Col>
          <Col span={3} className="TextRL">
            <Row className="TextStyRL">
              {NavbarHeadData.ListBar.map((Get, key) => (
                <a
                  className="FontsRL"
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
