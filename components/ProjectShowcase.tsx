import type { ReactNode } from "react";

type Project = {
  name: string;
  summary: string;
  tags: string[];
  stats: { label: string; value: string }[];
};

export function ProjectShowcase({ project, accent }: { project: Project; accent: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 bg-gradient-to-br from-white/70 via-white/40 to-white/10 p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700/50 dark:from-slate-900/60 dark:via-slate-900/20 dark:to-slate-900/10">
      <div className="absolute inset-0 opacity-60 blur-3xl">{accent}</div>
      <div className="relative flex flex-col gap-6">
        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Case de sucesso
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
            {project.name}
          </h3>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary/80 dark:border-primary/30 dark:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/50 dark:bg-slate-900/60">
              <dt className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </dt>
              <dd className="text-lg font-semibold text-slate-900 dark:text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
