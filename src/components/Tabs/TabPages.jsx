import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import { Tabs } from 'antd';
import items from "./TabData.json";

const TabPages = () => {

  return (
    <>
      <Tabs className="mb-3" >
        {items.map((Data) => (
          <Tab title={Data.label} key={Data.key} eventKey={Data.label}>
            {Data.children}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default TabPages;
