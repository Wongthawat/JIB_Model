import React from "react";
import { Col, Row, Carousel } from "antd";
import { useNavigate } from "react-router-dom";

import "../layouts.css";

function HomeLayouts() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <Col className="HomeBody">
      <Row className="HeadBody">
        <Col span={10} style={{ padding: 5 }}>
          <Carousel autoplay>
            <div>
              <img src="/images/Home1.webp" alt="" className="ImgHome" />
            </div>
            <div>
              <img src="/images/Home2.webp" alt="" className="ImgHome" />
            </div>
          </Carousel>
        </Col>
        <Col span={5} style={{ padding: 5 }}>
          <div>
            <img src="/images/Home3.webp" alt="" className="ImgHome" />
          </div>
        </Col>
        <Col span={9} style={{ padding: 5 }}>
            <Col span={15}>
              <div>
                <img src="/images/Home7.webp" alt="" className="ImgHome2"/>
              </div>
            </Col>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img src="/images/title_bar.webp" alt="" className="Titlebar" />
        </Col>
      </Row>
    </Col>
  );
}

export default HomeLayouts;
