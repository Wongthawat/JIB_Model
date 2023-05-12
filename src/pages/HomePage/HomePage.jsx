import React from "react";
import { Carousel } from "antd";
import MenuPage from "../../components/MenuPage/MenuPage";
import "../../assets/style/spacing.css";
import "../../assets/style/utils.css";
import ListProduct from "../../data/ItemImg";
import ImagePage from "../../components/ImagePage/ImagePage";

import CarouselCard from "../../components/CarouselCard/CarouselCard";
import CarouselCard2 from "../../components/CarouselCard/CarouselCard2";

const HomePage = () => {
  return (
    <div className="text-center bg-white">
      <div className="row mx-0">
        <div className="col-md-3 px-0 hidden-on-lg">
          <div className="">
            <MenuPage />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <Carousel autoplay effect="fade">
            {ListProduct.ListProImg.map((Get) => (
              <div key={Get.id}>
                <ImagePage img={Get.PictureProduct} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="col-md-3 px-0">
          <div className="col-md-12">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg2.map((Get) => (
                <div key={Get.id}>
                  <ImagePage img={Get.PictureProduct} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-12">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg3.map((Get) => (
                <div key={Get.id}>
                  <ImagePage img={Get.PictureProduct} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col-md-3 px-0 on-show-lg">
          <div className="col-md-12 hidden-on-sm">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg2.map((Get) => (
                <div key={Get.id}>
                  <ImagePage img={Get.PictureProduct} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-12 hidden-on-sm">
            <Carousel autoplay effect="fade">
              {ListProduct.ListProImg3.map((Get) => (
                <div key={Get.id}>
                  <ImagePage img={Get.PictureProduct} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="row mx-0 mb-1">
        <div className="w-100 px-0">
          <img src="/images/title_bar.webp" alt="" className="w-100" />
        </div>
      </div>
      <div className="px-3">
        <CarouselCard />
      </div>
      <div className="row mx-0 mb-1 mt-3">
        <div className="px-0">
          <img src="/images/title_bar2.webp" alt="" className="w-100 mt-1" />
        </div>
      </div>
      <div className="px-3">
        <CarouselCard2 />
      </div>
    </div>
  );
};

export default HomePage;
