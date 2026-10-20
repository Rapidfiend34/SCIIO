import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = new URL('./public/', import.meta.url);
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/retro-computer', ['index.html', 'text/html; charset=utf-8']],
  ['/assets/terminal.css', ['assets/terminal.css', 'text/css; charset=utf-8']],
  ['/assets/terminal.js', ['assets/terminal.js', 'text/javascript; charset=utf-8']],
  ['/assets/hermes-content.js', ['assets/hermes-content.js', 'text/javascript; charset=utf-8']],
  ['/assets/signal-game.js', ['assets/signal-game.js', 'text/javascript; charset=utf-8']],
  ['/favicon.ico', ['favicon.ico', 'image/x-icon']],
  ['/icon.svg', ['icon.svg', 'image/svg+xml']],
  ['/apple-icon.png', ['apple-icon.png', 'image/png']],
  ['/og.png', ['og.png', 'image/png']],
]);

export function createApp() {
  return createServer(async (request, response) => {
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    const file = files.get(new URL(request.url, 'http://localhost').pathname);
    if (!file) {
      response.writeHead(404).end('Not found');
      return;
    }
    try {
      const body = await readFile(new URL(file[0], root));
      response.writeHead(200, { 'Content-Type': file[1], 'Content-Length': body.length });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Unable to load resource');
    }
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const portIndex = process.argv.indexOf('--port');
  const hostIndex = process.argv.indexOf('--host');
  const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT || 3000);
  const host = hostIndex >= 0 ? process.argv[hostIndex + 1] : '127.0.0.1';
  createApp().listen(port, host, () => console.log(`Retro computer: http://${host}:${port}`));
}
