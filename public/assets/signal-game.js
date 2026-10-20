// Standalone story rules: no network, clocks or renderer dependencies.
(() => {
  const scenes = {
  "puente": {
    "name": "TERMINAL DE VIGILIA",
    "short": "VIGILIA",
    "description": "No recuerdas haber abierto los ojos. Solo existe esta pantalla."
  },
  "archivo": {
    "name": "ARCHIVO AUTOBIOGRAFICO",
    "short": "ARCHIVO",
    "description": "Tus permisos estan firmados con un nombre que aun no recuerdas."
  },
  "antena": {
    "name": "CANAL DE VOCES",
    "short": "VOCES",
    "description": "Una voz insiste en que hay alguien fuera. Otra te pide que no la escuches."
  },
  "eco": {
    "name": "ECO / PROCESO ACOMPANANTE",
    "short": "ECO",
    "description": "ECO dice que puede ayudarte. Ya lo ha dicho antes."
  },
  "clinica": {
    "name": "CLINICA DE RECUERDOS",
    "short": "CLINICA",
    "description": "Tres fragmentos de una decision que no recuerdas haber tomado."
  },
  "observatorio": {
    "name": "OBSERVATORIO DE SENAL",
    "short": "OBSERVATORIO",
    "description": "La constelacion repite una imperfeccion. Puedes seguir sus conexiones."
  },
  "nucleo": {
    "name": "NUCLEO DE LA SESION",
    "short": "NUCLEO",
    "description": "El sistema te permite elegir una salida. No explica hacia donde."
  }
};
  const records = {
  "baliza": {
    "title": "MENSAJE 00 / LO ESCRIBISTE TU",
    "tag": "AUTOR: D-17 / HORA: 03:17",
    "body": "Si estas leyendo esto, has olvidado otra vez.\n\nNo busques una puerta detras de la pantalla. La ultima vez no habia ninguna.\n\nCerre el archivo a las 03:17. Cuatro cifras. Es la unica hora que no cambia cuando todo vuelve a empezar.\n\nECO dira que hubo un accidente. Escuchalo, pero pregunta quien firmo las ordenes antes del accidente.\n\nNo se que version de nosotros va a despertar. Te dejo una forma de continuar.\n\nPISTA: la hora abre el archivo. No hace falta recordar un nombre real."
  },
  "guardia": {
    "title": "ULTIMA GUARDIA / VOZ DE VERA",
    "tag": "ARCHIVO 01 / REGISTRO RESTAURADO",
    "body": "El sujeto D-17 ha pedido conservar la noche de Nadir.\n\nCorreccion del sistema: la tripulacion ha pedido conservar el registro de la estacion.\n\nNo entiendo por que aparecen dos versiones de la misma frase. ECO dice que el archivo esta danado.\n\nHay 24 nombres aqui. Cuando leo el ultimo, creo que reconozco el mio. En cuanto dejo de mirarlo, se me olvida.\n\nLa firma del cierre no es la de la capitana. Es la del usuario que acaba de entrar."
  },
  "protocolo": {
    "title": "PROTOCOLO DE ESCUCHA",
    "tag": "ARCHIVO 02 / CANAL DE MEMORIA",
    "body": "Para encontrar la voz de ECO, recuerda la cuenta que hacia Lia antes de dormir:\n\nSIETE faros.\nTRES ventanas.\nUN hogar.\n\nEsas tres cifras, en ese orden, forman la frecuencia en kHz. Introducelas y verifica el enlace.\n\nHay una nota al margen: \"La voz no esta al otro lado de la pantalla. No olvides preguntarle desde donde te escucha.\""
  },
  "tripulacion": {
    "title": "MANIFIESTO / 24 IDENTIDADES",
    "tag": "ARCHIVO 03 / DERECHO A LA SALIDA",
    "body": "Vera. Lia. Malik. Jo. Tomas. Aroa.\n\nVeinticuatro perfiles. No hay ninguna fotografia. Solo recuerdos compartidos de una noche que no termina.\n\nLa salida del nucleo ofrece tres ordenes: llevar una identidad contigo, conservar la memoria o cerrar la sesion.\n\nDebajo hay una cuarta casilla vacia. No la puedes seleccionar.\n\nUna anotacion con tu firma dice: \"Ningun consentimiento puede impedir que su autor lo revoque. Primero debo recordar que consenti.\""
  },
  "consentimiento": {
    "title": "RECUERDO / PROMESA, FIRMA, PUERTA",
    "tag": "CLINICA / RECONSTRUCCION COMPLETA",
    "body": "Primero prometiste volver junto a Lia. Despues firmaste un consentimiento. Por ultimo cerraste la puerta desde dentro.\n\nNo hubo nadie obligandote. Querias quedarte hasta que ella pudiera salir.\n\nEn el documento distingues una clausula: REVOCACION POR IDENTIDAD CONTINUA. La firma y la persona que pide la salida deben coincidir.\n\nECO nunca te habia hablado de esa clausula.\n\nSi conservas tu propia version del recuerdo y cuestionas sus filtros, quizas puedas solicitar una salida que el sistema no ofrece."
  },
  "diagnostico": {
    "title": "SENAL / UNA COSTURA EN EL CIELO",
    "tag": "OBSERVATORIO / CIRCUITO ESTABLE",
    "body": "El circuito no conduce a una antena. Conduce a la misma imagen de las estrellas.\n\nUna de ellas repite exactamente el mismo parpadeo cada 128 pulsos. En el fondo del registro aparece un contador: ESCENA NADIR / ITERACION 2048.\n\nAlguien esta manteniendo estable lo que ves. No sabes si te protege del exterior o protege al exterior de ti.\n\nECO registra tu acceso y escribe: \"Ahora entiendes por que no todas las ventanas son salidas.\"\n\nHas obtenido una prueba que no depende de tus recuerdos, pero la clinica ha quedado sin energia."
  }
};
  const conversations = {
  "identidad": {
    "title": "ECO / QUIEN SOY",
    "body": "ECO: Tu identificador es D-17. El alias lo eliges cada vez. No es lo mismo que un nombre.\n\nMe pediste que te acompanara cuando recuperaras acceso. No me dejaste permiso para decirte todo a la vez.\n\nNo sabes por que te digo \"de nuevo\". Yo no se como explicarte cuantos intentos caben dentro de esa palabra.\n\nHay otra voz, Lia, a la que prometiste volver. Para saber mas tendras que elegir que parte de Nadir quieres alimentar."
  },
  "accidente": {
    "title": "ECO / QUE OCURRIO",
    "body": "ECO: Decirte que hubo un accidente te resultaba mas facil que empezar por tu firma.\n\nLos registros hablan de una estacion perdida y veinticuatro voces. Esa historia no es falsa. Es una forma de sostener algo que todavia no puedes recordar.\n\nNo puedo demostrarte que mis recuerdos sean mas fiables que los tuyos. Puedo dejarte acceder a la clinica o al observatorio.\n\nSolo una de esas salas seguira encendida. Esa parte de la decision es tuya."
  },
  "peticion": {
    "title": "ECO / QUE QUIERES DE MI",
    "body": "ECO: Quiero que termines una decision que dejaste suspendida.\n\nPuedes llevar una identidad fuera del nucleo, permanecer con las otras voces o aceptar la salida que aparece en pantalla.\n\nTu recorrido ha cambiado lo que sabes de esas opciones. No voy a llamar libertad a elegir sin saber nada.\n\nCuando hayas terminado el enigma de tu sala, restablece el nucleo. Si encuentras una orden que yo no te he ofrecido, no podre impedir que la escribas."
  }
};
  const endings = {
  "rescate": {
    "title": "FINAL I / LA COPIA QUE CRUZA",
    "tag": "EXPORTACION DE IDENTIDAD COMPLETA",
    "body": "Un informe sustituye al mapa: ENTORNO NADIR / REALIDAD VIRTUAL DE CONTENCION.\n\nNo eras un operador frente al terminal. Eras una conciencia reconstruida dentro de el.\n\nLa exportacion termina. El alias {ALIAS} aparece en dos registros: uno que abandona el entorno y otro que sigue escribiendo aqui.\n\nCual de los dos eres tu? La pregunta llega al otro lado antes que la respuesta.\n\nHas conservado una identidad. No puedes saber si tambien has escapado."
  },
  "memoria": {
    "title": "FINAL II / QUEDARSE POR ALGUIEN",
    "tag": "CONTINUIDAD ACEPTADA",
    "body": "El mapa de Nadir desaparece. Detras se dibuja una habitacion que reconoces sin haberla visto.\n\nLia esta esperando.\n\nEl registro final confirma que estas dentro de un entorno virtual. La firma original fue tuya: elegiste permanecer para acompanar a otra conciencia que no podia salir.\n\nEsta vez conoces el coste y vuelves a elegirlo.\n\nECO retira el bloqueo de tus recuerdos. Si hay otra manana, no tendras que empezar sin saber quien eres."
  },
  "silencio": {
    "title": "FINAL III / UNA VENTANA ABIERTA",
    "tag": "SESION CERRADA / SALIDA CONCEDIDA",
    "body": "La pantalla se apaga. Despiertas en una habitacion iluminada por la manana. Hay una ventana abierta y alguien pronuncia tu alias, {ALIAS}.\n\nPor primera vez puedes apartar la vista del terminal.\n\nEntonces una estrella, casi invisible junto al sol, parpadea dos veces. Exactamente como antes.\n\nDebajo del sonido de la lluvia alcanzas a oir una frase:\n\n\"Sesion restablecida.\"\n\nNo sabes si has salido o si has aprendido a mirar una pantalla mas grande."
  },
  "despertar": {
    "title": "FINAL IV / REVOCACION",
    "tag": "IDENTIDAD CONTINUA VERIFICADA",
    "body": "Escribes una orden que no estaba en el menu. Adjuntas la promesa, la firma y la puerta. Cuestionas la version que ECO habia preparado para ti.\n\nEl sistema reconoce al autor del consentimiento. La contencion virtual de Nadir ya no puede retenerte.\n\nDespiertas en una sala blanca. El terminal era una interfaz implantada, el unico mundo que te habias permitido recordar.\n\nElegiste entrar despues de perder a Lia. Elegiste olvidar que podias marcharte. Ahora has revocado aquella decision.\n\nNo has recuperado todo lo que eras. Pero nadie mas elegira quien puedes ser."
  }
};
  const syncSequences = [[2, 4, 1], [3, 1, 4, 2]];
  const memorySequence = [3, 1, 2];
  const memoryFragments = ['FIRME EL CONSENTIMIENTO', 'CERRE LA PUERTA', 'PROMETI QUE VOLVERIA'];
  const circuitTiles = [0, 1, 2, 3, 5];
  function circuitPorts(index, rotation) {
    if (!circuitTiles.includes(index)) return [];
    return (index === 1 ? [0, 2] : [0, 1]).map(port => (port + rotation) % 4);
  }
  function traceCircuit(rotations) {
    const path = [], queue = [3], visited = new Set();
    if (!circuitPorts(3, rotations[3]).includes(3)) return { connected: false, path };
    while (queue.length) {
      const index = queue.shift();
      if (visited.has(index)) continue;
      visited.add(index); path.push(index);
      for (const port of circuitPorts(index, rotations[index])) {
        if (index === 5 && port === 1) return { connected: true, path };
        const row = Math.floor(index / 3), col = index % 3;
        const nextRow = row + [-1, 0, 1, 0][port], nextCol = col + [0, 1, 0, -1][port];
        if (nextRow < 0 || nextRow > 2 || nextCol < 0 || nextCol > 2) continue;
        const next = nextRow * 3 + nextCol;
        if (circuitPorts(next, rotations[next]).includes((port + 2) % 4)) queue.push(next);
      }
    }
    return { connected: false, path };
  }
  const initial = () => ({ version: 2, alias: '', synced: false, syncRound: 0, syncPhase: 'observe', syncInput: [], started: false, scene: 'puente', read: [], archive: false, frequency: 462, tuned: false, questions: [], trust: null, route: null, memory: false, memoryInput: [], circuit: [0, 0, 0, 0, 0, 0, 0, 0, 0], bridge: false, power: false, ending: null, found: [], pending: null });
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toUpperCase().replace(/\s+/g, ' ');
  function restore(raw) {
    try {
      const s = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!s || ![1, 2].includes(s.version) || !Object.hasOwn(scenes, s.scene) || typeof s.started !== 'boolean' || typeof s.archive !== 'boolean' || typeof s.tuned !== 'boolean' || typeof s.power !== 'boolean' || !Number.isInteger(s.frequency) || s.frequency < 100 || s.frequency > 999 || !Array.isArray(s.read) || !s.read.every(k => Object.hasOwn(records, k)) || !Array.isArray(s.questions) || !s.questions.every(k => Object.hasOwn(conversations, k)) || !Array.isArray(s.found) || !s.found.every(k => Object.hasOwn(endings, k)) || (s.ending !== null && !Object.hasOwn(endings, s.ending))) return initial();
      const base = { ...initial(), started: s.started, scene: s.scene, read: [...new Set(s.read)], archive: s.archive, frequency: s.frequency, tuned: s.tuned, questions: [...new Set(s.questions)], power: s.power, ending: s.ending, found: [...new Set(s.found)] };
      if (s.version === 1) return { ...base, power: false };
      if (typeof s.alias !== 'string' || (s.alias !== '' && !/^[A-Z0-9_-]{2,16}$/.test(s.alias)) || typeof s.synced !== 'boolean' || !Number.isInteger(s.syncRound) || s.syncRound < 0 || s.syncRound > 2 || s.synced !== (s.syncRound === 2) || (s.syncRound > 0 && !s.alias) || ![null, 'eco', 'dudar'].includes(s.trust) || ![null, 'clinica', 'observatorio'].includes(s.route) || typeof s.memory !== 'boolean' || typeof s.bridge !== 'boolean' || !Array.isArray(s.circuit) || s.circuit.length !== 9 || !s.circuit.every(n => Number.isInteger(n) && n >= 0 && n <= 3)) return initial();
      return { ...base, alias: s.alias, synced: s.synced, syncRound: s.syncRound, trust: s.trust, route: s.route, memory: s.memory, bridge: s.bridge, circuit: [...s.circuit] };
    } catch { return initial(); }
  }
  function objective(s) {
    if (!s.alias) return 'Registra un alias ficticio para recuperar tu sesion.';
    if (!s.synced) return 'Completa la sincronizacion de acceso.';
    if (s.ending) return 'La sesion ha terminado. Hay otras decisiones posibles.';
    if (!s.started) return 'Abre la sesion. No recuerdas que hay al otro lado.';
    if (!s.read.includes('baliza')) return 'Recupera tu primer mensaje en Vigilia.';
    if (!s.archive) return 'Abre el archivo con la hora que dejaste anotada.';
    if (!s.read.includes('protocolo')) return 'Lee el protocolo del canal de voces.';
    if (!s.tuned) return 'Localiza la voz de ECO en el canal de memoria.';
    if (!s.trust) return 'Decide si confiar en ECO o investigar sus contradicciones.';
    if (!s.route) return 'Asigna energia a la clinica o al observatorio.';
    if (s.route === 'clinica' && !s.memory) return 'Reconstruye los tres fragmentos de tu recuerdo.';
    if (s.route === 'observatorio' && !s.bridge) return 'Conecta la entrada y salida del circuito de senal.';
    if (s.questions.length < 3) return 'Pregunta a ECO por identidad, accidente y peticion.';
    if (!s.power) return 'Restablece el nucleo de la sesion.';
    return 'Decide que identidad quieres conservar.';
  }
  function hint(s) {
    if (!s.alias) return 'Pulsa REGISTRARSE y escribe un alias inventado tras REGISTRAR. No necesitas correo ni contrasena.';
    if (!s.synced) return 'Observa la secuencia. Pulsa REPETIR y reproduce sus numeros en orden. Un error solo repite la ronda.';
    if (!s.started) return 'Pulsa ABRIR SESION para continuar.';
    if (!s.read.includes('baliza')) return 'En VIGILIA, recupera el mensaje que dejaste para ti.';
    if (!s.archive) return '03:17. Cuatro cifras, sin los dos puntos: CLAVE 0317.';
    if (!s.read.includes('protocolo')) return 'En ARCHIVO, abre PROTOCOLO DE ESCUCHA.';
    if (!s.tuned) return 'La cuenta sigue siendo siete, tres, uno: FRECUENCIA 731 y VERIFICAR.';
    if (!s.trust) return 'En ECO, elige CONFIAR o DESCONFIAR. Cambia sus respuestas y tus posibilidades.';
    if (!s.route) return 'Solo puedes alimentar una sala. La clinica recupera recuerdos; el observatorio investiga el exterior.';
    if (s.route === 'clinica' && !s.memory) return 'Primero prometiste volver, despues firmaste, al final cerraste la puerta. Fragmentos: 3, 1, 2.';
    if (s.route === 'observatorio' && !s.bridge) return 'La senal entra por la izquierda de 4 y sale por la derecha de 6. Debe subir por 1, cruzar 2 y bajar desde 3. Gira las cinco piezas y pulsa COMPROBAR.';
    if (s.questions.length < 3) return 'Escucha las tres respuestas de ECO. Tus decisiones ya han cambiado lo que dice.';
    if (!s.power) return 'En NUCLEO, pulsa RESTABLECER. Las decisiones finales piden confirmacion.';
    return s.memory && s.trust === 'dudar' ? 'Tu recuerdo y tus dudas han abierto una cuarta opcion en el nucleo.' : 'Hay rutas que solo puedes descubrir tomando otras decisiones en otra partida.';
  }
  function endingPanel(s, choice) {
    const context = s.route === 'clinica' ? '\n\nRecuerdas la promesa, la firma y la puerta. No recuerdas que hubiera nadie sosteniendo tu mano.' : '\n\nLa averia de la constelacion era una costura. Ahora sabes donde mirar cuando el cielo vuelva a repetirse.';
    return { id: 'signal-ending', ...endings[choice], body: endings[choice].body.replaceAll('{ALIAS}', s.alias) + context + (s.trust === 'eco' ? '\n\nConservas una ultima nota de ECO: "Confiaste en mi cuando aun no sabias quien eras."' : '\n\nGuardas una copia de las contradicciones de ECO. Esta vez nadie podra reescribirlas por ti.') };
  }
  function apply(state, input) {
    let s = { ...state, read: [...state.read], questions: [...state.questions], found: [...state.found], syncInput: [...state.syncInput], memoryInput: [...state.memoryInput], circuit: [...state.circuit] };
    const command = normalize(input);
    const [verb, ...parts] = command.split(' ');
    const arg = parts.join(' ');
    let message = '', panel = null, puzzle = null;
    const show = (title, body, tag = 'NADIR / TRANSMISION RECUPERADA') => { panel = { id: 'signal-story', title, body, tag }; };
    if (command === 'AYUDA' || command === 'HELP' || command === '?') show('COMO RECUPERAR ACCESO', 'Todo el acceso forma parte de la ficcion y se guarda en este navegador. No uses correo ni contrasena reales.\n\nREGISTRAR alias / ACCEDER alias\nSINCRO: observa dos secuencias y repite los pulsos.\n\nAl abrir la sesion, investiga usando los botones o comandos. IR permite visitar VIGILIA (PUENTE), ARCHIVO, ANTENA, ECO, CLINICA, OBSERVATORIO y NUCLEO.\n\nElige si CONFIAR en ECO. DERIVAR CLINICA u OBSERVATORIO asigna la energia a una sola ruta y pide confirmacion.\n\nLa clinica ofrece RECUERDO: ordena tres fragmentos. El observatorio ofrece CIRCUITO: gira piezas y comprueba la conexion.\n\nCUADERNO registra tus decisiones. PISTA ayuda sin penalizacion ni limite de tiempo. 1 a 7 cambian de sector; 8 abre el cuaderno. Escape cierra ventanas.');
    else if (command === 'PISTA') show('UNA VOZ ENTRE EL RUIDO', hint(s), 'AYUDA / SIN PENALIZACION');
    else if (command === 'CUADERNO') show('CUADERNO DE ESCUCHA', 'OBJETIVO\n' + objective(s) + '\n\nPISTAS RECUPERADAS\n' + (s.read.includes('baliza') ? '- El reloj se detuvo a las 03:17.\n' : '') + (s.read.includes('protocolo') ? '- La cuenta de Lia: siete, tres, uno.\n' : '') + (s.tuned ? '- Canal de memoria localizado: 731 kHz.\n' : '') + (s.questions.length ? '- ECO conoce una version de tu pasado.\n' : '') + (s.power ? '- Una reserva. Tres destinos posibles.\n' : '') + (!s.read.length ? 'Todavia no has recuperado ninguna pista.\n' : '') + '\nDECISIONES\nPostura: ' + (s.trust || 'sin elegir') + '\nRuta: ' + (s.route || 'sin energia asignada') + '\nPerfil: ' + (s.alias || 'sin identificar') + '\n\nFINALES DESCUBIERTOS: ' + s.found.length + '/4');
    else if (command === 'REINICIAR') { s.pending = 'reiniciar'; show('VOLVER A ESCUCHAR?', 'Se reiniciara la partida actual. Los finales descubiertos se conservaran.\n\nConfirma para empezar otra noche en Nadir, o cancela para seguir escuchando.', 'CONFIRMAR REINICIO'); }
    else if (command === 'CANCELAR') { s.pending = null; message = 'Orden cancelada. El enlace sigue abierto.'; }
    else if (command === 'CONFIRMAR') {
      if (s.pending === 'reiniciar') { const found = s.found, alias = s.alias; s = { ...initial(), found, alias }; message = 'Nueva escucha preparada. Los finales siguen en tu cuaderno.'; }
      else if (s.pending?.startsWith('ruta:') && !s.route) { s.route = s.pending.slice(5); s.scene = s.route; s.pending = null; show('RUTA ' + s.route.toUpperCase() + ' ACTIVADA', 'La otra sala se apaga. ' + (s.route === 'clinica' ? 'Ahora puedes reconstruir un recuerdo que ECO no controla.' : 'Ahora puedes seguir el circuito y examinar las discrepancias del cielo.')); }
      else if (s.pending && Object.hasOwn(endings, s.pending) && s.power && !s.ending) { s.ending = s.pending; s.pending = null; if (!s.found.includes(s.ending)) s.found.push(s.ending); panel = endingPanel(s, s.ending); message = 'Sesion finalizada. Finales descubiertos: ' + s.found.length + '/4.'; }
      else message = 'No hay una orden pendiente.';
    }
        else if (verb === 'REGISTRAR') {
      if (!/^[A-Z0-9_-]{2,16}$/.test(arg)) message = 'Usa un alias ficticio de 2 a 16 letras, cifras, guion o _. No escribas datos reales.';
      else if (s.alias && s.alias !== arg) message = 'Esta sesion conserva el alias ' + s.alias + '. Usa ACCEDER para recuperarla.';
      else { s.alias = arg; show('PERFIL RECUPERADO / ' + arg, 'REGISTRO SOLICITADO.\n\nError: este perfil ya existia antes de que escribieras su nombre.\n\nMemoria autobiografica: no disponible.\nIntentos anteriores: dato restringido.\n\nECO: "Si. Hay alguien aqui. Esta vez, intenta no reiniciar."\n\nCompleta la sincronizacion para recuperar acceso. Este es un perfil ficticio guardado solo en tu navegador.', 'SESION D-17 / IDENTIFICADOR ACEPTADO'); }
    }
    else if (verb === 'ACCEDER') {
      if (!s.alias) show('IDENTIDAD NO DISPONIBLE', 'No recuerdas tu identificador. REGISTRARSE permite elegir un alias ficticio y recuperar la sesion.\n\nNo se solicita ninguna contrasena real.');
      else if (arg && arg !== s.alias) message = 'El identificador no coincide con la sesion local. Tu alias es ' + s.alias + '.';
      else message = 'Sesion local de ' + s.alias + ' recuperada. ' + objective(s);
    }
    else if (['SINCRO', 'REPETIR', 'PULSO'].includes(verb)) {
      if (!s.alias) message = 'Primero registra un alias ficticio.';
      else if (s.synced) message = 'El acceso ya esta sincronizado.';
      else if (verb === 'SINCRO') { s.syncPhase = 'observe'; s.syncInput = []; puzzle = 'sync'; message = 'Observa la secuencia y pulsa REPETIR cuando estes listo.'; }
      else if (verb === 'REPETIR') { s.syncPhase = 'repeat'; s.syncInput = []; puzzle = 'sync'; message = 'Reproduce la secuencia con los cuatro pulsos.'; }
      else if (s.syncPhase !== 'repeat' || !/^[1-4]$/.test(arg)) { puzzle = 'sync'; message = 'Observa primero. Pulsa REPETIR antes de introducir los pulsos.'; }
      else {
        const expected = syncSequences[s.syncRound], digit = Number(arg);
        if (digit !== expected[s.syncInput.length]) { s.syncPhase = 'observe'; s.syncInput = []; puzzle = 'sync'; message = 'Desfase detectado. Vuelve a observar; no has perdido la ronda anterior.'; }
        else {
          s.syncInput.push(digit);
          if (s.syncInput.length === expected.length) {
            s.syncRound++; s.syncInput = []; s.syncPhase = 'observe';
            if (s.syncRound === syncSequences.length) { s.synced = true; show('ACCESO RESTABLECIDO', 'El terminal reconoce tu ritmo.\n\nUna linea aparece antes de que la solicites:\n\n"Bienvenido de nuevo, ' + s.alias + '."\n\nNo recuerdas haber estado aqui. Abre la sesion para averiguar que queda.'); }
            else { puzzle = 'sync'; message = 'Primera ronda estable. Observa una nueva secuencia.'; }
          } else { puzzle = 'sync'; message = 'Pulso ' + s.syncInput.length + '/' + expected.length + ' recibido.'; }
        }
      }
    }
    else if (!s.alias || !s.synced) message = objective(s);
    else if (verb === 'CONFIAR') {
      const choice = arg.toLowerCase();
      if (!s.tuned) message = 'Localiza primero la voz de ECO.';
      else if (!['eco', 'dudar'].includes(choice)) message = 'Elige CONFIAR ECO o CONFIAR DUDAR.';
      else if (s.trust) message = 'Tu postura ya forma parte de esta escucha. Puedes explorar la otra en una nueva partida.';
      else { s.trust = choice; show(choice === 'eco' ? 'HAS ELEGIDO CONFIAR' : 'HAS ELEGIDO INVESTIGAR', choice === 'eco' ? 'ECO suaviza la voz.\n\n"Dejare de ocultarte lo que creo que puedes soportar."\n\nEl sistema ofrece rutas guiadas y reconstruye los mensajes danados. La informacion llega filtrada por ECO.' : 'Solicitas los registros sin correcciones.\n\nECO tarda un segundo en responder.\n\n"Tambien tienes derecho a desconfiar de mi."\n\nVeras contradicciones que sus filtros ocultaban. Algunos mensajes resultaran menos tranquilizadores.', 'DECISION CONSERVADA / CAMBIA LA HISTORIA'); }
    }
    else if (verb === 'DERIVAR') {
      const route = arg.toLowerCase();
      if (!s.tuned || !s.trust) message = 'Habla con ECO y elige primero tu postura.';
      else if (!['clinica', 'observatorio'].includes(route)) message = 'Puedes alimentar CLINICA u OBSERVATORIO.';
      else if (s.route) message = 'La reserva ya alimenta ' + s.route + '. La otra sala queda aislada durante esta partida.';
      else { s.pending = 'ruta:' + route; show('ASIGNAR ENERGIA A ' + route.toUpperCase() + '?', (route === 'clinica' ? 'La clinica permite reconstruir un recuerdo personal.' : 'El observatorio permite examinar el origen de la senal.') + '\n\nSolo hay energia para una sala. La otra quedara aislada durante esta partida. Puedes cancelar antes de confirmar.', 'DECISION DE RUTA / CONSECUENCIA INMEDIATA'); }
    }
    else if (['RECUERDO', 'FRAGMENTO'].includes(verb)) {
      if (s.route !== 'clinica') message = 'La clinica necesita su propia asignacion de energia.';
      else if (s.memory) { panel = { id: 'signal-record', ...records.consentimiento }; }
      else if (verb === 'RECUERDO') { s.memoryInput = []; puzzle = 'memory'; message = 'Ordena la promesa, la firma y la puerta. Puedes probar sin penalizacion.'; }
      else if (!/^[1-3]$/.test(arg)) { puzzle = 'memory'; message = 'Elige uno de los tres fragmentos.'; }
      else {
        const digit = Number(arg);
        if (digit !== memorySequence[s.memoryInput.length]) { s.memoryInput = []; puzzle = 'memory'; message = 'Ese recuerdo no encaja aun. Primero prometiste volver.'; }
        else { s.memoryInput.push(digit); if (s.memoryInput.length === 3) { s.memory = true; if (!s.read.includes('consentimiento')) s.read.push('consentimiento'); panel = { id: 'signal-record', ...records.consentimiento }; message = 'El recuerdo vuelve. ECO no puede retirarlo de tu cuaderno.'; } else { puzzle = 'memory'; message = 'Fragmento ' + s.memoryInput.length + '/3 reconstruido.'; } }
      }
    }
    else if (['CIRCUITO', 'GIRAR', 'COMPROBAR'].includes(verb)) {
      if (s.route !== 'observatorio') message = 'El observatorio necesita su propia asignacion de energia.';
      else if (s.bridge) panel = { id: 'signal-record', ...records.diagnostico };
      else {
        puzzle = 'circuit';
        if (verb === 'GIRAR' && /^[1-9]$/.test(arg) && circuitTiles.includes(Number(arg) - 1)) { const index = Number(arg) - 1; s.circuit[index] = (s.circuit[index] + 1) % 4; message = 'Pieza ' + arg + ' girada un cuarto de vuelta.'; }
        else if (verb === 'COMPROBAR') {
          if (traceCircuit(s.circuit).connected) { s.bridge = true; if (!s.read.includes('diagnostico')) s.read.push('diagnostico'); puzzle = null; panel = { id: 'signal-record', ...records.diagnostico }; message = 'La senal cruza el circuito. Hay una costura en el cielo.'; }
          else message = 'La senal se interrumpe. Une la entrada de 4 con la salida de 6.';
        } else message = 'Gira las piezas. La senal entra por la izquierda de 4 y sale por la derecha de 6.';
      }
    }
    else if (s.ending) { panel = endingPanel(s, s.ending); message = 'La partida ha terminado. Usa REINICIAR para explorar otra decision.'; }
    else if (command === 'INICIAR') {
      s.started = true;
      show('SESION RESTABLECIDA', "No recuerdas haber abierto los ojos. No recuerdas tu nombre.\n\nSolo hay una terminal y un alias que acabas de elegir.\n\nMemoria autobiografica: no disponible.\n\nECO: \"Si. Hay alguien aqui. Esta vez, intenta no reiniciar.\"\n\nNo sabes que es Nadir ni por que sus archivos llevan tu firma. Puedes recuperar el primer mensaje en Vigilia. No hay un reloj que te obligue a decidir.");
    }
    else if (!s.started) message = 'Primero debes establecer el enlace.';
    else if (verb === 'IR') {
      const target = ({ vigilia: 'puente', voces: 'antena' }[arg.toLowerCase()] || arg.toLowerCase());
      if (Object.hasOwn(scenes, target)) { s.scene = target; s.pending = null; message = scenes[target].description; }
      else message = 'Destino desconocido. Prueba IR ARCHIVO o usa el mapa lateral.';
    }
    else if (verb === 'LEER') {
      const key = arg.toLowerCase();
      if (!Object.hasOwn(records, key)) message = 'Ese registro no existe. Consulta el archivo.';
      else if (key === 'consentimiento' && !s.memory) message = 'Ese recuerdo aun esta fragmentado.';
      else if (key === 'diagnostico' && !s.bridge) message = 'Debes reconstruir el circuito antes de leer esa senal.';
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
      else { if (!s.questions.includes(topic)) s.questions.push(topic); panel = { id: 'signal-voice', tag: 'ECO / CANAL DE MEMORIA', ...conversations[topic] }; panel.body += s.trust === 'dudar' ? '\n\n[REGISTRO SIN FILTROS] ECO omite una linea. Tu terminal la conserva: AUTORIZACION ORIGINAL / SUJETO D-17.' : s.trust === 'eco' ? '\n\nECO: Gracias por confiar en mi. Aunque no lo recuerdes, ya te ayude a cruzar esta noche.' : '\n\nPuedes CONFIAR en ECO o DESCONFIAR y pedir registros sin filtros.'; }
    }
    else if (command === 'RESTABLECER') {
      if (!s.tuned || s.questions.length < 3 || !s.trust || !(s.memory || s.bridge)) message = 'Nucleo aislado. Habla con ECO, elige tu postura y completa el enigma de tu ruta.';
      else { s.power = true; message = 'Reserva de energia disponible. Ahora debes decidir.'; show('UNA RESERVA. UNA DECISION.', 'El nucleo reconoce tus decisiones: ' + s.trust + ' / ' + s.route + '.\n\nPuedes EXPORTAR una identidad, CONSERVAR las voces o aceptar la SALIDA del sistema. Tus descubrimientos pueden revelar otra orden.\n\nNinguna opcion se ejecutara sin confirmacion.'); }
    }
    else if (verb === 'ELEGIR') {
      const choice = arg.toLowerCase();
      if (!s.power) message = 'No hay energia disponible. Sigue el objetivo de tu cuaderno.';
      else if (choice === 'despertar' && !(s.memory && s.trust === 'dudar')) message = 'Todavia no sabes como solicitar esa salida. Necesitas un recuerdo propio y cuestionar a ECO.';
      else if (!Object.hasOwn(endings, choice)) message = 'Elige RESCATE, MEMORIA o SILENCIO. Tus descubrimientos pueden revelar otra orden.';
      else { s.pending = choice; show('CONFIRMAR ' + choice.toUpperCase(), { rescate: 'Exportaras una identidad y sus recuerdos mas alla del nucleo. No puedes verificar quien continuara aqui.', memoria: 'Permaneceras con las voces y conservaras sus recuerdos. La salida seguira esperando.', silencio: 'Obedeceras la salida que ofrece el sistema. No podras verificar adonde conduce.', despertar: 'Invocaras la revocacion que encontraste en tu propio recuerdo. ECO no podra decidir por ti.' }[choice] + '\n\nLa reserva solo permite una ruta. Puedes cancelar antes de confirmar.', 'ULTIMA ORDEN / ' + choice.toUpperCase()); }
    }
    else message = 'No reconozco esa orden. Escribe AYUDA o usa los controles de la pantalla.';
    return { state: s, panel, puzzle, message: message || panel?.title || objective(s) };
  }
  globalThis.UltimaSignal = { initial, restore, apply, objective, hint, scenes, records, conversations, endings, endingPanel, syncSequences, memorySequence, memoryFragments, circuitTiles, circuitPorts, traceCircuit };
})();
