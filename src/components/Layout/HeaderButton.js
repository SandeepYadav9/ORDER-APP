import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";
import { useSelector } from "react-redux";
const HeaderButton = (props) => {
  // const totalAmount=useSelector((state)=>state.cart.totalAmount)
  const items = useSelector((state) => state.cart.items);
  
  const totalAmount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onClose}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalAmount}</span>
    </button>
  );
};

export default HeaderButton;
