import React from "react";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <div className="cart">
      <h2>Your Cart (0)</h2>
      <img
        src="../src/assets/images/illustration-empty-cart.svg"
        alt="illustration-empty-cart"
      />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default EmptyCart;
