# Registro de Decisões

Use este arquivo para registrar decisões importantes e evitar voltar repetidamente às mesmas discussões.

## Modelo

```markdown
## DEC-001 — Título

**Data:** YYYY-MM-DD

**Status:** aceita | substituída

**Contexto:**
Por que essa decisão foi necessária?

**Opções consideradas:**
- A
- B

**Decisão:**
O que foi escolhido?

**Motivo:**
Por que essa opção foi escolhida?

**Consequência:**
O que muda no projeto?
```

---

## DEC-001 — Documento baseado no protótipo inicial

**Data:** 2026-09-29

**Status:** aceita

**Contexto:**
O protótipo apresentava estrutura, direção visual e algumas ideias de interação, mas misturava requisitos decididos com hipóteses.

**Decisão:**
Separar requisitos funcionais, não funcionais, decisões pendentes, critérios de aceite e backlog.

**Motivo:**
Facilitar a implementação incremental e permitir mudanças sem perder o raciocínio do projeto.

## DEC-002 — Identidade visual e coleção de objetos

**Data:** 2026-10-06

**Status:** aceita

**Contexto:**
O protótipo precisava de hierarquia visual, conteúdo representativo e uma apresentação de projetos baseada em objetos, mantendo a proposta tecnológica.

**Decisão:**
- Manter fundo escuro, texto claro, ciano para interação e roxo/magenta nos objetos.
- Usar Space Grotesk nos títulos e Inter no texto, priorizando leitura e uma estética contemporânea. Orbitron permanece como referência inicial, substituída nesta implementação.
- Construir a esfera com Canvas 2D e partículas: aproximação do cursor aumenta a influência roxa; afastamento recupera o estado inicial. Pausar a animação fora da área visível e respeitar redução de movimento.
- Apresentar os projetos como objetos construídos em CSS, com filtros e detalhes em um diálogo nativo acessível por teclado.
- Manter uma página única com navegação persistente e menu mobile. Tema claro e inglês seguem fora desta versão, pois estavam pendentes.
- Centralizar projetos e contatos em `src/data/portfolio.js`. Projetos demonstrativos são identificados; contatos sem URL aparecem como “Em breve”. Não inventar destinos ou trabalhos reais.

**Motivo:**
Dar personalidade ao portfólio e demonstrar interação sem adicionar dependências gráficas ou sacrificar a leitura.

**Consequência:**
A experiência visual pode ser revisada com conteúdo demonstrativo. Antes de publicar como portfólio profissional, substituir exemplos, confirmar habilidades e preencher os contatos reais.

## DEC-003 — Versão didática para iniciantes

**Data:** 2026-10-06

**Status:** aceita; substitui as partes experimentais da DEC-002.

**Contexto:**
O portfólio será utilizado por um aluno iniciante. A compreensão do código tem prioridade sobre efeitos visuais avançados.

**Decisão:**
- Escrever todos os estilos com uma propriedade por linha e indentação por tabulação.
- Substituir a esfera por uma janela de código estática, feita com HTML e CSS.
- Remover Canvas, observadores de visibilidade e efeitos gráficos avançados da experiência principal.
- Usar símbolos estáticos para representar os objetos dos projetos.
- Usar os elementos nativos details e summary para os detalhes dos projetos.
- Manter useState apenas no menu mobile e no filtro de categorias.
- Usar funções nomeadas, dados em objetos e JSX organizado em várias linhas, com comentários curtos.

**Consequência:**
O visual escuro, a responsividade, as seções e os projetos demonstrativos continuam. A esfera interativa descrita nos requisitos anteriores não faz parte desta versão, por solicitação explícita.
