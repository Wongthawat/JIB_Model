import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinnerLoad = () => {
  return (
    <div className="container">
      <div className="spinner flex justify-center align-center absolute">
        <Spinner animation="border" />
      </div>
    </div>
  );
};

export default SpinnerLoad;
