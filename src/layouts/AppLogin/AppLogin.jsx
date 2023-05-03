import React from "react";
import { Col, Row, Button, Input, Form, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLine,
  faGooglePlusG,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

import "../../assets/style/spacing.css";
import "../../assets/style/global.css";
import "../../assets/style/utils.css";

function AppLogin() {
  return (
    <Col className="mxp-10 FormContainer">
      <Row className="">
        <Divider>
          <h2>หน้าเข้าสู่ระบบ</h2>
        </Divider>
      </Row>
      <Row className="">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="w-100 pt-1 pxp-10 mb-5"
        >
          <Form.Item
            label="Username"
            name="username"
            className="pr-12 mxp-5"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="pr-12 mxp-5"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="pxp-15">
            <Button
              type="primary"
              htmlType="submit"
              className="w-100"
              icon={
                <FontAwesomeIcon
                  icon={faUserLarge}
                  size="1x"
                  className="pr-3"
                />
              }
            >
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
          <Form.Item className="w-100">
            <Button
              type="primary"
              htmlType="button"
              icon={
                <FontAwesomeIcon
                  icon={faGooglePlusG}
                  size="1x"
                  className="pr-3"
                />
              }
              className="w-25 mx-1"
              style={{ backgroundColor: "#db4437" }}
            >
              Login with Google+
            </Button>
            <Button
              type="primary"
              htmlType="button"
              icon={
                <FontAwesomeIcon icon={faLine} size="1x" className="pr-3" />
              }
              className="w-25 mx-1"
              style={{ backgroundColor: "#00c300" }}
            >
              Login with Line
            </Button>
            <Button
              type="primary"
              htmlType="button"
              icon={
                <FontAwesomeIcon icon={faFacebook} size="1x" className="pr-3" />
              }
              className="w-25 mx-1"
              style={{ backgroundColor: "#0962fb" }}
            >
              Login with Facebook
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Col>
  );
}

export default AppLogin;
