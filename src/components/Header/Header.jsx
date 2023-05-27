import React from "react";
import { Popover, Badge, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ScrollPanel } from "primereact/scrollpanel";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import "./Header.css";

const Header = () => {
  const { items, totalItems } = useCart();
  const User = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("accessToken");

  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  const handleProfile = (firstname) => {
    window.location.href = "/profileinfo/" + firstname
  }

  const LoginOut = (
    <div className="w-100">
      <Button size="sm" className="w-100 btnProfileHeader" onClick={() => handleProfile(User.firstName)}>
        Profile
      </Button>
      <Button size="sm" className="w-100 mt-1 btnLogout" onClick={handleLogout} type="button" variant="danger">
        Logout
      </Button>
    </div>
  );

  const ListOrder = (
    <div className="">
      <hr />
      <ScrollPanel
        style={{ width: "100%", height: "250px" }}
        className="custombar1"
        >
        {items.map((item) => (
          <div className="col-md-12 col-sm-12" key={item.id}>
            <div className="row mx-0 justify-center align-center">
              <div className="col-md-12 col-lg-4 text-center px-0">
                <img src={item.thumbnail} className="img-50 Cursor" />
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
      </ScrollPanel>
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
    <div className="">
      <Navbar className="bg-jib-new pxp-10 max-height-100 w-100">
        <Navbar.Brand className="">
            <img
              alt=""
              src="/images/JIB.jpg"
              className="max-width-100 Cursor"
              onClick={() => NavigateTo("home")}
            />
        </Navbar.Brand>
        <Nav className="m-auto w-100">
          <Form className="w-100">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Form className="pa-1 ml-5 TransformCursor">
            <Badge count={totalItems} className="">
              <Popover content={ListOrder} title={"สินค้าที่พึ่งเพิ่มเข้าไป"}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="text-white"
                />
              </Popover>
            </Badge>
          </Form>
          <Form className="pa-1 ml-5">
            {!token ? (
              <Avatar
                size="default"
                icon={<UserOutlined />}
                className="bg-gray-600 TransformCursor"
                onClick={() => NavigateTo("login")}
              />
            ) : (
              <Popover content={LoginOut}>
                <Avatar
                  size="default"
                  className="bg-orange-200 TransformCursor"
                  src={User.image}
                />
              </Popover>
            )}
          </Form>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
