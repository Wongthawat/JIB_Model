import React from "react";
import FooterData from "./FooterData";

function FooterPage() {
  return (
    <div className="bg-dove-gray">
      <div className="row text-white pxp-10 border-top-bg-jibnew-4 justify-center">
        {FooterData.headFooter.map((Get, key) => (
          <div key={key} className="col-md-12 col-xl-2 my-5">
            <span className="font-size-s">{Get.name}</span>
            <li className="font-size-s"></li>
          </div>
        ))}
      </div>
      <div className="bg-mine-shaft text-white py-1 text-center">
        <span className="font-size-s">2023 JIB COMPUTER GROUP All rights reserved</span>
      </div>
    </div>
  );
}

export default FooterPage;
