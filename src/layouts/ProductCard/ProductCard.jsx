import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductItems from "../../data/ItemProduct";

function ProductCard() {
  const quantity = 0;
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      navigation={true}
      autoplay={{
        delay: 3500,
      }}
      // pagination={true}
      loop={true}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        490: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="h-100"
    >
      {ProductItems.items.map((Get, key) => (
        <SwiperSlide key={key} className="h-100">
          <Card className="shadow">
            <a href="">
              <Card.Img src={Get.productImage} className="shadow-sm pa-4" />
            </a>
            <Card.Body>
              <div className="text-truncate font-size-s" style={{ height: 20 }}>
                <span>{Get.productName}...</span>
              </div>
              {/* <Card.Title className="overflow-hidden font-size-m max-height-25 min-height-25">{Get.productName}</Card.Title> */}
              <div className="text-truncate text-left font-size-x">
                <span>{Get.comment}...</span>
              </div>
              <div className="text-danger font-weight-black m-2 text-right">
                <span> ราคา {Get.price} .-</span>
              </div>
              <div className="mt-auto">
                {quantity === 0 ? (
                  <Button
                    className="w-100"
                    type="button"
                    variant="danger"
                    // onClick={() => increaseCartQuantity(Get.id)}
                  >
                    หยิบใส่ตะกร้า
                  </Button>
                ) : (
                  <div
                    className="d-flex align-center flex-column"
                    style={{ gap: ".5rem" }}
                  >
                    <div
                      className="d-flex align-center justify-center"
                      style={{ gap: ".5rem" }}
                    >
                      <Button>-</Button>
                      <div>
                        <span className="fs-3 font-size-m">{quantity}</span>
                        <span className="font-size-m">In Cart</span>
                      </div>
                      <Button>+</Button>
                    </div>
                    <Button variant="danger" size="sm">
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductCard;
