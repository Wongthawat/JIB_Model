import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Responsive from "./Responsive";
import CardPage from "../CardPage/CardPage";
import DataProduct from "../../data/ItemProduct";

const CarouselCard = () => {
  const RemoveArrow = ["mobile", "minitablet", "tablet"];
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
        {DataProduct.items.map((item, index) => (
          <div key={item.id}>
            <CardPage
              img={item.productImage}
              title={item.productName}
              desc={item.comment}
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
