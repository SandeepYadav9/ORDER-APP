import React from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";
const MealItemForm = () => {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "input",
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
