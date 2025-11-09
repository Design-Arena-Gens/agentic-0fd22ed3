import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/40 bg-white/70 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-semibold text-white shadow-lg shadow-primary/40">
            EA
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">
              Estúdio Aurora
            </span>
            <span className="text-xs text-slate-500">Design & Produto Digital</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex md:items-center dark:text-slate-300">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-primary"
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-[-6px] h-px scale-x-0 bg-gradient-to-r from-primary/80 to-secondary/80 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contato" className="btn-primary hidden md:inline-flex">
            Agendar diagnóstico
          </a>
        </div>
      </div>
    </header>
  );
}
