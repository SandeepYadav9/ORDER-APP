import React, { Fragment } from "react";
import "./Header.css";
import mealsImage from "../assets/meals.jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>OrderFood</h1>
        <HeaderButton onClose={props.showCart}/>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt='Meals image' />
      </div>
    </Fragment>
  );
};

export default Header;
