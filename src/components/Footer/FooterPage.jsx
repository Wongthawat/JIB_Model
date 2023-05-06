import React from "react";
import { Col, Row, Layout } from "antd";
import FooterData from "./FooterData";

function FooterPage() {
  const { Footer } = Layout;

  return (
    <div className="bg-dove-gray mt-10">
      <div className="row text-white pxp-10 border-top-bg-jibnew-4 justify-center">
        {FooterData.headFooter.map((Get, key) => (
          <div key={key} className="mt-5 col-xl-2">
            <p>{Get.name}</p>
            <li>
              <p></p>
            </li>
          </div>
        ))}
      </div>
      <Footer className="bg-mine-shaft text-white py-1 text-center">
        <p className="lh-sm">2023 JIB COMPUTER GROUP All rights reserved</p>
      </Footer>
    </div>
  );
}

export default FooterPage;
