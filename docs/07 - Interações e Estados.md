# Interações e Estados

## 1. Navegação

### Clique em item do Header

**Entrada:** clique/toque em uma seção.

**Resultado:** página rola até a seção correspondente.

### Clique na logo

**Resultado:** retorna ao Hero.

### Clique em “descer”

**Resultado:** rola para o início do Content.

## 2. Header scroll

```text
Topo
  ↓
Header integrado ao Hero
  ↓ rolagem
Header opaco/transparente
```

A mudança deve ser progressiva e visualmente discreta.

## 3. Tema

Se implementado:

```text
Dark → clique → Light
Light → clique → Dark
```

Considerar preferência do sistema e persistência local posteriormente.

## 4. Idioma

Se implementado:

```text
PT → clique → EN
EN → clique → PT
```

O conteúdo deve mudar sem quebrar layout ou navegação.

## 5. Esfera

### Variável conceitual

`infectionLevel ∈ [0, 1]`

- `0` = estado inicial;
- `0.5` = influência intermediária;
- `1` = estado totalmente infectado.

A variável pode controlar intensidade de partículas, cor, brilho, deformação ou outros efeitos.

### Proximidade

Quanto menor a distância do cursor em relação à esfera, maior a intensidade potencial da interação.

### Tempo

A permanência próxima pode aumentar gradualmente `infectionLevel`.

### Recuperação

Ao perder a interação, `infectionLevel` diminui progressivamente.

## 6. Estados de acessibilidade

Se `prefers-reduced-motion` estiver ativo:

- reduzir ou remover movimento contínuo;
- remover transições exageradas;
- manter conteúdo e controles completamente funcionais.

## 7. Estados dos controles

Todo controle interativo relevante deve possuir:

- default;
- hover, quando aplicável;
- focus;
- active/pressed, quando aplicável;
- disabled, quando aplicável.
