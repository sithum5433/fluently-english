const escapeHTML = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const words = text => String(text || '').trim().split(/\s+/).filter(Boolean).length;
const timeLabel = seconds => `${Math.floor(Math.max(0, seconds) / 60)}:${String(Math.max(0, seconds) % 60).padStart(2, '0')}`;
const selected = (a, b) => a === b ? ' selected' : '';
const checked = value => value ? ' checked' : '';
const runtime = { writingFeedback: null, audioURL: null, audioPromptId: null, recording: false, microphoneError: '', recognitionError: '', recognizing: false };

const speakingPrompts = [
  { id: 'hello', level: 'A1 · Getting started', title: 'A little about you', prompt: 'Introduce yourself. Say your name, where you live, and two things you enjoy.', cue: 'My name is… / I live in… / In my free time, I like…', example: 'Hello, my name is Amaya. I live in Kandy. I enjoy reading short stories and playing badminton with my friends.', target: '30–45 seconds' },
  { id: 'routine', level: 'A1–A2 · Everyday English', title: 'Your everyday rhythm', prompt: 'Describe a normal day. What do you do in the morning, afternoon, and evening?', cue: 'First… / After that… / In the evening…', example: 'I usually wake up at seven. After breakfast, I go to work by bus. In the evening, I cook dinner and spend time with my family.', target: '45–60 seconds' },
  { id: 'memory', level: 'A2–B1 · Tell a story', title: 'A day to remember', prompt: 'Describe a day that made you happy. Where were you, who was with you, and what happened?', cue: 'Last year… / We decided to… / I felt… because…', example: 'Last month, my friends and I visited the coast. We took an early train and watched the sunrise. I felt relaxed because we had a whole day together.', target: '60–90 seconds' },
  { id: 'place', level: 'B1 · Give detail', title: 'Your favourite place', prompt: 'Describe a place you recommend visiting. Explain what people can do there and why you like it.', cue: 'It is located… / You can… / What I like most is…', example: 'I recommend the public gardens near my home. You can walk beside the lake, read under the trees, or meet friends. What I like most is how peaceful the gardens feel in the morning.', target: '60–90 seconds' },
  { id: 'opinion', level: 'B2 · Support an opinion', title: 'Learning in a digital world', prompt: 'Is learning online as effective as learning in a classroom? Give your view, one example, and a possible drawback.', cue: 'In my view… / For example… / On the other hand…', example: 'In my view, online learning can be effective when students have a clear routine. For example, recorded lessons let learners review difficult ideas. On the other hand, some students need the immediate support of a classroom teacher.', target: '90–120 seconds' },
  { id: 'challenge', level: 'B2–C1 · Develop an idea', title: 'A challenge that taught you something', prompt: 'Talk about a difficult skill you learned. Explain your starting point, the steps you took, and how the experience changed you.', cue: 'Initially… / A turning point was… / Looking back…', example: 'Initially, I found public speaking intimidating. I started by practising short talks with a friend. A turning point was presenting a project at work. Looking back, I learned that preparation matters more than feeling completely confident.', target: '2 minutes' },
];

const writingTasks = [
  { id: 'introduction', level: 'A1–A2', title: 'Meet your new study partner', genre: 'Personal introduction', min: 60, max: 90, prompt: 'Your new study partner wants to get to know you. Write a short introduction. Include where you are from, your daily life, two interests, and why you are learning English.', tips: ['Introduce yourself clearly.', 'Include two details about your life.', 'Say what you hope to learn.'], sample: 'Hi! My name is Nimal, and I am from Colombo. I work in a small shop near my home. I usually start work at nine and finish at five. In my free time, I enjoy cooking and watching football with my brother. I am learning English because I want to speak confidently with visitors and read more books. I hope we can practise together every week.' },
  { id: 'email', level: 'A2–B1', title: 'Make a plan with a friend', genre: 'Friendly email', min: 90, max: 120, prompt: 'Write an email inviting a friend to spend Saturday with you. Suggest an activity, explain where and when to meet, give a reason for your choice, and ask whether your friend is available.', tips: ['Use an opening and a closing.', 'Give a clear time and place.', 'Ask a question your friend can answer.'], sample: 'Hi Maya,\n\nHow are you? Would you like to visit the new city museum with me this Saturday? I have heard that it has an interesting photography exhibition, and I know you enjoy taking pictures.\n\nWe could meet outside the main entrance at ten in the morning. After the exhibition, we can have lunch at the café across the road. It serves vegetarian food, so we should both find something we like.\n\nAre you free on Saturday? If the morning is difficult, we could go after lunch instead. Let me know what works for you.\n\nBest wishes,\nSam' },
  { id: 'story', level: 'B1–B2', title: 'An unexpected kindness', genre: 'Short story', min: 140, max: 180, prompt: 'Write a short story that begins: “I was about to give up when someone called my name.” Explain the situation, what happened next, and how you felt at the end.', tips: ['Keep the past tense consistent.', 'Connect events in a clear order.', 'Include a detail that shows a feeling.'], sample: 'I was about to give up when someone called my name. I turned around and saw my neighbour, Mrs Perera, waving from the bus stop. I had spent the whole afternoon searching for my missing dog, Milo.\n\n“Is this who you are looking for?” she asked. Behind her stood Milo, happily drinking water from a small bowl. My shoulders finally relaxed.\n\nMrs Perera explained that she had found him outside the library. She had recognised him from our morning walks and waited nearby, hoping to find me. Her own bus had already left, but she had decided to stay.\n\nI thanked her again and again, then offered to walk her home. As we crossed the park, Milo trotted between us. What had begun as a frightening afternoon became a chance to get to know a thoughtful neighbour.' },
  { id: 'opinion', level: 'B2–C1', title: 'Should cities create more car-free streets?', genre: 'Opinion paragraph', min: 180, max: 230, prompt: 'Some people think city centres should have more streets without cars. Others say this makes daily life harder. Explain both views and give your own opinion, supported by reasons and an example.', tips: ['Present both views fairly.', 'State your own position clearly.', 'Support your ideas with reasons or examples.'], sample: 'Creating more car-free streets can make city centres healthier and more welcoming. However, the policy also needs to consider people who depend on vehicles.\n\nSupporters argue that streets without cars are safer for pedestrians and encourage people to walk or cycle. Outdoor seating, trees, and play areas can also give residents more places to meet. For example, a shopping street with comfortable benches may attract families who would otherwise avoid busy traffic. Local cafés and shops can benefit when visitors stay longer.\n\nOn the other hand, some residents have limited mobility, and businesses need regular deliveries. If nearby public transport is unreliable, removing car access could make the centre harder to reach. Simply closing a road does not solve these practical problems.\n\nIn my view, cities should introduce car-free areas gradually. They should improve accessible public transport, provide nearby drop-off points, and allow deliveries at agreed times. Councils should also listen to local residents before making permanent changes. With this kind of planning, car-free streets can improve public space while keeping essential services within reach.' },
];

const scenarios = {
  cafe: { title: 'At the café', icon: '☕', level: 'A1–A2', description: 'Order a drink, explain a preference, and pay politely.', start: 'welcome', nodes: {
    welcome: { speaker: 'Barista', line: 'Hi there! What can I get for you?', choices: [
      { text: 'Could I have a small latte, please?', next: 'milk', good: true, feedback: '“Could I have…?” is a friendly, natural way to order.' },
      { text: 'Coffee.', next: 'clarify', feedback: 'The barista needs more detail. Add a size and say “please” to make your order clearer.' },
      { text: 'Give me a drink now.', next: 'repair', feedback: 'This sounds demanding. Try a polite request with “could” or “may”.' },
    ] },
    clarify: { speaker: 'Barista', line: 'Of course. What kind of coffee and what size?', choices: [
      { text: 'A small latte, please.', next: 'milk', good: true, feedback: 'Great repair: you added exactly the details the listener needed.' },
      { text: 'I am a coffee.', next: 'milk', feedback: 'Use “I would like a coffee.” “I am” describes who you are.' },
    ] },
    repair: { speaker: 'Barista', line: 'I can help. Would you like to order a coffee or tea?', choices: [
      { text: 'Sorry. Could I have a small latte, please?', next: 'milk', good: true, feedback: 'A short apology and a clear request help the conversation move forward.' },
      { text: 'A latte. Small, please.', next: 'milk', good: true, feedback: 'This is brief, but the order is clear and “please” makes it more polite.' },
    ] },
    milk: { speaker: 'Barista', line: 'Would you like regular milk or oat milk?', choices: [
      { text: 'Oat milk, please. Is there an extra charge?', next: 'price', good: true, feedback: 'You gave your preference and asked a useful follow-up question.' },
      { text: 'Regular milk is fine, thank you.', next: 'pay', good: true, feedback: '“Is fine” means that the option is acceptable to you.' },
      { text: 'Yes.', next: 'milkclarify', feedback: 'This is an either/or question. Name one of the two choices.' },
    ] },
    milkclarify: { speaker: 'Barista', line: 'Which would you prefer: regular milk or oat milk?', choices: [
      { text: 'Oat milk, please.', next: 'pay', good: true, feedback: 'Now your preference is clear.' },
      { text: 'Regular milk, please.', next: 'pay', good: true, feedback: 'Clear and polite: a useful combination.' },
    ] },
    price: { speaker: 'Barista', line: 'Oat milk is an extra fifty cents. Is that okay?', choices: [
      { text: 'That is fine, thank you.', next: 'pay', good: true, feedback: '“That is fine” is a natural way to accept a small change.' },
      { text: 'Actually, I will have regular milk instead.', next: 'pay', good: true, feedback: '“Actually” and “instead” help you change your order clearly.' },
    ] },
    pay: { speaker: 'Barista', line: 'Your drink will be ready soon. Are you paying by cash or card?', choices: [
      { text: 'By card, please. Thank you!', next: 'end', good: true, feedback: 'Use “by card” or “in cash” to describe how you pay.' },
      { text: 'In cash, please. Here you are.', next: 'end', good: true, feedback: '“Here you are” is useful when you hand someone money or an object.' },
      { text: 'I pay yesterday.', next: 'end', feedback: 'For your choice now, say “I will pay by card” or “I will pay in cash”.' },
    ] }, end: { done: true, line: 'Order complete. You practised polite requests, preferences, and payment.' },
  } },
  interview: { title: 'A job interview', icon: '💼', level: 'B1–B2', description: 'Introduce yourself and support your strengths with an example.', start: 'welcome', nodes: {
    welcome: { speaker: 'Interviewer', line: 'Welcome! Could you tell me a little about yourself?', choices: [
      { text: 'I have two years of customer service experience, and I enjoy helping people solve problems.', next: 'example', good: true, feedback: 'You connected your experience and interests to the role.' },
      { text: 'What exactly would you like to know about my experience?', next: 'clarify', good: true, feedback: 'Asking a polite clarifying question is better than guessing.' },
      { text: 'Everything is on my CV.', next: 'repair', feedback: 'This can sound dismissive. Offer a short summary to start a conversation.' },
    ] },
    clarify: { speaker: 'Interviewer', line: 'Please start with your most recent role and a skill you developed.', choices: [
      { text: 'In my last role, I helped customers every day and learned to explain information clearly.', next: 'example', good: true, feedback: 'You answered both parts: your role and a relevant skill.' },
      { text: 'I worked before.', next: 'example', feedback: 'Add the kind of work and one specific skill to make this useful.' },
    ] },
    repair: { speaker: 'Interviewer', line: 'I have read your CV, but I would like to hear what you would bring to the team.', choices: [
      { text: 'Of course. I am patient, and I am good at finding practical solutions.', next: 'example', good: true, feedback: 'You recovered the conversation by focusing on relevant strengths.' },
      { text: 'I am the best at everything.', next: 'example', feedback: 'Specific strengths sound more credible than a claim about being the best at everything.' },
    ] },
    example: { speaker: 'Interviewer', line: 'Can you give an example of a time you solved a difficult problem?', choices: [
      { text: 'A customer received the wrong order. I listened, arranged a replacement, and checked that it arrived on time.', next: 'question', good: true, feedback: 'This gives a situation, your action, and a result: a clear way to organise an interview answer.' },
      { text: 'Yes, I solve problems.', next: 'followup', feedback: 'The interviewer asked for an example. A specific event will show what you mean.' },
      { text: 'Could I take a moment to think of an example?', next: 'think', good: true, feedback: 'A brief thinking pause is natural. This phrase gives you time politely.' },
    ] },
    think: { speaker: 'Interviewer', line: 'Of course. Take a moment.', choices: [
      { text: 'Thank you. Once our booking system stopped working, so I organised a temporary paper list and updated it later.', next: 'question', good: true, feedback: 'Your example explains the problem and your practical response.' },
      { text: 'I cannot think of a work example, but I organised a group project when our leader was absent.', next: 'question', good: true, feedback: 'A relevant example from study or volunteering can also demonstrate a skill.' },
    ] },
    followup: { speaker: 'Interviewer', line: 'What happened in one particular situation, and what did you do?', choices: [
      { text: 'When a delivery was late, I contacted the supplier, updated the customer, and arranged a new delivery time.', next: 'question', good: true, feedback: 'Good: the details make your contribution easy to understand.' },
      { text: 'Many things happened.', next: 'question', feedback: 'Try naming one event and one action you took. Details help your listener.' },
    ] },
    question: { speaker: 'Interviewer', line: 'Do you have any questions for us?', choices: [
      { text: 'What would success look like in the first three months?', next: 'end', good: true, feedback: 'This question shows interest in the work and the team’s expectations.' },
      { text: 'Could you tell me about training for new team members?', next: 'end', good: true, feedback: 'A useful question that helps you understand how you would learn the role.' },
      { text: 'You have to give me the job.', next: 'end', feedback: 'End professionally. You could say, “Thank you for your time. I am very interested in the role.”' },
    ] }, end: { done: true, line: 'Interview complete. Keep your answers relevant, specific, and easy to follow.' },
  } },
  travel: { title: 'Finding your train', icon: '🚆', level: 'A2–B1', description: 'Ask for directions, check a ticket, and confirm information.', start: 'welcome', nodes: {
    welcome: { speaker: 'Station assistant', line: 'Hello. Do you need any help?', choices: [
      { text: 'Yes, please. Which platform does the 10:30 train to Riverdale leave from?', next: 'platform', good: true, feedback: 'You included the departure time and destination, so the assistant can help quickly.' },
      { text: 'Where train?', next: 'clarify', feedback: 'Try “Where does the train to Riverdale leave from?” Include your destination.' },
      { text: 'Could you help me check my ticket?', next: 'ticket', good: true, feedback: 'A clear, polite request. You can use “Could you help me…?” in many situations.' },
    ] },
    clarify: { speaker: 'Station assistant', line: 'Where are you travelling, and what time is your train?', choices: [
      { text: 'I am travelling to Riverdale on the 10:30 train.', next: 'platform', good: true, feedback: 'Now the assistant has the information needed.' },
      { text: 'Riverdale at half past ten, please.', next: 'platform', good: true, feedback: '“Half past ten” means 10:30.' },
    ] },
    ticket: { speaker: 'Station assistant', line: 'Your ticket is for the 10:30 train to Riverdale. It leaves from platform six.', choices: [
      { text: 'Thank you. Could you tell me how to get to platform six?', next: 'directions', good: true, feedback: '“Could you tell me how to get to…?” is a useful way to ask for directions.' },
      { text: 'Does this ticket include a reserved seat?', next: 'seat', good: true, feedback: 'A useful follow-up question about your journey.' },
    ] },
    platform: { speaker: 'Station assistant', line: 'It leaves from platform six, but you need to use the footbridge.', choices: [
      { text: 'Sorry, could you repeat the platform number?', next: 'repeat', good: true, feedback: 'Asking for repetition helps you check information accurately.' },
      { text: 'Where is the footbridge, please?', next: 'directions', good: true, feedback: 'You focused on the part of the instructions you need.' },
      { text: 'I no understand nothing.', next: 'repeat', feedback: 'Try “Sorry, I did not understand. Could you say that again?”' },
    ] },
    repeat: { speaker: 'Station assistant', line: 'Platform six. Go over the footbridge and turn left.', choices: [
      { text: 'Platform six, over the bridge and then left. Is that right?', next: 'confirm', good: true, feedback: 'Repeating key details is a strong way to confirm directions.' },
      { text: 'Where is the footbridge?', next: 'directions', good: true, feedback: 'A useful follow-up when a landmark is unfamiliar.' },
    ] },
    directions: { speaker: 'Station assistant', line: 'Walk past the ticket machines. The footbridge is on your right. Platform six is on the other side.', choices: [
      { text: 'Past the ticket machines, then right. Thank you for your help.', next: 'confirm', good: true, feedback: 'You checked the first steps and thanked the assistant.' },
      { text: 'There is a lift as well, isn’t there?', next: 'lift', good: true, feedback: 'You can ask about an accessible route or luggage access with this phrase.' },
    ] },
    seat: { speaker: 'Station assistant', line: 'Yes. Your reserved seat is 24 in coach B. The train leaves from platform six.', choices: [
      { text: 'Seat 24, coach B. Thank you. How do I reach platform six?', next: 'directions', good: true, feedback: 'You confirmed the reservation before asking your next question.' },
      { text: 'Thank you. I know the way from here.', next: 'end', good: true, feedback: 'A polite way to close the conversation when you have the information you need.' },
    ] },
    lift: { speaker: 'Station assistant', line: 'Yes, the lift is beside the footbridge. Take it to the bridge level.', choices: [
      { text: 'That is helpful. Thank you!', next: 'end', good: true, feedback: 'You acknowledged the help and closed politely.' },
    ] },
    confirm: { speaker: 'Station assistant', line: 'That is right. Have a good journey!', choices: [
      { text: 'Thank you. Have a nice day!', next: 'end', good: true, feedback: 'A friendly, natural response.' },
    ] }, end: { done: true, line: 'Journey ready. You practised questions, directions, repetition, and confirmation.' },
  } },
  doctor: { title: 'At a medical appointment', icon: '🩺', level: 'A2–B1', description: 'Practise describing symptoms and asking for clarification.', start: 'welcome', nodes: {
    welcome: { speaker: 'Doctor', line: 'Hello. What brings you in today?', choices: [
      { text: 'I have had a sore throat for three days.', next: 'detail', good: true, feedback: 'You named the symptom and how long you have had it.' },
      { text: 'My throat is not feeling well.', next: 'duration', good: true, feedback: 'Your meaning is clear. “I have a sore throat” is a more common expression.' },
      { text: 'I am pain.', next: 'clarify', feedback: 'Try “I am in pain” or name the symptom: “My throat hurts.”' },
    ] },
    clarify: { speaker: 'Doctor', line: 'Could you tell me where it hurts?', choices: [
      { text: 'My throat hurts when I swallow.', next: 'duration', good: true, feedback: 'You explained where and when it hurts using everyday words.' },
      { text: 'I have a sore throat, especially in the morning.', next: 'duration', good: true, feedback: 'Adding when it happens gives the listener more useful detail.' },
    ] },
    duration: { speaker: 'Doctor', line: 'How long have you had a sore throat?', choices: [
      { text: 'For about three days.', next: 'detail', good: true, feedback: 'Use “for” with a length of time: for three days, for a week.' },
      { text: 'Since three days.', next: 'detail', feedback: 'Use “for three days”. Use “since” with a starting point, such as “since Monday”.' },
    ] },
    detail: { speaker: 'Doctor', line: 'Is the discomfort constant, or does it come and go?', choices: [
      { text: 'It comes and goes. It is worse in the morning.', next: 'clarification', good: true, feedback: 'You described the pattern and added a useful time detail.' },
      { text: 'Sorry, what does “constant” mean?', next: 'meaning', good: true, feedback: 'Ask about unfamiliar words. It is helpful to check your understanding.' },
      { text: 'Yes.', next: 'meaning', feedback: 'The question offered two options. Explain which one describes your experience.' },
    ] },
    meaning: { speaker: 'Doctor', line: 'I mean: does it hurt all the time, or only at certain times?', choices: [
      { text: 'Only at certain times. It is worse when I wake up.', next: 'clarification', good: true, feedback: 'You answered the question after checking the meaning.' },
      { text: 'It hurts all the time.', next: 'clarification', good: true, feedback: 'A clear answer in plain language.' },
    ] },
    clarification: { speaker: 'Doctor', line: 'Thank you. Before we continue, is there anything you would like me to explain?', choices: [
      { text: 'Could you explain the next steps in simple words, please?', next: 'end', good: true, feedback: 'This is a useful way to ask for an explanation you can understand.' },
      { text: 'Could I write down your instructions?', next: 'end', good: true, feedback: 'Taking notes can help you remember the information in a conversation.' },
      { text: 'Please speak a little more slowly.', next: 'end', good: true, feedback: 'You can ask people to adjust their speed when you are learning a language.' },
    ] }, end: { done: true, line: 'Conversation complete. You practised symptoms, time expressions, and clarification. This activity teaches language; it does not provide a diagnosis.' },
  } },
};

const readingPassage = [
  'For much of the twentieth century, a public library was mainly a place to borrow books and read in silence. Today, many libraries still protect those familiar services while finding new ways to support their neighbourhoods. One example is the Greenbank Library, which reopened in 2023 after a year of renovation.',
  'Before planning the renovation, library staff surveyed local residents. They expected most people to ask for more books. Instead, the most frequent request was for a reliable place to study in the evening. As a result, the library now stays open until 9 p.m. on weekdays. A separate quiet room allows students to concentrate even when events take place in the main hall.',
  'The library also lends objects. Residents can borrow simple tools, sewing machines, and small items of gardening equipment. The aim is to reduce the cost of buying something that may only be used once or twice. Borrowers attend a short introduction before taking a sewing machine home. The library does not lend large power tools because it lacks suitable storage and maintenance facilities.',
  'A weekly digital skills session has been especially popular among older residents. Volunteers show participants how to use online services and recognise suspicious messages. Participants bring their own devices when possible, although a few library tablets are available. The sessions are free, but booking is necessary because the room can hold only twelve people.',
  'Not everyone welcomed the changes at first. Some regular readers worried that workshops would make the building too noisy. Staff responded by moving group activities to a room with sound-reducing doors and publishing a clear weekly schedule. A survey six months later found that most regular readers felt the quiet areas remained comfortable.',
  'The library team plans to evaluate the new services every year. Rather than measuring success only by the number of books borrowed, staff will also ask whether visitors feel more confident using technology and more connected to their neighbours. The team believes that a modern library can remain a place for reading while supporting many other kinds of learning.',
];
const readingQuestions = [
  { q: 'What was the most common request in the residents’ survey?', options: ['A larger collection of books', 'A place to study in the evening', 'More gardening workshops', 'A café inside the library'], answer: 1, explanation: 'Paragraph 2 says the most frequent request was a reliable place to study in the evening.' },
  { q: 'Why is there a separate quiet room?', options: ['To store valuable books', 'To provide a space for staff meetings', 'To allow study while events happen elsewhere', 'To keep all visitors away from the main hall'], answer: 2, explanation: 'The quiet room allows students to concentrate while events take place in the main hall.' },
  { q: 'What must someone do before borrowing a sewing machine?', options: ['Buy insurance', 'Attend a short introduction', 'Leave their own device at the library', 'Join a weekly workshop for a month'], answer: 1, explanation: 'Paragraph 3 states that borrowers attend a short introduction before taking a sewing machine home.' },
  { q: 'Why must people book the digital skills session?', options: ['There are only twelve places in the room', 'The sessions have an entrance fee', 'Every participant must borrow a tablet', 'Only library volunteers may attend'], answer: 0, explanation: 'Booking is required because the room can hold only twelve people.' },
  { q: 'How did staff respond to concerns about noise?', options: ['They cancelled all group activities', 'They shortened opening hours', 'They moved activities and published a schedule', 'They asked regular readers to visit elsewhere'], answer: 2, explanation: 'Paragraph 5 describes a room with sound-reducing doors and a clear weekly schedule.' },
  { q: 'How will the library evaluate its success?', options: ['Only by counting borrowed books', 'Only by counting evening visitors', 'By comparing its budget with other libraries', 'By considering learning and community connections as well as borrowing'], answer: 3, explanation: 'The final paragraph includes visitors’ confidence with technology and their connection to neighbours, alongside borrowing.' },
];
const listeningScript = 'Hello, and welcome to the Riverside Community Centre. Here is some information about our Saturday photography workshop. The workshop begins at ten thirty in the morning, but please arrive fifteen minutes early so we can register everyone. We will meet in room four, which is upstairs next to the art studio. Our tutor is Elena Brooks, a local photographer who specialises in outdoor portraits. Please bring a fully charged smartphone or a digital camera. You do not need to buy any special equipment. The workshop costs twelve pounds, and this includes a printed guide and a cup of tea. After a short introduction indoors, we will walk to Riverside Park to practise taking photographs. If it rains, the practical session will take place inside the community centre instead. To reserve a place, email the centre before Thursday evening. Please include your name and a contact telephone number. We look forward to seeing you on Saturday.';
const listeningQuestions = [
  { q: 'What time does the workshop begin?', options: ['10:00 a.m.', '10:15 a.m.', '10:30 a.m.', '11:30 a.m.'], answer: 2, explanation: 'The workshop begins at 10:30. Arrival is fifteen minutes earlier, at 10:15.' },
  { q: 'Where should participants meet?', options: ['In the art studio', 'In room four', 'At Riverside Park', 'At the main reception'], answer: 1, explanation: 'The meeting place is room four, upstairs next to the art studio.' },
  { q: 'What should participants bring?', options: ['A printed guide', 'Special lighting equipment', 'A laptop', 'A charged smartphone or digital camera'], answer: 3, explanation: 'Participants should bring a fully charged smartphone or digital camera; special equipment is unnecessary.' },
  { q: 'What is included in the twelve-pound fee?', options: ['A printed guide and tea', 'Lunch and a camera', 'Transport to the park', 'An outdoor portrait to take home'], answer: 0, explanation: 'The speaker says the fee includes a printed guide and a cup of tea.' },
  { q: 'How should someone reserve a place?', options: ['Telephone the tutor on Saturday', 'Visit the park on Thursday', 'Email the centre before Thursday evening', 'Pay at the art studio on Friday'], answer: 2, explanation: 'To reserve a place, email the centre before Thursday evening with your name and contact number.' },
];
const interviewParts = [
  { id: 'part1', label: 'Part 1 · Familiar topics', seconds: 60, prompt: 'Let’s talk about your home. What do you like about the area where you live? Is there anything you would change?', notes: 'Answer directly, then add a reason or a personal example. You might talk about transport, neighbours, local shops, or green spaces. Avoid memorising a script.' },
  { id: 'part2', label: 'Part 2 · Long turn', seconds: 120, prompt: 'Describe a skill you would like to learn. Say what the skill is, why you are interested in it, how you would learn it, and how it might help you in the future.', notes: 'Use one minute to plan brief notes before starting the two-minute timer. Cover the cue points, use examples, and connect your ideas. The timer here is for your speaking turn.' },
  { id: 'part3', label: 'Part 3 · Discussion', seconds: 90, prompt: 'How has technology changed the way adults learn new skills? Do you think employers should provide time for employees to study?', notes: 'Develop a general view, support it with a reason, and consider another perspective. For example: flexible access to courses, the need for practice, and the value of support from employers.' },
];

function getState(state) {
  const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const record = (parent, key) => { if (!isRecord(parent[key])) parent[key] = {}; return parent[key]; };
  const finiteInteger = (value, fallback, maximum) => typeof value === 'number' && Number.isFinite(value) ? Math.min(maximum, Math.max(0, Math.floor(value))) : fallback;
  const own = (object, key) => typeof key === 'string' && Object.prototype.hasOwnProperty.call(object, key);
  const normalizeAnswers = (value, count) => Object.fromEntries(Array.from({ length: count }, (_, i) => i).filter(i => isRecord(value) && Number.isInteger(value[i]) && value[i] >= 0 && value[i] <= 3).map(i => [i, value[i]]));
  record(state, 'practice');
  record(state, 'drafts');
  const p = state.practice;
  const speaking = record(p, 'speaking');
  if (!speakingPrompts.some(item => item.id === speaking.promptId)) speaking.promptId = 'hello';
  const transcripts = record(speaking, 'transcripts');
  const reflections = record(speaking, 'reflections');
  for (const item of speakingPrompts) {
    if (typeof transcripts[item.id] !== 'string') transcripts[item.id] = '';
    const values = record(reflections, item.id);
    for (let i = 0; i < 3; i++) values[i] = values[i] === true;
  }
  const writing = record(p, 'writing');
  if (!writingTasks.some(item => item.id === writing.taskId)) writing.taskId = 'introduction';
  writing.sample = writing.sample === true;
  const checklists = record(writing, 'checklists');
  for (const item of writingTasks) {
    const values = record(checklists, item.id);
    for (let i = 0; i < item.tips.length; i++) values[i] = values[i] === true;
  }
  const sim = record(p, 'simulations');
  if (!own(scenarios, sim.active)) sim.active = 'cafe';
  const scenario = scenarios[sim.active];
  if (!own(scenario.nodes, sim.node)) sim.node = scenario.start;
  sim.history = Array.isArray(sim.history) ? sim.history.filter(turn => isRecord(turn) && ['speaker', 'line', 'reply'].every(key => typeof turn[key] === 'string')).slice(-40) : [];
  sim.score = finiteInteger(sim.score, 0, sim.history.length);
  const currentNode = scenario.nodes[sim.node];
  const feedbackIndex = isRecord(sim.feedback) ? sim.feedback.index : -1;
  const feedbackChoice = Number.isInteger(feedbackIndex) && feedbackIndex >= 0 ? currentNode.choices?.[feedbackIndex] : null;
  sim.feedback = feedbackChoice ? { index: feedbackIndex, text: feedbackChoice.feedback, good: Boolean(feedbackChoice.good), next: feedbackChoice.next } : null;
  const ielts = record(p, 'ielts');
  if (!['reading', 'listening', 'writing', 'speaking'].includes(ielts.tab)) ielts.tab = 'reading';
  const reading = record(ielts, 'reading');
  reading.answers = normalizeAnswers(reading.answers, readingQuestions.length);
  reading.submitted = reading.submitted === true;
  reading.remaining = finiteInteger(reading.remaining, 600, 600);
  reading.running = reading.running === true && !reading.submitted && reading.remaining > 0;
  const listening = record(ielts, 'listening');
  listening.answers = normalizeAnswers(listening.answers, listeningQuestions.length);
  listening.submitted = listening.submitted === true;
  listening.showTranscript = listening.showTranscript === true;
  const examWriting = record(ielts, 'writing');
  examWriting.task = examWriting.task === 2 ? 2 : 1;
  const writingSeconds = examWriting.task === 1 ? 1200 : 2400;
  examWriting.remaining = finiteInteger(examWriting.remaining, writingSeconds, writingSeconds);
  examWriting.running = examWriting.running === true && examWriting.remaining > 0;
  examWriting.feedback = Array.isArray(examWriting.feedback) ? examWriting.feedback.filter(note => isRecord(note) && typeof note.text === 'string' && ['good', 'grow', 'neutral'].includes(note.kind)).slice(0, 20) : null;
  const examSpeaking = record(ielts, 'speaking');
  examSpeaking.part = finiteInteger(examSpeaking.part, 0, interviewParts.length - 1);
  const speakingSeconds = interviewParts[examSpeaking.part].seconds;
  examSpeaking.remaining = finiteInteger(examSpeaking.remaining, speakingSeconds, speakingSeconds);
  examSpeaking.running = examSpeaking.running === true && examSpeaking.remaining > 0;
  const draftKeys = [...writingTasks.map(item => `writing-${item.id}`), 'ielts-writing-1', 'ielts-writing-2', 'ielts-listening-notes', ...interviewParts.map(item => `ielts-speaking-${item.id}`)];
  for (const key of draftKeys) if (typeof state.drafts[key] !== 'string') state.drafts[key] = '';
  return p;
}

const button = (label, action, type = 'secondary', attributes = '') => `<button class="btn btn-${type}" type="button" data-action="${action}" ${attributes}>${label}</button>`;
const intro = (eyebrow, title, description) => `<div class="section-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="muted">${description}</p></div></div>`;
const pill = (text, active, action, attrs = '') => `<button type="button" class="btn ${active ? 'btn-primary' : 'btn-secondary'}" data-action="${action}" aria-pressed="${active}" ${attrs}>${text}</button>`;

function renderSpeaking(state, p) {
  const prompt = speakingPrompts.find(item => item.id === p.speaking.promptId) || speakingPrompts[0];
  const transcript = p.speaking.transcripts[prompt.id] || '';
  const reflections = p.speaking.reflections[prompt.id] || {};
  const hasRecognition = typeof window !== 'undefined' && Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  return `${intro('FIND YOUR VOICE', 'A little practice. A lot more confidence.', 'Speak at your own pace. Listen, try it yourself, and notice one thing to improve.')}
    <div class="grid-2"><section class="panel practice-card"><div class="practice-toolbar"><span class="badge">${prompt.level}</span><span class="muted">${prompt.target}</span></div>
      <label class="field-label" for="speaking-prompt">Choose your speaking prompt</label><select id="speaking-prompt" class="field" data-input="speaking-prompt">${speakingPrompts.map(item => `<option value="${item.id}"${selected(item.id, prompt.id)}>${item.title}</option>`).join('')}</select>
      <h2>${prompt.title}</h2><p class="practice-prompt">${prompt.prompt}</p><div class="practice-tip"><strong>A little help to begin</strong><p>${prompt.cue}</p></div>
      <div class="practice-actions">${button('◖ Listen to the prompt', 'speak-prompt')}${button('Hear an example', 'speak-example')}</div>
      <details class="practice-details"><summary>Read a sample response</summary><p>${prompt.example}</p><p class="muted">Use your own ideas. This example is one possible answer.</p></details>
    </section><section class="panel practice-card"><p class="eyebrow">YOUR PRACTICE SPACE</p><h2>Let’s hear it.</h2><p class="muted">Record your voice to listen back. Your recording stays in this browser session and is cleared when you leave this page.</p>
      <div class="practice-actions">${button(runtime.recording ? '■ Stop recording' : '● Record my voice', runtime.recording ? 'record-stop' : 'record-start', 'primary')}${button('Stop audio', 'stop-audio')}</div>
      <p class="muted" data-record-status role="status">${runtime.recording ? 'Recording… Your microphone is active.' : escapeHTML(runtime.microphoneError || 'Ready when you are. Microphone access is requested only when you record.')}</p>
      <div data-record-player>${runtime.audioURL ? `<audio controls src="${runtime.audioURL}" style="width:100%;margin:8px 0" aria-label="Your speaking recording"></audio>` : ''}</div>
      <label class="field-label" for="speaking-transcript">Your transcript or practice notes</label><textarea id="speaking-transcript" class="field practice-textarea" rows="6" data-input="speaking-transcript" placeholder="Speak with dictation, or type what you said…">${escapeHTML(transcript)}</textarea>
      <div class="practice-toolbar"><span class="muted" data-speaking-count>${words(transcript)} words · autosaved on this device</span>${hasRecognition ? button(runtime.recognizing ? 'Stop dictation' : 'Use voice dictation', runtime.recognizing ? 'dictation-stop' : 'dictation-start') : '<span class="muted">Type your notes if dictation is unavailable.</span>'}</div>
      <p class="muted" data-dictation-status role="status">${escapeHTML(runtime.recognitionError || (hasRecognition ? 'Your browser’s speech service creates a transcript. Availability and privacy depend on your browser.' : 'Voice dictation is not supported in this browser. Recording and typed practice are still available.'))}</p>
    </section></div>
    <section class="panel practice-card"><div class="practice-toolbar"><div><p class="eyebrow">REFLECT, THEN REPEAT</p><h2>One small improvement</h2></div>${button('Finish speaking practice  +25 XP', 'speaking-finish', 'primary')}</div><p class="muted">Listen back and check what you noticed. These are self-reflections; Fluently does not provide AI pronunciation scores.</p><div class="practice-checklist">${['I answered the prompt with my own ideas.', 'I spoke in complete phrases and paused naturally.', 'I noticed one word or sentence I want to practise again.'].map((text, i) => `<label><input type="checkbox" data-input="speaking-reflection" value="${i}"${checked(reflections[i])}> <span>${text}</span></label>`).join('')}</div></section>`;
}

function writingFeedback(text, task) {
  const count = words(text);
  const sentences = text.trim().split(/[.!?]+/).map(item => item.trim()).filter(Boolean);
  const notes = [];
  if (count < task.min) notes.push({ kind: 'grow', text: `You have ${count} words. Aim for ${task.min}–${task.max} words by adding a reason, example, or useful detail.` });
  else if (count > task.max) notes.push({ kind: 'grow', text: `You have ${count} words. Aim for ${task.min}–${task.max}; check whether any repeated ideas can be shortened.` });
  else notes.push({ kind: 'good', text: `Your ${count} words are within this practice task’s suggested range.` });
  if (text.trim() && !/[.!?][”"')]*$/.test(text.trim())) notes.push({ kind: 'grow', text: 'Check the end of your final sentence. It may need a full stop, question mark, or exclamation mark.' });
  if (/^[a-z]/.test(text.trim())) notes.push({ kind: 'grow', text: 'Begin your first sentence with a capital letter.' });
  if (/\bi\b/.test(text)) notes.push({ kind: 'grow', text: 'The pronoun “I” is always capitalised in English.' });
  if (/\b(\w+)\s+\1\b/i.test(text)) notes.push({ kind: 'grow', text: 'There may be an accidental repeated word. Read your draft aloud to find it.' });
  if (sentences.some(sentence => words(sentence) > 32)) notes.push({ kind: 'grow', text: 'At least one sentence has more than 32 words. Consider splitting it if the idea is hard to follow.' });
  const patterns = [ [/\b(I|we|they|you)\s+is\b/i, 'Check subject–verb agreement: use “I am”, “you are”, “we are”, and “they are”.'], [/\b(he|she|it)\s+(are|have)\b/i, 'Check agreement with “he”, “she”, or “it”: often “is” or “has” is needed.'], [/\bsince\s+\d+\s+(days?|weeks?|months?|years?)\b/i, 'Use “for” with a length of time, such as “for three days”. “Since” introduces a starting point.'], [/\bmore\s+(better|easier|faster)\b/i, 'Comparatives such as “better”, “easier”, and “faster” usually do not need “more”.'] ];
  patterns.forEach(([pattern, note]) => { if (pattern.test(text)) notes.push({ kind: 'grow', text: note }); });
  if (count > 25 && notes.length === 1) notes.push({ kind: 'good', text: 'No issues were found by these basic checks. Review meaning, organisation, and accuracy yourself; the checker can miss mistakes.' });
  notes.push({ kind: 'neutral', text: 'Read your work aloud and check the task checklist. These rules do not judge meaning, fluency, or an IELTS band.' });
  return notes;
}

function renderFeedback(notes) {
  return `<div class="practice-feedback" role="status"><h3>Your revision notes</h3><p class="muted">Basic rule checks · not AI assessment or an IELTS score</p><ul>${notes.map(note => `<li><span>${note.kind === 'good' ? '✓' : note.kind === 'grow' ? '↗' : '•'}</span> ${escapeHTML(note.text)}</li>`).join('')}</ul></div>`;
}

function renderWriting(state, p) {
  const task = writingTasks.find(item => item.id === p.writing.taskId) || writingTasks[0];
  const draft = state.drafts[`writing-${task.id}`] || '';
  const checklist = p.writing.checklists[task.id] || {};
  return `${intro('PUT YOUR IDEAS INTO WORDS', 'Your next chapter starts here.', 'Build clear sentences, organise your ideas, and become a more confident writer.')}
    <div class="practice-tabs" role="group" aria-label="Writing tasks">${writingTasks.map(item => pill(`${item.genre} <span class="muted">${item.level}</span>`, task.id === item.id, 'writing-task', `data-id="${item.id}"`)).join('')}</div>
    <div class="grid-2"><section class="panel practice-card"><span class="badge">${task.level} · ${task.min}–${task.max} words</span><h2>${task.title}</h2><p class="practice-prompt">${task.prompt}</p><h3>Before you finish</h3><div class="practice-checklist">${task.tips.map((tip, i) => `<label><input type="checkbox" data-input="writing-checklist" value="${i}"${checked(checklist[i])}> <span>${tip}</span></label>`).join('')}</div><div class="practice-tip"><strong>A simple writing routine</strong><p>Plan three ideas → write a first draft → read it aloud → make one improvement.</p></div>${button(p.writing.sample ? 'Hide sample answer' : 'Explore a sample answer', 'writing-sample')}${p.writing.sample ? `<div class="practice-sample"><h3>One possible response</h3><p style="white-space:pre-line">${escapeHTML(task.sample)}</p><p class="muted">Notice how the answer addresses the task. Keep your own ideas and voice.</p></div>` : ''}</section>
    <section class="panel practice-card"><div class="practice-toolbar"><h2>Your writing space</h2><span class="badge" data-writing-count>${words(draft)} words</span></div><label class="sr-only" for="writing-draft">Your ${task.genre.toLowerCase()} draft</label><textarea id="writing-draft" class="field practice-textarea" rows="15" data-input="writing-draft" placeholder="Start with one sentence. Your draft is saved automatically…">${escapeHTML(draft)}</textarea><p class="muted" data-writing-saved aria-live="polite">Saved on this device · suggested length: ${task.min}–${task.max} words</p><div class="practice-actions">${button('Check my writing', 'writing-check', 'secondary')}${button('Finish activity  +30 XP', 'writing-finish', 'primary')}</div><div data-writing-feedback>${runtime.writingFeedback?.id === task.id ? renderFeedback(runtime.writingFeedback.notes) : ''}</div></section></div>`;
}

function renderSimulations(state, p) {
  const sim = p.simulations;
  const scenario = scenarios[sim.active] || scenarios.cafe;
  const node = scenario.nodes[sim.node] || scenario.nodes[scenario.start];
  return `${intro('REAL WORDS. REAL SITUATIONS.', 'Make yourself understood.', 'Choose your own way through everyday conversations. Each reply opens a different next step.')}
    <div class="practice-scenario-grid">${Object.entries(scenarios).map(([id, item]) => `<button class="panel practice-scenario ${sim.active === id ? 'is-active' : ''}" type="button" data-action="simulation-select" data-id="${id}" aria-pressed="${sim.active === id}"><span class="practice-scenario-icon">${item.icon}</span><span class="badge">${item.level}</span><h3>${item.title}</h3><p class="muted">${item.description}</p></button>`).join('')}</div>
    <section class="panel practice-card practice-conversation"><div class="practice-toolbar"><div><p class="eyebrow">${scenario.level} · CONVERSATION SIMULATOR</p><h2>${scenario.title}</h2></div>${button('Start again', 'simulation-restart')}</div>
      ${sim.history.length ? `<details class="practice-details"><summary>Your conversation so far · ${sim.history.length} ${sim.history.length === 1 ? 'reply' : 'replies'}</summary><div class="practice-history">${sim.history.map(turn => `<div><p class="muted">${escapeHTML(turn.speaker)}: ${escapeHTML(turn.line)}</p><p><strong>You:</strong> ${escapeHTML(turn.reply)}</p></div>`).join('')}</div></details>` : ''}
      ${node.done ? `<div class="practice-result"><span class="practice-big-icon">✦</span><h2>Conversation complete!</h2><p>${node.line}</p><p class="muted">${sim.score} of ${sim.history.length} replies used an effective conversation strategy. Every repair is practice, too.</p><div class="practice-actions">${button('Practise this conversation again', 'simulation-restart', 'primary')}${button('Try speaking practice', 'go-speaking')}</div></div>` : `<div class="practice-dialogue"><span class="badge">${node.speaker}</span><h3>${node.line}</h3></div><p class="eyebrow">HOW WOULD YOU RESPOND?</p><div class="practice-choices">${node.choices.map((choice, i) => `<button type="button" class="practice-choice ${sim.feedback?.index === i ? 'is-selected' : ''}" data-action="simulation-reply" data-index="${i}"${sim.feedback ? ' disabled' : ''}><span class="practice-choice-number">${String.fromCharCode(65 + i)}</span><span>${choice.text}</span><span aria-hidden="true">↗</span></button>`).join('')}</div>${sim.feedback ? `<div class="practice-feedback ${sim.feedback.good ? 'is-positive' : ''}" role="status"><h3>${sim.feedback.good ? 'That works well.' : 'A chance to make it clearer.'}</h3><p>${escapeHTML(sim.feedback.text)}</p>${button('Continue conversation →', 'simulation-next', 'primary')}</div>` : ''}`}
    </section>`;
}

function renderQuestions(type, questions, data) {
  return `<div class="practice-question-list">${questions.map((item, i) => `<fieldset class="practice-question"><legend><span class="badge">${i + 1}</span> ${item.q}</legend>${item.options.map((option, j) => `<label class="practice-answer ${data.submitted && j === item.answer ? 'is-correct' : ''} ${data.submitted && data.answers[i] === j && j !== item.answer ? 'is-incorrect' : ''}"><input type="radio" name="${type}-q-${i}" value="${j}" data-input="ielts-answer" data-type="${type}" data-question="${i}"${checked(data.answers[i] === j)}${data.submitted ? ' disabled' : ''}><span>${option}</span>${data.submitted && j === item.answer ? '<span class="practice-answer-mark">✓</span>' : ''}</label>`).join('')}${data.submitted ? `<p class="practice-explanation">${escapeHTML(item.explanation)}</p>` : ''}</fieldset>`).join('')}</div>`;
}

function renderTestResults(type, questions, data) {
  const correct = questions.filter((item, i) => data.answers[i] === item.answer).length;
  return data.submitted ? `<div class="practice-feedback is-positive" role="status"><h3>${correct} of ${questions.length} correct</h3><p>Review the explanations below each question. This short practice result is not an IELTS band score.</p>${button('Try again', `ielts-${type}-reset`)}</div>` : `<div class="practice-toolbar"><p class="muted" data-answer-progress>${Object.keys(data.answers).length} of ${questions.length} answered</p>${button('Check my answers', `ielts-${type}-submit`, 'primary')}</div>`;
}

function renderIelts(state, p) {
  const ielts = p.ielts;
  const tabs = ['reading', 'listening', 'writing', 'speaking'];
  let content = '';
  if (ielts.tab === 'reading') {
    const data = ielts.reading;
    content = `<div class="practice-toolbar panel practice-card"><div><span class="badge">READING · 6 QUESTIONS</span><h2>A library for everyone</h2><p class="muted">Read the passage, then choose one answer for each question. Optional practice timer: 10 minutes.</p></div><div class="practice-timer"><strong data-timer="reading">${timeLabel(data.remaining)}</strong>${!data.submitted ? button(data.running ? 'Pause timer' : 'Start timer', 'ielts-reading-timer') : ''}</div></div><div class="grid-2 practice-reading-grid"><article class="panel practice-card practice-passage"><p class="eyebrow">READING PASSAGE</p><h2>A library for everyone</h2>${readingPassage.map((paragraph, i) => `<p><span class="muted">${i + 1}.</span> ${paragraph}</p>`).join('')}</article><section class="panel practice-card"><h2>Show what you understood</h2>${renderQuestions('reading', readingQuestions, data)}${renderTestResults('reading', readingQuestions, data)}</section></div>`;
  } else if (ielts.tab === 'listening') {
    const data = ielts.listening;
    content = `<div class="grid-2"><section class="panel practice-card"><span class="badge">LISTENING · 5 QUESTIONS</span><h2>A weekend workshop</h2><p class="practice-prompt">Listen to a community centre announcement and choose the correct details.</p><div class="practice-tip"><strong>Before you listen</strong><p>Read the questions first. Pay attention to times, places, and corrections. Take notes as you listen.</p></div><div class="practice-actions">${button('▶ Play announcement', 'ielts-listen', 'primary')}${button('Play slowly', 'ielts-listen-slow')}${button('Stop audio', 'stop-audio')}</div><p class="muted">Synthetic speech from your browser · replay as often as you like. This is a listening skill exercise, not an official test recording.</p><p role="status" class="muted" data-audio-status></p><label class="field-label" for="listening-notes">Your listening notes</label><textarea class="field" id="listening-notes" rows="5" data-input="listening-notes" placeholder="Times, numbers, places…">${escapeHTML(state.drafts['ielts-listening-notes'] || '')}</textarea>${button(data.showTranscript ? 'Hide transcript' : 'Read the transcript', 'ielts-transcript')}${data.showTranscript ? `<div class="practice-sample"><h3>Announcement transcript</h3><p>${listeningScript}</p></div>` : ''}</section><section class="panel practice-card"><h2>Listen for the details</h2>${renderQuestions('listening', listeningQuestions, data)}${renderTestResults('listening', listeningQuestions, data)}</section></div>`;
  } else if (ielts.tab === 'writing') {
    const data = ielts.writing;
    const task = Number(data.task) === 2 ? 2 : 1;
    const draft = state.drafts[`ielts-writing-${task}`] || '';
    const taskData = task === 1 ? { min: 150, max: 220 } : { min: 250, max: 350 };
    content = `<div class="practice-tabs">${pill('Task 1 · Describe information', task === 1, 'ielts-writing-task', 'data-task="1"')}${pill('Task 2 · Develop an argument', task === 2, 'ielts-writing-task', 'data-task="2"')}</div><div class="grid-2"><section class="panel practice-card"><span class="badge">ACADEMIC WRITING PRACTICE · TASK ${task}</span><h2>${task === 1 ? 'How people travel to work' : 'Learning beyond the classroom'}</h2>${task === 1 ? `<p>The table shows how employees at one company travelled to work in 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p><div class="practice-table-wrap"><table class="practice-table"><caption>Share of employees by main travel method</caption><thead><tr><th scope="col">Method</th><th scope="col">2015</th><th scope="col">2025</th></tr></thead><tbody><tr><th scope="row">Car</th><td>55%</td><td>35%</td></tr><tr><th scope="row">Public transport</th><td>25%</td><td>30%</td></tr><tr><th scope="row">Bicycle</th><td>10%</td><td>20%</td></tr><tr><th scope="row">Walking</th><td>10%</td><td>15%</td></tr></tbody></table></div><p class="muted">Fictional practice data. Write at least 150 words. Suggested time: 20 minutes.</p><div class="practice-tip"><strong>Plan your overview</strong><p>What increased? What decreased? Which method remained most common? Describe the data without inventing reasons for the changes.</p></div>` : `<p class="practice-prompt">Some people believe universities should focus on knowledge related to a future career. Others think students should also study subjects outside their main field. Discuss both views and give your own opinion.</p><p class="muted">Write at least 250 words. Suggested time: 40 minutes.</p><div class="practice-tip"><strong>Plan before you write</strong><p>Choose a clear position. Give each view a fair explanation, support your ideas with examples, and connect your conclusion to the question.</p></div>`}<details class="practice-details"><summary>What should I review?</summary><ul><li>Have I addressed every part of the task?</li><li>Are my ideas organised into clear paragraphs?</li><li>Do my vocabulary and grammar express my meaning accurately?</li><li>Have I checked repeated words, sentence endings, and spelling?</li></ul><p class="muted">These are self-review questions. No automated IELTS band is provided.</p></details></section><section class="panel practice-card"><div class="practice-toolbar"><h2>Your response</h2><span class="badge" data-ielts-writing-count>${words(draft)} words</span></div><div class="practice-toolbar"><p class="muted">Optional practice timer</p><div class="practice-timer"><strong data-timer="writing">${timeLabel(data.remaining)}</strong>${button(data.running ? 'Pause' : 'Start', 'ielts-writing-timer')}${button('Reset', 'ielts-writing-reset-timer')}</div></div><label class="sr-only" for="ielts-writing">IELTS practice writing response</label><textarea id="ielts-writing" class="field practice-textarea" rows="17" data-input="ielts-writing" placeholder="Plan, write, and revise. Your draft saves automatically…">${escapeHTML(draft)}</textarea><p class="muted">Saved on this device · aim for at least ${taskData.min} words</p><div class="practice-actions">${button('Review basic writing checks', 'ielts-writing-check')}${button('Finish practice  +40 XP', 'ielts-writing-finish', 'primary')}</div>${data.feedback ? renderFeedback(data.feedback) : ''}</section></div>`;
  } else {
    const data = ielts.speaking;
    const part = interviewParts[data.part] || interviewParts[0];
    content = `<div class="practice-tabs">${interviewParts.map((item, i) => pill(item.label, data.part === i, 'ielts-speaking-part', `data-part="${i}"`)).join('')}</div><div class="grid-2"><section class="panel practice-card"><span class="badge">SPEAKING INTERVIEW PRACTICE</span><h2>${part.label}</h2><p class="practice-prompt">${part.prompt}</p><div class="practice-actions">${button('Listen to the question', 'ielts-speak-prompt')}${button('Stop audio', 'stop-audio')}</div><div class="practice-tip"><strong>A useful approach</strong><p>${part.notes}</p></div><p class="muted">This is one short cue for each interview part. It is an abbreviated rehearsal, not a complete IELTS speaking test.</p></section><section class="panel practice-card"><p class="eyebrow">THINK. SPEAK. REFLECT.</p><div class="practice-toolbar"><h2>Your practice turn</h2><div class="practice-timer"><strong data-timer="speaking">${timeLabel(data.remaining)}</strong>${button(data.running ? 'Pause' : 'Start speaking timer', 'ielts-speaking-timer')}${button('Reset', 'ielts-speaking-reset-timer')}</div></div><label class="field-label" for="ielts-speaking-notes">Planning notes and reflections</label><textarea id="ielts-speaking-notes" class="field practice-textarea" rows="9" data-input="ielts-speaking-notes" placeholder="Jot down ideas, speak aloud, then note one thing to improve…">${escapeHTML(state.drafts[`ielts-speaking-${part.id}`] || '')}</textarea><p class="muted">Use short notes rather than reading a prepared answer. For voice recording and dictation, open the Speaking Studio.</p><div class="practice-actions">${button('Finish this speaking cue  +25 XP', 'ielts-speaking-finish', 'primary')}${button('Open Speaking Studio', 'go-speaking')}</div></section></div>`;
  }
  return `${intro('YOUR NEXT BIG STEP', 'A clearer path to IELTS.', 'Practise the four skills, build good habits, and get comfortable with the question styles.')}<div class="practice-notice"><strong>Independent, unofficial practice.</strong> These shortened activities are original learning exercises. Fluently is not affiliated with IELTS and does not issue official results or predict a band score.</div><div class="practice-tabs" role="group" aria-label="IELTS skill">${tabs.map(tab => pill(`${({ reading: '▤', listening: '◖', writing: '✎', speaking: '◌' })[tab]} ${tab[0].toUpperCase() + tab.slice(1)}`, ielts.tab === tab, 'ielts-tab', `data-tab="${tab}"`)).join('')}</div>${content}`;
}

export function renderPractice(view, state) {
  const p = getState(state);
  const body = ({ speaking: renderSpeaking, writing: renderWriting, simulations: renderSimulations, ielts: renderIelts })[view];
  return `<div class="practice-page practice-content" data-practice-view="${escapeHTML(view)}">${body ? body(state, p) : ''}</div>`;
}

export function bindPractice(root, ctx) {
  const view = root.querySelector('[data-practice-view]')?.dataset.practiceView;
  if (!view) return () => {};
  const p = getState(ctx.state);
  // Timers are optional practice aids. A new page visit always starts paused.
  const timersWereRunning = ['reading', 'writing', 'speaking'].some(type => p.ielts[type].running);
  for (const type of ['reading', 'writing', 'speaking']) p.ielts[type].running = false;
  let disposed = false;
  let recorder = null;
  let stream = null;
  let recognition = null;
  let recognitionBase = '';
  const save = () => ctx.save();
  const pauseRecordings = () => root.querySelectorAll?.('audio').forEach(audio => audio.pause());
  const paint = () => { if (!disposed) { pauseRecordings(); root.innerHTML = renderPractice(view, ctx.state); } };
  const toast = message => ctx.toast(message);
  const speak = (text, rate = 0.92) => {
    if (!('speechSynthesis' in window)) { toast('Audio playback is unavailable in this browser. You can read the prompt or transcript instead.'); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(item => item.lang === 'en-GB') || voices.find(item => item.lang.startsWith('en'));
    if (voice) utterance.voice = voice;
    utterance.onerror = event => { if (!disposed && event.error !== 'interrupted' && event.error !== 'canceled') toast('Audio could not play. Use the written prompt or transcript.'); };
    window.speechSynthesis.speak(utterance);
    const status = root.querySelector('[data-audio-status]');
    if (status) status.textContent = 'Playing the announcement. You can stop or replay it at any time.';
  };
  const releaseStream = () => { stream?.getTracks().forEach(track => track.stop()); stream = null; };
  const updateRecordButtons = () => {
    const start = root.querySelector('[data-action="record-start"], [data-action="record-stop"]');
    if (start) { start.dataset.action = runtime.recording ? 'record-stop' : 'record-start'; start.textContent = runtime.recording ? '■ Stop recording' : '● Record my voice'; }
    const status = root.querySelector('[data-record-status]');
    if (status) status.textContent = runtime.recording ? 'Recording… Your microphone is active.' : runtime.microphoneError || 'Recording stopped. Listen back and notice one thing to improve.';
  };
  const stopRecording = () => { if (recorder?.state === 'recording') recorder.stop(); runtime.recording = false; releaseStream(); updateRecordButtons(); };
  const startRecording = async () => {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { runtime.microphoneError = 'Recording is unavailable in this browser. Try a current browser on HTTPS, or practise aloud and type your notes.'; updateRecordButtons(); return; }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (disposed) { releaseStream(); return; }
      const chunks = [];
      const recordingPromptId = p.speaking.promptId;
      recorder = new MediaRecorder(stream);
      const activeRecorder = recorder;
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = () => {
        if (disposed || recordingPromptId !== p.speaking.promptId) return;
        if (runtime.audioURL) URL.revokeObjectURL(runtime.audioURL);
        runtime.audioURL = URL.createObjectURL(new Blob(chunks, { type: activeRecorder.mimeType || 'audio/webm' }));
        runtime.audioPromptId = recordingPromptId;
        const container = root.querySelector('[data-record-player]');
        if (container) { container.replaceChildren(); const player = document.createElement('audio'); player.controls = true; player.src = runtime.audioURL; player.style.width = '100%'; player.setAttribute('aria-label', 'Your speaking recording'); container.append(player); }
        updateRecordButtons();
      };
      recorder.onerror = () => { runtime.microphoneError = 'The recording was interrupted. Please try again, or use typed notes.'; stopRecording(); };
      recorder.start();
      runtime.recording = true;
      runtime.microphoneError = '';
      updateRecordButtons();
    } catch (error) {
      releaseStream(); runtime.recording = false;
      runtime.microphoneError = error.name === 'NotAllowedError' ? 'Microphone permission was not granted. You can allow it in browser settings, or practise aloud and type your notes.' : error.name === 'NotFoundError' ? 'No microphone was found. You can practise aloud and type your notes instead.' : 'The microphone could not start. Check that it is connected and available, or use typed notes.';
      updateRecordButtons();
    }
  };
  const stopRecognition = () => { recognition?.stop(); runtime.recognizing = false; };
  const startRecognition = () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) { toast('Dictation is unavailable. You can type your transcript.'); return; }
    if (runtime.recognizing) return;
    recognitionBase = p.speaking.transcripts[p.speaking.promptId] || '';
    const recognitionPromptId = p.speaking.promptId;
    recognition = new Recognition(); recognition.lang = 'en-US'; recognition.interimResults = true; recognition.continuous = true;
    runtime.recognitionError = ''; runtime.recognizing = true;
    const update = () => {
      const control = root.querySelector('[data-action="dictation-start"], [data-action="dictation-stop"]');
      if (control) { control.dataset.action = runtime.recognizing ? 'dictation-stop' : 'dictation-start'; control.textContent = runtime.recognizing ? 'Stop dictation' : 'Use voice dictation'; }
      const status = root.querySelector('[data-dictation-status]'); if (status) status.textContent = runtime.recognitionError || (runtime.recognizing ? 'Listening… Speak clearly. Your browser’s speech service creates the transcript.' : 'Dictation stopped. Your transcript is saved.');
    };
    recognition.onresult = event => {
      if (disposed || recognitionPromptId !== p.speaking.promptId) return;
      let finalText = '', interimText = '';
      for (let i = 0; i < event.results.length; i++) { if (event.results[i].isFinal) finalText += `${event.results[i][0].transcript} `; else interimText += `${event.results[i][0].transcript} `; }
      const transcript = `${recognitionBase}${recognitionBase ? ' ' : ''}${finalText}`.trim();
      p.speaking.transcripts[p.speaking.promptId] = transcript; save();
      const field = root.querySelector('[data-input="speaking-transcript"]'); if (field) field.value = `${transcript} ${interimText}`.trim();
      const count = root.querySelector('[data-speaking-count]'); if (count) count.textContent = `${words(transcript)} words · autosaved on this device`;
    };
    recognition.onerror = event => { runtime.recognitionError = event.error === 'not-allowed' ? 'Dictation permission was not granted. You can type your transcript instead.' : event.error === 'no-speech' ? 'No speech was detected. Try again or type your transcript.' : 'Dictation stopped or could not connect. Your saved transcript is safe; you can continue typing.'; runtime.recognizing = false; update(); };
    recognition.onend = () => { runtime.recognizing = false; if (!disposed) update(); };
    try { recognition.start(); update(); } catch { runtime.recognizing = false; runtime.recognitionError = 'Dictation could not start. Please try again or type your notes.'; update(); }
  };
  const resetSimulation = id => { p.simulations = { active: id, node: scenarios[id].start, history: [], score: 0, feedback: null }; save(); paint(); };
  const submitTest = (type, automatic = false) => {
    const questions = type === 'reading' ? readingQuestions : listeningQuestions;
    const data = p.ielts[type];
    if (data.submitted) return;
    if (!automatic && Object.keys(data.answers).length < questions.length) { toast(`Answer all ${questions.length} questions first. You have answered ${Object.keys(data.answers).length}.`); return; }
    data.submitted = true; data.running = false;
    const score = questions.filter((question, i) => data.answers[i] === question.answer).length;
    save(); ctx.awardActivity(`ielts-${type}`, 35, `${type === 'reading' ? 'Reading' : 'Listening'} practice: ${score}/${questions.length} correct`); paint();
    if (automatic) toast('Time is up. Your answers have been checked; unanswered questions count as incorrect.');
  };

  const onClick = async event => {
    const target = event.target.closest('[data-action]');
    if (!target || !root.contains(target) || target.disabled) return;
    const action = target.dataset.action;
    const speaking = speakingPrompts.find(item => item.id === p.speaking.promptId) || speakingPrompts[0];
    const writing = writingTasks.find(item => item.id === p.writing.taskId) || writingTasks[0];
    if (action === 'speak-prompt') speak(speaking.prompt);
    else if (action === 'speak-example') speak(speaking.example);
    else if (action === 'stop-audio') { window.speechSynthesis?.cancel(); root.querySelectorAll('audio').forEach(audio => audio.pause()); const status = root.querySelector('[data-audio-status]'); if (status) status.textContent = 'Audio stopped.'; }
    else if (action === 'record-start') { target.disabled = true; try { await startRecording(); } finally { if (!disposed) target.disabled = false; } }
    else if (action === 'record-stop') stopRecording();
    else if (action === 'dictation-start') startRecognition();
    else if (action === 'dictation-stop') stopRecognition();
    else if (action === 'speaking-finish') {
      if (runtime.recording) { stopRecording(); toast('Recording saved. Listen back, check a reflection, then finish your practice.'); return; }
      const transcript = p.speaking.transcripts[speaking.id] || '';
      if (words(transcript) < 8 && !(runtime.audioURL && runtime.audioPromptId === speaking.id)) { toast('Add at least a short transcript or make a voice recording before finishing.'); return; }
      const reflections = p.speaking.reflections[speaking.id] || {};
      if (!Object.values(reflections).some(Boolean)) { toast('Check one reflection below after listening back or reviewing your notes.'); return; }
      ctx.awardActivity(`speaking-${speaking.id}`, 25, `Speaking practice: ${speaking.title}`);
    } else if (action === 'writing-task') { p.writing.taskId = target.dataset.id; p.writing.sample = false; save(); paint(); }
    else if (action === 'writing-sample') { p.writing.sample = !p.writing.sample; save(); paint(); }
    else if (action === 'writing-check') {
      const draft = ctx.state.drafts[`writing-${writing.id}`] || '';
      if (!draft.trim()) { toast('Write a few sentences first, then check your draft.'); return; }
      runtime.writingFeedback = { id: writing.id, notes: writingFeedback(draft, writing) }; paint();
    } else if (action === 'writing-finish') {
      const draft = ctx.state.drafts[`writing-${writing.id}`] || '';
      if (words(draft) < writing.min) { toast(`Keep going: aim for at least ${writing.min} words for this task. You have ${words(draft)}.`); return; }
      const checklist = p.writing.checklists[writing.id] || {};
      if (writing.tips.some((_, i) => !checklist[i])) { toast('Review your draft against all three checklist points before finishing.'); return; }
      ctx.awardActivity(`writing-${writing.id}`, 30, `Writing: ${writing.genre}`);
    } else if (action === 'simulation-select') resetSimulation(target.dataset.id);
    else if (action === 'simulation-restart') resetSimulation(p.simulations.active);
    else if (action === 'simulation-reply') {
      const sim = p.simulations;
      if (sim.feedback) return;
      const scenario = scenarios[sim.active]; const node = scenario.nodes[sim.node]; const index = Number(target.dataset.index); const choice = node.choices[index];
      if (!choice) return;
      sim.feedback = { index, text: choice.feedback, good: Boolean(choice.good), next: choice.next };
      sim.history.push({ speaker: node.speaker, line: node.line, reply: choice.text }); if (choice.good) sim.score += 1;
      save(); paint();
    } else if (action === 'simulation-next') {
      const sim = p.simulations; if (!sim.feedback) return;
      sim.node = sim.feedback.next; sim.feedback = null; save();
      if (scenarios[sim.active].nodes[sim.node].done) ctx.awardActivity(`simulation-${sim.active}`, 30, `Conversation: ${scenarios[sim.active].title}`);
      paint();
    } else if (action === 'go-speaking') ctx.navigate('speaking');
    else if (action === 'ielts-tab') { window.speechSynthesis?.cancel(); p.ielts.tab = target.dataset.tab; p.ielts.reading.running = false; p.ielts.writing.running = false; p.ielts.speaking.running = false; save(); paint(); }
    else if (action === 'ielts-reading-timer') { const data = p.ielts.reading; if (data.remaining <= 0) { toast('Reset the exercise to start a new timer.'); return; } data.running = !data.running; save(); paint(); }
    else if (action === 'ielts-reading-submit') submitTest('reading');
    else if (action === 'ielts-listening-submit') submitTest('listening');
    else if (action === 'ielts-reading-reset') { p.ielts.reading = { answers: {}, submitted: false, remaining: 600, running: false }; save(); paint(); }
    else if (action === 'ielts-listening-reset') { p.ielts.listening.answers = {}; p.ielts.listening.submitted = false; save(); paint(); }
    else if (action === 'ielts-listen') speak(listeningScript, 0.95);
    else if (action === 'ielts-listen-slow') speak(listeningScript, 0.76);
    else if (action === 'ielts-transcript') { p.ielts.listening.showTranscript = !p.ielts.listening.showTranscript; save(); paint(); }
    else if (action === 'ielts-writing-task') { const task = Number(target.dataset.task); p.ielts.writing.task = task; p.ielts.writing.running = false; p.ielts.writing.remaining = task === 1 ? 1200 : 2400; p.ielts.writing.feedback = null; save(); paint(); }
    else if (action === 'ielts-writing-timer') { const data = p.ielts.writing; if (data.remaining <= 0) { toast('Reset the timer to start again. Your draft will stay saved.'); return; } data.running = !data.running; save(); paint(); }
    else if (action === 'ielts-writing-reset-timer') { p.ielts.writing.remaining = Number(p.ielts.writing.task) === 2 ? 2400 : 1200; p.ielts.writing.running = false; save(); paint(); }
    else if (action === 'ielts-writing-check') { const data = p.ielts.writing; const draft = ctx.state.drafts[`ielts-writing-${data.task}`] || ''; if (!draft.trim()) { toast('Write a few sentences before running the basic checks.'); return; } data.feedback = writingFeedback(draft, Number(data.task) === 1 ? { min: 150, max: 220 } : { min: 250, max: 350 }); save(); paint(); }
    else if (action === 'ielts-writing-finish') { const data = p.ielts.writing; const count = words(ctx.state.drafts[`ielts-writing-${data.task}`] || ''); const min = Number(data.task) === 1 ? 150 : 250; if (count < min) { toast(`Aim for at least ${min} words before finishing. Your draft has ${count}.`); return; } data.running = false; save(); ctx.awardActivity(`ielts-writing-${data.task}`, 40, `IELTS-style Writing Task ${data.task}`); }
    else if (action === 'ielts-speaking-part') { const part = Number(target.dataset.part); p.ielts.speaking.part = part; p.ielts.speaking.remaining = interviewParts[part].seconds; p.ielts.speaking.running = false; save(); paint(); }
    else if (action === 'ielts-speak-prompt') speak(interviewParts[p.ielts.speaking.part].prompt);
    else if (action === 'ielts-speaking-timer') { const data = p.ielts.speaking; if (data.remaining <= 0) { toast('Reset the timer for another practice turn.'); return; } data.running = !data.running; save(); paint(); }
    else if (action === 'ielts-speaking-reset-timer') { p.ielts.speaking.remaining = interviewParts[p.ielts.speaking.part].seconds; p.ielts.speaking.running = false; save(); paint(); }
    else if (action === 'ielts-speaking-finish') { const data = p.ielts.speaking; const part = interviewParts[data.part]; if (words(ctx.state.drafts[`ielts-speaking-${part.id}`]) < 8) { toast('Add a few planning notes or a reflection after speaking, then finish your practice.'); return; } data.running = false; save(); ctx.awardActivity(`ielts-speaking-${part.id}`, 25, `IELTS-style Speaking ${part.label}`); }
  };

  const onInput = event => {
    const target = event.target; const type = target.dataset.input;
    if (!type) return;
    if (type === 'speaking-transcript') { p.speaking.transcripts[p.speaking.promptId] = target.value; const count = root.querySelector('[data-speaking-count]'); if (count) count.textContent = `${words(target.value)} words · autosaved on this device`; }
    else if (type === 'writing-draft') { ctx.state.drafts[`writing-${p.writing.taskId}`] = target.value; const count = root.querySelector('[data-writing-count]'); if (count) count.textContent = `${words(target.value)} words`; runtime.writingFeedback = null; const feedback = root.querySelector('[data-writing-feedback]'); if (feedback) feedback.innerHTML = ''; }
    else if (type === 'listening-notes') ctx.state.drafts['ielts-listening-notes'] = target.value;
    else if (type === 'ielts-writing') { ctx.state.drafts[`ielts-writing-${p.ielts.writing.task}`] = target.value; p.ielts.writing.feedback = null; const count = root.querySelector('[data-ielts-writing-count]'); if (count) count.textContent = `${words(target.value)} words`; }
    else if (type === 'ielts-speaking-notes') ctx.state.drafts[`ielts-speaking-${interviewParts[p.ielts.speaking.part].id}`] = target.value;
    else return;
    save();
  };
  const onChange = event => {
    const target = event.target; const type = target.dataset.input;
    if (type === 'speaking-prompt') { stopRecording(); stopRecognition(); if (runtime.audioURL) { URL.revokeObjectURL(runtime.audioURL); runtime.audioURL = null; } p.speaking.promptId = target.value; save(); paint(); }
    else if (type === 'speaking-reflection') { const id = p.speaking.promptId; p.speaking.reflections[id] ||= {}; p.speaking.reflections[id][target.value] = target.checked; save(); }
    else if (type === 'writing-checklist') { p.writing.checklists[p.writing.taskId] ||= {}; p.writing.checklists[p.writing.taskId][target.value] = target.checked; save(); }
    else if (type === 'ielts-answer') { const data = p.ielts[target.dataset.type]; if (data.submitted) return; data.answers[target.dataset.question] = Number(target.value); save(); const progress = root.querySelector('[data-answer-progress]'); if (progress) progress.textContent = `${Object.keys(data.answers).length} of ${target.dataset.type === 'reading' ? readingQuestions.length : listeningQuestions.length} answered`; }
  };
  let lastTick = Date.now();
  const timer = window.setInterval(() => {
    const now = Date.now(); const elapsed = Math.floor((now - lastTick) / 1000); if (elapsed < 1) return; lastTick += elapsed * 1000;
    for (const type of ['reading', 'writing', 'speaking']) {
      const data = p.ielts[type]; if (!data.running) continue;
      data.remaining = Math.max(0, data.remaining - elapsed);
      const clock = root.querySelector(`[data-timer="${type}"]`); if (clock) clock.textContent = timeLabel(data.remaining);
      if (data.remaining === 0) { data.running = false; if (type === 'reading') submitTest('reading', true); else { save(); paint(); toast(`Your ${type} practice timer has finished. ${type === 'writing' ? 'Your draft is saved and you can keep revising.' : 'Take a moment to reflect on your response.'}`); } }
    }
  }, 1000);
  root.addEventListener('click', onClick); root.addEventListener('input', onInput); root.addEventListener('change', onChange);
  if (timersWereRunning) paint();
  return () => {
    disposed = true; window.clearInterval(timer);
    root.removeEventListener('click', onClick); root.removeEventListener('input', onInput); root.removeEventListener('change', onChange);
    pauseRecordings(); window.speechSynthesis?.cancel(); recognition?.abort(); runtime.recognizing = false;
    if (recorder?.state === 'recording') recorder.stop(); releaseStream(); runtime.recording = false;
    if (runtime.audioURL) { URL.revokeObjectURL(runtime.audioURL); runtime.audioURL = null; }
    for (const type of ['reading', 'writing', 'speaking']) p.ielts[type].running = false;
    save();
  };
}
