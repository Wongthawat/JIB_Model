import React from "react";
import { Carousel } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../layouts.css";

function HomeLayouts() {
  return (
    <div className="CarouselLayout">
      <Row className="HomeBody">
        <Row>
          <Col className="border">
            <Carousel effect="fade" autoplay>
              <div>
                <img src="/images/Home1.webp" alt="" />
              </div>
              <div>
                <img src="/images/Home2.webp" alt="" />
              </div>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col span={24}>
            <img src="/images/title_bar.webp" alt="" className="ImgHome" />
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default HomeLayouts;
