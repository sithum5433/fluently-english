import test from 'node:test';
import assert from 'node:assert/strict';
import { ALPHABET, traceCoverage } from '../src/alphabet-data.js';
import { primaryProgress } from '../src/primary.js';

test('every letter has complete, drawable upper- and lowercase instructions', () => {
  assert.equal(ALPHABET.length, 26);
  assert.equal(ALPHABET.map(({ letter }) => letter).join(''), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  for (const entry of ALPHABET) {
    assert.ok(entry.word.length > 0, `${entry.letter} needs a word`);
    assert.ok(entry.emoji.length > 0, `${entry.letter} needs a picture`);
    for (const caseName of ['upper', 'lower']) {
      const { strokes, instructions } = entry[caseName];
      assert.ok(strokes.length > 0, `${entry.letter} ${caseName} needs strokes`);
      assert.equal(strokes.length, instructions.length, `${entry.letter} ${caseName} needs one instruction per stroke`);
      assert.ok(instructions.every((instruction) => typeof instruction === 'string' && instruction.length > 10));
      for (const stroke of strokes) {
        assert.ok(stroke.length >= 2, `${entry.letter} ${caseName} stroke needs at least two points`);
        for (const point of stroke) {
          assert.equal(point.length, 2);
          assert.ok(point.every(Number.isFinite));
          assert.ok(point[0] >= 100 && point[0] <= 300, `${entry.letter} ${caseName} exceeds horizontal drawing area`);
          assert.ok(point[1] >= 45 && point[1] <= 285, `${entry.letter} ${caseName} exceeds vertical drawing area`);
        }
      }
      assert.equal(traceCoverage(strokes, strokes), 1, `${entry.letter} ${caseName} must recognize an exact trace`);
    }
  }
});

test('a and g have a closed, single-storey bowl and a separate right-hand stroke', () => {
  for (const letter of ['A', 'G']) {
    const { strokes } = ALPHABET.find((entry) => entry.letter === letter).lower;
    assert.equal(strokes.length, 2);
    const bowl = strokes[0];
    assert.ok(Math.hypot(bowl[0][0] - bowl.at(-1)[0], bowl[0][1] - bowl.at(-1)[1]) < 0.001);
    assert.equal(strokes[1][0][0], 240);
  }
  const g = ALPHABET.find((entry) => entry.letter === 'G').lower.strokes;
  assert.equal(Math.max(...g.flat().map((point) => point[1])), 285);
});

test('coverage is zero for no drawing or a drawing far from the letter', () => {
  const guide = [[[50, 50], [150, 50]]];
  assert.equal(traceCoverage(guide, []), 0);
  assert.equal(traceCoverage([], guide), 0);
  assert.equal(traceCoverage(guide, [[[50, 200], [150, 200]]]), 0);
  assert.equal(traceCoverage(guide, [[[NaN, 50], [Infinity, 50]]]), 0);
  assert.equal(traceCoverage(guide, guide, -1), 0);
});

test('coverage accepts honest tracing with sparse points and small hand movements', () => {
  const guide = [[[0, 0], [100, 0], [100, 100]]];
  assert.equal(traceCoverage(guide, [[[0, 0], [100, 0], [100, 100]]]), 1);
  assert.equal(traceCoverage(guide, [[[0, 10], [90, 10], [90, 100]]]), 1);
  assert.equal(traceCoverage(guide, [[[0, 0], [100, 0], [100, 100]]], 0), 1);
});

test('repeating a small scribble cannot complete a whole letter', () => {
  const guide = ALPHABET.find(({ letter }) => letter === 'A').upper.strokes;
  const scribble = [[[194, 64], [202, 68], [196, 72], [204, 64]]];
  const once = traceCoverage(guide, scribble);
  const repeated = traceCoverage(guide, Array.from({ length: 40 }, () => scribble[0]));
  assert.ok(once > 0);
  assert.ok(once < 0.2);
  assert.equal(repeated, once);
});

test('coverage measures length, rather than rewarding densely sampled short sections', () => {
  const denseShortSection = Array.from({ length: 101 }, (_, index) => [index / 10, 0]);
  const guide = [[...denseShortSection, [100, 0]]];
  const coverage = traceCoverage(guide, [[[0, 0], [10, 0]]], 0);
  assert.ok(Math.abs(coverage - 0.1) < 0.001);
});

test('lifting the pen never creates a line between separate drawn strokes', () => {
  const guide = [[[0, 0], [100, 0]]];
  const dots = [[[0, 0]], [[100, 0]]];
  assert.ok(traceCoverage(guide, dots, 2) < 0.1);
  assert.equal(traceCoverage(guide, [[[0, 0], [100, 0]]], 2), 1);
});

test('imported primary progress accepts only real activities and removes duplicate stars', () => {
  const valid = [
    ...ALPHABET.flatMap(({ letter }) => [`trace-${letter}-upper`, `trace-${letter}-lower`, `colour-${letter}`, `match-${letter}`]),
    ...Array.from({ length: 10 }, (_, index) => `count-${index + 1}`),
  ];
  const invalid = ['trace-A', 'trace-a-upper', 'trace-AB-upper', 'trace-A-both',
    'colour-A-upper', 'match-a', 'count-0', 'count-11', 'count-01', 'count-1.0',
    'count-1-extra', '', null, 1, {}, ['match-A']];
  const state = { practice: { primary: { completed: [...valid, ...invalid, ...valid], lastLetter: 'Z' } } };
  const result = primaryProgress(state);
  assert.deepEqual(result.completed, valid);
  assert.equal(result.completed.length, 114);
  assert.equal(result.lastLetter, 'Z');
});

test('malformed imported primary progress safely falls back to an empty alphabet journey', () => {
  const empty = { completed: [], lastLetter: 'A' };
  assert.deepEqual(primaryProgress({}), empty);
  assert.deepEqual(primaryProgress({ practice: null }), empty);
  for (const primary of [undefined, null, 0, 'letters', [], {}]) {
    assert.deepEqual(primaryProgress({ practice: { primary } }), empty);
  }
  for (const completed of [null, 42, 'trace-A-upper', { 'trace-A-upper': true }]) {
    assert.deepEqual(primaryProgress({ practice: { primary: { completed } } }), empty);
  }
  for (const lastLetter of [null, '', 'b', 'AA', '<b>B</b>', 1, ['B'], { letter: 'B' }]) {
    assert.deepEqual(primaryProgress({ practice: { primary: { lastLetter } } }), empty);
  }
});

test('reading primary progress does not mutate the imported backup or share its completed array', () => {
  const completed = Object.freeze(['trace-A-upper', 'trace-A-upper', 'count-2']);
  const primary = Object.freeze({ completed, lastLetter: 'B' });
  const state = Object.freeze({ practice: Object.freeze({ primary }) });
  const result = primaryProgress(state);
  assert.deepEqual(result, { completed: ['trace-A-upper', 'count-2'], lastLetter: 'B' });
  result.completed.push('colour-B');
  assert.equal(state.practice.primary.completed.length, 3);
  assert.equal(state.practice.primary.completed[1], 'trace-A-upper');
});
