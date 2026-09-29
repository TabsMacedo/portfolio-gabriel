# Tecnologia e Implementação

## Stack

**Pendente:** definir stack final.

Possíveis decisões a registrar:

- framework/biblioteca;
- linguagem;
- ferramenta de build;
- CSS/Tailwind/CSS Modules/etc.;
- biblioteca de animação;
- Canvas/WebGL para a esfera;
- hospedagem;
- analytics, se necessário.

## Critérios para escolher tecnologia

A tecnologia deve ser escolhida pelo problema, não apenas pela novidade.

Para a esfera interativa, avaliar:

| Critério | Pergunta |
|---|---|
| Performance | O efeito roda suavemente? |
| Compatibilidade | Funciona nos navegadores-alvo? |
| Complexidade | Quanto código/infraestrutura exige? |
| Manutenção | Será fácil alterar depois? |
| Acessibilidade | Existe fallback adequado? |
| Responsividade | Adapta-se a mobile? |

## Arquitetura de componentes

Preferir componentes pequenos quando houver comportamento ou estrutura reutilizável.

Exemplo conceitual:

```text
App
├── Header
├── Hero
│   └── InteractiveSphere
├── About
├── Projects
│   └── ProjectCard
├── Skills
└── Footer
```

## Dados dos projetos

Considerar manter os projetos em uma estrutura de dados separada do componente visual.

Isso facilita adicionar/remover projetos sem duplicar markup.

## Performance da animação

Evitar animações contínuas que alterem propriedades que provoquem layout desnecessário. Priorizar técnicas adequadas para composição gráfica e medir o resultado real.

## Deploy

**Pendente:** escolher plataforma de hospedagem e configurar domínio, caso necessário.
