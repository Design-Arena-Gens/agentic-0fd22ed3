import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
        <p className="text-sm uppercase tracking-[0.4em] text-primary/80">erro 404</p>
        <h1 className="mt-4 text-4xl font-semibold">Página não encontrada</h1>
        <p className="mt-2 max-w-md text-sm text-slate-300">
          Parece que você navegou por um caminho desconhecido. Vamos voltar para um ambiente conhecido.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
