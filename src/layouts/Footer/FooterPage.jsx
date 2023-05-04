import React from "react";
import { Col, Row, Layout } from "antd";
import FooterData from "./FooterData";

function FooterPage() {
  const { Footer } = Layout;

  return (
    <Col className="bg-dove-gray text-center mt-10">
      <Row className="justify-center align-center text-white pxp-10 border-top-bay-of-many">
        {FooterData.headFooter.map((Get, key) => (
          <Col span={4} key={key} className="mt-5">
            <p>{Get.name}</p>
            <li>
              <p></p>
            </li>
          </Col>
        ))}
      </Row>
      {/* <hr /> */}
      <Footer className="bg-mine-shaft text-white py-1">
        <p>2023 JIB COMPUTER GROUP All rights reserved</p>
      </Footer>
    </Col>
  );
}

export default FooterPage;
