import { access, cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { versionApplicationAssets } from './asset-versions.mjs';
import { compileCurriculum } from './compile-curriculum.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const destination = path.join(root, 'dist');
const required = ['index.html', 'styles.css', 'src'];

await compileCurriculum();

// Resolve from this file so the build works from any current directory.
for (const entry of required) {
  await access(path.join(root, entry));
}

// Stop before replacing a working build if a learning module cannot load.
for (const entry of ['src/boot.js', 'src/app.js', 'src/content.js', 'src/practice.js']) {
  execFileSync(process.execPath, ['--check', path.join(root, entry)], { stdio: 'inherit' });
}

const moduleFiles = ['index.html', 'src/boot.js', 'src/app.js', 'src/content.js', 'src/practice.js'];
const sources = Object.fromEntries(await Promise.all(moduleFiles.map(async (entry) => [entry, await readFile(path.join(root, entry), 'utf8')])));
const versioned = versionApplicationAssets(sources);

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const entry of required) {
  await cp(path.join(root, entry), path.join(destination, entry), { recursive: true });
}
for (const [entry, source] of Object.entries(versioned)) {
  await writeFile(path.join(destination, entry), source);
}

try {
  await access(path.join(root, 'assets'));
  await cp(path.join(root, 'assets'), path.join(destination, 'assets'), { recursive: true });
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

// GitHub Pages should serve source files without Jekyll processing.
await writeFile(path.join(destination, '.nojekyll'), '');
console.log('Built Fluently into dist/ — no dependencies or installation required.');
