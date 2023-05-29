import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { DataView } from "primereact/dataview";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";
import { useCart } from "react-use-cart";
import "primeflex/primeflex.css";
import "./Products.css";

const Products = () => {
  const { addItem } = useCart();
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
      <div className="col-12 sm:col-6 lg:col-4 xl:col-3 p-1 list-items-product border" key={product.id}>
        <div className="align-items-center">
          <div className="align-items-center img-items-product">
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
            <Button
              className="w-100"
              variant="danger"
              size="sm"
              onClick={() => addItem(product.item)}
            >
              <span className="font-size-x">ADD TO SPACE</span>
            </Button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="p-5">
      <div>
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
      </div>
      <div className="mx-0 d-sm-inline">
        <DataView
          value={dataSearch}
          itemTemplate={itemTemplate}
          paginator
          rows={20}
        />
      </div>
    </div>
  );
};

export default Products;
