import React from "react";
import { Row, Col } from "react-bootstrap";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import "../../assets/style/spacing.css";
// import "../../assets/style/global.css";
import "../../assets/style/utils.css";

import ListProduct from "../ProductCard/ProductData";
import ProductCard from "../ProductCard/ProductCard";
import Product from "../Shopping/Product/Product";

function HomeLayouts() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <div className="text-center bg-white">
      <div className="row mx-0">
        <div className="col-md-6 px-0">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg.map((Get) => (
              <div key={Get.id}>
                <img src={Get.PictureProduct} alt="" className="p-1 w-100" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="col-md-3 px-0">
          <div className="col-md-12">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg2.map((Get) => (
                <div key={Get.id}>
                  <img src={Get.PictureProduct} alt="" className="p-1 w-100" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-12">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg3.map((Get) => (
                <div key={Get.id}>
                  <img src={Get.PictureProduct} alt="" className="p-1 w-100" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* <div className="col-md-3 px-0">
          <div className="col-md-12">
            <img src="/images/ImgTab2.webp" alt="" className="p-1" />
          </div>
        </div> */}
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="row mx-0 mb-1">
        <div className="w-100 px-0">
          <img src="/images/title_bar.webp" alt="" className="w-100" />
        </div>
      </div>
      <div className="border p">
        <ProductCard />
      </div>
      <Row className="w-100 mx-0 mb-1">
        <Col className="w-100 px-0">
          <img src="/images/title_bar2.webp" alt="" className="w-100 mt-1" />
        </Col>
      </Row>
    </div>
  );
}

export default HomeLayouts;
