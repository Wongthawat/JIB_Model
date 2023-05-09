import React from "react";
import { Popover, Badge } from "antd";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faCirclePlus,
  faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);

const Header = () => {
  const { items, updateItemQuantity, removeItem, totalItems } = useCart();

  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };

  const LoginOrRegister = (
    <div className="wp-200">
      <div className="col-md-12">
        <Button className="w-100" onClick={() => NavigateTo("login")}>
          <span className="font-size-s">เข้าสู่ระบบ</span>
        </Button>
      </div>
      <hr />
      <div className="col-md-12">
        <Button className="w-100" onClick={() => NavigateTo("register")}>
          <span className="font-size-s">สมัครสมาชิก</span>
        </Button>
      </div>
    </div>
  );

  const ListOrder = (
    <div>
      <hr />
      {items.map((item, index) => (
        <div className="" key={index}>
          <div className="row mx-0 justify-center align-center">
            <div className="col-2">
              <img src={item.productImage} className="img-50" />
            </div>
            <div className="col-4">
              <p className="text-truncate">{item.productName}</p>
            </div>
            <div className="col-3 text-center">
              <span className="text-danger">{item.price} .-</span>
            </div>
            <div className="col-3 text-center">
              <span>
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                />
              </span>
              <span className=""> x{item.quantity} </span>
              <span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                />
              </span>
            </div>
          </div>
          <hr />
          <div>{/* <p>{cartTotal}</p> */}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Navbar className="bg-jib-new pxp-10 max-height-100 w-100">
        <Navbar.Brand className="">
          <a href="">
            <img
              alt=""
              src="/images/JIB.jpg"
              className="max-width-100"
              onClick={() => NavigateTo("home")}
            />
          </a>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className="m-auto w-75">
          <Form className="w-100">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Form inline className="pa-1 ml-5">
            <Badge count={totalItems}>
              <Popover content={ListOrder} title="สินค้าที่พึ่งเพิ่มเข้าไป">
                <a href="" onClick={() => NavigateTo("CartPage")}>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="2x"
                    className="text-white"
                  />
                </a>
              </Popover>
            </Badge>
          </Form>
          <Form inline className="pa-1 ml-5">
            <Popover content={LoginOrRegister} placement="bottomLeft">
              <FontAwesomeIcon icon={faUser} size="2x" className="text-white" />
            </Popover>
          </Form>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default Header;
