import React, { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlices";
const Food = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(cartActions.modelIsOpen());
  };
  const showCartHandler = () => {
    dispatch(cartActions.modelIsOpen());
  };
  return (
    <Fragment>
      {isOpen && <Cart onCloseHandler={onCloseHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Food;
