import React, { useState } from "react";
import { Col, Row, Input, Popover, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// CSS
import "../layouts.css";

const { Search } = Input;
// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);

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
          <Col span={16} style={{ padding: 20 }}>
            <Search placeholder={"ค้นหารายการ"} />
          </Col>
          <Col span={3}>
            <Badge count={1}>
              <Popover content={ListOrder} title="รายการสินค้า">
                <a href="#">
                  <ShoppingCartOutlined className="SizeIcon" />
                </a>
              </Popover>
            </Badge>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AppHeader;
