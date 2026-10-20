import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const context = {};
runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
const game = context.UltimaSignal;
const play = (state, commands) => commands.reduce((s, command) => game.apply(s, command).state, state);
const access = ['REGISTRAR PRUEBA', 'SINCRO', 'REPETIR', 'PULSO 2', 'PULSO 4', 'PULSO 1', 'REPETIR', 'PULSO 3', 'PULSO 1', 'PULSO 4', 'PULSO 2'];
const solution = [...access, 'INICIAR', 'LEER BALIZA', 'CLAVE 0317', 'LEER GUARDIA', 'LEER PROTOCOLO', 'LEER TRIPULACION', 'FRECUENCIA 731', 'VERIFICAR', 'HABLAR IDENTIDAD', 'HABLAR ACCIDENTE', 'HABLAR PETICION', 'CONFIAR DUDAR', 'DERIVAR CLINICA', 'CONFIRMAR', 'RECUERDO', 'FRAGMENTO 3', 'FRAGMENTO 1', 'FRAGMENTO 2', 'RESTABLECER'];

for (const ending of ['rescate', 'memoria', 'silencio', 'despertar']) {
  test(`a player can reach ${ending} with an explicit final confirmation`, () => {
    const ready = play(game.initial(), solution);
    assert.equal(ready.power, true);
    const proposed = game.apply(ready, 'ELEGIR ' + ending);
    assert.equal(proposed.state.ending, null);
    assert.ok(proposed.panel.body.length > 100);
    const canceled = game.apply(proposed.state, 'CANCELAR');
    assert.equal(game.apply(canceled.state, 'CONFIRMAR').state.ending, null);
    const confirmed = game.apply(game.apply(ready, 'ELEGIR ' + ending).state, 'CONFIRMAR');
    assert.equal(confirmed.state.ending, ending);
    assert.equal(confirmed.state.found[0], ending);
    assert.match(confirmed.panel.id, /ending/);
    assert.equal(game.apply(confirmed.state, 'ELEGIR RESCATE').state.ending, ending);
  });
}

test('puzzles block early actions, give useful feedback and accept typed Spanish commands', () => {
  let state = game.initial();
  assert.equal(game.apply(state, 'ELEGIR RESCATE').state.pending, null);
  state = play(state, [...access, 'INICIAR']);
  assert.equal(game.apply(state, 'LEER PROTOCOLO').state.read.length, 0);
  assert.equal(game.apply(state, 'CLAVE 9999').state.archive, false);
  assert.equal(game.apply(state, 'FRECUENCIA NaN').state.frequency, 462);
  assert.equal(game.apply(state, 'RESTABLECER').state.power, false);
  assert.equal(game.apply(state, 'IR NÚCLEO').state.scene, 'nucleo');
  assert.equal(game.apply(state, 'IR __proto__').state.scene, 'puente');
  assert.equal(game.apply(state, 'CLAVE 03:17').state.archive, true);
  state = game.apply(state, 'LEER BALIZA').state;
  assert.match(game.apply(state, 'PISTA').panel.body, /0317/);
  state = play(state, ['CLAVE 0317', 'FRECUENCIA 730', 'VERIFICAR']);
  assert.equal(state.tuned, false);
  state = play(state, ['FRECUENCIA 731', 'VERIFICAR', 'HABLAR IDENTIDAD', 'HABLAR IDENTIDAD']);
  assert.equal(state.questions.length, 1);
  assert.equal(game.apply(state, 'RESTABLECER').state.power, false);
});

test('reload keeps progress, discards pending decisions, and tolerates broken saves', () => {
  const state = play(game.initial(), solution);
  const pending = game.apply(state, 'ELEGIR MEMORIA').state;
  const restored = game.restore(JSON.stringify(pending));
  assert.equal(restored.archive, true);
  assert.equal(restored.power, true);
  assert.equal(restored.pending, null);
  assert.equal(game.apply(restored, 'CONFIRMAR').state.ending, null);
  for (const raw of ['{broken', '{}', 'null', JSON.stringify({ ...state, scene: '__proto__' }), JSON.stringify({ ...state, read: ['invalid'] }), JSON.stringify({ ...state, frequency: '731' }), JSON.stringify({ ...state, synced: false, syncRound: 2 }), JSON.stringify({ ...state, synced: true, syncRound: 0 })]) {
    assert.equal(game.restore(raw).started, false);
  }
});

test('restarting requires confirmation and preserves discovered endings', () => {
  const ended = play(game.initial(), [...solution, 'ELEGIR MEMORIA', 'CONFIRMAR']);
  const pending = game.apply(ended, 'REINICIAR').state;
  assert.equal(pending.ending, 'memoria');
  const fresh = game.apply(pending, 'CONFIRMAR').state;
  assert.equal(fresh.started, false);
  assert.equal(fresh.ending, null);
  assert.equal(fresh.found[0], 'memoria');
});

test('registration is local fiction and rejects real-looking credentials and invalid aliases', () => {
  for (const alias of ['a@b.com', 'X', '<script>', 'DOS PALABRAS', '12345678901234567']) {
    assert.equal(game.apply(game.initial(), 'REGISTRAR ' + alias).state.alias, '');
  }
  const registered = game.apply(game.initial(), 'REGISTRAR viajero_17').state;
  assert.equal(registered.alias, 'VIAJERO_17');
  assert.equal(registered.started, false);
  assert.equal(game.apply(registered, 'INICIAR').state.started, false);
  assert.equal(game.apply(registered, 'ACCEDER OTRO').state.alias, registered.alias);
  assert.equal(game.apply(registered, 'REGISTRAR OTRO').state.alias, registered.alias);
});

test('synchronization requires observation and both rounds, and survives reload between rounds', () => {
  let s = play(game.initial(), ['REGISTRAR VIAJERO', 'SINCRO']);
  assert.equal(game.apply(s, 'PULSO 2').state.syncInput.length, 0);
  s = play(s, ['REPETIR', 'PULSO 1']);
  assert.equal(s.syncPhase, 'observe');
  assert.equal(s.syncRound, 0);
  s = play(s, ['REPETIR', 'PULSO 2', 'PULSO 4', 'PULSO 1']);
  assert.equal(s.syncRound, 1);
  assert.equal(s.synced, false);
  s = game.restore(JSON.stringify(s));
  assert.equal(s.syncRound, 1);
  assert.equal(s.syncInput.length, 0);
  s = play(s, ['REPETIR', 'PULSO 3', 'PULSO 1', 'PULSO 4', 'PULSO 2']);
  assert.equal(s.synced, true);
  assert.equal(game.apply(s, 'INICIAR').state.started, true);
});

const beforeRoute = [...access, 'INICIAR', 'LEER BALIZA', 'CLAVE 0317', 'FRECUENCIA 731', 'VERIFICAR'];

test('trust changes dialogue and exclusive route allocation requires confirmation', () => {
  const base = play(game.initial(), beforeRoute);
  const trust = game.apply(base, 'CONFIAR ECO').state;
  const doubt = game.apply(base, 'CONFIAR DUDAR').state;
  assert.notEqual(game.apply(trust, 'HABLAR IDENTIDAD').panel.body, game.apply(doubt, 'HABLAR IDENTIDAD').panel.body);
  assert.equal(game.apply(doubt, 'CONFIAR ECO').state.trust, 'dudar');
  const proposed = game.apply(doubt, 'DERIVAR CLINICA').state;
  assert.equal(proposed.route, null);
  assert.equal(game.apply(game.apply(proposed, 'CANCELAR').state, 'CONFIRMAR').state.route, null);
  const committed = game.apply(proposed, 'CONFIRMAR').state;
  assert.equal(committed.route, 'clinica');
  assert.equal(game.apply(committed, 'DERIVAR OBSERVATORIO').state.route, 'clinica');
  assert.equal(game.apply(committed, 'CIRCUITO').puzzle, null);
});

test('the memory reconstruction unlocks a record and the fourth ending only on the doubt route', () => {
  let s = play(game.initial(), [...beforeRoute, 'CONFIAR DUDAR', 'DERIVAR CLINICA', 'CONFIRMAR']);
  assert.equal(game.apply(s, 'LEER CONSENTIMIENTO').state.read.includes('consentimiento'), false);
  s = play(s, ['RECUERDO', 'FRAGMENTO 1']);
  assert.equal(s.memoryInput.length, 0);
  s = play(s, ['FRAGMENTO 3', 'FRAGMENTO 1', 'FRAGMENTO 2']);
  assert.equal(s.memory, true);
  assert.equal(s.read.includes('consentimiento'), true);
  s = play(s, ['HABLAR IDENTIDAD', 'HABLAR ACCIDENTE', 'HABLAR PETICION', 'RESTABLECER', 'ELEGIR DESPERTAR', 'CONFIRMAR']);
  assert.equal(s.ending, 'despertar');
  const trusted = { ...s, ending: null, trust: 'eco', pending: null };
  assert.equal(game.apply(trusted, 'ELEGIR DESPERTAR').state.pending, null);
});

test('the circuit checks real connections and completes the alternative observatory route', () => {
  let s = play(game.initial(), [...beforeRoute, 'CONFIAR ECO', 'DERIVAR OBSERVATORIO', 'CONFIRMAR', 'CIRCUITO', 'COMPROBAR']);
  assert.equal(s.bridge, false);
  assert.equal(game.apply(s, 'RECUERDO').puzzle, null);
  s = play(s, ['GIRAR 1', 'GIRAR 2', 'GIRAR 3', 'GIRAR 3', 'GIRAR 4', 'GIRAR 4', 'GIRAR 4', 'COMPROBAR']);
  assert.equal(s.bridge, true);
  assert.equal(game.traceCircuit(s.circuit).connected, true);
  assert.equal(s.read.includes('diagnostico'), true);
  s = play(s, ['HABLAR IDENTIDAD', 'HABLAR ACCIDENTE', 'HABLAR PETICION', 'RESTABLECER']);
  assert.equal(s.power, true);
  assert.equal(game.apply(s, 'ELEGIR DESPERTAR').state.pending, null);
  assert.equal(play(s, ['ELEGIR SILENCIO', 'CONFIRMAR']).ending, 'silencio');
});

test('old saves keep discoveries but require the new fictional access and route', () => {
  const legacy = { version: 1, started: true, scene: 'eco', read: ['baliza', 'guardia'], archive: true, frequency: 731, tuned: true, questions: ['identidad'], power: true, ending: null, found: ['rescate'], pending: 'memoria' };
  const migrated = game.restore(JSON.stringify(legacy));
  assert.equal(migrated.version, 2);
  assert.equal(migrated.alias, '');
  assert.equal(migrated.archive, true);
  assert.equal(migrated.found[0], 'rescate');
  assert.equal(migrated.power, false);
  assert.equal(migrated.pending, null);
  assert.equal(game.apply(migrated, 'CONFIAR ECO').state.trust, null);
});

test('files are mounted progressively and a directory does not reveal locked content', () => {
  let s = play(game.initial(), [...access, 'INICIAR']);
  assert.equal(game.apply(s, 'LS').file, 'directory');
  assert.equal(game.apply(s, 'ABRIR guardia.log').file, null);
  assert.equal(game.evidence(s, 'guardia'), null);
  assert.equal(game.apply(s, 'ABRIR nota_d17.txt').file, 'baliza');
  s = play(s, ['LEER BALIZA', 'CLAVE 0317']);
  assert.equal(game.apply(s, 'CAT lia_luces.img').file, 'protocolo');
  assert.equal(game.apply(s, 'ABRIR ../../server.mjs').file, null);
  assert.equal(game.apply(s, 'ABRIR consentimiento.sig').file, null);
  assert.equal(game.apply(s, 'ABRIR cielo_128.dat').file, null);
  assert.equal(game.apply(s, 'ABRIR cam_03_0317.img').file, null);
  assert.equal(game.evidence(s, 'D-17'), null);
});

test('corrupt log blocks expose original evidence only after explicit recovery and persist', () => {
  let s = play(game.initial(), [...access, 'INICIAR', 'CLAVE 0317']);
  assert.equal(game.apply(s, 'RECUPERAR 1').state.recovered.length, 0);
  s = game.apply(s, 'ABRIR guardia.log').state;
  assert.doesNotMatch(game.evidence(s, 'guardia').lines.join('\n'), /CIERRE AUTORIZADO POR/);
  s = play(s, ['RECUPERAR 3', 'RECUPERAR 3']);
  assert.equal(s.recovered.length, 1);
  assert.match(game.evidence(s, 'guardia').lines.join('\n'), /CIERRE AUTORIZADO POR: D-17/);
  s = game.restore(JSON.stringify(play(s, ['RECUPERAR 1', 'RECUPERAR 2'])));
  assert.equal(s.recovered.length, 3);
  assert.match(game.evidence(s, 'guardia').lines.join('\n'), /SUJETO D-17/);
  assert.equal(game.restore(JSON.stringify({ ...s, recovered: [4] })).started, false);
});

test('all 24 identity rows can be inspected and D-17 explicitly indexes the camera attachment', () => {
  let s = play(game.initial(), [...access, 'INICIAR', 'CLAVE 0317']);
  assert.equal(game.identities.length, 24);
  assert.equal(new Set(game.identities.map(person => person.id)).size, 24);
  assert.equal(game.apply(s, 'INSPECCIONAR D-17').file, null);
  s = game.apply(s, 'ABRIR identidades.db').state;
  for (const person of game.identities) {
    const result = game.apply(s, 'INSPECCIONAR ' + person.id);
    assert.equal(result.file, person.id);
    s = result.state;
    assert.match(game.evidence(s, person.id).lines.join('\n'), new RegExp(person.id));
  }
  assert.equal(game.apply(s, 'ABRIR cam_03_0317.img').file, 'camara');
  assert.match(game.evidence(s, 'camara').lines.join('\n'), /CERRADA DESDE EL INTERIOR/);
  assert.equal(game.restore(JSON.stringify(s)).inspected.length, 24);
});

test('signal metadata is revealed by comparing the recovered captures', () => {
  let s = play(game.initial(), [...beforeRoute, 'CONFIAR ECO', 'DERIVAR OBSERVATORIO', 'CONFIRMAR']);
  assert.equal(game.apply(s, 'COMPARAR').state.compared, false);
  s = play(s, ['GIRAR 1', 'GIRAR 2', 'GIRAR 3', 'GIRAR 3', 'GIRAR 4', 'GIRAR 4', 'GIRAR 4', 'COMPROBAR']);
  assert.doesNotMatch(game.evidence(s, 'diagnostico').lines.join('\n'), /ITERACION: 2048/);
  const compared = game.apply(s, 'COMPARAR');
  assert.equal(compared.file, 'diagnostico');
  assert.match(game.evidence(compared.state, 'diagnostico').lines.join('\n'), /ITERACION: 2048/);
  assert.equal(game.restore(JSON.stringify(compared.state)).compared, true);
});
