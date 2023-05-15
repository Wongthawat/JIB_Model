import React, { useState } from "react";
import { Modal, CloseButton } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./ModalPage.css";

const ModalPage = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <Modal show={show}>
        <Modal.Body className="Modal-Body">
          <div className="text-right">
            <CloseButton onClick={handleClose} className="mr-2"/>
            <img src="/images/ImgModal.webp" alt="" className="w-100 pa-2" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalPage;
