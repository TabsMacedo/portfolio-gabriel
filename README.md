# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Como estudar este portfólio

1. Comece em src/App.jsx: ele reúne Menu, Hero, Content e Footer.
2. Leia Hero.jsx e Hero.module.css: são exemplos de conteúdo e estilo sem lógica de interação.
3. Altere textos, projetos e contatos em src/data/portfolio.js. Cada projeto é um objeto dentro de uma lista.
4. Em Content.jsx, map repete os cartões. O elemento HTML details abre os detalhes sem JavaScript.
5. Em Menu.jsx, os links ficam sempre visíveis, sem botão de menu e sem estado no React.
6. Os arquivos .module.css pertencem aos componentes. index.css reúne as cores, fontes e estilos compartilhados. Cada propriedade ocupa uma linha.

Para executar: npm run dev. Para verificar: npm run build e npm run lint.
