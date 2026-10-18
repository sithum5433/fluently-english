import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { LESSONS, WORDS } from '../src/content.js';
import { mergeCurriculum } from '../scripts/compile-curriculum.mjs';

const readPack = async name => JSON.parse(await readFile(new URL(`../curriculum/${name}`,import.meta.url),'utf8'));
const core = await readPack('core.json');
const packs = await Promise.all(['foundations.json','intermediate.json','advanced-business.json'].map(readPack));
const expanded = mergeCurriculum(core,packs);

test('the browser curriculum includes the complete authored packs and retains saved lesson ids', () => {
  assert.deepEqual(LESSONS,expanded.lessons,'Regenerate src/content.js after editing lesson packs.');
  assert.deepEqual(WORDS,expanded.words);
  assert.ok(core.lessons.every(original=>LESSONS.some(lesson=>lesson.id===original.id)),'An existing learner must keep every completed lesson.');
  for(const level of ['a0','a1','a2','b1','b2','c1','c2']){
    const lessons=LESSONS.filter(lesson=>lesson.level===level);
    assert.ok(lessons.length>=24,`${level} needs a substantial study path.`);
    for(const skill of ['grammar','vocabulary','reading','listening','writing','speaking']){
      assert.ok(lessons.filter(lesson=>lesson.skill===skill).length>=4,`${level} needs more than an introductory ${skill} lesson.`);
    }
  }
  assert.ok(LESSONS.filter(lesson=>lesson.level==='biz').length>=12);
  assert.ok(WORDS.length>=152);
});

test('new lessons contain substantial teaching, examples, and explained practice', () => {
  for(const lesson of packs.flatMap(pack=>pack.lessons)){
    assert.ok(lesson.content.length>=3,`${lesson.id} needs teaching and guided application.`);
    const count=lesson.content.map(section=>section.text).join(' ').trim().split(/\s+/).length;
    assert.ok(count>=100,`${lesson.id} has only ${count} words of teaching.`);
    assert.equal(lesson.questions.length,3,`${lesson.id} must include three practice questions.`);
    assert.ok(lesson.content.every(section=>section.examples.length>=2),`${lesson.id} needs concrete examples throughout.`);
    if(lesson.skill==='listening')assert.ok(lesson.listeningText.trim().split(/\s+/).length>=30,`${lesson.id} needs a complete listening passage.`);
  }
});
