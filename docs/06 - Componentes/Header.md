# Componente — Header

## Objetivo

Fornecer navegação persistente e controles globais sem competir com o Hero.

## Elementos

### Logo

- elemento predominantemente estético;
- clicável;
- retorna ao Hero/Início;
- deve possuir nome acessível.

### Navegação

Itens:

- Início;
- Sobre;
- Projetos;
- Habilidades;
- Contato.

### Tema

Controle para alternar entre light mode e dark mode, caso ambos sejam mantidos.

### Idioma

Controle para alternar entre português e inglês, caso a funcionalidade seja mantida.

## Estados

- normal;
- hover;
- focus;
- active;
- scrolled;
- mobile.

## Comportamento em mobile

O menu deve reduzir sua ocupação horizontal. Uma solução possível é um menu colapsado, mas a implementação fica em aberto.

## Critérios específicos

- [ ] Logo retorna ao topo.
- [ ] Todos os itens navegam corretamente.
- [ ] Controles possuem feedback visual.
- [ ] Header permanece legível sobre diferentes fundos.
- [ ] Header não cobre o conteúdo ao navegar por âncora.
