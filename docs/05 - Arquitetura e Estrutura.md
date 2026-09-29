# Arquitetura e Estrutura

## Estrutura conceitual

```text
Página
├── Header
│   ├── Logo
│   ├── Navegação
│   ├── Tema
│   └── Idioma
│
├── Hero
│   ├── Introdução
│   │   ├── Nome
│   │   ├── Profissão
│   │   ├── Resumo
│   │   └── CTAs
│   ├── Elemento visual interativo
│   └── Controle de rolagem
│
├── Content
│   ├── Sobre
│   ├── Projetos
│   └── Habilidades
│
└── Footer
    └── Contato
```

## Seções e IDs sugeridos

| Seção | ID HTML sugerido |
|---|---|
| Início | `home` |
| Sobre | `about` |
| Projetos | `projects` |
| Habilidades | `skills` |
| Contato | `contact` |

## Estratégia de navegação

A primeira versão pode utilizar navegação por âncoras em uma página única.

Exemplo conceitual:

```text
#home
#about
#projects
#skills
#contact
```

## Header durante a rolagem

Estado inicial:

- visualmente integrado ao Hero;
- mesmo contexto de fundo;
- menor separação visual.

Estado após rolagem:

- background transparente/opaco;
- maior contraste com o conteúdo;
- aparência de elemento persistente sobre a página.

A transição deve ser sutil e não causar deslocamento inesperado do conteúdo.
