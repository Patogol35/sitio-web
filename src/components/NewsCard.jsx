
function NewsCard({ title, date, description, image }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-medium text-emerald-600">{date}</p>
        <h3 className="mt-3 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{description}</p>
      </div>
    </article>
  );
}

export default NewsCard;
