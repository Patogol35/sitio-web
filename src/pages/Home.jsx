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
    <div className="bg-slate-50">
      <Navbar />
      <Hero />

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle
                badge="Nuestra identidad"
                title="¿Quiénes somos?"
                subtitle="Somos una fundación comprometida con el bienestar social, la ayuda solidaria y la transformación positiva de comunidades vulnerables."
              />

              <p className="text-slate-600 text-lg leading-relaxed">
                Fundación Luz de Vida nace con el propósito de servir, acompañar
                y brindar esperanza a personas que enfrentan situaciones difíciles.
                Nuestro trabajo se enfoca en generar impacto real mediante acciones
                humanas, cercanas y sostenibles.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Brindar apoyo social, humano y solidario a quienes más lo necesitan,
                  promoviendo bienestar, inclusión y esperanza.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Ser una fundación referente por su impacto positivo, compromiso social
                  y capacidad de transformar vidas con acciones sostenibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ HACEMOS */}
      <section id="que-hacemos" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            badge="Nuestra labor"
            title="Qué hacemos"
            subtitle="Impulsamos iniciativas que mejoran la calidad de vida de personas y familias a través de la solidaridad y el trabajo comunitario."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🤝",
                title: "Ayuda social",
                text: "Apoyamos a familias y personas en situación vulnerable mediante asistencia y acompañamiento.",
              },
              {
                icon: "🎓",
                title: "Educación",
                text: "Promovemos oportunidades educativas y acceso a recursos para niños y jóvenes.",
              },
              {
                icon: "💚",
                title: "Voluntariado",
                text: "Fomentamos la participación de personas comprometidas con el cambio social.",
              },
              {
                icon: "✨",
                title: "Actividades solidarias",
                text: "Desarrollamos campañas, jornadas y eventos de impacto comunitario.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            badge="Actualidad"
            title="Noticias y actividades"
            subtitle="Conoce algunas de las acciones, jornadas y actividades que realizamos como fundación."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* DONACIONES */}
      <section
        id="donaciones"
        className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            badge="Apoya nuestra causa"
            title="Tus donaciones hacen posible el cambio"
            subtitle="Cada aporte representa una oportunidad para transformar vidas y fortalecer nuestros proyectos sociales."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle
                badge="Contáctanos"
                title="¿Quieres apoyar o colaborar?"
                subtitle="Estamos abiertos a donaciones, alianzas, voluntariado y nuevas iniciativas que sumen a nuestra misión."
              />

              <div className="space-y-5 text-slate-600 text-lg">
                <p><span className="font-semibold text-slate-900">Dirección:</span> Quito, Ecuador</p>
                <p><span className="font-semibold text-slate-900">Teléfono:</span> +593 000 000 000</p>
                <p><span className="font-semibold text-slate-900">Correo:</span> contacto@luzdevida.org</p>
                <p><span className="font-semibold text-slate-900">Horario:</span> Lunes a Viernes, 08:00 - 17:00</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Envíanos un mensaje</h3>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-emerald-500"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-emerald-500"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-emerald-500"
                />
                <textarea
                  rows="5"
                  placeholder="Escribe tu mensaje"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-emerald-500"
                ></textarea>

                <button
                  type="submit"
                  className="rounded-full bg-emerald-600 px-7 py-4 text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition"
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
