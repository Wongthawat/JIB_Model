import React from "react";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartPage.css";

const CartPage = () => {
  const { items, updateItemQuantity, removeItem, totalItems, cartTotal } =
    useCart();

  return (
    <>
      <div className="pa-10">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="">
              <div className="font-size-lg">
                ตะกร้าสินค้า
                <span className="text-danger font-weight-medium">
                  ({totalItems})
                </span>
              </div>
            </div>
            <hr />
            {items.map((item, index) => (
              <div className="col-md-12 col-sm-12" key={index}>
                <div className="row mx-0 justify-center align-center">
                  <div className="col-md-12 col-lg-2 text-center">
                    <img src={item.images[0]} className="img-75" />
                  </div>
                  <div className="col-md-12 col-lg-4">
                    <div className="text-truncate text-center font-size-s">
                      {item.title}
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-3 text-center">
                    <div className="text-danger font-size-s">
                      ฿ {item.price} .-
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-2 text-center">
                    <div className="row">
                      <div
                        className="col-4 faMinusC"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FontAwesomeIcon icon={faMinus} className="text-dark" />
                      </div>
                      <div className="font-size-s col-4 border rounded">
                        {item.quantity}
                      </div>
                      <div
                        className="col-4 faPlusC"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FontAwesomeIcon icon={faPlus} className="text-dark" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 col-lg-1 text-center faCanC"
                    onClick={() => removeItem(item.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="1x"
                      className="text-dark"
                    />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="col-md-12 col-lg-4 bg-sand rounded-xxl shadow-sm">
            <div className="bg-white ma-5 pa-4 font-size-s rounded-xxl shadow-sm">
              <div className="row">
                <span className="col-6">ยอดรวม</span>
                <span className="col-6 text-right"> ฿ {cartTotal}</span>
              </div>
              <div className="row">
                <span className="col-6 text-danger">ส่วนลด</span>
                <span className="col-6 text-right text-danger"> ฿ {"0"}</span>
              </div>
              <hr />
              <div className="row">
                <span className="col-6">ยอดรวมสุทธิ</span>
                <span className="col-6 text-right"> ฿ {cartTotal}</span>
              </div>
              <hr />
              <div className="row px-4">
                <Button className="" variant="danger">
                  สั่งซื้อ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
