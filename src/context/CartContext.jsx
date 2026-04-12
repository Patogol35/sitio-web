import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ➕ Agregar producto (resta stock)
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.stock <= 0) return;

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                stock: item.stock - 1, // 🔥 resta stock
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          stock: product.stock - 1, // 🔥 resta stock inicial
        },
      ]);
    }
  };

  // ➕ Incrementar
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.stock <= 0) return item;

          return {
            ...item,
            quantity: item.quantity + 1,
            stock: item.stock - 1, // 🔥 baja stock
          };
        }
        return item;
      })
    );
  };

  // ➖ Disminuir (devuelve stock)
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              stock: item.stock + 1, // 🔥 devuelve stock
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Eliminar (devuelve TODO el stock)
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // 🧹 Limpiar carrito
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
