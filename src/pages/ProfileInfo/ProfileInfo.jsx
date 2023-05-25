import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../utils/apiURL";
// import { useParams } from "react-router-dom";

import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [items, setItems] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uploadfile, setUploadfile] = useState("");
  const GetId = JSON.parse(localStorage.getItem("userData"));

  const GetData = async () => {
    const response = await axios.get(`${BASE_URL}` + "user/" + GetId.id);
    if (response.status === 200) {
      setItems(response?.data);
      console.log("Get", response?.data);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleSubmit = async () => {
    event.preventDefault();
    const response = await axios.put(`${BASE_URL}` + "users/" + GetId.id, {
      firstName: fname,
      lastName: lname,
      image: uploadfile,
    });
    if (response.status === 200) {
      setItems(response?.data);
      console.log("Update", response?.data);
      console.log("Img", uploadfile)
    }
  };

  return (
    <div className="">
      <div className="row mx-0 ">
        <div className="col-12 text-center mt-6">
          <Avatar
            size={{ xxl: 120, xl: 100, lg: 100, md: 80, sm: 60, xs: 60 }}
            src={items.image}
            className="AvatarImg bg-orange-200"
          />
        </div>
        <div className="pxp-15">
          <Form className="row BodyForm" onSubmit={handleSubmit}>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Firstname : </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={items.firstName}
                  onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Lastname : </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={items.lastName}
                  onChange={(e) => setLname(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Username : </Form.Label>
                <Form.Control type="text" defaultValue={items.username} disabled />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Password : </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={items.password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Phone : </Form.Label>
                <Form.Control type="text" defaultValue={items.phone} disabled />
              </Form.Group>
            </div>
            <div className="col-lg-6 py-1">
              <Form.Group>
                <Form.Label> Email : </Form.Label>
                <Form.Control type="text" defaultValue={items.email} disabled />
              </Form.Group>
            </div>
            <div className="col-lg-12 py-1">
              <Form.Group>
                <Form.Label> Upload Profile : </Form.Label>
                <Form.Control
                  type="file"
                  size="sm"
                  onChange={(e) => setUploadfile(e.target.files)}
                />
              </Form.Group>
            </div>
            <div className="col-lg-12 py-1 text-center">
              <Button type="submit" className="w-50 btnProfile" size="sm">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
