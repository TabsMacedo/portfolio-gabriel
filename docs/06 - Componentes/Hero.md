# Componente — Hero

## Objetivo

Apresentar imediatamente a identidade profissional e estabelecer a identidade visual do portfólio.

## Conteúdo

- Nome;
- profissão/cargo;
- resumo curto;
- ações principais;
- elemento visual;
- controle para continuar a navegação.

## CTAs

A ideia inicial considera:

- currículo;
- projetos;
- contato / GitHub / LinkedIn / e-mail.

**Status:** revisar antes da implementação final. Os botões podem ser redundantes se as mesmas ações já estiverem disponíveis no Header ou em outras seções.

## Esfera interativa

### Estado inicial

- esfera predominantemente azul/ciana;
- movimento contínuo sutil;
- aparência luminosa;
- sem exigir interação para comunicar seu propósito.

### Aproximação do cursor

- partículas roxas começam a surgir;
- partículas devem se deslocar na direção da esfera;
- a influência deve crescer conforme a proximidade/persistência do cursor.

### Estado infectado

- maior presença de roxo;
- pode chegar a um estado predominantemente roxo;
- o efeito deve continuar visualmente coerente e não bloquear o conteúdo.

### Recuperação

Quando o cursor se afasta:

- a influência roxa diminui;
- a esfera retorna gradualmente ao estado inicial;
- uma animação secundária de “cura/combate” é opcional.

## Tecnologia da esfera

**Pendente:** escolher entre CSS, Canvas, WebGL ou outra abordagem.

A escolha deve considerar:

- performance;
- complexidade;
- responsividade;
- acessibilidade;
- manutenção;
- compatibilidade.

## Fallback

Em dispositivos sem hover ou com redução de movimento, a esfera deve permanecer visualmente interessante sem exigir a interação.
