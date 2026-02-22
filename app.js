// ═══════════════════════════════════════
// LESSONS — 5 rotating quotes each
// ═══════════════════════════════════════
const LESSONS = [
  {
    latin: "DISCRETIO", title: "The Dichotomy of Control",
    quotes: [
      { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", source: "Meditations, Book VI" },
      { text: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.", source: "Meditations, Book II" },
      { text: "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.", source: "Meditations, Book III" },
      { text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.", source: "Meditations, Book VIII" },
      { text: "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions — not outside.", source: "Meditations, Book IX" },
    ],
    teaching: "Marcus drew a hard line between what is \u2018up to us\u2019 \u2014 our judgments, intentions, effort, and character \u2014 and what is not: other people\u2019s opinions, the economy, the outcome of events already set in motion. This is the foundational Stoic insight. Most human suffering comes from confusing the two categories: agonizing over things we cannot change, or neglecting things we can.\n\nThe practice is not passive resignation. It is radical focus. Pour your entire being into what you can influence \u2014 the quality of your thoughts, the integrity of your actions, your response to what happens \u2014 and release your grip on everything else. This doesn\u2019t mean you stop caring about outcomes. It means you stop letting outcomes own you. The paradox is that people who master this distinction often achieve better results, because their energy is no longer wasted on anxiety about things beyond their reach.",
    reflection: "What am I trying to control today that is not mine to control? Where am I neglecting what actually is?",
  },
  {
    latin: "MEMENTO MORI", title: "The Remembrance of Death",
    quotes: [
      { text: "Think of yourself as dead. You have lived your life. Now, take what\u2019s left and live it properly.", source: "Meditations, Book VII" },
      { text: "It is not death that a man should fear, but he should fear never beginning to live.", source: "Meditations, Book XII" },
      { text: "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.", source: "Meditations, Book IV" },
      { text: "How many after being celebrated by fame have been given up to oblivion; and how many who have celebrated the fame of others have long been dead.", source: "Meditations, Book VII" },
      { text: "Alexander the Great and his mule driver both died and the same thing happened to both.", source: "Meditations, Book VI" },
    ],
    teaching: "Marcus returned to mortality more than any other theme \u2014 not from despair, but as the ultimate clarifying lens. He catalogued the deaths of emperors, philosophers, and physicians who once seemed permanent. Hadrian, Augustus, Alexander \u2014 all dust. He wasn\u2019t being morbid. He was using death as a tool of attention.\n\nWhen you remember that your time is genuinely finite, trivialities lose their grip. The argument that felt urgent dissolves. The work you\u2019ve been postponing becomes the only work that matters. Memento Mori strips away every form of procrastination, vanity, and self-deception. It asks the simplest and most devastating question: knowing that this ends, what will you do with today? Marcus practiced this not once, but daily \u2014 and found that rather than producing dread, it produced a strange and powerful gratitude for each ordinary morning.",
    reflection: "If this were my last ordinary morning, would I spend it the way I\u2019m about to? What would I stop doing? What would I finally begin?",
  },
  {
    latin: "AMOR FATI", title: "The Love of Fate",
    quotes: [
      { text: "A blazing fire makes flame and brightness out of everything that is thrown into it.", source: "Meditations, Book X" },
      { text: "Accept the things to which fate binds you, and love the people with whom fate brings you together, and do so with all your heart.", source: "Meditations, Book VI" },
      { text: "The impediment to action advances action. What stands in the way becomes the way.", source: "Meditations, Book V" },
      { text: "Nothing happens to any man that he is not formed by nature to bear.", source: "Meditations, Book V" },
      { text: "The art of living is more like wrestling than dancing, in so far as it stands ready against the accidental and the unforeseen, and is not apt to fall.", source: "Meditations, Book VII" },
    ],
    teaching: "Amor Fati goes beyond acceptance. Acceptance says: I can tolerate what happened. Amor Fati says: I wouldn\u2019t have it any other way. Marcus saw every obstacle, every setback, every disappointment as raw material \u2014 fuel for the fire of character. The betrayal that taught you discernment. The failure that revealed a weakness you needed to find. The loss that reorganized your priorities.\n\nThis is not toxic positivity. Marcus didn\u2019t pretend that plague, war, and treachery were pleasant. He insisted that they were useful. The Stoic doesn\u2019t wish for an easy life. The Stoic wishes to be the kind of person for whom difficulty is not an interruption but an invitation. The obstacle is not in the way \u2014 it is the way. Every challenge you face is precisely the training you need for the person you are becoming.",
    reflection: "What difficulty am I currently resisting that might be trying to teach me something? What would it look like to use this, rather than merely endure it?",
  },
  {
    latin: "SECUNDUM NATURAM", title: "Living According to Nature",
    quotes: [
      { text: "Never regard something as doing you good if it makes you betray a trust, or lose your sense of shame, or makes you show hatred, suspicion, ill will, or hypocrisy.", source: "Meditations, Book VI" },
      { text: "Waste no more time arguing about what a good man should be. Be one.", source: "Meditations, Book X" },
      { text: "When you arise in the morning, think of what a precious privilege it is to be alive \u2014 to breathe, to think, to enjoy, to love.", source: "Meditations, Book V" },
      { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", source: "Meditations, Book VII" },
      { text: "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.", source: "Meditations, Book IV" },
    ],
    teaching: "For the Stoics, \u2018living according to nature\u2019 didn\u2019t mean retreating to the woods. It meant living according to your rational nature \u2014 the capacity for reason, virtue, and social connection that defines you as a human being. Marcus believed every person has a unique role in the larger organism of humanity, just as a hand or foot has a role in the body. To act against your nature is to act against the whole.\n\nThis means: use your reason honestly, even when the truth is uncomfortable. Fulfill your social duties, even when they\u2019re thankless. Don\u2019t pursue wealth, status, or pleasure at the cost of your integrity. The goal isn\u2019t to suppress desire \u2014 it\u2019s to align your desires with what is genuinely good, true, and worthy of a rational being. When your external life matches your internal values, a deep calm settles in \u2014 not because nothing is wrong, but because you are no longer at war with yourself.",
    reflection: "Where in my life am I acting against my own nature \u2014 doing things that require me to be someone I\u2019m not? What would alignment look like?",
  },
  {
    latin: "ARCEM INTERIOREM", title: "The Inner Citadel",
    quotes: [
      { text: "Nowhere can man find a quieter or more untroubled retreat than in his own soul.", source: "Meditations, Book IV" },
      { text: "The happiness of your life depends upon the quality of your thoughts.", source: "Meditations, Book IV" },
      { text: "Choose not to be harmed \u2014 and you won\u2019t feel harmed. Don\u2019t feel harmed \u2014 and you haven\u2019t been.", source: "Meditations, Book IV" },
      { text: "It is in your power to withdraw yourself whenever you desire. Perfect tranquility within consists in the good ordering of the mind, the realm of your own.", source: "Meditations, Book IV" },
      { text: "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts.", source: "Meditations, Book V" },
    ],
    teaching: "Marcus described an interior fortress \u2014 a place in the mind that external chaos cannot breach. This was not escapism. Marcus wrote these words in a military tent on the Danube frontier, surrounded by war. The inner citadel is the practice of choosing which impressions to assent to.\n\nWhen someone insults you, the insult is external \u2014 your judgment about it is internal. When circumstances shift, the shift is external \u2014 your interpretation is internal. The citadel is not built by suppressing emotion. It is built by examining every impression before you accept it. \u2018Is this thing that disturbs me within my control? Is my reaction proportionate? Is there another way to see this?\u2019 Over time, this practice creates genuine equanimity \u2014 not numbness, but a deep steadiness that persists regardless of what happens around you. You don\u2019t become unfeeling. You become unshakeable.",
    reflection: "What external event has recently breached my inner walls? What impression did I accept without examining it?",
  },
  {
    latin: "HOC MOMENTUM", title: "The Present Moment",
    quotes: [
      { text: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.", source: "Meditations, Book VII" },
      { text: "Confine yourself to the present.", source: "Meditations, Book VII" },
      { text: "Give yourself a gift: the present moment.", source: "Meditations, Book VIII" },
      { text: "Each day provides its own gifts.", source: "Meditations, Book V" },
      { text: "Do every act of your life as though it were the very last act of your life.", source: "Meditations, Book II" },
    ],
    teaching: "Marcus observed that almost all human suffering is self-inflicted through time travel: we replay past regrets and rehearse future anxieties, while the only moment we can actually act in \u2014 the present \u2014 slips by unattended. He put it starkly: you can endure anything for a single moment. And life is only ever a single moment.\n\nThe past exists only as memory, which is a story you tell yourself. The future exists only as imagination, which is another story. The present is the only thing that is real, and it is always manageable. The practice is not mindfulness as a buzzword \u2014 it\u2019s a discipline of attention. When you find yourself spiraling about what might happen, Marcus would say: come back. What is in front of you right now? Do that one thing well. Then do the next. The person who masters the present moment has, in a very real sense, mastered time itself.",
    reflection: "Am I here right now, or am I somewhere else in time? What is the one thing that deserves my full attention in this moment?",
  },
  {
    latin: "OFFICIUM", title: "Duty and Service",
    quotes: [
      { text: "What injures the hive injures the bee.", source: "Meditations, Book VI" },
      { text: "Adapt yourself to the life you have been given; and truly love the people with whom destiny has surrounded you.", source: "Meditations, Book VI" },
      { text: "The best revenge is not to be like your enemy.", source: "Meditations, Book VI" },
      { text: "Men exist for the sake of one another. Teach them then or bear with them.", source: "Meditations, Book VIII" },
      { text: "What is not good for the swarm is not good for the bee.", source: "Meditations, Book VI" },
    ],
    teaching: "Stoicism is not a philosophy of detachment \u2014 it is radically social. Marcus saw himself not as a man who happened to be emperor, but as a servant of Rome. Every role you occupy \u2014 parent, partner, colleague, friend, citizen \u2014 carries duties that are not optional additions to your life but the very substance of it.\n\nMarcus argued that retreating from your responsibilities to protect your inner peace is a contradiction: the Stoic virtues of justice, courage, and wisdom only have meaning in relation to other people. When you feel the pull to withdraw, that is precisely when you are most needed. Service is not self-sacrifice. It is self-expression. You become yourself most fully not in isolation, but in how you show up for the people and communities that depend on you. The question is never whether you have duties \u2014 it\u2019s whether you will meet them with excellence or resentment.",
    reflection: "Which of my roles am I neglecting? Where is someone depending on me that I haven\u2019t fully shown up for?",
  },
  {
    latin: "EXAMEN", title: "Self-Examination",
    quotes: [
      { text: "The soul becomes dyed with the color of its thoughts.", source: "Meditations, Book V" },
      { text: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.", source: "Meditations, Book VII" },
      { text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.", source: "Meditations, Book IV" },
      { text: "How much more grievous are the consequences of anger than the causes of it.", source: "Meditations, Book XI" },
      { text: "Be tolerant with others and strict with yourself.", source: "Meditations, Book V" },
    ],
    teaching: "The Meditations themselves are the ultimate act of self-examination \u2014 a Roman emperor holding a mirror to his own mind, night after night, cataloguing his failures and delusions with ruthless honesty. Marcus didn\u2019t write to perform wisdom. He wrote to practice it. He challenged his own anger, his vanity, his impatience. He asked himself whether he was living up to the principles he claimed to hold.\n\nThis practice \u2014 the daily audit of the soul \u2014 is what separates philosophy as an intellectual exercise from philosophy as a way of life. The unexamined life, Socrates said, is not worth living. Marcus would add: the examined life is the only one that improves. Without honest self-assessment, you repeat the same errors while believing you are growing. The journal doesn\u2019t lie, even when you do. The practice is simple but demanding: at the end of each day, ask what you did well, where you fell short, and what you would do differently. Not to punish yourself \u2014 but to see clearly.",
    reflection: "Where yesterday did I fall short of the person I intend to be? Not to punish myself \u2014 but to see clearly, and to do better today.",
  },
];

const MILESTONES = [
  { days: 7, label: "One Week", text: "Marcus Aurelius began his Meditations while camped at Carnuntum on the Danube frontier during the Marcomannic Wars. He too started one day at a time." },
  { days: 14, label: "Two Weeks", text: "The Stoics believed it takes roughly this long to begin replacing an old habit. The grooves of your morning practice are deepening." },
  { days: 21, label: "Three Weeks", text: "Epictetus, Marcus\u2019s greatest influence, was born a slave. He taught that even in chains, the mind is free. You\u2019ve practiced freedom for 21 days." },
  { days: 30, label: "One Month", text: "Marcus wrote: \u2018Not to feel exasperated, or defeated, or despondent because your days aren\u2019t packed with wise or moral actions. But to get back up when you fail.\u2019 You have gotten back up for 30 days." },
  { days: 50, label: "Fifty Days", text: "The Meditations were composed over roughly the last decade of Marcus\u2019s life. Your practice is still young, but already more consistent than most lives allow." },
  { days: 66, label: "Sixty-Six Days", text: "Research suggests 66 days is the average time to form an automatic habit. This practice is now woven into who you are, not just what you do." },
  { days: 100, label: "One Hundred Days", text: "Marcus ruled for 19 years through plague, war, and betrayal. He never stopped writing. You now carry 100 mornings of examined life. The soul has taken its color." },
  { days: 180, label: "Half a Year", text: "Seneca wrote: \u2018It is not that we have a short time to live, but that we waste a great deal of it.\u2019 You have wasted none of these 180 mornings." },
  { days: 365, label: "One Year", text: "You have practiced longer than many ancient students spent at the Stoa. Marcus would recognize you as a fellow practitioner. The philosopher\u2019s work continues." },
];

function getNextMilestone(s) { for (const m of MILESTONES) { if (s < m.days) return m; } return null; }
function getExactMilestone(s) { return MILESTONES.find(m => m.days === s) || null; }

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const todayStr = () => new Date().toISOString().slice(0, 10);
function loadState() { try { return JSON.parse(localStorage.getItem('meditations_v3')) || null; } catch { return null; } }
function saveState(s) { localStorage.setItem('meditations_v3', JSON.stringify(s)); }

function shuffle8() {
  const a = [0,1,2,3,4,5,6,7];
  for (let i = 7; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function rqi() { return LESSONS.map(l => Math.floor(Math.random() * l.quotes.length)); }

function initState() {
  let s = loadState(); const t = todayStr();
  if (!s) { s = { date:t, ack:[], cur:0, streak:0, best:0, total:0, last:null, order:shuffle8(), qi:rqi(), sound:false }; saveState(s); return s; }
  if (s.date !== t) {
    const y = new Date(); y.setDate(y.getDate()-1); const ys = y.toISOString().slice(0,10);
    let streak = s.streak||0;
    if (s.last !== ys && s.last !== t) streak = 0;
    s = { ...s, date:t, ack:[], cur:0, streak, order:shuffle8(), qi:rqi() };
    saveState(s);
  }
  return s;
}

let state = initState();

// ═══════════════════════════════════════
// AMBIENT SOUND
// ═══════════════════════════════════════
let actx=null, playing=false, gn=null;
function initAudio() {
  if(actx) return;
  actx = new (window.AudioContext||window.webkitAudioContext)();
  gn = actx.createGain(); gn.gain.value=0; gn.connect(actx.destination);
  function tone(f,v){const o=actx.createOscillator(),g=actx.createGain();o.type='sine';o.frequency.value=f;g.gain.value=v;o.connect(g);g.connect(gn);o.start();const l=actx.createOscillator(),lg=actx.createGain();l.frequency.value=0.08+Math.random()*0.12;lg.gain.value=0.25;l.connect(lg);lg.connect(o.frequency);l.start();}
  tone(65,0.12);tone(98,0.07);tone(130.8,0.035);tone(164,0.02);
  const len=2*actx.sampleRate,buf=actx.createBuffer(1,len,actx.sampleRate),d=buf.getChannelData(0);
  let last=0;for(let i=0;i<len;i++){d[i]=(last+0.02*(Math.random()*2-1))/1.02;last=d[i];d[i]*=3.5;}
  const src=actx.createBufferSource();src.buffer=buf;src.loop=true;const ng=actx.createGain();ng.gain.value=0.035;src.connect(ng);ng.connect(gn);src.start();
}

function toggleSound() {
  if(!actx) initAudio();
  if(actx.state==='suspended') actx.resume();
  const t=actx.currentTime; gn.gain.cancelScheduledValues(t); gn.gain.setValueAtTime(gn.gain.value,t);
  if(!playing){gn.gain.linearRampToValueAtTime(1,t+2);playing=true;document.getElementById('soundToggle').classList.add('on');}
  else{gn.gain.linearRampToValueAtTime(0,t+1);playing=false;document.getElementById('soundToggle').classList.remove('on');}
  state.sound=playing; saveState(state);
}

// ═══════════════════════════════════════
// DOM HELPERS
// ═══════════════════════════════════════
const $=id=>document.getElementById(id);
const ROMAN=['I','II','III','IV','V','VI','VII','VIII'];

function getGreeting(){const h=new Date().getHours();if(h<5)return"The quiet hours";if(h<12)return"Good morning";if(h<17)return"Good afternoon";if(h<21)return"Good evening";return"Reflect on today";}
function getBeginLabel(){const h=new Date().getHours();if(h<12)return"Begin Today\u2019s Practice";if(h<17)return"Begin Your Practice";return"Begin Tonight\u2019s Reflection";}

// ═══════════════════════════════════════
// RENDER
// ═══════════════════════════════════════
function renderWelcome() {
  $('welcomeGreeting').textContent = getGreeting();
  $('beginBtn').textContent = state.ack.length === 8 ? "View Today\u2019s Completion" : getBeginLabel();
  $('todayDate').textContent = new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  if(state.streak>0){$('streakLine').textContent='Current streak';$('streakNum').textContent=state.streak+(state.streak===1?' day':' days');}
  else{$('streakLine').textContent='';$('streakNum').textContent='Begin your streak';}
  const next=getNextMilestone(state.streak);
  if(next&&state.streak>0){$('welcomeMilestone').textContent=(next.days-state.streak)+' days to '+next.label.toLowerCase();$('welcomeMilestone').style.display='';}
  else{$('welcomeMilestone').style.display='none';}
}

function buildDots(){$('progressDots').innerHTML='';for(let i=0;i<8;i++){const d=document.createElement('div');d.className='progress-dot';d.addEventListener('click',()=>goTo(i));$('progressDots').appendChild(d);}}

function updateDots(){const dots=$('progressDots').children;for(let i=0;i<8;i++){dots[i].className='progress-dot';if(state.ack.includes(i))dots[i].classList.add('completed');if(i===state.cur)dots[i].classList.add('active');}}

function renderLesson(pos) {
  const li=state.order[pos], L=LESSONS[li], Q=L.quotes[state.qi[li]], card=$('lessonCard');
  card.classList.remove('visible');
  setTimeout(()=>{
    $('cardNumber').textContent='LESSON '+ROMAN[pos]+' \u00b7 '+L.latin;
    $('cardTitle').textContent=L.title;
    $('cardQuote').textContent='\u201C'+Q.text+'\u201D';
    $('cardSource').textContent='\u2014 '+Q.source;
    $('cardTeaching').textContent=L.teaching;
    $('cardReflection').textContent=L.reflection;
    const acked=state.ack.includes(pos), btn=$('acknowledgeBtn');
    btn.className='acknowledge-btn'+(acked?' acknowledged':'');
    btn.querySelector('.check-icon').textContent=acked?'\u2713':'';
    $('topbarLabel').textContent=(pos+1)+' / 8';
    $('navCounter').textContent=state.ack.length+' of 8';
    $('prevBtn').disabled=pos===0;$('nextBtn').disabled=pos===7;
    updateDots();$('cardContainer').scrollTop=0;
    requestAnimationFrame(()=>card.classList.add('visible'));
  },150);
}

function goTo(pos){state.cur=pos;saveState(state);renderLesson(pos);}

// ═══════════════════════════════════════
// FOCUS PICKER + CARD
// ═══════════════════════════════════════
function showFocusPicker() {
  const c=$('focusOptions');c.innerHTML='';
  state.order.forEach(li=>{
    const L=LESSONS[li],opt=document.createElement('button');
    opt.className='focus-option';opt.textContent=L.title;
    opt.addEventListener('click',()=>{
      c.querySelectorAll('.focus-option').forEach(o=>o.classList.remove('selected'));
      opt.classList.add('selected');
      setTimeout(()=>showFocusCard(li),400);
    });
    c.appendChild(opt);
  });
  hideAll();$('focus').classList.add('active');
}

function showFocusCard(li) {
  const L=LESSONS[li],Q=L.quotes[state.qi[li]];
  $('focusCardTitle').textContent=L.title;
  $('focusCardQuote').textContent='\u201C'+Q.text+'\u201D';
  $('focusCardDate').textContent=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  hideAll();$('focusCard').classList.add('active');
}

function showCompletion() {
  $('compStreak').textContent=state.streak;
  $('compBest').textContent=state.best;
  $('compTotal').textContent=state.total;
  const m=getExactMilestone(state.streak);
  if(m){$('compMilestoneLabel').textContent='\u2605 '+m.label+' Milestone';$('compMilestoneText').textContent=m.text;$('compMilestone').style.display='';}
  else{$('compMilestone').style.display='none';}
  hideAll();$('completion').classList.add('active');
}

function hideAll(){['welcome','app','focus','focusCard','completion'].forEach(id=>$(id).classList.remove('active'));}

// ═══════════════════════════════════════
// EVENTS
// ═══════════════════════════════════════
$('beginBtn').addEventListener('click',()=>{
  if(state.ack.length===8){hideAll();showCompletion();return;}
  hideAll();
  setTimeout(()=>{$('app').classList.add('active');renderLesson(state.cur);},400);
  if(state.sound&&!playing) toggleSound();
});

$('acknowledgeBtn').addEventListener('click',()=>{
  const pos=state.cur;
  if(!state.ack.includes(pos)){state.ack.push(pos);saveState(state);}
  const btn=$('acknowledgeBtn');
  btn.classList.add('acknowledged');btn.querySelector('.check-icon').textContent='\u2713';
  $('navCounter').textContent=state.ack.length+' of 8';
  updateDots();
  if(state.ack.length===8){
    state.streak=(state.streak||0)+1;
    if(state.streak>(state.best||0)) state.best=state.streak;
    state.total=(state.total||0)+1;
    state.last=todayStr();
    saveState(state);
    setTimeout(()=>{hideAll();showFocusPicker();},600);
    return;
  }
  if(pos<7) setTimeout(()=>goTo(pos+1),700);
});

$('prevBtn').addEventListener('click',()=>{if(state.cur>0)goTo(state.cur-1);});
$('nextBtn').addEventListener('click',()=>{if(state.cur<7)goTo(state.cur+1);});

document.addEventListener('keydown',e=>{
  if(!$('app').classList.contains('active'))return;
  if(e.key==='ArrowLeft'&&state.cur>0)goTo(state.cur-1);
  if(e.key==='ArrowRight'&&state.cur<7)goTo(state.cur+1);
  if(e.key==='Enter'||e.key===' '){e.preventDefault();$('acknowledgeBtn').click();}
});

let tx=0;
$('cardContainer').addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
$('cardContainer').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>60){if(dx<0&&state.cur<7)goTo(state.cur+1);if(dx>0&&state.cur>0)goTo(state.cur-1);}},{passive:true});

$('soundToggle').addEventListener('click',toggleSound);
$('focusCardDone').addEventListener('click',()=>{hideAll();showCompletion();});
$('resetBtn').addEventListener('click',()=>{hideAll();renderWelcome();$('welcome').classList.add('active');});

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
buildDots();
renderWelcome();
if(state.sound) $('soundToggle').classList.add('on');
