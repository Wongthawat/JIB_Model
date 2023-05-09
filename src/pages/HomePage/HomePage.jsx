import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";

import "../../assets/style/spacing.css";
import "../../assets/style/utils.css";

import ListProduct from "../../data/ItemImg";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import SpinnerLoad from "../../components/Spinner/SpinnerLoad"

const HomePage = () => {
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
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <div className="row mx-0 mb-1">
        <div className="w-100 px-0">
          <img src="/images/title_bar.webp" alt="" className="w-100" />
        </div>
      </div>
      <div className="">
        <CarouselCard />  
      </div>
      <div className="row mx-0 mb-1 mt-3">
        <div className="px-0">
          <img src="/images/title_bar2.webp" alt="" className="w-100 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;