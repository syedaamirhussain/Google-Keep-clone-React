import Image from "next/image";
// import styles from "../Atom/Icons.css";
import React from "react";

const BodyIcons = ({ Bodyicons, onClick }) => {
  return (
    <div onClick={onClick} className="body-part-icons">
      <Image src={Bodyicons} alt="Body Icons"/>
    </div>
  );
};

export default BodyIcons;
