import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./ModalPage.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ModalPage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show}>
        <Modal.Body className="Modal-Body">
          <div className="row">
            <div className="">
              <FontAwesomeIcon
                onClick={handleClose}
                icon={faCircleXmark}
                className="Closebtn"
                size="2x"
                style={{ color: "white" }}
              />
            </div>
            <span>
              <img src="/images/ImgModal.webp" alt="" className="w-100 p-2" />
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalPage;
