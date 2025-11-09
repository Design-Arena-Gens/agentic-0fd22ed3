import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Estúdio Aurora — Design e Produto Digital",
  description:
    "Atualizações modernas em design e desenvolvimento web. Criamos experiências digitais que encantam e convertem.",
  openGraph: {
    title: "Estúdio Aurora",
    description:
      "Atualizações modernas em design e desenvolvimento web. Criamos experiências digitais que encantam e convertem.",
    url: "https://agentic-0fd22ed3.vercel.app",
    siteName: "Estúdio Aurora",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Estúdio Aurora — Design e Produto Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estúdio Aurora",
    description:
      "Atualizações modernas em design e desenvolvimento web. Criamos experiências digitais que encantam e convertem.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-white text-slate-900 transition-colors duration-300 antialiased dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
