import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "./CardPage.css";

const CardPage = (props) => {
  const { addItem } = useCart();

  const ReadProducts = (id, name) => {
    window.location = '/product/readproduct/' + id + '/' + name
  }

  return (
    <Card className="w-100 CardBody">
      <a onClick={() => ReadProducts(props.Idclick, props.Nameclick)}>
        <Card.Img src={props.img} className="pa-4 img-200 CardImg" />
      </a>
      <Card.Body>
        <div className="text-truncate font-size-s" style={{ height: 20 }}>
          <span>{props.title}</span>
        </div>
        <div className="text-truncate text-left font-size-x">
          <span>{props.desc}</span>
        </div>
        <div className="font-weight-black m-2 text-right">
          <span className="font-size-s text-truncate">
            คงเหลือ {props.stock}
          </span>
        </div>
        <div className="text-danger font-weight-black m-2 text-right">
          <span className="font-size-s text-truncate">
            ราคา {props.price} .-
          </span>
        </div>
        <div className="mt-auto">
          <Button
            className="w-100"
            type="button"
            variant="danger"
            onClick={() => addItem(props.item)}
          >
            <span>{props.namebtn}</span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPage;
