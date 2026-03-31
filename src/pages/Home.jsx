// =========================
// 📁 src/pages/Home.jsx
// =========================
export default function Home() {
  return (
    <div>
      <section className="bg-green-600 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Fundación Luz de Vida</h1>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Trabajamos por un futuro mejor ayudando a comunidades vulnerables.
        </p>
        <a href="/donate" className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
          Donar ahora
        </a>
      </section>

      <section className="p-10 grid md:grid-cols-3 gap-6">
        {["Ayuda social","Educación","Proyectos comunitarios"].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-gray-600">Impactamos vidas de forma positiva.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
