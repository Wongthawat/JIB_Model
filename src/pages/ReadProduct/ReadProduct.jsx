import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";
import "./ReadProduct.css";
import Magnifier from "react-magnifier";
// import ReactImageMagnify from 'react-image-magnify';

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

  const { items, updateItemQuantity, removeItem, totalItems, cartTotal } =
    useCart();

  return (
    <div>
      <div className="row mx-0">
        <div className="col-lg-7 col-md-12 px-0 col-offset-1">
          <div className=" pa-5 ">
            <a href="" className="no-underline text-black">
              <h3 className="font-weight-bold">{item.title}</h3>
            </a>
          </div>
          <div className="text-center w-100">
            <Magnifier
              src={item.thumbnail}
              mgShape="square"
              className="w-50 border"
            />
          </div>
          <div className="pa-5">
            <span>รายละเอียดสินค้าโดยย่อ</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 border-danger border-3 pa-5">
          <div className="row">
            <div className="col-12">
              <h5>{item.title}</h5>
            </div>
          </div>
          <div className="row">
            <div className="text-center bg-gray-300 rounded">
              <span className="">รับประกัน 1 - Y </span>
            </div>
          </div>
          <div className="row mt-3 mx-0 text-center">
            <div className="col-4 px-0">
              <span>
                <h5>ราคา</h5>
              </span>
            </div>
            <div className="col-4 px-0">
              <span>
                <h3 className="text-danger font-weight-bold">{item.price}</h3>
              </span>
            </div>
            <div className="col-4 px-0">
              <span>
                <h5>บาท</h5>
              </span>
            </div>
          </div>
          <hr />
          <div className="row mx-0 text-center">
            <div className="col-4 faMinusC">
              <FontAwesomeIcon icon={faMinus} className="text-dark" />
            </div>
            <div className="col-4 border rounded">1</div>
            <div className="col-4 faPlusC">
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
              <Button className="w-100 p-1 font-size-s text-white" variant="warning">
                สาขาที่มีจำหน่าย
              </Button>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 mt-2 px-1">
              <Button className="w-100 p-1 font-size-s text-white" variant="warning">
                ผ่อนชำระ 0%
              </Button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ReadProduct;
