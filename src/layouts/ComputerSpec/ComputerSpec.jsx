import React, { useEffect, useState } from "react";
import { ListGroup, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ListSet from "./SetSpec";
import ProductItems from "../../data/ItemProduct";

function ComputerSpec() {
  return (
    <div>
      <div className="row mx-0">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
          <div className="col-md-12">
            {ListSet.ListSetSpace.map((Get, key) => (
              <ListGroup className="my-2 shadow p-1" key={key}>
                <div className="row align-center mx-0">
                  <div className="col-md-4 text-center px-0">
                    <div className="col-md-12 bg-dark pa-3 rounded">
                      <img src={Get.PictureProduct} alt="" className="img-50" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <span className="font-size-s text-muted">{Get.name}</span>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <span className="font-size-s text-danger font-weight-bold">
                      {Get.id} .-
                    </span>
                  </div>
                </div>
              </ListGroup>
            ))}
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-hide col-lg-6 col-xl-8 col-xxl-9">
          <div className="col-md-12">
            <div className="row">
              {ProductItems.items.map((Get, key) => (
                <div className="col-xxl-3" key={key}>
                  <Card className="w-100 text-center my-1 shadow">
                    <Card.Img
                      variant="top"
                      src={Get.productImage}
                      className="shadow"
                    />
                    <Card.Body>
                      <div
                        className="text-truncate font-size-s"
                      >
                        <span>{Get.productName}</span>
                      </div>
                      <Button variant="danger" className="my-2">
                        ADD TO SPACE
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerSpec;
