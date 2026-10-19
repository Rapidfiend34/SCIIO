# SCIIO — Ardor Retro Computer + Hermes

Reproducción de https://ardor.cloud/retro-computer?ref=cssda, recuperada el 19 de octubre de 2026.
Conserva el terminal WebGL original, los shaders CRT, la fuente incrustada, las escenas ASCII animadas, los controles de teclado, los comandos, los colores, el audio y el diseño adaptable.

## Ejecutar

Requiere Node.js 22 o posterior. No necesita instalar dependencias.

```sh
npm run dev
```

Abre http://localhost:3000 o http://localhost:3000/retro-computer?ref=cssda.
También acepta `--port` y `--host`, y la variable `PORT`.

```sh
npm test
npm run build
```

`dist/` contiene el sitio estático listo para alojar. Para usar también la ruta `/retro-computer` en un alojamiento estático, configura su fallback hacia `index.html`.

## Procedencia y cambios

Se ha reutilizado el código que entrega públicamente la referencia, en lugar de aproximar el efecto visual. Los archivos originales se separaron en HTML, CSS y JavaScript; se retiraron los scripts de analítica de Datafast y Google. Los enlaces de producto apuntan al sitio original. Los recursos visuales se sirven localmente.

SHA-256 del HTML original: `d14746a5b5a7d2e8c55c51c84faed9dcd3eac74592524f57d9bc163972ae6044`.

El bundle conserva el aviso de licencia MIT de Three.js. Las marcas, textos y demás recursos de Ardor pertenecen a sus titulares; esta copia no acredita una licencia para redistribuirlos.

La representación requiere JavaScript y WebGL. Las ideas guardadas se almacenan en el navegador. Los servicios externos de Ardor no forman parte de esta copia.

## Sección Hermes

Pulsa `6` o `H`, elige `6 HERMES AGENT`, o abre http://localhost:3000/#hermes.
El comando `HERMES` también abre la sección; `SCIIO` vuelve a la escena anterior.

Dentro de Hermes, `1` a `5` abren resumen, capacidades, instalación, preguntas frecuentes y Nous Portal; `6` vuelve a SCIIO. Los textos largos usan la paginación del terminal. Colores, configuración de pantalla y controles accesibles siguen usando el motor CRT original.

Contenido adaptado de https://hermes-agent.nousresearch.com/ el 19 de octubre de 2026. Los precios son una instantánea fechada; el enlace CURRENT PLANS lleva a las condiciones actuales. La sección incluye enlaces oficiales a documentación, GitHub, comunidad, descargas y despliegue en la nube. COPY INSTALL copia el comando oficial: no ejecuta ni instala software. La ilustración ASCII de Hermes se dibuja en la misma matriz del terminal.

La inspección se hizo con el navegador y el HTML público; REA MCP no está registrado en esta sesión. No se modificó su configuración. Esta integración es un apartado informativo y no conecta un agente ni una cuenta de Nous.
