// HamburgerAll.js
"use client";
import React, { useState } from "react";
// import Styles from "../Molecule/LeftFrag.css";
import HamburgerIcons from "../Atom/HamburgerIcons";
import LightBulb from "../../public/svg/lightbulb.svg";
import NotificationIcon from "../../public/svg/notification.svg";
import Popup from "./Popup";

import Edit from "../../public/svg/edit.svg";
import Archieve from "../../public/svg/archieve.svg";
import Trash from "../../public/svg/trash.svg";

const HamburgerAll = () => {

  let [data, setdata] = useState(false);

  const editer = () => {
    setdata(true);

    console.log("Edit button clicked");
  };
  const Archive = () => {
    setdata(true);  
    console.log("Archive");
  };
  const array = [
    { icons: LightBulb, text: "Notes" },
    { icons: NotificationIcon, text: "Reminders" },
    { icons: Edit, text: "Edit", click: editer },
    { icons: Archieve, text: "Archive", click: Archive },
    { icons: Trash, text: "Trash" },
  ];

  return (
    <div className="hamburger-main">
      {array.map((item, index) => (
        <HamburgerIcons
          key={index}
          icons={item.icons}
          text={item.text}
          Click={item.click}
        />
      ))}

      {data && (
        <div
          onClick={() => setdata(false)}
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "red",
            position: "fixed",
            top: "0",
          }}
        >
         
          <Popup />
        </div>
      )}
    </div>
  );
};

export default HamburgerAll;
