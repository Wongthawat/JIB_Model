import React from "react";
// import { Col, Row, Button, Input, Form, Divider } from "antd";
import { ThemeProvider, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLine,
  faGooglePlusG,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

function AppLogin() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm"]}
      minBreakpoint="sm"
    >
      <Row className="mxp-10 bg-white pt-5 pb-5 pxp-10">
        <Form className="w-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none"
            type="submit"
            style={{ backgroundColor: "#2c3d92" }}
          >
            <FontAwesomeIcon icon={faUserLarge} size="1x" className="pr-3" />
            เข้าสู่ระบบ
          </Button>
        </div>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none"
            type="button"
            style={{ backgroundColor: "#db4437" }}
          >
            <FontAwesomeIcon icon={faGooglePlusG} size="1x" className="pr-3" />
            Login with Google+
          </Button>
        </div>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none"
            type="submit"
            style={{ backgroundColor: "#00c300" }}
          >
            <FontAwesomeIcon icon={faLine} size="1x" className="pr-3" />
            Login with Line
          </Button>
        </div>
        <div className="text-center">
          <Button
            className="w-100 border-none"
            type="submit"
            style={{ backgroundColor: "#0962fb" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" className="pr-3" />
            Login with Facebook
          </Button>
        </div>
      </Row>
    </ThemeProvider>
  );
}

export default AppLogin;
