import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Hermes navigation, layouts, contextual links and install clipboard', async () => {
  const controls = [];
  const actions = [];
  const context = {
    Ss: {}, Ae: {}, M: { mobile: false, now: 1000, hermesReturnMode: 'apps' },
    oe: (dialog, page) => actions.push(page.id), dn: mode => actions.push(mode),
    bn: text => text, bs: () => 'orange', Ki() {},
    Xt: (grid, id, x, y, w, label, callback) => controls.push({ id, x, y, w, label, callback }),
    on: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
    As: (grid, id, x, y, w) => controls.push({ id, x, y, w }),
  };
  runInNewContext(readFileSync(new URL('../public/assets/hermes-content.js', import.meta.url), 'utf8'), context);
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
});
