import React, { useContext } from "react";
import "./Card.css";
import { CartContext } from "../../Context/CartContext";
import { cardData } from "../../Constants/Constant";


function Card() {
 
  const {cart,handleAddToCart,handleDecrease,handleIncrease}=useContext(CartContext)


  return (
    <section>
      <div className="container">
        <h1>Desserts</h1>
        <div className="card-container">
          {cardData.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.src} alt={item.mainAlt} />
                {cart[item.id] ? (
                  <div className="cartadd">
                    <button onClick={()=>handleDecrease(item.id)}>
                      <img
                        src="../src/assets/images/icon-decrement-quantity.svg"
                        alt="decrement-icon"
                      />
                    </button>
                    {cart[item.id]}
                    <button onClick={()=>handleIncrease(item.id)}>
                      <img
                        src="../src/assets/images/icon-increment-quantity.svg"
                        alt="increment-icon"
                      />
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    <img src={item.cartImg} alt={item.cartAlt} />
                    Add to Cart
                  </button>
                )}
                <h4>{item.category}</h4>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;
