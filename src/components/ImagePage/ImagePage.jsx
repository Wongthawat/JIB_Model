import React from "react";

const ImagePage = (props) => {
  return (
    <div>
      <div key={props.id}>
        <img src={props.img} alt="" className="p-1 w-100" />
      </div>
    </div>
  );
};

export default ImagePage;
