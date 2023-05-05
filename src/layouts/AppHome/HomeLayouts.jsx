import React from "react";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "antd";
// import { useNavigate } from "react-router-dom";

import "../../assets/style/spacing.css";
// import "../../assets/style/global.css";
import "../../assets/style/utils.css";

import ListProduct from "../ProductCard/ProductData";
import ProductCard from "../ProductCard/ProductCard";

function HomeLayouts() {
  // const navigate = useNavigate();
  // const NavigateTo = (urlpath) => {
  //   navigate("/" + urlpath.toLocaleLowerCase());
  // };

  return (
    <div className="mxp-10 text-center bg-white">
      <Row className="w-100 mx-0">
        <Col className="w-25 px-0">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg.map((Get) => (
              <div key={Get.id}>
                <img src={Get.PictureProduct} alt="" className="w-100 pa-1" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col className="w-25 px-0">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg2.map((Get) => (
              <div key={Get.id}>
                <img src={Get.PictureProduct} alt="" className="w-100 pa-1" />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col className="w-25 px-0">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg2.map((Get) => (
              <div key={Get.id}>
                <img src={Get.PictureProduct} alt="" className="w-100 pa-1" />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="w-100 px-0 mx-0 mb-1">
        <Col className="w-100 px-0 mx-0">
          <img src="/images/title_bar2.webp" alt="" className="w-100" />
        </Col>
      </Row>
      <Row className="px-0 mx-0">
        <Col className="">
          <ProductCard />
        </Col>
      </Row>
      <Row className="w-100 px-0 mx-0 mb-1">
        <Col className="w-100 px-0 mx-0">
          <img src="/images/title_bar.webp" alt="" className="w-100 mt-1" />
        </Col>
      </Row>
    </div>
  );
}

export default HomeLayouts;
