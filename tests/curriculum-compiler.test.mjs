import test from 'node:test';
import assert from 'node:assert/strict';
import { mergeCurriculum } from '../scripts/compile-curriculum.mjs';

const lesson = (id, level) => ({id, level, skill:'grammar', title:'A useful lesson', description:'Apply a clear grammar rule.', minutes:10, content:[{heading:'Learn',text:'A useful explanation.',examples:['An example.']}],questions:Array.from({length:3},()=>({prompt:'Choose the correct sentence.',options:['One','Two','Three','Four'],answer:1,explanation:'The second choice follows the rule.'}))});
const core = () => ({levels:[{id:'a0'},{id:'a1'}], lessons:[lesson('a0-original','a0'),lesson('a1-original','a1')], placementQuestions:[],words:[{word:'hello',meaning:'A greeting',example:'Hello, Maya.',level:'a0'}]});

test('expanding a chapter preserves old progress ids and the guided chapter order', () => {
  const baseline = core();
  const before = JSON.stringify(baseline);
  const result = mergeCurriculum(baseline,[{lessons:[lesson('a1-new','a1'),lesson('a0-new','a0')],words:[]}]);
  assert.deepEqual(result.lessons.map(item=>item.id),['a0-original','a0-new','a1-original','a1-new']);
  assert.equal(JSON.stringify(baseline),before,'Compiling must not mutate source data.');
});

test('duplicate progress ids and vocabulary are rejected before publishing', () => {
  assert.throws(()=>mergeCurriculum(core(),[{lessons:[lesson('a0-original','a0')],words:[]}]),/Duplicate or invalid lesson id/);
  assert.throws(()=>mergeCurriculum(core(),[{lessons:[],words:[{word:'HELLO',meaning:'A greeting',example:'Hello, Sam.',level:'a1'}]}]),/Duplicate vocabulary card/);
});

test('a broken answer key or missing listening script cannot compile', () => {
  const invalid = lesson('a0-new','a0'); invalid.questions[0].answer=4;
  assert.throws(()=>mergeCurriculum(core(),[{lessons:[invalid],words:[]}]),/Invalid answer key/);
  const listening=lesson('a0-new','a0'); listening.skill='listening';
  assert.throws(()=>mergeCurriculum(core(),[{lessons:[listening],words:[]}]),/Missing listening script/);
});
