import React, { useState } from "react";
import { Col, Row, Input, Popover } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

// CSS
import '../layouts.css'

const { Search } = Input;
// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);
const ListOrder = (
  <div>
    <hr />
    <div>
    <Row>
      <Col span={18}><p>{"คอมพิวเตอร์"}</p></Col>
      <Col span={6}><p>{"19,400"}</p></Col>
    </Row>
    </div>
    <hr />
  </div>
);

function AppHeader() {
  return (
    <Row>
      <Col className="ContainerHeader">
        <Row className="BodyHeader">
          <Col span={3} className="LogoBody">
            <a href="">
              <img alt="" src={'/images/logo-w.webp'} className="ImgLogo" />
            </a>
          </Col>
          <Col span={16} style={{ padding: 20 }}>
            <Search placeholder={"ค้นหารายการ"} />
          </Col>
          <Col span={3}>
            <Popover content={ListOrder} title="รายการสินค้า">
                <a href="#">
                  <ShoppingCartOutlined className="SizeIcon"/>
                </a>
            </Popover>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default AppHeader;
