import { createHash } from 'node:crypto';

const contentVersion = (source) => createHash('sha256').update(source).digest('hex').slice(0, 16);

function updateReference(source, reference, version, filename) {
  const escaped = reference.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(["'])${escaped}(?:\\?[^"'#]*)?(?:#[^"']*)?\\1`, 'g');
  let replacements = 0;
  const updated = source.replace(pattern, (_, quote) => {
    replacements++;
    return `${quote}${reference}?v=${version}${quote}`;
  });
  if (!replacements) throw new Error(`Missing ${reference} reference in ${filename}.`);
  return updated;
}

// Version dependencies first so a changed lesson also changes every parent URL.
// Relative paths continue to work when GitHub Pages hosts a repository subpath.
export function versionApplicationAssets(sources) {
  const files = { ...sources };
  const dependencies = [
    ['src/app.js', './content.js', 'src/content.js'],
    ['src/app.js', './practice.js', 'src/practice.js'],
    ['src/boot.js', './app.js', 'src/app.js'],
    ['index.html', './src/boot.js', 'src/boot.js'],
  ];

  for (const [filename, reference, dependency] of dependencies) {
    if (typeof files[filename] !== 'string' || typeof files[dependency] !== 'string') {
      throw new Error(`Missing source for ${filename} or ${dependency}.`);
    }
    files[filename] = updateReference(files[filename], reference, contentVersion(files[dependency]), filename);
  }
  return files;
}
