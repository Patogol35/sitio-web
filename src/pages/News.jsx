// =========================
// 📁 src/pages/News.jsx
// =========================
const news = [
  { title: "Entrega de alimentos", desc: "Ayuda a familias necesitadas." },
  { title: "Brigada médica", desc: "Atención gratuita comunitaria." },
  { title: "Campaña escolar", desc: "Entrega de útiles." },
];

export default function News() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Noticias</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-2">{n.title}</h3>
            <p className="text-gray-600">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
