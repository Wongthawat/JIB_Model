import React from "react";
import { Popover, Badge } from "antd";
import { Navbar, Nav, Form, FormControl, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavbarHeadData from "../Navbar/NavbarHeadData";

// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);

const Title = (
  <div>
    <span>{"รายการสินค้า"}</span>
  </div>
);

const ListOrder = (
  <div>
    <hr />
    <div className="wp-300">
      <Row>
        <Col>
          <span>{"คอมพิวเตอร์"}</span>
        </Col>
        <Col md="auto">
          <span>{"19,400"}</span>
        </Col>
      </Row>
    </div>
    <hr />
  </div>
);

function AppHeader() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase());
  };
  return (
    <div>
      <Navbar className="bg-jib pxp-10 max-height-100 w-100">
        <Navbar.Brand className="">
          <a href="">
            <img
              alt=""
              src="/images/logo-w.webp"
              className="max-width-100"
              onClick={() => NavigateTo("home")}
            />
          </a>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="m-auto w-75">
            <Form className="w-75">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
            <Form inline className="pa-1 ml-5">
              <Badge count={1}>
                <Popover content={ListOrder} title={Title}>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="2x"
                      className="text-white"
                    />
                  </a>
                </Popover>
              </Badge>
            </Form>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}

export default AppHeader;
