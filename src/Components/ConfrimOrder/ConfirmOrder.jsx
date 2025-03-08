import React, { useContext } from "react";
import "./ConfrimOrder.css";
import { CartContext } from "../../Context/CartContext";

function ConfirmOrder({ totalAmount, allProductDetails }) {

  const { modalOpen, setModalOpen } = useContext(CartContext);
  

  return (
    <div className="modal-container">
      <img
        src="../src/assets/images/icon-order-confirmed.svg"
        alt="orderconfirm-icon"
      />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>

      <div className="order-container">
        {allProductDetails &&
          allProductDetails.map((item, index) => (
            <div className="ordered-details" key={index}>
              <img src={item.src} alt="baklava-img" />

              <div className="details-wrapper">
                <h5>{item.title}</h5>
                <p>
                  <span>{item.quantity}x</span> @ {item.price}
                </p>
              </div>
              <h6 className="total-price">
                $ {Number(item.quantity) * Number(item.price)}
              </h6>
            </div>
          ))}
      </div>
      <div className="order-amount">
        <p>Order Total</p>
        <h4>${totalAmount}</h4>
      </div>
      <button
        className="btn"
        onClick={() =>  
          setModalOpen(!modalOpen)
      }
      >
        Start New Order
      </button>
    </div>
  );
}

export default ConfirmOrder;
