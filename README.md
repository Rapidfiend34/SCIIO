# Ardor Retro Computer — réplica local

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
