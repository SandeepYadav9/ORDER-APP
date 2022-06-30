import React, { Fragment } from "react";
import "./MealItem.css";
const MealItem = ({ name, description, price }) => {
  return (
    <li className="meal">
      <div>
        <h3>{name}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div>
        <div className="price">
          <h3>Amount</h3>
          <input type="text" placeholder="3"/>
        </div>
        <button>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
