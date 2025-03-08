import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import OrderDetails from "../OrderDetails/OrderDetails";
import EmptyCart from "../EmptyCart/EmptyCart";
import Card from '../Card/Card'
import "./Main.css";

function Main() {
  const { cart } = useContext(CartContext);
  return (
    <div className="main-container">
      <Card/>
      {Object.keys(cart).length > 0 ? <OrderDetails /> : <EmptyCart />}

    </div>
  );
}

export default Main;
