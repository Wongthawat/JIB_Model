import React from "react";

const ServicesComplaints = () => {
  return (
    <div className="row justify-center align-center text-center">
      <div className="">
        <iframe
          className="w-50 min-height-450 p-5"
          src="https://www.youtube.com/embed/ibs7XmulqSI"
          title="ซื้อสินค้าไอที กับ JIB ONLINE ดียังไง?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <div>
          <img src="/images/qrcode.webp" alt="" className="img-200"/>
        </div>
      </div>
    </div>
  );
};

export default ServicesComplaints;
