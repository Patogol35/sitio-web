import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white shadow-lg">
              💚
            </div>
            <div>
              <p className="text-lg font-bold leading-none text-slate-900">
                Fundación
              </p>
              <p className="mt-1 text-sm font-semibold leading-none text-emerald-700">
                Luz de Vida
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-emerald-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#donaciones"
            className="hidden rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 md:inline-flex"
          >
            Donar ahora
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 text-2xl text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <div className="pb-5 md:hidden">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700 hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#donaciones"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
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
