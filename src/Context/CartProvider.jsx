import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleAddToCart = (id) => {
      setCart((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    };
  
    const handleDecrease = (id) => {
      setCart((prev) => {
        if (!prev[id] || prev[id] <= 1) {
          const updatedCart = { ...prev };
          delete updatedCart[id];
          return updatedCart;
        }
        return {
          ...prev,
          [id]: prev[id] - 1,
        };
      });
    };
  
    const handleIncrease = (id) => {
      setCart((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    };
  


  
    return (
      <CartContext.Provider
        value={{
          setCart,
          cart,
          handleAddToCart,
          handleDecrease,
          handleIncrease,
          modalOpen,
          setModalOpen,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  