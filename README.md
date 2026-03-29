# Hybrid Spreadsheet

Hoja de calculos inteligente con AI local, formulas, vinculacion entre hojas, y busqueda. 100% offline en el browser. PWA instalable.

**Live: [hybrid-spreadsheet.pages.dev](https://hybrid-spreadsheet.pages.dev)**

## Features

### Grid
- Columnas A-Z, filas dinamicas
- Click para seleccionar, doble click para editar
- Navegacion con teclado (flechas, Tab, Enter, Delete)
- Escribir directo para editar celda
- Formula bar con referencia de celda y editor
- Numeros alineados a la derecha, formulas en verde, errores en rojo

### Formulas

| Formula | Ejemplo | Descripcion |
|---|---|---|
| SUM | `=SUM(A1:A10)` | Suma de rango |
| AVG | `=AVG(B1:B10)` | Promedio |
| COUNT | `=COUNT(A1:A100)` | Contar celdas con numeros |
| MIN | `=MIN(C1:C50)` | Minimo |
| MAX | `=MAX(C1:C50)` | Maximo |
| IF | `=IF(A1>10, "alto", "bajo")` | Condicional |
| CONCAT | `=CONCAT(A1, " ", B1)` | Concatenar texto |
| VLOOKUP | `=VLOOKUP(A1, B1:C10, 2)` | Busqueda vertical |
| HLOOKUP | `=HLOOKUP("Ventas", A1:Z2, 2)` | Busqueda horizontal |
| COUNTIF | `=COUNTIF(A1:A50, ">100")` | Contar con condicion |
| SUMIF | `=SUMIF(A1:A50, "Ventas", B1:B50)` | Sumar con condicion |
| Referencias | `=A1+B1*2` | Operaciones entre celdas |
| Rangos | `=SUM(A1:A10, C1:C10)` | Multiples rangos |

### Vinculacion entre hojas

Todas las formulas soportan referencias cross-sheet:

```
=Hoja2!A1                        → valor de otra hoja
=Hoja2!A1 + Hoja3!B2             → operaciones entre hojas
=SUM(Hoja2!A1:A10)               → funciones con rangos de otra hoja
=VLOOKUP(A1, Hoja2!A1:C10, 3)   → lookup en otra hoja
=SUMIF(Hoja2!A1:A50, ">100", Hoja2!B1:B50)  → sumif cross-sheet
```

El recalculo es en cascada — si Hoja1 referencia Hoja2 que referencia Hoja3, todas se recalculan correctamente (2 pasadas).

### Multi-hojas
- Tabs en la parte inferior
- `+` para agregar hoja
- Doble click en tab para renombrar
- Click para cambiar de hoja
- Cada hoja persiste independientemente

### AI local (Qwen3-0.6B)

Todo corre en el browser via WebGPU/WASM:

| Accion | Que hace |
|---|---|
| **Sugerir formula** | Analiza los datos y sugiere una formula para la celda seleccionada |
| **Analizar datos** | Describe patrones y insights en los datos |
| **Resumir** | Resume el contenido de la hoja |
| **Auto-completar** | Sugiere valores para completar columnas |
| **Pregunta libre** | Pregunta cualquier cosa sobre los datos |

### Busqueda
- Buscar texto en todas las celdas
- Highlight de resultados
- Navega a la primera coincidencia

### Import/Export

| Formato | Import | Export |
|---|---|---|
| CSV | Si | Si |
| TSV | Si | — |
| JSON | Si (array de objetos) | — |

### Offline / PWA
- Service Worker cachea app + modelos
- IndexedDB persiste hojas (sobrevive refresh/cierre)
- Instalable como app (Chrome/Edge > Instalar)

## Navegacion con teclado

| Tecla | Accion |
|---|---|
| Flechas | Mover seleccion |
| Tab | Mover a la derecha |
| Enter | Editar celda |
| Delete/Backspace | Borrar celda |
| Escribir | Editar directamente |
| Escape | Cancelar edicion |

## Stack

| Componente | Tecnologia | Donde corre |
|---|---|---|
| LLM | Qwen3-0.6B Q4 | WebGPU/WASM browser |
| Embeddings | multilingual-e5-small | WASM browser |
| Persistencia | IndexedDB | Browser |
| Offline | Service Worker | Browser |
| Formula engine | Vanilla JS | Browser |
| UI | HTML/CSS/JS (zero deps) | Browser |

## Costos

| Recurso | Costo |
|---|---|
| Hosting (Pages) | $0 |
| AI (local) | $0 |
| Storage | $0 |
| **Total** | **$0** |

## Repositorios relacionados

- [js-hybrid-notepad](https://github.com/MauricioPerera/js-hybrid-notepad) — Notepad con AI + busqueda hibrida + Graph RAG
- [js-vector-store](https://github.com/MauricioPerera/js-vector-store) — Vector database
- [js-doc-store](https://github.com/MauricioPerera/js-doc-store) — Document database

## Creditos

Creado por [Mauricio Perera](https://www.linkedin.com/in/mauricioperera/)

## Licencia

MIT
