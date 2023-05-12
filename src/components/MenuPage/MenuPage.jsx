import React from "react";
import { Menu } from "antd";
// import { MegaMenu } from "primereact/megamenu";
// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ScrollPanel } from "primereact/scrollpanel";
import items from "./ItemMenu";

export default function MenuPage() {

  // function getItem(label, key, icon, children, type) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     type,
  //   };
  // }

  const onClick = (e) => {
    console.log("click", e);
  };
  return (
    <ScrollPanel className="custombar1 max-height-550 py-2 bg-sand">
      <Menu
        onClick={onClick}
        mode="inline"
        items={items}
        className="pa-3 text-left w-100 rounded"
      />
    </ScrollPanel>
  );
}
