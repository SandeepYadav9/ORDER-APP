import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { cartActions } from "./store/cartSlices";

const Food = () => {
  const openModal = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(cartActions.modelIsOpen());
  };
  const showCartHandler = () => {
    dispatch(cartActions.modelIsOpen());
  };

  return (
    <Fragment>
      {openModal && <Cart onClose={onCloseHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Food;
