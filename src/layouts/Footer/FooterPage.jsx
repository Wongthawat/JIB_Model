import React from "react";
import { Col, Row, Layout } from "antd";
import FooterData from "./FooterData";

function FooterPage() {
  const { Footer } = Layout;

  return (
    <Col className="FooterBody">
      <Row className="BodyHeadFoot">
        {FooterData.headFooter.map((Get, Key) => (
          <Col span={4} key={Get.id}>
            <p>{Get.name}</p>
            <li>
              <p></p>
            </li>
          </Col>
        ))}
      </Row>
      {/* <hr /> */}
      <Footer className="StyFooter">
        2023 JIB COMPUTER GROUP All rights reserved
      </Footer>
    </Col>
  );
}

export default FooterPage;
