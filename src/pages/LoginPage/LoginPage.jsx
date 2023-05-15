import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLine,
  faGooglePlusG,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";

function LoginPage() {
  const navigate = useNavigate();
  const NavigateTo = (urlpath) => {
    navigate("/" + urlpath.toLocaleLowerCase(true));
  };

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post(BASE_URL + "auth/login", {
        username: user,
        password: pwd,
      });
      if (response.status === 200) {
        console.log(response.data);
        window.localStorage.setItem('accessToken', response?.data?.token);
        window.localStorage.setItem('userData', JSON.stringify(response?.data))
        window.location.href = "/home";
      }
    } catch (err) {}
  };

  return (
    <div className="row bg-white pt-5 pb-5 pxp-10">
      <div className="col-md-6">
        <Form className="w-100" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember"
              className="font-size-s"
            />
          </Form.Group>
        </Form>
      </div>
      <div className="col-md-6 pt-5">
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none font-size-s"
            type="submit"
            onClick={handleSubmit}
            style={{ backgroundColor: "#17254a" }}
          >
            <FontAwesomeIcon icon={faUserLarge} size="1x" className="pr-3" />
            เข้าสู่ระบบ
          </Button>
        </div>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none font-size-s"
            type="button"
            style={{ backgroundColor: "#db4437" }}
          >
            <FontAwesomeIcon icon={faGooglePlusG} size="1x" className="pr-3" />
            Login with Google+
          </Button>
        </div>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none font-size-s"
            type="submit"
            style={{ backgroundColor: "#00c300" }}
          >
            <FontAwesomeIcon icon={faLine} size="1x" className="pr-3" />
            Login with Line
          </Button>
        </div>
        <div className="text-center mb-1">
          <Button
            className="w-100 border-none font-size-s"
            type="submit"
            style={{ backgroundColor: "#0962fb" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="1x" className="pr-3" />
            Login with Facebook
          </Button>
        </div>
        <div className="text-center">
          <span className="font-size-s">
            ไม่ใช่สมาชิก ?{" "}
            <a href="" onClick={() => NavigateTo("Register")}>
              <span>สมัครสมาชิก</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
