import { Button, Drawer } from "antd";
import React, { useState } from "react";

function ContactDetails({onClose,showDrawer,visible,drawerrow}) {
    console.log(drawerrow,"checking Props")
 // const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };


  return (
    <>
     
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default ContactDetails;
