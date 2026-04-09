import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

// ✅ Opción 1 (si NO moviste el archivo)
import Contact from "../components/Contact";

// ✅ Opción 2 (si lo moviste a pages, usa esta en lugar de la de arriba)
// import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
