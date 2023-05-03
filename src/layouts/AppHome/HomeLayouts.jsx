import React, { useState } from "react";
import { Col, Row, Carousel } from "antd";
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
    <Col className="mxp-10 text-center pa-1 bg-white">
      <Row className="w-100 h-100 pt-2">
        <Col span={10} className="">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg.map((Get) => (
              <div key={Get.id}>
                <img
                  src={Get.PictureProduct}
                  alt=""
                  className="w-100 img-450"
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={10} className="w-100">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg2.map((Get) => (
              <div key={Get.id}>
                <img
                  src={Get.PictureProduct}
                  alt=""
                  className="w-100 img-450"
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={4} className="w-100">
          <div className="">
            <img src="/images/img_tab.webp" alt="" className="img-450" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img src="/images/title_bar2.webp" alt="" className="w-100 mt-1" />
        </Col>
      </Row>
      <Col className="">
        <ProductCard />
      </Col>
      <Row>
        <img src="/images/title_bar.webp" alt="" className="w-100 mt-1" />
      </Row>
      <Col>
        <ProductCard />
      </Col>
    </Col>
  );
}

export default HomeLayouts;
