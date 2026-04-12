import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Agregar producto
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.quantity >= product.stock) return;

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ➕ Incrementar
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity >= item.stock) return item;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    );
  };

  // ➖ Disminuir
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Eliminar
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 🧹 Limpiar
  const clearCart = () => {
    setCart([]);
  };

  // 💰 Total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🔢 Total items
  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
