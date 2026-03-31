function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-emerald-200 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-amber-200 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Compromiso social • Solidaridad • Esperanza
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl leading-tight">
              Transformamos vidas con
              <span className="text-emerald-600"> ayuda, amor y acción</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              En Fundación Luz de Vida trabajamos para apoyar a personas y comunidades
              en situación vulnerable mediante proyectos sociales, actividades solidarias
              y acciones de impacto humano.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#donaciones"
                className="rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 transition"
              >
                Donar ahora
              </a>
              <a
                href="#quienes-somos"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-700 hover:border-emerald-600 hover:text-emerald-600 transition"
              >
                Conócenos
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="text-3xl font-bold text-slate-900">+500</p>
                <p className="text-sm text-slate-600">Personas apoyadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">+30</p>
                <p className="text-sm text-slate-600">Actividades sociales</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">+20</p>
                <p className="text-sm text-slate-600">Voluntarios activos</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-emerald-200 to-amber-200 blur-2xl opacity-40"></div>
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1400&auto=format&fit=crop"
              alt="Fundación Luz de Vida"
              className="relative h-[600px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
