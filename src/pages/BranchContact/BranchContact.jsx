import React from "react";
import GoogleMapReact from "google-map-react";

const BranchContact = () => {
  const defaultProps = {
    center: {
      lat: 13.942906290026817,
      lng: 100.62309892362283,
    },
    zoom: 11,
  };

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-8">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default BranchContact;
