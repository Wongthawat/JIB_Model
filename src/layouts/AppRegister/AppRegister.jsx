import React from "react";
import { Col, Row, Button, Input, Form, Divider, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

function AppRegister() {
  return (
    <Col className="mxp-10 mb-12 bg-white text-center">
      <Row className="">
        <Divider>
          <h2>สมัครสมาชิก</h2>
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
            label="Lastname"
            name="lastname"
            className="pr-12 mxp-5"
            rules={[{ required: true, message: "Please input your lastname!" }]}
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
          <Form.Item
            label="Re-enter password"
            name="re-enter password"
            className="pr-12 mxp-5"
            rules={[
              {
                required: true,
                message: "Please input your Re-enter password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            className="pr-12 mxp-5"
            rules={[{ required: true, message: "Please input your E-mail!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile phone"
            name="mobilephone"
            className="pr-12 mxp-5"
          >
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="gender" className="pr-12 mxp-5">
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
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
              ลงทะเบียน
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Col>
  );
}

export default AppRegister;
