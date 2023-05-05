import React from "react";
import { ThemeProvider, Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLine,
  faGooglePlusG,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

function AppRegister() {
  return (
    <div className="bg-white pt-5 pb-5 pxp-10">
      <div className="col-md-12">
        <div className="w-100">
          <Form className="w-100">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address : </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password : </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Re-Password : </Form.Label>
              <Form.Control type="password" placeholder="Re-Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username : </Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Lastname : </Form.Label>
              <Form.Control type="text" placeholder="Enter Lastname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastname">
              <Form.Label>Phone Number : </Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender : </Form.Label>
              <Form.Select type="select">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

          </Form>
        </div>
      </div>
      <div className="col-md-12 pt-6">
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none font-size-s"
            type="submit"
            style={{ backgroundColor: "#17254a" }}
          >
            <FontAwesomeIcon icon={faUserLarge} size="1x" className="pr-3" />
            ลงทะเบียน
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppRegister;
