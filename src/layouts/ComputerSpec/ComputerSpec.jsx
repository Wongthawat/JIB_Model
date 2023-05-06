import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ListSet from "./SetSpec";

function ComputerSpec() {
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
    <div>
      <div className="row mx-0">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
          <div className="col-md-12">
            {ListSet.ListSetSpace.map((Get, key) => (
              <ListGroup className="my-2 shadow p-1" key={key}>
                <div className="row align-center mx-0">
                  <div className="col-md-4 text-center px-0">
                    <div className="col-md-12 bg-dark pa-3 rounded">
                      <img src={Get.PictureProduct} alt="" className="img-50"/>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <span className="font-size-s text-muted">{Get.name}</span>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <span className="font-size-s text-danger font-weight-bold">
                      {Get.id} .-
                    </span>
                  </div>
                </div>
              </ListGroup>
            ))}
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-8 col-xxl-9 border">
          <div className="col-md-12">
            {items.map((Get, key) => (
              <div className="row mx-0">
                <div className="col-xxl-3">
                  <img src={Get.coverimage} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSpec;
