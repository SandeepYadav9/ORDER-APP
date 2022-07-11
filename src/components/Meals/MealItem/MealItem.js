import React from "react";
import "./MealItem.css";
import { useDispatch } from "react-redux";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price, id }) => {
  const dispatch = useDispatch();
  
  const addToCartHandler = (amount) => {
    dispatch();
  };
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
