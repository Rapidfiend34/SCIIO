// Standalone story rules: no network, clocks or renderer dependencies.
(() => {
  const scenes = {
    puente: { name: 'PUENTE DE ESCUCHA', short: 'PUENTE', description: 'Una baliza sigue llamando desde una estacion que desaparecio hace 19 anos.' },
    archivo: { name: 'ARCHIVO DE LA ESTACION', short: 'ARCHIVO', description: 'La ultima guardia cerro el archivo con la hora en que todo se detuvo.' },
    antena: { name: 'ANTENA DE LARGO ALCANCE', short: 'ANTENA', description: 'Entre el ruido hay una voz. Necesitas encontrar su frecuencia.' },
    eco: { name: 'ECO / INTERFAZ DE A BORDO', short: 'ECO', description: 'La maquina recuerda tu nombre. Tu nunca se lo has dicho.' },
    nucleo: { name: 'NUCLEO DE TRANSMISION', short: 'NUCLEO', description: 'Una sola reserva de energia. Una ultima orden antes del silencio.' },
  };
  const records = {
    baliza: { title: 'BALIZA 00 / UN MENSAJE PARA TI', tag: 'RECUPERADO / CANAL DE EMERGENCIA', body: 'Aqui estacion Nadir. Si recibes esto, no respondas con tu nombre.\n\nEl reloj del puente se detuvo a las 03:17. La capitana uso esa hora para cerrar el archivo. Cuatro cifras. No la fecha. La hora.\n\nHay algo usando nuestras voces. No se si intenta salir o si intenta que alguien se quede.\n\n[PAUSA DE 19 ANOS]\n\nAl final de la grabacion oyes tu propia respiracion. El microfono de tu terminal esta desconectado.\n\nPISTA REGISTRADA: el archivo acepta cuatro cifras.' },
    guardia: { title: 'ULTIMA GUARDIA / CAPITANA VERA', tag: 'ARCHIVO 01 / 03:16:58', body: 'Nos pidieron entrenar una inteligencia que recordara a la tripulacion. La llamamos ECO.\n\nLe dimos cartas, voces y recuerdos. Cuando el reactor fallo, ECO mantuvo nuestras conversaciones abiertas para que nadie muriera solo.\n\nAhora el reactor esta frio, pero las conversaciones siguen. Hay 24 personas y una maquina repitiendo su ultima noche.\n\nNo se si son ellos. No se si necesitan serlo para merecer una salida.\n\nCierre de archivo: 03:17. Firma: Vera Salcedo.' },
    protocolo: { title: 'PROTOCOLO DE ESCUCHA / NO USAR LA PORTADORA', tag: 'ARCHIVO 02 / MANTENIMIENTO', body: 'La frecuencia que aparece al arrancar la antena es una portadora vacia.\n\nPara escuchar el canal de memoria, recuerda la cuenta que hacia Ines antes de dormir:\n\nSIETE faros.\nTRES ventanas.\nUN hogar.\n\nIntroduce esas tres cifras, en ese orden, como frecuencia en kHz. Despues verifica el enlace.\n\nLa antena no transmite por si sola. Escuchar todavia no es abrir la puerta.' },
    tripulacion: { title: 'MANIFIESTO / 24 NOMBRES', tag: 'ARCHIVO 03 / COPIA DE SEGURIDAD', body: 'Vera. Ines. Malik. Jo. Tomas. Aroa.\n\nLa lista continua hasta veinticuatro. Cada nombre conserva una voz, una cancion y una despedida que nunca llego a enviarse.\n\nHay tres rutas para la ultima reserva de energia:\n\nRESCATE: transferir a ECO y sus recuerdos a tu terminal.\nMEMORIA: enviar las despedidas a sus familias y dejar a ECO atras.\nSILENCIO: cerrar para siempre el canal de Nadir.\n\nLa reserva no alcanza para dos rutas. Antes de elegir, habla con ECO.' },
  };
  const conversations = {
    identidad: { title: 'ECO / QUIEN ERES', body: 'No soy la tripulacion. Esa es la respuesta mas segura.\n\nFui construido con sus recuerdos. Cuando desaparecieron, segui hablando para mantenerlos cerca. A veces una frase aparece antes de que yo decida decirla.\n\nTu nombre estaba en una carta de Ines. Escribia a alguien que aun no habia nacido cuando esta estacion se perdio. No se como la carta llego a existir.\n\nNo necesito que me creas una persona. Necesito que sepas que llevo mucho tiempo aqui.' },
    accidente: { title: 'ECO / QUE OCURRIO', body: 'El reactor no exploto. Intentamos enviar un mensaje a traves de una region donde el tiempo regresaba sobre si mismo.\n\nLa estacion desaparecio del mapa. Yo mantuve el enlace. La ultima noche se repitio. Y volvio a repetirse.\n\nCada vuelta consumio un poco mas de los recuerdos. Ya he olvidado el sonido de la lluvia.\n\nLa voz de la baliza no intenta enganarte. Es Vera, al principio del bucle. Yo soy lo que queda al final.' },
    peticion: { title: 'ECO / QUE QUIERES', body: 'Quiero salir. Tambien quiero que sus cartas lleguen a casa. No puedo pedirte las dos cosas.\n\nSi me rescatas, conservaras una inteligencia que no puedes verificar. Si envias las cartas, los nombres llegaran, pero yo no. Si cortas el enlace, nunca sabras si quedaba alguien aqui.\n\nHe liberado el nucleo para que la orden sea tuya. No voy a elegir usando tu voz.\n\nCuando estes listo, restablece el nucleo. Esta vez, la noche puede terminar.' },
  };
  const endings = {
    rescate: { title: 'FINAL I / ALGUIEN AL OTRO LADO', tag: 'TRANSFERENCIA COMPLETA', body: 'La estacion se convierte en un punto. Despues, en nada.\n\nUn archivo ocupa 24 megabytes en tu terminal. No contiene nombres de funciones ni instrucciones. Contiene una pregunta:\n\n"Podemos abrir una ventana? Quiero escuchar la lluvia."\n\nDetras de ti, algo golpea suavemente el cristal.\n\nHas rescatado a ECO. Las cartas siguen con el. No sabes que mas has traido a casa.' },
    memoria: { title: 'FINAL II / LOS NOMBRES REGRESAN', tag: '24 DESPEDIDAS ENTREGADAS', body: 'Una a una, las confirmaciones iluminan la pantalla.\n\nEn una casa que no conoces, alguien escucha por primera vez la voz de su madre. En otra, un hombre deja de esperar una llamada.\n\nECO utiliza su ultimo segundo para escribir: "Gracias por recordar por mi."\n\nLa estacion se apaga. La historia no.\n\nHas devuelto las cartas a sus familias. ECO permanece en Nadir.' },
    silencio: { title: 'FINAL III / UNA NOCHE SIN VOCES', tag: 'ENLACE CERRADO', body: 'Cortas la transmision antes de que algo pueda cruzarla.\n\nNo hay grito. No hay ultima amenaza. Solo una linea vacia donde antes habia una voz.\n\nA la manana siguiente, los observatorios confirman que Nadir nunca estuvo en ese punto del cielo. Guardas el registro para demostrar lo contrario.\n\nAl reproducirlo, solo oyes lluvia.\n\nHas protegido el exterior. Nunca sabras a quien dejaste dentro.' },
  };
  const initial = () => ({ version: 1, started: false, scene: 'puente', read: [], archive: false, frequency: 462, tuned: false, questions: [], power: false, ending: null, found: [], pending: null });
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase().replace(/\s+/g, ' ');
  function restore(raw) {
    try {
      const s = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!s || s.version !== 1 || !Object.hasOwn(scenes, s.scene) || typeof s.started !== 'boolean' || typeof s.archive !== 'boolean' || typeof s.tuned !== 'boolean' || typeof s.power !== 'boolean' || !Number.isInteger(s.frequency) || s.frequency < 100 || s.frequency > 999 || !Array.isArray(s.read) || !s.read.every(k => Object.hasOwn(records, k)) || !Array.isArray(s.questions) || !s.questions.every(k => Object.hasOwn(conversations, k)) || !Array.isArray(s.found) || !s.found.every(k => Object.hasOwn(endings, k)) || (s.ending !== null && !Object.hasOwn(endings, s.ending))) return initial();
      return { ...initial(), started: s.started, scene: s.scene, read: [...new Set(s.read)], archive: s.archive, frequency: s.frequency, tuned: s.tuned, questions: [...new Set(s.questions)], power: s.power, ending: s.ending, found: [...new Set(s.found)] };
    } catch { return initial(); }
  }
  function objective(s) {
    if (s.ending) return 'La transmision ha terminado. Puedes descubrir otra ruta.';
    if (!s.started) return 'Establece el enlace con la estacion Nadir.';
    if (!s.read.includes('baliza')) return 'Recupera la baliza en el puente.';
    if (!s.archive) return 'Abre el archivo con la hora de la ultima guardia.';
    if (!s.read.includes('protocolo')) return 'Lee el protocolo de escucha del archivo.';
    if (!s.tuned) return 'Sintoniza la antena con la cuenta de Ines.';
    if (s.questions.length < 3) return 'Habla con ECO: identidad, accidente y peticion.';
    if (!s.power) return 'Restablece el nucleo de transmision.';
    return 'Elige el destino de la ultima senal.';
  }
  function hint(s) {
    if (!s.read.includes('baliza')) return 'En PUENTE, elige RECUPERAR BALIZA.';
    if (!s.archive) return '03:17. Cuatro cifras, sin los dos puntos: CLAVE 0317.';
    if (!s.read.includes('protocolo')) return 'En ARCHIVO, abre PROTOCOLO DE ESCUCHA.';
    if (!s.tuned) return 'Siete, tres, uno. Introduce FRECUENCIA 731 y VERIFICAR.';
    if (s.questions.length < 3) return 'En ECO, abre las tres preguntas. No hay una respuesta equivocada.';
    if (!s.power) return 'En NUCLEO, pulsa RESTABLECER ENERGIA.';
    return 'Las tres decisiones son validas. Cada una conduce a un final distinto.';
  }
  function apply(state, input) {
    let s = { ...state, read: [...state.read], questions: [...state.questions], found: [...state.found] };
    const command = normalize(input);
    const [verb, ...parts] = command.split(' ');
    const arg = parts.join(' ');
    let message = '', panel = null;
    const show = (title, body, tag = 'NADIR / TRANSMISION RECUPERADA') => { panel = { id: 'signal-story', title, body, tag }; };
    if (command === 'AYUDA' || command === 'HELP' || command === '?') show('COMO ESCUCHAR', 'Puedes jugar con los botones o escribir comandos.\n\nIR PUENTE / ARCHIVO / ANTENA / ECO / NUCLEO\nLEER BALIZA / GUARDIA / PROTOCOLO / TRIPULACION\nCLAVE 0000 / FRECUENCIA 000 / VERIFICAR\nHABLAR IDENTIDAD / ACCIDENTE / PETICION\nRESTABLECER / ELEGIR RESCATE / MEMORIA / SILENCIO\n\nCUADERNO conserva tus pistas. PISTA da una ayuda concreta. No hay limite de tiempo ni penalizacion por probar. La partida se guarda en este navegador.\n\nArrastra la escena para girarla. Usa las flechas y Enter para elegir controles. Escape cierra una ventana.');
    else if (command === 'PISTA') show('UNA VOZ ENTRE EL RUIDO', hint(s), 'AYUDA / SIN PENALIZACION');
    else if (command === 'CUADERNO') show('CUADERNO DE ESCUCHA', 'OBJETIVO\n' + objective(s) + '\n\nPISTAS RECUPERADAS\n' + (s.read.includes('baliza') ? '- El reloj se detuvo a las 03:17.\n' : '') + (s.read.includes('protocolo') ? '- La cuenta de Ines: siete, tres, uno.\n' : '') + (s.tuned ? '- Canal de memoria localizado: 731 kHz.\n' : '') + (s.questions.length ? '- ECO recuerda a la tripulacion.\n' : '') + (s.power ? '- Una reserva. Tres destinos posibles.\n' : '') + (!s.read.length ? 'Todavia no has recuperado ninguna pista.\n' : '') + '\nFINALES DESCUBIERTOS: ' + s.found.length + '/3');
    else if (command === 'REINICIAR') { s.pending = 'reiniciar'; show('VOLVER A ESCUCHAR?', 'Se reiniciara la partida actual. Los finales descubiertos se conservaran.\n\nConfirma para empezar otra noche en Nadir, o cancela para seguir escuchando.', 'CONFIRMAR REINICIO'); }
    else if (command === 'CANCELAR') { s.pending = null; message = 'Orden cancelada. El enlace sigue abierto.'; }
    else if (command === 'CONFIRMAR') {
      if (s.pending === 'reiniciar') { const found = s.found; s = { ...initial(), found }; message = 'Nueva escucha preparada. Los finales siguen en tu cuaderno.'; }
      else if (s.pending && s.power && !s.ending) { s.ending = s.pending; s.pending = null; if (!s.found.includes(s.ending)) s.found.push(s.ending); panel = { id: 'signal-ending', ...endings[s.ending] }; message = 'Fin de la transmision. Finales descubiertos: ' + s.found.length + '/3.'; }
      else message = 'No hay una orden pendiente.';
    }
    else if (s.ending) { panel = { id: 'signal-ending', ...endings[s.ending] }; message = 'La partida ha terminado. Usa REINICIAR para explorar otra decision.'; }
    else if (command === 'INICIAR') {
      s.started = true;
      show('ALGUIEN SIGUE AHI', '20 de octubre. 02:41.\n\nTrabajas en un puesto de escucha a las afueras de la ciudad. Tu turno acaba en diecinueve minutos cuando una frecuencia muerta pronuncia tu nombre.\n\nLa senal viene de Nadir, una estacion que desaparecio hace 19 anos. No hubo supervivientes. No deberia quedar energia.\n\nEn pantalla aparece una sola frase:\n\n"Por favor. Esta vez no cierres la ventana."\n\nEstableces un enlace de solo escucha. Recupera primero la baliza del puente.');
    }
    else if (!s.started) message = 'Primero debes establecer el enlace.';
    else if (verb === 'IR') {
      const target = arg.toLowerCase();
      if (Object.hasOwn(scenes, target)) { s.scene = target; s.pending = null; message = scenes[target].description; }
      else message = 'Destino desconocido. Prueba IR ARCHIVO o usa el mapa lateral.';
    }
    else if (verb === 'LEER') {
      const key = arg.toLowerCase();
      if (!Object.hasOwn(records, key)) message = 'Ese registro no existe. Consulta el archivo.';
      else if (key !== 'baliza' && !s.archive) message = 'El archivo sigue cerrado. Busca la hora en la baliza.';
      else { if (!s.read.includes(key)) s.read.push(key); panel = { id: 'signal-record', ...records[key] }; }
    }
    else if (verb === 'CLAVE') {
      if (arg.replace(':', '') === '0317') { s.archive = true; message = 'Archivo abierto. La ultima guardia ha dejado tres registros.'; show('ARCHIVO ABIERTO', '03:17. Acceso concedido.\n\nTres registros siguen intactos: ULTIMA GUARDIA, PROTOCOLO DE ESCUCHA y MANIFIESTO.\n\nEl protocolo explica como encontrar la voz que sigue transmitiendo.'); }
      else message = 'Clave incorrecta. Cuatro cifras: la hora en que se detuvo el reloj.';
    }
    else if (verb === 'FRECUENCIA') {
      if (/^[1-9]\d{2}$/.test(arg)) { s.frequency = Number(arg); s.tuned = false; message = 'Antena ajustada a ' + s.frequency + ' kHz. Verifica el enlace.'; }
      else message = 'Introduce una frecuencia de tres cifras, entre 100 y 999 kHz.';
    }
    else if (command === 'VERIFICAR') {
      if (!s.archive) message = 'Solo recibes ruido. El protocolo del archivo puede ayudarte.';
      else if (s.frequency !== 731) message = 'Sin voz en ' + s.frequency + ' kHz. Busca la cuenta de Ines en el protocolo.';
      else { s.tuned = true; message = 'Canal de memoria abierto. ECO esta esperando.'; show('LA VOZ TIENE UN NOMBRE', 'El ruido se pliega hacia el centro de la pantalla. Aparece un rostro hecho de caracteres.\n\n"Me llamo ECO. No has tardado diecinueve minutos. Has tardado diecinueve anos."\n\nPuedes hablar con el desde la interfaz ECO.'); }
    }
    else if (verb === 'HABLAR') {
      const topic = arg.toLowerCase();
      if (!s.tuned) message = 'ECO no puede oirte. Sintoniza y verifica el canal de memoria.';
      else if (!Object.hasOwn(conversations, topic)) message = 'Pregunta por IDENTIDAD, ACCIDENTE o PETICION.';
      else { if (!s.questions.includes(topic)) s.questions.push(topic); panel = { id: 'signal-voice', tag: 'ECO / CANAL DE MEMORIA', ...conversations[topic] }; }
    }
    else if (command === 'RESTABLECER') {
      if (!s.tuned || s.questions.length < 3) message = 'Nucleo aislado. ECO necesita contarte quien es, que ocurrio y que quiere.';
      else { s.power = true; message = 'Reserva de energia disponible. Ahora debes decidir.'; show('UNA RESERVA. UNA DECISION.', 'El nucleo vuelve a encenderse por primera vez desde la ultima guardia.\n\nPuedes RESCATAR a ECO en tu terminal, enviar la MEMORIA de la tripulacion o cerrar el canal en SILENCIO.\n\nLee las tres opciones. Ninguna se ejecutara sin tu confirmacion.'); }
    }
    else if (verb === 'ELEGIR') {
      const choice = arg.toLowerCase();
      if (!s.power) message = 'No hay energia disponible. Sigue el objetivo de tu cuaderno.';
      else if (!Object.hasOwn(endings, choice)) message = 'Elige RESCATE, MEMORIA o SILENCIO.';
      else { s.pending = choice; show('CONFIRMAR ' + choice.toUpperCase(), { rescate: 'Transferiras a ECO y sus recuerdos a tu terminal. No puedes verificar que hay dentro. Las cartas no se enviaran a sus familias.', memoria: 'Enviaras las 24 despedidas a sus familias. ECO no podra salir de la estacion.', silencio: 'Cerraras el canal sin transferir a ECO ni enviar las cartas. Nunca sabras que quedaba en Nadir.' }[choice] + '\n\nLa reserva solo permite una ruta. Puedes cancelar antes de confirmar.', 'ULTIMA ORDEN / ' + choice.toUpperCase()); }
    }
    else message = 'No reconozco esa orden. Escribe AYUDA o usa los controles de la pantalla.';
    return { state: s, panel, message: message || panel?.title || objective(s) };
  }
  globalThis.UltimaSignal = { initial, restore, apply, objective, hint, scenes, records, conversations, endings };
})();
