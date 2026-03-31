// 📁 src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">Luz de Vida</h1>
      <div className="flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/news">Noticias</Link>
        <Link to="/donate">Donar</Link>
      </div>
    </nav>
  );
}
