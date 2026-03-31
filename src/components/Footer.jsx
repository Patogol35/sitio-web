
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">Fundación Luz de Vida</h3>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Trabajamos por una sociedad más humana, solidaria y comprometida con quienes más lo necesitan.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Navegación</h4>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li><a href="#inicio" className="hover:text-emerald-400">Inicio</a></li>
              <li><a href="#quienes-somos" className="hover:text-emerald-400">Quiénes somos</a></li>
              <li><a href="#noticias" className="hover:text-emerald-400">Noticias</a></li>
              <li><a href="#donaciones" className="hover:text-emerald-400">Donaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Contacto</h4>
            <ul className="mt-4 space-y-4 text-slate-300">
              <li className="flex items-center gap-3"><MapPin size={18} /> Quito, Ecuador</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +593 000 000 000</li>
              <li className="flex items-center gap-3"><Mail size={18} /> contacto@luzdevida.org</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Síguenos</h4>
            <div className="mt-4 flex gap-4">
              <a href="#" className="rounded-full bg-white/10 p-3 hover:bg-emerald-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-3 hover:bg-emerald-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-3 hover:bg-emerald-600 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Fundación Luz de Vida. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
