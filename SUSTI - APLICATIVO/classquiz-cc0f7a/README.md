# CC0F7-A Quiz Maker

Aplicación web local estilo ClassMarker para practicar preguntas del curso de Criptografía Aplicada.

## Características

- Preguntas mezcladas aleatoriamente.
- Alternativas A-E mezcladas aleatoriamente en cada reinicio.
- Soporta selección única y múltiple.
- Calcula puntuación final por coincidencia exacta.
- Botón **Reiniciar aleatorio** para cargar otro orden.
- Revisión final con respuestas correctas y explicación.
- No necesita base de datos ni backend.

## Ejecutar en Visual Studio Code

### Opción 1: Live Server

1. Abre la carpeta `classquiz-cc0f7a` en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.

### Opción 2: abrir directo

1. Abre `index.html` con tu navegador.

## Archivos principales

- `index.html`: estructura de la aplicación.
- `styles.css`: diseño visual estilo ClassMarker.
- `questions.js`: banco de preguntas y respuestas.
- `app.js`: lógica de aleatorización, marcado, puntuación y revisión.

## Nota

Al ser una aplicación frontend local, la clave de respuestas está dentro de `questions.js`. Para un examen real con seguridad, se debe implementar backend.
