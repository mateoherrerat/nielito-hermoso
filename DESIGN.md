---
name: Daniela ASCII Heart
description: Escultura tipográfica en arte ASCII esculpida con las letras del nombre DANIELA con volumen 3D y latido orgánico
colors:
  ink-contour: "#c9184a"
  ink-mid: "#ff4d6d"
  ink-core: "#ff758f"
  ink-highlight: "#ffb3c1"
  ink-active: "#fff0f3"
  bg-obsidian: "#070609"
typography:
  display:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace"
    fontSize: "min(2.55vw, 3.45dvh)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.025em"
  body:
    fontFamily: "'JetBrains Mono', ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace"
    fontSize: "min(2.55vw, 3.45dvh)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.025em"
spacing:
  sm: "0.5rem"
  md: "1.25rem"
  lg: "2.5rem"
components:
  ascii-cell-core:
    textColor: "{colors.ink-core}"
    typography: "{typography.body}"
  ascii-cell-contour:
    textColor: "{colors.ink-contour}"
    typography: "{typography.display}"
  ascii-cell-active:
    textColor: "{colors.ink-active}"
    typography: "{typography.display}"
---

# Design System: Daniela ASCII Heart (Volumetric Edition)

## Overview

**Creative North Star: "Volumetric Ruby ASCII Heartbeat"**

Escultura tipográfica pura en cuadrícula monoespaciada de 53×19 celdas donde la silueta del corazón es esculpida de forma continua con la secuencia `D-A-N-I-E-L-A`. No contiene barras de navegador simuladas ni consolas falsas. La pieza cobra vida mediante un degradado de profundidad volumétrica en 4 niveles de luz y un latido orgánico con ritmo cardíaco auténtico (*lub-dub*).

## Colors

- **Contour Ruby Deep** (`#c9184a`): Define el perímetro y la sombra de profundidad.
- **Mid-Tier Coral Rose** (`#ff4d6d`): Transición volumétrica intermedia.
- **Core Heart Pink** (`#ff758f`): Cuerpo luminoso interior.
- **Apex Highlight Blossom** (`#ffb3c1`): Crestas y reflejos luminosos de los lóbulos.
- **Active Word Pure Ivory** (`#fff0f3`): Resplandor marfil con aura luminosa que ilumina la palabra `DANIELA` completa y activa ondas de luz expansivas.
- **Obsidian Deep Ground** (`#070609`): Lienzo oscuro con halo elíptico tenue en el centro óptico.

## Typography

- **Fuente:** `JetBrains Mono` autoalojada.
- **Escala de Celda:** `min(2.55vw, 3.45dvh)` con `overflow: hidden`, asegurando cero scroll en cualquier relación de aspecto.

## Motion & Interactivity

1. **Heartbeat (*Lub-Dub*):** Animación de doble contracción cardíaca (6% primer pulso, 20% segundo pulso, 34% relajación y reposo) cada 3.4 segundos.
2. **Word Lock:** Pasar el cursor o tocar ilumina las 7 letras del bloque `DANIELA` con elevación y resplandor.
3. **Light Ripple:** Onda expansiva suave al interactuar con las celdas.
