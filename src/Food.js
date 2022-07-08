import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const Food = () => {
  const [onClose, setOnClose] = useState(false);
  const onCloseHandler = () => {
    setOnClose(false);
  };
  const showCartHandler = () => {
    setOnClose(true);
  };
  return (
    <Fragment>
      {onClose && <Cart onCloseHandler={onCloseHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default Food;
