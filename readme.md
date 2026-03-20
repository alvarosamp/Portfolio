# Portfolio

Projeto de portfólio em desenvolvimento com Next.js (App Router), React e Tailwind CSS v4.

## Visão Geral

Este repositório contém a aplicação em [my-app](my-app). A estrutura está sendo montada passo a passo com base em tutorial, incluindo:

- Layout global com [Header](my-app/components/Header.jsx)
- Componente de navegação em [Nav](my-app/components/Nav.jsx)
- Estilos globais e tema Tailwind v4 em [globals.css](my-app/app/globals.css)
- Página inicial simples em [page.tsx](my-app/app/page.tsx)

## Tecnologias

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript (configurado no projeto)
- next/font (Geist, Geist Mono e JetBrains Mono)

## Estrutura Atual

```text
Portfolio/
	assets/
	my-app/
		app/
			globals.css
			layout.tsx
			page.tsx
		components/
			Header.jsx
			Nav.jsx
			ui/
		public/
		package.json
	readme.md
```

## Como Rodar Localmente

Pré-requisitos:

- Node.js instalado (recomendado LTS)
- npm

Passos:

```bash
cd my-app
npm install
npm run dev
```

Abra no navegador:

- http://localhost:3000

## Scripts Disponíveis

Dentro de [my-app](my-app):

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de produção
- `npm run start`: inicia app em modo produção
- `npm run lint`: executa lint

## Tema e Breakpoints (Tailwind v4)

No arquivo [globals.css](my-app/app/globals.css), o projeto usa tokens com `@theme inline`:

- Cores: `primary`, `accent`, `accent-hover`
- Fonte principal: `font-primary` (JetBrains Mono)
- Breakpoints personalizados:
	- `sm: 640px`
	- `md: 768px`
	- `lg: 960px`
	- `xl: 1200px`

Também existe classe `.container` com padding horizontal de `15px`.

## Observações

- O projeto ainda está em construção e algumas partes estão sendo ajustadas conforme o tutorial.
- A pasta [components/ui](my-app/components/ui) existe, mas ainda está vazia.

## Próximos Passos Sugeridos

1. Criar componentes em [my-app/components/ui](my-app/components/ui) conforme a necessidade (ex.: botão).
2. Completar navegação desktop/mobile no [Header](my-app/components/Header.jsx).
3. Evoluir conteúdo da página inicial em [page.tsx](my-app/app/page.tsx).
