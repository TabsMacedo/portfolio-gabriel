# Responsividade e Acessibilidade

## Breakpoints

Não definir valores finais antes da implementação. Os breakpoints devem surgir das necessidades do layout.

Faixas a validar:

- mobile pequeno;
- mobile grande;
- tablet;
- desktop;
- desktop amplo.

## Mobile

Prioridades:

1. leitura;
2. navegação;
3. contato;
4. projetos;
5. efeitos decorativos.

A esfera pode ser simplificada ou ter comportamento baseado em toque, mas não deve ser obrigatório interagir com ela.

## Teclado

Validar:

- tabulação lógica;
- foco visível;
- controles acionáveis via teclado;
- nenhum elemento essencial preso a hover.

## Leitores de tela

- usar HTML semântico;
- headings em ordem lógica;
- links com nomes descritivos;
- imagens com `alt` adequado;
- decoração puramente visual marcada como tal quando necessário.

## Movimento

Implementar suporte a:

```css
@media (prefers-reduced-motion: reduce) {
  /* reduzir animações e transições não essenciais */
}
```

## Contraste

Validar especialmente:

- branco azulado sobre fundo escuro;
- azul-cinza sobre fundo escuro;
- ciano sobre fundos variados;
- magenta e roxo em textos, evitando uso como única indicação de estado.
