import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";
import "./Register.css";

function RegisterPage() {
  const [items, setItems] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [uploadfile, setUploadfile] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = async () => {
    event.preventDefault();
    const response = await axios.post(`${BASE_URL}` + "users/add", {
      firstName: fname,
      lastName: lname,
      username: username,
      password: password,
      image: uploadfile,
      email: email,
      phone: phone,
      height: height,
      weight: weight,
    });
    if (response.status === 200) {
      console.log("Post", response?.data);
    }
  };

  return (
    <div className="">
      <div className="row mx-0 ">
        <div className="col-12 text-center mt-6">
          {!uploadfile ? (
            <Avatar
              size={{ xxl: 120, xl: 100, lg: 100, md: 80, sm: 60, xs: 60 }}
              icon={<UserOutlined />}
              className="AvatarImg"
            />
          ) : (
            <Avatar
              size={{ xxl: 120, xl: 100, lg: 100, md: 80, sm: 60, xs: 60 }}
              src={uploadfile}
              className="AvatarImg"
            />
          )}
        </div>
        <div className="pxp-15">
          <Form className="row BodyRegister" onSubmit={handleSubmit}>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Firstname : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Lastname : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Username : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Password : </Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Phone : </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Email : </Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Height : </Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Weight : </Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12 py-1">
              <Form.Group>
                <Form.Label> Upload Profile : </Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={(e) => setUploadfile(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12 py-1 text-center">
              <Button type="submit" className="w-50 btnRegister" size="sm">
                ลงทะเบียน
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
