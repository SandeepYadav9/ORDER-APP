import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";
const HeaderButton = (props) => {
  return (
    <button className="button" onClick={props.onClose}>
      <span className="icon">
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </button>
  );
};

export default HeaderButton;
