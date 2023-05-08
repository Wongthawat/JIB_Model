import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"

import "../../assets/style/spacing.css";
// import "../../assets/style/global.css";
import "../../assets/style/utils.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Responsive from "../../components/CarouselCard/Responsive";
import ListProduct from "../../data/ItemImg";
import CardPage from "../../components/CardPage/CardPage";
import DataProduct from "../../data/ItemProduct";

const HomePage = () => {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <div className="pxp-10">
        <Slider {...settings} className="">
          {DataProduct.items.map((item, index) => (
            <CardPage
              key={index}
              img={item.productImage}
              title={item.productName}
              desc={item.comment}
              item={item}
              price={item.price}
              namebtn={"หยิบใส่ตะกร้า"}
            />
          ))}
        </Slider>
      </div>
      <div className="row mx-0 mb-1 mt-3">
        <div className="px-0">
          <img src="/images/title_bar2.webp" alt="" className="w-100 mt-1" />
        </div>
      </div>
      {/* <div className="mx-0">
        {data.items.map((item, index) => (
          <Itemcard
            className=""
            productImage={item.productImage}
            productName={item.productName}
            comment={item.comment}
            price={item.price}
            item={item}
            key={index}
          />
        ))}
      </div> */}
    </div>
  );
};

export default HomePage;
