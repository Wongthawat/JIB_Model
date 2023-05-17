import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";
import "./ReadProduct.css";

const ReadProduct = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const Getdata = async () => {
    const response = await axios.get(`${BASE_URL}` + "products/" + id);
    if (response.status === 200) {
      setItems(response?.data);
      console.log(response?.data);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      <div className="row mx-0">
        <div className="col-8 px-0">
          <div className="">
            <a href="" className="no-underline text-black">
              <h3>{items.title}</h3>
            </a>
          </div>
          <div className="text-center border">
            <img src={items.thumbnail} className="border" />
          </div>
        </div>
        <div className="col-4 border"></div>
      </div>
    </div>
  );
};

export default ReadProduct;
