import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "Dall", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseHandler}>
      {cartItems}
      <div>
        <span>Total Amout</span>
        <span>35.62</span>
      </div>
      <div>
        <button onClose={props.onCloseHandler}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
