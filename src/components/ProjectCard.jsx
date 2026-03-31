
function ProjectCard({ title, description, goal }) {
  return (
    <article className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 inline-flex rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        Proyecto solidario
      </div>

      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed">{description}</p>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4">
        <p className="text-sm text-slate-500">Meta estimada</p>
        <p className="text-2xl font-bold text-slate-900">{goal}</p>
      </div>

      <a
        href="#contacto"
        className="mt-7 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-amber-600 transition"
      >
        Apoyar este proyecto
      </a>
    </article>
  );
}

export default ProjectCard;
