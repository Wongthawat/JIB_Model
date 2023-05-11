import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/apiURL"
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Responsive from "./Responsive";
import CardPage from "../CardPage/CardPage";

const CarouselCard2 = () => {
  const [items, setItems] = useState([]);
  const RemoveArrow = ["mobile", "minitablet", "tablet"];

  const Getdata = () => {
    axios.get(BASE_URL+"products").then(result=>{
        const {data} = result;
        console.log(data)
        setItems(data.products)
    })
  }

  useEffect (() => {
    Getdata();
  }, [])

  return (
    <div className="pxp-5">
      <Carousel
        responsive={Responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={RemoveArrow}
        itemClass="pa-1"
        // customTransition="all .5"
      >
        {items.map((item) => (
          <div key={item.id}>
            <CardPage
              img={item.images[0]}
              title={item.title}
              desc={item.description}
              item={item}
              stock={item.stock}
              price={item.price}
              namebtn={"หยิบใส่ตะกร้า"}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard2;
