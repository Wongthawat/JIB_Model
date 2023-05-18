import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";
import "./ReadProduct.css";
import Magnifier from "react-magnifier";

const ReadProduct = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const Getdata = async () => {
    const response = await axios.get(`${BASE_URL}` + "products/" + id);
    if (response.status === 200) {
      setItem(response?.data);
      console.log(response?.data);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      <div className="col">
        <div className="row mx-0">
          <div className="col-lg-7 col-md-12 px-0 col-offset-1 p-2">
            <div className="pt-2 pl-2">
              <a href="" className="no-underline text-black">
                <h3 className="font-weight-bold">{item.title}</h3>
              </a>
            </div>
            <div className="text-center w-100 ">
              <Magnifier
                src={item.thumbnail}
                mgShape="square"
                className="w-50"
                zoomImgSrc={item.thumbnail}
              />
            </div>
            <div className="pt-3 pl-2">
              <span className="font-size-m">รายละเอียดสินค้าโดยย่อ</span>
            </div>
            <div className="pt-3 pl-2">
              <span className="font-size-s">{item.description}</span>
            </div>
            <hr />
          </div>
          <div className="col-lg-3 col-md-12 border-danger border-3 pa-5">
            <div className="row">
              <div className="col-12">
                <h5>{item.title}</h5>
              </div>
            </div>
            <div className="row">
              <div className="text-center bg-gray-300 rounded">
                <span className=""> รับประกัน 1 - Y </span>
              </div>
            </div>
            <div className="row mt-3 mx-0 text-center">
              <div className="col-4 px-0">
                <span>
                  <h5> ราคา </h5>
                </span>
              </div>
              <div className="col-4 px-0">
                <span>
                  <h3 className="text-danger font-weight-bold">{item.price}</h3>
                </span>
              </div>
              <div className="col-4 px-0">
                <span>
                  <h5> บาท </h5>
                </span>
              </div>
            </div>
            <hr />
            <div className="row mx-0">
              <span className="font-size-s text-success font-bold">
                ส่งฟรี
              </span>
              <div className="col-4 faMinusC text-center">
                <FontAwesomeIcon icon={faMinus} className="text-dark" />
              </div>
              <div className="col-4 border rounded text-center">1</div>
              <div className="col-4 faPlusC text-center">
                <FontAwesomeIcon icon={faPlus} className="text-dark" />
              </div>
            </div>
            <div className="row mx-0">
              <div className="pt-3 text-center px-0">
                <Button className="w-50 p-1" variant="danger">
                  ซื้อเลย
                </Button>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-xl-6 col-lg-12 col-md-12 mt-2 px-1">
                <Button
                  className="w-100 p-1 font-size-s text-white"
                  variant="warning"
                >
                  สาขาที่มีจำหน่าย
                </Button>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 mt-2 px-1">
                <Button
                  className="w-100 p-1 font-size-s text-white"
                  variant="warning"
                >
                  ผ่อนชำระ 0%
                </Button>
              </div>
            </div>
            <hr />
            <div className="row mx-0 align-center">
              <span> ผ่อนชำระ 0% </span>
              <div className="row text-center mt-1">
                <div className="col-xl-2 col-lg-12">
                  <img
                    src="https://www.jib.co.th/web//images/cart_pay/kbank_icon.png"
                    className="w-100"
                  />
                </div>
                <div className="col-xl-2 col-lg-12">
                  <span className="font-size-x"> 0.00% </span>
                </div>
                <div className="col-xl-3 col-lg-12">
                  <span className="font-size-x"> 10 เดือน </span>
                </div>
                <div className="col-xl-5 col-lg-12">
                  <span className="font-size-x"> เดือนละ {"7,900.00"} .- </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="row mx-0 align-center">
              <span> ขนส่ง </span>
              <div className="mt-1">
                <img
                  src="https://www.jib.co.th/web/images/product/warranty-block.png?v=0.004"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <hr />
      </div>
    </div>
  );
};

export default ReadProduct;
