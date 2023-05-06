import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductCard() {
  const baseURL = "https://www.melivecode.com/api/attractions";
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetProData();
  }, []);

  const GetProData = async (props) => {
    try {
      const response = await axios.get(`${baseURL}`);
      if (response.status === 200) {
        setItems(response?.data);
        console.log(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        delay: 2500,
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
    >
      {items.map((Get, key) => (
        <SwiperSlide key={key}>
          <Card className="shadow">
            <a href="">
              <Card.Img src={Get.coverimage} style={{ objectFit: "cover"}}/>
            </a>
            <Card.Body>
              <Card.Title className="font-size-m" >{Get.name}</Card.Title>
              <div className="text-left overflow-auto max-height-50 min-height-50 font-size-x">
                <span>{Get.detail}</span>
              </div>
              <div className="text-danger font-weight-black m-2 text-right">
                <span> ราคา {Get.id} .-</span>
              </div>
              <Button
                className="w-100"
                type="button"
                variant="danger"
                onClick={() => NavigateTo(Get.name)}
              >
                หยิบใส่ตะกร้า
              </Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductCard;
