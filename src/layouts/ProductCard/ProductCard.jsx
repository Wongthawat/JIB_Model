import React, { useEffect, useState } from "react";
import { Collapse, Card, Button } from "antd";
import axios from "axios";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

function ProductCard() {
  const { Panel } = Collapse;
  // const { Meta } = Card;
  const baseURL = "https://www.melivecode.com/api/attractions";
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetProData();
  }, []);

  const GetProData = async () => {
    try {
      const response = await axios.get(`${baseURL}`);
      if (response.status === 200) {
        setItems(response?.data);
        console.log(response?.data);
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  const settings = {
    dots: true,
    Infinity: true,
    speed: 2500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroil: 4,
  };

  return (
    <div className="w-100 mb-5">
      <Slider {...settings}>
        {items.map((Get, key) => (
          <Card
            key={key}
            hoverable
            cover={<img alt="example" src={Get.coverimage} />}
            className="pa-1 border-dark min-height-450"
          >
            <div>
              <Button className="text-white w-100" type="primary" danger>
                หยิบใส่ตะกร้า
              </Button>
            </div>
            <hr />
            <div>
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header={Get.name}>
                  <p>{Get.detail}</p>
                </Panel>
              </Collapse>
            </div>
            <hr />
            <div className="text-right">
              <span>ราคา</span>
              <span className="ml-3 font-weight-bold text-danger">{Get.id} .-</span>
            </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCard;
