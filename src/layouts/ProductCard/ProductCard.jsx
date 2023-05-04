import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
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

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        type: "fraction",
      }}
      loop={true}
      history={{
        key: "slide",
      }}
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
      modules={[Pagination, History, Navigation, Autoplay]}
      className="mySwiper"
    >
      {/* {items.map((Get, index) => (
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src={Get.coverimage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))} */}
      {items.map((Get, index) => (
      <SwiperSlide key={index}>
        <Card className="">
          <Card.Img src={Get.coverimage} className="pa-1"/>
          <Card.Body>
            <Card.Title>{Get.name}</Card.Title>
            <Card.Text>{Get.detail}</Card.Text>
            <Button>หยิบใส่ตะกร้า</Button>
          </Card.Body>
        </Card>
      </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductCard;
