// 📁 src/pages/News.jsx
const newsMock = [
  { id: 1, title: "Entrega de alimentos", content: "Se realizó entrega en comunidad." },
  { id: 2, title: "Campaña médica", content: "Atención gratuita realizada." }
];

export default function News() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Noticias</h2>
      <div className="grid gap-4">
        {newsMock.map((n) => (
          <div key={n.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{n.title}</h3>
            <p>{n.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
