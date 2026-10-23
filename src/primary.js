import { ALPHABET, traceCoverage } from './alphabet-data.js?v=20261023';

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ACTIVITIES = [
  {id:'trace',icon:'✏️',name:'Trace & write',text:'Little lines, lovely letters.',color:'peach',tag:'START HERE'},
  {id:'colour',icon:'🎨',name:'Colour the alphabet',text:'A rainbow of ABCs.',color:'pink',tag:'GET CREATIVE'},
  {id:'match',icon:'🧩',name:'Letter detectives',text:'Find the picture’s first letter.',color:'mint',tag:'PLAY & DISCOVER'},
  {id:'count',icon:'🍓',name:'Count & say',text:'One, two… how many can you see?',color:'blue',tag:'LET’S COUNT'},
];
const COLOURS = [['Purple','#7652cc'],['Pink','#e45f8e'],['Blue','#3987d3'],['Green','#35a27b'],['Orange','#ed9840'],['Red','#df5d50']];
const NUMBER_WORDS = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
const alphabetIndex = value => Math.max(0, ALPHABET.findIndex(item => item.letter === value));
function startMarkers(strokes) {
  return strokes.map((points, index) => {
    const [x, y] = points[0];
    const neighbours = strokes.map((stroke, i) => ({i, point:stroke[0]})).filter(({point}) => Math.hypot(point[0]-x, point[1]-y)<22);
    const slot = neighbours.findIndex(({i}) => i===index);
    return {x: neighbours.length>1 ? x+(slot-(neighbours.length-1)/2)*25 : x, y: neighbours.length>1 ? y-24 : y, start:[x,y]};
  });
}

export function primaryProgress(state) {
  const raw = state.practice?.primary;
  const validKey = /^(trace-[A-Z]-(upper|lower)|colour-[A-Z]|match-[A-Z]|count-(10|[1-9]))$/;
  return {
    completed: [...new Set(Array.isArray(raw?.completed) ? raw.completed.filter(key => typeof key === 'string' && validKey.test(key)) : [])],
    lastLetter: typeof raw?.lastLetter === 'string' && /^[A-Z]$/.test(raw.lastLetter) ? raw.lastLetter : 'A',
  };
}

function mascot() {
  return `<svg class="primary-mascot" viewBox="0 0 390 275" fill="none" aria-hidden="true">
    <path d="M77 230C18 163 39 44 154 33c104-23 204 14 201 105 16 101-65 139-158 113Z" fill="#e0ead5"/>
    <path d="M35 187c28-10 66 9 75 24m194 2c25-24 39-20 60-16" stroke="#a9bf8f" stroke-width="2" stroke-linecap="round"/>
    <circle cx="315" cy="48" r="25" fill="#f4cc6a"/><path d="M315 12V4m0 82v8m36-46h8m-88 0h-8m26-26-6-6m58 58 6 6m-6-58 6-6m-58 58-6 6" stroke="#eac56b" stroke-width="3" stroke-linecap="round"/>
    <g transform="rotate(-12 96 74)"><rect x="52" y="37" width="72" height="78" rx="16" fill="#fff9eb" stroke="#dfd4ba" stroke-width="2"/><text x="88" y="91" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="49" fill="#cb7951">A</text></g>
    <g transform="rotate(11 326 153)"><rect x="290" y="114" width="67" height="74" rx="15" fill="#ece4fb" stroke="#d2bfe6" stroke-width="2"/><text x="324" y="166" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="47" fill="#8866b0">b</text></g>
    <ellipse cx="206" cy="246" rx="89" ry="13" fill="#bdcea9"/>
    <path d="M143 183c-28 24-33 48-8 56l27 2h89l21-5c25-16 5-43-14-54" fill="#77a265" stroke="#547b46" stroke-width="2.5"/>
    <ellipse cx="204" cy="191" rx="61" ry="53" fill="#94b97b"/>
    <ellipse cx="204" cy="197" rx="38" ry="35" fill="#d7e5b6"/>
    <path d="M130 124c-12-70 63-77 76-27 18-50 87-34 78 30 10 30-16 53-77 53-60 0-86-25-77-56Z" fill="#94b97b" stroke="#547b46" stroke-width="2.5"/>
    <ellipse cx="161" cy="105" rx="20" ry="23" fill="#fcfff0"/><ellipse cx="249" cy="105" rx="20" ry="23" fill="#fcfff0"/>
    <ellipse cx="166" cy="108" rx="7" ry="10" fill="#354d31"/><ellipse cx="244" cy="108" rx="7" ry="10" fill="#354d31"/>
    <circle cx="168" cy="105" r="2.5" fill="white"/><circle cx="246" cy="105" r="2.5" fill="white"/>
    <ellipse cx="148" cy="140" rx="12" ry="7" fill="#e1ab94"/><ellipse cx="261" cy="140" rx="12" ry="7" fill="#e1ab94"/>
    <path d="M181 143q23 23 46 0" stroke="#42613a" stroke-width="3" stroke-linecap="round"/>
    <g transform="rotate(20 257 184)"><rect x="250" y="136" width="17" height="101" rx="4" fill="#f1ba58" stroke="#b78b3e" stroke-width="2"/><path d="m250 233 8 21 9-21" fill="#f6e5bf"/><path d="m255 247 3 7 3-7" fill="#526347"/><path d="M251 150h15" stroke="#e99290" stroke-width="12"/></g>
    <ellipse cx="252" cy="189" rx="15" ry="11" transform="rotate(-27 252 189)" fill="#94b97b" stroke="#547b46" stroke-width="2"/>
    <path d="m44 144 4 10 11 2-9 7 2 11-9-6-10 5 2-11-7-8 11-1Z" fill="#d5a4ae"/><path d="m286 89 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" fill="#a493c4"/>
  </svg>`;
}

export function primaryTeaser() {
  return `<a class="primary-teaser" href="#primary"><span class="teaser-letters" aria-hidden="true"><b>A</b><b>b</b><b>c</b></span><span><small>A LITTLE PLAY. A LOT OF LEARNING.</small><strong>Primary English playground</strong><span>Trace, colour, match, and discover your first English words.</span></span><span class="teaser-arrow" aria-hidden="true">↗</span></a>`;
}

export function renderPrimary(state) {
  const progress = primaryProgress(state);
  return `<div class="primary-page">
    <div class="primary-breadcrumb"><span>✿ &nbsp; LITTLE LEARNERS, BIG DISCOVERIES</span><a href="#path">All English lessons ↗</a></div>
    <section class="primary-hero"><div class="primary-hero-copy"><span class="primary-kicker">WELCOME TO YOUR ENGLISH PLAYGROUND</span><h1>Little hands.<br>Big <span>adventures.</span><svg viewBox="0 0 230 12" aria-hidden="true"><path d="M3 7Q110-2 227 5M30 11q90-8 170-3" fill="none" stroke="#e8b75a" stroke-width="3" stroke-linecap="round"/></svg></h1><p>Let’s draw a letter, splash some colour,<br class="desktop-break"> and learn something wonderful.</p><button class="primary-button" data-primary="start">Let’s play & learn <span>→</span></button><div class="primary-hero-note"><span>✦</span> Small activities. Happy discoveries. Your own pace.</div></div>${mascot()}<span class="mascot-caption">Meet Pip, your learning buddy!</span></section>
    <div class="primary-journey"><span class="journey-label">Our little learning recipe</span><span><i>1</i> Listen</span><b>···</b><span><i>2</i> Try it</span><b>···</b><span><i>3</i> Play</span><b>···</b><span><i>4</i> Celebrate!</span><span class="primary-stars" aria-label="${progress.completed.length} activity stars"><span aria-hidden="true">⭐</span> <strong data-star-count>${progress.completed.length}</strong> stars collected</span></div>
    <div class="primary-section-heading"><div><span class="primary-kicker">LEARNING THROUGH DOING</span><h2>What shall we play today?</h2></div><span>Every little try is a big step. <span aria-hidden="true">♡</span></span></div>
    <div class="primary-activity-grid" role="group" aria-label="Choose an activity">${ACTIVITIES.map((activity,i)=>`<button class="primary-activity ${activity.color} ${i===0?'selected':''}" data-primary="activity" data-mode="${activity.id}" aria-pressed="${i===0}"><span class="activity-top"><span class="activity-emoji" aria-hidden="true">${activity.icon}</span><span class="activity-arrow" aria-hidden="true">↗</span></span><small>${activity.tag}</small><h3>${activity.name}</h3><p>${activity.text}</p><span class="activity-time">${i<2?'3–5':'2–3'} min · ${i<2?'Create':'Play'}</span></button>`).join('')}</div>
    <section class="primary-workspace" id="primary-workspace" aria-label="Your activity"><div data-workspace></div></section>
    <section class="primary-alphabet"><div class="primary-section-heading"><div><span class="primary-kicker">26 LITTLE BEGINNINGS</span><h2>Say hello to the alphabet</h2></div><span>Pick a letter. Make it yours.</span></div><div class="alphabet-tiles" role="group" aria-label="Choose a letter">${ALPHABET.map((item,i)=>`<button class="alphabet-tile tile-${i%5}" data-primary="letter" data-letter="${item.letter}" aria-label="Practise ${item.letter} for ${item.word}" aria-pressed="${item.letter===progress.lastLetter}"><span>${item.letter}<small>${item.letter.toLowerCase()}</small></span><span class="alphabet-emoji" aria-hidden="true">${item.emoji}</span><small>${item.word}</small><span class="letter-star" data-letter-star="${item.letter}" ${progress.completed.some(key=>key.split('-')[1]===item.letter)?'':'hidden'} aria-label="Practised">★</span></button>`).join('')}</div></section>
    <div class="primary-grownup"><span aria-hidden="true">🌱</span><div><h3>A little help from a grown-up</h3><p>Say the letter together. Draw it in the air. Try it on screen or paper. Finish with a high-five! Five happy minutes is a lovely start.</p><details><summary>About this learning space</summary><p>Children learn here by listening, making, and playing. Stars celebrate practice, not a handwriting grade. Audio uses your browser’s English voice when available. Stars save on this browser; drawings last while this activity page is open. Use Profile → Export to back up your progress.</p></details></div><span class="grownup-doodle" aria-hidden="true">a b c</span></div>
    <div class="primary-print-sheet"></div>
  </div>`;
}

export function bindPrimary(root, {state,save,awardActivity,speak}) {
  const progress = primaryProgress(state);
  state.practice.primary = progress;
  const view = {mode:'trace',letter:progress.lastLetter,case:'upper',colour:COLOURS[0][1],number:1,answered:false};
  const drawings = new Map();
  let disposeCanvas = () => {}, animation = 0;
  const workspace = root.querySelector('[data-workspace]');
  const current = () => ALPHABET[alphabetIndex(view.letter)];
  const key = () => view.mode==='count' ? `count-${view.number}` : `${view.mode}-${view.letter}${view.mode==='trace'?`-${view.case}`:''}`;
  const drawingKey = () => `${view.mode}-${view.letter}${view.mode==='trace'?`-${view.case}`:''}`;
  const drawing = () => {if(!drawings.has(drawingKey()))drawings.set(drawingKey(),{strokes:[],paper:false,fill:null,history:[]});return drawings.get(drawingKey());};
  const status = message => {const node = workspace.querySelector('[data-feedback]');if(node)node.textContent=message;};
  function storeProgress(){progress.lastLetter=view.letter;save();}
  function celebrate() {
    if(!progress.completed.includes(key())) {
      progress.completed.push(key());
      awardActivity(`primary-${key()}`,10,{title:`Primary English: ${view.mode==='count'?`count to ${view.number}`:`${view.mode} ${view.letter}`}`,minutes:3,skill:view.mode==='trace'?'writing':'vocabulary'});
      save();
    }
    root.querySelector('[data-star-count]').textContent=progress.completed.length;
    root.querySelector('.primary-stars').setAttribute('aria-label',`${progress.completed.length} activity stars`);
    const letterStar=root.querySelector(`[data-letter-star="${view.letter}"]`);
    if(letterStar&&view.mode!=='count')letterStar.hidden=false;
    status('⭐ You did it! A little practice, a lovely new discovery.');
    const finish=workspace.querySelector('[data-primary="finish"]');
    if(finish){finish.textContent='★ Practice saved';finish.disabled=true;}
  }
  function navButtons(){return `<div class="letter-nav"><button data-primary="previous" aria-label="Previous ${view.mode==='count'?'number':'letter'}">←</button><span>${view.mode==='count'?`${view.number} / 10`:`${view.letter} ${view.letter.toLowerCase()} <small> / 26 letters</small>`}</span><button data-primary="next" aria-label="Next ${view.mode==='count'?'number':'letter'}">→</button></div>`;}
  function palette(){return `<div class="primary-palette" role="group" aria-label="Choose a crayon">${COLOURS.map(([name,colour])=>`<button class="crayon" style="--crayon:${colour}" data-primary="colour" data-colour="${colour}" aria-label="${name} crayon" aria-pressed="${view.colour===colour}"><span></span><small>${name}</small></button>`).join('')}</div>`;}
  function renderWorkspace(focus=false) {
    disposeCanvas();cancelAnimationFrame(animation);
    const item=current(), activity=ACTIVITIES.find(a=>a.id===view.mode);
    const isDrawing=['trace','colour'].includes(view.mode);
    workspace.innerHTML=`<div class="workspace-header"><div><span class="primary-kicker">${activity.icon} &nbsp; ${isDrawing?'YOUR LITTLE CREATIVE CORNER':'READY, SET, DISCOVER!'}</span><h2 tabindex="-1">${activity.name}</h2></div>${navButtons()}</div>
      ${isDrawing?`<div class="primary-studio"><div class="drawing-side"><div class="canvas-toolbar">${view.mode==='trace'?`<div class="letter-case" role="group" aria-label="Letter case"><button data-primary="case" data-case="upper" aria-pressed="${view.case==='upper'}">ABC <span>Uppercase</span></button><button data-primary="case" data-case="lower" aria-pressed="${view.case==='lower'}">abc <span>Lowercase</span></button></div>`:'<span>Pick a crayon. Make a colourful letter!</span>'}<button class="primary-text-button" data-primary="hear">♫ Hear it</button></div><canvas class="letter-canvas" width="800" height="600" aria-label="${view.mode==='trace'?`Trace ${view.case==='upper'?item.letter:item.letter.toLowerCase()} along the numbered dotted lines`:`Colour ${item.letter} and ${item.letter.toLowerCase()} with your finger or mouse`}" role="img">Use the printable worksheet to practise this letter on paper.</canvas><div class="canvas-bottom"><span>${view.mode==='trace'?'Start at 1. Follow the dotted lines.':'Colour inside the letters with your finger or mouse.'}</span><div><button class="primary-text-button" data-primary="undo">↶ Undo</button><button class="primary-text-button" data-primary="clear">↺ Clear</button></div></div>${palette()}</div><aside class="letter-coach"><span class="coach-word-picture" aria-hidden="true">${item.emoji}</span><p class="coach-letter"><strong>${item.letter}<span>${item.letter.toLowerCase()}</span></strong> ${item.soundPosition==='end'?'is in':'is for'} <b>${item.word}</b></p><div class="coach-audio-controls" role="group" aria-label="Listen to the letter and sound"><button class="primary-text-button" data-primary="hear-name" title="Hear letter name">♫ Letter name</button><button class="primary-text-button" data-primary="hear-sound" title="Hear letter sound">♫ Sound (${item.sound})</button><button class="primary-text-button" data-primary="hear-word" title="Hear example word">♫ Word</button></div>${view.mode==='trace'?`<ol class="stroke-instructions">${item[view.case].instructions.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ol><button class="primary-outline-button" data-primary="watch">▷ Show me how</button><label class="paper-practice"><input type="checkbox" data-paper ${drawing().paper?'checked':''}> I practised this letter on paper.</label>`:`<p class="colour-prompt">Can you say “${item.word}” while you colour? Use your favourite colours!</p><button class="primary-outline-button" data-primary="fill">✦ Fill with my colour</button>`}<button class="primary-text-button worksheet-button" data-primary="print">↓ Print a practice sheet</button></aside></div><div class="workspace-footer"><p data-feedback role="status">${progress.completed.includes(key())?'You have already earned this star. Play again whenever you like!':'Take your time. Every little try helps you learn.'}</p><button class="primary-button" data-primary="finish" disabled>My little masterpiece <span>★</span></button></div>`:gameMarkup()}`;
    root.querySelectorAll('[data-mode]').forEach(button=>{button.classList.toggle('selected',button.dataset.mode===view.mode);button.setAttribute('aria-pressed',button.dataset.mode===view.mode);});
    root.querySelectorAll('[data-primary="letter"]').forEach(button=>button.setAttribute('aria-pressed',button.dataset.letter===view.letter));
    if(isDrawing)setupCanvas();
    if(focus)workspace.querySelector('h2').focus({preventScroll:true});
  }
  function gameMarkup() {
    const item=current();
    const answer=view.mode==='match'?view.letter:String(view.number);
    const options=view.mode==='match'?[view.letter,ALPHABET[(alphabetIndex(view.letter)+7)%26].letter,ALPHABET[(alphabetIndex(view.letter)+15)%26].letter]:[String(view.number),String(view.number===10?8:view.number+1),String(view.number===1?3:view.number-1)];
    // Rotate choices so the answer is not always in the same position.
    const offset=(view.mode==='match'?alphabetIndex(view.letter):view.number)%3;
    const ordered=options.slice(offset).concat(options.slice(0,offset));
    const matchPrompt = view.answered
      ? `⭐ ${item.letter} ${item.soundPosition==='end'?'is in':'starts'} “${item.word}”`
      : (item.soundPosition==='end' ? 'Which letter makes the ending sound?' : 'Which letter makes the first sound?');
    return `<div class="primary-game"><span class="game-badge">${view.mode==='match'?'LETTER DETECTIVES':'COUNTING CLUB'}</span><h3>${view.mode==='match'?matchPrompt:'How many strawberries can you see?'}</h3><div class="game-picture" aria-label="${view.mode==='match'?(view.answered?item.word:'Mystery picture'):`${view.number} strawberries`}">${view.mode==='match'?`<span aria-hidden="true">${item.emoji}</span>`:`<span class="counting-fruit" aria-hidden="true">${Array.from({length:view.number},()=>'<span>🍓</span>').join('')}</span>`}</div>${view.mode==='match'?`<div class="game-audio-controls"><button class="primary-text-button" data-primary="hear">♫ ${view.answered?'Hear again':'Hear the mystery word'}</button><button class="primary-text-button" data-primary="hear-sound">♫ Hear the sound</button></div>`:`<button class="primary-text-button" data-primary="hear">♫ ${view.answered?'Hear the number':'Hear the question'}</button>`}<div class="game-choices" role="group" aria-label="Choose your answer">${ordered.map(option=>`<button data-primary="answer" data-answer="${option}" data-correct="${option===answer}">${option}${view.mode==='match'?`<small>${option.toLowerCase()}</small>`:''}</button>`).join('')}</div><p data-feedback role="status">${view.mode==='match'?(view.answered?`⭐ Yes! ${item.letter} ${item.soundPosition==='end'?'is in':'is for'} ${item.word}. Lovely detective work!`:'Listen to the sound and look at the picture. Have a go!'):'Look carefully. Have a go!'}</p><button class="primary-button" data-primary="next-game" ${view.answered?'':'hidden'}>Let’s play another <span>→</span></button></div>`;
  }
  function setupCanvas() {
    const canvas=workspace.querySelector('canvas'),ctx=canvas.getContext('2d');
    const data=drawing(),guide=current()[view.case].strokes;
    let active=null,pointer=null;
    const paint=document.createElement('canvas');paint.width=800;paint.height=600;
    const pctx=paint.getContext('2d');
    function glyph(context,operation) {
      // Reuse the handwriting forms so a/g look the same in both activities.
      context.save();context.lineCap='round';context.lineJoin='round';
      context.lineWidth=operation==='strokeText'?49:44;
      if(operation==='fillText')context.strokeStyle=context.fillStyle;
      for(const [form,shift] of [['upper',-70],['lower',110]]) {
        context.save();context.translate(shift,18);context.scale(.88,.88);
        for(const points of current()[form].strokes)path(context,points);
        context.restore();
      }
      context.restore();
    }
    function path(context,points){if(!points.length)return;if(points.length===1){context.save();context.fillStyle=context.strokeStyle;context.beginPath();context.arc(...points[0],context.lineWidth/2,0,Math.PI*2);context.fill();context.restore();return;}context.beginPath();context.moveTo(...points[0]);for(const p of points.slice(1))context.lineTo(...p);context.stroke();}
    const mask=document.createElement('canvas');mask.width=800;mask.height=600;
    const maskContext=mask.getContext('2d');maskContext.setTransform(2,0,0,2,0,0);maskContext.fillStyle='#000';glyph(maskContext,'fillText');
    function redraw(animated=null) {
      ctx.setTransform(2,0,0,2,0,0);ctx.lineCap='butt';ctx.lineJoin='miter';ctx.setLineDash([]);ctx.clearRect(0,0,400,300);ctx.fillStyle='#fffdf7';ctx.fillRect(0,0,400,300);
      if(view.mode==='trace') {
        ctx.lineWidth=1;[60,120,240,285].forEach(y=>{ctx.beginPath();ctx.setLineDash(y===120?[5,5]:[]);ctx.strokeStyle=y===240?'#d9c9e4':'#eee4dd';ctx.moveTo(20,y);ctx.lineTo(380,y);ctx.stroke();});
        ctx.setLineDash([]);ctx.lineCap='round';ctx.lineJoin='round';
        for(const points of guide){ctx.lineWidth=20;ctx.strokeStyle='#f0eaf4';path(ctx,points);ctx.lineWidth=2;ctx.strokeStyle='#b2a3bf';ctx.setLineDash([2,7]);path(ctx,points);ctx.setLineDash([]);}
        for(const stroke of data.strokes){ctx.strokeStyle=stroke.colour;ctx.lineWidth=9;path(ctx,stroke.points);}
        if(animated){ctx.strokeStyle='#8362b6';ctx.lineWidth=9;path(ctx,animated);}
        startMarkers(guide).forEach(({x,y,start},i)=>{if(x!==start[0]||y!==start[1]){ctx.strokeStyle='#b2a3bf';ctx.lineWidth=1;path(ctx,[[x,y],start]);}ctx.fillStyle='#75608b';ctx.beginPath();ctx.arc(x,y,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='white';ctx.font='bold 11px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(String(i+1),x,y);});
      } else {
        ctx.strokeStyle='#b6a6c7';glyph(ctx,'strokeText');ctx.fillStyle='#f0eaf6';glyph(ctx,'fillText');
        pctx.setTransform(2,0,0,2,0,0);pctx.clearRect(0,0,400,300);pctx.globalCompositeOperation='source-over';
        if(data.fill){pctx.fillStyle=data.fill;pctx.fillRect(0,0,400,300);}
        pctx.lineWidth=22;pctx.lineCap='round';pctx.lineJoin='round';
        for(const stroke of data.strokes){pctx.strokeStyle=stroke.colour;path(pctx,stroke.points);}
        pctx.globalCompositeOperation='destination-in';pctx.drawImage(mask,0,0,400,300);pctx.globalCompositeOperation='source-over';
        ctx.drawImage(paint,0,0,400,300);
      }
    }
    const position=e=>{const rect=canvas.getBoundingClientRect();return [(e.clientX-rect.left)*400/rect.width,(e.clientY-rect.top)*300/rect.height];};
    function updateFinish(){
      const drawn=data.strokes.map(s=>s.points);
      const traced=view.mode==='trace'&&traceCoverage(guide,drawn)>=.8&&guide.every(stroke=>traceCoverage([stroke],drawn)>=.65);
      const painted=view.mode==='colour'&&(data.fill||hasColouredPixels());
      workspace.querySelector('[data-primary="finish"]').disabled=!(view.mode==='trace'?(traced||data.paper):painted);
    }
    function hasColouredPixels(){const pixels=pctx.getImageData(0,0,800,600).data;let count=0;for(let i=3;i<pixels.length;i+=16)if(pixels[i]>50)count++;return count>500;}
    function down(e){if(pointer!==null||(e.pointerType==='mouse'&&e.button!==0))return;cancelAnimationFrame(animation);pointer=e.pointerId;canvas.setPointerCapture(pointer);active={colour:view.colour,points:[position(e)]};data.history.push({type:'stroke'});data.strokes.push(active);redraw();}
    function move(e){if(e.pointerId!==pointer||!active)return;active.points.push(position(e));redraw();}
    function up(e){if(e.pointerId!==pointer)return;active=null;pointer=null;redraw();updateFinish();if(workspace.querySelector('[data-primary="finish"]').disabled)status(view.mode==='trace'?'Lovely start! Follow each dotted line, or try the letter on paper.':'Keep colouring inside the letters. Your masterpiece is growing!');else status('Lovely work! Save your practice to collect a star.');}
    canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);canvas.addEventListener('lostpointercapture',up);
    const paper=workspace.querySelector('[data-paper]');
    const changePaper=()=>{data.paper=paper.checked;updateFinish();};paper?.addEventListener('change',changePaper);
    function canvasAction(e){
      const action=e.target.closest('[data-primary]')?.dataset.primary;
      if(action==='clear'){data.strokes=[];data.fill=null;data.history=[];cancelAnimationFrame(animation);redraw();updateFinish();status('A fresh page. Let’s try again!');}
      if(action==='undo'){const last=data.history.pop();if(last?.type==='stroke')data.strokes.pop();if(last?.type==='fill')data.fill=last.previous;redraw();updateFinish();}
      if(action==='fill'){data.history.push({type:'fill',previous:data.fill});data.fill=view.colour;redraw();updateFinish();}
      if(action==='watch'){
        cancelAnimationFrame(animation);
        speak(`Watch how to write ${view.case==='upper'?'capital':'lowercase'} ${item.letter}. ${item[view.case].instructions.join(' ')}`);
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){redraw();status('Follow the numbered starts and the step-by-step instructions beside the letter.');return;}
        const segments=guide.map(points=>{const samples=[points[0]];for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],n=Math.max(1,Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/3));for(let j=1;j<=n;j++)samples.push([a[0]+(b[0]-a[0])*j/n,a[1]+(b[1]-a[1])*j/n]);}return samples;});
        let stroke=0,start=performance.now();status('Watch Pip’s pencil. Then try it yourself!');
        const frame=time=>{const end=Math.floor((time-start)/18)+1;redraw(segments[stroke].slice(0,end));if(end>=segments[stroke].length+18){stroke++;start=time;}if(stroke<segments.length)animation=requestAnimationFrame(frame);else{redraw();status('Your turn! Start at number 1.');}};animation=requestAnimationFrame(frame);
      }
    }
    workspace.addEventListener('click',canvasAction);
    redraw();updateFinish();
    disposeCanvas=()=>{cancelAnimationFrame(animation);workspace.removeEventListener('click',canvasAction);paper?.removeEventListener('change',changePaper);canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up);canvas.removeEventListener('lostpointercapture',up);};
  }
  function printSheet() {
    const item=current(),form=item[view.case],markers=startMarkers(form.strokes);
    root.querySelector('.primary-print-sheet').innerHTML=`<h1>My little alphabet adventure</h1><p>Name: _______________________ &nbsp; Date: _______________</p><h2>${item.letter} ${item.letter.toLowerCase()} ${item.soundPosition==='end'?'is in':'is for'} ${item.word}</h2><p>Say it. Trace it. Write it. Colour it!</p><svg viewBox="0 0 400 300" width="260" height="195">${form.strokes.map((points,i)=>`<polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#aaa" stroke-width="5" stroke-dasharray="3 5"/><line x1="${points[0][0]}" y1="${points[0][1]}" x2="${markers[i].x}" y2="${markers[i].y}" stroke="#bbb"/><circle cx="${markers[i].x}" cy="${markers[i].y}" r="10" fill="white" stroke="#777"/><text x="${markers[i].x}" y="${markers[i].y+4}" text-anchor="middle" font-size="12">${i+1}</text>`).join('')}</svg><ol>${form.instructions.map(text=>`<li>${escapeHTML(text)}</li>`).join('')}</ol><div class="print-trace-row">${Array.from({length:5},()=>`<svg viewBox="0 0 400 300" width="110" height="83">${form.strokes.map(points=>`<polyline points="${points.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#aaa" stroke-width="5" stroke-dasharray="3 5" stroke-linecap="round"/>`).join('')}</svg>`).join('')}</div><div class="print-write-row"></div><div class="print-colour-letter"><svg viewBox="0 0 400 300" width="300" height="225">${[['upper',-70],['lower',110]].map(([form,shift])=>`<g transform="translate(${shift},18) scale(.88)" fill="none" stroke-linecap="round" stroke-linejoin="round">${[49,44].map(width=>`<g stroke="${width===49?'#000':'#fff'}" stroke-width="${width}">${item[form].strokes.map(points=>`<polyline points="${points.map(p=>p.join(',')).join(' ')}"/>`).join('')}</g>`).join('')}</g>`).join('')}</svg></div><p>Draw the picture beside your letters. Give yourself a star! ☆</p><small>Fluently · Learn through doing · fluently-english</small>`;
    window.print();
  }
  function handleClick(e) {
    const button=e.target.closest('[data-primary]');if(!button||!root.contains(button))return;
    const action=button.dataset.primary;
    if(action==='start'||action==='activity'){view.mode=button.dataset.mode||'trace';view.answered=false;renderWorkspace(true);root.querySelector('#primary-workspace').scrollIntoView({behavior:'smooth',block:'start'});}
    if(action==='letter'){view.letter=button.dataset.letter;if(view.mode==='count')view.mode='trace';view.answered=false;storeProgress();renderWorkspace(true);root.querySelector('#primary-workspace').scrollIntoView({behavior:'smooth',block:'start'});}
    if(action==='case'){view.case=button.dataset.case;renderWorkspace();workspace.querySelector(`[data-case="${view.case}"]`)?.focus();}
    if(action==='colour'){view.colour=button.dataset.colour;workspace.querySelectorAll('[data-colour]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.colour===view.colour));}
    if(action==='previous'||action==='next'||action==='next-game'){
      const delta=action==='previous'?-1:1;
      if(view.mode==='count')view.number=(view.number-1+delta+10)%10+1;
      else view.letter=ALPHABET[(alphabetIndex(view.letter)+delta+26)%26].letter;
      view.answered=false;storeProgress();renderWorkspace(true);
    }
    if(action==='hear-name'){const item=current();speak(`Letter ${item.letter}.`);}
    if(action==='hear-sound'){const item=current();speak(`The sound is ${item.soundCue || item.letter}.`);}
    if(action==='hear-word'){const item=current();speak(item.soundPosition==='end'?`${item.word}. ${item.letter} makes the ks sound in ${item.word}.`:`${item.word}. ${item.letter} is for ${item.word}.`);}
    if(action==='hear'){
      const item=current();
      if(view.mode==='count'){
        speak(view.answered?`${NUMBER_WORDS[view.number]}. ${NUMBER_WORDS[view.number]} ${view.number===1?'strawberry':'strawberries'}.`:'How many strawberries can you see? Count them, then choose a number.');
      } else if(view.mode==='match'){
        if(view.answered){
          speak(`${item.letter}. ${item.letter} ${item.soundPosition==='end'?'is in':'is for'} ${item.word}. ${item.word}.`);
        } else {
          speak(item.soundPosition==='end'?`Listen carefully: ${item.word}. Which letter makes the ending sound in ${item.word}?`:`Listen carefully: ${item.word}. Which letter makes the first sound in ${item.word}?`);
        }
      } else {
        speak(`${item.letter}. Sound: ${item.soundCue || item.letter}. ${item.word}.`);
      }
    }
    if(action==='finish'&&!button.disabled)celebrate();
    if(action==='print')printSheet();
    if(action==='answer'&&!view.answered){
      const item=current();
      if(button.dataset.correct==='true'){
        view.answered=true;button.classList.add('correct');button.setAttribute('aria-label',`${button.dataset.answer}, correct`);celebrate();
        workspace.querySelectorAll('[data-primary="answer"]').forEach(b=>b.disabled=true);
        status(view.mode==='count'?`⭐ Yes! ${NUMBER_WORDS[view.number]} ${view.number===1?'strawberry':'strawberries'}. Count them out loud!`:`⭐ Yes! ${view.letter} ${item.soundPosition==='end'?'is in':'is for'} ${item.word}. Lovely detective work!`);
        if(view.mode==='match')workspace.querySelector('h3').textContent=`⭐ ${view.letter} ${item.soundPosition==='end'?'is in':'starts'} “${item.word}”`;
        workspace.querySelector('[data-primary="next-game"]').hidden=false;
        if(view.mode==='count')workspace.querySelector('[data-primary="hear"]').textContent='♫ Hear the number';
        else workspace.querySelector('[data-primary="hear"]').textContent='♫ Hear again';
      }else{
        button.classList.add('try-again');button.disabled=true;
        status(view.mode==='match'?(item.soundPosition==='end'?`Have another go! Listen for the /ks/ sound in “${item.word}”.`:`Have another go! Listen for the first sound in “${item.word}”. Find ${view.letter}.`):'Let’s count slowly, pointing to each strawberry. Try another number.');
      }
    }
  }
  root.addEventListener('click',handleClick);
  renderWorkspace();
  return ()=>{disposeCanvas();cancelAnimationFrame(animation);root.removeEventListener('click',handleClick);};
}
