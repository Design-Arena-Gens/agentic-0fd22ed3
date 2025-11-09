import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ContactForm } from "@/components/ContactForm";
import { faqs, highlights, projects, services } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-[10%] h-[520px] bg-[radial-gradient(circle_at_top,_rgba(91,33,182,0.18),_transparent_62%)] blur-3xl" />
      <Header />

      <main className="relative flex-1">
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-16 md:flex-row md:items-center md:gap-20">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              Transformação contínua
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
              Atualizamos seu produto digital com design e código de ponta.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Somos uma equipe boutique focada em elevar produtos existentes. Diagnóstico rápido,
              sprint de redesign, implementação Next.js e métricas reais de impacto.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contato" className="btn-primary">
                Começar um projeto
              </a>
              <a href="#projetos" className="btn-secondary">
                Ver estudos de caso
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-3xl border border-slate-200/60 bg-white/70 p-4 text-sm text-slate-600 shadow-md shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/50 dark:text-slate-300"
                >
                  <span className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {item.metric}
                  </span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-1">
            <div className="glass-panel relative overflow-hidden rounded-[36px] p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/60 to-primary/30 opacity-40 blur-2xl" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-primary-foreground/90">
                      Dashboard
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">Atualização UX Sprint</h3>
                  </div>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                    12 dias
                  </span>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
                  alt="Interface moderna"
                  width={900}
                  height={600}
                  className="h-56 rounded-3xl object-cover object-center"
                />
                <div className="grid grid-cols-3 gap-4 text-xs text-white/80">
                  <div>
                    <p className="font-semibold text-white">Descoberta</p>
                    <p>Diagnóstico, entrevistas e alinhamento estratégico.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Design</p>
                    <p>Prototipagem rápida com iteração guiada por dados.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Entrega</p>
                    <p>Implementação Next.js + acessibilidade AA.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-white/60 py-24 dark:bg-slate-950/40">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <SectionTitle
              eyebrow="O que atualizamos"
              title="Design moderno alinhado ao seu roadmap de produto."
              description="Estruturamos ciclos ágeis para evoluir produtos existentes sem travar seu time interno."
              action={
                <a href="#contato" className="btn-secondary">
                  Baixar amostra de entregáveis
                </a>
              }
            />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="relative py-24">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_65%)] blur-3xl" />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <SectionTitle
              eyebrow="Como trabalhamos"
              title="Processo contínuo em três camadas"
              description="Diagnóstico veloz, execução intensa e acompanhamento iterativo. Sempre com indicadores tangíveis."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "1. Diagnóstico em 7 dias",
                  body: "Alinhamos metas, analisamos dados atuais e elaboramos um plano visual interativo com prioridades.",
                },
                {
                  title: "2. Sprint de evolução",
                  body: "Design exploratório, prototipagem aprovada e implementação Next.js com handoff claro.",
                },
                {
                  title: "3. Iteração orientada a dados",
                  body: "Monitoramos métricas, rodamos experimentos e garantimos melhorias contínuas pós-lançamento.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-700/60 dark:bg-slate-900/40"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="bg-white py-24 dark:bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
            <SectionTitle
              eyebrow="Resultados recentes"
              title="Projetos que combinam estética e performance"
              description="Selecionamos casos que mostram como conectar redesign com impacto real em métricas de negócio."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectShowcase
                  key={project.name}
                  project={project}
                  accent={
                    <div
                      className={`h-full w-full bg-gradient-to-br ${
                        index % 2 === 0
                          ? "from-primary/30 via-secondary/20 to-primary/5"
                          : "from-secondary/30 via-primary/20 to-secondary/5"
                      }`}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/2 bg-[radial-gradient(circle_at_left,_rgba(91,33,182,0.18),_transparent_70%)] blur-3xl" />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row">
            <div className="flex-1 space-y-6">
              <SectionTitle
                eyebrow="Perguntas frequentes"
                title="Clareza do começo ao fim do projeto"
                description="Simplificamos onboarding, comunicação e métricas para que as decisões sejam fluidas."
              />
              <div className="grid gap-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-3xl border border-slate-200/60 bg-white/70 p-5 transition hover:border-primary/40 dark:border-slate-700/50 dark:bg-slate-900/40"
                  >
                    <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:hidden dark:text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
            <div id="contato" className="flex-1">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
