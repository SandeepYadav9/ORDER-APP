import React, { Fragment } from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price }) => {
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div className="priceContainer">
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
