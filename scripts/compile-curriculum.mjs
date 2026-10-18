import { readFile, rename, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const packNames = ['foundations.json', 'intermediate.json', 'advanced-business.json'];
const skills = new Set(['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking']);
const text = value => typeof value === 'string' && value.trim().length > 0;
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };

export function mergeCurriculum(core, packs) {
  requireValue(Array.isArray(core.levels) && Array.isArray(core.lessons) && Array.isArray(core.words) && Array.isArray(core.placementQuestions), 'The core curriculum is incomplete.');
  const chapterOrder = new Map(core.levels.map((level, index) => [level.id, index]));
  requireValue(chapterOrder.size === core.levels.length, 'Chapter ids must be unique.');
  const lessons = [...core.lessons];
  const words = [...core.words];
  for (const pack of packs) {
    requireValue(Array.isArray(pack.lessons) && Array.isArray(pack.words), 'Each curriculum pack needs lessons and word cards.');
    lessons.push(...pack.lessons);
    words.push(...pack.words);
  }
  const ids = new Set();
  for (const lesson of lessons) {
    requireValue(text(lesson.id) && /^[a-z0-9-]+$/.test(lesson.id) && !ids.has(lesson.id), `Duplicate or invalid lesson id: ${lesson.id}`);
    ids.add(lesson.id);
    requireValue(chapterOrder.has(lesson.level) && skills.has(lesson.skill), `Unknown chapter or skill in ${lesson.id}.`);
    requireValue(text(lesson.title) && text(lesson.description) && Number.isFinite(lesson.minutes) && lesson.minutes > 0, `Incomplete lesson: ${lesson.id}`);
    requireValue(Array.isArray(lesson.content) && lesson.content.length > 0, `Missing teaching content in ${lesson.id}.`);
    for (const section of lesson.content) {
      requireValue(text(section.heading) && text(section.text) && Array.isArray(section.examples) && section.examples.length > 0 && section.examples.every(text), `Incomplete teaching section in ${lesson.id}.`);
    }
    if (lesson.skill === 'listening') requireValue(text(lesson.listeningText), `Missing listening script in ${lesson.id}.`);
    requireValue(Array.isArray(lesson.questions) && lesson.questions.length >= 3, `Not enough exercises in ${lesson.id}.`);
    for (const question of lesson.questions) {
      requireValue(text(question.prompt) && text(question.explanation), `Missing exercise feedback in ${lesson.id}.`);
      requireValue(Array.isArray(question.options) && question.options.length === 4 && question.options.every(text) && new Set(question.options.map(option => option.trim())).size === 4, `Invalid exercise choices in ${lesson.id}.`);
      requireValue(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `Invalid answer key in ${lesson.id}.`);
    }
  }
  const wordIds = new Set();
  for (const card of words) {
    requireValue(text(card.word) && text(card.meaning) && text(card.example) && chapterOrder.has(card.level), 'Incomplete vocabulary card.');
    const wordId = card.word.trim().toLowerCase();
    requireValue(!wordIds.has(wordId), `Duplicate vocabulary card: ${card.word}`);
    wordIds.add(wordId);
  }
  // Stable sorting keeps familiar lessons first within each expanded chapter.
  lessons.sort((a, b) => chapterOrder.get(a.level) - chapterOrder.get(b.level));
  words.sort((a, b) => chapterOrder.get(a.level) - chapterOrder.get(b.level));
  return { levels: core.levels, lessons, placementQuestions: core.placementQuestions, words };
}

export async function compileCurriculum() {
  const readJSON = async name => JSON.parse(await readFile(path.join(root, 'curriculum', name), 'utf8'));
  const core = await readJSON('core.json');
  const packs = await Promise.all(packNames.map(readJSON));
  const curriculum = mergeCurriculum(core, packs);
  const exports = [['LEVELS', curriculum.levels], ['LESSONS', curriculum.lessons], ['PLACEMENT_QUESTIONS', curriculum.placementQuestions], ['WORDS', curriculum.words]];
  const source = '// Generated from curriculum/*.json. Run node scripts/compile-curriculum.mjs after editing lessons.\n\n' + exports.map(([name, data]) => `export const ${name} = ${JSON.stringify(data, null, 2)};`).join('\n\n') + '\n';
  const outputPath = path.join(root, 'src/content.js');
  const previous = await readFile(outputPath, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
  if (previous !== source) {
    await writeFile(`${outputPath}.tmp`, source);
    await rename(`${outputPath}.tmp`, outputPath);
  }
  return { lessons: curriculum.lessons.length, words: curriculum.words.length, changed: previous !== source };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await compileCurriculum();
  console.log(`Compiled ${result.lessons} lessons and ${result.words} vocabulary cards.`);
}
