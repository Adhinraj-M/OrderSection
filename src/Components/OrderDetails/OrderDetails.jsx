import React, { useContext } from "react";
import "./OrderDetails.css";
import ConfirmOrder from "../ConfrimOrder/ConfirmOrder";
import { CartContext } from "../../Context/CartContext";
import { cardData } from "../../Constants/Constant";

function OrderDetails() {
  const { cart, setCart,setModalOpen,modalOpen } = useContext(CartContext);


  const sum = Object.values(cart).reduce((acc, val) => acc + val, 0);

  const itemIds = Object.keys(cart).map(Number);

  const foundProduct = cardData.filter((item) => itemIds.includes(item.id));

  let allProductDetails = foundProduct.map((product) => ({
    ...product,
    quantity: cart[product.id] || 1,
  }));

  const totalAmount = allProductDetails.reduce((acc, product) => {
    const quantity = Number(product.quantity);
    const price = Number(product.price);

    return acc + quantity * price;
  }, 0);


  const handleRemove = (id) => {
    setCart((prev) => {
      if (!prev || !prev[id]) return prev; // Ensure cart exists & item is in cart

      const updatedCart = { ...prev };

      prev[id] >= 1 && delete updatedCart[id]; //  remove

      return Object.keys(updatedCart).length ? updatedCart : {}; // Return empty object if cart is empty
    });
  };


  return (
    <div className="order-conatiner">
      <h1>Your Cart ({sum})</h1>
      {allProductDetails &&
        allProductDetails.map((item, index) => {
          return (
            <div className="item-container" key={index}>
              <h5>{item?.title}</h5>
              <button onClick={() => handleRemove(item.id)}>
                <img
                  src="../../public/assets/images/icon-remove-item.svg"
                  alt="remove-icon"
                />
              </button>
              <p>
                <span>{item.quantity}x</span> @ ${item.price} $
                {Number(item.quantity) * Number(item.price)}
              </p>
            </div>
          );
        })}
      <div className="order-details">
        <p>Order Total</p>
        <h2>{totalAmount}</h2>
      </div>
      <div className="carbon-neutral">
        <img
          src="../../public/assets/images/icon-carbon-neutral.svg"
          alt="carbon-neutral"
        />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>

      <button className="order-confirm" onClick={()=>setModalOpen(!modalOpen)}>
        Confirm Order
      </button>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <ConfirmOrder totalAmount={totalAmount} allProductDetails={allProductDetails}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
