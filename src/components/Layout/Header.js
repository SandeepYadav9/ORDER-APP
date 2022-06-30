import React, { Fragment } from "react";
import './Header.css'
import HeaderButton from "./HeaderButton";
const Header = () => {
  return (
    <Fragment>
      <header>
        <h1>OrderFood</h1>
        <HeaderButton/>
      </header>
    </Fragment>
  );
};

export default Header;
