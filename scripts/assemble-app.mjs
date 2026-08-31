import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const dir = path.resolve('payload');
const parts = fs.readdirSync(dir)
  .filter((name) => /^app\.\d+\.b64gz$/.test(name))
  .sort();

if (!parts.length) throw new Error('Dashboard payload not found.');

const b64 = parts.map((name) => fs.readFileSync(path.join(dir, name), 'utf8').trim()).join('');
const source = zlib.gunzipSync(Buffer.from(b64, 'base64'));
fs.mkdirSync(path.resolve('src'), { recursive: true });
fs.writeFileSync(path.resolve('src/App.jsx'), source);
console.log(`Assembled src/App.jsx from ${parts.length} payload part(s).`);
