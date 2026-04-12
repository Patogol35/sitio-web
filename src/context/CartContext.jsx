import { createContext, useContext, useEffect, useState } from "react";
import products from "../data/products"; // 🔥 IMPORTANTE

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🛒 carrito
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 📦 stock GLOBAL (clave del sistema)
  const [stockMap, setStockMap] = useState(() => {
    const saved = localStorage.getItem("stock");

    if (saved) return JSON.parse(saved);

    // 🔥 inicializar desde productos
    const initialStock = {};
    products.forEach((p) => {
      initialStock[p.id] = p.stock;
    });

    return initialStock;
  });

  // 💾 guardar en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("stock", JSON.stringify(stockMap));
  }, [stockMap]);

  // ➕ agregar producto
  const addToCart = (product) => {
    const currentStock = stockMap[product.id];

    if (currentStock <= 0) return;

    setStockMap((prev) => ({
      ...prev,
      [product.id]: currentStock - 1,
    }));

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
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

  // ➕ incrementar
  const increaseQuantity = (id) => {
    const currentStock = stockMap[id];

    if (currentStock <= 0) return;

    setStockMap((prev) => ({
      ...prev,
      [id]: currentStock - 1,
    }));

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ disminuir
  const decreaseQuantity = (id) => {
    const product = cart.find((item) => item.id === id);

    setStockMap((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));

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

  // ❌ eliminar producto
  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);

    setStockMap((prev) => ({
      ...prev,
      [id]: prev[id] + product.quantity,
    }));

    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🧹 limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  // 💰 total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
        stockMap, // 🔥 CLAVE
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
