import React from "react";
import { Popover, Badge } from "antd";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavbarHeadData from "../../components/Navbar/NavbarHeadData";

// const [order, setOrder] = useState(localStorage.getItem("Order"));
// const [ordername, setOrdername] = useState("Hi");
// const [orderSelecte, setSelect] = useState(0);

// const Title = (
//   <div>
//     <span>{"รายการสินค้า"}</span>
//   </div>
// );

// const ListOrder = (
//   <div>
//     <hr />
//     <div className="wp-300">
//       <Row>
//         <Col>
//           <span>{"คอมพิวเตอร์"}</span>
//         </Col>
//         <Col md="auto">
//           <span>{"19,400"}</span>
//         </Col>
//       </Row>
//     </div>
//     <hr />
//   </div>
// );

function AppHeader() {
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
            <Badge count={1}>
              {/* <Popover content={ListOrder} title={Title}> */}
              <a href="">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="text-white"
                />
              </a>
              {/* </Popover> */}
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
}

export default AppHeader;
