import React, { useEffect, useState } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import ListSet from "./SetSpec";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";
import CardPage from "../../components/CardPage/CardPage";

function ComputerSpec() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  const Getdata = () => {
    axios.get(BASE_URL + "products").then((result) => {
      const { data } = result;
      console.log(data);
      setItems(data.products);
    });
  };

  useEffect(() => {
    Getdata();
  }, []);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  return (
    <div>
      <div className="row mx-0">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
          <div className="col-md-12">
            <ListGroup className="my-2 shadow p-1">
              {ListSet.ListSetSpace.map((Get) => (
                <ListGroup.Item key={Get.id}>
                  <div className="row align-center mx-0">
                    <div className="col-md-4 text-center px-0">
                      <div className="col-md-12 bg-dark pa-3 rounded">
                        <img src={Get.PictureProduct} className="img-50" />
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <span className="font-size-s text-muted">
                          {Get.name}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <span className="font-size-s text-danger font-weight-bold">
                        {Get.id} .-
                      </span>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-hide col-lg-6 col-xl-8 col-xxl-9">
          <div className="col-md-12">
            <Form className="my-3">
              <Form.Group className="">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={filter}
                  onChange={searchText.bind(this)}
                />
              </Form.Group>
            </Form>
            <div className="row mx-0">
              {dataSearch.map((Get) => (
                <div className="col-md-12 col-lg-6 col-xl-3 px-1" key={Get.id}>
                  <Card className="w-100 text-center shadow my-1">
                    <Card.Img
                      variant="top"
                      src={Get.images[0]}
                      className="img-200 pa-2 shadow"
                    />
                    <Card.Body>
                      <div className="text-truncate font-size-s">
                        <span>{Get.title}</span>
                      </div>
                      <div className="text-truncate font-size-s">
                        <span>{Get.description}</span>
                      </div>
                      <div className="text-right font-weight-black m-2">
                        <span className="text-danger">{Get.price} .-</span>
                      </div>
                      <Button variant="danger" className="my-2 w-100" size="sm">
                        <span className="font-size-x">ADD TO SPACE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSpec;
