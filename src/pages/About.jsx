// =========================
// 📁 src/pages/About.jsx
// =========================
export default function About() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Sobre Nosotros</h2>

      <p className="mb-6 text-gray-700">
        Somos una fundación comprometida con el desarrollo social y humano.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="font-bold text-xl mb-2">Misión</h3>
          <p>Brindar apoyo integral a quienes más lo necesitan.</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h3 className="font-bold text-xl mb-2">Visión</h3>
          <p>Ser líderes en impacto social en nuestra región.</p>
        </div>
      </div>
    </div>
  );
}
