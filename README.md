# Hybrid Spreadsheet

Hoja de calculos inteligente con AI local, formulas, y busqueda. 100% offline en el browser. PWA instalable.

## Features

- **Grid editable**: Columnas A-Z, filas dinamicas, navegacion con teclado
- **Formulas**: SUM, AVG, COUNT, MIN, MAX, IF, CONCAT, referencias (A1+B1*2), rangos (A1:A10)
- **Multi-hojas**: Tabs para multiples hojas, renombrar con doble click
- **AI local** (Qwen3-0.6B): Sugerir formulas, analizar datos, resumir, auto-completar
- **Busqueda**: Buscar en celdas con highlight
- **Import CSV/TSV/JSON**: Drag & drop o boton
- **Export CSV**: Descarga la hoja activa
- **Offline**: Service Worker cachea todo
- **PWA**: Instalable como app
- **Dark theme**: Responsive

## Formulas soportadas

| Formula | Ejemplo |
|---|---|
| SUM | `=SUM(A1:A10)` |
| AVG | `=AVG(B1:B10)` |
| COUNT | `=COUNT(A1:A100)` |
| MIN | `=MIN(C1:C50)` |
| MAX | `=MAX(C1:C50)` |
| IF | `=IF(A1>10, "alto", "bajo")` |
| CONCAT | `=CONCAT(A1, " ", B1)` |
| Referencias | `=A1+B1*2` |
| Rangos | `=SUM(A1:A10, C1:C10)` |

## Stack

| Componente | Tecnologia |
|---|---|
| LLM | Qwen3-0.6B (WebGPU/WASM) |
| Embeddings | multilingual-e5-small |
| Persistencia | IndexedDB |
| Offline | Service Worker |
| UI | Vanilla HTML/CSS/JS |

## Creditos

Creado por [Mauricio Perera](https://www.linkedin.com/in/mauricioperera/)

## Licencia

MIT
