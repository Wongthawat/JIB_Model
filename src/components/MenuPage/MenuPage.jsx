import React from "react";
import { Menu } from "antd";
// import { MegaMenu } from "primereact/megamenu";
// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ScrollPanel } from "primereact/scrollpanel";
import items from "./ItemMenu";
import "./MenuPage.css"

export default function MenuPage() {
  const onClick = (e) => {
    console.log("click", e);
  };

  return (
    <ScrollPanel className="custombar1 py-2 max-height-550">
      <Menu
        onClick={onClick}
        mode="inline"
        items={items}
        className="pa-3 text-left w-100 rounded"
      />
    </ScrollPanel>
  );
}
