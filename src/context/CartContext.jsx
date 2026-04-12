import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🧠 cargar desde localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [stockMap, setStockMap] = useState(() => {
    const saved = localStorage.getItem("stock");
    return saved ? JSON.parse(saved) : {};
  });

  // 💾 guardar cambios
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("stock", JSON.stringify(stockMap));
  }, [stockMap]);

  // 🧠 obtener stock actual
  const getStock = (product) => {
    return stockMap[product.id] ?? product.stock;
  };

  // ➕ agregar producto
  const addToCart = (product) => {
    const currentStock = getStock(product);
    if (currentStock <= 0) return;

    const existing = cart.find((item) => item.id === product.id);

    // 🔥 actualizar stock global
    setStockMap((prev) => ({
      ...prev,
      [product.id]: currentStock - 1,
    }));

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
    const product = cart.find((item) => item.id === id);
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
      [id]: (prev[id] ?? product.stock) + 1,
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

  // ❌ eliminar
  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);

    setStockMap((prev) => ({
      ...prev,
      [id]:
        (prev[id] ?? product.stock) + product.quantity,
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
        stockMap, // 🔥 importante
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
