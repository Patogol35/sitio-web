function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.14),transparent_24%),linear-gradient(to_bottom_right,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
        <div className="absolute left-10 top-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-10 bottom-16 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Texto */}
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur">
              Compromiso social • Solidaridad • Esperanza
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              Transformamos
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                ayuda en esperanza
              </span>
              para quienes más lo necesitan
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              En Fundación Luz de Vida impulsamos proyectos sociales, jornadas
              solidarias y acciones comunitarias que generan apoyo real,
              oportunidades y bienestar para personas en situación vulnerable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#donaciones"
                className="rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_-12px_rgba(16,185,129,0.7)] transition duration-300 hover:-translate-y-1 hover:bg-emerald-400"
              >
                Donar ahora
              </a>

              <a
                href="#quienes-somos"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white/10"
              >
                Conócenos
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">+500</p>
                <p className="mt-2 text-sm text-slate-300">Personas apoyadas</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">+30</p>
                <p className="mt-2 text-sm text-slate-300">Actividades sociales</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-3xl font-bold text-white">+20</p>
                <p className="mt-2 text-sm text-slate-300">Voluntarios activos</p>
              </div>
            </div>
          </div>

          {/* Imagen + Cards flotantes */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-400/20 via-emerald-300/10 to-amber-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.45)] backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1400&auto=format&fit=crop"
                alt="Fundación Luz de Vida"
                className="h-[620px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

              {/* Card flotante 1 */}
              <div className="absolute left-6 top-6 max-w-xs rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-white shadow-xl backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Fundación Luz de Vida
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">
                  Construimos apoyo, comunidad y esperanza a través de la acción social.
                </p>
              </div>

              {/* Card flotante 2 */}
              <div className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-md">
                <p className="text-sm font-medium text-slate-200">Impacto humano</p>
                <p className="mt-2 text-3xl font-bold text-white">Real y cercano</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
