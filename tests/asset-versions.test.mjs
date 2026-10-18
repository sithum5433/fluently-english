import test from 'node:test';
import assert from 'node:assert/strict';
import { versionApplicationAssets } from '../scripts/asset-versions.mjs';

const sources = () => ({
  'index.html': '<script src="./src/boot.js?v=local" defer></script>',
  'src/boot.js': "import('./app.js?v=local').catch(showLoadError);",
  'src/app.js': "import { LESSONS } from './content.js?v=local';\nimport { renderPractice } from './practice.js?v=local';",
  'src/content.js': 'export const LESSONS = ["First lesson"];',
  'src/practice.js': 'export function renderPractice() {}',
});

test('asset versions are deterministic and leave source files unchanged', () => {
  const original = sources();
  const snapshot = { ...original };
  const built = versionApplicationAssets(original);
  assert.deepEqual(original, snapshot);
  assert.deepEqual(versionApplicationAssets(original), built);
  assert.deepEqual(versionApplicationAssets(built), built, 'Versioning a build twice must not keep changing its URLs.');
  assert.match(built['index.html'], /src="\.\/src\/boot\.js\?v=[a-f0-9]{16}"/);
  assert.match(built['src/boot.js'], /import\('\.\/app\.js\?v=[a-f0-9]{16}'\)/);
  assert.match(built['src/app.js'], /from '\.\/content\.js\?v=[a-f0-9]{16}'/);
  assert.match(built['src/app.js'], /from '\.\/practice\.js\?v=[a-f0-9]{16}'/);
  assert.ok(!Object.values(built).some((source) => source.includes('?v=local')));
});

test('changing either imported module refreshes its own URL and every parent URL', () => {
  const original = sources();
  const before = versionApplicationAssets(original);
  for (const dependency of ['src/content.js', 'src/practice.js']) {
    const after = versionApplicationAssets({ ...original, [dependency]: `${original[dependency]}\n// Updated lesson or practice` });
    for (const parent of ['src/app.js', 'src/boot.js', 'index.html']) {
      assert.notEqual(after[parent], before[parent], `${dependency} must invalidate ${parent}.`);
    }
    const unchanged = dependency === 'src/content.js' ? 'practice' : 'content';
    const siblingReference = new RegExp(`\\./${unchanged}\\.js\\?v=[a-f0-9]+`);
    assert.equal(after['src/app.js'].match(siblingReference)[0], before['src/app.js'].match(siblingReference)[0]);
  }
});

test('a missing dependency reference stops a build instead of shipping unversioned modules', () => {
  assert.throws(() => versionApplicationAssets({ ...sources(), 'src/boot.js': '/* no import */' }), /Missing \.\/app\.js reference/);
});
