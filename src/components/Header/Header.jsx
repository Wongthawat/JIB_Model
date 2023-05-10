import React from "react";
import { Popover, Badge } from "antd";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import "./Header.css";

const Header = () => {
  const { items, totalItems } = useCart();

  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase(true));
  };

  const ListOrder = (
    <div className="">
      <hr />
      {items.map((item, index) => (
        <div className="col-md-12 col-sm-12" key={index}>
          <div className="row mx-0 justify-center align-center">
            <div className="col-md-12 col-lg-4 text-center px-0">
              <img src={item.images[0]} className="img-50" />
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="text-truncate text-center font-size-x">
                {item.title}
              </div>
            </div>
            <div className="col-md-12 col-lg-3 text-center">
              <div className="text-danger font-size-x">฿ {item.price} .-</div>
            </div>
            <div className="col-md-12 col-lg-1 text-center">
                <div className="font-size-x col-12">{item.quantity}</div>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <div>
        <Button
          className="w-100 btnTocart"
          onClick={() => NavigateTo("CartPage")}
        >
          <span>ไปที่ตะกร้า</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar className="bg-jib-new pxp-10 max-height-100 w-100">
        <Navbar.Brand className="">
          <a>
            <img
              alt=""
              src="/images/JIB.jpg"
              className="max-width-100"
              onClick={() => NavigateTo("home")}
            />
          </a>
        </Navbar.Brand>
        <Nav className="m-auto w-75">
          <Form className="w-100">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Form inline className="pa-1 ml-5">
            <Badge count={totalItems}>
              <Popover content={ListOrder} title="สินค้าที่พึ่งเพิ่มเข้าไป">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="text-white"
                />
              </Popover>
            </Badge>
          </Form>
          <Form inline className="pa-1 ml-5">
            <a onClick={() => NavigateTo("Login")}>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="2x"
                className="text-white"
              />
            </a>
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
