import React from "react";
import LeftFrag from "../Molecule/LeftFrag";
import SearchFrag from "../Molecule/SearchFrag";
import RightFrag from "../Molecule/RightFrag";
import HamburgerAll from "../Molecule/HamburgerAll";
import BodyPart from "../Molecule/BodyPart";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <LeftFrag />
        <SearchFrag />
        <RightFrag />
      </div>
      <div className="Lower-page">
        <div className="Hamburger-icons">
          <HamburgerAll />
        </div>

        <div className="body-part">
          <BodyPart />
        </div>
      </div>
      

    </>
  );
};

export default NavBar;
