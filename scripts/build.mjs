import { mkdir, copyFile, readFile, stat, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const files = ['index.html', 'styles.css', 'registration.mjs', 'assets/hero-abv-2026-v2.png', 'assets/logo-broto-branco.png', 'assets/fonts/old-london.ttf', 'assets/fonts/roboto-regular.ttf', 'assets/fonts/roboto-bold.ttf', 'assets/fonts/roboto-italic.ttf', 'assets/fonts/roboto-bold-italic.ttf', 'assets/fonts/Roboto-OFL.txt', 'assets/fonts/SOURCES.md'];
const html = await readFile(resolve(root, 'index.html'), 'utf8');
if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error('A página deve ter um único título h1.');
if (html.includes('lugar reservado')) throw new Error('Não publicar um formulário sem registo real.');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const path = match[1];
  if (!/^(https?:|mailto:)/.test(path)) await stat(resolve(root, path.split('?' )[0]));
}
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) if (!ids.has(id)) throw new Error(`Âncora inexistente: ${id}`);
for (const file of files) {
  await mkdir(dirname(resolve(output, file)), { recursive: true });
  await copyFile(resolve(root, file), resolve(output, file));
}
await writeFile(resolve(output, '.nojekyll'), '');
console.log(`Página validada e preparada em dist/ (${files.length} ficheiros).`);
