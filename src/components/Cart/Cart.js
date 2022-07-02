import React, { Fragment } from "react";

const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "Dall", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Fragment>
      {cartItems}
      <div>
        <span>Total Amout</span>
        <span>35.62</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Fragment>
  );
};

export default Cart;
