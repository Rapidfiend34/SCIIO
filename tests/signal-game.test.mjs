import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const context = {};
runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
const game = context.UltimaSignal;
const play = (state, commands) => commands.reduce((s, command) => game.apply(s, command).state, state);
const solution = ['INICIAR', 'LEER BALIZA', 'CLAVE 0317', 'LEER GUARDIA', 'LEER PROTOCOLO', 'LEER TRIPULACION', 'FRECUENCIA 731', 'VERIFICAR', 'HABLAR IDENTIDAD', 'HABLAR ACCIDENTE', 'HABLAR PETICION', 'RESTABLECER'];

for (const ending of ['rescate', 'memoria', 'silencio']) {
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
  state = game.apply(state, 'INICIAR').state;
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
  for (const raw of ['{broken', '{}', 'null', JSON.stringify({ ...state, scene: '__proto__' }), JSON.stringify({ ...state, read: ['invalid'] }), JSON.stringify({ ...state, frequency: '731' })]) {
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
