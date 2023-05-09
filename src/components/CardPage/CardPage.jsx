import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

const CardPage = (props) => {
  const { addItem } = useCart();

  return (
    <Card className="w-100">
      <Card.Img src={props.img} className="shadow-sm pa-4" />
      <Card.Body>
        <div className="text-truncate font-size-s" style={{ height: 20 }}>
          <span>{props.title}</span>
        </div>
        <div className="text-truncate text-left font-size-x">
          <span>{props.desc}</span>
        </div>
        <div className="text-danger font-weight-black m-2 text-right">
          <span className="font-size-s text-truncate"> ราคา {props.price} .-</span>
        </div>
        <div className="mt-auto">
          <Button
            className="w-100"
            type="button"
            variant="danger"
            onClick={() => addItem(props.item)}
          >
            {props.namebtn}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPage;
