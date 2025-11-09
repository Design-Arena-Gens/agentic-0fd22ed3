import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionTitle({ eyebrow, title, description, action }: SectionTitleProps) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
      <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary dark:border-primary/20 dark:bg-primary/10">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 dark:text-slate-400">{description}</p>
      )}
      {action && <div className="mt-2 flex justify-center">{action}</div>}
    </div>
  );
}
