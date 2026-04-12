import { useState } from "react";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar openCart={() => setIsCartOpen(true)} />

      {/* Página principal */}
      <Home />

      {/* Carrito lateral */}
      <CartDrawer
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default App;
