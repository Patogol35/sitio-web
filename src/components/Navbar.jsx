import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Luz de Vida</h1>

        {/* 🔥 Botón móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* 🔥 Menú desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Inicio</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/news">Noticias</Link>
          <Link to="/donate" className="bg-white text-green-600 px-3 py-1 rounded">
            Donar
          </Link>
        </div>
      </div>

      {/* 🔥 Menú móvil */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Nosotros</Link>
          <Link to="/news" onClick={() => setOpen(false)}>Noticias</Link>
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="bg-white text-green-600 px-3 py-1 rounded w-fit"
          >
            Donar
          </Link>
        </div>
      )}
    </nav>
  );
}
