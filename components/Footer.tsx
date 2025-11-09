export function Footer() {
  return (
    <footer className="border-t border-slate-200/40 bg-slate-50/80 py-10 text-sm text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-semibold text-slate-900 dark:text-slate-100">Estúdio Aurora</span>
          <p>Atualizações contínuas em design e produto digital.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:contato@estudioaurora.co"
            className="transition hover:text-primary"
          >
            contato@estudioaurora.co
          </a>
          <a href="https://cal.com/estudio-aurora/diagnostico" className="transition hover:text-primary">
            Calendário
          </a>
          <a href="https://linkedin.com" className="transition hover:text-primary">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
