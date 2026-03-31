import { useState } from "react";
import { Menu, X, HeartHandshake } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Qué hacemos", href: "#que-hacemos" },
    { label: "Noticias", href: "#noticias" },
    { label: "Donaciones", href: "#donaciones" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
              <HeartHandshake size={22} />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900 leading-none">
                Fundación
              </p>
              <p className="text-sm text-emerald-700 font-semibold leading-none mt-1">
                Luz de Vida
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#donaciones"
            className="hidden md:inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition"
          >
            Donar ahora
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl p-2 text-slate-700 hover:bg-slate-100"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-700 font-medium hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donaciones"
                className="mt-2 rounded-full bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 transition"
              >
                Donar ahora
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
