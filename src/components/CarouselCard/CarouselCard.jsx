import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Responsive from "./Responsive";
import CardPage from "../CardPage/CardPage";
import DataProduct from "../../data/DataProduct";

const CarouselCard = () => {
  const RemoveArrow = ["mobile", "minitablet", "tablet"];

  const ReadProducts = (id, name) => {
    window.location = "/product/readproduct/" + id + "/" + name;
  };
  return (
    <div className="">
      <Carousel
        responsive={Responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={RemoveArrow}
        itemClass="pa-1"
        // customTransition="all .5"
      >
        {DataProduct.products.map((item) => (
          <div key={item.id} onClick={() => ReadProducts(item.id, item.title)}>
            <a>
              <CardPage
                img={item.thumbnail}
                title={item.title}
                desc={item.description}
                stock={item.stock}
                item={item}
                price={item.price}
                namebtn={"หยิบใส่ตะกร้า"}
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
