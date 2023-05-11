import React from "react";
import { Tab, Nav } from "react-bootstrap";
import { MegaMenu } from "primereact/megamenu";
import { ScrollPanel } from "primereact/scrollpanel";
import items from "./ItemMenu";

export default function MenuPage() {
  return (
    <ScrollPanel className="custombar1 w-100 max-height-550 pt-2">
      {/* // <Tab.Container>
    //   <div className="row">
    //     <div className="col-12">
    //       <Nav variant="pills" className="flex-column">
    //         <Nav.Item>
    //           <Nav.Link eventKey="first">Tab 1</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </div>
    //     <div className="col-12"> 
    //       <Tab.Content>
    //         <Tab.Pane eventKey="first">TTTT</Tab.Pane>
    //       </Tab.Content>
    //     </div>
    //   </div>
    // </Tab.Container> */}
      <div className="pl-5">
        <MegaMenu
          model={items}
          orientation="vertical"
          className="w-100 font-size-s text-left"
        />
      </div>
    </ScrollPanel>
  );
}
