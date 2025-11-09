type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  deliverables: string[];
};

export function ServiceCard({ icon, title, description, deliverables }: ServiceCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 dark:border-slate-700/60 dark:bg-slate-900/40">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
        {deliverables.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
