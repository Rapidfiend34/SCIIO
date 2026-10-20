# ULTIMA SENAL / SCIIO

Una estacion desaparecida. Tu nombre en el ruido.

Prototipo jugable de misterio y ciencia ficcion en un terminal CRT: explora Nadir, recupera sus registros, sintoniza una voz y decide que hacer con la ultima reserva de energia. Incluye dos enigmas, conversaciones con ECO y tres finales. Historia en espanol, escenas ASCII 3D, controles con raton/teclado y teclado numerico para pantallas tactiles.

## Jugar en local

Requiere Node.js 22 o posterior. No necesita instalar dependencias.

```sh
npm run dev
```

Abre http://localhost:3000 y pulsa CONECTAR. La partida se guarda en este navegador. CUADERNO muestra el objetivo y las pistas; PISTA ofrece ayuda sin penalizacion. No hay limite de tiempo.

- Flechas y Enter: elegir controles. Escape: cerrar ventanas o cancelar una decision.
- 1 a 5: sectores. 6 o J: cuaderno. P: pista. ?: ayuda.
- Escribe ordenes desde el campo inferior: AYUDA explica las disponibles.
- Arrastrar o Shift + flechas: girar la escena. Rueda o + / -: zoom.
- M: sonido ambiente, desactivado al inicio. C: colores.
- REINICIAR pide confirmacion y conserva los finales descubiertos.

El guardado depende de localStorage: si el navegador lo bloquea, la pantalla avisa y la partida continua solo durante esa sesion. No hay cuentas ni sincronizacion.

## Verificar y compilar

```sh
npm test
npm run build
```

`dist/` contiene el sitio estatico. Las pruebas cubren las tres rutas completas, los bloqueos y pistas de los enigmas, confirmacion y cancelacion, guardados corruptos, reinicio, controles moviles y regresiones de las escenas 3D.

## Experimentos anteriores

- http://localhost:3000/retro-computer conserva el explorador original.
- http://localhost:3000/#hermes abre la adaptacion de la pagina de Hermes.

Hermes fue un experimento informativo: no instala ni ejecuta un agente. ECO es un personaje con dialogos escritos, sin API de IA. El sonido es sintetizado; no hay doblaje.

## Vercel

Importa `Rapidfiend34/SCIIO` o ejecuta `vercel --prod` con una cuenta habilitada. `vercel.json` define el build estatico, la salida `dist/` y la ruta `/retro-computer`. No requiere variables de entorno ni un servidor Node.js en produccion.

## Procedencia

El motor visual procede de https://ardor.cloud/retro-computer?ref=cssda, recuperado el 19 de octubre de 2026. Conserva los shaders CRT, tipografia incrustada, conversion ASCII y controles accesibles. Se retiraron los scripts de analitica de Datafast y Google. El bundle mantiene el aviso de licencia MIT de Three.js. Los recursos y marcas originales de Ardor pertenecen a sus titulares; esta copia no acredita una licencia para redistribuirlos.

SHA-256 del HTML original: `d14746a5b5a7d2e8c55c51c84faed9dcd3eac74592524f57d9bc163972ae6044`.

El contenido del experimento Hermes se adapto de https://hermes-agent.nousresearch.com/ el 19 de octubre de 2026. Los enlaces de ese apartado llevan a los servicios oficiales; sus precios son una instantanea fechada. La historia y reglas de ULTIMA SENAL son nuevas. Se requiere JavaScript y WebGL; se respeta la preferencia de movimiento reducido.
