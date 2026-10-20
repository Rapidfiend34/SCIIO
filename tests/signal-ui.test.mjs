import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('game controls fit desktop and mobile, numeric input fits, and UI actions save progress', () => {
  const controls = [], saved = [], panels = [], scenes = [];
  const context = {
    Jr: function () {}, Ae: {}, M: { mobile: false, now: 1000, log: '', sound: false },
    location: { pathname: '/retro-computer', hash: '' },
    localStorage: { getItem: () => null, setItem: (key, value) => saved.push(value) },
    Pe: { value: '' }, tt: { world: { setMode: mode => scenes.push(mode) } },
    performance: { now: () => 1000 }, Me: { tick() {} }, ze: { focus() {} },
    he: message => { context.M.log = message; }, oe: (dialog, panel) => panels.push(panel),
    bn: value => value, la() {}, Ki() {}, Dl() {}, Ee: true,
    Ts: text => [text], Zt: [],
    Xt: (grid, id, x, y, w, label, callback) => controls.push({ id, x, y, w, label, callback }),
    on: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
    NM() {},
  };
  runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
  const bundle = readFileSync(new URL('../public/assets/terminal.js', import.meta.url), 'utf8');
  runInNewContext(bundle.slice(bundle.indexOf('// SIGNAL_GAME_BEGIN:'), bundle.indexOf('// SIGNAL_GAME_END')), context);
  for (const mobile of [false, true]) {
    controls.length = 0;
    context.M.mobile = mobile;
    const grid = { cols: mobile ? 40 : 84, text() {}, put() {}, rule() {}, box() {} };
    context.renderSignalMain(grid);
    context.renderSignalFooter(grid);
    context.renderSignalInput(grid);
    assert.ok(controls.some(control => control.id === 'signal-digit-0'));
    assert.ok(controls.some(control => control.id === 'signal-map-nucleo'));
    for (const control of controls) {
      assert.ok(control.x >= 0 && control.x + control.w <= grid.cols, control.id);
      assert.ok(control.y >= 0 && control.y < (mobile ? 56 : 46), control.id);
    }
  }
  context.signalCommand('INICIAR');
  context.signalCommand('LEER BALIZA');
  context.signalCommand('IR ECO');
  assert.equal(JSON.parse(saved.at(-1)).scene, 'eco');
  assert.equal(JSON.parse(saved.at(-1)).read[0], 'baliza');
  assert.equal(scenes.at(-1), 'hermes');
  assert.match(panels[0].title, /ALGUIEN/);
  assert.match(context.signalAccessible(), /ECO/);
  context.localStorage.setItem = () => { throw new Error('Storage denied'); };
  context.signalCommand('CUADERNO');
  assert.match(context.signalAccessible(), /no permite guardar/);
});
