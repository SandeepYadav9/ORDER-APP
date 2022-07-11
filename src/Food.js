import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { modalActions } from "./store/modalSlices";

const Food = () => {
  const openModal = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(modalActions.modelIsOpen());
  };
  const showCartHandler = () => {
    dispatch(modalActions.modelIsOpen());
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
