import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Responsive from "./Responsive";
import CardPage from "../CardPage/CardPage";
import DataProduct from "../../data/DataProduct";

const CarouselCard = () => {
  const RemoveArrow = ["mobile", "minitablet", "tablet"];

  return (
    <div className="">
      <Carousel
        responsive={Responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={RemoveArrow}
        itemClass="pa-1"
        className="carousel-body"
        // customTransition="all .5"
      >
        {DataProduct.products.map((item) => (
          <div key={item.id}>
              <CardPage
                Idclick={item.id}
                Nameclick={item.title}
                img={item.thumbnail}
                title={item.title}
                desc={item.description}
                stock={item.stock}
                item={item}
                price={item.price}
                namebtn={"หยิบใส่ตะกร้า"}
              />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
