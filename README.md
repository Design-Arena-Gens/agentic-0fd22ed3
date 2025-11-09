# Estúdio Aurora — Atualizações em Produto Digital

Landing page em Next.js voltada para apresentar propostas de redesign e evolução contínua de produtos digitais. O projeto traz componentes reutilizáveis, dark mode persistente e seções que podem ser ajustadas para diferentes ofertas.

## 🚀 Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## ▶️ Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## 🧪 Validação

```bash
npm run lint
npm run build
```

## 📁 Estrutura

```
app/                 # Rotas App Router
├─ layout.tsx        # Shell global + fontes
├─ page.tsx          # Landing principal
├─ api/contact/      # Endpoint fictício para formulário
components/          # Componentes reaproveitáveis
lib/data.ts          # Conteúdos centralizados
tailwind.config.ts   # Design tokens e animações
```

## ✨ Ajustes rápidos

- Atualize `lib/data.ts` para modificar serviços, métricas e FAQ.
- Ajuste tokens de cores/tipografia em `tailwind.config.ts`.
- Substitua o endpoint `/api/contact` por integração real (CRM, Formspree, etc.).
