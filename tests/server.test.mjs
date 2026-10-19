import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../server.mjs';

test('serves both page URLs, local assets and handles invalid requests', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const path of ['/', '/retro-computer?ref=cssda']) {
      const response = await fetch(base + path);
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.match(html, /id="screen"/);
      assert.match(html, /\/assets\/terminal.js/);
      assert.doesNotMatch(html, /datafa\.st|googletagmanager/);
    }
    for (const path of ['/assets/terminal.css', '/assets/terminal.js', '/icon.svg']) {
      assert.equal((await fetch(base + path)).status, 200);
    }
    assert.equal((await fetch(base + '/missing')).status, 404);
    assert.equal((await fetch(base + '/server.mjs')).status, 404);
    assert.equal((await fetch(base, { method: 'POST' })).status, 405);
    assert.equal(await (await fetch(base, { method: 'HEAD' })).text(), '');
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
