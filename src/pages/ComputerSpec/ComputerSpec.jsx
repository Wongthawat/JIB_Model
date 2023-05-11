import React, { useEffect, useState } from "react";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { BASE_URL } from "../../utils/apiURL";
import ListSet from "./SetSpec";
import axios from "axios";
import "primeflex/primeflex.css";

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

  const itemTemplate = (product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-3 p-1">
        <div className="pa-3 border-1 surface-border border-round">
          <div className="align-items-center">
            <img className="img-200 w-100 pa-2" src={product.images[0]} />
          </div>
          <div className="font-size-m text-truncate text-center">
            {product.title}
          </div>
          <div className="font-size-s text-truncate">{product.description}</div>
          <div className="text-right">
            <span className="font-size-s text-danger">{product.price} .-</span>
          </div>
          <div className="text-center font-size-m">
            <Button className="w-100" variant="danger" size="sm">
              <span className="font-size-x">ADD TO SPACE</span>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="row mx-0">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
          <div className="col-md-12">
            <ListGroup className="my-3 shadow">
              {ListSet.ListSetSpace.map((Get) => (
                <ListGroup.Item key={Get.id}>
                  <div className="row align-center mx-0">
                    <div className="col-md-4 text-center px-0">
                      <div className="col-md-12 bg-dark pa-1 rounded">
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
            <Form className="my-3 shadow border-round">
              <Form.Group className="">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  value={filter}
                  onChange={searchText.bind(this)}
                />
              </Form.Group>
            </Form>
            <div className="mx-0 d-sm-inline">
              <DataView
                value={dataSearch}
                itemTemplate={itemTemplate}
                paginator
                rows={12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSpec;
