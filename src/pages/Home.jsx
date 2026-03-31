import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import NewsCard from "../components/NewsCard";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import news from "../data/news";
import projects from "../data/projects";

function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />

      {/* QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-white py-28"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionTitle
                badge="Nuestra identidad"
                title="Transformamos solidaridad en acciones reales"
                subtitle="Fundación Luz de Vida trabaja para generar esperanza, apoyo y oportunidades a personas y comunidades que más lo necesitan."
              />

              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Nacimos con la convicción de que la ayuda social no solo debe
                  llegar, sino también dejar huella. Por eso impulsamos proyectos
                  humanos, sostenibles y cercanos a la realidad de cada comunidad.
                </p>
                <p>
                  Nuestra labor une voluntariado, acompañamiento, educación y
                  actividades solidarias para construir un impacto positivo y duradero.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-bold text-emerald-700">+100</p>
                  <p className="text-sm text-slate-500">Personas beneficiadas</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-bold text-emerald-700">+20</p>
                  <p className="text-sm text-slate-500">Actividades solidarias</p>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
                  <p className="text-2xl font-bold text-emerald-700">+10</p>
                  <p className="text-sm text-slate-500">Voluntarios activos</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] backdrop-blur">
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Nuestra misión
                </div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Servir con empatía, compromiso y propósito
                </h3>
                <p className="mt-5 leading-relaxed text-slate-600">
                  Brindar apoyo social, humano y solidario a quienes más lo necesitan,
                  promoviendo bienestar, inclusión y esperanza a través de acciones
                  concretas y sostenibles.
                </p>
              </div>

              <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.35)]">
                <div className="mb-5 inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                  Nuestra visión
                </div>
                <h3 className="text-3xl font-bold">
                  Ser una fundación que inspira transformación
                </h3>
                <p className="mt-5 leading-relaxed text-slate-300">
                  Aspiramos a convertirnos en un referente de impacto social,
                  cercanía humana y proyectos que mejoren vidas de forma real y sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section id="que-hacemos" className="bg-slate-950 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            badge="Nuestra labor"
            title="Construimos oportunidades a través de la acción"
            subtitle="Impulsamos iniciativas sociales que fortalecen comunidades, promueven la solidaridad y generan bienestar."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: "🤝",
                title: "Ayuda social",
                text: "Apoyamos a familias y personas en situación vulnerable mediante asistencia, acompañamiento y apoyo humano.",
              },
              {
                icon: "🎓",
                title: "Educación",
                text: "Promovemos el acceso a oportunidades educativas, recursos formativos y desarrollo integral.",
              },
              {
                icon: "💚",
                title: "Voluntariado",
                text: "Integramos a personas comprometidas con la construcción de una sociedad más justa y solidaria.",
              },
              {
                icon: "✨",
                title: "Actividades solidarias",
                text: "Organizamos jornadas, campañas y eventos con impacto comunitario y enfoque social.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-3xl ring-1 ring-emerald-400/20">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section
        id="noticias"
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            badge="Actualidad"
            title="Noticias, jornadas y actividades"
            subtitle="Comparte con la comunidad el trabajo que realiza la fundación y mantén visibles sus acciones e impacto."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item) => (
              <div
                key={item.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_15px_45px_-20px_rgba(15,23,42,0.18)] transition hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_rgba(15,23,42,0.22)]"
              >
                <NewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section
        id="donaciones"
        className="relative overflow-hidden bg-slate-950 py-28 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <SectionTitle
                badge="Apoya nuestra causa"
                title="Cada donación puede cambiar una historia"
                subtitle="Tu aporte fortalece proyectos sociales, actividades comunitarias y acciones que mejoran la vida de muchas personas."
              />
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                Impacto social
              </p>
              <p className="mt-4 text-4xl font-bold">Tu ayuda sí llega</p>
              <p className="mt-4 leading-relaxed text-slate-300">
                Dona a proyectos específicos y apoya iniciativas reales de educación,
                ayuda social, actividades solidarias y acompañamiento comunitario.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white py-28"
      >
        <div className="absolute left-10 bottom-10 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.35)]">
              <SectionTitle
                badge="Contáctanos"
                title="Súmate a esta misión"
                subtitle="Estamos abiertos a alianzas, voluntariado, apoyo económico y nuevas iniciativas que generen impacto."
              />

              <div className="mt-10 space-y-6 text-lg text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    Dirección
                  </p>
                  <p className="mt-2">Quito, Ecuador</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    Teléfono
                  </p>
                  <p className="mt-2">+593 000 000 000</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    Correo
                  </p>
                  <p className="mt-2">contacto@luzdevida.org</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
                    Horario
                  </p>
                  <p className="mt-2">Lunes a Viernes · 08:00 a 17:00</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)] backdrop-blur">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Escríbenos
                </p>
                <h3 className="mt-3 text-4xl font-bold text-slate-900">
                  Envíanos un mensaje
                </h3>
                <p className="mt-3 text-slate-600">
                  Si deseas colaborar, donar o conocer más sobre nuestros proyectos,
                  estaremos encantados de escucharte.
                </p>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
                <textarea
                  rows="6"
                  placeholder="Escribe tu mensaje"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-full bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
