"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      form.reset();
      setFormState("success");
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/50">
      <div className="absolute inset-y-0 right-[-10%] h-[200%] w-[40%] rotate-12 bg-gradient-to-br from-primary/20 via-secondary/30 to-primary/5 blur-3xl" />
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Vamos atualizar seu produto?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Conte sobre seu contexto em menos de 2 minutos e retornamos em até 24h úteis.
          </p>
        </div>

        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Nome completo
          <input
            required
            name="name"
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-primary/30 transition focus:border-primary focus:ring dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            placeholder="Maria Silva"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          E-mail corporativo
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-primary/30 transition focus:border-primary focus:ring dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            placeholder="nome@empresa.com"
          />
        </label>

        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          Objetivo principal
          <textarea
            required
            name="goal"
            rows={4}
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-primary/30 transition focus:border-primary focus:ring dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            placeholder="Ex.: Otimizar conversão no fluxo de trial e atualizar visual para refletir o novo posicionamento."
          />
        </label>

        <button
          type="submit"
          className="btn-primary mt-2"
          disabled={formState === "loading"}
        >
          {formState === "loading" ? "Enviando..." : "Solicitar diagnóstico"}
        </button>

        {formState === "success" && (
          <p className="rounded-2xl border border-emerald-300/60 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-900/40 dark:text-emerald-200">
            Tudo certo! Recebemos seu pedido e retornaremos com uma proposta breve.
          </p>
        )}
        {formState === "error" && (
          <p className="rounded-2xl border border-rose-300/60 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-700/60 dark:bg-rose-900/40 dark:text-rose-200">
            Ops! Algo deu errado no envio. Pode tentar novamente em instantes?
          </p>
        )}
      </form>
    </div>
  );
}
