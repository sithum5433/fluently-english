import test from 'node:test';
import assert from 'node:assert/strict';
import { LEVELS, LESSONS, PLACEMENT_QUESTIONS, WORDS } from '../src/content.js';

const skills = ['grammar', 'vocabulary', 'reading', 'listening', 'writing', 'speaking'];
const coreLevels = ['a0', 'a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0;

test('the learning path has unique levels and a lesson for every core skill', () => {
  assert.ok(LEVELS.length > 1, 'The path must offer more than one learning level.');
  const levelIds = LEVELS.map((level) => level.id);
  assert.equal(new Set(levelIds).size, levelIds.length, 'Level ids must be unique.');
  assert.ok(coreLevels.every((id) => levelIds.includes(id)), 'The beginner-to-advanced path must retain all seven core levels.');
  assert.equal(new Set(LESSONS.map((lesson) => lesson.id)).size, LESSONS.length, 'Lesson ids must be unique so progress cannot overwrite another lesson.');

  for (const level of LEVELS) {
    assert.ok(nonempty(level.id) && nonempty(level.name), 'Every level needs an id and a visible name.');
    const available = LESSONS.filter((lesson) => lesson.level === level.id);
    assert.ok(available.length > 0, `${level.id} has no lessons.`);
    // Specialist chapters such as Business English can focus on selected skills.
    for (const skill of coreLevels.includes(level.id) ? skills : []) {
      assert.ok(available.some((lesson) => lesson.skill === skill), `${level.id} has no ${skill} lesson.`);
    }
  }

  for (const lesson of LESSONS) {
    assert.ok(levelIds.includes(lesson.level), `${lesson.id} points to an unknown level.`);
    assert.ok(skills.includes(lesson.skill), `${lesson.id} points to an unknown skill.`);
    assert.match(lesson.id, /^[a-z0-9-]+$/, 'Lesson ids must be safe to use in navigation and storage.');
    assert.ok(nonempty(lesson.title) && nonempty(lesson.description), `${lesson.id} needs a title and a description.`);
    assert.ok(Number.isFinite(lesson.minutes) && lesson.minutes > 0, `${lesson.id} needs a positive duration.`);
  }
});

test('the guided path starts with foundations and follows the chapter order', () => {
  assert.equal(LESSONS[0].level, 'a0', 'New learners must start with foundations rather than specialist content.');
  const chapterOrder = new Map(LEVELS.map((level, index) => [level.id, index]));
  for (let index = 1; index < LESSONS.length; index++) {
    assert.ok(chapterOrder.get(LESSONS[index].level) >= chapterOrder.get(LESSONS[index - 1].level), 'Lessons must follow the chapter order shown on the learning path.');
  }
});

test('lessons include teachable content and complete feedback for every exercise', () => {
  for (const lesson of LESSONS) {
    assert.ok(Array.isArray(lesson.content) && lesson.content.length > 0, `${lesson.id} has no learning content.`);
    for (const section of lesson.content) {
      assert.ok(nonempty(section.heading) && nonempty(section.text), `${lesson.id} has an incomplete explanation.`);
      assert.ok(Array.isArray(section.examples) && section.examples.length > 0 && section.examples.every(nonempty), `${lesson.id} needs usable examples.`);
    }
    assert.ok(Array.isArray(lesson.questions) && lesson.questions.length > 0, `${lesson.id} has no practice questions.`);
    if (lesson.skill === 'listening') {
      assert.ok(nonempty(lesson.listeningText), `${lesson.id} has no listening script or text fallback.`);
    }
  }
});

test('all answer keys reference a valid choice, with useful answer explanations', () => {
  assert.ok(PLACEMENT_QUESTIONS.length > 0, 'The placement check must have questions.');
  const sets = [
    ...LESSONS.map((lesson) => [lesson.id, lesson.questions]),
    ['placement', PLACEMENT_QUESTIONS],
  ];

  for (const [label, questions] of sets) {
    for (const [index, question] of questions.entries()) {
      const location = `${label} question ${index + 1}`;
      assert.ok(nonempty(question.prompt), `${location} has no prompt.`);
      assert.ok(Array.isArray(question.options) && question.options.length >= 2, `${location} needs answer choices.`);
      assert.ok(question.options.every(nonempty), `${location} has an empty answer choice.`);
      // Capitalisation itself is assessed by several writing questions.
      const normalized = question.options.map((option) => option.trim());
      assert.equal(new Set(normalized).size, normalized.length, `${location} repeats an answer choice.`);
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `${location} has an invalid answer key.`);
      assert.ok(nonempty(question.explanation), `${location} needs feedback that explains the answer.`);
    }
  }
});

test('vocabulary cards have valid levels, definitions, and example sentences', () => {
  assert.ok(WORDS.length > 0, 'Vocabulary practice needs cards.');
  const words = new Set();
  const levelIds = new Set(LEVELS.map((level) => level.id));
  for (const card of WORDS) {
    assert.ok(nonempty(card.word) && nonempty(card.meaning) && nonempty(card.example), 'A vocabulary card is incomplete.');
    assert.ok(levelIds.has(card.level), `${card.word} points to an unknown level.`);
    const normalized = card.word.trim().toLowerCase();
    assert.ok(!words.has(normalized), `${card.word} repeats a vocabulary card.`);
    words.add(normalized);
  }
});
