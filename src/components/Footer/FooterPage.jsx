import React from "react";
import FooterData from "./FooterData";
import "./Footer.css"

function FooterPage() {

  return (
    <div className="bg-dove-gray Footer mt-10">
      <div className="">
        <div className="row text-white border-top-bg-jibnew-4 justify-center">
          {FooterData.headFooter.map((Get, key) => (
            <div key={key} className="my-5 col-xl-2">
              <span className="font-size-s">{Get.name}</span>
              <li className="font-size-s"></li>
            </div>
          ))}
        </div>
        <div className="bg-mine-shaft text-white py-1 text-center">
          <span className="font-size-x">
            2023 JIB COMPUTER GROUP All rights reserved
          </span>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
