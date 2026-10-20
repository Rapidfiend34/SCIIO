import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('game controls fit desktop and mobile, numeric input fits, and UI actions save progress', () => {
  const controls = [], saved = [], panels = [], scenes = [];
  const context = {
    Jr: function () {}, Ae: {}, M: { mobile: false, now: 1000, dialogStart: 1000, log: '', sound: false },
    location: { pathname: '/retro-computer', hash: '' },
    localStorage: { getItem: () => null, setItem: (key, value) => saved.push(value) },
    Pe: { value: '' }, tt: { world: { setMode: mode => scenes.push(mode) } },
    performance: { now: () => 1000 }, Me: { tick() {} }, ze: { focus() {} },
    he: message => { context.M.log = message; }, oe: (dialog, panel) => panels.push(panel),
    bn: value => value, la() {}, Ki() {}, Dl() {}, Ee: true,
    Ts: text => [text], Zt: [],
    Xt: (grid, id, x, y, w, label, callback) => { const control = { id, x, y, w, label, callback }; controls.push(control); return control; },
    on: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
    NM() {},
  };
  runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
  const bundle = readFileSync(new URL('../public/assets/terminal.js', import.meta.url), 'utf8');
  runInNewContext(bundle.slice(bundle.indexOf('// SIGNAL_GAME_BEGIN:'), bundle.indexOf('// SIGNAL_GAME_END')), context);
  for (const mobile of [false, true]) {
    controls.length = 0;
    context.M.mobile = mobile;
    const text = [];
    const grid = { cols: mobile ? 40 : 84, text: (x, y, value) => text.push(value), put() {} };
    context.renderSignalHeader(grid);
    context.renderSignalMain(grid);
    context.renderSignalFooter(grid);
    assert.ok(text.includes('login: '));
    assert.ok(text.includes('INICIO DE SESION REQUERIDO'));
    assert.equal(controls.some(control => control.id.startsWith('signal-map')), false);
    assert.deepEqual(controls.map(control => control.id), ['send']);
    assert.match(context.signalAccessible(), /alias ficticio/);
  }
  context.signalCommand('PRUEBA');
  context.signalCommand('LOGIN PRUEBA');
  assert.equal(JSON.parse(saved.at(-1)).alias, 'PRUEBA');
  assert.equal(panels.length, 0, 'alias recovery stays inline in the terminal');
  assert.match(context.signalAccessible(), /Escribe SINCRO/);
  for (const command of ['SINCRO', 'REPETIR', 'PULSO 2', 'PULSO 4', 'PULSO 1', 'REPETIR', 'PULSO 3', 'PULSO 1', 'PULSO 4', 'PULSO 2']) context.signalCommand(command);
  assert.match(context.signalAccessible(), /Escribe INICIAR/);
  context.signalCommand('LOGIN PRUEBA');
  assert.equal(JSON.parse(saved.at(-1)).started, true);
  for (const mobile of [false, true]) {
    controls.length = 0;
    context.M.mobile = mobile;
    const grid = { cols: mobile ? 40 : 84, text() {}, put() {}, rule() {}, box() {} };
    context.renderSignalMain(grid);
    context.renderSignalFooter(grid);
    context.renderSignalInput(grid);
    for (const puzzle of ['sync', 'memory', 'circuit']) {
      runInNewContext(`signalPuzzle = '${puzzle}'`, context);
      context.renderSignalPuzzle(grid);
    }
    assert.ok(controls.some(control => control.id === 'signal-pulse-4'));
    assert.ok(controls.some(control => control.id === 'signal-fragment-3'));
    assert.ok(controls.some(control => control.id === 'signal-circuit-5' && /Conexiones/.test(control.label)));
    assert.ok(controls.some(control => control.id === 'signal-digit-0'));
    assert.ok(controls.some(control => control.id === 'signal-map-nucleo'));
    for (const control of controls) {
      assert.ok(control.x >= 0 && control.x + control.w <= grid.cols, control.id);
      assert.ok(control.y >= 0 && control.y < (mobile ? 61 : 46), control.id);
    }
  }
  context.signalCommand('LEER BALIZA');
  context.signalCommand('IR ECO');
  assert.equal(JSON.parse(saved.at(-1)).scene, 'eco');
  assert.equal(JSON.parse(saved.at(-1)).read[0], 'baliza');
  assert.equal(scenes.at(-1), 'hermes');
  assert.ok(panels.some(panel => panel?.title === 'SESION RESTABLECIDA'));
  assert.match(context.signalAccessible(), /ECO/);
  for (const command of ['CLAVE 0317', 'ABRIR guardia.log', 'RECUPERAR 1', 'ABRIR identidades.db', 'INSPECCIONAR D-17']) context.signalCommand(command);
  for (const mobile of [false, true]) {
    context.M.mobile = mobile;
    const grid = { cols: mobile ? 40 : 84, text() {}, put() {}, rule() {}, box() {} };
    for (const key of ['directory', 'guardia', 'tripulacion', 'D-17', 'camara', 'protocolo']) {
      controls.length = 0;
      runInNewContext(`signalFile = { key: '${key}', page: 0 }`, context);
      context.renderSignalFiles(grid);
      assert.ok(controls.some(control => control.id === 'signal-file-close'));
      for (const control of controls) {
        assert.ok(control.x >= 0 && control.x + control.w <= grid.cols, control.id);
        assert.ok(control.y >= 0 && control.y < (mobile ? 61 : 46), control.id);
      }
    }
    runInNewContext("signalFile = { key: 'tripulacion', page: 0 }", context);
    context.signalFilePage(10);
    context.M.dialog = 'signal-file';
    assert.match(context.signalAccessible(), /D-17/);
    assert.doesNotMatch(context.signalAccessible(), /D-01/);
    context.M.dialog = null;
  }
  context.localStorage.setItem = () => { throw new Error('Storage denied'); };
  context.signalCommand('CUADERNO');
  assert.match(context.signalAccessible(), /no permite guardar/);
});
