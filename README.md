# ULTIMA SENAL / SCIIO

No recuerdas quien eres. El terminal si.

Prototipo jugable de misterio y ciencia ficcion en un terminal CRT: recupera el acceso con un alias, explora Nadir y decide si confiar en ECO. La energia solo alcanza para una ruta: clinica de recuerdos u observatorio. Incluye sincronizacion de pulsos, reconstruccion de recuerdos y un circuito de conexiones, ademas del archivo y la frecuencia. Cuatro finales dependen de tus decisiones y descubrimientos. Historia en espanol, escenas ASCII 3D, controles con raton/teclado y teclado numerico para pantallas tactiles.

## Jugar en local

Requiere Node.js 22 o posterior. No necesita instalar dependencias.

```sh
npm run dev
```

Abre http://localhost:3000 y pulsa REGISTRARSE. Usa un alias ficticio de 2 a 16 letras, numeros, guion o guion bajo; completa las dos secuencias de acceso y abre la sesion. La partida se guarda en este navegador. CUADERNO muestra el objetivo y las pistas; PISTA ofrece ayuda sin penalizacion. No hay limite de tiempo.

- Flechas y Enter: elegir controles. Escape: cerrar ventanas o cancelar una decision.
- 1 a 7: sectores. 8 o J: cuaderno. P: pista. ?: ayuda.
- Escribe ordenes desde el campo inferior: AYUDA explica las disponibles.
- Arrastrar o Shift + flechas: girar la escena. Rueda o + / -: zoom.
- M: sonido ambiente, desactivado al inicio. C: colores.
- REINICIAR pide confirmacion y conserva los finales descubiertos.

El registro es parte de la ficcion: no pide correo ni contrasena, no crea una cuenta real y solo recuerda un perfil por navegador. Los minijuegos se pueden repetir sin penalizacion y tienen botones para pantallas tactiles. Las rutas de energia requieren confirmacion y se mantienen hasta reiniciar.

El guardado depende de localStorage: si el navegador lo bloquea, la pantalla avisa y la partida continua solo durante esa sesion. No hay sincronizacion entre dispositivos. Los guardados anteriores conservan registros y finales, y pasan por el nuevo acceso.

## Verificar y compilar

```sh
npm test
npm run build
```

`dist/` contiene el sitio estatico. Las pruebas cubren los cuatro finales, ambos escenarios, registro y sincronizacion, migracion de partidas, los bloqueos y pistas de los enigmas, confirmacion y cancelacion, guardados corruptos, reinicio, controles moviles y regresiones de las escenas 3D.

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
