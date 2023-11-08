import React from "react";
import Icons from "../Atom/Icons";
// import Styles from "../Molecule/LeftFrag.css";
import SearchIcon from "../../public/svg/search.svg";
import RefreshIcon from '../../public/svg/refresh.svg';
import ViewIcon from '../../public/svg/view.svg'
import SettingsIcon from '../../public/svg/settings.svg'

const SearchFrag = () => {
  return (
    <div className="sear-bar-parent">
      <div className="search-bar">
        <Icons photos={SearchIcon} />
        <input type="search" placeholder="Search" />
      </div>
      <div className="search-bar-ions">
        <Icons photos={RefreshIcon} />
        <Icons photos={ViewIcon} />
        <Icons photos={SettingsIcon} />

      </div>
    </div>
  );
};

export default SearchFrag;
