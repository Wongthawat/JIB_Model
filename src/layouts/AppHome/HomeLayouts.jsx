import React from "react";
import { Col, Row, Carousel } from "antd";
import { useNavigate } from "react-router-dom";

import "../layouts.css";
import ListProduct from "../../data/ProductData";

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
            {ListProduct.ListProImg.map((Get) => (
              <div key={Get.id}>
                <img src={Get.PictureProduct} alt="" className="ImgHome" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={5} style={{ padding: 5 }}>
          <div>
            <img src="/images/Home3.webp" alt="" className="ImgHome" />
          </div>
        </Col>
        <Col span={9} className="BodyBaner">
          <Carousel autoplay>
            {ListProduct.Baner.map((Get) => (
              <div key={Get.id}>
                <img src={Get.ImgBaner} alt="" className="ImgHome2" />
              </div>
            ))}
          </Carousel>
          <hr />
          <Carousel autoplay>
            {ListProduct.Baner2.map((Get) => (
              <div key={Get.id}>
                <img src={Get.ImgBaner} alt="" className="ImgHome2" />
              </div>
            ))}
          </Carousel>
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
