import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Hermes navigation, layouts, contextual links and install clipboard', async () => {
  const controls = [];
  const actions = [];
  const context = {
    Jr: function () {},
    Ss: {}, Ae: {}, location: { pathname: "/retro-computer", hash: "" }, localStorage: { getItem: () => null }, M: { mobile: false, now: 1000, hermesReturnMode: 'apps' },
    oe: (dialog, page) => actions.push(page.id), dn: mode => actions.push(mode),
    bn: text => text, bs: () => 'orange', Ki() {},
    Xt: (grid, id, x, y, w, label, callback) => controls.push({ id, x, y, w, label, callback }),
    on: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
    As: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
  };
  runInNewContext(readFileSync(new URL('../public/assets/hermes-content.js', import.meta.url), 'utf8'), context);
  runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
  const bundle = readFileSync(new URL('../public/assets/terminal.js', import.meta.url), 'utf8');
  const start = bundle.indexOf('// Hermes uses the same character matrix');
  assert.ok(start > 0);
  runInNewContext(bundle.slice(start, bundle.lastIndexOf('$M();})();')), context);
  for (const mobile of [false, true]) {
    controls.length = 0;
    context.M.mobile = mobile;
    const cols = mobile ? 40 : 84;
    context.renderHermesSection({ text() {}, rule() {} });
    for (const control of controls) {
      assert.ok(control.x >= 0 && control.x + control.w <= cols, control.id);
      assert.ok(control.y >= 0 && control.y < (mobile ? 56 : 46), control.id);
    }
    const pages = controls.filter(control => /^hermes-(overview|features|install|faqs|portal)$/.test(control.id));
    assert.equal(pages.length, 5);
    for (const page of pages) page.callback();
    controls.find(control => control.id === 'hermes-back').callback();
    assert.deepEqual(actions.splice(0), ['hermes-overview', 'hermes-features', 'hermes-install', 'hermes-faqs', 'hermes-portal', 'apps']);
  }
  context.hermesNumberKey('3');
  context.hermesNumberKey('6');
  assert.deepEqual(actions, ['hermes-install', 'apps']);
  context.M.mode = 'hermes';
  assert.equal(context.terminalLinkKey('docs'), 'hermesDocs');
  assert.equal(context.terminalLinkKey('start'), 'hermesCloud');
  context.M.mode = 'apps';
  assert.equal(context.terminalLinkKey('docs'), 'docs');

  controls.length = 0;
  const messages = [];
  let copied;
  context.navigator = { clipboard: { writeText: async value => { copied = value; } } };
  context.he = message => messages.push(message);
  context.renderHermesDetailFooter({}, 2, 9, 36, 39, { id: 'hermes-install' });
  const copy = controls.find(control => control.id === 'hermes-copy-install');
  await copy.callback();
  assert.equal(copied, context.SCIIO_HERMES.installCommand);
  context.navigator.clipboard.writeText = async () => { throw new Error('Denied'); };
  await copy.callback();
  assert.match(messages.at(-1), /Clipboard unavailable/);
  assert.notDeepEqual(context.hermesMarkFrame(0, false), context.hermesMarkFrame(1700, false));
  assert.deepEqual(context.hermesMarkFrame(0, true), context.hermesMarkFrame(1700, true));
  assert.ok(context.hermesMarkFrame(500, false).every(row => row.length === 10));
});

test('Hermes uses the original 3D scene transitions, rotation and reduced-motion clock', () => {
  const context = { Ss: {}, Ae: {}, location: { pathname: "/retro-computer", hash: "" }, localStorage: { getItem: () => null }, matchMedia: () => ({ matches: false }), performance: { now: () => 0 } };
  runInNewContext(readFileSync(new URL('../public/assets/hermes-content.js', import.meta.url), 'utf8'), context);
  runInNewContext(readFileSync(new URL('../public/assets/signal-game.js', import.meta.url), 'utf8'), context);
  const bundle = readFileSync(new URL('../public/assets/terminal.js', import.meta.url), 'utf8');
  const extension = bundle.slice(bundle.indexOf('// Hermes uses the same character matrix'), bundle.lastIndexOf('$M();})();'));
  const library = bundle.slice(0, bundle.indexOf('var ee=12'));
  runInNewContext(library + extension + `
    const world = new Jr(
      { addEventListener() {} },
      { getBoundingClientRect: () => ({ width: 600, height: 400 }) },
      { renderer: { setRenderTarget() {}, render() {} } }
    );
    const group = world.groups.hermes;
    let meshes = 0;
    group.traverse(node => {
      if (!node.isMesh) return;
      meshes++;
      const position = node.geometry.attributes.position.array;
      if (!position.every(Number.isFinite)) throw new Error('Non-finite geometry');
    });
    world.setMode('hermes');
    world.draw(1000);
    const first = world.hermesHead.position.y;
    world.draw(2000);
    const moved = world.hermesHead.position.y;
    const rotation = group.rotation.y;
    world.reduced = true;
    world.draw(3000);
    const reduced = world.hermesHead.position.y;
    const stillRotation = group.rotation.y;
    const mode = world.mode;
    const visible = group.visible;
    world.setMode('cloud');
    globalThis.result = { meshes, first, moved, reduced, rotation, stillRotation, mode, visible, returned: world.mode };
  })();`, context);
  assert.ok(context.result.meshes >= 20);
  assert.notEqual(context.result.first, context.result.moved);
  assert.equal(context.result.moved, context.result.reduced);
  assert.equal(context.result.rotation, context.result.stillRotation);
  assert.equal(context.result.mode, 'hermes');
  assert.equal(context.result.visible, true);
  assert.equal(context.result.returned, 'cloud');
});
