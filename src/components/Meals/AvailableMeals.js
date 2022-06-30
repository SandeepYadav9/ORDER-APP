import React from "react";
import DUMMY_MEALS from "./Dummy_Meals";
import MealItem from "./MealItem/MealItem";
import './AvailableMeals.css'
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section>
      <ul className="meal-list">{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
