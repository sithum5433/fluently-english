// Generated from curriculum/*.json. Run node scripts/compile-curriculum.mjs after editing lessons.

export const LEVELS = [
  {
    "id": "a0",
    "name": "A0",
    "title": "Start from zero",
    "description": "Your first words, greetings, and simple sentences.",
    "color": "#e99a3c",
    "icon": "🌱"
  },
  {
    "id": "a1",
    "name": "A1",
    "title": "Everyday foundations",
    "description": "Handle familiar routines, messages, and conversations.",
    "color": "#6bb98d",
    "icon": "🌿"
  },
  {
    "id": "a2",
    "name": "A2",
    "title": "Find your confidence",
    "description": "Talk about experiences, travel, and what comes next.",
    "color": "#58aab8",
    "icon": "🧭"
  },
  {
    "id": "b1",
    "name": "B1",
    "title": "Independent English",
    "description": "Explain your views and connect ideas with confidence.",
    "color": "#7a94d1",
    "icon": "🪁"
  },
  {
    "id": "b2",
    "name": "B2",
    "title": "Express yourself clearly",
    "description": "Build persuasive arguments and begin IELTS-style work.",
    "color": "#9f83c8",
    "icon": "✨"
  },
  {
    "id": "c1",
    "name": "C1",
    "title": "Advanced expression",
    "description": "Understand nuance and develop academic communication.",
    "color": "#c983a4",
    "icon": "🎯"
  },
  {
    "id": "c2",
    "name": "C2",
    "title": "Precision & mastery",
    "description": "Refine your judgement, flexibility, and professional voice.",
    "color": "#b49a58",
    "icon": "🏆"
  },
  {
    "id": "biz",
    "name": "Biz",
    "title": "Business English",
    "description": "Professional communication for the modern workplace.",
    "color": "#4a90e2",
    "icon": "💼"
  }
];

export const LESSONS = [
  {
    "id": "a0-grammar",
    "level": "a0",
    "skill": "grammar",
    "title": "Hello, I am…",
    "description": "Build your first English sentences with the verb be.",
    "minutes": 8,
    "content": [
      {
        "heading": "Meet the verb be",
        "text": "Use be to give a name, describe a person, or say where someone is. The form changes with the subject: I am, you are, he is, she is, it is, we are, they are. A simple statement normally has a subject and a verb.",
        "examples": [
          "I am Maya.",
          "You are a student.",
          "She is at home."
        ]
      },
      {
        "heading": "Short forms and negatives",
        "text": "In conversation, I am becomes I’m, you are becomes you’re, and she is becomes she’s. To make a negative statement, put not after be. Start a yes-or-no question with be, then the subject. Read each pair aloud to hear the change.",
        "examples": [
          "I’m happy. / I’m not tired.",
          "You are ready. → Are you ready?",
          "Is he a teacher? Yes, he is."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the complete sentence.",
        "options": [
          "I are student.",
          "Am student.",
          "I a student.",
          "I am a student."
        ],
        "answer": 3,
        "explanation": "I takes am. A complete sentence includes the subject I and the verb am."
      },
      {
        "prompt": "Maya and Ben ___ at home.",
        "options": [
          "is",
          "am",
          "are",
          "be"
        ],
        "answer": 2,
        "explanation": "Maya and Ben means they, so use are."
      },
      {
        "prompt": "Which question is correct?",
        "options": [
          "Is you ready?",
          "Are you ready?",
          "You are ready?",
          "Are ready you?"
        ],
        "answer": 1,
        "explanation": "For a standard question with be, put the verb before the subject: Are you ready?"
      }
    ]
  },
  {
    "id": "a0-vocabulary",
    "level": "a0",
    "skill": "vocabulary",
    "title": "Words around you",
    "description": "Name everyday things, people, and numbers.",
    "minutes": 7,
    "content": [
      {
        "heading": "People and things",
        "text": "A noun names a person, place, or thing. Begin with words you can see around you: teacher, student, book, pen, door, and chair. Say the word, point to the thing, then use it in a short sentence. Use a before a consonant sound and an before a vowel sound.",
        "examples": [
          "a book / a teacher",
          "an apple / an egg",
          "This is a chair."
        ]
      },
      {
        "heading": "One or more than one",
        "text": "One book is singular. Two books is plural. Most everyday nouns add s in the plural. Learn numbers from one to ten, then use them to count real objects. Some common nouns change differently: one person becomes two people.",
        "examples": [
          "one pen → three pens",
          "one apple → five apples",
          "one person → two people"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which word names something you can write with?",
        "options": [
          "Chair",
          "Student",
          "Door",
          "Pen"
        ],
        "answer": 3,
        "explanation": "A pen is a tool for writing."
      },
      {
        "prompt": "Choose the correct phrase.",
        "options": [
          "a apple",
          "an book",
          "three book",
          "an apple"
        ],
        "answer": 3,
        "explanation": "Apple begins with a vowel sound, so use an."
      },
      {
        "prompt": "What is the plural of person?",
        "options": [
          "Peoples",
          "People",
          "Persons only",
          "Persones"
        ],
        "answer": 1,
        "explanation": "The usual plural for individual human beings is people: two people."
      }
    ]
  },
  {
    "id": "a0-reading",
    "level": "a0",
    "skill": "reading",
    "title": "Read your first story",
    "description": "Find names, places, and simple facts in a short text.",
    "minutes": 8,
    "content": [
      {
        "heading": "Read for the main idea",
        "text": "Read this short introduction twice: “My name is Ali. I am a student. I live in Kandy. My friend is Sara. She is a teacher.” On your first reading, ask who the text is about. You do not need to translate every word to understand the main idea.",
        "examples": [
          "The text introduces Ali.",
          "Ali is a student.",
          "Sara is Ali’s friend."
        ]
      },
      {
        "heading": "Look for a specific fact",
        "text": "On your second reading, look for one piece of information at a time. Who asks about a person; where asks about a place; what often asks about a thing or job. Go back to the text to check your answer instead of guessing from memory.",
        "examples": [
          "Who is a teacher? Sara.",
          "Where does Ali live? In Kandy.",
          "What is Ali? A student."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "According to the text, who is a student?",
        "options": [
          "Kandy",
          "Ali",
          "The teacher",
          "Sara"
        ],
        "answer": 1,
        "explanation": "The text says, “My name is Ali. I am a student.”"
      },
      {
        "prompt": "Where does Ali live?",
        "options": [
          "Kandy",
          "Colombo",
          "London",
          "The text does not say"
        ],
        "answer": 0,
        "explanation": "Ali says, “I live in Kandy.”"
      },
      {
        "prompt": "Which sentence matches the text?",
        "options": [
          "Ali is a teacher.",
          "Sara is Ali’s sister.",
          "Sara lives in London.",
          "Sara is a teacher."
        ],
        "answer": 3,
        "explanation": "The final sentence describes Sara: “She is a teacher.”"
      }
    ]
  },
  {
    "id": "a0-listening",
    "level": "a0",
    "skill": "listening",
    "title": "Listen: meet a new friend",
    "description": "Hear a greeting and pick out a name and number.",
    "minutes": 7,
    "listeningText": "Hello! My name is Nina. I am a student. I am twenty years old. My class is in room four. Nice to meet you!",
    "content": [
      {
        "heading": "Listen once for the situation",
        "text": "Use the play button to hear Nina’s introduction. First listen without pausing. Is the speaker introducing herself, buying food, or asking for directions? Your first goal is to understand the situation. A greeting such as hello often tells you a conversation is beginning.",
        "examples": [
          "Hello! My name is Nina.",
          "Nice to meet you.",
          "Hi! I’m Ben."
        ]
      },
      {
        "heading": "Listen again for details",
        "text": "On your second listen, focus on a name, age, or room number. Say the numbers four, fourteen, and forty slowly; they are different words. If you miss something in real life, ask the speaker to repeat it. Listening improves through repeated, focused practice.",
        "examples": [
          "My class is in room four.",
          "Could you say that again, please?",
          "How do you spell your name?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the speaker’s name?",
        "options": [
          "Nina",
          "Sara",
          "Tina",
          "Mina"
        ],
        "answer": 0,
        "explanation": "The introduction begins, “My name is Nina.”"
      },
      {
        "prompt": "How old is Nina?",
        "options": [
          "Forty",
          "Two",
          "Twelve",
          "Twenty"
        ],
        "answer": 3,
        "explanation": "She says, “I am twenty years old.”"
      },
      {
        "prompt": "Which room is her class in?",
        "options": [
          "Room four",
          "Room fourteen",
          "Room two",
          "Room forty"
        ],
        "answer": 0,
        "explanation": "The class is in room four. Listen for the whole number."
      }
    ]
  },
  {
    "id": "a0-writing",
    "level": "a0",
    "skill": "writing",
    "title": "Your first three sentences",
    "description": "Use capitals, spaces, and full stops to introduce yourself.",
    "minutes": 10,
    "content": [
      {
        "heading": "Give every sentence a clear shape",
        "text": "Start a sentence with a capital letter and end a statement with a full stop. Leave a space between words. The word I is always capitalized, even in the middle of a sentence. Names and places also begin with capitals. These small habits make your message easy to read.",
        "examples": [
          "My name is Ravi.",
          "I am a student.",
          "I live in Galle."
        ]
      },
      {
        "heading": "Write, read, and check",
        "text": "Write three true sentences: your name, where you live, and one thing about yourself. Read each one aloud. Check that it has a subject and a verb, begins with a capital, and ends with punctuation. You can replace the examples with your own details.",
        "examples": [
          "My name is ___.",
          "I live in ___.",
          "I am happy to learn English."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence uses capitals correctly?",
        "options": [
          "my Name Is Maya.",
          "my name is maya.",
          "My name is maya.",
          "My name is Maya."
        ],
        "answer": 3,
        "explanation": "Capitalize the first word and the person’s name: My name is Maya."
      },
      {
        "prompt": "Choose the best way to finish this statement: “I live in Galle”",
        "options": [
          "I live in Galle?",
          "i live in galle",
          "I live inGalle",
          "I live in Galle."
        ],
        "answer": 3,
        "explanation": "A statement ends with a full stop, and the words need spaces."
      },
      {
        "prompt": "Which is a complete sentence?",
        "options": [
          "My friend.",
          "In Colombo.",
          "A new student.",
          "I am a new student."
        ],
        "answer": 3,
        "explanation": "I am a new student has a subject, I, and a verb, am."
      }
    ]
  },
  {
    "id": "a0-speaking",
    "level": "a0",
    "skill": "speaking",
    "title": "Say hello with confidence",
    "description": "Practice a short, friendly introduction and take turns.",
    "minutes": 8,
    "content": [
      {
        "heading": "Learn a small conversation",
        "text": "You can start speaking with a few useful chunks. A chunk is a group of words you remember together. Say hello, give your name, and ask the other person’s name. Practice slowly first, then say the conversation again with a natural pause after each sentence.",
        "examples": [
          "Hello, I’m Maya. What’s your name?",
          "I’m Sam. Nice to meet you.",
          "Nice to meet you, too."
        ]
      },
      {
        "heading": "Be clear and keep going",
        "text": "You do not need a perfect accent to communicate. Speak at a comfortable speed and make your key words clear. If you do not understand, ask for repetition. Practice your introduction out loud three times, changing one detail each time. If recording is available, listen and notice one thing to improve.",
        "examples": [
          "Sorry, could you repeat that?",
          "I’m from Sri Lanka.",
          "And you?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Someone says, “Nice to meet you.” What is a natural reply?",
        "options": [
          "Where is the door?",
          "I am twenty.",
          "Nice to meet you, too.",
          "It is a pen."
        ],
        "answer": 2,
        "explanation": "Nice to meet you, too is a friendly response when meeting someone."
      },
      {
        "prompt": "You did not understand a name. What can you say?",
        "options": [
          "Good night.",
          "I know everything.",
          "You are wrong.",
          "Sorry, could you repeat that?"
        ],
        "answer": 3,
        "explanation": "Politely ask the person to repeat the information."
      },
      {
        "prompt": "Which question invites the other person to introduce themselves?",
        "options": [
          "My name is Sam.",
          "What’s your name?",
          "This is my bag.",
          "I am here."
        ],
        "answer": 1,
        "explanation": "What’s your name? asks the other person for their name."
      }
    ]
  },
  {
    "id": "a0-my-your-his-her",
    "level": "a0",
    "skill": "grammar",
    "title": "My bag, your book",
    "description": "Use subject words and possessive words to identify people and belongings.",
    "minutes": 10,
    "content": [
      {
        "heading": "Choose the person word",
        "text": "A subject word tells us who a sentence is about. Use I for yourself and you for the person you are speaking to. Use he or she for a person when those are their pronouns. Use we for a group including you.",
        "examples": [
          "I am here.",
          "You are my teacher.",
          "They are my friends."
        ]
      },
      {
        "heading": "Show who something belongs to",
        "text": "Put my, your, his, her, our, or their before a thing to show its owner. These words do not change when the thing is plural. Compare a person word with an owner word. Her book means the book belonging to her.",
        "examples": [
          "She is Ana. This is her book.",
          "We have our bags.",
          "They have their pencils."
        ]
      },
      {
        "heading": "Build a small classroom conversation",
        "text": "Choose three things in your room and name their owners. First say the person, then the belonging. Ask a partner about one item and listen to their reply. Do not add a or the directly before my or your in these simple phrases.",
        "examples": [
          "I am Ravi. This is my pen.",
          "Is this your notebook?",
          "Yes, it is my notebook."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Ana has a bag. This is ___ bag.",
        "options": [
          "she",
          "they",
          "he",
          "her"
        ],
        "answer": 3,
        "explanation": "Her goes before a noun to show that the bag belongs to Ana."
      },
      {
        "prompt": "Which sentence uses an owner word correctly?",
        "options": [
          "We have our books.",
          "We have we books.",
          "We have us books.",
          "We have ours books."
        ],
        "answer": 0,
        "explanation": "Our goes before books; we is a subject word."
      },
      {
        "prompt": "You are talking about yourself. Which sentence fits?",
        "options": [
          "This is my pen.",
          "This is I pen.",
          "This is me pen.",
          "This is the my pen."
        ],
        "answer": 0,
        "explanation": "Use my before a belonging. Do not put the before my."
      }
    ]
  },
  {
    "id": "a0-this-that-these-those",
    "level": "a0",
    "skill": "grammar",
    "title": "This, that, and more than one",
    "description": "Point to nearby and distant things using articles and demonstratives.",
    "minutes": 10,
    "content": [
      {
        "heading": "Point to one thing",
        "text": "Use this for one thing near you and that for one thing farther away. Use is after both words when identifying a single thing. Point while saying the sentence so that distance and meaning work together. Start with objects you can easily see.",
        "examples": [
          "This is a cup.",
          "That is a door.",
          "Is this a key?"
        ]
      },
      {
        "heading": "Point to two or more things",
        "text": "Use these for several things near you and those for several things farther away. Use are and a plural noun. Many plurals add s, but some words change differently. A and an only introduce one countable thing, so do not use them before plural nouns.",
        "examples": [
          "These are cups.",
          "Those are children.",
          "a key → two keys"
        ]
      },
      {
        "heading": "Choose a or an by sound",
        "text": "Use a before a consonant sound and an before a vowel sound when introducing one thing. Listen to the beginning of the spoken word. Read a short description of your desk, then change from one object to several objects and check the verb.",
        "examples": [
          "This is an orange.",
          "That is a pencil.",
          "These are oranges."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You hold two keys. What can you say?",
        "options": [
          "This are keys.",
          "These are keys.",
          "These is a key.",
          "That is keys."
        ],
        "answer": 1,
        "explanation": "Several nearby things take these, are, and a plural noun."
      },
      {
        "prompt": "One chair is on the other side of the room. Choose the best sentence.",
        "options": [
          "These is a chair.",
          "Those is chair.",
          "That is a chair.",
          "This are chairs."
        ],
        "answer": 2,
        "explanation": "That points to one thing farther away, and one chair takes is."
      },
      {
        "prompt": "Which phrase correctly introduces one orange?",
        "options": [
          "a orange",
          "an oranges",
          "an orange",
          "a oranges"
        ],
        "answer": 2,
        "explanation": "Orange begins with a vowel sound, so use an with the singular noun."
      }
    ]
  },
  {
    "id": "a0-there-is-room",
    "level": "a0",
    "skill": "grammar",
    "title": "What is in the room?",
    "description": "Say what exists and describe simple positions.",
    "minutes": 10,
    "content": [
      {
        "heading": "Introduce something you can see",
        "text": "Use there is to say that one thing is present in a place. Use there are for two or more things. There does not name a person; it introduces what exists. Follow it with the thing and, when useful, its position.",
        "examples": [
          "There is a clock.",
          "There are two windows.",
          "There is a bag on the chair."
        ]
      },
      {
        "heading": "Put things in a position",
        "text": "In means inside a space. On means touching a surface, often the top. Under means below something. These short words can completely change a message. Move a pen around a box and describe each position slowly, checking that your words match what you see.",
        "examples": [
          "The pen is in the box.",
          "The pen is on the box.",
          "The pen is under the box."
        ]
      },
      {
        "heading": "Ask and answer about a room",
        "text": "Start a question with is there for one thing or are there for several things. A short answer can use yes or no plus the matching form of be. Draw a simple room and use questions to help another learner draw the same room.",
        "examples": [
          "Is there a table? Yes, there is.",
          "Are there two doors? No, there aren’t.",
          "There is a lamp on the table."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the correct sentence about two windows.",
        "options": [
          "There are two windows.",
          "There is two windows.",
          "There am two windows.",
          "There be two windows."
        ],
        "answer": 0,
        "explanation": "Two windows is plural, so use there are."
      },
      {
        "prompt": "A key is inside a bag. Where is it?",
        "options": [
          "On the bag.",
          "In the bag.",
          "Under the bag.",
          "Behind the bag."
        ],
        "answer": 1,
        "explanation": "In describes a position inside something."
      },
      {
        "prompt": "Which question asks about one table?",
        "options": [
          "Are there a table?",
          "There a table is?",
          "Is there a table?",
          "Am there table?"
        ],
        "answer": 2,
        "explanation": "Use is there followed by the singular noun phrase a table."
      }
    ]
  },
  {
    "id": "a0-colours-and-clothes",
    "level": "a0",
    "skill": "vocabulary",
    "title": "Colours and clothes you wear",
    "description": "Describe familiar clothes with a colour and a simple noun.",
    "minutes": 10,
    "content": [
      {
        "heading": "Name useful clothes",
        "text": "Learn clothes by pointing to real items: a shirt, a dress, a skirt, a coat, and shoes. Say each word with the item in your hand or in a picture. Some clothes usually appear as plurals, such as trousers and shorts.",
        "examples": [
          "This is a shirt.",
          "These are shoes.",
          "I have a coat."
        ]
      },
      {
        "heading": "Put the colour before the thing",
        "text": "A colour describes a noun. In a simple English phrase, place the colour before the noun: a blue shirt. The colour word stays the same for one thing and several things. Learn red, blue, green, yellow, black, and white with objects around you.",
        "examples": [
          "a green dress",
          "two black shoes",
          "a white shirt"
        ]
      },
      {
        "heading": "Use a description to find something",
        "text": "Imagine choosing clothes from a bag. Name the item and its colour so a partner can find it. If two items look similar, add a number or point clearly. Make a small drawing and label each item with the full phrase rather than a colour alone.",
        "examples": [
          "My coat is blue.",
          "Where is the red shirt?",
          "These are my black shoes."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which phrase puts the colour in the usual position?",
        "options": [
          "a shirt blue",
          "blue a shirt",
          "a blue shirt",
          "a blue shirts"
        ],
        "answer": 2,
        "explanation": "A colour normally goes before the noun: a blue shirt."
      },
      {
        "prompt": "Which item do you normally wear on your feet?",
        "options": [
          "Shoes",
          "A coat",
          "A skirt",
          "A shirt"
        ],
        "answer": 0,
        "explanation": "Shoes cover your feet."
      },
      {
        "prompt": "Choose the correct description of two green coats.",
        "options": [
          "two greens coats",
          "two green coats",
          "two green coat",
          "a two green coats"
        ],
        "answer": 1,
        "explanation": "The noun becomes plural, but the colour word stays green."
      }
    ]
  },
  {
    "id": "a0-body-and-feelings",
    "level": "a0",
    "skill": "vocabulary",
    "title": "Your body and simple feelings",
    "description": "Name body parts and say how you feel in a clear sentence.",
    "minutes": 10,
    "content": [
      {
        "heading": "Start with visible body parts",
        "text": "Learn head, face, eye, ear, hand, arm, leg, and foot. Point to each part while saying the word. A person usually has two hands and two feet. Notice that foot changes to feet when you mean more than one.",
        "examples": [
          "This is my hand.",
          "I have two ears.",
          "one foot, two feet"
        ]
      },
      {
        "heading": "Use be for simple feelings",
        "text": "Say I am happy, sad, tired, hungry, or thirsty to describe how you feel. Hungry means you want food; thirsty means you want a drink. These words describe a person, so put them after am, is, or are in your first sentences.",
        "examples": [
          "I am thirsty.",
          "She is tired.",
          "We are happy."
        ]
      },
      {
        "heading": "Connect a feeling to a small request",
        "text": "A feeling can explain what you need. Say your feeling, then make a simple polite request. Practice choosing the right word for a picture or real situation. Avoid assuming another person’s feelings just from a picture; ask them when you can.",
        "examples": [
          "I am thirsty. Water, please.",
          "Are you tired?",
          "Yes, I am. A chair, please."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You want a drink. Which sentence fits?",
        "options": [
          "I am an ear.",
          "I am hungry.",
          "I am thirsty.",
          "I am a hand."
        ],
        "answer": 2,
        "explanation": "Thirsty describes wanting or needing a drink."
      },
      {
        "prompt": "What is the usual plural of foot?",
        "options": [
          "Foots",
          "Feet",
          "Feets",
          "Footes"
        ],
        "answer": 1,
        "explanation": "Foot has the irregular plural feet."
      },
      {
        "prompt": "Which question asks about a feeling?",
        "options": [
          "Are you tired?",
          "Is this your shoe?",
          "Where is the pen?",
          "What colour is it?"
        ],
        "answer": 0,
        "explanation": "Tired describes how a person feels."
      }
    ]
  },
  {
    "id": "a0-days-dates-numbers",
    "level": "a0",
    "skill": "vocabulary",
    "title": "Days, numbers, and simple times",
    "description": "Recognize weekday names, useful numbers, and clock times.",
    "minutes": 10,
    "content": [
      {
        "heading": "Learn days in a useful order",
        "text": "A week has seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. Day names begin with capital letters. Use on before a named day. Say your real study days so the words connect to a routine you understand.",
        "examples": [
          "I study on Monday.",
          "The class is on Friday.",
          "Saturday and Sunday are weekend days in many places."
        ]
      },
      {
        "heading": "Distinguish numbers that look similar",
        "text": "Build numbers from eleven to twenty, then learn twenty, thirty, and forty. Thirteen and thirty are different numbers. Write the digits beside each word and say them slowly. For phone numbers, say one digit at a time rather than combining them into a large number.",
        "examples": [
          "thirteen = 13",
          "thirty = 30",
          "Phone ending 2 8 4: two, eight, four."
        ]
      },
      {
        "heading": "Give an easy clock time",
        "text": "Use at before a clock time. O’clock names an exact hour, such as three o’clock. For this lesson, read digital times as separate numbers when needed: three fifteen. Draw three clocks and write one clear sentence for each. Add a day to make a complete plan.",
        "examples": [
          "The class is at two o’clock.",
          "Meet me on Tuesday at four.",
          "The bus is at three fifteen."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which number is thirty?",
        "options": [
          "30",
          "13",
          "3",
          "33"
        ],
        "answer": 0,
        "explanation": "Thirty means 30; thirteen means 13."
      },
      {
        "prompt": "Choose the correct phrase.",
        "options": [
          "in Monday",
          "at Monday",
          "Monday on",
          "on Monday"
        ],
        "answer": 3,
        "explanation": "Use on before the name of a day."
      },
      {
        "prompt": "Which sentence gives a clock time correctly?",
        "options": [
          "The class is on three o’clock.",
          "The class is at three o’clock.",
          "The class is in three o’clock.",
          "The class is three on o’clock."
        ],
        "answer": 1,
        "explanation": "Use at before a clock time."
      }
    ]
  },
  {
    "id": "a0-signs-at-centre",
    "level": "a0",
    "skill": "reading",
    "title": "Read signs at a learning centre",
    "description": "Use short signs to choose the correct action.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the signs",
        "text": "At the learning centre, you see these signs: “WELCOME. Office: room 1. English class: room 3. Toilets: beside room 2. Please close the classroom door. No food in the computer room.” Read slowly and connect each message with a place or action.",
        "examples": [
          "The office is in room 1.",
          "English class is in room 3.",
          "Food is not allowed in the computer room."
        ]
      },
      {
        "heading": "Notice words that direct you",
        "text": "A sign may give a place, ask you to do something, or say something is not allowed. Please makes a short request polite. No before an activity or thing often marks a rule. Do not assume every room follows a rule that names only one room.",
        "examples": [
          "Please close the classroom door.",
          "No food in the computer room.",
          "Toilets are beside room 2."
        ]
      },
      {
        "heading": "Use the information in order",
        "text": "Imagine you arrive for English class. First find the room number, then follow the request about the door. If you need the office, check its own line again. Practice explaining one sign to a new visitor using a complete, short sentence with a clear location.",
        "examples": [
          "Go to room 3 for English.",
          "The office is in room 1.",
          "Please close this door."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which room is for English class?",
        "options": [
          "Room 1",
          "Room 2",
          "Room 3",
          "The office"
        ],
        "answer": 2,
        "explanation": "The English class sign says room 3."
      },
      {
        "prompt": "What should you do with the classroom door?",
        "options": [
          "Paint it.",
          "Close it.",
          "Open it all day.",
          "Take it away."
        ],
        "answer": 1,
        "explanation": "The sign asks visitors to close the classroom door."
      },
      {
        "prompt": "Where does the sign say food is not allowed?",
        "options": [
          "In every room.",
          "Beside room 2.",
          "In the computer room.",
          "In the office only."
        ],
        "answer": 2,
        "explanation": "The rule specifically names the computer room."
      }
    ]
  },
  {
    "id": "a0-shopping-note",
    "level": "a0",
    "skill": "reading",
    "title": "A small shopping note",
    "description": "Read a short list and a note without adding missing information.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the note carefully",
        "text": "Read this note from a brother: “Hi Nila. Please buy two apples, one loaf of bread, and a bottle of water. The bag is on the kitchen chair. There is money in the bag. Thank you! —Danu.” Picture each item before answering questions.",
        "examples": [
          "Two apples are on the list.",
          "The bag is on the kitchen chair.",
          "Danu wrote the note."
        ]
      },
      {
        "heading": "Match a number with its item",
        "text": "A shopping note often has several numbers close together. Pair each number with the noun directly after it. Two belongs to apples, not to bottles. A loaf is a way to count a whole piece of bread made for slicing. A bottle holds a drink.",
        "examples": [
          "two apples",
          "one loaf of bread",
          "a bottle of water"
        ]
      },
      {
        "heading": "Separate a fact from a guess",
        "text": "The note says where the bag and money are, but it does not name a shop or a shopping time. Return to the exact line when you need an answer. Explain the instructions aloud, then write a similar note using three items from your own home.",
        "examples": [
          "The money is in the bag.",
          "The note does not name a shop.",
          "Please buy one banana and two eggs."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How many apples should Nila buy?",
        "options": [
          "One",
          "Three",
          "Four",
          "Two"
        ],
        "answer": 3,
        "explanation": "The note asks for two apples."
      },
      {
        "prompt": "Where is the money?",
        "options": [
          "Under the chair.",
          "In the shop.",
          "In the bag.",
          "On the bread."
        ],
        "answer": 2,
        "explanation": "The note says there is money in the bag."
      },
      {
        "prompt": "Which detail is NOT given in the note?",
        "options": [
          "The number of apples.",
          "The name of the shop.",
          "The place of the bag.",
          "The drink to buy."
        ],
        "answer": 1,
        "explanation": "The note names items and a bag location, but no particular shop."
      }
    ]
  },
  {
    "id": "a0-pet-club-profile",
    "level": "a0",
    "skill": "reading",
    "title": "Meet a member of the pet club",
    "description": "Find people, animals, and favourite things in a short profile.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read Mina’s profile",
        "text": "“My name is Mina. I am ten. I live with my mother and my brother. My brother is six. We have a small brown dog. His name is Pip. Pip likes his red ball. I like books about animals.” Read once to meet the people and animal.",
        "examples": [
          "Mina is ten.",
          "Her brother is six.",
          "Pip is a dog."
        ]
      },
      {
        "heading": "Follow a name and its pronoun",
        "text": "A writer can replace a repeated name with he, she, or it when the meaning is clear. In this profile, his name and his red ball both refer to the dog. Connect each fact to the correct person or animal instead of choosing the nearest number.",
        "examples": [
          "Pip has a red ball.",
          "Mina likes animal books.",
          "Her brother is younger than Mina."
        ]
      },
      {
        "heading": "Collect evidence before answering",
        "text": "Use a small table with the labels person, age, and favourite thing. Copy only information the profile gives. The mother’s age is not stated, so leave that space empty. Make your own short profile with two facts about yourself and two facts about a real or imaginary animal.",
        "examples": [
          "Mina: ten; animal books.",
          "Brother: six; favourite thing not given.",
          "Pip: small, brown dog."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How old is Mina’s brother?",
        "options": [
          "Ten",
          "Two",
          "Six",
          "The text says twelve."
        ],
        "answer": 2,
        "explanation": "The profile says, “My brother is six.”"
      },
      {
        "prompt": "What colour is Pip’s ball?",
        "options": [
          "Brown",
          "Blue",
          "Red",
          "Green"
        ],
        "answer": 2,
        "explanation": "Pip is brown, but his ball is red."
      },
      {
        "prompt": "Which statement matches the profile?",
        "options": [
          "Mina likes books about animals.",
          "Mina has a brown cat.",
          "Mina lives with her father only.",
          "Pip is Mina’s brother."
        ],
        "answer": 0,
        "explanation": "The final sentence says Mina likes books about animals."
      }
    ]
  },
  {
    "id": "a0-listen-classroom-items",
    "level": "a0",
    "skill": "listening",
    "title": "Listen: get ready for class",
    "description": "Hear a short instruction and identify useful classroom items.",
    "minutes": 10,
    "content": [
      {
        "heading": "Hear the whole instruction first",
        "text": "Play the message once and listen for the situation. The speaker is helping a class get ready. Try to catch familiar objects such as book, pen, and bag before worrying about every little word. A clear idea of the situation makes the details easier to organize.",
        "examples": [
          "Listen for things you can hold.",
          "Listen for a room number.",
          "Ask yourself: what must the learners do?"
        ]
      },
      {
        "heading": "Sort the details into small groups",
        "text": "Listen again with three labels: bring, put, and room. Write a noun or a number under each label. An instruction can name an object without asking you to bring it. Notice the action word immediately before the object so you understand what to do.",
        "examples": [
          "Bring a book.",
          "Put a bag under a chair.",
          "Room numbers identify places."
        ]
      },
      {
        "heading": "Act out the instruction",
        "text": "Use a real bag, book, and pen to act out the speaker’s requests. Replay a sentence if its meaning is unclear. Afterward, explain the instructions in your own words. This physical practice can help you connect a position word such as under with an action you remember.",
        "examples": [
          "My bag is under my chair.",
          "I have my blue book.",
          "I am ready for class."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What colour book should learners bring?",
        "options": [
          "Blue",
          "Red",
          "Green",
          "Black"
        ],
        "answer": 0,
        "explanation": "The speaker asks for a blue book."
      },
      {
        "prompt": "Where should learners put their bags?",
        "options": [
          "On the door.",
          "In room nine.",
          "Under their chairs.",
          "On their heads."
        ],
        "answer": 2,
        "explanation": "The instruction says to put bags under chairs."
      },
      {
        "prompt": "Which room is the class in?",
        "options": [
          "Room two",
          "Room three",
          "Room ten",
          "Room twelve"
        ],
        "answer": 0,
        "explanation": "The script says the class is in room two."
      }
    ],
    "listeningText": "Good morning, everyone. Our English class is in room two today. Please bring your blue book and a pen. Put your bags under your chairs. There is water on the small table. The lesson starts at ten. Thank you. Are you ready?"
  },
  {
    "id": "a0-listen-phone-number",
    "level": "a0",
    "skill": "listening",
    "title": "Listen: leave a phone number",
    "description": "Identify a name, a phone ending, and a meeting place.",
    "minutes": 10,
    "content": [
      {
        "heading": "Predict the kind of information",
        "text": "Before listening, look at the lesson title and expect to hear a name and numbers. A phone number is usually spoken one digit at a time. Listen for the start of the number rather than trying to turn separate digits into a large number.",
        "examples": [
          "Two, six, one means 2 6 1.",
          "A name tells you who is speaking.",
          "A place tells you where to meet."
        ]
      },
      {
        "heading": "Keep the order of the digits",
        "text": "Write the digits in the same order you hear them. Do not exchange their positions when repeating the number. The speaker gives only the last three digits in this practice message, so do not invent a complete phone number from information you have not heard.",
        "examples": [
          "Listen, write, then replay.",
          "1 6 2 is different from 2 6 1.",
          "Repeat slowly to check."
        ]
      },
      {
        "heading": "Connect the message to an action",
        "text": "After writing the details, decide what the listener needs to do. This short message includes an afternoon arrangement as well as a number. Make a note with a name, a place, a time, and the phone ending. Check each part in a separate listening pass.",
        "examples": [
          "Name: the person calling.",
          "Place: where the people will meet.",
          "Time: when to go there."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Who is speaking?",
        "options": [
          "Nila",
          "Ben",
          "Lena",
          "Ravi"
        ],
        "answer": 2,
        "explanation": "The speaker begins by saying her name is Lena."
      },
      {
        "prompt": "What are the last three phone digits?",
        "options": [
          "2 1 6",
          "6 2 1",
          "1 6 2",
          "2 6 1"
        ],
        "answer": 3,
        "explanation": "The digits are spoken in the order two, six, one."
      },
      {
        "prompt": "Where will the people meet?",
        "options": [
          "At the bus station.",
          "At the school gate.",
          "At the library door.",
          "At the shop."
        ],
        "answer": 1,
        "explanation": "Lena asks the listener to meet her at the school gate."
      }
    ],
    "listeningText": "Hello, this is Lena. Please call me after lunch. The last three numbers of my phone number are two, six, one. I am at home now. We can meet at the school gate at four this afternoon. Please bring your English book. Thank you."
  },
  {
    "id": "a0-listen-picnic-bag",
    "level": "a0",
    "skill": "listening",
    "title": "Listen: pack a picnic bag",
    "description": "Hear what is inside a bag and what is still at home.",
    "minutes": 10,
    "content": [
      {
        "heading": "Listen for the things in the bag",
        "text": "First listen without writing. Imagine the speaker opening a bag and naming its contents. The situation is a picnic, so food and drinks are useful clues. A familiar setting helps you follow a message even if you do not know every connecting word.",
        "examples": [
          "Picture a bag and some food.",
          "Listen for a drink.",
          "Listen for the picnic place."
        ]
      },
      {
        "heading": "Pay attention to a negative",
        "text": "A speaker may say an item is not present before explaining where it is. Not changes the meaning of the whole sentence. During your second listening, separate things in the bag from things somewhere else. Draw two boxes and put each named object in the correct box.",
        "examples": [
          "In the bag: write confirmed items.",
          "At home: write items left there.",
          "Do not ignore the word not."
        ]
      },
      {
        "heading": "Check your picture against the message",
        "text": "Draw a very simple picnic bag with the items you heard. Replay the recording and correct your drawing. Then explain the bag using there is and there are. If you practice with a partner, ask them to name one thing you have deliberately left outside the bag.",
        "examples": [
          "There are two apples in the bag.",
          "There is water in the bag.",
          "The cups are at home."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How many apples are in the bag?",
        "options": [
          "Three",
          "One",
          "Two",
          "Four"
        ],
        "answer": 2,
        "explanation": "The speaker names two apples."
      },
      {
        "prompt": "What is at home?",
        "options": [
          "The bread",
          "The apples",
          "The water",
          "The cups"
        ],
        "answer": 3,
        "explanation": "The speaker says the cups are at home on the kitchen table."
      },
      {
        "prompt": "Where is the picnic?",
        "options": [
          "At school.",
          "At the beach.",
          "At the station.",
          "At the park."
        ],
        "answer": 3,
        "explanation": "The message ends by saying the picnic is at the park."
      }
    ],
    "listeningText": "This is our picnic bag. There are two apples and some bread in it. There is a bottle of water, too. The cups are not in the bag. They are at home on the kitchen table. Our picnic is at the park today."
  },
  {
    "id": "a0-fill-simple-form",
    "level": "a0",
    "skill": "writing",
    "title": "Fill in a simple learner form",
    "description": "Write names, places, and numbers in the correct spaces.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the label before writing",
        "text": "A form collects information in separate spaces. A label tells you what to put in each space. Full name means your complete name as you normally give it. City asks for a place, not your age. Read all the labels before you begin to avoid shifting answers into the wrong lines.",
        "examples": [
          "Full name: Maya Silva",
          "City: Galle",
          "Age: 18"
        ]
      },
      {
        "heading": "Make letters and numbers clear",
        "text": "Use a capital at the beginning of a person’s name and a city name. Keep other letters easy to read. Check numbers one at a time, especially in a phone number. In a practice form, use invented contact details rather than posting personal information in a public place.",
        "examples": [
          "Name: Ravi Fernando",
          "City: Kandy",
          "Phone ending: 428"
        ]
      },
      {
        "heading": "Check a completed practice form",
        "text": "Draw a form with four labels: full name, city, age, and class. Fill it in for an imaginary student. Cover the labels and read the answers to a partner; can they identify each kind of information? Finally, uncover the labels and check every answer against the correct space.",
        "examples": [
          "Full name: Nila Perera",
          "Age: 21",
          "Class: English A"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What belongs in a space labelled City?",
        "options": [
          "Twenty",
          "English A",
          "Kandy",
          "Nila Perera"
        ],
        "answer": 2,
        "explanation": "Kandy is a city; the other options give different kinds of information."
      },
      {
        "prompt": "Which name is capitalized correctly?",
        "options": [
          "Maya Silva",
          "maya silva",
          "Maya silva",
          "maya Silva"
        ],
        "answer": 0,
        "explanation": "Both parts of this name begin with capital letters."
      },
      {
        "prompt": "What should you do before writing in a form space?",
        "options": [
          "Copy any nearby number.",
          "Write your age everywhere.",
          "Read its label.",
          "Ignore the instructions."
        ],
        "answer": 2,
        "explanation": "The label tells you which information the space requires."
      }
    ]
  },
  {
    "id": "a0-make-checklist",
    "level": "a0",
    "skill": "writing",
    "title": "Write a useful checklist",
    "description": "Use singular and plural nouns to make a clear list.",
    "minutes": 10,
    "content": [
      {
        "heading": "Give your list a purpose",
        "text": "A checklist helps you remember things to bring or tasks to do. Start with a short title such as My class bag. Put each item on a separate line so you can check it easily. A list can use short noun phrases instead of complete sentences.",
        "examples": [
          "My class bag",
          "one notebook",
          "two pens"
        ]
      },
      {
        "heading": "Check quantities and spelling",
        "text": "Use a number when the amount matters. Write one pencil but two pencils. Look at the spelling carefully instead of adding an extra s to every word; water is normally uncountable. A bottle of water makes the container countable and tells your reader how much to bring.",
        "examples": [
          "one pencil / three pencils",
          "a bottle of water",
          "one lunch box"
        ]
      },
      {
        "heading": "Read the list while packing",
        "text": "Write five things for a class or picnic. Match each written item to a real object or picture, then mark it when it is packed. If you find an unclear phrase, add the missing detail. Compare bring a bottle with bring a bottle of water to see the difference.",
        "examples": [
          "Check the notebook when it is packed.",
          "Write two pens if you need a spare.",
          "Use a clear title: Picnic bag."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which line clearly asks for three pencils?",
        "options": [
          "three pencil",
          "a three pencil",
          "three pencilses",
          "three pencils"
        ],
        "answer": 3,
        "explanation": "After three, the countable noun pencil takes its plural form pencils."
      },
      {
        "prompt": "Which is the clearest list title for school supplies?",
        "options": [
          "Yesterday was sunny",
          "Who are you?",
          "My class bag",
          "Blue and slowly"
        ],
        "answer": 2,
        "explanation": "My class bag tells the reader what the listed items are for."
      },
      {
        "prompt": "Which phrase gives a clear quantity of water?",
        "options": [
          "a water of bottle",
          "three water",
          "a bottle of water",
          "one waters"
        ],
        "answer": 2,
        "explanation": "The countable container bottle gives a practical amount of water."
      }
    ]
  },
  {
    "id": "a0-question-marks-and-spelling",
    "level": "a0",
    "skill": "writing",
    "title": "Write short questions and check spelling",
    "description": "Use question marks, capitals, and a careful checking routine.",
    "minutes": 10,
    "content": [
      {
        "heading": "Show when you are asking",
        "text": "End a written question with a question mark. A full stop normally ends a statement. The final mark helps the reader know whether you are giving information or asking for it. Begin both kinds of sentence with a capital letter and leave spaces between the words.",
        "examples": [
          "What is your name?",
          "My name is Sita.",
          "Are you ready?"
        ]
      },
      {
        "heading": "Keep common short words accurate",
        "text": "Short words such as is, am, my, and your appear often. Copy each word carefully, cover it, and write it again from memory. Check the order of the letters against your model. Remember that English I is always a capital letter when it means the speaker.",
        "examples": [
          "I am here.",
          "Is this your pen?",
          "My name is Arun."
        ]
      },
      {
        "heading": "Use a three-step editing routine",
        "text": "Write two questions and two answers about an imaginary learner. First read for meaning: does each answer match its question? Next check capitals and spaces. Finally check the final punctuation and the spelling of names. Correct one kind of mistake at a time so you can notice it clearly.",
        "examples": [
          "Where is Ravi? He is at school.",
          "Is she a teacher? Yes, she is.",
          "Check a name against its model."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence needs a question mark?",
        "options": [
          "My name is Sara",
          "I am a student",
          "This is my book",
          "What is your name"
        ],
        "answer": 3,
        "explanation": "What is your name asks for information."
      },
      {
        "prompt": "Which version is correctly written?",
        "options": [
          "i am here.",
          "I am here.",
          "I amhere.",
          "I here am."
        ],
        "answer": 1,
        "explanation": "I is capitalized, the words have spaces, and the statement ends with a full stop."
      },
      {
        "prompt": "Which answer matches “Where is Ravi?”",
        "options": [
          "His name is Ravi.",
          "He is ten.",
          "He is happy.",
          "He is at school."
        ],
        "answer": 3,
        "explanation": "Where asks about a place, so at school answers the question."
      }
    ]
  },
  {
    "id": "a0-clear-p-and-b",
    "level": "a0",
    "skill": "speaking",
    "title": "Say pen and Ben clearly",
    "description": "Practice the p and b contrast with short, meaningful phrases.",
    "minutes": 10,
    "content": [
      {
        "heading": "Notice the difference with your voice",
        "text": "Put your lips together to start p and b. For b, your voice vibrates as the sound begins. For p at the start of a stressed word, English often has a small puff of air. Hold a hand near your mouth and try pen and Ben slowly.",
        "examples": [
          "pen / Ben",
          "pat / bat",
          "pack / back"
        ]
      },
      {
        "heading": "Keep the whole word clear",
        "text": "Do not focus only on the first sound. Keep the vowel and final sound clear enough to recognize the word. Alternate pairs slowly, then place one word in a short sentence. The aim is an understandable difference; every speaker does not need to sound identical.",
        "examples": [
          "This is my pen.",
          "Ben is my friend.",
          "Put it in the pack."
        ]
      },
      {
        "heading": "Ask for a word when unsure",
        "text": "A listener can ask you to repeat a word or spell a name. Practice being both the speaker and listener. Say a sentence, pause for a reply, and repeat only the unclear word when asked. Use patient, friendly language and give the listener time to respond.",
        "examples": [
          "Did you say pen or Ben?",
          "Pen. P-E-N.",
          "Thank you. I understand."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which word begins with a voiced b sound?",
        "options": [
          "Pen",
          "Ten",
          "Sun",
          "Ben"
        ],
        "answer": 3,
        "explanation": "Ben begins with b, made with voice vibration."
      },
      {
        "prompt": "Which phrase checks the sound you heard?",
        "options": [
          "How old is the book?",
          "I am a student.",
          "It is Monday.",
          "Did you say pen or Ben?"
        ],
        "answer": 3,
        "explanation": "The question directly checks the two possible words."
      },
      {
        "prompt": "What is a helpful first practice step?",
        "options": [
          "Speak as fast as possible.",
          "Say pen and Ben slowly and compare their beginnings.",
          "Leave off all final sounds.",
          "Whisper every word forever."
        ],
        "answer": 1,
        "explanation": "Slow comparison helps you notice how the sounds are made before using them in phrases."
      }
    ]
  },
  {
    "id": "a0-stress-your-name",
    "level": "a0",
    "skill": "speaking",
    "title": "Make a name easy to hear",
    "description": "Use syllables, a clear voice, and polite name checks.",
    "minutes": 10,
    "content": [
      {
        "heading": "Break a word into spoken beats",
        "text": "A syllable is a beat in a word. Some names have one beat and others have several. Clap gently while you say your name naturally. Names can have different pronunciations, so the person who uses the name is the best guide to how they want it said.",
        "examples": [
          "Sam: one beat.",
          "Maya: often two beats.",
          "Ask the person how to say their name."
        ]
      },
      {
        "heading": "Make the important beat clear",
        "text": "In many English words, one syllable is stronger than the others. Do not make every beat equally strong when practicing a familiar word. Listen to a model and repeat it. In TEAcher, the first beat is usually stronger; the large letters here show stress, not ordinary spelling.",
        "examples": [
          "TEAcher",
          "STUdent",
          "heLLO"
        ]
      },
      {
        "heading": "Introduce and confirm a name",
        "text": "Give your name, pause, and let the other person repeat it. If they are unsure, say it again slowly or spell it. Ask politely before correcting someone’s pronunciation of their own name. Practice the exchange twice so both people have a turn speaking and listening.",
        "examples": [
          "My name is Maya.",
          "Could you say your name again?",
          "Is that right? Yes, thank you."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does a syllable mean in this lesson?",
        "options": [
          "A punctuation mark.",
          "A spoken beat in a word.",
          "A kind of notebook.",
          "A silent full stop."
        ],
        "answer": 1,
        "explanation": "Syllables are the spoken beats that make up a word."
      },
      {
        "prompt": "Which syllable is usually stronger in teacher?",
        "options": [
          "The last sound r only.",
          "Both must always be shouted.",
          "The first: TEA.",
          "There is no spoken beat."
        ],
        "answer": 2,
        "explanation": "Teacher normally has stress on its first syllable."
      },
      {
        "prompt": "Who is the best guide to pronouncing a person’s own name?",
        "options": [
          "The youngest listener every time.",
          "The person who uses the name.",
          "A guess based only on spelling.",
          "The person speaking fastest."
        ],
        "answer": 1,
        "explanation": "Names vary, so respectfully follow the person’s own pronunciation."
      }
    ]
  },
  {
    "id": "a0-ask-for-classroom-help",
    "level": "a0",
    "skill": "speaking",
    "title": "Ask for help in class",
    "description": "Use a polite request and allow your partner to answer.",
    "minutes": 10,
    "content": [
      {
        "heading": "Start a request clearly",
        "text": "You can ask for help before you know many words. Begin with excuse me to get attention politely. Say what you need in a short sentence. Please can make a request friendly, but a clear voice and patient turn-taking matter too. Practice with a book or pen.",
        "examples": [
          "Excuse me. A pen, please.",
          "Can you help me, please?",
          "What does this mean?"
        ]
      },
      {
        "heading": "Ask for repetition or slower speech",
        "text": "When speech is too fast, ask the speaker to slow down. If you miss one part, ask them to repeat it. You do not have to say you understand when you are unsure. Use one useful request, then listen to the new explanation before speaking again.",
        "examples": [
          "Again, please.",
          "Slowly, please.",
          "Could you repeat that?"
        ]
      },
      {
        "heading": "Finish a short exchange",
        "text": "A conversation needs time for both people. After asking, pause and look ready to listen. Respond to the answer with thank you or a short check. Practice a three-turn exchange: request, response, thanks. Change the object or problem and repeat with the roles reversed.",
        "examples": [
          "Can you help me, please?",
          "Yes. This word is book.",
          "Thank you. Book."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You cannot follow fast speech. What can you say?",
        "options": [
          "I have a blue shoe.",
          "Slowly, please.",
          "Good night, chair.",
          "You are a notebook."
        ],
        "answer": 1,
        "explanation": "Slowly, please asks the speaker to reduce their speed."
      },
      {
        "prompt": "What should you do after asking someone a question?",
        "options": [
          "Pause and listen to their answer.",
          "Immediately ask five more questions.",
          "Speak over every word.",
          "Walk away before they reply."
        ],
        "answer": 0,
        "explanation": "A pause gives the other person a turn to respond."
      },
      {
        "prompt": "Which phrase politely begins a request for attention?",
        "options": [
          "Never speak.",
          "Go away now.",
          "Excuse me.",
          "My pencil is green."
        ],
        "answer": 2,
        "explanation": "Excuse me is commonly used to get someone’s attention politely."
      }
    ]
  },
  {
    "id": "a1-grammar",
    "level": "a1",
    "skill": "grammar",
    "title": "Talk about your routine",
    "description": "Use the present simple for habits, facts, and questions.",
    "minutes": 11,
    "content": [
      {
        "heading": "Habits and everyday facts",
        "text": "Use the present simple for regular activities and facts. Use the base verb with I, you, we, and they. Add s or es with he, she, and it. Frequency words such as usually and often normally go before the main verb, but after be.",
        "examples": [
          "I study every evening.",
          "She studies every evening.",
          "He is usually early."
        ]
      },
      {
        "heading": "Questions and negatives with do",
        "text": "Use do or does to ask present simple questions. Use don’t or doesn’t for negatives. After does or doesn’t, the main verb returns to its base form. Ask about a partner’s routine and answer with a time or frequency to make your meaning more useful.",
        "examples": [
          "Do you work on Saturdays?",
          "Does she live near here?",
          "He doesn’t drink coffee."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "My sister ___ English every day.",
        "options": [
          "studies",
          "is study",
          "study",
          "studying"
        ],
        "answer": 0,
        "explanation": "My sister is she, so use studies in the present simple."
      },
      {
        "prompt": "Choose the correct question.",
        "options": [
          "He does work here?",
          "Does he work here?",
          "Does he works here?",
          "Do he work here?"
        ],
        "answer": 1,
        "explanation": "Use does with he and the base verb work."
      },
      {
        "prompt": "Which sentence is correct?",
        "options": [
          "She doesn’t likes tea.",
          "She not like tea.",
          "She doesn’t like tea.",
          "She don’t like tea."
        ],
        "answer": 2,
        "explanation": "Doesn’t already marks the third person, so the main verb stays like."
      }
    ]
  },
  {
    "id": "a1-vocabulary",
    "level": "a1",
    "skill": "vocabulary",
    "title": "Food, home & your neighbourhood",
    "description": "Use practical words and natural combinations every day.",
    "minutes": 10,
    "content": [
      {
        "heading": "Learn words in useful pairs",
        "text": "Learn a word together with words that often go with it. We make breakfast, take a bus, and buy groceries. A supermarket sells food and household items; a pharmacy sells medicines; a library lends books. Imagine your own neighbourhood as you use each word.",
        "examples": [
          "I buy groceries at the supermarket.",
          "The pharmacy is next to the bank.",
          "I take a bus to work."
        ]
      },
      {
        "heading": "Countable and uncountable nouns",
        "text": "You can count apples and eggs: one apple, two eggs. Words such as rice, water, and bread are usually uncountable when we describe food in general. Use some or a quantity phrase such as a bottle of water. In negative sentences and questions, any is often useful.",
        "examples": [
          "We have some rice.",
          "Do you have any eggs?",
          "I’d like a bottle of water."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Where would you normally borrow a book?",
        "options": [
          "A pharmacy",
          "A library",
          "A bank",
          "A supermarket"
        ],
        "answer": 1,
        "explanation": "A library lets people borrow books."
      },
      {
        "prompt": "Choose the natural phrase.",
        "options": [
          "buy a groceries",
          "do breakfast",
          "make a bus",
          "take a bus"
        ],
        "answer": 3,
        "explanation": "Take a bus is a common combination for travelling by bus."
      },
      {
        "prompt": "Which request is correct?",
        "options": [
          "Three breads of water, please.",
          "A bottle of water, please.",
          "Two waters of bottle, please.",
          "A rice, please."
        ],
        "answer": 1,
        "explanation": "A bottle of water uses a countable container to measure water."
      }
    ]
  },
  {
    "id": "a1-reading",
    "level": "a1",
    "skill": "reading",
    "title": "Read the message, find the plan",
    "description": "Understand practical texts, opening times, and invitations.",
    "minutes": 9,
    "content": [
      {
        "heading": "Read a useful everyday message",
        "text": "Read this message: “Hi Ana! Let’s meet at the library on Saturday at 10 a.m. Bring your English notebook. The café next door is closed, so we can have lunch at my house afterward. —Leo.” Look for the people, place, day, and time before you focus on smaller details.",
        "examples": [
          "Who is writing? Leo.",
          "Where will they meet? At the library.",
          "When? Saturday at 10 a.m."
        ]
      },
      {
        "heading": "Notice a change or a reason",
        "text": "Small words connect important details. So often introduces a result; because gives a reason; but shows a contrast. In Leo’s message, the closed café explains why lunch is at home. Do not assume that a familiar place is the final meeting place: check the actual words.",
        "examples": [
          "The café is closed, so lunch is at Leo’s house.",
          "Bring your English notebook.",
          "Afterward means after the library visit."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Where will Ana and Leo first meet?",
        "options": [
          "At school",
          "At Leo’s house",
          "At the café",
          "At the library"
        ],
        "answer": 3,
        "explanation": "Leo says, “Let’s meet at the library.”"
      },
      {
        "prompt": "What should Ana bring?",
        "options": [
          "A café menu",
          "An English notebook",
          "Lunch for everyone",
          "A library sign"
        ],
        "answer": 1,
        "explanation": "The message directly asks Ana to bring her English notebook."
      },
      {
        "prompt": "Why will they have lunch at Leo’s house?",
        "options": [
          "The café next door is closed.",
          "The library is closed.",
          "Ana works there.",
          "The café is too expensive."
        ],
        "answer": 0,
        "explanation": "The word so links the closed café to their plan to eat at Leo’s house."
      }
    ]
  },
  {
    "id": "a1-listening",
    "level": "a1",
    "skill": "listening",
    "title": "Listen: a change of plan",
    "description": "Understand times, days, and a simple corrected arrangement.",
    "minutes": 9,
    "listeningText": "Hi Eva, it is Tom. Our English class is usually on Tuesday, but this week it is on Thursday. It starts at half past five, not five o’clock. Please meet me outside the library at five fifteen. Bring your notebook. See you there!",
    "content": [
      {
        "heading": "Listen for the final information",
        "text": "Speakers sometimes mention an old plan before giving the new one. Listen for but, actually, or not: they can signal a correction. In this message, first identify what Tom is talking about. Then replay it and write the final day, class time, and meeting time.",
        "examples": [
          "usually on Tuesday, but this week on Thursday",
          "half past five = 5:30",
          "five fifteen = 5:15"
        ]
      },
      {
        "heading": "Separate meeting time and start time",
        "text": "A message can contain more than one useful time. Label your notes: meet, start, and finish. This prevents you from choosing a correct number for the wrong event. After listening, repeat the plan in one sentence using your own words.",
        "examples": [
          "Meet: outside the library, 5:15.",
          "Class starts: 5:30 on Thursday.",
          "Tom asks Eva to bring a notebook."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which day is the class this week?",
        "options": [
          "Wednesday",
          "Friday",
          "Tuesday",
          "Thursday"
        ],
        "answer": 3,
        "explanation": "Tuesday is the usual day, but this week the class is on Thursday."
      },
      {
        "prompt": "What time does the class start?",
        "options": [
          "5:00",
          "5:15",
          "5:30",
          "6:30"
        ],
        "answer": 2,
        "explanation": "Half past five means 5:30."
      },
      {
        "prompt": "Where should Eva meet Tom?",
        "options": [
          "At the bus stop",
          "Outside the library",
          "Inside the classroom",
          "At Tom’s house"
        ],
        "answer": 1,
        "explanation": "Tom says, “Please meet me outside the library.”"
      }
    ]
  },
  {
    "id": "a1-writing",
    "level": "a1",
    "skill": "writing",
    "title": "Write a friendly message",
    "description": "Make an invitation with a clear place, time, and question.",
    "minutes": 12,
    "content": [
      {
        "heading": "Give your reader the essentials",
        "text": "A helpful invitation says what you want to do, where, and when. Begin with a greeting and use short sentences. Finish with a question so the reader knows how to reply. Your message can sound friendly without using complicated words.",
        "examples": [
          "Hi Amira! Would you like to study together?",
          "Let’s meet at the library on Friday at 4 p.m.",
          "Are you free then?"
        ]
      },
      {
        "heading": "Link ideas and check the details",
        "text": "Use and to add information, but for a contrast, and because for a reason. Before sending your message, check the person’s name, day, time, and place. Write a 40–60 word invitation to a friend, including what they should bring and how they can reply.",
        "examples": [
          "Bring your notebook and a pen.",
          "I can come on Friday, but I can’t come on Saturday.",
          "Let’s go early because the library closes at six."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which invitation gives the clearest plan?",
        "options": [
          "Meet sometime.",
          "Come there.",
          "Let’s meet at the library on Friday at 4 p.m.",
          "Maybe we study."
        ],
        "answer": 2,
        "explanation": "The sentence gives an activity, a place, a day, and a time."
      },
      {
        "prompt": "Choose the best connector: “I can come on Friday, ___ I can’t come on Saturday.”",
        "options": [
          "and then",
          "so that",
          "because",
          "but"
        ],
        "answer": 3,
        "explanation": "But joins two contrasting ideas."
      },
      {
        "prompt": "Which ending invites a useful reply?",
        "options": [
          "Are you free at that time?",
          "The end.",
          "A notebook is blue.",
          "Yesterday was Monday."
        ],
        "answer": 0,
        "explanation": "The question lets your friend confirm whether the plan works."
      }
    ]
  },
  {
    "id": "a1-speaking",
    "level": "a1",
    "skill": "speaking",
    "title": "Order, ask & say thank you",
    "description": "Practice polite requests in cafés and everyday places.",
    "minutes": 10,
    "content": [
      {
        "heading": "Ask politely and specifically",
        "text": "Use I’d like to request something and could I to ask politely. Add please naturally. A short, clear request is enough. In a café, say the item and quantity; in a shop, name the item or ask where it is. Practice both the customer and assistant roles.",
        "examples": [
          "I’d like a tea, please.",
          "Could I have two sandwiches?",
          "Excuse me, where is the bus stop?"
        ]
      },
      {
        "heading": "Check that you understood",
        "text": "Repeat important information to confirm it. If a price, size, or direction is unclear, ask a short follow-up question. Say thank you when the other person helps. Focus on communicating the request clearly; you can improve pronunciation by repeating the same conversation with different items.",
        "examples": [
          "Is that five pounds?",
          "A small coffee, please.",
          "Thank you for your help."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which is a polite café order?",
        "options": [
          "You have coffee? Me.",
          "Give coffee now.",
          "I’d like a coffee, please.",
          "Coffee has a cup."
        ],
        "answer": 2,
        "explanation": "I’d like… please is a standard polite request."
      },
      {
        "prompt": "You did not hear the price. What is the best response?",
        "options": [
          "The shop is open.",
          "Could you say the price again, please?",
          "No names, thank you.",
          "I am a student."
        ],
        "answer": 1,
        "explanation": "Ask directly and politely for the missing information."
      },
      {
        "prompt": "Which phrase politely gets a stranger’s attention?",
        "options": [
          "Go away.",
          "Excuse me.",
          "Yesterday!",
          "What!"
        ],
        "answer": 1,
        "explanation": "Excuse me is a useful way to begin a polite request for help."
      }
    ]
  },
  {
    "id": "a1-present-continuous-now",
    "level": "a1",
    "skill": "grammar",
    "title": "What is happening now?",
    "description": "Describe current actions and spell common ing forms.",
    "minutes": 10,
    "content": [
      {
        "heading": "Build the present continuous",
        "text": "Use am, is, or are plus a verb ending in ing to describe an action happening now. The first verb agrees with the subject. The ing form stays the same. Look around and choose an action you can actually observe before writing your sentence.",
        "examples": [
          "I am reading.",
          "She is cooking.",
          "They are waiting outside."
        ]
      },
      {
        "heading": "Spell common ing forms",
        "text": "Most verbs simply add ing. A verb ending in silent e often loses that e first: make becomes making. In a short verb with a short stressed vowel and one final consonant, that consonant often doubles: sit becomes sitting. Learn each change with an example.",
        "examples": [
          "read → reading",
          "make → making",
          "sit → sitting"
        ]
      },
      {
        "heading": "Make a question or a negative",
        "text": "Move am, is, or are before the subject to ask a question. Put not after the same verb to make a negative. Practice describing a picture with two true sentences and one negative. Check that every sentence contains both a form of be and an ing verb.",
        "examples": [
          "Are you listening?",
          "He is not sleeping.",
          "We are studying, but we are not writing."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Look! Sara ___ a picture now.",
        "options": [
          "draw",
          "draws yesterday",
          "are drawing",
          "is drawing"
        ],
        "answer": 3,
        "explanation": "A current action with Sara takes is plus drawing."
      },
      {
        "prompt": "Which ing form is spelled correctly?",
        "options": [
          "makeing",
          "makking",
          "making",
          "makeeing"
        ],
        "answer": 2,
        "explanation": "Make loses its silent final e before adding ing."
      },
      {
        "prompt": "Which question is correct?",
        "options": [
          "Are they waiting?",
          "They are waiting are?",
          "Do they waiting?",
          "Is they waiting?"
        ],
        "answer": 0,
        "explanation": "Put are before they to ask a present continuous question."
      }
    ]
  },
  {
    "id": "a1-some-any-much-many",
    "level": "a1",
    "skill": "grammar",
    "title": "How much and how many?",
    "description": "Ask about quantities and distinguish countable from uncountable nouns.",
    "minutes": 10,
    "content": [
      {
        "heading": "Decide whether you can count it",
        "text": "Countable nouns have singular and plural forms, such as one egg and two eggs. Uncountable food words such as milk and rice usually describe a substance. To count an amount, use a container or measure. Learn the noun and a common quantity phrase together.",
        "examples": [
          "two eggs",
          "some milk",
          "three bags of rice"
        ]
      },
      {
        "heading": "Ask with much or many",
        "text": "Use how many with plural countable nouns. Use how much with uncountable nouns. How much also asks for a price, so listen to the whole question. When shopping, name the item clearly so your question gives the seller enough information to answer.",
        "examples": [
          "How many eggs do we need?",
          "How much milk is left?",
          "How much is this bag?"
        ]
      },
      {
        "heading": "Use some and any naturally",
        "text": "Some is common in positive statements; any is common in negative statements and neutral questions. Some can also appear in offers and requests when something is expected. Make a shopping dialogue from a nearly empty kitchen and check both the noun type and the sentence type.",
        "examples": [
          "We have some rice.",
          "We don’t have any eggs.",
          "Would you like some water?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which question is correct?",
        "options": [
          "How much apples do we need?",
          "How many apples do we need?",
          "How many milk do we need?",
          "How much eggs do we need?"
        ],
        "answer": 1,
        "explanation": "Apples is a plural countable noun, so use how many."
      },
      {
        "prompt": "Complete the neutral question: “Do we have ___ rice?”",
        "options": [
          "any",
          "many",
          "an",
          "a"
        ],
        "answer": 0,
        "explanation": "Any works in this neutral question, and rice is normally uncountable."
      },
      {
        "prompt": "Which phrase counts a quantity of milk clearly?",
        "options": [
          "two milkses",
          "a milk of bottles",
          "two bottles of milk",
          "many milk"
        ],
        "answer": 2,
        "explanation": "Bottle is countable, so two bottles of milk gives a clear quantity."
      }
    ]
  },
  {
    "id": "a1-can-and-classroom-rules",
    "level": "a1",
    "skill": "grammar",
    "title": "What can you do here?",
    "description": "Express ability, ask permission, and understand simple instructions.",
    "minutes": 10,
    "content": [
      {
        "heading": "Describe an ability with can",
        "text": "Use can plus the base form of a verb to say someone has an ability. The form can stays the same with I, she, and they. Do not add to or s after can. A negative uses cannot or its short form can’t.",
        "examples": [
          "I can swim.",
          "She can speak Tamil.",
          "They can’t drive."
        ]
      },
      {
        "heading": "Ask a practical permission question",
        "text": "Can I asks for permission to do something. Can you often requests help or asks about ability. Context tells you which meaning is intended. Add please when useful and listen for the response before acting. A permission question should name the action you want to take.",
        "examples": [
          "Can I open the window?",
          "Can you help me, please?",
          "Yes, you can sit here."
        ]
      },
      {
        "heading": "Understand short rules and instructions",
        "text": "An imperative often starts with a base verb and leaves out you. Use don’t plus a base verb for a negative instruction. Compare what someone is able to do with what a place allows. Write three instructions for a classroom and read them aloud with a calm tone.",
        "examples": [
          "Please close the door.",
          "Don’t run in the corridor.",
          "You can use a pencil here."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence describes ability correctly?",
        "options": [
          "She cans swim.",
          "She can to swim.",
          "She can swims.",
          "She can swim."
        ],
        "answer": 3,
        "explanation": "Can is followed by the base verb swim and does not take s."
      },
      {
        "prompt": "Which sentence asks permission?",
        "options": [
          "I opened the window.",
          "The window is blue.",
          "She can sing.",
          "Can I open the window?"
        ],
        "answer": 3,
        "explanation": "Can I plus an action asks whether the speaker is allowed to do it."
      },
      {
        "prompt": "Which instruction tells someone NOT to run?",
        "options": [
          "Not running you.",
          "Doesn’t run you.",
          "To don’t running.",
          "Don’t run."
        ],
        "answer": 3,
        "explanation": "Use don’t plus the base form for a negative imperative."
      }
    ]
  },
  {
    "id": "a1-kitchen-actions",
    "level": "a1",
    "skill": "vocabulary",
    "title": "Cook with useful action words",
    "description": "Learn clear cooking verbs and common kitchen tools.",
    "minutes": 10,
    "content": [
      {
        "heading": "Match the action to the tool",
        "text": "Cooking instructions use action words such as wash, peel, cut, mix, and boil. A knife cuts food, while a spoon can stir a mixture. Learn each verb with a familiar ingredient. The action should make sense for the food and the tool in the sentence.",
        "examples": [
          "Wash the tomatoes.",
          "Peel the banana.",
          "Cut the carrot with a knife."
        ]
      },
      {
        "heading": "Notice stages in a simple recipe",
        "text": "Recipes normally tell you what to do in order. First prepare the ingredients, then cook or combine them. Mix means put things together; boil means heat a liquid until it bubbles strongly. Do not confuse pour, which moves a liquid, with cut, which divides something into pieces.",
        "examples": [
          "Mix the rice and vegetables.",
          "Pour the water into a pan.",
          "Boil the water."
        ]
      },
      {
        "heading": "Explain an everyday preparation",
        "text": "Choose a simple cold snack you know how to make. List its ingredients and describe three actions with the correct tools. Use first, next, and finally to organize your explanation. If you do not cook, practice with pictures and write clear instructions for assembling a fruit bowl.",
        "examples": [
          "First, wash the fruit.",
          "Next, cut it into small pieces.",
          "Finally, mix it in a bowl."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which action removes the skin from a banana?",
        "options": [
          "Boil it.",
          "Peel it.",
          "Pour it.",
          "Stir it."
        ],
        "answer": 1,
        "explanation": "Peel means remove the outer skin."
      },
      {
        "prompt": "Which tool is normally used for cutting a carrot?",
        "options": [
          "A cup",
          "A plate",
          "A knife",
          "A napkin"
        ],
        "answer": 2,
        "explanation": "A knife is a kitchen tool for cutting food."
      },
      {
        "prompt": "Which action means moving water from a jug into a glass?",
        "options": [
          "Peeling",
          "Pouring",
          "Slicing",
          "Frying"
        ],
        "answer": 1,
        "explanation": "Pour means make a liquid flow from one container into another."
      }
    ]
  },
  {
    "id": "a1-weather-and-seasons",
    "level": "a1",
    "skill": "vocabulary",
    "title": "Talk about weather and seasons",
    "description": "Describe today’s weather and choose practical clothing words.",
    "minutes": 10,
    "content": [
      {
        "heading": "Use a useful weather pattern",
        "text": "Say it is plus an adjective to describe weather: sunny, cloudy, windy, hot, or cold. Use it is raining when rain is falling now. Weather describes conditions at a particular time and place, so give a location or time when you need to be clear.",
        "examples": [
          "It is windy today.",
          "It is raining in Galle.",
          "The morning is cool."
        ]
      },
      {
        "heading": "Know that seasons vary by place",
        "text": "Some places describe spring, summer, autumn, and winter. Other places commonly talk about wet and dry seasons. Do not assume every country has the same weather in the same month. Read the actual weather description when making a plan rather than relying only on a season name.",
        "examples": [
          "It is winter there, but summer here.",
          "The wet season brings frequent rain.",
          "Autumn is also called fall in American English."
        ]
      },
      {
        "heading": "Link weather to an everyday decision",
        "text": "Use weather words to explain what to bring or wear. A forecast describes expected weather, so a plan may change later. Practice a short conversation about meeting outdoors. Say the weather, suggest a useful item, and ask whether the other person agrees with the plan.",
        "examples": [
          "It may rain. Bring an umbrella.",
          "It is cold. Wear a coat.",
          "It is sunny. Shall we sit outside?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence describes wind?",
        "options": [
          "It is windy today.",
          "It is a winter yesterday.",
          "It is umbrella.",
          "It is raining coldly sun."
        ],
        "answer": 0,
        "explanation": "Windy is the adjective for weather with noticeable wind."
      },
      {
        "prompt": "What is another common name for autumn?",
        "options": [
          "Rise",
          "Fall",
          "Heat",
          "Breeze"
        ],
        "answer": 1,
        "explanation": "Fall is the usual American English name for autumn."
      },
      {
        "prompt": "What is a sensible item to bring when rain is expected?",
        "options": [
          "A frying pan",
          "An umbrella",
          "A library card only",
          "A plate"
        ],
        "answer": 1,
        "explanation": "An umbrella helps keep rain off you outdoors."
      }
    ]
  },
  {
    "id": "a1-jobs-and-workplaces",
    "level": "a1",
    "skill": "vocabulary",
    "title": "People and their workplaces",
    "description": "Describe common jobs and distinguish a job from its workplace.",
    "minutes": 10,
    "content": [
      {
        "heading": "Learn a job with an action",
        "text": "A job name is easier to remember when you connect it to what the person does. A nurse cares for patients, a mechanic repairs vehicles, and a baker makes bread. Use a or an when saying one person’s job in a simple sentence.",
        "examples": [
          "She is a nurse.",
          "He is a mechanic.",
          "My uncle is a baker."
        ]
      },
      {
        "heading": "Name the workplace separately",
        "text": "A workplace tells you where someone works. A baker may work in a bakery, a nurse may work in a hospital, and a mechanic may work in a garage. These are common examples, but people can work in different places. Do not treat a typical workplace as the only possible one.",
        "examples": [
          "A bakery sells bread.",
          "A hospital provides medical care.",
          "A garage can repair cars."
        ]
      },
      {
        "heading": "Ask about work politely",
        "text": "Ask What do you do? when the context makes it clear you mean someone’s work. Where do you work? asks for a place. A person may study, care for family, or be between jobs. Practice giving an answer and asking a follow-up without demanding private details.",
        "examples": [
          "I work in a bakery.",
          "What do you do there?",
          "I make bread in the morning."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Who normally repairs vehicles?",
        "options": [
          "A baker",
          "A mechanic",
          "A waiter",
          "A singer"
        ],
        "answer": 1,
        "explanation": "Repairing cars and other vehicles is a mechanic’s work."
      },
      {
        "prompt": "Which word names a workplace rather than a person’s job?",
        "options": [
          "Baker",
          "Nurse",
          "Mechanic",
          "Bakery"
        ],
        "answer": 3,
        "explanation": "A bakery is a place; a baker is a person who makes bread."
      },
      {
        "prompt": "Which question asks about a workplace?",
        "options": [
          "What time is lunch?",
          "Where do you work?",
          "Are you hungry?",
          "How old is the bread?"
        ],
        "answer": 1,
        "explanation": "Where asks for the location of someone’s work."
      }
    ]
  },
  {
    "id": "a1-club-timetable",
    "level": "a1",
    "skill": "reading",
    "title": "Choose a class from a timetable",
    "description": "Match days, times, and requirements to your own needs.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the club timetable",
        "text": "“Community Club: Art, Monday 4–5 p.m., room 2; bring pencils. Dance, Wednesday 5–6 p.m., hall; wear comfortable shoes. Reading Circle, Saturday 10–11 a.m., library; bring any short book. Each activity is free. Register at the office before your first session.” Start by finding the activity names.",
        "examples": [
          "Art meets on Monday.",
          "Dance uses the hall.",
          "The Reading Circle meets in the library."
        ]
      },
      {
        "heading": "Match each item to its row",
        "text": "A timetable presents several plans close together. Track the complete row for your activity so you do not take a time from another class. Notice both where you go and what you need. Bring pencils belongs to art, while comfortable shoes belongs to dance.",
        "examples": [
          "Art: room 2, pencils.",
          "Dance: hall, comfortable shoes.",
          "Reading Circle: Saturday, short book."
        ]
      },
      {
        "heading": "Check the condition before attending",
        "text": "The final line applies to every activity. Even though the sessions are free, a new participant needs to register first. Practice choosing an activity for someone available only on Saturday morning. Give the day, place, required item, and registration step using details from the notice.",
        "examples": [
          "All activities are free.",
          "Register before your first session.",
          "Saturday morning matches the Reading Circle."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which activity is on Saturday morning?",
        "options": [
          "Art",
          "Dance",
          "Reading Circle",
          "None of them"
        ],
        "answer": 2,
        "explanation": "The Reading Circle is listed for Saturday, 10–11 a.m."
      },
      {
        "prompt": "What should a learner bring to Art?",
        "options": [
          "A short book",
          "A dance ticket",
          "A uniform",
          "Pencils"
        ],
        "answer": 3,
        "explanation": "The Art line specifically says bring pencils."
      },
      {
        "prompt": "What must a new participant do before the first session?",
        "options": [
          "Register at the office.",
          "Pay for all three clubs.",
          "Buy a long novel.",
          "Call the dance teacher."
        ],
        "answer": 0,
        "explanation": "The notice tells every new participant to register at the office."
      }
    ]
  },
  {
    "id": "a1-fruit-yogurt-recipe",
    "level": "a1",
    "skill": "reading",
    "title": "Follow a simple snack recipe",
    "description": "Read ingredients, order words, and a final serving instruction.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the recipe",
        "text": "“Fruit Yogurt for Two. You need one banana, one small apple, two cups of plain yogurt, and a bowl. First, wash the apple. Next, cut the apple and banana into small pieces. Put the fruit in the bowl. Add the yogurt and mix gently. Serve immediately. Do not add sugar.”",
        "examples": [
          "The recipe makes two servings.",
          "It uses plain yogurt.",
          "The fruit goes in a bowl."
        ]
      },
      {
        "heading": "Follow the order, not just the words",
        "text": "First and next show the order of actions. Washing the apple comes before cutting it. Adding yogurt comes after the fruit is in the bowl. Identify action words and the object of each action. This helps you follow instructions even when a recipe contains several familiar ingredients.",
        "examples": [
          "Wash the apple first.",
          "Cut both kinds of fruit.",
          "Add yogurt after the fruit."
        ]
      },
      {
        "heading": "Notice limits and missing steps",
        "text": "The instruction says not to add sugar and to serve immediately. It does not ask you to cook the snack or leave it overnight. Answer questions from the recipe rather than adding your own cooking habits. Summarize the method in three short sentences, keeping the original order.",
        "examples": [
          "No sugar is required.",
          "Serve as soon as it is ready.",
          "No cooking step is given."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How many people does the recipe serve?",
        "options": [
          "One",
          "Four",
          "Six",
          "Two"
        ],
        "answer": 3,
        "explanation": "The title is Fruit Yogurt for Two."
      },
      {
        "prompt": "What comes before cutting the apple?",
        "options": [
          "Adding sugar.",
          "Washing it.",
          "Heating the yogurt.",
          "Serving the bowl."
        ],
        "answer": 1,
        "explanation": "The first step is washing the apple; cutting comes next."
      },
      {
        "prompt": "Which instruction is in the recipe?",
        "options": [
          "Do not add sugar.",
          "Cook for twenty minutes.",
          "Leave it overnight.",
          "Use three bananas."
        ],
        "answer": 0,
        "explanation": "The final sentence explicitly says not to add sugar."
      }
    ]
  },
  {
    "id": "a1-book-swap-poster",
    "level": "a1",
    "skill": "reading",
    "title": "Read a book-swap poster",
    "description": "Find the purpose, rules, and alternatives in an event notice.",
    "minutes": 10,
    "content": [
      {
        "heading": "Read the event notice",
        "text": "“BOOK SWAP! Sunday, 11 a.m.–1 p.m., Riverside School hall. Bring up to three clean books and exchange them for other books. No textbooks, please. You can also come without a book and buy one for £1. Children must come with an adult. Tea is available; bring your own cup.”",
        "examples": [
          "The event is at Riverside School.",
          "It lasts two hours.",
          "People can exchange books."
        ]
      },
      {
        "heading": "Understand up to and without",
        "text": "Up to three means a maximum of three; one or two books are also acceptable. Without a book means you arrive carrying no book for exchange. The poster gives a different option for that situation. Look for rules that apply to the things people bring and to who can attend.",
        "examples": [
          "Three is the maximum for exchange.",
          "A book costs £1 if you do not exchange.",
          "Children need an accompanying adult."
        ]
      },
      {
        "heading": "Make a plan from the poster",
        "text": "Imagine you want to take two clean storybooks to the event. Check the day, opening time, place, and allowed type of book. If you want tea, notice the cup instruction. Explain your plan to a friend using only information that appears in the notice.",
        "examples": [
          "I can bring two storybooks.",
          "I must leave textbooks at home.",
          "I will bring my own cup."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the maximum number of books to bring for exchange?",
        "options": [
          "Three",
          "One",
          "Five",
          "Ten"
        ],
        "answer": 0,
        "explanation": "Up to three sets a maximum of three books."
      },
      {
        "prompt": "Can someone attend without a book to exchange?",
        "options": [
          "Yes, and they can buy a book for £1.",
          "No, everyone must bring three.",
          "Yes, but only at 2 p.m.",
          "No, only teachers can attend."
        ],
        "answer": 0,
        "explanation": "The poster explicitly offers a £1 purchase option to people without a book."
      },
      {
        "prompt": "Which item is not accepted for exchange?",
        "options": [
          "A clean storybook",
          "A clean poetry book",
          "A textbook",
          "A clean picture book"
        ],
        "answer": 2,
        "explanation": "The poster says, “No textbooks, please.”"
      }
    ]
  },
  {
    "id": "a1-listen-market-change",
    "level": "a1",
    "skill": "listening",
    "title": "Listen: a market purchase",
    "description": "Follow quantities, a price, and a corrected choice in a short exchange.",
    "minutes": 10,
    "content": [
      {
        "heading": "Identify the buying situation",
        "text": "Listen once and decide what the customer wants to buy. A market conversation often contains quantities, prices, and changes of choice. You do not need to write every word. Begin by noting the items, then check which item the speaker finally chooses.",
        "examples": [
          "Listen for fruit names.",
          "A price tells you a cost.",
          "A later choice can replace an earlier one."
        ]
      },
      {
        "heading": "Listen for a changed decision",
        "text": "But, instead, and actually often signal a change. A customer may mention one quantity and then choose another. Keep the final decision rather than copying the first number you hear. On your second listening, write a short final shopping list and cross out any rejected choice.",
        "examples": [
          "I’ll take two instead.",
          "The final request matters.",
          "Keep quantities beside the matching food."
        ]
      },
      {
        "heading": "Separate payment from price",
        "text": "The money a customer gives may be more than the total price. Change is the money returned. In this recording, focus on the total the seller states and what is inside the final order. Repeat the order aloud as if you are checking it with the seller.",
        "examples": [
          "The total is the cost of the order.",
          "A five-pound note is a payment.",
          "Check both the items and their quantities."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How many oranges does the customer finally buy?",
        "options": [
          "Three",
          "Four",
          "Two",
          "One"
        ],
        "answer": 2,
        "explanation": "The customer changes the original request to two oranges."
      },
      {
        "prompt": "Which extra item does the customer buy?",
        "options": [
          "One apple",
          "A bottle of water",
          "One banana",
          "Two pears"
        ],
        "answer": 2,
        "explanation": "After changing the orange quantity, the customer adds one banana."
      },
      {
        "prompt": "What is the total cost?",
        "options": [
          "Five pounds",
          "Two pounds",
          "Three pounds",
          "Four pounds"
        ],
        "answer": 2,
        "explanation": "The seller states the total is three pounds; five pounds is the amount handed over."
      }
    ],
    "listeningText": "Customer: Good morning. I would like three oranges, please. Seller: These oranges are one pound each. Customer: They are quite big. I will take two instead, and one banana. Seller: The banana is one pound too, so that is three pounds altogether. Customer: Here is five pounds. Seller: Thank you. Here are your fruit and two pounds change. Customer: Thanks. I do not need a bag today."
  },
  {
    "id": "a1-listen-haircut-appointment",
    "level": "a1",
    "skill": "listening",
    "title": "Listen: make an appointment",
    "description": "Distinguish an unavailable time from a confirmed appointment.",
    "minutes": 10,
    "content": [
      {
        "heading": "Listen for the purpose of the call",
        "text": "Before playing the recording, predict what people say when making an appointment. They often name a service, ask about a day, and choose a time. On the first listening, identify why the caller is calling. This gives the later numbers and names a clear purpose.",
        "examples": [
          "A haircut is a service.",
          "An appointment is an agreed time.",
          "The caller may reject an unsuitable time."
        ]
      },
      {
        "heading": "Track offered and accepted times",
        "text": "Not every time you hear becomes the final appointment. Draw two columns labelled offered and accepted. Listen for phrases such as that works or I can’t come then. The accepted time is the one both speakers agree on near the end of the exchange.",
        "examples": [
          "An available time may be unsuitable.",
          "The final agreement is the booking.",
          "Note a day beside the time."
        ]
      },
      {
        "heading": "Confirm details before finishing",
        "text": "The recording includes a name and an arrival request. Check these after you have the correct appointment time. In your own practice call, repeat the day and time before saying goodbye. This simple confirmation helps both people notice a mistake while they can still correct it.",
        "examples": [
          "So that is Friday at two.",
          "Please arrive a little early.",
          "Thank you. See you then."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does the caller want?",
        "options": [
          "An English class",
          "A train ticket",
          "A haircut",
          "A table for lunch"
        ],
        "answer": 2,
        "explanation": "The caller begins by asking to book a haircut."
      },
      {
        "prompt": "Which appointment is finally agreed?",
        "options": [
          "Friday at two",
          "Thursday at eleven",
          "Friday at eleven",
          "Thursday at two"
        ],
        "answer": 0,
        "explanation": "Thursday is unsuitable, and both speakers settle on Friday at two."
      },
      {
        "prompt": "What does the receptionist ask the caller to do?",
        "options": [
          "Arrive five minutes early.",
          "Bring three books.",
          "Call again on Monday.",
          "Pay by phone now."
        ],
        "answer": 0,
        "explanation": "The receptionist asks for arrival five minutes before the appointment."
      }
    ],
    "listeningText": "Receptionist: Hello, Green Street Hair. Caller: Hello. Can I book a haircut this week? Receptionist: We have Thursday at eleven. Caller: I work on Thursday. Is Friday possible? Receptionist: Yes, Friday at two is free. Caller: That is good, thank you. My name is Dina Moss. Receptionist: Thank you, Dina. Please arrive five minutes early. Caller: Friday at two. I will be there. Receptionist: Lovely. See you then."
  },
  {
    "id": "a1-listen-weekend-weather",
    "level": "a1",
    "skill": "listening",
    "title": "Listen: choose a picnic day",
    "description": "Connect a simple forecast to a changed weekend plan.",
    "minutes": 10,
    "content": [
      {
        "heading": "Expect a comparison across days",
        "text": "The recording compares weather on two days. Make a small table with one line for each day before you listen. Catch a broad description first, such as wet or sunny. You can add the time of day and the practical plan during a later listening.",
        "examples": [
          "Saturday: listen for the weather.",
          "Sunday: listen for a contrast.",
          "The best picnic day may be mentioned last."
        ]
      },
      {
        "heading": "Listen beyond one familiar word",
        "text": "Sun, rain, and warm are useful clues, but their day and time matter. Do not choose a day just because you hear the word sunny somewhere in the message. Connect the weather phrase to the day it describes, and notice whether the speaker changes the original plan.",
        "examples": [
          "Rain on Saturday affects Saturday’s plan.",
          "Sunday morning is a specific period.",
          "But often introduces a contrast."
        ]
      },
      {
        "heading": "Turn the forecast into a short message",
        "text": "After listening, write a two-sentence message to a friend with the chosen day, meeting place, and item to bring. Read it aloud and check it against the recording. A forecast is an expectation rather than a guarantee, so people may need to check conditions again later.",
        "examples": [
          "Let’s meet on the chosen day.",
          "Add the meeting place.",
          "Mention the practical item to bring."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What weather is expected on Saturday afternoon?",
        "options": [
          "Rain",
          "Snow",
          "Hot sunshine",
          "Strong frost"
        ],
        "answer": 0,
        "explanation": "The speaker says rain is expected on Saturday afternoon."
      },
      {
        "prompt": "When do the friends plan to have the picnic?",
        "options": [
          "Saturday afternoon",
          "Sunday morning",
          "Monday evening",
          "Friday morning"
        ],
        "answer": 1,
        "explanation": "The speaker suggests Sunday morning instead of Saturday."
      },
      {
        "prompt": "What should the listener bring?",
        "options": [
          "A light jacket",
          "A large suitcase",
          "A textbook",
          "A bicycle helmet"
        ],
        "answer": 0,
        "explanation": "The message asks for a light jacket because it will be cool early on."
      }
    ],
    "listeningText": "Hi Sam. I checked the weekend weather. Saturday morning will be cloudy, and there will be rain in the afternoon. Sunday looks better: it will be dry and sunny in the morning. Let us have our picnic on Sunday instead. We can meet at the park gate at ten. Bring a light jacket because it will be cool early on. I will bring sandwiches. Please bring some fruit and water."
  },
  {
    "id": "a1-holiday-postcard",
    "level": "a1",
    "skill": "writing",
    "title": "Write a short holiday postcard",
    "description": "Describe a place, a current activity, and a friendly closing.",
    "minutes": 10,
    "content": [
      {
        "heading": "Choose details your reader can picture",
        "text": "A postcard is a short friendly message from a place you are visiting. Begin with a greeting and say where you are. Add one concrete detail about the place rather than a long list of adjectives. Imagine a friend who has never seen the place.",
        "examples": [
          "Dear Imran,",
          "I am in a small town by the sea.",
          "Our hotel is near the beach."
        ]
      },
      {
        "heading": "Use the right time for each idea",
        "text": "Use the present simple for a general fact and the present continuous for what is happening now. A time phrase can help. You can also describe a regular holiday activity. Keep the same person and place clear so the reader understands who is doing each action.",
        "examples": [
          "The town has a busy market.",
          "I am sitting in a café now.",
          "We walk by the sea every morning."
        ]
      },
      {
        "heading": "Finish and check your message",
        "text": "Write about fifty words with a greeting, location, two details, and a closing. Check that names and places begin with capitals. Read each verb and ask whether it describes a general fact or a current activity. Finish with a friendly line that suits your relationship with the reader.",
        "examples": [
          "See you soon!",
          "Best wishes, Maya",
          "I hope you are well."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence describes an action happening now?",
        "options": [
          "The town has a market.",
          "I visit every year.",
          "The hotel is near the beach.",
          "I am sitting in a café now."
        ],
        "answer": 3,
        "explanation": "Am sitting is present continuous and now identifies the current action."
      },
      {
        "prompt": "Which detail helps a reader picture the location?",
        "options": [
          "It is nice nice nice.",
          "There are things there.",
          "I am somewhere.",
          "The hotel is beside a quiet river."
        ],
        "answer": 3,
        "explanation": "A quiet river beside the hotel gives a specific visual detail."
      },
      {
        "prompt": "Which ending suits a friendly postcard?",
        "options": [
          "To the accounts department,",
          "See you soon!",
          "Payment overdue immediately.",
          "Reference number only."
        ],
        "answer": 1,
        "explanation": "See you soon is a natural friendly closing."
      }
    ]
  },
  {
    "id": "a1-weekday-paragraph",
    "level": "a1",
    "skill": "writing",
    "title": "Write about a weekday",
    "description": "Organize a short routine paragraph with times and linking words.",
    "minutes": 10,
    "content": [
      {
        "heading": "Choose one typical day",
        "text": "Write about a normal weekday rather than every possible activity in your life. Use the present simple for routines. Select a few actions that help the reader follow your day from morning to evening. A clear first sentence tells the reader what the paragraph is about.",
        "examples": [
          "My weekdays are usually busy.",
          "I wake up at six.",
          "I take the bus to college."
        ]
      },
      {
        "heading": "Add times and order words",
        "text": "Use first, then, after that, and finally to show an order. Do not begin every sentence with then when a time phrase can be clearer. Put at before a clock time and in before a part of the day, except at night.",
        "examples": [
          "At seven, I have breakfast.",
          "In the afternoon, I study English.",
          "After dinner, I read for twenty minutes."
        ]
      },
      {
        "heading": "Check the reader’s route through the day",
        "text": "Write six to eight sentences and read them in order. Can a reader follow what happens first and last? Check third-person s if you describe another person, and use the base verb after don’t or doesn’t. Add one reason with because to make the paragraph more personal.",
        "examples": [
          "I go to bed early because I start work at seven.",
          "She studies after dinner.",
          "She doesn’t watch television on weekdays."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which tense normally describes a regular weekday routine?",
        "options": [
          "Present simple",
          "Past perfect only",
          "Future perfect only",
          "Present continuous in every sentence"
        ],
        "answer": 0,
        "explanation": "The present simple describes repeated activities and routines."
      },
      {
        "prompt": "Which phrase gives a clock time correctly?",
        "options": [
          "in seven",
          "at seven",
          "on seven",
          "by seven o’clock yesterday only"
        ],
        "answer": 1,
        "explanation": "At is the normal preposition for the time an activity happens."
      },
      {
        "prompt": "Which sentence gives a reason?",
        "options": [
          "I sleep early and work.",
          "I sleep early because I start work at seven.",
          "First I sleep.",
          "My work starts at seven."
        ],
        "answer": 1,
        "explanation": "Because introduces the reason for sleeping early."
      }
    ]
  },
  {
    "id": "a1-simple-directions-steps",
    "level": "a1",
    "skill": "writing",
    "title": "Write clear step-by-step instructions",
    "description": "Use action verbs, sequence words, and useful checks.",
    "minutes": 10,
    "content": [
      {
        "heading": "Tell the reader the goal",
        "text": "Instructions help someone complete a task. Start with a clear title, such as How to join the reading club. Give one action in each step and use a base verb at the start. Avoid hiding an important action inside a long sentence with several unrelated ideas.",
        "examples": [
          "How to join the reading club",
          "First, open the club page.",
          "Next, choose a meeting day."
        ]
      },
      {
        "heading": "Choose words the reader can act on",
        "text": "A useful step names both an action and its object. Click is less helpful than Click Join the club. If the reader needs to type something, state exactly what kind of information is needed. Use a warning or negative instruction only when it is relevant to the task.",
        "examples": [
          "Type your first name.",
          "Choose one day from the list.",
          "Don’t leave the name box empty."
        ]
      },
      {
        "heading": "Try your steps as a new learner",
        "text": "Write four steps for a simple task on paper or a familiar device. Follow only the words you wrote, without filling gaps from memory. Add a missing detail when you get stuck. Finish with a check that tells the reader whether the task has succeeded.",
        "examples": [
          "Finally, press Save.",
          "Check that your chosen day appears.",
          "If it is wrong, choose the day again."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which instruction gives the clearest action?",
        "options": [
          "Click Save to keep your choice.",
          "Do the thing.",
          "It happens over there.",
          "Maybe this is good."
        ],
        "answer": 0,
        "explanation": "The instruction names the action, the control, and its purpose."
      },
      {
        "prompt": "What is a good way to organize simple instructions?",
        "options": [
          "Put every action into one long sentence.",
          "Remove all action words.",
          "Start with the final result and omit the process.",
          "One clear action in each step."
        ],
        "answer": 3,
        "explanation": "Separate steps help the reader follow the sequence."
      },
      {
        "prompt": "Which word normally introduces the last step?",
        "options": [
          "Yesterday",
          "Finally",
          "Usually",
          "Because"
        ],
        "answer": 1,
        "explanation": "Finally signals the last step in a sequence."
      }
    ]
  },
  {
    "id": "a1-ship-and-sheep-vowels",
    "level": "a1",
    "skill": "speaking",
    "title": "Hear and say ship and sheep",
    "description": "Make two common vowel sounds clearer in useful short phrases.",
    "minutes": 10,
    "content": [
      {
        "heading": "Compare two vowel sounds",
        "text": "Ship and sheep have different vowel sounds in many English accents. Sheep has a longer vowel with the tongue relatively high and forward. Ship has a shorter, more relaxed vowel. Listen to a model, then alternate the words slowly. Length helps, but tongue position also matters.",
        "examples": [
          "ship / sheep",
          "sit / seat",
          "live / leave"
        ]
      },
      {
        "heading": "Practice inside a meaningful phrase",
        "text": "A sound contrast becomes more useful when a listener can identify the intended word in a sentence. Keep the rest of the sentence steady and change only the target word. Record a short phrase if possible, then decide whether the whole word is clear, not whether your accent is perfect.",
        "examples": [
          "This is a ship.",
          "This is a sheep.",
          "Please sit in this seat."
        ]
      },
      {
        "heading": "Check understanding through a choice",
        "text": "With a partner, point to pictures or write the two words on paper. Say one phrase and let the listener choose the word they heard. If they choose differently, repeat slowly and check the vowel. Swap roles and keep the exchange relaxed; the purpose is understandable communication.",
        "examples": [
          "Did you say ship or sheep?",
          "I said sheep, the animal.",
          "Thank you. That is clear now."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which pair practices the same vowel contrast as ship and sheep?",
        "options": [
          "sit and seat",
          "cat and cut",
          "coat and caught",
          "pen and Ben"
        ],
        "answer": 0,
        "explanation": "Sit has the vowel of ship; seat has the vowel of sheep in many accents."
      },
      {
        "prompt": "Which extra information clarifies sheep?",
        "options": [
          "The boat.",
          "The animal.",
          "The chair.",
          "The address."
        ],
        "answer": 1,
        "explanation": "Naming the animal meaning helps distinguish sheep from ship."
      },
      {
        "prompt": "What is the purpose of this pronunciation practice?",
        "options": [
          "Make the intended word easier to understand.",
          "Make all speakers have an identical accent.",
          "Remove every pause.",
          "Speak faster than the listener can follow."
        ],
        "answer": 0,
        "explanation": "Clear distinctions support communication; an identical accent is unnecessary."
      }
    ]
  },
  {
    "id": "a1-stress-in-everyday-words",
    "level": "a1",
    "skill": "speaking",
    "title": "Find the strong beat in a word",
    "description": "Notice word stress in familiar words and new vocabulary.",
    "minutes": 10,
    "content": [
      {
        "heading": "Listen for a stronger syllable",
        "text": "A word with several syllables usually has one main stressed syllable. It may sound longer, clearer, or stronger than the others. Listen before looking only at spelling. Clap the syllables and then make one beat stronger. Capital letters in the examples mark stress for practice, not normal writing.",
        "examples": [
          "TAble",
          "beGIN",
          "aBOUT"
        ]
      },
      {
        "heading": "Learn stress with the whole word",
        "text": "Write a new word with its meaning and mark the stressed syllable in your notes. Stress is part of pronunciation, just like the sounds. Do not assume all two-syllable words follow the same pattern. A dictionary audio model can help when you are unsure of a particular word.",
        "examples": [
          "DOCtor",
          "hoTEL",
          "toDAY"
        ]
      },
      {
        "heading": "Use the word in a short exchange",
        "text": "Choose three words from this lesson and put each into a useful sentence. Keep the word’s stressed beat clear, then speak the sentence at a comfortable pace. Ask a listener which key word they heard. Repeat only the unclear part and let them confirm the meaning.",
        "examples": [
          "The hotel is near the station.",
          "I need a doctor.",
          "Can we begin now?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which syllable normally carries the main stress in hotel?",
        "options": [
          "The first: HO.",
          "Both must be shouted equally.",
          "Only the final letter l.",
          "The second: TEL."
        ],
        "answer": 3,
        "explanation": "Hotel usually has main stress on its second syllable."
      },
      {
        "prompt": "How should you learn stress for a new word?",
        "options": [
          "Assume every first syllable is stressed.",
          "Listen to the whole word and mark its stressed syllable.",
          "Ignore pronunciation completely.",
          "Add a new written letter."
        ],
        "answer": 1,
        "explanation": "Learning a word with its stress helps you recognize and say it clearly."
      },
      {
        "prompt": "What do the capitals mean in beGIN here?",
        "options": [
          "The word must always be written that way.",
          "The word is a person’s name.",
          "The second syllable has the main stress.",
          "The first syllable is silent."
        ],
        "answer": 2,
        "explanation": "The capitalized part shows the stressed syllable for pronunciation practice."
      }
    ]
  },
  {
    "id": "a1-share-a-conversation",
    "level": "a1",
    "skill": "speaking",
    "title": "Keep a short conversation going",
    "description": "Ask a follow-up, show interest, and give the other person a turn.",
    "minutes": 10,
    "content": [
      {
        "heading": "Give more than a one-word answer",
        "text": "A conversation is easier when an answer gives a small detail the other person can respond to. You do not need a long speech. Answer the question, add one true detail, and stop. This makes room for another turn while offering a useful topic.",
        "examples": [
          "Do you like music? Yes, I like jazz.",
          "Where do you study? At the college near the park.",
          "I read short stories after dinner."
        ]
      },
      {
        "heading": "Ask a connected follow-up question",
        "text": "A follow-up question uses information the speaker just gave. If they mention jazz, ask about a singer or when they listen. Do not jump straight to an unrelated personal question. A simple really or that sounds interesting can show attention before the follow-up.",
        "examples": [
          "Who is your favourite singer?",
          "When do you usually listen?",
          "That sounds interesting. Tell me more."
        ]
      },
      {
        "heading": "Invite your partner into the exchange",
        "text": "If you have spoken for a while, ask and you or what about you to return the turn. Listen until your partner finishes before replying. Practice a one-minute exchange about a hobby with equal time for both people. End naturally when the activity or conversation is finished.",
        "examples": [
          "I like reading. What about you?",
          "Sorry, please finish your idea.",
          "It was nice talking with you."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Someone says, “I like jazz.” Which follow-up stays on the topic?",
        "options": [
          "Where is my blue pen?",
          "How much is the bread?",
          "Is the train cancelled?",
          "Who is your favourite jazz singer?"
        ],
        "answer": 3,
        "explanation": "The question develops the music topic the speaker introduced."
      },
      {
        "prompt": "Which phrase invites the other person to speak?",
        "options": [
          "Listen only to me.",
          "I will not stop.",
          "What about you?",
          "Your answer is unnecessary."
        ],
        "answer": 2,
        "explanation": "What about you returns the question or topic to the other person."
      },
      {
        "prompt": "Which response best supports a short conversation?",
        "options": [
          "Give a twenty-minute speech immediately.",
          "Answer and add one relevant detail.",
          "Interrupt every sentence.",
          "Ignore every answer."
        ],
        "answer": 1,
        "explanation": "A relevant detail gives the partner something to respond to while leaving room for turns."
      }
    ]
  },
  {
    "id": "a2-grammar",
    "level": "a2",
    "skill": "grammar",
    "title": "Yesterday, today, tomorrow",
    "description": "Describe past events and future intentions clearly.",
    "minutes": 13,
    "content": [
      {
        "heading": "Finished actions in the past",
        "text": "Use the past simple for a finished action at a finished time. Regular verbs often add ed; common irregular forms include went, saw, and bought. Use did for questions and didn’t for negatives, followed by the base verb. A time phrase helps your listener place the event.",
        "examples": [
          "We visited Galle last weekend.",
          "She went by train.",
          "Did you enjoy the journey?"
        ]
      },
      {
        "heading": "Plans and intentions",
        "text": "Use be going to plus a base verb for an intention or a plan already made. Keep the form of be matched to the subject. Compare your last weekend with your next one. Time expressions such as yesterday and next Saturday make the change of tense easier to follow.",
        "examples": [
          "I’m going to study tonight.",
          "They aren’t going to travel tomorrow.",
          "Are you going to call her?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "We ___ to the beach last Sunday.",
        "options": [
          "went",
          "going",
          "go",
          "are going"
        ],
        "answer": 0,
        "explanation": "Last Sunday is a finished past time; the past of go is went."
      },
      {
        "prompt": "Choose the correct past question.",
        "options": [
          "Did she buy a ticket?",
          "Did she bought a ticket?",
          "Does she bought a ticket?",
          "Was she buy a ticket?"
        ],
        "answer": 0,
        "explanation": "After did, use the base form buy."
      },
      {
        "prompt": "Which sentence describes a future intention?",
        "options": [
          "I have a visitor.",
          "I’m going to visit her tomorrow.",
          "I visited her yesterday.",
          "I visit her every week."
        ],
        "answer": 1,
        "explanation": "Be going to plus visit describes a planned future action."
      }
    ]
  },
  {
    "id": "a2-vocabulary",
    "level": "a2",
    "skill": "vocabulary",
    "title": "Travel without getting lost",
    "description": "Learn transport, accommodation, and travel problem vocabulary.",
    "minutes": 10,
    "content": [
      {
        "heading": "From booking to arrival",
        "text": "Travel words become easier when you learn them in order: book a ticket, pack a suitcase, check in, board the train, and arrive at your destination. A departure is when a service leaves; an arrival is when it reaches a place. Use the correct preposition with common destinations.",
        "examples": [
          "The train departs at nine.",
          "We arrived at the station early.",
          "They arrived in Paris yesterday."
        ]
      },
      {
        "heading": "Explain a small problem",
        "text": "A delay means something happens later than planned; a cancellation means it will not happen. A reservation is an arrangement to keep a room or seat for you. State the problem, give an identifying detail, then ask for help. Learn complete phrases so you can use them quickly.",
        "examples": [
          "My train is delayed.",
          "I have a reservation under the name Perera.",
          "Could you help me find platform three?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "A train is delayed. What does that mean?",
        "options": [
          "It has no passengers.",
          "It will never run again.",
          "It has already arrived early.",
          "It will leave or arrive later than planned."
        ],
        "answer": 3,
        "explanation": "A delay changes the timing; it does not necessarily mean a cancellation."
      },
      {
        "prompt": "Choose the natural phrase.",
        "options": [
          "arrive to Paris",
          "do a suitcase",
          "make the station",
          "book a ticket"
        ],
        "answer": 3,
        "explanation": "Book a ticket means reserve or buy a place for a journey."
      },
      {
        "prompt": "Which sentence uses arrive correctly?",
        "options": [
          "We arrived on Paris.",
          "We arrived in the platform.",
          "We arrived at the station.",
          "We arrived to the station."
        ],
        "answer": 2,
        "explanation": "Use arrive at for a specific place such as a station; use arrive in for a city or country."
      }
    ]
  },
  {
    "id": "a2-reading",
    "level": "a2",
    "skill": "reading",
    "title": "Compare two useful options",
    "description": "Read for conditions, prices, and the best fit.",
    "minutes": 11,
    "content": [
      {
        "heading": "Read the details that matter",
        "text": "Compare these classes. “Morning English: Monday and Wednesday, 9–10 a.m., £40 per month. Beginners welcome. Online only. Evening English: Tuesday and Thursday, 6–7:30 p.m., £55 per month. Some English needed. Classroom lessons; materials included.” First decide what you need, then locate details that match.",
        "examples": [
          "Morning English is cheaper.",
          "Evening English meets in a classroom.",
          "Both classes meet twice a week."
        ]
      },
      {
        "heading": "Do not add information",
        "text": "A text may not answer every question. Materials are explicitly included in the evening class, but the text does not say whether they are included in the morning class. Separate a stated fact from an assumption. When comparing choices, mention both your requirement and the supporting detail.",
        "examples": [
          "A complete beginner can choose Morning English.",
          "The text does not name either teacher.",
          "Someone working mornings may prefer the evening option."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which class explicitly welcomes complete beginners?",
        "options": [
          "Morning English",
          "Neither class",
          "Evening English",
          "Both classes"
        ],
        "answer": 0,
        "explanation": "Morning English says “Beginners welcome”; evening students need some English."
      },
      {
        "prompt": "How much more does Evening English cost each month?",
        "options": [
          "£40",
          "£55",
          "£95",
          "£15"
        ],
        "answer": 3,
        "explanation": "£55 minus £40 is £15."
      },
      {
        "prompt": "What can we say about materials for Morning English?",
        "options": [
          "They are definitely free.",
          "They cost £15.",
          "Students cannot use them.",
          "The text does not say."
        ],
        "answer": 3,
        "explanation": "Only the evening description mentions materials. Missing information is not the same as a negative fact."
      }
    ]
  },
  {
    "id": "a2-listening",
    "level": "a2",
    "skill": "listening",
    "title": "Listen: find your way",
    "description": "Follow directions and notice a temporary change.",
    "minutes": 10,
    "listeningText": "To get to the museum, walk straight along King Street. Turn left at the bank, then take the second right. The museum is opposite the park. The main entrance is closed today, so use the side entrance beside the café. The museum closes at four thirty this afternoon, an hour earlier than usual.",
    "content": [
      {
        "heading": "Turn words into a route",
        "text": "For directions, listen for action words and landmarks. Straight, left, right, opposite, and beside tell you how places relate to each other. Sketch a simple route while listening. A landmark such as a bank is often easier to remember than a street number.",
        "examples": [
          "Go straight along King Street.",
          "Turn left at the bank.",
          "Opposite means on the other side, facing it."
        ]
      },
      {
        "heading": "Catch the practical change",
        "text": "Announcements often add an exception after the main information. Listen for today, closed, instead, and earlier. These details can change what you need to do. Replay the final sentences and check the entrance and closing time separately.",
        "examples": [
          "Use the side entrance beside the café.",
          "Today’s closing time: 4:30 p.m.",
          "An hour earlier means one hour before the usual time."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Where should you turn left?",
        "options": [
          "At the bank",
          "At the café",
          "At the park gate",
          "At the museum"
        ],
        "answer": 0,
        "explanation": "The direction is “Turn left at the bank.”"
      },
      {
        "prompt": "Which entrance should visitors use today?",
        "options": [
          "Any entrance on King Street",
          "The main entrance",
          "The entrance inside the park",
          "The side entrance beside the café"
        ],
        "answer": 3,
        "explanation": "The main entrance is closed, so visitors should use the side entrance."
      },
      {
        "prompt": "What time does the museum close today?",
        "options": [
          "4:00 p.m.",
          "4:30 p.m.",
          "3:30 p.m.",
          "5:30 p.m."
        ],
        "answer": 1,
        "explanation": "The speaker says four thirty. The usual closing time is one hour later."
      }
    ]
  },
  {
    "id": "a2-writing",
    "level": "a2",
    "skill": "writing",
    "title": "Tell a short story",
    "description": "Organize a real experience with a beginning, middle, and end.",
    "minutes": 15,
    "content": [
      {
        "heading": "Put events in a clear order",
        "text": "A short personal story needs a setting, events, and a result. Begin with when and where. Use the past simple for the main finished events. Link them with first, then, after that, and finally. Choose only the details your reader needs to follow what happened.",
        "examples": [
          "Last Saturday, I visited a friend in Galle.",
          "First, we explored the old town.",
          "After that, we had lunch near the sea."
        ]
      },
      {
        "heading": "Add a feeling and revise",
        "text": "A final sentence about your feelings gives the story a natural ending. Write 80–100 words about a journey, celebration, or surprising day. Then check the order of events, past verb forms, spelling, and punctuation. Replace repeated words only when another word keeps the same meaning.",
        "examples": [
          "We missed the bus, so we walked home.",
          "I felt tired, but I was happy.",
          "It was a day I will remember."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which is the strongest opening for a short past story?",
        "options": [
          "And then this.",
          "Nice weather.",
          "Last Sunday, my family visited the beach.",
          "Finally, it ended."
        ],
        "answer": 2,
        "explanation": "The opening establishes when, who, and where."
      },
      {
        "prompt": "Choose the logical order.",
        "options": [
          "Then → finally → first",
          "Finally → then → first",
          "First → then → finally",
          "Finally → first → then"
        ],
        "answer": 2,
        "explanation": "First begins the sequence, then adds the next event, and finally introduces the last event."
      },
      {
        "prompt": "Which ending adds a feeling about the experience?",
        "options": [
          "I felt proud because I tried something new.",
          "The bus has four wheels.",
          "Saturday is a day.",
          "I have a bag."
        ],
        "answer": 0,
        "explanation": "The sentence reflects on how the experience affected the writer."
      }
    ]
  },
  {
    "id": "a2-speaking",
    "level": "a2",
    "skill": "speaking",
    "title": "Describe it, compare it",
    "description": "Talk about places and experiences with useful supporting details.",
    "minutes": 12,
    "content": [
      {
        "heading": "Give more than a one-word answer",
        "text": "Answer the question directly, add a reason, and give a small example. This simple pattern helps a listener follow you. Practice describing your town, a favourite meal, or a recent trip for 30–45 seconds. Pause between ideas instead of rushing through one long sentence.",
        "examples": [
          "I like my town because it is peaceful.",
          "For example, there is a quiet park near my house.",
          "Last week, I went there with my sister."
        ]
      },
      {
        "heading": "Compare with a clear basis",
        "text": "Use adjective plus er for many short adjectives and more plus adjective for many longer ones. Use than to introduce the second thing. Name the feature you are comparing: price, size, comfort, or speed. Remember common irregular forms: good becomes better and bad becomes worse.",
        "examples": [
          "The train is cheaper than a taxi.",
          "This hotel is more comfortable.",
          "The new route is better for me."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which answer develops “Do you like your town?” best?",
        "options": [
          "Yes.",
          "Yes, because it is peaceful and I can walk to a lovely park.",
          "Town.",
          "I do. Yes. Yes."
        ],
        "answer": 1,
        "explanation": "It answers directly and supports the answer with a reason and detail."
      },
      {
        "prompt": "Choose the correct comparison.",
        "options": [
          "A train is cheapest than a taxi.",
          "A train is cheaper than a taxi.",
          "A train is cheap that a taxi.",
          "A train is more cheap a taxi."
        ],
        "answer": 1,
        "explanation": "Use the comparative cheaper followed by than."
      },
      {
        "prompt": "What is the comparative form of good?",
        "options": [
          "Best than",
          "Better",
          "Gooder",
          "More good"
        ],
        "answer": 1,
        "explanation": "Better is the irregular comparative of good."
      }
    ]
  },
  {
    "id": "a2-present-perfect-experiences",
    "level": "a2",
    "skill": "grammar",
    "title": "Experiences up to now",
    "description": "Use the present perfect for experiences without a finished past time.",
    "minutes": 12,
    "content": [
      {
        "heading": "Connect experience with the present",
        "text": "Use have or has plus a past participle to talk about an experience at an unspecified time before now. Use have with I, you, we, and they; use has with he, she, and it. Common participles include visited, seen, eaten, and been.",
        "examples": [
          "I have visited Jaffna.",
          "She has seen that film.",
          "We have eaten there before."
        ]
      },
      {
        "heading": "Ask about experience with ever",
        "text": "Ever in a question means at any time before now. Never means not at any time before now, so do not add another negative to it. Ask about an experience first, then use the past simple if you give a specific finished time for it.",
        "examples": [
          "Have you ever ridden a horse?",
          "I have never flown in a plane.",
          "Yes, I rode a horse last year."
        ]
      },
      {
        "heading": "Choose between a life experience and a dated event",
        "text": "Compare I have seen that film with I saw that film on Monday. The first tells you about experience; the second places the event at a finished time. Write three true or imaginary experiences and add a separate past-simple sentence with details for one of them.",
        "examples": [
          "I have been to Galle.",
          "I went there in June.",
          "I haven’t tried sushi yet."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence correctly describes an experience without a finished date?",
        "options": [
          "She have visited Nepal.",
          "She has visited Nepal.",
          "She has visit Nepal.",
          "She visited Nepal tomorrow."
        ],
        "answer": 1,
        "explanation": "She takes has, followed by the past participle visited."
      },
      {
        "prompt": "Choose the correct sentence about a finished day.",
        "options": [
          "I have seen that film yesterday.",
          "I saw that film yesterday.",
          "I has seen that film yesterday.",
          "I see that film yesterday."
        ],
        "answer": 1,
        "explanation": "Yesterday is a finished past time, so the past simple saw fits."
      },
      {
        "prompt": "What does “I have never flown” mean?",
        "options": [
          "At no time before now have I flown.",
          "I fly every week.",
          "I am flying now.",
          "I flew yesterday only."
        ],
        "answer": 0,
        "explanation": "Never means not at any time before now in this experience statement."
      }
    ]
  },
  {
    "id": "a2-past-continuous-background",
    "level": "a2",
    "skill": "grammar",
    "title": "What was happening then?",
    "description": "Describe an action in progress when a shorter past event happened.",
    "minutes": 12,
    "content": [
      {
        "heading": "Build a past action in progress",
        "text": "Use was or were plus an ing form to describe something happening at a particular past moment. Use was with I, he, she, and it, and were with you, we, and they. The sentence looks back at an activity while it was still in progress.",
        "examples": [
          "At eight, I was cooking.",
          "They were waiting outside.",
          "She wasn’t sleeping."
        ]
      },
      {
        "heading": "Add a shorter past event",
        "text": "A past continuous action can provide the background for a past simple event. When often introduces the event that happened during the longer activity. Keep the event order clear: the background activity was already happening. The sentence does not always say whether it stopped afterward.",
        "examples": [
          "I was reading when the phone rang.",
          "We were walking when it started to rain.",
          "He was cooking when I arrived."
        ]
      },
      {
        "heading": "Describe a scene, then a change",
        "text": "Picture a room or street at a past time. Write two sentences about what people were doing and one sentence about a sudden event. Check was and were, then check your irregular past-simple forms. Read the result aloud and ask whether the background and the new event are easy to separate.",
        "examples": [
          "The children were playing.",
          "Their father was making tea.",
          "Then the lights went out."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "At nine yesterday, they ___ for the bus.",
        "options": [
          "was waiting",
          "were waiting",
          "are wait",
          "waiting were"
        ],
        "answer": 1,
        "explanation": "They takes were, followed by the ing form waiting."
      },
      {
        "prompt": "Which sentence shows a background action and a shorter event?",
        "options": [
          "I read every day.",
          "I will read tomorrow.",
          "I was reading when the phone rang.",
          "I have a phone."
        ],
        "answer": 2,
        "explanation": "Was reading gives the action in progress; rang gives the event that happened during it."
      },
      {
        "prompt": "Complete the past scene: “She ___ making tea.”",
        "options": [
          "were",
          "are",
          "does",
          "was"
        ],
        "answer": 3,
        "explanation": "She takes was in the past continuous."
      }
    ]
  },
  {
    "id": "a2-advice-and-obligation",
    "level": "a2",
    "skill": "grammar",
    "title": "Advice, rules, and things you don’t need",
    "description": "Distinguish should, have to, mustn’t, and don’t have to.",
    "minutes": 12,
    "content": [
      {
        "heading": "Give advice with should",
        "text": "Use should plus a base verb to recommend an action. Shouldn’t recommends avoiding an action. Advice offers a good idea; it does not automatically describe a rule. Add a reason so the listener understands why you recommend it, and choose a polite tone for personal suggestions.",
        "examples": [
          "You should check the address before leaving.",
          "You shouldn’t leave your bag open.",
          "We should arrive early because the queue is long."
        ]
      },
      {
        "heading": "Describe a requirement with have to",
        "text": "Have to often expresses a requirement or necessity. Use has to with he, she, and it. In questions and negatives, use do or does followed by have to. A clear requirement tells a person what is necessary in that particular situation.",
        "examples": [
          "Visitors have to sign in.",
          "She has to bring her ID.",
          "Do we have to book first?"
        ]
      },
      {
        "heading": "Separate forbidden from unnecessary",
        "text": "Mustn’t means an action is not allowed. Don’t have to means it is not necessary, but it may still be allowed. Confusing these changes a rule. Write two rules for an imaginary library and one optional action, then explain which actions are required, forbidden, or simply optional.",
        "examples": [
          "You mustn’t eat in this room.",
          "You don’t have to bring a pen; we provide one.",
          "You have to return books on time."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "“You don’t have to bring a pen” means what?",
        "options": [
          "Bringing a pen is forbidden.",
          "Bringing a pen is not necessary.",
          "You must buy three pens.",
          "You must leave every pen outside."
        ],
        "answer": 1,
        "explanation": "Don’t have to removes the necessity; it does not forbid the action."
      },
      {
        "prompt": "Which sentence gives advice?",
        "options": [
          "The train left at six.",
          "This is a train station.",
          "You should check the train time.",
          "I checked the time yesterday."
        ],
        "answer": 2,
        "explanation": "Should plus a base verb expresses a recommendation."
      },
      {
        "prompt": "Which sentence means eating is forbidden?",
        "options": [
          "You don’t have to eat here.",
          "You should eat here.",
          "You can eat here.",
          "You mustn’t eat here."
        ],
        "answer": 3,
        "explanation": "Mustn’t expresses prohibition: the action is not allowed."
      }
    ]
  },
  {
    "id": "a2-health-appointment-words",
    "level": "a2",
    "skill": "vocabulary",
    "title": "Explain a health concern in English",
    "description": "Describe common symptoms and understand appointment language.",
    "minutes": 12,
    "content": [
      {
        "heading": "Name what you are experiencing",
        "text": "A symptom is a change you notice in your body, such as a cough or a headache. English uses have with many symptom nouns. Hurt can describe a painful body part. Learn the language to report your experience clearly rather than using these words to diagnose a condition.",
        "examples": [
          "I have a headache.",
          "My throat hurts.",
          "I have had a cough since Monday."
        ]
      },
      {
        "heading": "Understand common service words",
        "text": "An appointment is an agreed time to see someone. A receptionist helps organize bookings. A prescription is an authorized instruction for supplying a medicine. A pharmacy is a place where medicines are supplied. The words describe different parts of a visit and should not be treated as interchangeable.",
        "examples": [
          "I would like to make an appointment.",
          "The receptionist confirmed my time.",
          "I took the prescription to a pharmacy."
        ]
      },
      {
        "heading": "Prepare a clear language summary",
        "text": "For a speaking exercise, invent a non-urgent situation and give the symptom, when it began, and a question for the appointment desk. Use since with the starting point and for with a duration. This lesson practices communication and does not decide what treatment a person needs.",
        "examples": [
          "It started yesterday.",
          "I have felt tired for two days.",
          "Is an appointment available this afternoon?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence clearly reports a symptom?",
        "options": [
          "My throat hurts.",
          "My appointment is a chair.",
          "I prescription yesterday.",
          "The cough is a receptionist."
        ],
        "answer": 0,
        "explanation": "My throat hurts identifies a body part and the discomfort."
      },
      {
        "prompt": "Who commonly helps organize an appointment at a clinic?",
        "options": [
          "A passenger",
          "A mechanic",
          "A receptionist",
          "A gardener"
        ],
        "answer": 2,
        "explanation": "Organizing bookings is a common receptionist task."
      },
      {
        "prompt": "Which phrase correctly describes a duration?",
        "options": [
          "since two days",
          "at two days",
          "on two days ago",
          "for two days"
        ],
        "answer": 3,
        "explanation": "Use for with a length of time such as two days."
      }
    ]
  },
  {
    "id": "a2-feelings-and-reactions",
    "level": "a2",
    "skill": "vocabulary",
    "title": "Say how an experience made you feel",
    "description": "Distinguish feelings from the things that cause them.",
    "minutes": 12,
    "content": [
      {
        "heading": "Name a feeling precisely",
        "text": "Excited describes positive energy about something, worried describes concern, disappointed describes an unmet hope, and relieved describes feeling better after a worry ends. Choose the word that matches the situation instead of using good or bad every time. A short reason helps the listener follow your meaning.",
        "examples": [
          "I am excited about the trip.",
          "She is worried about the delay.",
          "We felt relieved when the key was found."
        ]
      },
      {
        "heading": "Compare ed and ing adjectives",
        "text": "An ed adjective often describes a person’s feeling, while the related ing adjective describes what causes the feeling. I am bored describes me; the film is boring describes the film’s effect. These are useful patterns, but learn whole examples rather than changing every adjective ending mechanically.",
        "examples": [
          "The lesson is interesting. I am interested.",
          "The journey was tiring. We were tired.",
          "The noise was annoying. He was annoyed."
        ]
      },
      {
        "heading": "Use feelings without guessing for others",
        "text": "Describe your own reaction and give its cause. When talking about another person, use what they told you or ask how they feel instead of assuming. Write three short sentences about an imaginary event, each with a different feeling and a concrete reason.",
        "examples": [
          "I was disappointed because the concert was cancelled.",
          "How did you feel about the result?",
          "I was relieved because I passed."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence describes the person’s feeling correctly?",
        "options": [
          "I was interested in the story.",
          "I was interesting in the story.",
          "The story was interested to me.",
          "I was interest in the story."
        ],
        "answer": 0,
        "explanation": "Interested describes how the person feels; interesting describes the story’s effect."
      },
      {
        "prompt": "You were worried, but the missing key is now found. Which feeling fits?",
        "options": [
          "Disappointed",
          "Bored",
          "Jealous",
          "Relieved"
        ],
        "answer": 3,
        "explanation": "Relieved describes the positive feeling when a worry is removed."
      },
      {
        "prompt": "Which pair uses the adjectives naturally?",
        "options": [
          "The walk was tired, so I felt tiring.",
          "The walk was tiring, so I felt tired.",
          "The walk was tiring, so I felt tiring.",
          "The walk tired was, so tired I."
        ],
        "answer": 1,
        "explanation": "Tiring describes the activity’s effect; tired describes the person’s feeling."
      }
    ]
  },
  {
    "id": "a2-word-families-and-opposites",
    "level": "a2",
    "skill": "vocabulary",
    "title": "Build vocabulary from word families",
    "description": "Recognize useful prefixes, suffixes, and changes in word type.",
    "minutes": 12,
    "content": [
      {
        "heading": "Notice a base word and its relatives",
        "text": "A word family includes related words with different forms or jobs. Teach is a verb and teacher is a noun for a person. Help can become helpful. Learn the meaning and grammar of the new form together; a familiar base does not guarantee you know how to use every relative.",
        "examples": [
          "She teaches English.",
          "She is an English teacher.",
          "Your explanation is helpful."
        ]
      },
      {
        "heading": "Use common negative prefixes carefully",
        "text": "Un often changes an adjective to its opposite, as in happy and unhappy. Other words use different prefixes, such as possible and impossible. A prefix is a clue, not a rule that works with every word. Check a dictionary example before inventing a new opposite.",
        "examples": [
          "kind → unkind",
          "possible → impossible",
          "correct → incorrect"
        ]
      },
      {
        "heading": "Choose the form that fits the sentence",
        "text": "Look at the word’s position. After a or an, you often need a noun naming a person or thing. Before a noun, you may need an adjective. Build a small notebook table with base word, new form, meaning, and an original sentence that shows the right grammar.",
        "examples": [
          "He is a careful driver.",
          "She drives carefully.",
          "This is a useful guide."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which word names a person who teaches?",
        "options": [
          "Teachly",
          "Teachingful",
          "Teachness",
          "Teacher"
        ],
        "answer": 3,
        "explanation": "Teacher is the person noun formed from teach."
      },
      {
        "prompt": "Which is the normal opposite of possible?",
        "options": [
          "Unpossible",
          "Dispossible",
          "Impossible",
          "Notpossible"
        ],
        "answer": 2,
        "explanation": "Possible normally takes the negative prefix im: impossible."
      },
      {
        "prompt": "Choose the word that fits: “This is a ___ guide.”",
        "options": [
          "usefully",
          "using",
          "useful",
          "uses"
        ],
        "answer": 2,
        "explanation": "Useful is an adjective that can describe the noun guide."
      }
    ]
  },
  {
    "id": "a2-volunteer-email",
    "level": "a2",
    "skill": "reading",
    "title": "Read a volunteer’s first-day email",
    "description": "Find changed arrangements, required items, and a reason.",
    "minutes": 12,
    "content": [
      {
        "heading": "Read the organizer’s message",
        "text": "“Hello volunteers, thank you for helping with Saturday’s river clean-up. We planned to meet at the bridge, but the path there is being repaired. Please meet outside the sports centre at 8:30 instead. We will walk to the river together. We provide gloves and collection bags. Bring drinking water and wear strong shoes. The work ends at 11. If heavy rain is forecast, we will email you by 7 on Saturday morning. —Asha”",
        "examples": [
          "The meeting place has changed.",
          "Gloves are provided.",
          "The work ends at 11."
        ]
      },
      {
        "heading": "Connect a change to its reason",
        "text": "The bridge is the original plan, and instead marks the replacement. A reader who stops at the first place name will go to the wrong location. Notice why the change happened. It is a repaired path, rather than bad weather, that causes this particular change of meeting place.",
        "examples": [
          "Original place: the bridge.",
          "Final place: outside the sports centre.",
          "Reason: the path is being repaired."
        ]
      },
      {
        "heading": "Separate what is provided from what to bring",
        "text": "Make two lists: the organizer’s supplies and the volunteer’s own items. Then add the meeting time and the possible weather message. The email does not say the event is already cancelled. Explain your first-day plan in three sentences using only confirmed information from the email.",
        "examples": [
          "Provided: gloves and collection bags.",
          "Bring: drinking water; wear strong shoes.",
          "A rain-related update may arrive by 7."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Where should volunteers meet?",
        "options": [
          "At the bridge.",
          "Inside the library.",
          "At the train station.",
          "Outside the sports centre."
        ],
        "answer": 3,
        "explanation": "The message replaces the bridge meeting with the sports centre."
      },
      {
        "prompt": "Why has the meeting place changed?",
        "options": [
          "The path near the bridge is being repaired.",
          "Heavy rain has already cancelled the event.",
          "The gloves are missing.",
          "The sports centre is closing."
        ],
        "answer": 0,
        "explanation": "The email specifically identifies path repairs as the reason."
      },
      {
        "prompt": "Which item should a volunteer bring?",
        "options": [
          "Collection bags",
          "Gloves",
          "Drinking water",
          "A repair tool"
        ],
        "answer": 2,
        "explanation": "Water is requested; gloves and collection bags are provided."
      }
    ]
  },
  {
    "id": "a2-cycle-hire-questions",
    "level": "a2",
    "skill": "reading",
    "title": "Understand a cycle-hire FAQ",
    "description": "Read conditions, exceptions, and responsibility in practical questions and answers.",
    "minutes": 12,
    "content": [
      {
        "heading": "Read the hire information",
        "text": "“Town Cycle Hire. Who can hire? Adults aged 18 or over with photo ID. How long? Standard hire is four hours. Return before 6 p.m., even if four hours have not passed. What is included? A helmet and a lock. Can I cancel? Cancel by 5 p.m. the previous day for a full refund. Later cancellations receive no refund, except when the shop closes because of unsafe weather.”",
        "examples": [
          "Photo ID is required.",
          "A helmet and lock are included.",
          "The daily return limit is 6 p.m."
        ]
      },
      {
        "heading": "Read the rule and its limit together",
        "text": "Four hours sounds like the normal hire length, but before 6 p.m. adds a separate limit. A person starting at 4 p.m. cannot keep the bicycle until 8 p.m. Words such as even if prevent a general rule from being applied in the wrong situation.",
        "examples": [
          "A 4 p.m. hire must still end before 6 p.m.",
          "Standard hire does not override closing time.",
          "Both age and ID conditions must be met."
        ]
      },
      {
        "heading": "Notice the refund exception",
        "text": "A full refund normally requires cancellation by 5 p.m. on the previous day. A late cancellation usually receives none, but the shop closing for unsafe weather is an exception. Practice explaining one ordinary case and one exception. Do not assume any mention of rain automatically means the shop is closed.",
        "examples": [
          "Cancel the previous day before the deadline.",
          "Unsafe-weather shop closure is a stated exception.",
          "Ordinary late cancellation has no refund."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "A customer hires at 4 p.m. When must the bicycle be returned?",
        "options": [
          "Before 6 p.m.",
          "At 8 p.m.",
          "At midnight.",
          "At 5 p.m. the next day."
        ],
        "answer": 0,
        "explanation": "The before-6-p.m. limit applies even when four hours have not passed."
      },
      {
        "prompt": "Which item is included with hire?",
        "options": [
          "A lock",
          "A photo ID",
          "A raincoat",
          "A new bicycle to keep"
        ],
        "answer": 0,
        "explanation": "The FAQ lists a helmet and a lock as included items."
      },
      {
        "prompt": "Which late cancellation can receive a refund under the stated exception?",
        "options": [
          "When the customer wakes up late.",
          "When the customer forgets photo ID.",
          "When the customer chooses a different café.",
          "When the shop closes because of unsafe weather."
        ],
        "answer": 3,
        "explanation": "The only stated late-cancellation exception is an unsafe-weather shop closure."
      }
    ]
  },
  {
    "id": "a2-saved-garden-story",
    "level": "a2",
    "skill": "reading",
    "title": "Read a story about a shared garden",
    "description": "Follow cause, response, and a change in someone’s view.",
    "minutes": 12,
    "content": [
      {
        "heading": "Read the short story",
        "text": "“When a small plot beside their building became empty, Noor suggested a shared garden. Her neighbour Tomas said he had no time for plants. Noor planted tomatoes anyway and left a watering can by the door. One hot evening, she came home late and found the soil wet. Tomas was putting the can away. ‘I only gave them a little water,’ he said. By August, he was checking the plants each morning. At the first harvest, he brought bread so the neighbours could share tomato sandwiches.”",
        "examples": [
          "Noor suggests the garden.",
          "Tomas is doubtful at first.",
          "The neighbours share the harvest."
        ]
      },
      {
        "heading": "Look for actions that show a change",
        "text": "The story does not directly say Tomas changed his mind, but his repeated actions support that conclusion. At first he says he has no time. Later he waters the plants, checks them each morning, and brings bread. These details make a stronger inference than a guess about his personality.",
        "examples": [
          "Initial statement: no time for plants.",
          "Later action: daily checks.",
          "Final contribution: bread for shared sandwiches."
        ]
      },
      {
        "heading": "Explain a conclusion with a detail",
        "text": "When answering an inference question, connect your conclusion to a specific action from the story. Avoid conclusions the story cannot support, such as Tomas became a professional gardener. Write a three-sentence summary covering the idea, Tomas’s response, and the final shared meal. Keep the sequence clear.",
        "examples": [
          "Tomas becomes involved in the garden.",
          "His morning checks support that conclusion.",
          "The story does not mention a gardening job."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Who first suggests making a shared garden?",
        "options": [
          "Tomas",
          "The building manager",
          "Noor",
          "A shopkeeper"
        ],
        "answer": 2,
        "explanation": "The opening sentence names Noor as the person who suggests the idea."
      },
      {
        "prompt": "Which action best shows Tomas’s growing involvement?",
        "options": [
          "He checks the plants each morning.",
          "He says he has no time.",
          "He leaves the building permanently.",
          "He buys the whole plot."
        ],
        "answer": 0,
        "explanation": "Regular morning checks show ongoing participation after his initial doubt."
      },
      {
        "prompt": "Why does Tomas bring bread at the harvest?",
        "options": [
          "To sell gardening tools.",
          "To stop Noor planting.",
          "So the neighbours can share tomato sandwiches.",
          "To feed a pet mentioned in the story."
        ],
        "answer": 2,
        "explanation": "The final sentence explicitly gives the purpose of the bread."
      }
    ]
  },
  {
    "id": "a2-listen-lost-backpack",
    "level": "a2",
    "skill": "listening",
    "title": "Listen: describe a lost backpack",
    "description": "Identify distinguishing features, a location, and the next step.",
    "minutes": 12,
    "content": [
      {
        "heading": "Organize the description before listening",
        "text": "A lost-property conversation includes the object, its appearance, where it was last seen, and a way to check ownership. Prepare those labels in your notes. Listen once for the general problem. On a second pass, add distinguishing details rather than trying to write the whole conversation.",
        "examples": [
          "Object: what is missing?",
          "Appearance: colour and special features.",
          "Next step: what should the caller do?"
        ]
      },
      {
        "heading": "Use differences to reject a near match",
        "text": "The staff member mentions a similar item that does not match the caller’s description. Do not choose the first object found simply because one feature matches. A useful description combines colour, a visible mark, and something inside. Listen for the contrast that explains why the offered item is wrong.",
        "examples": [
          "A similar colour is not enough.",
          "A badge can distinguish one bag.",
          "Contents may support an ownership check."
        ]
      },
      {
        "heading": "Check the practical follow-up",
        "text": "At the end, the staff member explains the next action. Label who will call whom and what the caller should have ready. Practice a thirty-second description of an imaginary lost object using three identifying details, then ask what you should do next. Keep private contact details out of a public practice message.",
        "examples": [
          "I lost a blue backpack.",
          "It has a star badge.",
          "What should I do next?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is on the caller’s backpack?",
        "options": [
          "A red flower badge",
          "A silver bell",
          "A yellow star badge",
          "A green stripe"
        ],
        "answer": 2,
        "explanation": "The caller identifies a yellow star badge on the front."
      },
      {
        "prompt": "Where did the caller last see the backpack?",
        "options": [
          "Under a seat on the number twelve bus.",
          "At the ticket office.",
          "Beside a café door.",
          "In a library classroom."
        ],
        "answer": 0,
        "explanation": "The caller last saw it under a seat on the number twelve bus."
      },
      {
        "prompt": "Why is the black bag not the caller’s?",
        "options": [
          "The caller did not lose any bag.",
          "The black bag is empty and every bag must be empty.",
          "The caller only owns a suitcase.",
          "The caller’s bag is blue and has a star badge."
        ],
        "answer": 3,
        "explanation": "The caller rejects the black bag because the missing backpack is blue with a yellow star badge."
      }
    ],
    "listeningText": "Caller: Hello. I left my backpack on the number twelve bus this morning. Staff: Can you describe it? Caller: It is blue, with a yellow star badge on the front. Inside there is a green notebook and a lunch box. I last saw it under my seat near the back. Staff: We have a black bag here. Caller: That is not mine. Staff: The driver is still checking the bus. Please call us again after three. Have your ticket ready so we can check the journey details. Caller: Thank you. I will call after three this afternoon."
  },
  {
    "id": "a2-listen-library-radio",
    "level": "a2",
    "skill": "listening",
    "title": "Listen: a library on wheels",
    "description": "Understand the main idea and practical details in a short local report.",
    "minutes": 12,
    "content": [
      {
        "heading": "Start with the main purpose",
        "text": "A short report may begin with a new service and then explain how it works. Listen first for what the service does and who it helps. The title gives you a useful prediction, but the recording supplies the facts. Do not treat every named place as the service’s destination.",
        "examples": [
          "A mobile library takes books to people.",
          "Listen for its purpose.",
          "Keep the main idea separate from small details."
        ]
      },
      {
        "heading": "Catch the schedule and borrowing rule",
        "text": "Write three headings before replaying: visits, borrowing, and registration. The report includes different numbers for different purposes. Match a number to its label before answering a question. A visit frequency is not the same thing as the length of time a person can keep a book.",
        "examples": [
          "Frequency: how often the van comes.",
          "Loan period: how long a book may be kept.",
          "Limit: how many books may be borrowed."
        ]
      },
      {
        "heading": "Retell the report for a neighbour",
        "text": "Imagine explaining the service to someone who missed the report. Give the purpose, visit day, and one useful rule. Check the registration requirement separately. A brief summary should preserve the key facts without copying every sentence. Leave out details you did not hear rather than filling them with assumptions.",
        "examples": [
          "The van visits on a regular day.",
          "Mention the borrowing limit.",
          "Explain how a new member registers."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why was the mobile library introduced?",
        "options": [
          "Some residents cannot easily reach the town library.",
          "The town has banned reading.",
          "All schools have closed.",
          "Only tourists want books."
        ],
        "answer": 0,
        "explanation": "The report says it helps residents who find travel to the town library difficult."
      },
      {
        "prompt": "How often does the van visit each village?",
        "options": [
          "Every second Wednesday",
          "Every day",
          "Every Sunday",
          "Once a year"
        ],
        "answer": 0,
        "explanation": "The stated schedule is every second Wednesday."
      },
      {
        "prompt": "How many books may each member borrow at a time?",
        "options": [
          "Two",
          "Six",
          "Four",
          "Ten"
        ],
        "answer": 2,
        "explanation": "Members may borrow up to four books at a time."
      }
    ],
    "listeningText": "A new mobile library began visiting local villages this month. The small van carries novels, children’s stories, and books about gardening. The council introduced it because some residents cannot easily travel to the town library. The van visits each village every second Wednesday and stops near the community hall from two until four. Members can borrow up to four books and keep them until the next visit. Joining is free. New members should bring proof of their address when they register. The driver also accepts book returns, but the van does not provide a printing service at present."
  },
  {
    "id": "a2-listen-cottage-booking",
    "level": "a2",
    "skill": "listening",
    "title": "Listen: confirm a cottage booking",
    "description": "Track a revised duration, included services, and a check-in arrangement.",
    "minutes": 12,
    "content": [
      {
        "heading": "Expect a final booking summary",
        "text": "Accommodation calls often contain old information, a change, and a final summary. Listen for the booking name and broad request first. The guest may correct the length of the stay, so avoid writing the first number as your final answer before the call has finished.",
        "examples": [
          "A booking may be changed.",
          "A summary confirms the final arrangement.",
          "Listen for what is included in the price."
        ]
      },
      {
        "heading": "Distinguish an included item from an extra",
        "text": "Included means covered by the stated price. An optional extra costs more or requires another arrangement. In this call, the guest asks about several useful services. Put them in separate columns after listening. Do not assume that every facility mentioned is automatically part of the booking.",
        "examples": [
          "Included: no extra fee stated.",
          "Extra: an additional charge is named.",
          "An available service is not always included."
        ]
      },
      {
        "heading": "Check arrival instructions in detail",
        "text": "The call finishes with a plan for arriving after the reception desk closes. Note what the guest will receive and how they will enter. Practice confirming a booking in three sentences: dates or nights, important inclusions, and arrival plan. Keep your summary consistent with the final agreement.",
        "examples": [
          "Confirm the number of nights.",
          "Check whether breakfast is included.",
          "Explain the key collection arrangement."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How many nights is the final booking for?",
        "options": [
          "Three",
          "Two",
          "Four",
          "One"
        ],
        "answer": 0,
        "explanation": "The guest changes the original two-night booking to three nights."
      },
      {
        "prompt": "What is included in the cottage price?",
        "options": [
          "Breakfast",
          "Parking",
          "Bicycle hire",
          "A guided tour"
        ],
        "answer": 1,
        "explanation": "Parking is included; breakfast costs extra."
      },
      {
        "prompt": "How will the guest get the key after reception closes?",
        "options": [
          "From the train driver.",
          "From a key box using a code sent by text.",
          "By waiting until the next morning.",
          "From a café that is never mentioned."
        ],
        "answer": 1,
        "explanation": "The host will text a code for the key box beside the door."
      }
    ],
    "listeningText": "Host: Hello, Willow Cottages. Guest: I have a booking under Patel for two nights from Friday. Could I stay until Monday instead? Host: Yes, I can change it to three nights. Guest: Thank you. Is breakfast included? Host: No, breakfast is eight pounds extra per person, but parking is included. Guest: We will cook our own breakfast. Our train arrives late, so we may reach you at nine. Host: Reception closes at eight. I will text you a code for the key box beside the door. Guest: Perfect. Please confirm the three nights by email as well. Host: Certainly."
  },
  {
    "id": "a2-opinion-paragraph",
    "level": "a2",
    "skill": "writing",
    "title": "Write an opinion with a reason and example",
    "description": "Build one focused paragraph about a familiar choice.",
    "minutes": 12,
    "content": [
      {
        "heading": "State one clear opinion",
        "text": "An opinion paragraph tells the reader what you think about a focused topic. Choose a familiar question, such as whether studying in the morning suits you. Start with your answer rather than an unrelated history of the topic. Use I think when it helps make the personal viewpoint clear.",
        "examples": [
          "I prefer studying in the morning.",
          "For me, a quiet library is a good place to learn.",
          "I think walking is the best way to explore my town."
        ]
      },
      {
        "heading": "Support the idea with a concrete example",
        "text": "A reason explains why you hold the opinion. An example shows the reason in a particular situation. Because can connect the opinion and reason; for example introduces a detail. Do not simply repeat the same statement with different adjectives, because the reader still needs supporting information.",
        "examples": [
          "I study early because I feel more alert.",
          "For example, I can read a short article before work.",
          "Later in the day, I am often tired."
        ]
      },
      {
        "heading": "End with a connected final sentence",
        "text": "Write seventy to ninety words with an opinion, a reason, a concrete example, and a final sentence. Keep all the sentences connected to the same main idea. Read the paragraph and underline the reason and example. If you cannot find them, add a detail that helps the reader understand your choice.",
        "examples": [
          "That is why mornings work well for me.",
          "Different learners may prefer a different time.",
          "My choice fits my daily routine."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence gives a clear personal opinion?",
        "options": [
          "The page has four corners.",
          "Yesterday was Tuesday.",
          "I prefer studying in the morning.",
          "There are ten pencils."
        ],
        "answer": 2,
        "explanation": "Prefer directly states the writer’s choice."
      },
      {
        "prompt": "Which detail best supports preferring morning study?",
        "options": [
          "I feel alert then and finish reading before work.",
          "My bag is red.",
          "The bus has wheels.",
          "My neighbour has a cat."
        ],
        "answer": 0,
        "explanation": "The detail explains why morning study fits the writer’s energy and schedule."
      },
      {
        "prompt": "What should an example do in this paragraph?",
        "options": [
          "Show the reason in a specific situation.",
          "Introduce a completely unrelated topic.",
          "Repeat the title without adding detail.",
          "Replace every verb."
        ],
        "answer": 0,
        "explanation": "A specific example helps the reader see how the reason works in practice."
      }
    ]
  },
  {
    "id": "a2-balanced-place-review",
    "level": "a2",
    "skill": "writing",
    "title": "Write a useful place review",
    "description": "Describe an experience, give evidence, and recommend fairly.",
    "minutes": 12,
    "content": [
      {
        "heading": "Give the reader a clear context",
        "text": "A review helps another person decide whether a place may suit them. Name the kind of place and say when you visited. Choose details a reader can use, such as service, noise, access, or value. Do not present one visit as proof that every visit will be identical.",
        "examples": [
          "I visited the Garden Café on Saturday afternoon.",
          "It was busy, but we found a table outside.",
          "We ordered two sandwiches and tea."
        ]
      },
      {
        "heading": "Support praise and criticism with details",
        "text": "An adjective such as excellent or terrible is more useful with an example. Explain what happened instead of attacking the people who work there. A balanced review can mention a strength and a limitation, but it should not invent a problem just to sound balanced.",
        "examples": [
          "The server brought water without being asked.",
          "Our food took twenty minutes to arrive.",
          "The outdoor tables were beside a noisy road."
        ]
      },
      {
        "heading": "Make a recommendation for a particular reader",
        "text": "Finish by explaining whom the place may suit and why. Write eighty to one hundred words with two specific details from an imaginary or real visit. Check past tenses for your visit and present forms for cautiously stated general features. Remove personal information about staff or other customers.",
        "examples": [
          "I would recommend it for a quick lunch.",
          "Choose an indoor table if you want a quieter conversation.",
          "I would visit again on a less busy day."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which detail gives useful evidence about service?",
        "options": [
          "Everything was everything.",
          "Good good good.",
          "The server brought water without being asked.",
          "The café exists somewhere."
        ],
        "answer": 2,
        "explanation": "The specific action helps a reader understand what the service was like."
      },
      {
        "prompt": "Which ending gives a useful targeted recommendation?",
        "options": [
          "Everyone must love it for every reason.",
          "Choose an indoor table if you want a quieter conversation.",
          "No one can ever disagree with me.",
          "The end of words."
        ],
        "answer": 1,
        "explanation": "The recommendation names a reader’s need and a practical choice."
      },
      {
        "prompt": "Which statement fairly limits a review to the writer’s experience?",
        "options": [
          "The food is always late for everyone forever.",
          "All workers everywhere are the same.",
          "Nobody has ever enjoyed this place.",
          "The food took twenty minutes during my Saturday visit."
        ],
        "answer": 3,
        "explanation": "The selected statement reports a specific observation without an unsupported universal claim."
      }
    ]
  },
  {
    "id": "a2-polite-problem-email",
    "level": "a2",
    "skill": "writing",
    "title": "Write a polite email about a problem",
    "description": "Explain what happened and request a specific solution.",
    "minutes": 12,
    "content": [
      {
        "heading": "Identify the item and the problem",
        "text": "A helpful problem email names the item or service, gives a date or reference when relevant, and explains the issue. Keep the opening calm and specific. The reader needs enough information to identify the case before deciding what action is possible. Use imaginary details for this practice.",
        "examples": [
          "Subject: Missing notebook from order 246",
          "I ordered two notebooks on 8 June.",
          "Only one notebook arrived in the package."
        ]
      },
      {
        "heading": "State the facts in a clear order",
        "text": "Explain what you expected and what actually happened. Add a relevant detail, such as the package appearing undamaged, only if it is true in your scenario. Avoid guessing who caused the problem. The past simple describes completed events; the present simple can describe the current situation.",
        "examples": [
          "The package arrived yesterday.",
          "It contained one notebook instead of two.",
          "I still need the second notebook for my class."
        ]
      },
      {
        "heading": "Ask for one practical next step",
        "text": "Say what solution you would like and invite a reply. A polite, specific request is easier to act on than an angry general complaint. Write eighty to one hundred words with a subject, greeting, facts, request, and closing. Check the reference number and make sure the request matches the problem.",
        "examples": [
          "Could you send the missing notebook, please?",
          "Please let me know when it can be sent.",
          "Thank you for your help. Kind regards, Nila"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which subject line best identifies the problem?",
        "options": [
          "Hello things",
          "Missing notebook from order 246",
          "Everything now",
          "No subject about anything"
        ],
        "answer": 1,
        "explanation": "The line names both the issue and an identifying order reference."
      },
      {
        "prompt": "Which sentence states a fact without guessing blame?",
        "options": [
          "Your worker definitely stole it.",
          "Everyone at the company is careless.",
          "The package contained one notebook instead of two.",
          "You always make mistakes."
        ],
        "answer": 2,
        "explanation": "The selected sentence describes the observable problem and avoids unsupported blame."
      },
      {
        "prompt": "Which request directly matches a missing notebook?",
        "options": [
          "Could you send the missing notebook, please?",
          "Could you repaint the station?",
          "Please explain the weather.",
          "Could you change my neighbour’s job?"
        ],
        "answer": 0,
        "explanation": "The requested action resolves the specific item that was not delivered."
      }
    ]
  },
  {
    "id": "a2-past-ed-endings",
    "level": "a2",
    "skill": "speaking",
    "title": "Say regular past endings clearly",
    "description": "Practice the three common pronunciations of ed in regular past verbs.",
    "minutes": 12,
    "content": [
      {
        "heading": "Listen to the final sound of the base verb",
        "text": "The spelling ed has three common pronunciations in regular past verbs. After many voiceless sounds, it sounds like t, as in walked. After many voiced sounds, it sounds like d, as in played. The base verb’s final sound matters more than its final written letter.",
        "examples": [
          "walk → walked: t ending",
          "play → played: d ending",
          "wash → washed: t ending"
        ]
      },
      {
        "heading": "Add a syllable after t or d",
        "text": "After a base verb ending in a t or d sound, ed adds an extra syllable, often sounding like id. Wanted and needed each have an extra beat compared with want and need. Do not add that extra beat to every regular past verb; played normally stays one syllable.",
        "examples": [
          "want → wanted",
          "need → needed",
          "play → played, not play-id"
        ]
      },
      {
        "heading": "Keep the ending in a short story",
        "text": "Choose three past actions from yesterday or an imaginary day, with one example of each ending type. Say the sentences slowly and keep the final sounds audible. Then join them with natural pauses. Ask a partner to identify whether you are talking about yesterday or a regular daily habit.",
        "examples": [
          "I walked to the shop.",
          "I played a game.",
          "I wanted a quiet evening."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which verb normally has an extra syllable in its ed ending?",
        "options": [
          "Played",
          "Walked",
          "Wanted",
          "Washed"
        ],
        "answer": 2,
        "explanation": "Want ends in a t sound, so wanted adds an extra syllable."
      },
      {
        "prompt": "What mainly determines the pronunciation of a regular ed ending?",
        "options": [
          "The number of letters in the subject.",
          "The colour of the page.",
          "The first letter of the sentence.",
          "The final sound of the base verb."
        ],
        "answer": 3,
        "explanation": "The base verb’s final sound determines which common ed pronunciation follows."
      },
      {
        "prompt": "Which word normally ends in a t sound?",
        "options": [
          "Played",
          "Walked",
          "Needed",
          "Wanted"
        ],
        "answer": 1,
        "explanation": "Walked has a voiceless final consonant before ed, so the ending is pronounced t."
      }
    ]
  },
  {
    "id": "a2-make-suggestions-agree",
    "level": "a2",
    "skill": "speaking",
    "title": "Make a plan together",
    "description": "Offer a suggestion, respond politely, and settle on a practical arrangement.",
    "minutes": 12,
    "content": [
      {
        "heading": "Offer an activity with a clear phrase",
        "text": "Use Let’s plus a base verb to suggest a shared action. Shall we plus a base verb is another common suggestion. Add enough information for your partner to react, such as the activity and a possible time. Speak with a friendly tone rather than treating a suggestion as an order.",
        "examples": [
          "Let’s study together on Friday.",
          "Shall we meet at the library?",
          "How about going for a walk?"
        ]
      },
      {
        "heading": "Accept or suggest an alternative",
        "text": "A positive response can be short, but add a useful detail to move the plan forward. If the suggestion does not suit you, give a brief reason and offer an alternative. You do not need a long apology. The goal is an arrangement that works for both people.",
        "examples": [
          "That sounds good. What time?",
          "I can’t on Friday. How about Saturday?",
          "I prefer the café because it is nearer."
        ]
      },
      {
        "heading": "Confirm the final plan clearly",
        "text": "Once you agree, summarize the activity, place, and time. Stress the important words gently so the listener notices them. Ask a short confirmation question if any detail is uncertain. Practice a one-minute exchange in which the first suggestion changes before you agree on a final plan.",
        "examples": [
          "So, Saturday at ten in the library.",
          "Is that the library near the park?",
          "Yes. See you there."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which phrase makes a shared suggestion correctly?",
        "options": [
          "Let’s to meeting at library.",
          "Let’s meet at the library.",
          "Let’s meets at the library.",
          "Let us meeting library."
        ],
        "answer": 1,
        "explanation": "Let’s takes the base verb meet."
      },
      {
        "prompt": "Which response politely offers an alternative?",
        "options": [
          "Your plan is stupid.",
          "I will never listen.",
          "I can’t on Friday. How about Saturday?",
          "No, and I refuse to explain anything."
        ],
        "answer": 2,
        "explanation": "The response gives a brief limit and another possible day."
      },
      {
        "prompt": "Which details should a final plan usually confirm?",
        "options": [
          "Only the colour of a pen.",
          "Every person’s entire history.",
          "Activity, place, and time.",
          "An unrelated weather event from last year."
        ],
        "answer": 2,
        "explanation": "Those practical details let both people act on the agreement."
      }
    ]
  },
  {
    "id": "a2-repair-and-rephrase",
    "level": "a2",
    "skill": "speaking",
    "title": "Explain again when a word is missing",
    "description": "Use descriptions, clarification, and polite repair to keep speaking.",
    "minutes": 12,
    "content": [
      {
        "heading": "Describe a word you cannot remember",
        "text": "If you forget a word, explain its purpose, appearance, or category. Use simple language you already know instead of stopping completely. The listener may help with the word. A clear description can communicate successfully even when it is longer than the exact word you wanted.",
        "examples": [
          "It is the thing you use to open a bottle.",
          "It is a place where you borrow books.",
          "It is round and you kick it in a game."
        ]
      },
      {
        "heading": "Check the part you did not understand",
        "text": "Ask a focused question rather than repeating I don’t understand for the whole conversation. You can ask what a word means or check one detail. Repeat the interpretation you think is right and let the speaker confirm or correct it. This gives both people a way forward.",
        "examples": [
          "What does platform mean here?",
          "Do you mean the station entrance?",
          "Did you say fifteen or fifty?"
        ]
      },
      {
        "heading": "Correct yourself in a short, calm way",
        "text": "A repair is a small correction during speaking. Use sorry, I mean to replace an incorrect detail without restarting the entire conversation. Practice describing an object, clarifying one number, and correcting one date. Pause between ideas so your listener has enough time to follow the new information.",
        "examples": [
          "We meet on Monday—sorry, I mean Tuesday.",
          "It costs fifteen, not fifty.",
          "Let me say that another way."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You forget the word library. Which description helps?",
        "options": [
          "A person who repairs cars.",
          "A drink made from fruit.",
          "A place where you borrow books.",
          "A thing you wear on your feet."
        ],
        "answer": 2,
        "explanation": "The description gives the defining everyday purpose of a library."
      },
      {
        "prompt": "Which phrase politely corrects your own mistake?",
        "options": [
          "You never listen to anything.",
          "Sorry, I mean Tuesday.",
          "Forget every word forever.",
          "This conversation has no words."
        ],
        "answer": 1,
        "explanation": "I mean introduces the corrected detail without restarting the whole message."
      },
      {
        "prompt": "Which question checks an unclear number?",
        "options": [
          "What is your favourite fruit?",
          "Did you say fifteen or fifty?",
          "Can you cook rice?",
          "Where is my jacket?"
        ],
        "answer": 1,
        "explanation": "The question isolates the number contrast that needs clarification."
      }
    ]
  },
  {
    "id": "b1-grammar",
    "level": "b1",
    "skill": "grammar",
    "title": "Connect experience & possibility",
    "description": "Distinguish the present perfect, past simple, and first conditional.",
    "minutes": 15,
    "content": [
      {
        "heading": "Experience and a finished past time",
        "text": "Use the present perfect, have or has plus a past participle, for experience up to now or a past event connected to the present. Use the past simple with a finished past time such as yesterday or in 2022. Ever and never often ask about or describe life experience.",
        "examples": [
          "I have visited India twice.",
          "I visited Delhi in 2022.",
          "Have you ever spoken to a large audience?"
        ]
      },
      {
        "heading": "A real future possibility",
        "text": "Use the first conditional for a possible future situation and its likely result: if plus present simple, then will plus base verb. The if-clause can come first or second. When it comes first, a comma normally separates the clauses. The present form after if can refer to the future.",
        "examples": [
          "If I finish early, I will call you.",
          "We will walk if it doesn’t rain.",
          "If you practise regularly, you will feel more confident."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the correct sentence about a finished time.",
        "options": [
          "I meet her yesterday.",
          "I met her yesterday.",
          "I have meet her yesterday.",
          "I have met her yesterday."
        ],
        "answer": 1,
        "explanation": "Yesterday is a finished past time, so use the past simple met."
      },
      {
        "prompt": "Which question asks about life experience up to now?",
        "options": [
          "Are you surfing now?",
          "Have you ever tried surfing?",
          "Did you surf at nine yesterday?",
          "Will you surf tomorrow?"
        ],
        "answer": 1,
        "explanation": "Have you ever… asks whether the experience has happened at any time before now."
      },
      {
        "prompt": "If it rains tomorrow, we ___ at home.",
        "options": [
          "staying",
          "will stay",
          "stayed",
          "would have stayed"
        ],
        "answer": 1,
        "explanation": "A real future possibility normally uses if plus present simple and will plus base verb."
      }
    ]
  },
  {
    "id": "b1-vocabulary",
    "level": "b1",
    "skill": "vocabulary",
    "title": "Work smarter with words",
    "description": "Use workplace collocations, word families, and phrasal verbs.",
    "minutes": 12,
    "content": [
      {
        "heading": "Remember the company a word keeps",
        "text": "A collocation is a common word combination. At work or school, we meet a deadline, gain experience, make progress, and take responsibility. Learning whole combinations makes your English more natural and reduces the number of decisions you need to make while speaking.",
        "examples": [
          "We need to meet the deadline on Friday.",
          "She gained experience as a volunteer.",
          "You are making steady progress."
        ]
      },
      {
        "heading": "Build families and notice meaning",
        "text": "Words in a family have different grammatical jobs: decide is a verb, decision is a noun, and decisive is an adjective. Phrasal verbs combine a verb with another word and can have a new meaning. Learn them in a sentence and check whether the situation is formal or informal.",
        "examples": [
          "We need to make a decision.",
          "Please fill in this form.",
          "Let’s find out why the website stopped working."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which phrase means finish work by the required date?",
        "options": [
          "do a deadline",
          "lose a deadline",
          "meet a deadline",
          "take a deadline"
        ],
        "answer": 2,
        "explanation": "Meet a deadline means complete the work on time."
      },
      {
        "prompt": "Choose the noun: “We need to make a ___ today.”",
        "options": [
          "decision",
          "decidingly",
          "decide",
          "decisive"
        ],
        "answer": 0,
        "explanation": "After make a, the noun decision is needed."
      },
      {
        "prompt": "“Please fill in this form” means…",
        "options": [
          "throw the form away.",
          "read it silently only.",
          "send it without writing.",
          "write the requested information in it."
        ],
        "answer": 3,
        "explanation": "Fill in a form means complete its empty spaces with information."
      }
    ]
  },
  {
    "id": "b1-reading",
    "level": "b1",
    "skill": "reading",
    "title": "Find the claim & the evidence",
    "description": "Separate a writer’s opinion from the support offered for it.",
    "minutes": 13,
    "content": [
      {
        "heading": "Read a short argument",
        "text": "Read this paragraph: “Our town should improve its bus service. In a recent survey of 200 residents, 120 said they would use buses more often if services ran after 8 p.m. A later service could help workers travel home without a car. However, the council must estimate the running costs before making a decision.” Identify the recommendation before examining its support.",
        "examples": [
          "Claim: improve the town’s bus service.",
          "Evidence: 120 of 200 respondents said they would use later buses more often.",
          "Limitation: running costs still need examination."
        ]
      },
      {
        "heading": "Keep the strength of the evidence in view",
        "text": "A survey can tell us what respondents said; it does not prove what every resident will do. Could expresses a possibility, while will is stronger. However introduces a qualification. Good readers notice both the writer’s position and the limits acknowledged in the argument.",
        "examples": [
          "120 out of 200 is 60% of the respondents.",
          "Could help does not mean will definitely help.",
          "The writer supports improvement while recognizing a cost question."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the writer’s main recommendation?",
        "options": [
          "Improve the bus service.",
          "Raise every bus fare.",
          "Remove all cars from town.",
          "Cancel the bus survey."
        ],
        "answer": 0,
        "explanation": "The first sentence states that the town should improve its bus service."
      },
      {
        "prompt": "What does the survey directly show?",
        "options": [
          "120 respondents said they would use later buses more often.",
          "Every resident will use buses.",
          "Later buses will make a profit.",
          "Most residents work after 8 p.m."
        ],
        "answer": 0,
        "explanation": "The survey reports the intentions of its respondents; the other claims go beyond the text."
      },
      {
        "prompt": "Why does the writer use however?",
        "options": [
          "To introduce an unrelated story.",
          "To say buses are impossible.",
          "To add a concern about the costs.",
          "To repeat the survey number."
        ],
        "answer": 2,
        "explanation": "However marks a qualification: the cost needs to be assessed before a decision."
      }
    ]
  },
  {
    "id": "b1-listening",
    "level": "b1",
    "skill": "listening",
    "title": "Listen: what do they really prefer?",
    "description": "Follow reasons, contrasts, and a final decision.",
    "minutes": 12,
    "listeningText": "I thought the online course would be easier because I would not have to travel. The recorded lessons were useful, especially when I wanted to review a difficult topic. Still, I missed being able to ask questions immediately. Next term, I am choosing a course that combines online materials with a weekly classroom session. It costs a little more, but the chance to discuss things with a teacher makes it worth it for me.",
    "content": [
      {
        "heading": "Track a changing view",
        "text": "A speaker’s first opinion may not be their final one. Listen to the full explanation before choosing an answer. In this account, the speaker begins with an expectation, describes an advantage and a problem, then explains a decision. Words such as still and but reveal contrasts.",
        "examples": [
          "Expectation: online study would be easier.",
          "Benefit: recordings could be reviewed.",
          "Problem: questions could not be asked immediately."
        ]
      },
      {
        "heading": "Connect preferences to reasons",
        "text": "When taking notes, put a reason next to each opinion. This helps you distinguish the speaker’s actual preference from a detail mentioned in passing. Finally, summarize the decision in one sentence without repeating every example.",
        "examples": [
          "Choice: a course with online and classroom learning.",
          "Reason: access to discussion with a teacher.",
          "The higher price is acceptable to this speaker."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What did the speaker find useful about recorded lessons?",
        "options": [
          "They replaced all questions.",
          "They were shorter than every class.",
          "They were always free.",
          "They could be reviewed."
        ],
        "answer": 3,
        "explanation": "The speaker says recordings were useful for reviewing a difficult topic."
      },
      {
        "prompt": "What was the main disadvantage mentioned?",
        "options": [
          "The speaker could not ask questions immediately.",
          "The teacher cancelled every lesson.",
          "The course required too much travel.",
          "The recordings had no sound."
        ],
        "answer": 0,
        "explanation": "The speaker missed being able to ask questions immediately."
      },
      {
        "prompt": "What will the speaker choose next term?",
        "options": [
          "A course combining online materials and classroom sessions",
          "Only private lessons",
          "The cheapest online course",
          "No course at all"
        ],
        "answer": 0,
        "explanation": "The final decision is a combined format with a weekly classroom session."
      }
    ]
  },
  {
    "id": "b1-writing",
    "level": "b1",
    "skill": "writing",
    "title": "Build a convincing paragraph",
    "description": "Connect a point, explanation, example, and final thought.",
    "minutes": 16,
    "content": [
      {
        "heading": "One paragraph, one main idea",
        "text": "Start with a topic sentence that states your point. Explain why it matters, then add a specific example. Finish by linking the example to your point. The example may be a realistic illustration; do not present invented research or statistics as evidence. Clear development matters more than impressive words.",
        "examples": [
          "Point: Libraries provide important study spaces.",
          "Explanation: Some students cannot find quiet space at home.",
          "Example: A student sharing a small room can work at a library desk."
        ]
      },
      {
        "heading": "Make the connections visible",
        "text": "Use because for reasons, for example for illustrations, and therefore for results. Avoid adding a connector to every sentence. Write 100–130 words about whether schools should offer more practical subjects. Then underline your topic sentence and check that every remaining sentence develops the same point.",
        "examples": [
          "Libraries are useful because they provide quiet work areas.",
          "For example, students can prepare for exams there.",
          "Therefore, extending opening hours could support local learners."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the main job of a topic sentence?",
        "options": [
          "To list every possible opinion",
          "To introduce an unrelated quotation",
          "To state the paragraph’s central point",
          "To end the whole essay"
        ],
        "answer": 2,
        "explanation": "A topic sentence gives the reader the main idea the paragraph will develop."
      },
      {
        "prompt": "Which detail best supports “Libraries help students study”?",
        "options": [
          "Some library doors are blue.",
          "My favourite food is rice.",
          "A bus passes a different building.",
          "They provide quiet desks for students with limited space at home."
        ],
        "answer": 3,
        "explanation": "Quiet study space directly explains how a library helps students."
      },
      {
        "prompt": "You have no source for a statistic. What should you do?",
        "options": [
          "Call it official research.",
          "Repeat the number confidently.",
          "Use a clearly framed example or find a reliable source.",
          "Invent a precise number."
        ],
        "answer": 2,
        "explanation": "An illustrative example can support an explanation without falsely claiming research evidence."
      }
    ]
  },
  {
    "id": "b1-speaking",
    "level": "b1",
    "skill": "speaking",
    "title": "Keep the conversation flowing",
    "description": "Extend answers, repair mistakes, and ask useful follow-up questions.",
    "minutes": 13,
    "content": [
      {
        "heading": "Answer, explain, illustrate",
        "text": "To develop an answer, make your point, explain it, and add an example. You can also compare past and present or describe a possible future. A brief pause is natural. Aim for understandable ideas at a steady pace rather than filling every second with words.",
        "examples": [
          "I prefer studying in the morning because I concentrate better.",
          "For instance, I usually finish difficult reading before lunch.",
          "When I was younger, I tended to study late at night."
        ]
      },
      {
        "heading": "Repair without restarting",
        "text": "If you use the wrong word or lose your place, correct the important part and continue. If you do not know a word, describe its function or appearance. Ask a follow-up question to show interest in the other person. These strategies keep communication moving while you build vocabulary.",
        "examples": [
          "What I mean is…",
          "It’s a device you use to measure temperature.",
          "That sounds interesting. How did you get started?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which response develops an opinion most clearly?",
        "options": [
          "It is difficult to say anything.",
          "Morning.",
          "I prefer mornings because I concentrate better; for example, I do my reading before lunch.",
          "Morning, morning, morning."
        ],
        "answer": 2,
        "explanation": "The answer includes a preference, a reason, and an example."
      },
      {
        "prompt": "You forget the word thermometer. What is a useful strategy?",
        "options": [
          "Describe it as a device for measuring temperature.",
          "Say the listener must know.",
          "Stop the conversation immediately.",
          "Use any unrelated long word."
        ],
        "answer": 0,
        "explanation": "Describing a word’s function is a useful paraphrasing strategy."
      },
      {
        "prompt": "Which phrase helps you clarify your own meaning?",
        "options": [
          "That is all impossible.",
          "No more questions.",
          "What I mean is…",
          "You never listen."
        ],
        "answer": 2,
        "explanation": "What I mean is… signals a clarification or repair."
      }
    ]
  },
  {
    "id": "b1-perfect-time-links",
    "level": "b1",
    "skill": "grammar",
    "title": "Connect past actions to now",
    "description": "Choose perfect or past forms and use since, for, already, and yet.",
    "minutes": 18,
    "content": [
      {
        "heading": "Finished time or time up to now?",
        "text": "The past simple places an event in a completed period such as last winter or two days ago. The present perfect connects an event with now without naming a finished past period. Ask whether your time window is closed before choosing the tense. A finished action can still have an important present result.",
        "examples": [
          "I lost my keys yesterday.",
          "I have lost my keys, so I cannot open the door."
        ]
      },
      {
        "heading": "Duration and present results",
        "text": "Since names a starting point; for names a length of time. With a continuing state, use the present perfect to connect that start with now. Already often signals completion earlier than expected, while yet commonly appears in questions and negatives. Do not use a present simple form with since for a state continuing to now.",
        "examples": [
          "I have lived here since March.",
          "We have known each other for six years.",
          "Have you finished yet?"
        ]
      },
      {
        "heading": "Transfer the time meaning",
        "text": "Imagine updating a friend about a move. First state a finished event with its date, then explain your situation now. Write four sentences and underline every time expression. Replace an incorrect tense only after deciding whether the expression refers to a closed past period or a continuing connection. This makes your choice depend on meaning.",
        "examples": [
          "I moved here in June. I have met several neighbours.",
          "I have not unpacked the kitchen boxes yet."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence describes a state continuing from 2021 until now?",
        "options": [
          "I live here since 2021.",
          "I have lived here since 2021.",
          "I lived here yesterday only.",
          "I am live here for 2021."
        ],
        "answer": 1,
        "explanation": "Have lived with since connects the starting year with the present."
      },
      {
        "prompt": "Choose the best completion: We ___ the museum last Saturday.",
        "options": [
          "have visited",
          "have visit",
          "visit since",
          "visited"
        ],
        "answer": 3,
        "explanation": "Last Saturday is a finished past time, so the past simple visited fits."
      },
      {
        "prompt": "You expected the parcel tomorrow, but it is here now. Which sentence fits?",
        "options": [
          "The parcel has already arrived.",
          "The parcel has not arrived yet.",
          "The parcel arrives last week.",
          "The parcel has arrived since three days."
        ],
        "answer": 0,
        "explanation": "Already emphasizes completion sooner than expected; the parcel is here now."
      }
    ]
  },
  {
    "id": "b1-imagined-choices",
    "level": "b1",
    "skill": "grammar",
    "title": "Imagine different situations",
    "description": "Use second conditionals and distinguish if from unless.",
    "minutes": 18,
    "content": [
      {
        "heading": "Imagine an unlikely present",
        "text": "The second conditional describes an imagined or less likely situation in the present or future. Use if plus past simple for the condition, then would plus the base verb for the result. The past form signals distance from reality here; it does not necessarily describe past time. Could can express an imagined ability or possibility.",
        "examples": [
          "If I had a larger kitchen, I would cook for my friends.",
          "If we lived near the sea, we could swim every day."
        ]
      },
      {
        "heading": "Choose the condition carefully",
        "text": "Unless often means if not. It introduces the condition that must change before a result can change. Avoid adding an unnecessary negative after unless. Compare a likely plan using if plus present with an imagined choice using if plus past. Choose the form that reflects your view of the situation, rather than treating all future statements alike.",
        "examples": [
          "Unless it rains, we will eat outside.",
          "If I won a scholarship, I would study abroad."
        ]
      },
      {
        "heading": "Apply an imagined choice",
        "text": "Plan an imaginary community project with a limited budget. Give two choices and explain what each would achieve. Read the condition and result together to check their time meaning. For advice, if I were you is a useful conventional expression; many speakers also use was in less formal imagined statements with I or he.",
        "examples": [
          "If I were you, I would compare the course schedules.",
          "If our group had more time, we would interview local residents."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You do not own a car. Which sentence imagines a different present?",
        "options": [
          "If I own a car, I drove.",
          "If I had a car, I will drive.",
          "If I had a car, I would drive to work.",
          "If I have had a car, I drive yesterday."
        ],
        "answer": 2,
        "explanation": "Past simple had marks the imagined condition; would drive gives the imagined result."
      },
      {
        "prompt": "Unless the library is closed, we will study there means:",
        "options": [
          "We will study there if it is not closed.",
          "We will study there only if it is closed.",
          "The library is definitely closed.",
          "We studied there yesterday."
        ],
        "answer": 0,
        "explanation": "Unless the library is closed is equivalent here to if the library is not closed."
      },
      {
        "prompt": "Choose the useful advice pattern.",
        "options": [
          "If I am you, I studied more.",
          "If I would be you, I will study.",
          "If I were you, I would make a weekly plan.",
          "If I were you, I made a plan yesterday only."
        ],
        "answer": 2,
        "explanation": "If I were you plus would and a base verb is a conventional advice pattern."
      }
    ]
  },
  {
    "id": "b1-relative-clause-details",
    "level": "b1",
    "skill": "grammar",
    "title": "Describe the person or thing you mean",
    "description": "Join ideas using who, which, that, where, and whose.",
    "minutes": 18,
    "content": [
      {
        "heading": "Identify with a defining clause",
        "text": "A defining relative clause tells the listener exactly which person or thing you mean. Use who for people and which or that for things. Do not add a second subject pronoun inside the clause. A defining clause normally follows its noun directly and does not need commas because its information identifies the reference.",
        "examples": [
          "The woman who teaches our evening class is a writer.",
          "I found the charger that you lent me."
        ]
      },
      {
        "heading": "Places, possession, and objects",
        "text": "Use where for a place when the clause describes something happening there. Whose introduces possession and can refer to people or organizations. When a relative pronoun is the object in a defining clause, it can often be omitted. Keep it when it is the subject, because removing it would leave the clause without a subject.",
        "examples": [
          "That is the café where we first met.",
          "The student whose bag was missing called reception.",
          "The book I borrowed was useful."
        ]
      },
      {
        "heading": "Build useful descriptions",
        "text": "Think of three people or objects a visitor might need to identify. Add a defining clause that distinguishes each one, then check whether the clause needs a subject or an object. Read the whole sentence aloud to find accidental repetition. This technique helps you explain an unfamiliar word without needing a dictionary immediately.",
        "examples": [
          "A thermometer is a device that measures temperature.",
          "Speak to the volunteer who is wearing the green badge."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the accurate description.",
        "options": [
          "The teacher who she helped us is here.",
          "The teacher who helped us is here.",
          "The teacher which helped us is here.",
          "The teacher whose helped us is here."
        ],
        "answer": 1,
        "explanation": "Who is the subject of helped, so an additional she would repeat the subject."
      },
      {
        "prompt": "Which sentence uses whose correctly?",
        "options": [
          "This is the café whose we met.",
          "The phone whose I bought is new.",
          "The woman whose daughter won the prize is smiling.",
          "The woman whose won the prize is smiling."
        ],
        "answer": 2,
        "explanation": "Whose daughter expresses the relationship of possession or family connection."
      },
      {
        "prompt": "In which sentence can that be omitted without changing the basic structure?",
        "options": [
          "The bus that stops here is electric.",
          "The person that called is my cousin.",
          "The machine that prints labels is broken.",
          "The article that I read explains the rules."
        ],
        "answer": 3,
        "explanation": "I is already the clause subject, and that is the object of read, so it can be omitted."
      }
    ]
  },
  {
    "id": "b1-daily-collocation-choices",
    "level": "b1",
    "skill": "vocabulary",
    "title": "Build natural everyday word partnerships",
    "description": "Use make, do, take, and have with everyday nouns.",
    "minutes": 18,
    "content": [
      {
        "heading": "Learn combinations as units",
        "text": "Common verbs do not combine freely with every noun. We make a mistake or an effort, do homework or the washing, take a break or a seat, and have a conversation or a rest. Learn the entire expression and one useful situation. The combination often matters more than translating the verb separately into another language.",
        "examples": [
          "Please take a seat while you wait.",
          "I made an effort to speak more clearly."
        ]
      },
      {
        "heading": "Add useful grammar and context",
        "text": "A collocation also has grammatical details. Homework is normally uncountable, so say some homework rather than a homework. Make an appointment names an arrangement; attend an appointment describes going to it. When you learn a phrase, note an article, a preposition, or an object that it commonly needs. These details improve accuracy immediately.",
        "examples": [
          "I need to make an appointment with the adviser.",
          "We had a conversation about the course."
        ]
      },
      {
        "heading": "Retrieve rather than reread",
        "text": "Write a realistic weekday plan with six collocations from this lesson. Cover the verbs and supply them from memory, then check your original sentences. Next say the plan aloud without reading it. Reusing combinations in your own life helps you retrieve them quickly when a conversation gives you little time to plan.",
        "examples": [
          "I will do some homework and then take a break.",
          "I hope to make fewer mistakes in my next email."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which combination is natural?",
        "options": [
          "Do an effort",
          "Take an effort",
          "Make an effort",
          "Have an effort"
        ],
        "answer": 2,
        "explanation": "Make an effort is the conventional phrase for trying hard."
      },
      {
        "prompt": "Which sentence is most natural?",
        "options": [
          "I have a homework to do.",
          "I need to do some homework.",
          "I need to make three homeworks.",
          "I take homeworking tonight."
        ],
        "answer": 1,
        "explanation": "Homework is normally uncountable and commonly goes with do."
      },
      {
        "prompt": "To arrange a time to see a dentist, you usually…",
        "options": [
          "do a seat.",
          "take a mistake.",
          "have homework.",
          "make an appointment."
        ],
        "answer": 3,
        "explanation": "Make an appointment means arrange a meeting at a particular time."
      }
    ]
  },
  {
    "id": "b1-phrasal-verbs-real-life",
    "level": "b1",
    "skill": "vocabulary",
    "title": "Handle everyday phrasal verbs",
    "description": "Understand put off, pick up, run out of, and turn down.",
    "minutes": 18,
    "content": [
      {
        "heading": "Build meaning through a situation",
        "text": "Phrasal verbs combine a verb with a particle and sometimes another preposition. Put off can mean postpone; pick up can mean collect; turn down can mean reject or reduce volume. The meaning depends on the sentence. Learn one meaning in a clear situation before adding another, so your examples become reliable memory cues.",
        "examples": [
          "We put off the picnic because of rain.",
          "Could you pick up the parcel after work?",
          "Please turn down the music."
        ]
      },
      {
        "heading": "Place the object correctly",
        "text": "With many separable phrasal verbs, a noun can appear between the verb and particle or after the particle. A personal pronoun such as it normally goes between them. Other expressions cannot be separated: run out of something means have none left, and its object follows of. Check patterns as carefully as meanings.",
        "examples": [
          "Turn the radio down. / Turn down the radio.",
          "Turn it down.",
          "We have run out of milk."
        ]
      },
      {
        "heading": "Use a problem-solving dialogue",
        "text": "Imagine organizing a picnic when the weather changes and supplies are missing. Make a short dialogue using four phrasal verbs. Then replace a repeated noun with it or them and check its position. For a formal notice, a single-word alternative such as postpone may sometimes suit the situation better, while a friendly conversation welcomes put off.",
        "examples": [
          "We have run out of cups, so I will pick some up.",
          "Let us put it off until Sunday."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "We put off the meeting means we…",
        "options": [
          "finished it early.",
          "postponed it.",
          "recorded it.",
          "invited more people."
        ],
        "answer": 1,
        "explanation": "Put off means move a planned event to a later time."
      },
      {
        "prompt": "Choose the natural pronoun position.",
        "options": [
          "Please turn down it.",
          "Please down turn it.",
          "Please turn it down.",
          "Please it turn down."
        ],
        "answer": 2,
        "explanation": "With the separable phrasal verb turn down, the pronoun it comes between the verb and particle."
      },
      {
        "prompt": "We have run out of paper means…",
        "options": [
          "we have no paper left.",
          "we have extra paper.",
          "we ran outside holding paper.",
          "we rejected a paper proposal."
        ],
        "answer": 0,
        "explanation": "Run out of a supply means use it all so that none remains."
      }
    ]
  },
  {
    "id": "b1-word-family-tools",
    "level": "b1",
    "skill": "vocabulary",
    "title": "Turn known words into useful families",
    "description": "Use common noun and adjective endings without guessing spelling.",
    "minutes": 18,
    "content": [
      {
        "heading": "Choose the grammatical job",
        "text": "A word family contains related words that do different jobs. Improve is a verb, improvement a noun, and helpful an adjective related to help. Identify the job needed by the sentence before choosing a family member. An article often introduces a noun phrase, while a word describing a person or thing may need an adjective.",
        "examples": [
          "The changes improved the lesson.",
          "We noticed an improvement.",
          "The instructions were helpful."
        ]
      },
      {
        "heading": "Use endings with care",
        "text": "Endings such as ment and tion often form nouns, and ful and less can form adjectives. Careful means showing care; careless means showing too little care. These patterns are useful clues, not automatic rules for every English word. Record the exact spelling and pronunciation, especially when the base changes or the stress moves.",
        "examples": [
          "develop → development",
          "inform → information",
          "use → useful / useless"
        ]
      },
      {
        "heading": "Build a personal family notebook",
        "text": "Choose five words from your study or work and write two family members for each. Use each form in a complete sentence rather than a list alone. Check that the meaning still fits: a person can be helpful, while a suggestion can be useful. Revisit the sentences later and hide the missing family member for retrieval practice.",
        "examples": [
          "The teacher explained the process. The explanation was clear.",
          "Be careful when you enter the information."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "The new bus service is a real ___ .",
        "options": [
          "improve",
          "improvingly",
          "improvement",
          "improvedly"
        ],
        "answer": 2,
        "explanation": "After a real, the sentence needs the noun improvement."
      },
      {
        "prompt": "Which adjective describes someone who pays attention to avoid mistakes?",
        "options": [
          "Careless",
          "Careful",
          "Carelessly",
          "Care"
        ],
        "answer": 1,
        "explanation": "Careful means showing attention and care; careless expresses the opposite."
      },
      {
        "prompt": "Which sentence uses the correct word-family form?",
        "options": [
          "The explain was clear.",
          "She gave a clear explain.",
          "She explanation the rule.",
          "Her explanation of the rule was clear."
        ],
        "answer": 3,
        "explanation": "Explanation is the noun that can function as the subject of was."
      }
    ]
  },
  {
    "id": "b1-reading-fridge-project",
    "level": "b1",
    "skill": "reading",
    "title": "Read a community project timeline",
    "description": "Follow a change of plan and distinguish events from reasons.",
    "minutes": 18,
    "content": [
      {
        "heading": "Original passage: a community fridge",
        "text": "The residents of Willow Court wanted to reduce food waste. In April, they put a shared fridge in the entrance hall, but the building manager asked them to move it because deliveries blocked the door. In May, the group found a sheltered corner beside the community kitchen. Volunteers checked the fridge every morning and removed food without a date label. At first, most donations came from residents. In June, a nearby bakery began bringing unsold bread on Fridays. The group now plans to recruit two more volunteers before extending its opening hours. It has not decided whether to accept food from restaurants.",
        "examples": [
          "April: entrance hall",
          "May: beside the kitchen",
          "June: bakery joins"
        ]
      },
      {
        "heading": "Separate cause from sequence",
        "text": "Draw a simple timeline and write a reason beside any change explained in the text. The months show when things happened, while because explains why the first location did not work. A later event is not automatically caused by an earlier one. Support your answer with the exact relationship expressed in the passage.",
        "examples": [
          "The fridge moved because deliveries blocked the door.",
          "The bakery began donating in June."
        ]
      },
      {
        "heading": "Check a future plan carefully",
        "text": "Plans are not completed actions. The group intends to extend hours after recruiting more volunteers, but the passage does not say that this has happened. Make two notes headed established and undecided. This habit prevents you from turning a possible future development into a fact when you answer reading questions.",
        "examples": [
          "Established: dated food is checked each morning.",
          "Undecided: accepting restaurant food"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why was the fridge moved from the entrance hall?",
        "options": [
          "It was too cold there.",
          "The bakery needed the space.",
          "Deliveries blocked the door.",
          "The volunteers refused to label food."
        ],
        "answer": 2,
        "explanation": "The manager requested the move because deliveries obstructed the door."
      },
      {
        "prompt": "What happened in June?",
        "options": [
          "A bakery began donating unsold bread.",
          "The fridge first opened in the hall.",
          "Restaurants became the main donors.",
          "Opening hours were extended."
        ],
        "answer": 0,
        "explanation": "The passage dates the bakery donations to June."
      },
      {
        "prompt": "Which statement is supported?",
        "options": [
          "Restaurants already donate every day.",
          "Two volunteers have already been recruited.",
          "Food without labels is always kept.",
          "The group wants more volunteers before extending hours."
        ],
        "answer": 3,
        "explanation": "Recruiting two more volunteers is stated as a step before extending the hours."
      }
    ]
  },
  {
    "id": "b1-reading-repair-cafe",
    "level": "b1",
    "skill": "reading",
    "title": "Read for reasons and cautious inference",
    "description": "Understand why a repair café changes its booking system.",
    "minutes": 18,
    "content": [
      {
        "heading": "Original passage: a repair café",
        "text": "Every second Saturday, volunteers at Mill Lane Hall help visitors repair small household items. No repair is guaranteed, and visitors remain with their belongings while work is attempted. Last month, several people waited over an hour, although some repairs took only ten minutes. The organizers realized that a single queue did not match the different skills needed. From next month, visitors will book either a sewing slot or an electrical slot. Walk-in visitors will still be welcome if spaces remain. The café does not charge for volunteers’ time, but visitors must pay for any new parts they approve. The organizers hope the system will reduce waiting, and they will review it after three sessions.",
        "examples": [
          "Sewing and electrical repairs need different skills.",
          "New parts require visitor approval."
        ]
      },
      {
        "heading": "Identify the actual problem",
        "text": "The length of a repair and the availability of a suitable volunteer are different issues. Find the organizer’s explanation rather than assuming that all volunteers work slowly. A good answer connects the separate skills to the single queue. A plausible everyday explanation is not enough unless this particular text supports it.",
        "examples": [
          "Stated issue: one queue for different repair skills",
          "Not stated: all volunteers work slowly"
        ]
      },
      {
        "heading": "Read conditions and promises",
        "text": "Words such as if and hope limit what is promised. A walk-in visitor may be admitted only when spaces remain, and reduced waiting is a hoped-for outcome. Write a short message explaining what a visitor should expect. Include the cost of approved parts and the absence of a repair guarantee.",
        "examples": [
          "A booking offers a relevant slot, not a guaranteed repair.",
          "Walk-ins depend on remaining space."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why are separate booking categories being introduced?",
        "options": [
          "Every repair lasts exactly ten minutes.",
          "Different repairs need different volunteer skills.",
          "The hall will close permanently.",
          "Visitors dislike all electrical repairs."
        ],
        "answer": 1,
        "explanation": "The organizers link the problem to a single queue that does not match the required skills."
      },
      {
        "prompt": "Which cost might a visitor have to pay?",
        "options": [
          "An hourly volunteer fee",
          "A compulsory entrance ticket",
          "A fee for standing in the queue",
          "The cost of new parts they approve"
        ],
        "answer": 3,
        "explanation": "Volunteer time is free, but approved replacement parts must be paid for."
      },
      {
        "prompt": "What can a walk-in visitor reasonably expect?",
        "options": [
          "A possible place if spaces remain",
          "A guaranteed immediate repair",
          "Free replacement parts in every case",
          "A permanent ban from future sessions"
        ],
        "answer": 0,
        "explanation": "The passage explicitly makes walk-in admission conditional on available spaces."
      }
    ]
  },
  {
    "id": "b1-reading-volunteer-fit",
    "level": "b1",
    "skill": "reading",
    "title": "Choose a volunteer role from evidence",
    "description": "Match availability and preferences to detailed role descriptions.",
    "minutes": 18,
    "content": [
      {
        "heading": "Original passage: two volunteer roles",
        "text": "Riverside Learning Centre needs volunteers for two roles. Reading partners meet adults on Tuesday evenings from six to eight. They help learners practise short texts, and they must attend a Saturday training session before starting. No teaching qualification is required, but volunteers must commit to ten weeks. Digital helpers work on Friday mornings, supporting visitors with email and online forms. They need confident basic computer skills and can choose which weeks to attend, although they must tell the coordinator by Wednesday. Both roles take place at the centre, and travel expenses can be claimed with receipts. Volunteers do not give legal or financial advice; they refer those questions to qualified services.",
        "examples": [
          "Reading: fixed ten-week commitment",
          "Digital help: flexible Fridays, notice required"
        ]
      },
      {
        "heading": "Match requirements before preferences",
        "text": "Underline the times, minimum commitment, and required preparation for each role. Then compare them with a person’s actual availability. Someone may enjoy reading but still be unable to take the reading role because of the fixed evenings. A role fits only when the practical requirements and the person’s schedule can work together.",
        "examples": [
          "Free Tuesday evenings for ten weeks → possible reading partner",
          "Free occasional Friday mornings → possible digital helper"
        ]
      },
      {
        "heading": "Notice shared limits",
        "text": "Both roles share a location, an expenses process, and a boundary on advice. Do not assume that flexibility means working from home or that every travel cost is automatically paid without evidence. Summarize the roles in a comparison table, then explain one recommendation with two supporting details from the passage.",
        "examples": [
          "Receipts are needed to claim travel expenses.",
          "Refer legal questions to qualified services."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "An experienced computer user can volunteer on occasional Friday mornings. Which role best fits?",
        "options": [
          "Reading partner because no computer skills are used",
          "Neither role because both require ten weeks",
          "Digital helper because attendance can vary with notice",
          "Reading partner because all training is on Friday"
        ],
        "answer": 2,
        "explanation": "Digital helpers use computer skills and can choose their weeks if they notify the coordinator."
      },
      {
        "prompt": "What must a reading partner do before starting?",
        "options": [
          "Complete a teaching degree",
          "Attend the Saturday training session",
          "Provide legal advice",
          "Work remotely for ten weeks"
        ],
        "answer": 1,
        "explanation": "A Saturday training session is required, although a teaching qualification is not."
      },
      {
        "prompt": "Which rule applies to both roles?",
        "options": [
          "They require Friday attendance.",
          "They offer financial advice.",
          "They guarantee travel payments without receipts.",
          "They refer legal questions to qualified services."
        ],
        "answer": 3,
        "explanation": "The final sentence sets this advice boundary for volunteers in both roles."
      }
    ]
  },
  {
    "id": "b1-listen-workshop-booking",
    "level": "b1",
    "skill": "listening",
    "title": "Listen: book the right workshop",
    "description": "Identify a corrected time, preparation task, and backup plan.",
    "minutes": 18,
    "listeningText": "Hello, this is a message for everyone coming to Saturday’s photography workshop. We originally advertised a ten o’clock start, but the tutor’s train arrives later than expected, so we will begin at half past ten. Please arrive at the community centre fifteen minutes before that to collect your name badge. You do not need a professional camera; a phone camera is fine. Before Saturday, take three photographs of the same object in different light and bring them with you. We planned to practise in the garden, but heavy rain is forecast. If it rains, we will use the upstairs hall instead. The workshop ends at one, and tea will be available during a short break. Please tell reception today if you can no longer attend.",
    "content": [
      {
        "heading": "Listen for the final arrangement",
        "text": "First listen for the purpose of the message and identify the event. On the second listen, label each time rather than writing a disconnected list of numbers. An original advertised time may be replaced by a correction. The words but and so help you connect the change to its reason.",
        "examples": [
          "Original start: ten o’clock",
          "Final start: half past ten"
        ]
      },
      {
        "heading": "Connect instructions to actions",
        "text": "Separate what participants must bring from what they do not need. A negative instruction can prevent unnecessary preparation, while a before phrase identifies a task to complete in advance. Write your notes as short actions, then replay the relevant sentence to check both the object and the required quantity.",
        "examples": [
          "Bring three photographs of one object.",
          "A phone camera is acceptable."
        ]
      },
      {
        "heading": "Reconstruct the practical plan",
        "text": "After listening, explain the plan to a partner without reading the transcript. Include arrival time, preparation, and the weather backup. Distinguish the forecast from a guaranteed outcome: the indoor hall is conditional on rain. Use the transcript afterward to correct missing details and then listen once more at a comfortable speed.",
        "examples": [
          "Arrive at ten fifteen for the name badge.",
          "If it rains, use the upstairs hall."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What time should participants arrive to collect their badge?",
        "options": [
          "Ten o’clock",
          "Ten fifteen",
          "Ten thirty",
          "Eleven o’clock"
        ],
        "answer": 1,
        "explanation": "The start is 10:30, and participants should arrive fifteen minutes earlier, at 10:15."
      },
      {
        "prompt": "What should participants prepare before Saturday?",
        "options": [
          "A professional camera receipt",
          "Three pictures of different people only",
          "Three photographs of the same object in different light",
          "A printed garden map"
        ],
        "answer": 2,
        "explanation": "The message asks for three photographs of the same object under different lighting."
      },
      {
        "prompt": "What is the backup location if it rains?",
        "options": [
          "The tutor’s station",
          "The centre garden",
          "The downstairs café",
          "The upstairs hall"
        ],
        "answer": 3,
        "explanation": "The speaker says the upstairs hall will be used if it rains."
      }
    ]
  },
  {
    "id": "b1-listen-rental-repair",
    "level": "b1",
    "skill": "listening",
    "title": "Listen: arrange a household repair",
    "description": "Track the fault, the appointment window, and who will provide access.",
    "minutes": 18,
    "listeningText": "Hi Lina, it is Mark from the housing office. I have spoken to the plumber about the kitchen tap you reported. She thinks the loose handle can probably be repaired, so we are not ordering a new tap yet. She can visit on Thursday between nine and eleven in the morning. I know you said you have a class at ten, but your neighbour Mr Cole has offered to let her in if you leave him the spare key. Please confirm that arrangement with him today. Clear the cupboard under the sink before the visit because the plumber will need access to the pipes. You do not need to turn off the water yourself. If the appointment changes, our office will phone you rather than send an email.",
    "content": [
      {
        "heading": "Identify the problem and proposed response",
        "text": "Listen once to decide whether this is a new complaint, an appointment update, or a payment request. Then listen for the item needing attention and the proposed repair. Probably signals an initial judgement, not a guarantee. Avoid turning a likely repair into a confirmed replacement when you summarize the message.",
        "examples": [
          "Problem: a loose kitchen tap handle",
          "Proposed response: repair before ordering a new tap"
        ]
      },
      {
        "heading": "Follow people and responsibilities",
        "text": "Several people appear in this message, each with a different role. Label your notes with resident, neighbour, plumber, and office. The person receiving a message may not be the person providing access. Notice any if clause because it explains a condition that must be met before a practical arrangement can work.",
        "examples": [
          "Neighbour: provide access with the spare key",
          "Resident: confirm the arrangement and clear the cupboard"
        ]
      },
      {
        "heading": "Check the final instructions",
        "text": "Summarize the appointment as a short checklist, including the time window and the way a change will be communicated. Distinguish a task to do from a task explicitly unnecessary. On your final listen, check small negative words carefully, because missing not can reverse an instruction even when you recognize the main vocabulary.",
        "examples": [
          "Visit: Thursday, nine to eleven",
          "No need to turn off the water yourself"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is planned for the tap at this stage?",
        "options": [
          "Order an entire new kitchen",
          "Cancel the plumber",
          "Try repairing the loose handle",
          "Replace every pipe immediately"
        ],
        "answer": 2,
        "explanation": "The plumber thinks the handle can probably be repaired, so a new tap has not been ordered."
      },
      {
        "prompt": "How can the plumber enter if Lina is at class?",
        "options": [
          "Mr Cole can let her in if he has the spare key.",
          "The office will remove the door.",
          "Lina must cancel her course.",
          "The plumber already has Lina’s own key."
        ],
        "answer": 0,
        "explanation": "The neighbour offered to provide access if Lina leaves him the spare key."
      },
      {
        "prompt": "What should Lina do before the visit?",
        "options": [
          "Turn off all water herself",
          "Wait for a confirmation email about every change",
          "Move the kitchen sink outside",
          "Clear the cupboard under the sink"
        ],
        "answer": 3,
        "explanation": "The plumber needs access to the pipes, so the cupboard should be cleared."
      }
    ]
  },
  {
    "id": "b1-listen-course-choice",
    "level": "b1",
    "skill": "listening",
    "title": "Listen: compare two study options",
    "description": "Distinguish a preferred feature from the final practical decision.",
    "minutes": 18,
    "listeningText": "I looked at two evening English courses yesterday. The course at Oak Street College has a smaller class, and I liked the idea of getting more individual feedback. However, it finishes at nine thirty, after the last bus to my village. The online course has more students, but the teacher uses small discussion groups during each lesson. I was worried that the lessons would all be recordings, so I called the centre. They confirmed that the classes are live and that recordings are only for review. I have chosen the online course because I can join from home and still practise speaking. It starts next Monday. I need to test my microphone this weekend, and my sister has offered to help me do that.",
    "content": [
      {
        "heading": "Track evaluation and decision",
        "text": "A speaker can admire one feature while choosing a different option overall. On your first listen, identify the two courses. On your second listen, record one advantage and one constraint for each. The word however may introduce the practical obstacle that outweighs an attractive feature and drives the final decision.",
        "examples": [
          "College advantage: smaller class",
          "College obstacle: last bus leaves before the class finishes"
        ]
      },
      {
        "heading": "Listen for a corrected assumption",
        "text": "The speaker initially worries about the online format and then checks it. Separate the original assumption from the information confirmed by the centre. This prevents you from selecting an early concern as if it describes the actual course. Use headings such as worry, checked fact, and decision to organize your notes.",
        "examples": [
          "Worry: lessons might all be recordings.",
          "Confirmed: live classes with recordings for review."
        ]
      },
      {
        "heading": "Transfer the listening strategy",
        "text": "Imagine giving a friend advice about these options. Explain the final choice with its main reason and mention the preparation still needed. Check that your summary distinguishes the course feature from the learner’s personal circumstances. Then replay the audio and identify the phrase that most clearly signals the speaker’s final decision.",
        "examples": [
          "Chosen: online course, because no return bus journey is needed",
          "Preparation: test the microphone this weekend"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why does the speaker reject the college course?",
        "options": [
          "The classes contain no feedback.",
          "It ends after the last bus home.",
          "It has no classroom.",
          "It begins before the village bus arrives."
        ],
        "answer": 1,
        "explanation": "The 9:30 finish is later than the last bus to the speaker’s village."
      },
      {
        "prompt": "What did the centre confirm about the online course?",
        "options": [
          "Every lesson is only a recording.",
          "Speaking is never practised.",
          "It has fewer students than the college course.",
          "Classes are live, with recordings available for review."
        ],
        "answer": 3,
        "explanation": "The centre corrected the worry that all lessons would be recordings."
      },
      {
        "prompt": "What will the speaker do this weekend?",
        "options": [
          "Test the microphone with the sister’s help",
          "Travel to Oak Street for a final exam",
          "Record every future lesson alone",
          "Change the village bus timetable"
        ],
        "answer": 0,
        "explanation": "The speaker needs to test the microphone, and the sister has offered to help."
      }
    ]
  },
  {
    "id": "b1-writing-clear-complaint",
    "level": "b1",
    "skill": "writing",
    "title": "Write a useful complaint email",
    "description": "State a problem calmly and request a practical remedy.",
    "minutes": 22,
    "content": [
      {
        "heading": "Give the reader identifying details",
        "text": "A complaint works best when the reader can find the transaction and understand the problem quickly. Open with your purpose, then give the item, date, and reference number if available. Describe what happened without insulting the reader. Accurate details are more useful than repeating that a situation is terrible, because they help the recipient investigate.",
        "examples": [
          "I am writing about order 417, delivered on 12 May.",
          "The desk arrived with a cracked leg."
        ]
      },
      {
        "heading": "Connect the problem to a request",
        "text": "Explain the effect on you and ask for an achievable remedy. Choose a replacement, repair, refund request, or information according to the situation. Avoid claiming a policy or entitlement you have not checked. If you attach evidence, tell the reader what it shows. End with a clear way to contact you or confirm the next step.",
        "examples": [
          "I cannot assemble the desk because the leg is damaged.",
          "Could you arrange a replacement? I have attached a photograph."
        ]
      },
      {
        "heading": "Draft and revise your message",
        "text": "Write 100–130 words to a shop about headphones delivered in the wrong colour. Include an order reference, the difference between what you requested and received, and your preferred solution. Read the draft as a customer-service worker: can you identify the order and know what response is needed? Remove repeated complaints and check that your tone stays specific and polite.",
        "examples": [
          "I ordered blue headphones, but the package contained red ones.",
          "Please let me know how to return the incorrect item."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which opening best helps a shop identify the problem?",
        "options": [
          "Your business is always awful.",
          "I am writing about order 417, delivered on 12 May.",
          "I have many things in my house.",
          "You know what happened already."
        ],
        "answer": 1,
        "explanation": "The order reference and date help the reader locate the transaction."
      },
      {
        "prompt": "Which sentence combines a clear problem and a useful request?",
        "options": [
          "Everything is bad and everyone is useless.",
          "I bought something once.",
          "The left speaker does not work; could you arrange a repair?",
          "I demand an unknown policy."
        ],
        "answer": 2,
        "explanation": "It names the fault and asks for a specific practical response."
      },
      {
        "prompt": "What should you check before sending?",
        "options": [
          "That the problem, order details, and requested next step are clear",
          "That every sentence repeats the complaint",
          "That all dates are removed",
          "That the longest words replace familiar accurate ones"
        ],
        "answer": 0,
        "explanation": "A complaint needs usable facts and an actionable request more than repetition or complex vocabulary."
      }
    ]
  },
  {
    "id": "b1-writing-faithful-summary",
    "level": "b1",
    "skill": "writing",
    "title": "Summarize a short informative text",
    "description": "Select essential points and keep the source’s meaning.",
    "minutes": 22,
    "content": [
      {
        "heading": "Find the essential information",
        "text": "Read this source: “Harbour School will replace disposable lunch trays with washable plates next term. The change follows a two-week trial in which kitchen staff recorded fewer rubbish bags but spent longer washing up. The school will buy a more efficient dishwasher before extending the scheme to all classes. Pupils will still bring their own water bottles.” A summary should capture the change, trial findings, and required preparation, rather than listing every noun.",
        "examples": [
          "Change: washable plates instead of disposable trays",
          "Trial: less rubbish, more washing-up time"
        ]
      },
      {
        "heading": "Condense without changing the claim",
        "text": "Put the source aside and explain its main message in your own words. Keep the relationships between ideas: a benefit does not erase a practical cost, and a planned action is not already completed. You may retain an essential term when no useful alternative exists. Do not insert your personal opinion or an unreported cause into a neutral summary.",
        "examples": [
          "The school plans to introduce reusable plates after a trial.",
          "A new dishwasher will be bought before expansion."
        ]
      },
      {
        "heading": "Write and compare",
        "text": "Write a 45–60 word summary of the source in the first section. Then compare every sentence with the original and check whether it is supported. Remove minor details if they distract from the main change, but preserve the condition before wider adoption. Underline any word such as all, already, or always and verify that its strength matches the source.",
        "examples": [
          "Accurate: The trial reduced rubbish but increased washing-up time.",
          "Unsupported: The trial proved that reusable plates cost nothing."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which point belongs in a short summary?",
        "options": [
          "The exact colour of every plate",
          "The dishwasher’s invented brand name",
          "The trial reduced rubbish but increased washing-up time.",
          "The writer’s favourite school lunch"
        ],
        "answer": 2,
        "explanation": "The paired trial findings explain both the benefit and the practical issue."
      },
      {
        "prompt": "Which statement changes the source’s meaning?",
        "options": [
          "The school plans washable plates next term.",
          "A dishwasher will be bought before expansion.",
          "Pupils will still bring water bottles.",
          "All classes already use washable plates."
        ],
        "answer": 3,
        "explanation": "The source describes a future change after preparation, not a completed rollout to all classes."
      },
      {
        "prompt": "A neutral summary should usually…",
        "options": [
          "add a personal opinion after every source fact.",
          "retain the main meaning and omit unsupported additions.",
          "replace every word even when the new word is inaccurate.",
          "copy the source entirely without selection."
        ],
        "answer": 1,
        "explanation": "A summary selects and condenses essential information while preserving its meaning."
      }
    ]
  },
  {
    "id": "b1-writing-editing-workshop",
    "level": "b1",
    "skill": "writing",
    "title": "Edit for complete and connected sentences",
    "description": "Repair fragments, run-ons, tense shifts, and unclear references.",
    "minutes": 22,
    "content": [
      {
        "heading": "Give every sentence a main clause",
        "text": "A complete sentence normally needs a subject and a finite verb expressing a main statement. Because the bus was late is a dependent fragment unless it is joined to a main clause. Two full sentences should not be joined by only a comma. Choose a full stop, a suitable conjunction, or another structure that correctly expresses their relationship.",
        "examples": [
          "Because the bus was late, I missed the opening talk.",
          "The room was crowded, so we opened another room."
        ]
      },
      {
        "heading": "Keep time and reference clear",
        "text": "Check that your verbs match the time sequence. A story about yesterday usually uses past forms for its main events. Pronouns should point clearly to the intended person or thing. If two possible references compete, repeat a name or noun. Clarity is more valuable than avoiding every repeated word at the cost of confusing your reader.",
        "examples": [
          "Yesterday I arrived early and found a seat.",
          "Maya called Nina because Nina had the tickets."
        ]
      },
      {
        "heading": "Use focused revision passes",
        "text": "Draft 90–110 words about missing a train and finding another route. Make separate revision passes for complete sentences, verb time, and clear references. During the first pass, read aloud and mark where one statement ends. During the next passes, circle time expressions and underline pronouns. This method makes editing manageable because each reading has one concrete purpose.",
        "examples": [
          "Fragment repair: After the meeting ended, we walked home.",
          "Run-on repair: I checked the map. The station was nearby."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which revision turns the fragment into a complete sentence?",
        "options": [
          "Because the station was closed.",
          "Because the station was closed, we took a bus.",
          "The closed station because.",
          "Because closed was the station."
        ],
        "answer": 1,
        "explanation": "The revision adds the main clause we took a bus to the because clause."
      },
      {
        "prompt": "Which sentence correctly joins cause and result?",
        "options": [
          "It rained, we moved indoors.",
          "It rained we moved indoors.",
          "It rained, so we moved indoors.",
          "It rained because so indoors."
        ],
        "answer": 2,
        "explanation": "So joins the two main clauses and makes the result relationship clear."
      },
      {
        "prompt": "Which version keeps the time sequence consistent?",
        "options": [
          "Yesterday I checked the timetable and bought a ticket.",
          "Yesterday I check the timetable and bought a ticket.",
          "Yesterday I checking the timetable and buy.",
          "Yesterday I will check and bought a ticket."
        ],
        "answer": 0,
        "explanation": "Checked and bought consistently describe the finished events yesterday."
      }
    ]
  },
  {
    "id": "b1-speaking-stress-rhythm",
    "level": "b1",
    "skill": "speaking",
    "title": "Make key words easy to hear",
    "description": "Use word stress, sentence stress, and helpful pauses.",
    "minutes": 18,
    "content": [
      {
        "heading": "Notice the strong syllable",
        "text": "A stressed syllable is usually more prominent than nearby syllables. Learning the stress as part of a new word can improve recognition as well as speaking. For example, the noun PHOtograph and the noun phoTOGraphy have different stress patterns. Capital letters here show teaching emphasis, not normal spelling. Listen, repeat, and keep all the other syllables audible without giving them equal force.",
        "examples": [
          "PHOtograph → phoTOGraphy",
          "TAble → aBOUT"
        ]
      },
      {
        "heading": "Highlight the message",
        "text": "In a neutral sentence, important nouns, main verbs, and descriptive words often carry prominence. Small grammar words are often less prominent, but they become strong when you need a contrast. Pause at a meaning boundary instead of separating every word. Aim for an understandable rhythm that helps your listener follow the idea rather than copying one particular accent.",
        "examples": [
          "I need the BLUE folder, please.",
          "We can meet after lunch / if the room is free."
        ]
      },
      {
        "heading": "Record and compare",
        "text": "Prepare a thirty-second introduction to a hobby or useful skill. Mark three important words and two natural pause points before speaking. Record it if possible, then listen for whether the key information stands out. Repeat with one improvement at a time. Keep your voice comfortable: prominence comes from a combination of pitch, duration, and clarity, not simply shouting.",
        "examples": [
          "I started gardening / because I wanted to grow herbs.",
          "The most useful tool / is a SMALL watering can."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "In a neutral request for a blue folder, which word is useful to emphasize when colour matters?",
        "options": [
          "The word the in every situation",
          "Every word equally",
          "The word blue",
          "Only the final please"
        ],
        "answer": 2,
        "explanation": "Blue identifies the distinguishing information, so prominence helps the listener choose the right folder."
      },
      {
        "prompt": "Where is a helpful pause in this sentence?",
        "options": [
          "We / can / meet / after / lunch",
          "We can meet after lunch / if the room is free.",
          "We can meet after / lunch if the / room is free.",
          "We can meet after lunch if the room / is / free."
        ],
        "answer": 1,
        "explanation": "The pause separates the main proposal from its condition at a natural meaning boundary."
      },
      {
        "prompt": "What is the best goal of this practice?",
        "options": [
          "Make key information clear at a comfortable pace",
          "Shout every syllable equally",
          "Remove all unstressed syllables",
          "Use only one permitted English accent"
        ],
        "answer": 0,
        "explanation": "Stress and pausing serve intelligibility; there is no single required accent."
      }
    ]
  },
  {
    "id": "b1-speaking-linking-clarity",
    "level": "b1",
    "skill": "speaking",
    "title": "Connect words without losing clarity",
    "description": "Practise consonant-to-vowel links and ask for precise repetition.",
    "minutes": 18,
    "content": [
      {
        "heading": "Hear words inside a stream",
        "text": "In connected speech, words are not always separated by silence. A final consonant can link smoothly to a following vowel, as in pick it up or turn off. The words remain separate grammatical units even when they sound connected. Practise slowly first, then at a natural comfortable speed, keeping the key consonants clear rather than forcing a fast performance.",
        "examples": [
          "pick it up → practise as one short group",
          "turn off the light → link turn and off"
        ]
      },
      {
        "heading": "Recognize common weaker forms",
        "text": "Small words such as to, a, and and often have weaker pronunciations in ordinary speech. Their exact sound varies by accent and context, and speakers can use a strong form for contrast. Learn to recognize these patterns while listening, but do not deliberately swallow words you cannot yet say clearly. Clarity and understanding are more important than maximum speed.",
        "examples": [
          "I want to ask a question.",
          "Tea and coffee are available."
        ]
      },
      {
        "heading": "Repair the exact missing piece",
        "text": "When a linked phrase is unclear, ask about the part you missed rather than repeatedly requesting the whole message. Practise a dialogue giving an address, collection time, and object. Your partner should ask one focused question, and you should repeat that detail in a clear word group. Check comprehension by having your partner summarize the final arrangement.",
        "examples": [
          "Did you say pick it up at eight?",
          "Could you repeat the street name, please?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which phrase contains a useful final-consonant-to-vowel link?",
        "options": [
          "Very blue",
          "My day",
          "No rain",
          "Pick it up"
        ],
        "answer": 3,
        "explanation": "The final consonants of pick and it can link to the following vowel sounds."
      },
      {
        "prompt": "You heard a collection instruction but missed the time. What is the most focused repair?",
        "options": [
          "Could you repeat the collection time, please?",
          "Please repeat every conversation this week.",
          "I know nothing about anything.",
          "Never speak with connected words."
        ],
        "answer": 0,
        "explanation": "A focused request identifies the exact information that needs clarification."
      },
      {
        "prompt": "When practising connected speech, you should…",
        "options": [
          "speak as fast as possible regardless of clarity.",
          "keep words understandable and increase speed gradually.",
          "remove all final consonants.",
          "assume every accent uses identical weak forms."
        ],
        "answer": 1,
        "explanation": "Connected speech should support natural intelligibility, and patterns vary across speakers."
      }
    ]
  },
  {
    "id": "b1-speaking-negotiate-plans",
    "level": "b1",
    "skill": "speaking",
    "title": "Agree on a plan together",
    "description": "Propose, give a reason, offer an alternative, and confirm.",
    "minutes": 18,
    "content": [
      {
        "heading": "Offer a specific proposal",
        "text": "A useful proposal includes an activity, time, and place when they matter. Invite the other person’s view instead of assuming agreement. If you cannot accept a suggestion, give a brief reason and offer an alternative. This keeps the conversation moving toward a workable arrangement rather than ending with a simple refusal.",
        "examples": [
          "Shall we practise at the library on Thursday at six?",
          "I work until six. Could we meet at seven instead?"
        ]
      },
      {
        "heading": "Explore a workable compromise",
        "text": "Listen for the underlying need: time, price, travel, or quiet space. Two people may disagree about the first suggestion but share a goal. Use questions to find which details can change. A compromise should address both people’s constraints, not just replace one suggestion with an unrelated idea that leaves the original problem unsolved.",
        "examples": [
          "Would an online call save you the bus journey?",
          "If the library closes early, we could use the community room."
        ]
      },
      {
        "heading": "Role-play and confirm",
        "text": "Role-play planning a study session. Person A needs a quiet place and cannot travel far; person B is available only after work. Make two proposals, explain one difficulty each, and agree on an alternative. End by repeating the final time, place, and preparation. Your partner should correct any mismatch before the conversation closes.",
        "examples": [
          "So, Thursday at seven in the community room.",
          "I will bring the reading exercises; can you bring a notebook?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which response keeps negotiation moving?",
        "options": [
          "No. That is all.",
          "Your plan is stupid.",
          "I cannot come at six; would seven work instead?",
          "I will ignore the question."
        ],
        "answer": 2,
        "explanation": "It gives a clear constraint and offers a specific alternative."
      },
      {
        "prompt": "One person needs quiet, and the other cannot travel far. What question explores both needs?",
        "options": [
          "Why do you dislike every place?",
          "How many words are in quiet?",
          "Can we forget the session?",
          "Is there a quiet room near your home?"
        ],
        "answer": 3,
        "explanation": "The question searches for a location that meets the quiet-space and travel constraints."
      },
      {
        "prompt": "What is the main purpose of a final confirmation?",
        "options": [
          "To repeat every rejected suggestion",
          "To check that both people share the same final arrangement",
          "To introduce a completely new topic",
          "To avoid naming the place or time"
        ],
        "answer": 1,
        "explanation": "Repeating the final details catches mismatches before the plan is acted on."
      }
    ]
  },
  {
    "id": "b2-grammar",
    "level": "b2",
    "skill": "grammar",
    "title": "Change the focus of a sentence",
    "description": "Use the passive and reported speech with control.",
    "minutes": 16,
    "content": [
      {
        "heading": "Focus on the action or result",
        "text": "The passive uses a form of be plus the past participle. Use it when the action or result matters more than the person doing it, or when that person is unknown. Keep the tense in the form of be. Include a by-phrase only when the agent is useful information.",
        "examples": [
          "Someone repaired the bridge. → The bridge was repaired.",
          "The results will be published tomorrow.",
          "The report has been reviewed by two specialists."
        ]
      },
      {
        "heading": "Report what someone said",
        "text": "Reported speech gives someone’s message without reproducing the exact words. After a past reporting verb, a tense often moves back and pronouns or time expressions may change. Backshift depends on context: a fact still true can remain in the present. Tell normally needs a person; say does not.",
        "examples": [
          "“I am tired,” she said. → She said she was tired.",
          "He told me the meeting had ended.",
          "She said the office opens at nine."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the passive of “They will publish the results tomorrow.”",
        "options": [
          "The results will be published tomorrow.",
          "The results have publish tomorrow.",
          "The results published tomorrow.",
          "The results will published tomorrow."
        ],
        "answer": 0,
        "explanation": "Future passive uses will be plus the past participle published."
      },
      {
        "prompt": "Which report is grammatically correct?",
        "options": [
          "He said me the meeting had ended.",
          "He tell me the meeting had ended.",
          "He told me that the meeting had ended.",
          "He told that the meeting had ended."
        ],
        "answer": 2,
        "explanation": "Tell takes a person, such as me; the past form is told."
      },
      {
        "prompt": "Why might a writer choose “The window was broken”?",
        "options": [
          "To avoid using any verb tense.",
          "To focus on the event when the person responsible is unknown or unimportant.",
          "To prove nobody caused it.",
          "To describe an action that must happen tomorrow."
        ],
        "answer": 1,
        "explanation": "The passive changes the focus; it does not prove the action had no agent."
      }
    ]
  },
  {
    "id": "b2-vocabulary",
    "level": "b2",
    "skill": "vocabulary",
    "title": "Choose the word that fits",
    "description": "Use precise collocations and match the level of formality.",
    "minutes": 13,
    "content": [
      {
        "heading": "Precision beats unnecessary complexity",
        "text": "Near-synonyms are not always interchangeable. Raise awareness is natural, while lift awareness is not a usual combination. A significant change is important or large in context; it does not always mean statistically significant. Check meaning, grammar, and collocation before replacing a familiar word with a sophisticated one.",
        "examples": [
          "raise awareness of road safety",
          "conduct research into language learning",
          "a significant improvement in clarity"
        ]
      },
      {
        "heading": "Match your reader and purpose",
        "text": "Register is the level and style of language appropriate to a situation. A friendly message can use find out; a formal report may use investigate. Neither is automatically better. Avoid mixing very casual expressions into a formal request unless you have a clear reason.",
        "examples": [
          "Informal: Can you look into this?",
          "Formal: Could you investigate this issue?",
          "Neutral: Please let me know the result."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which is the natural collocation?",
        "options": [
          "lift awareness",
          "raise awareness",
          "grow an awareness campaign up",
          "make awareness high up"
        ],
        "answer": 1,
        "explanation": "Raise awareness is the conventional combination for increasing public understanding."
      },
      {
        "prompt": "Which sentence best suits a formal report?",
        "options": [
          "Hey, the numbers are kind of wild.",
          "The team investigated the cause of the decline.",
          "The team did stuff to the numbers.",
          "We checked the thing out and it was super weird."
        ],
        "answer": 1,
        "explanation": "Investigated and cause of the decline are precise and appropriate for a formal report."
      },
      {
        "prompt": "When is a less familiar synonym a good replacement?",
        "options": [
          "When its meaning, grammar, and usual combinations fit the context.",
          "Whenever it is longer.",
          "Whenever a dictionary lists it.",
          "Whenever it sounds impressive."
        ],
        "answer": 0,
        "explanation": "Vocabulary control depends on accurate use in context, not word length."
      }
    ]
  },
  {
    "id": "b2-reading",
    "level": "b2",
    "skill": "reading",
    "title": "IELTS-style reading: evidence first",
    "description": "Practice skimming, scanning, and True/False/Not Given reasoning.",
    "minutes": 16,
    "content": [
      {
        "heading": "Skim, then locate the evidence",
        "text": "Read this original practice passage: “A city pilot introduced rooftop gardens on five public buildings. Staff reported that the gardens made the buildings more pleasant. Sensors recorded lower roof-surface temperatures on hot afternoons. The pilot did not measure electricity use, and the council has not yet decided whether to extend the project.” Skim for the overall topic, then scan for the detail each question needs.",
        "examples": [
          "Main topic: a rooftop garden pilot.",
          "Measured: roof-surface temperatures.",
          "Not measured: electricity use."
        ]
      },
      {
        "heading": "False is different from missing",
        "text": "In True/False/Not Given tasks, True agrees with the passage, False contradicts it, and Not Given means the passage does not provide enough information. Do not use your outside knowledge to fill gaps. A benefit that sounds plausible is still unconfirmed if the passage does not establish it.",
        "examples": [
          "“The pilot involved five buildings” agrees with the passage.",
          "“Electricity use was measured” contradicts the passage.",
          "“The gardens cost £50,000” is not established."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "“The pilot measured electricity use.” Which judgement is supported?",
        "options": [
          "Not Given",
          "False",
          "All three are possible",
          "True"
        ],
        "answer": 1,
        "explanation": "The passage explicitly says the pilot did not measure electricity use, so the statement is false."
      },
      {
        "prompt": "“The gardens cost £50,000.” Which judgement is supported?",
        "options": [
          "True",
          "False",
          "True because gardens are expensive",
          "Not Given"
        ],
        "answer": 3,
        "explanation": "The passage provides no cost figure, so the statement is not given."
      },
      {
        "prompt": "Which conclusion stays within the evidence?",
        "options": [
          "All city buildings now have gardens.",
          "Staff disliked the gardens.",
          "Roof-surface temperatures were lower on hot afternoons.",
          "The project definitely cut energy bills."
        ],
        "answer": 2,
        "explanation": "That is the measured result described in the passage. Electricity savings and expansion are not established."
      }
    ]
  },
  {
    "id": "b2-listening",
    "level": "b2",
    "skill": "listening",
    "title": "Listen: follow the signposts",
    "description": "Identify a presentation’s purpose, qualification, and recommendation.",
    "minutes": 14,
    "listeningText": "Today I will outline our four-day working week trial. At first, managers worried that customers would receive slower replies. In fact, average response times stayed the same, while staff reported less stress. That said, the trial involved only one department during a relatively quiet period. We should therefore avoid assuming that every team would obtain the same results. My recommendation is to run a second trial during the busy season before introducing a permanent change.",
    "content": [
      {
        "heading": "Use signposts to follow structure",
        "text": "In presentations, phrases such as at first, in fact, that said, and therefore show how ideas relate. Note a few words under headings: concern, finding, limitation, and recommendation. You can often follow the argument even when an individual word is unfamiliar.",
        "examples": [
          "At first introduces the original concern.",
          "In fact introduces a finding that challenges it.",
          "That said introduces a qualification."
        ]
      },
      {
        "heading": "Hear the strength of a conclusion",
        "text": "A careful speaker distinguishes an observation from a general claim. In this account, one department’s results do not automatically apply to every team. Listen for caution words such as relatively and avoid assuming. The final recommendation may be further investigation rather than immediate action.",
        "examples": [
          "Observation: average response times did not change.",
          "Limitation: one department in a quiet period.",
          "Recommendation: test the idea again during a busy season."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What happened to average customer response times?",
        "options": [
          "They became much slower.",
          "They stayed the same.",
          "They were not observed at all.",
          "They improved in every department."
        ],
        "answer": 1,
        "explanation": "The speaker explicitly says average response times stayed the same."
      },
      {
        "prompt": "Why is the speaker cautious about the results?",
        "options": [
          "No employee took part.",
          "The company has no customers.",
          "The trial covered only one department in a quiet period.",
          "All teams failed the trial."
        ],
        "answer": 2,
        "explanation": "The limited setting makes generalization uncertain."
      },
      {
        "prompt": "What does the speaker recommend?",
        "options": [
          "Ignoring response times",
          "A second trial during the busy season",
          "A permanent change immediately",
          "Ending all flexible work"
        ],
        "answer": 1,
        "explanation": "The final sentence recommends another trial before a permanent change."
      }
    ]
  },
  {
    "id": "b2-writing",
    "level": "b2",
    "skill": "writing",
    "title": "Make an essay easy to follow",
    "description": "Plan a position, develop paragraphs, and link ideas naturally.",
    "minutes": 20,
    "content": [
      {
        "heading": "Answer the exact question",
        "text": "Before writing an opinion essay, identify the topic, the task, and any limits in the question. A question asking whether the benefits outweigh the drawbacks needs an overall judgement, not just two lists. Plan an introduction with your position, focused body paragraphs, and a conclusion that answers the question consistently.",
        "examples": [
          "Question: Do the benefits of remote work outweigh the drawbacks?",
          "Position: Overall, the flexibility is beneficial when teams maintain regular contact.",
          "Body ideas: access and flexibility; communication problems and how to manage them."
        ]
      },
      {
        "heading": "Develop instead of decorating",
        "text": "Explain how and why each point supports your position. Use a specific example and acknowledge a relevant limitation. Connect ideas by clear references and logical order; do not depend on a memorized connector at the start of every sentence. Write a short practice essay, then check whether each paragraph advances your answer.",
        "examples": [
          "This flexibility can help parents arrange their working day.",
          "However, new employees may need more direct support.",
          "Regular mentoring sessions can reduce that difficulty."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "An “outweigh” question requires you to…",
        "options": [
          "avoid expressing a position.",
          "only define the topic.",
          "give exactly five examples.",
          "judge whether one side is more significant overall."
        ],
        "answer": 3,
        "explanation": "Outweigh asks for a comparison and an overall judgement."
      },
      {
        "prompt": "Which paragraph plan provides development?",
        "options": [
          "Four unrelated opinions → a long quotation",
          "Connector → connector → connector",
          "Introduction → repeated introduction",
          "Point → explanation → specific example → link to the argument"
        ],
        "answer": 3,
        "explanation": "Explaining and illustrating a point shows how it supports the argument."
      },
      {
        "prompt": "What should the conclusion normally do?",
        "options": [
          "Introduce a major new argument.",
          "Contradict the body paragraphs.",
          "List unrelated vocabulary.",
          "Restate the overall answer supported by the essay."
        ],
        "answer": 3,
        "explanation": "A conclusion draws together the position developed in the body."
      }
    ]
  },
  {
    "id": "b2-speaking",
    "level": "b2",
    "skill": "speaking",
    "title": "Discuss both sides thoughtfully",
    "description": "Develop IELTS-style discussion answers with reasons and nuance.",
    "minutes": 16,
    "content": [
      {
        "heading": "Move from personal to general",
        "text": "Discussion questions often ask about society rather than only your own life. State a general view, explain a cause or effect, and use a relevant example. Qualify broad statements with many, some, often, or in certain situations. This makes your answer more precise and gives you room to consider exceptions.",
        "examples": [
          "Many people value flexible working because it reduces commuting.",
          "For example, parents may find it easier to manage school pickups.",
          "However, the benefits depend partly on the type of job."
        ]
      },
      {
        "heading": "Acknowledge another perspective",
        "text": "You can recognize a reasonable opposing point without abandoning your position. Explain when that perspective applies, then state your own judgement. In an IELTS-style discussion, focus on relevant, developed answers and clear delivery. Memorized speeches can make it harder to respond to the actual question.",
        "examples": [
          "I can see why some employers prefer office work.",
          "That may be true for tasks requiring close collaboration.",
          "On balance, I think a flexible approach works best."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which answer makes the most careful generalization?",
        "options": [
          "Everyone hates travelling.",
          "Many commuters would welcome shorter journeys.",
          "No person enjoys any office.",
          "All jobs can be done online."
        ],
        "answer": 1,
        "explanation": "Many makes a supported, limited generalization rather than an absolute claim."
      },
      {
        "prompt": "What does “I can see why some people disagree” do?",
        "options": [
          "It proves your own opinion is wrong.",
          "It ends the discussion.",
          "It acknowledges another reasonable perspective.",
          "It changes the topic to eyesight."
        ],
        "answer": 2,
        "explanation": "The phrase recognizes a contrasting view and can introduce a balanced discussion."
      },
      {
        "prompt": "What is the best preparation for an unfamiliar discussion question?",
        "options": [
          "Avoid giving examples.",
          "Practise giving a view, a reason, an example, and a qualification.",
          "Recite a fixed speech regardless of the topic.",
          "Use the longest words you know."
        ],
        "answer": 1,
        "explanation": "A flexible answer structure helps you respond to the actual question."
      }
    ]
  },
  {
    "id": "b2-past-before-past",
    "level": "b2",
    "skill": "grammar",
    "title": "Organize stories and reported questions",
    "description": "Show earlier past actions and report questions with statement word order.",
    "minutes": 22,
    "content": [
      {
        "heading": "Establish an earlier past",
        "text": "Use the past perfect, had plus past participle, to show an action completed before another past reference point. Once the sequence is clear, past simple can carry the main story. Before and after may already make the sequence obvious, so the past perfect is a tool for clarity rather than a requirement in every sentence.",
        "examples": [
          "When we reached the platform, the train had left.",
          "I opened the document and read the notes."
        ]
      },
      {
        "heading": "Report questions without inversion",
        "text": "A reported question uses statement word order: question word, subject, and verb. For a yes-or-no question, use if or whether. After a past reporting verb, tense often shifts back when the viewpoint moves into the past. Pronouns and time words must match the reporting situation, so tomorrow may become the following day.",
        "examples": [
          "She asked where I lived.",
          "He asked whether the parcel had arrived.",
          "They asked if we could return the following day."
        ]
      },
      {
        "heading": "Reconstruct a confusing event",
        "text": "Write a short account of a missed meeting. Put the main events on a timeline, then add one earlier explanation with had. Include a question someone asked afterward. Check that you have removed question inversion and question do from the report. The aim is a reader who can reconstruct events without guessing their order.",
        "examples": [
          "I arrived late because I had written down the wrong address.",
          "The organizer asked why I had gone to the old office."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "The doors were already locked when we arrived. Which sentence expresses that order?",
        "options": [
          "The doors had been locked before we arrived.",
          "The doors will lock before we arrived.",
          "The doors lock after we arrived.",
          "The doors have lock before arrival."
        ],
        "answer": 0,
        "explanation": "Had been locked places the locking before the past reference point of our arrival."
      },
      {
        "prompt": "Report: Where do you work? She asked me…",
        "options": [
          "where did I work.",
          "where do I work.",
          "where I worked.",
          "where worked I."
        ],
        "answer": 2,
        "explanation": "Reported questions use statement order, I worked, rather than question inversion."
      },
      {
        "prompt": "Report: Has the payment arrived? He asked…",
        "options": [
          "had the payment arrived.",
          "whether the payment had arrived.",
          "whether had arrived the payment.",
          "did the payment has arrived."
        ],
        "answer": 1,
        "explanation": "A yes-or-no report can use whether, followed by the subject and verb in statement order."
      }
    ]
  },
  {
    "id": "b2-modal-evidence-passives",
    "level": "b2",
    "skill": "grammar",
    "title": "Express deductions and obligations",
    "description": "Match must, might, cannot, and passive forms to the evidence.",
    "minutes": 22,
    "content": [
      {
        "heading": "Distinguish inference from fact",
        "text": "Modal verbs can express how strongly evidence supports a conclusion. Must suggests a strong positive deduction; cannot suggests a strong negative deduction; might and could express possibility. These are judgements from evidence rather than direct observations. For a past deduction, use a modal plus have and a past participle.",
        "examples": [
          "The lights are on, so someone might be inside.",
          "She must have left early; her desk is empty and the guard saw her go."
        ]
      },
      {
        "heading": "Keep obligation separate",
        "text": "Must can also express an obligation. Context shows whether it means a requirement or a deduction. Must not prohibits an action, while do not have to means there is no requirement. In passive requirements, use modal plus be plus past participle; for a past action use modal plus have been plus past participle.",
        "examples": [
          "Forms must be signed before submission.",
          "You do not have to print the receipt.",
          "The message may have been sent to the wrong address."
        ]
      },
      {
        "heading": "Calibrate a practical update",
        "text": "Imagine a missing delivery. List what you actually know, then give two possible explanations. Select might when several explanations remain open. Use a passive if the process matters more than the person responsible. Finally state the required next action, making sure the reader can distinguish your inference from the obligation.",
        "examples": [
          "The package might have been delivered to reception.",
          "The tracking number must be checked before we request a replacement."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which statement gives a possible past explanation without claiming certainty?",
        "options": [
          "The parcel must deliver now.",
          "The parcel cannot delivery yesterday.",
          "The parcel might be deliver.",
          "The parcel might have been delivered next door."
        ],
        "answer": 3,
        "explanation": "Might have been delivered combines a possible past deduction with a passive action."
      },
      {
        "prompt": "You do not have to attend means:",
        "options": [
          "Attendance is optional.",
          "Attendance is forbidden.",
          "Attendance happened yesterday.",
          "Attendance is compulsory."
        ],
        "answer": 0,
        "explanation": "Do not have to removes the requirement; must not would express a prohibition."
      },
      {
        "prompt": "Choose the correct passive requirement.",
        "options": [
          "All visitors must to register.",
          "All visitors must be registered at reception.",
          "All visitors must been registered.",
          "All visitors must being registered."
        ],
        "answer": 1,
        "explanation": "A modal passive uses must plus be plus the past participle registered."
      }
    ]
  },
  {
    "id": "b2-gerunds-infinitives-meaning",
    "level": "b2",
    "skill": "grammar",
    "title": "Choose verb patterns by meaning",
    "description": "Use gerunds and infinitives accurately, including stop, remember, and try.",
    "minutes": 22,
    "content": [
      {
        "heading": "Learn a verb with its pattern",
        "text": "Some verbs are followed by an ing form, while others take to plus the base verb. Enjoy, avoid, and suggest commonly take ing; decide, hope, and agree commonly take a to-infinitive. After a preposition, an ing form is usual. Record the pattern with an example instead of learning a verb as an isolated translation.",
        "examples": [
          "I enjoy working with small groups.",
          "We agreed to meet at noon.",
          "She is interested in learning more."
        ]
      },
      {
        "heading": "Notice a change in meaning",
        "text": "A few verbs take both patterns with different meanings. Stop doing means end that activity; stop to do means pause another activity for a purpose. Remember doing recalls an earlier event; remember to do means keep a necessary future action in mind. Try doing suggests experimenting with a method; try to do emphasizes an attempt.",
        "examples": [
          "He stopped smoking.",
          "We stopped to buy water.",
          "I remember locking the door. / Remember to lock the door."
        ]
      },
      {
        "heading": "Edit according to intention",
        "text": "Write a short message explaining a study problem and proposing a solution. Decide whether each action is a memory, a future duty, an experiment, or an attempted task. Check the verb pattern against that meaning. A grammatically possible alternative may communicate a different event, so the surrounding context is essential to your decision.",
        "examples": [
          "Try reading the instructions aloud if the task feels unclear.",
          "I tried to open the file, but it was damaged."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "You paused your journey because you wanted coffee. Which sentence fits?",
        "options": [
          "We stopped drinking coffee.",
          "We stopped to buy coffee.",
          "We stopped buy coffee.",
          "We avoided to buy coffee."
        ],
        "answer": 1,
        "explanation": "Stopped to buy describes pausing one activity in order to buy coffee."
      },
      {
        "prompt": "Choose the correct pattern after the preposition.",
        "options": [
          "She is interested in study abroad.",
          "She is interested in to study abroad.",
          "She is interested in studying abroad.",
          "She is interested in studied abroad."
        ],
        "answer": 2,
        "explanation": "After in, the ing form studying is the natural verb pattern."
      },
      {
        "prompt": "A friend cannot concentrate. Which suggestion presents an experiment?",
        "options": [
          "Try studying in a quieter room.",
          "Remember studying yesterday.",
          "Avoid to study tonight.",
          "Agree studying in a room."
        ],
        "answer": 0,
        "explanation": "Try plus ing suggests testing a method to see whether it helps."
      }
    ]
  },
  {
    "id": "b2-idioms-with-context",
    "level": "b2",
    "skill": "vocabulary",
    "title": "Understand useful idioms in context",
    "description": "Interpret expressions and choose when plain wording is clearer.",
    "minutes": 22,
    "content": [
      {
        "heading": "Use the surrounding situation",
        "text": "An idiom has a meaning that may not follow from each individual word. If a plan is up in the air, it is undecided; if you are on the same page, you share an understanding. Look at the action and consequence around the expression before choosing a literal interpretation. Learn idioms in ordinary dialogue, not as a long disconnected list.",
        "examples": [
          "The date is still up in the air because the venue is unavailable.",
          "Let us confirm the budget so we are on the same page."
        ]
      },
      {
        "heading": "Notice attitude and register",
        "text": "The ball is in your court means the next decision or action belongs to you. A learning curve describes the process of gaining skill, often with challenges. Such expressions suit many conversations, but a formal instruction may be clearer with direct wording. An idiom is useful when the listener knows it and its tone matches the relationship.",
        "examples": [
          "I have sent the options; the ball is in your court.",
          "There was a learning curve when we changed software."
        ]
      },
      {
        "heading": "Paraphrase and select",
        "text": "Write a short exchange about a group project using two idioms. Then rewrite the exchange for an international audience using literal wording. Compare whether the action and responsibility remain equally clear. Keep the expression only when it helps the reader or listener understand your message; advanced vocabulary control includes choosing a simple alternative when appropriate.",
        "examples": [
          "Up in the air → not yet decided",
          "On the same page → sharing the same understanding"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "The venue has not confirmed, so our plans are up in the air. The plans are…",
        "options": [
          "physically flying.",
          "completely cancelled.",
          "not yet settled.",
          "already completed."
        ],
        "answer": 2,
        "explanation": "The unconfirmed venue supports the idiomatic meaning undecided."
      },
      {
        "prompt": "The ball is in your court most directly means…",
        "options": [
          "you must play a sport.",
          "the next action or decision is yours.",
          "everyone has already agreed.",
          "your decision is no longer relevant."
        ],
        "answer": 1,
        "explanation": "The expression passes responsibility for the next move to the listener."
      },
      {
        "prompt": "Which version gives the clearest direct instruction?",
        "options": [
          "Please confirm your choice by Friday.",
          "The ball might bounce in several courts.",
          "Let us turn every page in the air.",
          "We are learning a ball of pages."
        ],
        "answer": 0,
        "explanation": "The sentence identifies the required action and deadline without requiring idiom knowledge."
      }
    ]
  },
  {
    "id": "b2-word-building-precision",
    "level": "b2",
    "skill": "vocabulary",
    "title": "Build accurate words with prefixes and suffixes",
    "description": "Control negative prefixes, noun forms, and adjective choices.",
    "minutes": 22,
    "content": [
      {
        "heading": "Negative prefixes are selective",
        "text": "Prefixes such as un, in, im, ir, and dis can add negative meaning, but they are not interchangeable. We say unreliable, inaccurate, impossible, irregular, and dishonest. Learn the whole word and its context. A prefix can also change more than simple negation: disinterested means impartial, while uninterested means lacking interest.",
        "examples": [
          "The timetable was unreliable.",
          "An impartial judge should be disinterested in the outcome."
        ]
      },
      {
        "heading": "Check the required word class",
        "text": "A sentence may need reliability rather than reliable, or accuracy rather than accurate. The words around a gap provide evidence: an adjective can describe a noun, a noun can follow a possessive, and an adverb can modify a verb. Spelling changes are not always predictable, so consult your notes rather than inventing a form from a familiar pattern.",
        "examples": [
          "We questioned the reliability of the figures.",
          "Please record the figures accurately."
        ]
      },
      {
        "heading": "Revise a short evaluation",
        "text": "Describe a service using two positive features and one limitation. Underline each evaluation word and identify whether it is a noun, adjective, or adverb. Replace an absolute criticism with a precise description if the evidence supports only one problem. This exercise combines word formation with fair judgement, helping your vocabulary communicate the right strength of meaning.",
        "examples": [
          "The instructions were clear, but delivery was unreliable.",
          "The report contains an inaccurate total, rather than being entirely useless."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the established negative form of possible.",
        "options": [
          "Unpossible",
          "Dispossible",
          "Irpossible",
          "Impossible"
        ],
        "answer": 3,
        "explanation": "Impossible is the established English form; negative prefixes cannot be freely exchanged."
      },
      {
        "prompt": "The ___ of the timetable matters to commuters.",
        "options": [
          "reliable",
          "reliability",
          "reliably",
          "rely"
        ],
        "answer": 1,
        "explanation": "The noun reliability is needed as the subject after the."
      },
      {
        "prompt": "A reviewer has no personal stake in the decision and judges fairly. They are…",
        "options": [
          "disinterested.",
          "uninterested in reading anything.",
          "inaccurately.",
          "impossibility."
        ],
        "answer": 0,
        "explanation": "Disinterested can mean impartial, which differs from uninterested, lacking interest."
      }
    ]
  },
  {
    "id": "b2-precise-verb-noun-pairs",
    "level": "b2",
    "skill": "vocabulary",
    "title": "Choose precise academic word combinations",
    "description": "Use address, pose, draw, and reach with the right nouns.",
    "minutes": 22,
    "content": [
      {
        "heading": "Pair an action with its object",
        "text": "Academic and professional English often uses stable verb–noun combinations. Address a problem means deal with it; pose a threat means create a danger; draw a conclusion means form a judgement from information. The verb carries a relationship, not just a general action. Learn a short context so you can choose the phrase with confidence.",
        "examples": [
          "The new route addresses a transport problem.",
          "Poor drainage poses a threat to the building."
        ]
      },
      {
        "heading": "Distinguish related actions",
        "text": "Reach an agreement describes the result of a negotiation; raise a concern introduces a worry; conduct a survey describes carrying out data collection. These expressions are related to communication, but they are not interchangeable. Choose the noun and verb together, then check any following preposition. Draw a conclusion from evidence, and reach an agreement with another party.",
        "examples": [
          "The residents raised a concern about noise.",
          "The teams reached an agreement on the schedule."
        ]
      },
      {
        "heading": "Write a careful recommendation",
        "text": "Write five sentences about improving a library or workplace. State a problem, mention a concern, explain what information to collect, and propose a response. Use at least four combinations from this lesson. If you draw a conclusion, identify the supporting information and keep your claim within its limits rather than making your formal wording stronger than the evidence.",
        "examples": [
          "We should conduct a survey before changing the hours.",
          "The results may help us address the main access problem."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which combination means deal with an issue?",
        "options": [
          "Pose an agreement",
          "Draw a threat",
          "Address a problem",
          "Conduct a conclusion"
        ],
        "answer": 2,
        "explanation": "Address a problem means consider and take action on that problem."
      },
      {
        "prompt": "The negotiators finally ___ an agreement on delivery dates.",
        "options": [
          "posed",
          "conducted",
          "drew",
          "reached"
        ],
        "answer": 3,
        "explanation": "Reach an agreement is the natural combination for arriving at a shared decision."
      },
      {
        "prompt": "Which sentence uses an accurate combination and preposition?",
        "options": [
          "We drew a conclusion from the survey responses.",
          "We conducted a conclusion at the evidence.",
          "We addressed an agreement from the forms.",
          "We posed a survey with the conclusion."
        ],
        "answer": 0,
        "explanation": "Draw a conclusion from information is the conventional structure."
      }
    ]
  },
  {
    "id": "b2-reading-library-trial",
    "level": "b2",
    "skill": "reading",
    "title": "Evaluate a library trial report",
    "description": "Distinguish observed findings, staff explanations, and untested outcomes.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: longer library hours",
        "text": "During a six-week trial, Northbank Library opened until nine on Wednesdays instead of closing at six. Entry records showed an average of thirty-two visits during the additional hours. A voluntary online questionnaire attracted forty responses, most from people who had attended an evening session. Twenty-eight respondents said the later opening made it easier to study after work. Staff suggested that the quiet atmosphere might explain the popularity of the sessions, but the questionnaire did not ask about noise. Electricity costs rose during the trial; staffing costs were unchanged because existing shifts were rearranged. The report recommends a longer trial that includes an examination period and gathers views from people who did not use the service.",
        "examples": [
          "Records: thirty-two extra-hours visits on average",
          "Questionnaire: forty voluntary responses"
        ]
      },
      {
        "heading": "Keep sources of knowledge separate",
        "text": "The passage contains entry records, questionnaire responses, and a staff suggestion. These sources establish different things. Entry records count visits, not necessarily different individuals, while a questionnaire reports what respondents say. A staff explanation may be plausible without being tested. Mark each sentence with its source before forming an overall conclusion about the trial.",
        "examples": [
          "Observed cost change: electricity increased.",
          "Untested explanation: a quiet atmosphere attracted users."
        ]
      },
      {
        "heading": "Assess the sample and next step",
        "text": "A voluntary questionnaire mostly answered by users may miss the views of non-users. This does not erase the responses, but it limits how confidently they represent everyone in the area. Explain why an examination period and wider recruitment could improve the next trial. Preserve the difference between extending investigation and recommending permanent adoption immediately.",
        "examples": [
          "Most respondents had used an evening session.",
          "The report recommends further testing and broader feedback."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which claim was suggested but not tested by the questionnaire?",
        "options": [
          "The trial lasted six weeks.",
          "Electricity costs rose.",
          "The library stayed open until nine on Wednesdays.",
          "Quiet surroundings helped make the sessions popular."
        ],
        "answer": 3,
        "explanation": "Staff proposed the noise explanation, but the questionnaire did not ask about noise."
      },
      {
        "prompt": "Why should the questionnaire not automatically represent all local residents?",
        "options": [
          "It was voluntary and most respondents had used the evening service.",
          "The library counted no visits.",
          "Every respondent disliked the service.",
          "The questionnaire included only staff members."
        ],
        "answer": 0,
        "explanation": "Self-selected responses, mostly from users, may omit views held by non-users."
      },
      {
        "prompt": "Which recommendation matches the report?",
        "options": [
          "Make the change permanent immediately.",
          "Test for longer, including exams, and seek non-user views.",
          "Close every library after six.",
          "Replace all staff with a questionnaire."
        ],
        "answer": 1,
        "explanation": "The report proposes a longer trial with another period and a broader range of respondents."
      }
    ]
  },
  {
    "id": "b2-reading-competing-headlines",
    "level": "b2",
    "skill": "reading",
    "title": "Compare two accounts of the same study",
    "description": "Identify framing and preserve the scope of a research finding.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: two news accounts",
        "text": "A local study invited eighty office workers to attend a lunchtime walking group for four weeks. Fifty-eight completed both the initial and final questionnaires. Those participants reported feeling more alert after lunch at the end of the programme. The study had no comparison group, and it did not measure job performance. One newsletter headline read, “Lunch Walks Make Workers More Productive.” Another read, “Participants Report Greater Alertness After Walking Programme.” The first article included a manager’s opinion that walking might help teamwork, while the second emphasized the missing comparison group. Neither article reported whether participants continued walking after the programme ended. The researchers described their findings as a reason for further investigation, rather than proof of a workplace effect.",
        "examples": [
          "Completed questionnaires: fifty-eight",
          "Measured outcome: self-reported alertness"
        ]
      },
      {
        "heading": "Compare wording with measurement",
        "text": "Productivity and alertness are related ideas, but they are not the same measurement. A headline can move from a reported feeling to an objective effect without providing the needed evidence. Compare each headline with the study description. Underline any stronger causal verb or broader population claim, then decide whether the actual design supports it.",
        "examples": [
          "Reported feeling more alert does not establish higher productivity.",
          "No comparison group limits causal interpretation."
        ]
      },
      {
        "heading": "Avoid filling the information gaps",
        "text": "The passage does not explain every missing response or describe later habits. You can identify incomplete follow-up without guessing why people left. Write a two-sentence summary that names the participants, reported outcome, and main design limitation. Keep a manager’s suggestion separate from the researchers’ measured result so your summary retains the source of each idea.",
        "examples": [
          "The long-term continuation of walking is not reported.",
          "Further investigation is the researchers’ conclusion."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which headline stays closest to the measured result?",
        "options": [
          "Walking Guarantees Better Teamwork",
          "Lunch Walks Double Office Output",
          "Participants Report Greater Alertness After Walking Programme",
          "All Workers Need Daily Walking Groups"
        ],
        "answer": 2,
        "explanation": "It identifies the participants and self-reported alertness without claiming productivity was measured."
      },
      {
        "prompt": "What does the lack of a comparison group mainly limit?",
        "options": [
          "The ability to count the questionnaires",
          "The ability to attribute the change specifically to the programme",
          "The knowledge that the programme lasted four weeks",
          "The ability to state that eighty workers were invited"
        ],
        "answer": 1,
        "explanation": "Without a comparison group, other explanations for the reported change remain open."
      },
      {
        "prompt": "Which detail is not established by the passage?",
        "options": [
          "Fifty-eight people completed both questionnaires.",
          "Job performance was not measured.",
          "A manager offered an opinion about teamwork.",
          "Participants continued walking for a year afterward."
        ],
        "answer": 3,
        "explanation": "The passage explicitly says continuation after the programme was not reported."
      }
    ]
  },
  {
    "id": "b2-reading-policy-conditions",
    "level": "b2",
    "skill": "reading",
    "title": "Read conditions in a policy memo",
    "description": "Interpret exceptions, obligations, and permission precisely.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: room-booking memo",
        "text": "From 1 September, community groups may book the East Room without a hire fee for events open to the public. Private celebrations remain subject to the usual fee. Free bookings are limited to two per group each month and must end by eight in the evening. A refundable deposit is required for every booking, including free ones. It will be returned within ten working days if the room is left clean and no equipment is damaged. Applications normally require seven days’ notice. The centre manager may accept shorter notice when the room would otherwise remain unused, but this exception does not remove the deposit requirement. Groups must cancel at least twenty-four hours in advance to receive their deposit back, unless the centre itself cancels the event.",
        "examples": [
          "Hire fee and deposit are separate.",
          "Short notice requires a manager’s exception."
        ]
      },
      {
        "heading": "Separate permission from automatic entitlement",
        "text": "May book and may accept describe permission or discretion. They do not promise that every request will succeed. Identify which requirements remain even when an exception applies. A free hire fee does not mean no money is required initially, because the refundable deposit has a different purpose and a separate set of conditions.",
        "examples": [
          "Every booking requires a deposit.",
          "Short notice does not waive the deposit."
        ]
      },
      {
        "heading": "Apply rules to realistic cases",
        "text": "Create three cases: a public meeting, a private birthday party, and a late cancellation. For each one, check the fee, notice, end time, and refund conditions. Quote the exact clause supporting your decision. This method helps you interpret practical documents without letting a familiar word such as free override the rest of the policy.",
        "examples": [
          "Public meeting: potentially fee-free, with a deposit",
          "Private celebration: usual hire fee applies"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "A public event receives a free booking. What payment is still required initially?",
        "options": [
          "The usual hire fee",
          "A refundable deposit",
          "No payment under any circumstances",
          "A compulsory equipment purchase"
        ],
        "answer": 1,
        "explanation": "The memo requires a deposit for every booking, including free ones."
      },
      {
        "prompt": "What can the manager do if the room would otherwise be unused?",
        "options": [
          "Accept an application with less than seven days’ notice",
          "Remove every group’s monthly limit permanently",
          "Guarantee all cancellation refunds",
          "Allow private celebrations without the usual fee"
        ],
        "answer": 0,
        "explanation": "The stated discretion concerns the normal seven-day notice period."
      },
      {
        "prompt": "A group cancels ten hours before its event, and the centre has not cancelled. Under the stated rule…",
        "options": [
          "the hire fee automatically doubles.",
          "the deposit is returned because every deposit is refundable.",
          "the group has missed the notice required for a deposit refund.",
          "the event changes into a public meeting."
        ],
        "answer": 2,
        "explanation": "The rule requires at least twenty-four hours’ cancellation notice, unless the centre cancels."
      }
    ]
  },
  {
    "id": "b2-listen-transport-consultation",
    "level": "b2",
    "skill": "listening",
    "title": "Listen: understand a transport consultation",
    "description": "Separate feedback, design changes, and unresolved questions.",
    "minutes": 22,
    "listeningText": "Thank you for coming to the cycle-route consultation. The original proposal removed twelve roadside parking spaces along Market Road. After shop owners raised concerns about deliveries, the revised design kept four of those spaces as loading bays before ten in the morning. They would become short-stay parking later in the day. The protected cycle lane itself remains in the proposal, although its junction layout has been adjusted. Some residents have asked whether the scheme will reduce traffic on nearby streets. We cannot answer that from the consultation responses; separate traffic modelling is still underway. Tonight we are asking for comments on the revised layout, not a final vote on construction. The council will publish the modelling results before making its decision. Written comments can be submitted until the end of next Friday.",
    "content": [
      {
        "heading": "Follow proposal and revision",
        "text": "Listen for the original design, the concern raised, and the revised response. A change to one detail does not imply cancellation of the whole project. Make notes in two columns so you can compare what changed with what remains. Quantities and time conditions should stay attached to the feature they describe.",
        "examples": [
          "Original: twelve parking spaces removed",
          "Revision: four spaces retained for time-limited uses"
        ]
      },
      {
        "heading": "Identify the source of uncertainty",
        "text": "Consultation responses describe people’s views, while traffic modelling addresses a different question. The speaker explicitly separates these sources. Listen for cannot answer and still underway to identify the unresolved issue. Do not assume that support or opposition establishes a traffic effect; the speaker says further information is needed before that conclusion.",
        "examples": [
          "Unresolved: effect on nearby streets",
          "Pending evidence: separate traffic modelling"
        ]
      },
      {
        "heading": "Summarize the requested action",
        "text": "At the end of a formal update, listen for what the audience is being asked to do now. This meeting seeks comments rather than a construction vote. State the submission deadline and the promised information before a decision. Then explain how that sequencing limits what anyone can claim has already been approved.",
        "examples": [
          "Now: comment on the revised layout",
          "Before decision: publish modelling results"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How would the four retained spaces be used before ten in the morning?",
        "options": [
          "As permanent bicycle storage",
          "As unrestricted private parking",
          "As loading bays",
          "As a pedestrian playground"
        ],
        "answer": 2,
        "explanation": "The revised design reserves the four spaces for loading before ten."
      },
      {
        "prompt": "Which issue remains unresolved in the recording?",
        "options": [
          "Whether the original proposal mentioned parking",
          "Whether comments can be written",
          "Whether shop owners raised delivery concerns",
          "Whether the scheme reduces traffic on nearby streets"
        ],
        "answer": 3,
        "explanation": "Traffic modelling on that question is still underway."
      },
      {
        "prompt": "What is tonight’s main purpose?",
        "options": [
          "To gather comments on the revised layout",
          "To hold a final construction vote",
          "To announce completed building works",
          "To cancel the cycle lane immediately"
        ],
        "answer": 0,
        "explanation": "The speaker explicitly contrasts comments on the revised layout with a final construction vote."
      }
    ]
  },
  {
    "id": "b2-listen-remote-study",
    "level": "b2",
    "skill": "listening",
    "title": "Listen: interpret a small study cautiously",
    "description": "Distinguish a measured association from a wider workplace claim.",
    "minutes": 22,
    "listeningText": "Our team surveyed sixty employees who had started working partly from home. Forty-two said their concentration had improved, especially on tasks requiring uninterrupted reading. However, the survey asked employees to compare their current experience with their memory of the previous year; it did not include a separate office-only group. We also found that newer staff were more likely to report difficulty getting informal advice. That does not mean remote working caused the difficulty, since team arrangements differed considerably. The findings suggest two practical steps: protect quiet work time, wherever staff are based, and create regular opportunities for new colleagues to ask questions. We are proposing a three-month trial of these measures, followed by interviews. We are not recommending that every employee work remotely for the same number of days.",
    "content": [
      {
        "heading": "Distinguish findings from explanations",
        "text": "On the first listen, note the topic and the main reported patterns. On the next listen, identify who supplied the information and how comparisons were made. Self-reported change based on memory differs from a controlled measurement. Write reported beside concentration so you do not silently turn a perception into an objective test score.",
        "examples": [
          "Forty-two reported improved concentration.",
          "Comparison relied on memory of the previous year."
        ]
      },
      {
        "heading": "Listen for causal caution",
        "text": "The phrase does not mean marks a boundary on the conclusion. Newer staff reported a difficulty, but differences between teams leave other explanations open. Capture the limitation along with the finding, rather than recording only the more striking result. This helps your later summary preserve how confident the speaker is entitled to be.",
        "examples": [
          "Association: newer staff and difficulty getting informal advice",
          "Caution: team arrangements varied"
        ]
      },
      {
        "heading": "Recover the actual recommendation",
        "text": "A recommendation may address a useful need without proving a single cause. Here the proposed steps concern quiet work and access to advice, followed by a trial and interviews. Summarize those actions separately from any policy the speaker explicitly declines to recommend. Check the duration and follow-up method against a final listen.",
        "examples": [
          "Trial duration: three months",
          "Follow-up: interviews after testing the measures"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "How was the change in concentration assessed?",
        "options": [
          "By a controlled reading exam for every worker",
          "By employees comparing current experience with memories of the previous year",
          "By tracking every office-only employee for ten years",
          "By a computer recording all interruptions"
        ],
        "answer": 1,
        "explanation": "The survey used retrospective self-reports and had no separate office-only comparison group."
      },
      {
        "prompt": "Why does the speaker avoid claiming remote work caused the advice difficulty?",
        "options": [
          "No newer employees were surveyed.",
          "All teams worked identically.",
          "Team arrangements differed considerably.",
          "Informal advice was never mentioned."
        ],
        "answer": 2,
        "explanation": "The variation between teams leaves alternative explanations for the reported difficulty."
      },
      {
        "prompt": "Which proposal is actually made?",
        "options": [
          "Trial quiet-work protection and advice opportunities for three months",
          "Require identical remote days for everyone immediately",
          "Abolish all interviews",
          "Remove opportunities for new colleagues to ask questions"
        ],
        "answer": 0,
        "explanation": "The two practical measures are to be tested for three months and followed by interviews."
      }
    ]
  },
  {
    "id": "b2-listen-project-tradeoff",
    "level": "b2",
    "skill": "listening",
    "title": "Listen: follow a negotiated compromise",
    "description": "Understand constraints, conditional agreement, and assigned next steps.",
    "minutes": 22,
    "listeningText": "Maya: The exhibition panels can be printed by Friday if we approve the files this afternoon. I would prefer a complete set rather than opening with temporary signs. Leon: I agree about the visitor experience, but the final map has not been checked for accessible routes. Printing it now could mean replacing every panel next week. Maya: Could we approve the text panels today and hold the map separately? Leon: That would work if the printer can split the order without an extra setup charge. I will call them before lunch. Maya: Good. I will send the text files to our editor now, but I will wait for your confirmation before authorizing printing. Leon: And I will ask the access adviser to check the map tomorrow morning. We can announce the panel schedule once both checks are complete.",
    "content": [
      {
        "heading": "Identify each person’s priority",
        "text": "In a negotiation, agreement about the goal does not remove differences in timing or risk. Listen once to identify the shared objective, then assign each concern to its speaker. Maya values a complete visitor experience, while Leon raises a specific unresolved check. Record the reason rather than reducing the exchange to one person agrees and another disagrees.",
        "examples": [
          "Maya: complete panels for opening",
          "Leon: avoid printing an unchecked accessible-route map"
        ]
      },
      {
        "heading": "Track the condition on agreement",
        "text": "That would work if introduces conditional acceptance. The split order is a possible compromise only if an extra setup charge can be avoided. Distinguish exploring an option from authorizing the final action. A speaker can prepare files while still withholding approval, and the sequence matters when you explain what has actually been decided.",
        "examples": [
          "Possible compromise: text first, map later",
          "Condition: printer can split the order without an extra setup charge"
        ]
      },
      {
        "heading": "Map owners to next actions",
        "text": "Make a short table of person, action, and deadline. Check the pronouns against the previous turns so you assign each action correctly. Then summarize what must happen before a public announcement. This listening technique helps with meetings because the final responsibilities may be spread across several short responses rather than stated in one summary.",
        "examples": [
          "Leon: contact printer before lunch",
          "Maya: send text to the editor; wait before authorizing printing"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What risk does Leon identify?",
        "options": [
          "The text contains no words.",
          "The exhibition has already closed.",
          "The printer has cancelled every order.",
          "An unchecked map could require replacing panels later."
        ],
        "answer": 3,
        "explanation": "Leon warns that printing before the accessible-route check could lead to replacements."
      },
      {
        "prompt": "What condition would make the split order acceptable to Leon?",
        "options": [
          "The map is deleted permanently.",
          "There is no additional setup charge.",
          "Visitors stop using the map.",
          "Maya approves every file without review."
        ],
        "answer": 1,
        "explanation": "Leon says the compromise works if the printer can split the order without an extra setup charge."
      },
      {
        "prompt": "What will Maya do before authorizing printing?",
        "options": [
          "Ignore the editor",
          "Announce the schedule immediately",
          "Wait for Leon’s confirmation",
          "Replace the accessibility adviser"
        ],
        "answer": 2,
        "explanation": "Maya will send files for editing but wait for confirmation before authorizing the print order."
      }
    ]
  },
  {
    "id": "b2-writing-balanced-argument",
    "level": "b2",
    "skill": "writing",
    "title": "Develop a reasoned opinion essay",
    "description": "Answer a focused question and build an argument with a counterpoint.",
    "minutes": 26,
    "content": [
      {
        "heading": "Turn the prompt into a judgement",
        "text": "Practice prompt: “Should local councils spend more on public parks or indoor community centres?” Identify the choice and the scope before you write. Your position can favour one option while acknowledging conditions. Plan two reasons that actually compare the options. An essay becomes vague if it praises a benefit that both alternatives provide without explaining why one deserves priority.",
        "examples": [
          "Position: prioritize parks where indoor facilities already exist.",
          "Comparison: outdoor access versus reliable use in bad weather"
        ]
      },
      {
        "heading": "Develop and test your reasons",
        "text": "Build each body paragraph around a claim, explanation, relevant illustration, and connection to your judgement. Include a counterpoint where it challenges your reasoning meaningfully. Do not invent statistics or studies. An imagined example should be clearly hypothetical, and a genuine factual claim needs appropriate support. Explain why your preferred balance still makes sense after considering the strongest relevant objection.",
        "examples": [
          "A covered centre can serve groups during heavy rain.",
          "However, neighbourhoods without safe outdoor space may gain more from a park."
        ]
      },
      {
        "heading": "Write, then check task coverage",
        "text": "Write 220–260 words on the practice prompt. State your overall judgement, compare both options, develop two reasons, and address one objection. During revision, highlight the sentence in each paragraph that helps answer the exact spending question. Remove a paragraph that only repeats your position. Finish with a conclusion that follows from the reasoning rather than introducing a new major argument.",
        "examples": [
          "Ask: Why does this reason favour this spending priority?",
          "Conclude: The best priority depends on existing local provision."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which thesis gives a clear and qualified judgement?",
        "options": [
          "Parks and centres are things in towns.",
          "Everyone always agrees about every council.",
          "Councils should prioritize parks where safe outdoor space is scarce, while maintaining existing centres.",
          "This essay has many paragraphs about buildings."
        ],
        "answer": 2,
        "explanation": "The thesis states a spending preference and a condition that makes the judgement precise."
      },
      {
        "prompt": "What makes a counterpoint useful?",
        "options": [
          "It challenges a relevant reason and receives a considered response.",
          "It introduces an unrelated topic with no explanation.",
          "It proves all positions are identical.",
          "It replaces the writer’s answer entirely without discussion."
        ],
        "answer": 0,
        "explanation": "A relevant counterpoint tests the argument and helps explain why the final judgement remains justified."
      },
      {
        "prompt": "Which support is appropriate when you have no verified research?",
        "options": [
          "A precise invented statistic presented as official",
          "A clearly framed hypothetical example with an explanation",
          "A quotation invented for an unnamed expert",
          "A claim that every resident agrees"
        ],
        "answer": 1,
        "explanation": "A hypothetical example can illustrate reasoning without pretending to be research evidence."
      }
    ]
  },
  {
    "id": "b2-writing-complaint-escalation",
    "level": "b2",
    "skill": "writing",
    "title": "Escalate a complaint with a clear record",
    "description": "Organize a timeline, evidence, impact, and proportionate request.",
    "minutes": 26,
    "content": [
      {
        "heading": "Make the history easy to verify",
        "text": "An escalation explains an unresolved issue to someone who may not have seen the earlier correspondence. State the current problem and summarize key contacts in date order. Include the relevant reference numbers and attachments. Select details that explain why further action is needed; a full emotional account of every inconvenience can hide the decision the reader must make.",
        "examples": [
          "I reported the damaged cabinet on 3 June under case 812.",
          "On 7 June, your team confirmed that replacement parts had been requested."
        ]
      },
      {
        "heading": "Separate the record from interpretation",
        "text": "Describe observable events and distinguish them from your assumptions about motives. The part has not arrived is a checkable statement; nobody cares is an interpretation. Explain the practical impact and request a response by a reasonable date that fits the situation. Avoid asserting legal obligations or policy promises unless you have verified the source and its applicability.",
        "examples": [
          "The cabinet cannot be safely assembled with the damaged bracket.",
          "Please confirm a delivery date or propose another remedy by Friday."
        ]
      },
      {
        "heading": "Draft a professional escalation",
        "text": "Write 160–190 words about an unresolved repair after two contacts. Include a brief timeline, a specific impact, two relevant attachments, and one preferred next step with an alternative. Review whether a new case handler could understand the matter without searching for the main facts. Keep your closing courteous and make the requested response explicit rather than ending only with frustration.",
        "examples": [
          "Attached: the order confirmation and a photograph of the bracket.",
          "My preference is a repair; if parts are unavailable, please discuss a replacement."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence provides the most useful escalation record?",
        "options": [
          "Nobody has ever helped anybody.",
          "On 7 June, support confirmed replacement parts under case 812.",
          "This is bad, bad, bad.",
          "You should know every detail already."
        ],
        "answer": 1,
        "explanation": "The dated event and case reference can be checked and explain the complaint history."
      },
      {
        "prompt": "Which statement distinguishes an observable fact from a motive claim?",
        "options": [
          "The company clearly hates all customers.",
          "Everyone is deliberately ignoring me.",
          "The promised part has not arrived as of 14 June.",
          "The staff have no interest in any work."
        ],
        "answer": 2,
        "explanation": "The delivery status on a stated date is observable; the alternatives speculate about motives."
      },
      {
        "prompt": "Which closing best supports action?",
        "options": [
          "Please confirm a delivery date or propose an alternative remedy by Friday.",
          "I have nothing specific to request.",
          "This message ends with more anger.",
          "Forget the reference number and all dates."
        ],
        "answer": 0,
        "explanation": "The closing specifies the response needed and when it would be useful."
      }
    ]
  },
  {
    "id": "b2-writing-source-summary",
    "level": "b2",
    "skill": "writing",
    "title": "Write a precise source-based summary",
    "description": "Preserve attribution, uncertainty, and contrasting findings.",
    "minutes": 26,
    "content": [
      {
        "heading": "Read the source for structure",
        "text": "Practice source: “A neighbourhood survey received 150 responses about a new bus lane. Ninety respondents supported it, mainly because they expected more reliable journey times. Opponents most often mentioned the loss of parking. The survey was advertised through the council website, so residents without regular internet access may be underrepresented. No travel-time measurements were collected. The report recommends combining the feedback with traffic data before making a final decision.” Identify the reported preference, the objection, the sampling limitation, and the recommended next step.",
        "examples": [
          "Reported support: ninety of 150 respondents",
          "No direct journey-time measurements collected"
        ]
      },
      {
        "heading": "Attribute and preserve uncertainty",
        "text": "Use phrases such as the report states and respondents expected to show whose position you are summarizing. An expected improvement is not a measured improvement. Keep may when the source indicates uncertainty, and avoid turning a possible sampling gap into proof that the entire survey is worthless. Your wording should neither exaggerate the result nor dismiss it beyond the source.",
        "examples": [
          "Respondents expected more reliable journeys.",
          "Residents without regular internet access may be underrepresented."
        ]
      },
      {
        "heading": "Produce and audit a compact summary",
        "text": "Write 70–90 words summarizing the practice source for a local newsletter. Include support, the main objection, the evidence limitation, and the next step. Then label each sentence as a source finding, a source limitation, or a recommendation. Remove your own unsupported opinion. Check the denominator whenever you use a proportion: ninety supporters out of 150 respondents does not mean ninety percent.",
        "examples": [
          "Sixty percent of respondents supported the lane.",
          "The report recommends adding traffic data before a decision."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence preserves the source’s distinction between expectation and measurement?",
        "options": [
          "The bus lane definitely reduced journey times.",
          "Respondents expected more reliable journeys; journey times were not measured.",
          "Traffic data proved every objection false.",
          "All residents reported faster journeys."
        ],
        "answer": 1,
        "explanation": "It reports the expectation while explicitly retaining the absence of direct measurements."
      },
      {
        "prompt": "Ninety supporters out of 150 respondents equals…",
        "options": [
          "90% of all residents.",
          "150% of respondents.",
          "60% of respondents.",
          "15% of all bus passengers."
        ],
        "answer": 2,
        "explanation": "90 divided by 150 is 0.6, or 60%; the group is respondents, not all residents."
      },
      {
        "prompt": "Which summary conclusion matches the report?",
        "options": [
          "The bus lane must be rejected immediately.",
          "The survey alone proves the lane works.",
          "All online surveys are worthless.",
          "Feedback should be combined with traffic data before a final decision."
        ],
        "answer": 3,
        "explanation": "The source recommends combining opinion feedback with traffic measurements before deciding."
      }
    ]
  },
  {
    "id": "b2-speaking-clear-presentation",
    "level": "b2",
    "skill": "speaking",
    "title": "Present a proposal in two minutes",
    "description": "Organize a claim, support, limitation, and audience question.",
    "minutes": 22,
    "content": [
      {
        "heading": "Give the listener a route",
        "text": "A short presentation needs a clear purpose and a manageable structure. Open with the problem and your proposed response, then tell the audience which two points you will explain. Signposts help when they reveal actual relationships between ideas. Avoid spending half your available time announcing a long agenda instead of developing the proposal itself.",
        "examples": [
          "I propose a weekly repair session for residents.",
          "I will explain the need, then outline a small trial."
        ]
      },
      {
        "heading": "Support and qualify the proposal",
        "text": "Explain how your idea would address the problem, using a specific illustration or verified evidence. Acknowledge the most important practical limitation and show how a trial could test it. Do not invent statistics to make the presentation sound authoritative. A clear conditional statement is often more useful than an unsupported promise that the proposal will solve every difficulty.",
        "examples": [
          "A monthly trial would show whether enough volunteers are available.",
          "If demand exceeds capacity, bookings could limit waiting."
        ]
      },
      {
        "heading": "Practise delivery and questions",
        "text": "Prepare a two-minute proposal for a study club, repair session, or community event. Use brief notes with one main idea per line. Mark pauses after the problem, the supporting reason, and the final recommendation. Finish with a direct question inviting the kind of feedback you need, then practise answering a concern by acknowledging it and explaining a relevant adjustment.",
        "examples": [
          "Which evening would make this accessible to the most residents?",
          "That capacity concern is useful; we could begin with ten bookings."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which opening most clearly states a purpose?",
        "options": [
          "There are many things and this is a presentation.",
          "I propose a four-week trial of a community study club.",
          "My slides contain several colours.",
          "Before anything, here are twenty unrelated definitions."
        ],
        "answer": 1,
        "explanation": "The opening names a concrete proposal and a scope for testing it."
      },
      {
        "prompt": "Which response handles a concern constructively?",
        "options": [
          "Every concern is wrong by definition.",
          "There can never be any limitation.",
          "That concern is useful; a booking limit could help us test capacity.",
          "I will repeat my title instead of answering."
        ],
        "answer": 2,
        "explanation": "It acknowledges the relevant concern and offers a specific way to address it."
      },
      {
        "prompt": "What should brief presentation notes mainly contain?",
        "options": [
          "An entire essay to read without looking up",
          "Only unfamiliar idioms",
          "Every possible fact about the topic",
          "Main ideas and cues that support the structure"
        ],
        "answer": 3,
        "explanation": "Brief idea cues help you maintain a logical route while speaking to the audience."
      }
    ]
  },
  {
    "id": "b2-speaking-negotiate-tradeoffs",
    "level": "b2",
    "skill": "speaking",
    "title": "Negotiate a fair practical trade-off",
    "description": "Separate positions from needs and make conditional offers.",
    "minutes": 22,
    "content": [
      {
        "heading": "Find the need behind the position",
        "text": "A position is what someone initially asks for; an underlying need explains why it matters. A team asking for a Friday deadline may need time for review, while another asking for Wednesday may need to reserve equipment. Ask an open clarification question before defending your first proposal. Understanding the reason can reveal an option both sides had missed.",
        "examples": [
          "What needs to happen before your team can approve it?",
          "Is the main constraint the review time or the printing slot?"
        ]
      },
      {
        "heading": "Offer a conditional exchange",
        "text": "Use if, provided that, or as long as to connect a concession with a necessary condition. State what you can offer and what must happen in return. Check that a conditional offer is not being heard as unconditional agreement. Keep the action, owner, and timing explicit so the compromise can be evaluated rather than remaining a polite but vague intention.",
        "examples": [
          "We can send the draft on Wednesday if feedback arrives by Thursday noon.",
          "I can reduce the order provided that delivery remains on Monday."
        ]
      },
      {
        "heading": "Role-play and close clearly",
        "text": "Negotiate an event plan with a partner: one person needs a low cost, and the other needs a reliable indoor space. Identify the needs, exchange two options, and make one conditional offer. Finish with a short spoken summary of responsibilities and unresolved items. Invite a correction so both sides can distinguish a firm agreement from a detail still awaiting confirmation.",
        "examples": [
          "Agreed: use the smaller hall; I will check availability today.",
          "The price is still provisional until the venue confirms."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which question explores the reason behind a deadline request?",
        "options": [
          "Why are you always difficult?",
          "Can we ignore your team?",
          "What review steps must you complete before approval?",
          "Will you agree without any information?"
        ],
        "answer": 2,
        "explanation": "The question investigates the underlying process rather than attacking the stated position."
      },
      {
        "prompt": "We can deliver Friday provided that approval arrives Wednesday means…",
        "options": [
          "Friday delivery depends on Wednesday approval.",
          "Friday delivery is guaranteed regardless of approval.",
          "Wednesday approval is forbidden.",
          "No delivery is possible under any condition."
        ],
        "answer": 0,
        "explanation": "Provided that introduces the condition required for the offer to apply."
      },
      {
        "prompt": "What should a closing negotiation summary distinguish?",
        "options": [
          "Only the longest words used",
          "Personal preferences unrelated to the task",
          "The people who spoke fastest",
          "Agreed actions and details still awaiting confirmation"
        ],
        "answer": 3,
        "explanation": "A useful summary records commitments while keeping unresolved items visible."
      }
    ]
  },
  {
    "id": "b2-speaking-contrast-emphasis",
    "level": "b2",
    "skill": "speaking",
    "title": "Use emphasis to show the intended contrast",
    "description": "Control prominent words, thought groups, and careful clarification.",
    "minutes": 22,
    "content": [
      {
        "heading": "Move prominence to change the contrast",
        "text": "Sentence prominence can show which part of a message corrects an assumption. Compare I ordered the BLUE folder with I ORDERED the blue folder. The first contrasts colours; the second can contrast ordering with receiving or borrowing. Context is essential: prominence suggests the focus, while the surrounding exchange helps the listener interpret the exact contrast.",
        "examples": [
          "I said MONDAY, not Tuesday.",
          "MAYA sent the file, not Leon."
        ]
      },
      {
        "heading": "Group complex ideas for the listener",
        "text": "Divide a longer turn into thought groups, with each group carrying one useful step in the reasoning. Pause before a qualification or a contrasting point when that helps comprehension. Avoid treating every comma as an obligatory long silence. Test your delivery by asking a partner to summarize the main claim and the limitation after one listen.",
        "examples": [
          "The trial reduced waiting / but only during quieter mornings.",
          "If the room is available / we can move the workshop indoors."
        ]
      },
      {
        "heading": "Clarify without implying blame",
        "text": "Practise correcting a misunderstanding about a booking time, a project result, or a responsibility. Emphasize the corrected detail and state it plainly. A neutral phrase such as to clarify can reduce tension, but tone and the whole message matter. Record two versions and check whether the second is both clear and respectful rather than merely louder or more forceful.",
        "examples": [
          "To clarify, the figure refers to VISITS, not individual visitors.",
          "I meant the draft is ready for REVIEW, not publication."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "To correct Tuesday to Monday, which word should receive the key prominence?",
        "options": [
          "The word I only",
          "The word said only",
          "Every word equally",
          "Monday"
        ],
        "answer": 3,
        "explanation": "Prominence on Monday highlights the corrected day."
      },
      {
        "prompt": "The trial reduced waiting, but only during quieter mornings. Which summary preserves the limitation?",
        "options": [
          "Waiting fell in every situation.",
          "Waiting fell during quieter mornings; other periods are not established.",
          "The trial proved mornings are always quiet.",
          "Waiting was never measured in any form."
        ],
        "answer": 1,
        "explanation": "The summary retains the restricted time context rather than extending the result."
      },
      {
        "prompt": "Which clarification is precise and respectful?",
        "options": [
          "You clearly understand nothing at all.",
          "To clarify, the count refers to visits, not different visitors.",
          "I will shout the same unclear number.",
          "Everyone should guess what I meant."
        ],
        "answer": 1,
        "explanation": "The sentence corrects the specific distinction without assigning blame to the listener."
      }
    ]
  },
  {
    "id": "c1-grammar",
    "level": "c1",
    "skill": "grammar",
    "title": "Control emphasis & uncertainty",
    "description": "Use inversion, deduction, and cautious claims accurately.",
    "minutes": 18,
    "content": [
      {
        "heading": "Emphasize with controlled inversion",
        "text": "After a negative or restrictive expression at the beginning of a clause, formal English often inverts the auxiliary and subject. If there is no auxiliary, use do, does, or did. Inversion adds emphasis; using it too often can sound unnatural. Keep the meaning clear before choosing a more complex structure.",
        "examples": [
          "Rarely do we see such consistent results.",
          "Not until Friday did the team reach an agreement.",
          "Only after reviewing the data did she change her view."
        ]
      },
      {
        "heading": "Calibrate a deduction",
        "text": "Must have plus a past participle expresses a strong deduction about the past; might have expresses a possibility; can’t have expresses a deduction that something was impossible. These describe your reasoning, not certainty based on direct observation. In academic work, may, appears to, and is likely to can help match a claim to its evidence.",
        "examples": [
          "The lights were on; someone must have been inside.",
          "The message might have gone to the wrong address.",
          "The results appear to support the hypothesis."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Choose the correct inversion.",
        "options": [
          "Rarely we have seen such progress.",
          "Rarely have seen we such progress.",
          "Rarely have we seen such progress.",
          "Rarely we seen have such progress."
        ],
        "answer": 2,
        "explanation": "After initial rarely, put the auxiliary have before the subject we."
      },
      {
        "prompt": "Which sentence expresses a possible past explanation rather than a strong deduction?",
        "options": [
          "She certainly missed the train.",
          "I saw her miss the train.",
          "She might have missed the train.",
          "She must have missed the train."
        ],
        "answer": 2,
        "explanation": "Might have expresses possibility; must have expresses a strong deduction."
      },
      {
        "prompt": "A small preliminary study suggests a benefit. Which claim is best calibrated?",
        "options": [
          "There cannot be any other explanation.",
          "The findings suggest a possible benefit that warrants further study.",
          "The treatment always works for everyone.",
          "The study proves that no further research is needed."
        ],
        "answer": 1,
        "explanation": "A preliminary result supports a cautious claim rather than universal certainty."
      }
    ]
  },
  {
    "id": "c1-vocabulary",
    "level": "c1",
    "skill": "vocabulary",
    "title": "Express nuance without vagueness",
    "description": "Use academic collocations, hedging, and precise word choice.",
    "minutes": 15,
    "content": [
      {
        "heading": "Choose the exact relationship",
        "text": "Advanced vocabulary helps distinguish relationships. A correlation is an association between variables; it does not by itself establish causation. A feasible plan can be carried out in practice; an effective plan achieves its goal. Learn precise definitions alongside common combinations so your vocabulary strengthens the reasoning.",
        "examples": [
          "a strong correlation between two measures",
          "a feasible alternative to the current system",
          "an effective intervention that reduced waiting times"
        ]
      },
      {
        "heading": "Hedge with a purpose",
        "text": "A hedge limits the strength or scope of a claim. Use tends to for a general pattern, to some extent for a partial truth, and arguably for a defensible interpretation. Avoid piling up hedges until your meaning disappears. Select the phrase that represents the actual uncertainty.",
        "examples": [
          "The policy tends to benefit larger organizations.",
          "This is arguably the most practical option.",
          "The results are broadly consistent with earlier findings."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "A feasible proposal is one that…",
        "options": [
          "has already solved every problem.",
          "must be expensive.",
          "is guaranteed to be popular.",
          "can realistically be carried out."
        ],
        "answer": 3,
        "explanation": "Feasible means possible and practical to implement."
      },
      {
        "prompt": "A correlation between exercise and wellbeing establishes…",
        "options": [
          "that wellbeing cannot affect exercise.",
          "an association, without proving causation by itself.",
          "that no other variables exist.",
          "that exercise is the only cause of wellbeing."
        ],
        "answer": 1,
        "explanation": "Correlation describes an association; causal claims need additional evidence."
      },
      {
        "prompt": "Which sentence states a cautious general pattern clearly?",
        "options": [
          "The policy maybe could possibly perhaps do something.",
          "The policy always benefits every company.",
          "The policy has no meaning.",
          "The policy tends to benefit larger companies."
        ],
        "answer": 3,
        "explanation": "Tends to expresses a general pattern while allowing exceptions."
      }
    ]
  },
  {
    "id": "c1-reading",
    "level": "c1",
    "skill": "reading",
    "title": "Read between the policy lines",
    "description": "Identify assumptions, qualifications, and the limits of a claim.",
    "minutes": 17,
    "content": [
      {
        "heading": "Read a qualified recommendation",
        "text": "Read this analysis: “A subsidy for electric bicycles may reduce short car journeys, provided it reaches people who would otherwise drive. Purchases by existing cyclists could increase sales without reducing traffic. The programme should therefore be evaluated against changes in travel behaviour rather than sales alone. A rise in sales would be encouraging, but insufficient evidence of environmental benefit.” Notice the condition attached to the potential benefit.",
        "examples": [
          "Desired outcome: fewer short car journeys.",
          "Necessary condition in the argument: some purchasers would otherwise drive.",
          "Sales are an intermediate measure, not the final outcome."
        ]
      },
      {
        "heading": "Test the link in the reasoning",
        "text": "A writer may distinguish an indicator from the goal it is supposed to represent. Ask what would need to be true for the evidence to support the conclusion. Read conditional language carefully: may and provided do not promise an outcome. Summarize both the proposal and the limit in one sentence.",
        "examples": [
          "More bicycle sales do not automatically mean fewer car trips.",
          "Travel behaviour is the recommended evaluation measure.",
          "The writer supports evaluation rather than claiming certain success."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "According to the passage, why are sales alone an insufficient measure?",
        "options": [
          "No one wants an electric bicycle.",
          "Sales cannot be counted.",
          "All bicycles create more traffic.",
          "Buyers may already cycle instead of drive."
        ],
        "answer": 3,
        "explanation": "Purchases by existing cyclists could increase sales without replacing car trips."
      },
      {
        "prompt": "What does “provided it reaches…” introduce?",
        "options": [
          "An established result of the programme",
          "A completely unrelated fact",
          "A guarantee that all drivers will change",
          "A condition on the potential benefit"
        ],
        "answer": 3,
        "explanation": "Provided means on the condition that; the benefit depends on reaching the relevant users."
      },
      {
        "prompt": "Which summary best represents the writer’s stance?",
        "options": [
          "The subsidy should be judged only by sales.",
          "Electric bicycles cannot ever benefit a city.",
          "The subsidy may help, but evaluation must establish whether travel behaviour changes.",
          "The subsidy will certainly eliminate traffic."
        ],
        "answer": 2,
        "explanation": "This preserves both the possible benefit and the requirement for outcome-based evaluation."
      }
    ]
  },
  {
    "id": "c1-listening",
    "level": "c1",
    "skill": "listening",
    "title": "Listen: a lecture with a qualification",
    "description": "Take efficient notes and distinguish findings from interpretation.",
    "minutes": 17,
    "listeningText": "A common assumption is that taking more notes always leads to better learning. Yet the amount written may be less important than the processing involved. In our classroom study, students who summarized ideas in their own words performed better on conceptual questions than students who copied sentences. I should stress, however, that the groups did not differ on simple factual recall. Moreover, the study took place in a single introductory course. The findings are therefore promising, but we should be cautious about extending them to all subjects or age groups.",
    "content": [
      {
        "heading": "Build notes around relationships",
        "text": "For academic listening, record the main claim, evidence, qualification, and implication. Use abbreviations or arrows rather than trying to transcribe the lecture. In this extract, the speaker contrasts the quantity of notes with the depth of processing. Pay attention when the speaker says yet or however.",
        "examples": [
          "Assumption: more notes → better learning.",
          "Finding: own-word summaries → stronger conceptual answers.",
          "No difference: simple factual recall."
        ]
      },
      {
        "heading": "Keep the boundary of the finding",
        "text": "An observed difference on one kind of test is not a difference on every kind of test. A study in one course may not generalize to all learners. In IELTS-style listening practice, identify exactly what the speaker claims, not what you expect the lecture to say. Use the transcript only after a first independent listen.",
        "examples": [
          "Conceptual understanding and factual recall are different outcomes.",
          "Single course = a limit on generalization.",
          "Promising does not mean conclusive."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What did own-word summaries improve in the study?",
        "options": [
          "Performance on conceptual questions",
          "Only handwriting speed",
          "Simple factual recall only",
          "Every learning outcome equally"
        ],
        "answer": 0,
        "explanation": "The reported advantage was on conceptual questions."
      },
      {
        "prompt": "What did the speaker say about simple factual recall?",
        "options": [
          "The groups did not differ.",
          "Every student failed.",
          "It was not tested.",
          "Copying was much better."
        ],
        "answer": 0,
        "explanation": "The qualification explicitly says there was no difference on factual recall."
      },
      {
        "prompt": "Why should the findings be generalized cautiously?",
        "options": [
          "The results were already disproved.",
          "Conceptual questions never matter.",
          "The study was conducted in a single introductory course.",
          "Students were not allowed to take notes."
        ],
        "answer": 2,
        "explanation": "A study in one course does not establish the same effect across all subjects and age groups."
      }
    ]
  },
  {
    "id": "c1-writing",
    "level": "c1",
    "skill": "writing",
    "title": "IELTS Writing Task 2: a clear position",
    "description": "Respond fully, sustain an argument, and revise for clarity.",
    "minutes": 25,
    "content": [
      {
        "heading": "Analyze and plan before you draft",
        "text": "In IELTS Academic Writing Task 2, write at least 250 words and allow about 40 of the writing test’s 60 minutes. Read every part of the prompt. For “Discuss both views and give your opinion,” explain both positions and make your own judgement clear. A fixed paragraph count is less important than a complete, logically developed answer.",
        "examples": [
          "Prompt: Some favour university funding; others prefer vocational training. Discuss both views and give your opinion.",
          "Plan both views before deciding how to organize them.",
          "Position: Public funding should support both routes according to local needs."
        ]
      },
      {
        "heading": "Develop and qualify your reasoning",
        "text": "Support each main idea with an explanation and a relevant example, then relate it to the question. Consider a limitation when it improves the argument. Avoid unsupported sweeping claims and memorized introductions that could fit any topic. Review your response for task coverage, paragraph progression, precise vocabulary, grammar, and punctuation.",
        "examples": [
          "University research can benefit industries beyond the campus.",
          "Vocational programmes can address immediate shortages in skilled trades.",
          "The appropriate balance may vary with regional employment needs."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does “Discuss both views and give your opinion” require?",
        "options": [
          "Explain only the view you agree with.",
          "List examples without a conclusion.",
          "Explain both views and give your own clear judgement.",
          "Avoid expressing a personal position."
        ],
        "answer": 2,
        "explanation": "All three elements are part of the task: both views and your opinion."
      },
      {
        "prompt": "What is the minimum word requirement for IELTS Academic Writing Task 2?",
        "options": [
          "Exactly 500 words",
          "250 words",
          "150 words",
          "100 words"
        ],
        "answer": 1,
        "explanation": "Task 2 requires at least 250 words; about 40 minutes is the recommended allocation."
      },
      {
        "prompt": "Which claim is best suited to a careful academic argument?",
        "options": [
          "All countries need precisely the same funding policy.",
          "The balance of funding should reflect educational goals and local employment needs.",
          "University is useless for every student.",
          "Vocational training always solves unemployment."
        ],
        "answer": 1,
        "explanation": "The final claim is specific, qualified, and open to reasoned support."
      }
    ]
  },
  {
    "id": "c1-speaking",
    "level": "c1",
    "skill": "speaking",
    "title": "Speak with range & control",
    "description": "Develop a long turn and handle abstract follow-up questions.",
    "minutes": 18,
    "content": [
      {
        "heading": "Prepare a flexible long turn",
        "text": "For an IELTS-style long turn, make brief notes that help you cover the topic: context, key details, significance, and reflection. Speak from the notes instead of writing a script. A small specific event is often easier to develop than a grand but vague story. Use time references and linking phrases to guide the listener.",
        "examples": [
          "Topic: a person who taught you something useful.",
          "Context: my first week at a new job.",
          "Reflection: I learned that asking questions can prevent mistakes."
        ]
      },
      {
        "heading": "Think aloud with a clear direction",
        "text": "Abstract follow-up questions may ask about causes, social effects, or future change. Give a provisional view, develop it, and qualify it when needed. It is acceptable to take a brief thinking pause. Use complex language where it helps, while preserving clear rhythm, intelligible pronunciation, and a direct answer.",
        "examples": [
          "My initial view is that practical experience is essential.",
          "That said, some skills need a strong theoretical foundation.",
          "The balance probably depends on the profession."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which set of notes best supports a flexible long turn?",
        "options": [
          "A full essay to read word for word",
          "Context, key event, useful details, personal reflection",
          "Only five difficult idioms",
          "A list of unrelated topics"
        ],
        "answer": 1,
        "explanation": "Brief content notes support organization while allowing natural speech."
      },
      {
        "prompt": "How can you respond to an abstract follow-up question?",
        "options": [
          "Say a memorized introduction for every topic.",
          "Give a view, develop its reasoning, and acknowledge a relevant limit.",
          "Avoid any general ideas.",
          "Repeat your previous story regardless of the question."
        ],
        "answer": 1,
        "explanation": "This structure develops an answer while maintaining relevance and nuance."
      },
      {
        "prompt": "Which use of sophisticated language is most effective?",
        "options": [
          "Choosing precise expressions and structures that make your ideas easier to follow",
          "Using every complex structure in every sentence",
          "Using unfamiliar idioms even when the meaning is uncertain",
          "Speaking so quickly that details are unclear"
        ],
        "answer": 0,
        "explanation": "Range is useful when it supports accurate and intelligible communication."
      }
    ]
  },
  {
    "id": "c1-relative-precision",
    "level": "c1",
    "skill": "grammar",
    "title": "Relative clauses that control meaning",
    "description": "Distinguish identifying information from an added comment.",
    "minutes": 22,
    "content": [
      {
        "heading": "Identify or add a comment",
        "text": "A defining relative clause identifies which person or thing you mean. A non-defining clause adds information about an already identified referent and is set off by commas. The punctuation changes the claim: it can distinguish a selected group from a comment about the whole group.",
        "examples": [
          "Employees who work remotely need secure access.",
          "The employees, who work remotely, need secure access."
        ]
      },
      {
        "heading": "Choose the reference carefully",
        "text": "Use whose for possession, including possession by organizations. In formal writing, a preposition may come before which or whom. Do not use that after a comma in a non-defining relative clause. Which can also refer to a whole preceding proposition, so check what your reader will understand.",
        "examples": [
          "The charity, whose offices flooded, needs temporary space.",
          "The deadline moved, which surprised the team."
        ]
      },
      {
        "heading": "Apply and test the interpretation",
        "text": "Write two versions of a notice about researchers receiving a grant. In one version, identify only the researchers studying rivers; in the other, explain that all the researchers study rivers. Read each aloud with its pauses, then ask whether a reader could infer the existence of a second group.",
        "examples": [
          "Researchers who study rivers received funding.",
          "The researchers, who study rivers, received funding."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence identifies only the managers with budget responsibility?",
        "options": [
          "Managers who control budgets must attend.",
          "Managers, who control budgets, must attend.",
          "All managers must attend, regardless of responsibility.",
          "Managers must attend, which controls budgets."
        ],
        "answer": 0,
        "explanation": "Without commas, who control budgets restricts the group to the managers with that responsibility."
      },
      {
        "prompt": "Complete: The foundation, ___ director resigned, appointed an interim leader.",
        "options": [
          "which",
          "whose",
          "that",
          "whom"
        ],
        "answer": 1,
        "explanation": "Whose expresses the relationship between the foundation and its director."
      },
      {
        "prompt": "In “The deadline moved, which surprised the team,” what does which refer to?",
        "options": [
          "Only the noun team",
          "An unnamed person",
          "The fact that the deadline moved",
          "A particular kind of deadline"
        ],
        "answer": 2,
        "explanation": "Here which comments on the whole preceding event, rather than identifying a noun."
      }
    ]
  },
  {
    "id": "c1-reporting-stance",
    "level": "c1",
    "skill": "grammar",
    "title": "Report claims without endorsing them",
    "description": "Control attribution, reporting verbs, and cautious passive structures.",
    "minutes": 22,
    "content": [
      {
        "heading": "Separate a claim from your commitment",
        "text": "Reporting language tells a reader who holds a view and how strongly you endorse it. Say the author argues when presenting a reasoned position, suggests for a tentative interpretation, and demonstrates only when the supporting evidence justifies that strength. Reporting a statement does not automatically establish its truth.",
        "examples": [
          "The researcher suggests that access affects participation.",
          "The editorial argues for longer opening hours."
        ]
      },
      {
        "heading": "Place the reporting time correctly",
        "text": "Formal reporting passives include it is believed that and the subject is believed to. Use a perfect infinitive when the reported event precedes the reporting situation. Keep the original level of uncertainty: a report that someone may have left should not become a confident statement that they left.",
        "examples": [
          "The building is believed to have opened in 1910.",
          "It is reported that the team may withdraw."
        ]
      },
      {
        "heading": "Revise an overconfident summary",
        "text": "Take the claim “The campaign caused sales to rise” and imagine that your only source is an interview with the campaign manager. Attribute the interpretation, distinguish it from independently verified figures, and retain uncertainty. Compare the result with your original sentence and underline the words that protect the source boundary.",
        "examples": [
          "The manager attributes the rise in sales to the campaign.",
          "Sales rose, but the interview alone cannot establish the cause."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which reporting verb is most cautious for a possible interpretation?",
        "options": [
          "Proves conclusively",
          "Guarantees",
          "Settles beyond doubt",
          "Suggests"
        ],
        "answer": 3,
        "explanation": "Suggests presents an interpretation as tentative rather than as established proof."
      },
      {
        "prompt": "Choose the form showing that the opening happened before the current belief.",
        "options": [
          "The library is believed to have opened in 1910.",
          "The library is believed opening in 1910.",
          "The library believes to open in 1910.",
          "The library is believed to opening in 1910."
        ],
        "answer": 0,
        "explanation": "To have opened is a perfect infinitive placing the opening before the present reporting situation."
      },
      {
        "prompt": "A manager says advertising caused a rise. Which summary accurately attributes the claim?",
        "options": [
          "Advertising certainly caused the rise.",
          "The manager attributes the rise to advertising.",
          "The figures prove advertising was the only cause.",
          "Everyone agrees advertising caused the rise."
        ],
        "answer": 1,
        "explanation": "The answer identifies the source of the causal interpretation without endorsing it as independently established."
      }
    ]
  },
  {
    "id": "c1-participle-control",
    "level": "c1",
    "skill": "grammar",
    "title": "Use participle clauses safely",
    "description": "Compress ideas while keeping subjects and time relationships clear.",
    "minutes": 22,
    "content": [
      {
        "heading": "Keep the understood subject stable",
        "text": "An introductory participle clause usually shares its understood subject with the main clause. In “Walking home, I noticed the sign,” I was walking. If the main subject is a sign, the sentence may accidentally imply that the sign was walking. Rewrite the clause when the subject connection becomes unclear.",
        "examples": [
          "Walking home, I noticed the sign.",
          "As I walked home, the sign caught my attention."
        ]
      },
      {
        "heading": "Express sequence and voice",
        "text": "An ing clause often presents an accompanying action or reason. Having plus a past participle can make an earlier action explicit. A past participle can express a passive meaning. Compression is useful only when the logical relationship remains clear; a full clause may be better for a complex contrast or condition.",
        "examples": [
          "Having checked the figures, Jo submitted the report.",
          "Written for beginners, the guide avoids specialist terms."
        ]
      },
      {
        "heading": "Run a subject check",
        "text": "Revise “Having reviewed the contract, several errors became clear.” Ask who reviewed it, then make that person the subject or restore a full clause. Finally write a sentence about your own learning using having plus a past participle. Name the earlier action and the later result before you compress them.",
        "examples": [
          "Having reviewed the contract, we identified several errors.",
          "After we reviewed the contract, several errors became clear."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which introductory clause has a clear matching subject?",
        "options": [
          "Having checked the map, the route looked shorter.",
          "Walking to class, the rain started.",
          "Having checked the map, Leena chose the shorter route.",
          "Written by an expert, I enjoyed the guide."
        ],
        "answer": 2,
        "explanation": "Leena is both the person who checked the map and the person who chose the route."
      },
      {
        "prompt": "What does having checked emphasize in “Having checked the figures, Jo submitted the report”?",
        "options": [
          "The check will happen tomorrow.",
          "The report checked Jo.",
          "Submission and checking are always identical actions.",
          "The check occurred before submission."
        ],
        "answer": 3,
        "explanation": "Having plus past participle explicitly marks an action completed before the main event."
      },
      {
        "prompt": "Which revision fixes “Having reviewed the contract, several errors became clear”?",
        "options": [
          "Having reviewed the contract, we identified several errors.",
          "Having reviewed the contract, several errors were reviewing.",
          "Having reviewed the contract, the errors reviewed us.",
          "Having reviewing the contract, errors were clear."
        ],
        "answer": 0,
        "explanation": "Making we the main subject gives the participle clause a logical human reviewer."
      }
    ]
  },
  {
    "id": "c1-academic-verb-patterns",
    "level": "c1",
    "skill": "vocabulary",
    "title": "Academic verbs and their partners",
    "description": "Use argument verbs with the complements they naturally take.",
    "minutes": 22,
    "content": [
      {
        "heading": "Learn the grammatical partner",
        "text": "An advanced word is useful only when you can fit it into a sentence. Distinguish attribute something to a cause from result in an outcome and result from a cause. Treat the preposition as part of the expression. Reversing it can reverse the relationship you intend to describe.",
        "examples": [
          "The team attributed the delay to a missing permit.",
          "The missing permit resulted in a delay."
        ]
      },
      {
        "heading": "Distinguish argument functions",
        "text": "Challenge questions a claim; corroborate supplies supporting evidence; reconcile explains how apparently conflicting observations can fit together. These verbs describe different intellectual actions. Do not replace them mechanically with show. Choose a verb by asking what the evidence actually does in relation to an existing argument.",
        "examples": [
          "The second survey corroborates the earlier finding.",
          "The new model reconciles the two estimates."
        ]
      },
      {
        "heading": "Build a precise mini-summary",
        "text": "Write three sentences about an imagined study: one explaining an outcome, one describing supporting evidence, and one acknowledging a conflicting result. Circle each verb and its following preposition or clause. Replace a verb if it exaggerates the certainty of the evidence, then read the summary as a connected argument.",
        "examples": [
          "The authors attribute lower attendance to transport costs.",
          "A later interview study supports, but does not prove, that explanation."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Complete: The delay resulted ___ a missing permit.",
        "options": [
          "at",
          "from",
          "for",
          "by"
        ],
        "answer": 1,
        "explanation": "Result from introduces the cause; result in introduces the consequence."
      },
      {
        "prompt": "A new independent dataset supports an earlier finding. Which verb fits?",
        "options": [
          "Contradicts",
          "Evades",
          "Corroborates",
          "Withholds"
        ],
        "answer": 2,
        "explanation": "Corroborate means supply additional support for an existing statement or finding."
      },
      {
        "prompt": "What does it mean to reconcile two apparently conflicting observations?",
        "options": [
          "Delete one without explanation",
          "Prove both observations false automatically",
          "Repeat them in capital letters",
          "Explain how they can be compatible"
        ],
        "answer": 3,
        "explanation": "Reconciling observations accounts for their apparent conflict rather than merely ignoring one."
      }
    ]
  },
  {
    "id": "c1-idioms-and-audience",
    "level": "c1",
    "skill": "vocabulary",
    "title": "Idioms, literal meaning, and audience",
    "description": "Recognize common figurative language and choose when to paraphrase.",
    "minutes": 22,
    "content": [
      {
        "heading": "Understand the figurative image",
        "text": "An idiom has a conventional meaning that may not follow directly from its individual words. A stumbling block is an obstacle; on the fence means undecided; a long shot is an attempt with a low chance of success. Learn each expression through a situation and a complete example, rather than translating each word.",
        "examples": [
          "Funding remains the main stumbling block.",
          "I am on the fence about moving."
        ]
      },
      {
        "heading": "Match the audience and purpose",
        "text": "An idiom can make an informal conversation vivid, but unfamiliar imagery may obscure instructions for an international audience. Understand it when you hear it, and choose a plain equivalent when clarity matters. Register is contextual: neither a figurative expression nor its formal alternative is automatically superior.",
        "examples": [
          "Informal: Let us touch base on Tuesday.",
          "Clear scheduling: Let us discuss progress on Tuesday."
        ]
      },
      {
        "heading": "Practise a two-version message",
        "text": "Write a friendly update using two familiar idioms, then rewrite it for a new colleague who is learning English. Preserve the action, uncertainty, and timing. Check that your plain version does not accidentally turn a low probability into an impossibility, or an undecided opinion into a rejection.",
        "examples": [
          "It is a long shot, but we will apply.",
          "Success is unlikely, but we will apply."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "“I am on the fence about the offer” most likely means what?",
        "options": [
          "I have not decided whether to accept.",
          "I have already rejected it.",
          "I am repairing outdoor furniture.",
          "I have accepted without hesitation."
        ],
        "answer": 0,
        "explanation": "On the fence conventionally describes an undecided position."
      },
      {
        "prompt": "Which paraphrase preserves “It is a long shot”?",
        "options": [
          "It is certain to fail.",
          "It has a low chance of succeeding.",
          "It is guaranteed to succeed.",
          "It requires a camera."
        ],
        "answer": 1,
        "explanation": "A long shot is unlikely to succeed, but success remains possible."
      },
      {
        "prompt": "Which instruction is clearest for an audience unfamiliar with workplace idioms?",
        "options": [
          "Please touch base and circle back at some point.",
          "Keep your ear to the ground and run with it.",
          "Please discuss progress with me on Tuesday.",
          "Move the needle when the ball is in your court."
        ],
        "answer": 2,
        "explanation": "The plain instruction names both the action and time without requiring knowledge of several idioms."
      }
    ]
  },
  {
    "id": "c1-word-families",
    "level": "c1",
    "skill": "vocabulary",
    "title": "Word families and precise collocations",
    "description": "Choose the right form without relying on suffixes alone.",
    "minutes": 22,
    "content": [
      {
        "heading": "Connect meaning and sentence role",
        "text": "A word family links related forms such as analysis, analyse, analytical, and analytically. The form depends on the sentence role: a noun can name a process, a verb describes the action, and an adjective modifies a noun. Learn a short phrase with each form instead of assuming every ending is interchangeable.",
        "examples": [
          "We analyse the responses.",
          "The analysis reveals a pattern.",
          "She takes an analytical approach."
        ]
      },
      {
        "heading": "Notice natural combinations",
        "text": "Collocations are conventional word combinations. We draw a distinction, reach a consensus, and pose a question. Alternatives may be understandable but less natural. Record the complete combination, including articles or prepositions where useful. Watch meaning too: reach a consensus describes agreement, whereas establish a fact concerns supporting its truth.",
        "examples": [
          "Draw a distinction between access and use.",
          "The panel reached a consensus on the criteria."
        ]
      },
      {
        "heading": "Revise through a substitution test",
        "text": "Write a paragraph about a community survey using one word family and two collocations. Replace a noun with a verb only after rebuilding the sentence around it. Check a trusted dictionary when unsure of a form. Finish by explaining why a natural combination fits the intended action rather than merely sounding impressive.",
        "examples": [
          "Our evaluation identified a problem.",
          "We evaluated the service and identified a problem."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Complete: The team took an ___ approach to the data.",
        "options": [
          "analysis",
          "analyse",
          "analytically",
          "analytical"
        ],
        "answer": 3,
        "explanation": "Approach is a noun modified by the adjective analytical."
      },
      {
        "prompt": "Which is a natural collocation for making a conceptual difference clear?",
        "options": [
          "Draw a distinction",
          "Do a distinction",
          "Spend a distinction",
          "Arrive a distinction"
        ],
        "answer": 0,
        "explanation": "Draw a distinction is the conventional combination for identifying a meaningful difference."
      },
      {
        "prompt": "Which sentence correctly changes the noun evaluation into a verb construction?",
        "options": [
          "We evaluation the service carefully.",
          "We evaluated the service carefully.",
          "We were evaluate of the service.",
          "We did evaluative the service."
        ],
        "answer": 1,
        "explanation": "Evaluated is the past-tense verb, with the service as its direct object."
      }
    ]
  },
  {
    "id": "c1-reading-public-trial",
    "level": "c1",
    "skill": "reading",
    "title": "Read a pilot scheme with caution",
    "description": "Distinguish a result, an explanation, and a missing comparison.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: an evening library trial",
        "text": "For six weeks, Northbank Library stayed open until nine on Wednesdays. Evening visits rose from an average of forty to seventy per week. A council newsletter described the trial as proof that extended hours brought new readers into the library. Yet the registration count changed little, and staff reported that some regular visitors had shifted their visits from afternoons to evenings. The trial also coincided with examinations at a nearby college. Students welcomed the quieter study space, while parents requested later openings on Fridays instead. The librarian recommended continuing Wednesday evenings for another term, alongside a survey asking visitors when they would otherwise have come. She also proposed comparing attendance with a similar branch that retained its usual hours. The aim, she explained, was to learn whether the change expanded access or mainly redistributed existing use.",
        "examples": [
          "Reported evening average: forty before, seventy during.",
          "Alternative explanations: shifted visits and examination demand."
        ]
      },
      {
        "heading": "Separate outcome from interpretation",
        "text": "The passage reports a rise in evening visits, but the newsletter adds an interpretation about new readers. Registration figures and staff observations complicate that interpretation. Identify the precise outcome measured and ask whether it establishes the claimed benefit. A plausible explanation is not necessarily the only explanation supported by the situation.",
        "examples": [
          "More evening visits does not by itself establish more unique readers.",
          "The registration count changed little despite increased evening visits."
        ]
      },
      {
        "heading": "Produce a qualified summary",
        "text": "Summarize the result in one sentence and the uncertainty in a second. Then explain why a comparison branch could help, while acknowledging that branches may differ. For unofficial IELTS-style practice, justify each answer with a phrase from the passage before checking the explanation.",
        "examples": [
          "Evening attendance increased; its effect on total access remains unclear.",
          "A survey can ask whether an evening visit replaced an afternoon one."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What did the reported figures directly show?",
        "options": [
          "A comparable increase in unique library members",
          "An increase in total weekly visits across all opening hours",
          "An increase in Wednesday evening visits",
          "A rise of thirty new registrations per week"
        ],
        "answer": 2,
        "explanation": "The stated change is from forty to seventy evening visits, not a verified increase in unique readers."
      },
      {
        "prompt": "Why does the nearby college matter to the argument?",
        "options": [
          "Its examinations prove that every additional visitor was a student.",
          "Its calendar explains why existing readers registered again.",
          "Its examination schedule makes a comparison branch unnecessary.",
          "Its examinations offer another explanation for study-space demand."
        ],
        "answer": 3,
        "explanation": "The timing of examinations could influence attendance independently of the new opening hours."
      },
      {
        "prompt": "What does the librarian recommend?",
        "options": [
          "Continue the trial while gathering information about displaced visits and a comparison branch.",
          "Continue the trial and use evening attendance alone as the success measure.",
          "Replace Wednesday evenings with Friday openings because parents requested them.",
          "Complete the branch comparison before allowing any further evening visits."
        ],
        "answer": 0,
        "explanation": "The recommendation combines continued Wednesday access with a visitor survey and branch comparison."
      }
    ]
  },
  {
    "id": "c1-reading-source-synthesis",
    "level": "c1",
    "skill": "reading",
    "title": "Synthesize two views fairly",
    "description": "Find agreement beneath different emphases.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passages: local food policy",
        "text": "Source A: A council should support local food markets because direct contact can help small growers explain their methods and build customer trust. Local origin alone, however, does not establish a low environmental impact. Production methods and transport efficiency matter too. Buyers need clear information rather than a reassuring label. Source B: Public purchasing can strengthen regional farms, provided contracts remain accessible to smaller suppliers. Requiring every ingredient to come from nearby would create difficulties when seasonal supplies are limited. A flexible policy could prioritize regional produce when suitable alternatives exist, while publishing its selection criteria. Neither source claims that geography is irrelevant. Both argue that a useful policy needs more detail than a simple local-versus-imported divide, although A emphasizes consumers and B emphasizes institutional purchasing.",
        "examples": [
          "A prioritizes buyer information.",
          "B prioritizes accessible contracts and flexible procurement."
        ]
      },
      {
        "heading": "Separate shared ground from emphasis",
        "text": "A synthesis organizes sources around an issue rather than retelling each text in isolation. Identify where they agree, where they differ, and whether an apparent conflict concerns a different audience or situation. Preserve conditions such as provided and when suitable alternatives exist, because they define the scope of support.",
        "examples": [
          "Both sources resist treating local origin as a sufficient rule.",
          "A discusses consumer trust, whereas B examines procurement access."
        ]
      },
      {
        "heading": "Draft a synthesis statement",
        "text": "Write a short combined summary naming one shared principle and one difference of emphasis. Attribute distinct recommendations to their sources. Avoid creating a consensus that neither author states, and do not convert a conditional preference into a universal prohibition.",
        "examples": [
          "Both favour informed, flexible decisions; A focuses on consumers, whereas B examines public contracts.",
          "Neither text treats every imported product as unacceptable."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which principle do both sources support?",
        "options": [
          "Local origin provides sufficient evidence of environmental benefit.",
          "Local-food decisions require more than a simple geographic label.",
          "Public purchasing should use an inflexible geographic rule.",
          "Direct consumer contact resolves the difficulties of institutional contracts."
        ],
        "answer": 1,
        "explanation": "A discusses production and information; B discusses flexibility and contract access. Both reject an absolute geographic rule."
      },
      {
        "prompt": "Which recommendation belongs specifically to Source B?",
        "options": [
          "Let consumers assess growers through direct conversations.",
          "Treat production method as irrelevant if the origin is nearby.",
          "Keep public contracts accessible to smaller suppliers.",
          "Require regional ingredients even when seasonal alternatives are unavailable."
        ],
        "answer": 2,
        "explanation": "Source B explicitly discusses the design of public purchasing contracts."
      },
      {
        "prompt": "Which summary overstates the sources?",
        "options": [
          "Both favour qualified approaches to local-food decisions.",
          "A treats information for buyers as important.",
          "B argues for flexibility when regional supply is unsuitable.",
          "Both insist that every ingredient must be local."
        ],
        "answer": 3,
        "explanation": "B expressly warns that requiring every ingredient to be nearby would create difficulties, and A makes no universal requirement."
      }
    ]
  },
  {
    "id": "c1-reading-voice",
    "level": "c1",
    "skill": "reading",
    "title": "Identify a writer’s reservations",
    "description": "Read concession, evaluative wording, and a measured conclusion.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: the frictionless museum",
        "text": "The museum’s new app promises a frictionless visit. Visitors can reserve a route, receive descriptions beside each object, and avoid the information desk entirely. These features will undoubtedly help some people, particularly those planning a short visit. Whether a museum should remove every moment of uncertainty is another question. An unexpected conversation with a guide or a wrong turn into an unfamiliar room can become the most memorable part of a visit. There is also the matter of visitors who prefer a printed map or cannot comfortably use a phone. The app deserves a place among the museum’s tools, but presenting it as the natural replacement for human assistance seems premature. A successful design might offer confident navigation without assuming that all wandering is wasted time. Convenience is valuable; it need not become the only measure of a cultural experience.",
        "examples": [
          "Concession: the app will help some visitors.",
          "Reservation: convenience is not the only value."
        ]
      },
      {
        "heading": "Follow the rhetorical turn",
        "text": "A concession grants a reasonable benefit before introducing a reservation. Words such as undoubtedly do not establish that the writer supports every feature. Locate the turning question and the final recommendation. Notice how seems premature expresses caution about replacement without requiring rejection of the technology itself.",
        "examples": [
          "The writer accepts an app as one useful tool.",
          "The writer questions replacement, rather than the existence of the app."
        ]
      },
      {
        "heading": "Support an interpretation",
        "text": "Describe the writer’s attitude using two elements: a recognized advantage and a proposed limit. Quote only a brief phrase when practising, then explain its role in your own words. Test your interpretation against the conclusion rather than selecting a single approving or critical adjective from the opening.",
        "examples": [
          "The app should complement assistance and preserve choice.",
          "Printed maps remain useful for visitors who do not use a phone."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which best describes the writer’s position?",
        "options": [
          "The app is useful but should preserve alternatives and human assistance.",
          "The app is a reasonable replacement once its route descriptions are improved.",
          "The app is convenient mainly because human assistance has become unnecessary.",
          "The app should remain secondary because unplanned visits are always more valuable."
        ],
        "answer": 0,
        "explanation": "The writer grants convenience while questioning replacement and the assumption that all wandering is wasteful."
      },
      {
        "prompt": "Why does the writer mention a wrong turn?",
        "options": [
          "To establish that the museum’s routes are too poorly marked to use",
          "To illustrate how an unplanned experience can have value.",
          "To suggest that guides should lead visitors away from their chosen objects",
          "To argue that navigation should be removed from the app"
        ],
        "answer": 1,
        "explanation": "The example supports the argument that uncertainty is not always a defect in a museum visit."
      },
      {
        "prompt": "What does “seems premature” signal?",
        "options": [
          "A prediction that the app will eventually fail altogether",
          "An endorsement of replacement once visitors stop requesting printed maps",
          "A cautious objection to replacing human assistance now",
          "An admission that digital assistance has already become the only practical option"
        ],
        "answer": 2,
        "explanation": "Premature suggests the conclusion or action is being adopted before it is justified."
      }
    ]
  },
  {
    "id": "c1-listening-study-design",
    "level": "c1",
    "skill": "listening",
    "title": "Listen for methods and limits",
    "description": "Track the measured outcome and the design cautions in a lecture.",
    "minutes": 22,
    "content": [
      {
        "heading": "Prepare a four-part note frame",
        "text": "Before playing this original lecture extract, make headings for procedure, observed difference, unchanged outcome, and limitations. Predict useful grammatical signals rather than an answer: before often marks a stage, whereas however introduces a qualification. Listen once without trying to write every sentence, then fill gaps on a second play.",
        "examples": [
          "Procedure → questions or rereading; same reading and preparation time.",
          "Outcome notes: specific examples increased; speaker numbers did not."
        ]
      },
      {
        "heading": "Distinguish detail from participation",
        "text": "The speaker compares how specifically students contributed with how many students spoke. Those are separate outcomes, so improved discussion detail does not establish that more students participated. Keep this distinction when summarizing, and note whether the speaker treats the result as tentative or conclusive.",
        "examples": [
          "More examples ≠ more speakers.",
          "No random assignment limits causal interpretation."
        ]
      },
      {
        "heading": "Apply a claim audit",
        "text": "After listening, write one sentence beginning the activity may, followed by a specific observed benefit. Add one design limitation and the proposed improvement. Replay only the segment that supports each note. Check the transcript last so that reading does not replace listening during your first attempt.",
        "examples": [
          "The plan adds alternating activities and an independent observer.",
          "The benefit concerns discussion detail, not an increase in participants."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What difference was observed?",
        "options": [
          "The question group had more students contributing to discussion.",
          "The question group recalled more simple facts from its reading.",
          "The rereading group used more specific examples a week later.",
          "The question group used more specific examples."
        ],
        "answer": 3,
        "explanation": "The speaker reports greater specificity; materials and preparation time were matched."
      },
      {
        "prompt": "Which outcome did not differ?",
        "options": [
          "The number of students who spoke",
          "The detail in students’ discussion contributions",
          "The usefulness of the preparation reported by teachers",
          "The number of specific examples used a week later"
        ],
        "answer": 0,
        "explanation": "The speaker explicitly states no difference in the number of speakers."
      },
      {
        "prompt": "Why is an independent observer proposed?",
        "options": [
          "Students had been randomly assigned but refused to follow instructions.",
          "The instructor knew which exercise each group completed.",
          "The previous observer had assessed discussion without knowing the exercises.",
          "The rereading exercise took longer than the question exercise."
        ],
        "answer": 1,
        "explanation": "Independent assessment would address a concern related to the instructor’s knowledge of group conditions."
      }
    ],
    "listeningText": "Before we move to the results, let me explain what we actually changed. Students in two seminar groups received the same reading material. One group answered brief questions before the discussion; the other simply reread the text for the same amount of time. In the following discussion, the question group referred to more specific examples. That difference was still present a week later, when students discussed a related topic without preparation. We did not find a difference in the number of students who spoke, however, so the exercise seems to have affected the detail of contributions rather than participation itself. There are two cautions. The groups already existed, and we could not randomly assign students. Also, the instructor knew which exercise each group completed. Next term, we plan to alternate the exercises across several groups and ask an independent observer to assess the discussions. For now, I would describe the activity as a useful possibility, not an established solution."
  },
  {
    "id": "c1-listening-disagreement",
    "level": "c1",
    "skill": "listening",
    "title": "Listen for the actual disagreement",
    "description": "Separate shared goals from competing sequences of action.",
    "minutes": 22,
    "content": [
      {
        "heading": "Listen for common ground",
        "text": "The speaker begins by naming areas of agreement before identifying a narrower disagreement. Draw two columns, shared goals and contested decision. This helps you resist the assumption that opposing groups disagree about everything. Listen for nobody, also, and concerns, which help mark the boundaries of the dispute.",
        "examples": [
          "Common goal: reuse the warehouses and retain public river access.",
          "Contested decision: appointing a builder before the study is complete."
        ]
      },
      {
        "heading": "Follow the conditional consequence",
        "text": "A conditional risk is not a prediction that the worst outcome will certainly occur. Here, one possible finding could force changes to a design. Record the condition and consequence separately, then identify which action the speaker wants to delay and which activities can continue.",
        "examples": [
          "If road capacity is inadequate → substantial design changes may be needed.",
          "If capacity is adequate, this particular constraint may not require redesign."
        ]
      },
      {
        "heading": "Reconstruct the proposed sequence",
        "text": "After two listens, explain the proposal as a sequence of three practical steps. Include one activity that can proceed immediately and the commitment that should wait. Check your summary for an accidental claim that the whole project should stop; the recording explicitly distinguishes preparation from a major commitment.",
        "examples": [
          "Continue preliminary work; complete the study; then commit to a layout.",
          "The speaker permits maintenance while opposing an early budget commitment."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What do both groups support?",
        "options": [
          "Selecting a builder before transport evidence is available",
          "Using the existing warehouse layout without revision",
          "Reusing the warehouses and retaining public river access",
          "Prioritizing the construction schedule over public access"
        ],
        "answer": 2,
        "explanation": "The opening identifies these as agreed goals."
      },
      {
        "prompt": "What is the central disagreement?",
        "options": [
          "Whether a preliminary design should be prepared at all",
          "Whether public river access should be included in the design",
          "Whether every maintenance task should wait for a builder",
          "Whether to select a builder before the transport study is complete"
        ],
        "answer": 3,
        "explanation": "The speaker explicitly says the disagreement concerns the sequence of decisions."
      },
      {
        "prompt": "Which activity does the speaker say can continue immediately?",
        "options": [
          "Surveys and community meetings",
          "Committing most of the budget to the preferred layout",
          "Appointing a builder before the transport study ends",
          "Implementing a final road design before capacity is known"
        ],
        "answer": 0,
        "explanation": "The speaker lists surveys, community meetings, and maintenance as work that need not wait."
      }
    ],
    "listeningText": "You have heard both teams describe the riverside proposal, so I want to clarify where we agree. Nobody is suggesting that the old warehouses should remain empty indefinitely. We also agree that the public should retain access to the river. The disagreement concerns the sequence of decisions. The development group would like to select a builder before the transport study is complete, arguing that an early appointment would protect the schedule. Our group thinks that would narrow the options too soon. If the study shows that the existing road cannot handle additional traffic, the design may need substantial changes. We therefore propose completing the study first, while allowing potential builders to comment on several preliminary designs. That is not a request to postpone all work. Surveys, community meetings, and basic maintenance can continue immediately. What we want to avoid is committing most of the budget to one layout before we understand a constraint that could reshape it."
  },
  {
    "id": "c1-listening-reframing",
    "level": "c1",
    "skill": "listening",
    "title": "Listen when a researcher changes focus",
    "description": "Recognize a revised interpretation without inventing a contradiction.",
    "minutes": 22,
    "content": [
      {
        "heading": "Map the original and revised question",
        "text": "In an extended explanation, speakers may retain earlier measurements while changing how they interpret them. Listen for the original questionnaire, the unexpected issue, and the revised scope. Write a simple before-and-after note, preserving the distinction between disliking a place and facing difficulty reaching it.",
        "examples": [
          "Original measures: visit frequency and satisfaction.",
          "Revised scope: ask how people reach the park."
        ]
      },
      {
        "heading": "Notice what is retained",
        "text": "A revised interpretation does not necessarily mean that previous data were useless. The speaker explicitly retains satisfaction questions, but rejects treating them as a complete explanation. Listen for still and simply: small words can show continuity as well as change in academic arguments.",
        "examples": [
          "New focus: the journey as well as facilities inside the park.",
          "Satisfaction remains useful, but it cannot explain every attendance pattern."
        ]
      },
      {
        "heading": "Practise a faithful paraphrase",
        "text": "Summarize the change using both and rather than replacing one measure with another. Then imagine a follow-up question that would distinguish low interest from poor access. Replay the conclusion and check whether your summary preserves the relationship between numerical findings and personal accounts.",
        "examples": [
          "The report will combine figures with residents’ journey descriptions.",
          "How easy is it for you to cross the road near the entrance?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What did the original questionnaire ask about?",
        "options": [
          "Residents’ road-crossing behaviour and entrance preferences",
          "Visit frequency and satisfaction",
          "How satisfied residents were with the route to the park",
          "The relationship between activity costs and park attendance"
        ],
        "answer": 1,
        "explanation": "The opening identifies how often residents visited and how satisfied they were."
      },
      {
        "prompt": "Why might more activities inside the park be insufficient?",
        "options": [
          "The interviews established that residents preferred fewer facilities.",
          "Residents reported satisfaction only after new activities were offered.",
          "Some barriers concern the journey to the park.",
          "Low attendance was caused entirely by a lack of internal facilities."
        ],
        "answer": 2,
        "explanation": "Road crossing and hard-to-find entrances are access issues that new internal activities may leave unresolved."
      },
      {
        "prompt": "How will the next report present evidence?",
        "options": [
          "By replacing satisfaction data with journey descriptions",
          "By reporting satisfaction figures without the access concerns",
          "By treating interview accounts as an alternative to all numerical data",
          "By combining figures with short accounts of residents’ journeys"
        ],
        "answer": 3,
        "explanation": "The conclusion explicitly brings numbers and experiences together."
      }
    ],
    "listeningText": "When we began interviewing residents about the new park, our questionnaire asked how often they visited and how satisfied they were. Those questions produced tidy numbers, but the interviews soon revealed a missing issue. Several residents enjoyed the park yet felt uneasy crossing the busy road beside it. Others said they rarely visited because the entrances were difficult to find, not because they disliked the facilities. We therefore added questions about the journey to the park. This changed our interpretation of low attendance. It would have been easy to recommend more activities inside the park, but that would not necessarily address problems outside its boundaries. We are keeping the satisfaction questions because they still tell us something useful. We are simply no longer treating them as a complete explanation of use. Our next report will present the figures together with short accounts of residents’ journeys, so that the numbers and experiences can inform each other rather than compete for attention."
  },
  {
    "id": "c1-writing-synthesis",
    "level": "c1",
    "skill": "writing",
    "title": "Build a synthesis paragraph",
    "description": "Combine sources around a claim and mark the limits of agreement.",
    "minutes": 22,
    "content": [
      {
        "heading": "Organize by the shared issue",
        "text": "A synthesis paragraph uses several sources to develop one point. Start with the issue you want to explain, then select relevant evidence from each source. Avoid a sequence of disconnected summaries. Attribute ideas clearly, especially when sources disagree or examine different groups, time periods, or outcomes.",
        "examples": [
          "A finds better access among commuters; B identifies costs for shift workers.",
          "A combined paragraph can compare how access differs across work schedules."
        ]
      },
      {
        "heading": "Show the relationship between sources",
        "text": "Use similarly for a genuine parallel, whereas for a contrast, and extends when one source develops another. The connector must describe the evidence rather than manufacture agreement. If two studies measure different outcomes, explain that difference before combining them into a general conclusion.",
        "examples": [
          "Both address access, but they examine different schedules.",
          "The findings suggest benefits may depend on working patterns."
        ]
      },
      {
        "heading": "Draft and revise a compact argument",
        "text": "Practise with two invented notes: Survey A reports shorter journeys for daytime commuters; Interview B records fewer services after ten at night. Write a paragraph that acknowledges both outcomes and gives a bounded conclusion. Then underline attribution, circle the connector, and remove any claim about all travellers.",
        "examples": [
          "The timetable appears helpful for daytime commuters, while late workers may still face poor access.",
          "The evidence concerns the surveyed groups, rather than every possible traveller."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which opening best supports synthesis?",
        "options": [
          "The revised timetable affects daytime and late-night travellers differently.",
          "Source A exists. Source B exists.",
          "Every source proves the timetable is perfect.",
          "Transport has always been interesting."
        ],
        "answer": 0,
        "explanation": "The opening creates an issue around which evidence from both sources can be organized."
      },
      {
        "prompt": "Which connector accurately relates shorter daytime journeys and fewer late-night services?",
        "options": [
          "Identically",
          "Whereas",
          "For the same reason in every case",
          "As an exact equivalent"
        ],
        "answer": 1,
        "explanation": "Whereas marks a relevant contrast between outcomes for different travellers."
      },
      {
        "prompt": "What should the paragraph avoid claiming from these notes?",
        "options": [
          "Daytime commuters reported shorter journeys.",
          "Late-night services remain a concern.",
          "Every traveller benefits equally.",
          "The effect may depend on working patterns."
        ],
        "answer": 2,
        "explanation": "The evidence explicitly differs by schedule, so equal universal benefit is unsupported."
      }
    ]
  },
  {
    "id": "c1-writing-feedback",
    "level": "c1",
    "skill": "writing",
    "title": "Write constructive, specific feedback",
    "description": "Turn evaluation into evidence, impact, and a useful next step.",
    "minutes": 22,
    "content": [
      {
        "heading": "Describe what a reader can locate",
        "text": "Useful feedback identifies a feature of the work rather than assigning a fixed trait to its author. Name the relevant section, sentence, or omission. Explain the effect on a reader so that revision has a purpose. Specific praise is useful too because it shows what should be retained.",
        "examples": [
          "The opening defines the problem clearly.",
          "The second paragraph introduces a new term without explaining it."
        ]
      },
      {
        "heading": "Make the next step achievable",
        "text": "Separate essential corrections from optional suggestions. A request such as add the missing comparison is clearer than make it better. Calibrate your tone to the relationship and consequences, while avoiding vague hedges that hide a required action. Explain uncertainty when you are unsure of the intended meaning.",
        "examples": [
          "Please add the comparison required by the brief.",
          "If you mean annual income, label the axis accordingly."
        ]
      },
      {
        "heading": "Practise a three-part comment",
        "text": "Choose a paragraph from your own writing. Write feedback that identifies one feature, explains its impact, and suggests a revision. Limit the comment to the most useful change rather than listing every possible improvement. Apply the revision yourself and check whether the reader now has the missing information.",
        "examples": [
          "The pronoun this has two possible referents; replace it with the specific policy name.",
          "The conclusion introduces a new claim; develop it earlier or remove it."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which feedback is most actionable?",
        "options": [
          "You are bad at clarity.",
          "Improve absolutely everything.",
          "This is confusing somehow.",
          "Paragraph two uses this ambiguously; name the policy it refers to."
        ],
        "answer": 3,
        "explanation": "The comment locates a specific issue and gives a concrete revision."
      },
      {
        "prompt": "Why distinguish required changes from optional suggestions?",
        "options": [
          "So the writer can prioritize and understand what must be corrected.",
          "So the writer can ignore the brief.",
          "So the feedback can avoid all detail.",
          "So every personal preference becomes a rule."
        ],
        "answer": 0,
        "explanation": "Priority helps the writer direct effort toward the task requirements."
      },
      {
        "prompt": "Which comment explains the reader impact?",
        "options": [
          "Use better English.",
          "Define the term before using it so new readers can follow the comparison.",
          "This paragraph exists.",
          "Write something sophisticated."
        ],
        "answer": 1,
        "explanation": "The comment connects a specific revision with the reader’s ability to understand the comparison."
      }
    ]
  },
  {
    "id": "c1-writing-general-letter",
    "level": "c1",
    "skill": "writing",
    "title": "Plan a purposeful formal letter",
    "description": "Practise an unofficial IELTS General Training style response.",
    "minutes": 22,
    "content": [
      {
        "heading": "Identify relationship and purpose",
        "text": "This unofficial practice lesson uses a letter about a disrupted course. Before drafting, identify the recipient, your relationship, and the outcome you want. A letter to an administrator needs enough context to locate the issue, but a long personal history can bury the request. Choose a greeting appropriate to the known name and local convention.",
        "examples": [
          "Purpose: explain cancelled sessions and request a replacement arrangement.",
          "Recipient: the administrator responsible for the evening course."
        ]
      },
      {
        "heading": "Give every requested point a role",
        "text": "Practice prompt: Write to a course administrator. Explain which sessions were cancelled, describe how this affected your study, and suggest a solution. Plan one clear function for each part. Use accurate dates and neutral descriptions, then make a practical request instead of relying on anger to communicate urgency.",
        "examples": [
          "Two evening sessions were cancelled without replacement.",
          "Could you offer an alternative session or access to a tutor?"
        ]
      },
      {
        "heading": "Review for task coverage and tone",
        "text": "Draft the letter, then label the sentence that addresses each requested point. Check whether the administrator can identify the course and act on your request. Remove exaggerated accusations and unsupported motives. End with a clear expectation for a reply, choosing a reasonable date if the situation requires one.",
        "examples": [
          "Please let me know what arrangements are available before the next unit begins.",
          "Please confirm whether a tutor session can replace the cancelled lessons."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which plan covers the practice prompt fully?",
        "options": [
          "Greeting, childhood story, goodbye",
          "Only a refund demand without context",
          "Cancelled sessions, study impact, proposed solution",
          "A list of unrelated courses"
        ],
        "answer": 2,
        "explanation": "The plan directly addresses all three requested points."
      },
      {
        "prompt": "Which sentence best states an actionable request?",
        "options": [
          "The situation is unbelievable.",
          "Everything about the course is terrible.",
          "I have many feelings about studying.",
          "Could you arrange a replacement session before the next unit?"
        ],
        "answer": 3,
        "explanation": "The recipient can understand the specific action and relevant time frame."
      },
      {
        "prompt": "What is the best final review question?",
        "options": [
          "Can the recipient identify the issue and understand the requested response?",
          "Have I used as many rare words as possible?",
          "Have I accused the recipient of hidden motives?",
          "Have I removed all course details?"
        ],
        "answer": 0,
        "explanation": "A purposeful letter supplies enough information for the recipient to act."
      }
    ]
  },
  {
    "id": "c1-speaking-academic-turns",
    "level": "c1",
    "skill": "speaking",
    "title": "Join an academic discussion",
    "description": "Build on another contribution and ask a focused question.",
    "minutes": 22,
    "content": [
      {
        "heading": "Connect before extending",
        "text": "An effective seminar contribution shows its relationship to the discussion. Briefly identify the previous point, then add a reason, example, or qualification. Repeating another person’s whole argument wastes time; introducing an unrelated speech breaks the thread. Name the idea accurately before agreeing with or challenging it.",
        "examples": [
          "Building on your point about access, transport costs may matter too.",
          "Your example concerns universities; would the same reasoning apply to schools?"
        ]
      },
      {
        "heading": "Clarify without pretending agreement",
        "text": "A question can test the meaning or evidence behind a claim. Ask what a key term includes or how a conclusion follows from a finding. Use a neutral tone and give the speaker space to answer. A clarification question is especially useful when disagreement may depend on different definitions.",
        "examples": [
          "When you say participation, do you mean attendance or speaking in class?",
          "What evidence links the change in attendance to the new timetable?"
        ]
      },
      {
        "heading": "Record a connected contribution",
        "text": "Imagine a classmate says online classes improve participation. Record a short reply that acknowledges the possibility, defines one relevant outcome, and asks a specific follow-up question. Listen for a clear link to the original claim. Replace filler phrases with a brief pause when you need time to choose a word.",
        "examples": [
          "Attendance might rise, but do we know whether more students contribute to discussion?",
          "Perhaps access improved, although the quality of interaction needs separate evidence."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which contribution clearly builds on an existing idea?",
        "options": [
          "I prepared an unrelated speech yesterday.",
          "Your point about access also raises a question about transport costs.",
          "There is nothing to discuss.",
          "Let us ignore everything already said."
        ],
        "answer": 1,
        "explanation": "It names the previous idea and extends it with a relevant factor."
      },
      {
        "prompt": "Which question clarifies the meaning of participation?",
        "options": [
          "Why are you always wrong?",
          "Can I read my whole essay?",
          "Do you mean attending sessions or contributing during them?",
          "Is education a word?"
        ],
        "answer": 2,
        "explanation": "The question distinguishes two plausible meanings that could affect the argument."
      },
      {
        "prompt": "What should a useful follow-up question target?",
        "options": [
          "The speaker’s personality",
          "Any unrelated topic",
          "Only vocabulary that sounds impressive",
          "A particular definition, reason, or evidence gap"
        ],
        "answer": 3,
        "explanation": "Focused follow-up questions advance the discussion by addressing the substance of the contribution."
      }
    ]
  },
  {
    "id": "c1-speaking-focus-stress",
    "level": "c1",
    "skill": "speaking",
    "title": "Use sentence stress to show contrast",
    "description": "Make the important correction audible without speeding up.",
    "minutes": 22,
    "content": [
      {
        "heading": "Stress changes the intended contrast",
        "text": "English speakers often emphasize a word to signal what is new, corrected, or contrasted. In “I wanted the BLUE folder,” the focus distinguishes colour; in “I WANTED the blue folder,” it can contrast wanting with receiving. Capitals here mark practice emphasis, not a requirement to shout or use one fixed pitch.",
        "examples": [
          "I requested THREE copies, not two.",
          "Maya reviewed the draft; she did not WRITE it."
        ]
      },
      {
        "heading": "Group ideas into thought units",
        "text": "Pause where an idea can be understood, especially before a contrast or after a long introductory phrase. Keep important grammatical connections together. A slower, well-grouped explanation can sound clearer than a fast uninterrupted sentence. Intonation varies across speakers and settings, so aim for intelligible meaning rather than imitation of one accent.",
        "examples": [
          "If the figures are accurate / we can proceed / but we still need approval.",
          "The first option is cheaper / whereas the second includes support."
        ]
      },
      {
        "heading": "Practise two interpretations",
        "text": "Record the sentence “We need the final version today” twice. First emphasize final to contrast it with a draft; then emphasize today to contrast it with tomorrow. Add a short explanation after each recording and check whether the audible focus matches that explanation. Ask a listener to identify the intended correction if possible.",
        "examples": [
          "We need the FINAL version today, rather than another draft.",
          "We need the final version TODAY, rather than tomorrow."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "In “I requested THREE copies, not two,” what does the emphasis correct?",
        "options": [
          "The quantity",
          "The identity of the requester",
          "The delivery address",
          "The colour of the paper"
        ],
        "answer": 0,
        "explanation": "Three contrasts directly with two, making quantity the focus."
      },
      {
        "prompt": "Which grouping best preserves a conditional idea?",
        "options": [
          "If the / figures are / accurate we can / proceed.",
          "If the figures are accurate / we can proceed.",
          "If / the figures are accurate we / can proceed.",
          "If the figures / are accurate we can / proceed."
        ],
        "answer": 1,
        "explanation": "The pause follows the complete condition and separates it from the main consequence."
      },
      {
        "prompt": "You mean a final version rather than a draft. Which word is the best focus?",
        "options": [
          "We",
          "Need in every possible context",
          "Final",
          "Today"
        ],
        "answer": 2,
        "explanation": "Final carries the specific contrast between the completed version and a draft."
      }
    ]
  },
  {
    "id": "c1-speaking-interview-evidence",
    "level": "c1",
    "skill": "speaking",
    "title": "Answer an interview with evidence",
    "description": "Use a concrete event, your action, and a bounded result.",
    "minutes": 22,
    "content": [
      {
        "heading": "Choose an event with a clear role",
        "text": "For a question about solving a problem, choose one situation you can explain accurately. Give enough context to show the challenge, then distinguish your own action from the team’s work. A specific example is more credible than a list of flattering adjectives that any candidate could use.",
        "examples": [
          "Our team missed updates because requests arrived through three channels.",
          "I was responsible for tracking requests and noticed repeated omissions."
        ]
      },
      {
        "heading": "Explain the result honestly",
        "text": "Describe what changed and how you know. Use a number only if it is accurate and you can explain its basis. If several factors contributed, avoid claiming sole credit. Mention a useful lesson or remaining limit when it helps show judgement rather than weakening every statement with unnecessary uncertainty.",
        "examples": [
          "I introduced a shared request log; the team then tracked outstanding work more consistently.",
          "Several changes helped, so I would not attribute the improvement to the log alone."
        ]
      },
      {
        "heading": "Practise and adapt the answer",
        "text": "Record a concise response to “Tell me about a time you improved a process.” Include context, your action, an observed result, and reflection. Replay it to remove unrelated history. Practise a follow-up about what you would change next time, keeping your account consistent rather than memorizing a rigid script.",
        "examples": [
          "Next time, I would involve support staff earlier when choosing the categories.",
          "I would also check whether the system still works during busy periods."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which detail best demonstrates personal contribution?",
        "options": [
          "We were all amazing.",
          "The company has many employees.",
          "Everyone knows I am organized.",
          "I designed a shared log and tested it with two colleagues."
        ],
        "answer": 3,
        "explanation": "The detail identifies an observable action performed by the candidate."
      },
      {
        "prompt": "When is a numerical result appropriate?",
        "options": [
          "When it is accurate and its basis can be explained",
          "Whenever a large number sounds impressive",
          "Only when it guarantees future success",
          "When it conceals other contributors"
        ],
        "answer": 0,
        "explanation": "Evidence should support the claim; an invented or unexplained number undermines credibility."
      },
      {
        "prompt": "Which reflection shows practical learning?",
        "options": [
          "I would never change anything regardless of evidence.",
          "Next time I would involve support staff before finalizing the categories.",
          "The only lesson is that I am perfect.",
          "I would use a larger invented percentage."
        ],
        "answer": 1,
        "explanation": "The reflection identifies a concrete improvement linked to the process described."
      }
    ]
  },
  {
    "id": "c2-grammar",
    "level": "c2",
    "skill": "grammar",
    "title": "Fine-tune time, stance & implication",
    "description": "Use mixed conditionals and aspect to express exact meanings.",
    "minutes": 20,
    "content": [
      {
        "heading": "Connect an unreal past to the present",
        "text": "A mixed conditional can link a counterfactual past situation to a present consequence. Use if plus past perfect for the unreal past condition, and would plus base verb for a present result. The time relationship determines the structure; do not force every conditional into a single memorized pattern.",
        "examples": [
          "If I had accepted that job, I would live abroad now.",
          "If we had invested in training, the team would be more confident today.",
          "Had I known about the delay, I would not be waiting here now."
        ]
      },
      {
        "heading": "Let aspect express your focus",
        "text": "Compare a completed result with an activity continuing up to a reference point. The present perfect simple can foreground an achieved amount; the continuous often foregrounds duration or ongoing effort. Context, the verb’s meaning, and the intended focus all matter. Some verbs describing states do not normally use the continuous.",
        "examples": [
          "I have written three reports. → completed amount",
          "I have been writing reports all morning. → activity and duration",
          "I have known her for years. → state, normally not continuous"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence links an unreal past choice to a present situation?",
        "options": [
          "If I had taken the job, I would live in London now.",
          "If I had taken the job, I would have moved then.",
          "If I study tomorrow, I will pass.",
          "If I were free now, I would help."
        ],
        "answer": 0,
        "explanation": "Had taken describes the unreal past; would live now describes its imagined present result."
      },
      {
        "prompt": "Which sentence foregrounds a completed quantity?",
        "options": [
          "I have written three reports.",
          "I have been writing reports all morning.",
          "I was writing when you called.",
          "I will be writing later."
        ],
        "answer": 0,
        "explanation": "The present perfect simple with three reports emphasizes the achieved amount."
      },
      {
        "prompt": "Which is the most natural neutral statement about a continuing state?",
        "options": [
          "I have known her for years.",
          "I have been knowing her for years.",
          "I am knowing her since 2020.",
          "I know her since years."
        ],
        "answer": 0,
        "explanation": "Know is normally a state verb, so the present perfect simple is natural here."
      }
    ]
  },
  {
    "id": "c2-vocabulary",
    "level": "c2",
    "skill": "vocabulary",
    "title": "Connotation, register & exact intent",
    "description": "Choose language for its implications as well as its definition.",
    "minutes": 17,
    "content": [
      {
        "heading": "Hear the judgement inside the word",
        "text": "Words can share a basic meaning while expressing a different attitude. Economical suggests sensible use of money; stingy criticizes an unwillingness to spend. Assertive can be positive; aggressive often suggests excessive force. Before choosing a synonym, consider what judgement it implies about the person or action.",
        "examples": [
          "She is economical with resources. → approving efficiency",
          "He is stingy with his time. → criticism",
          "The proposal is ambitious. → potentially admiring, depending on context"
        ]
      },
      {
        "heading": "Use plain precision when it serves best",
        "text": "Mastery includes knowing when a simple expression is the most exact one. Avoid idioms that create ambiguity in international or technical communication. In sensitive feedback, describe observable behaviour and its effect instead of assigning a hostile label. Match the strength of your word to the strength of the evidence.",
        "examples": [
          "Instead of “You are careless”: “The report omitted two required figures.”",
          "Instead of “Get the ball rolling”: “Start the review on Monday.”",
          "“Inconsistent” is more precise than “terrible” when results vary."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which word usually expresses a negative judgement about unwillingness to spend?",
        "options": [
          "Resourceful",
          "Practical",
          "Economical",
          "Stingy"
        ],
        "answer": 3,
        "explanation": "Stingy is generally disapproving, while economical often praises sensible use of resources."
      },
      {
        "prompt": "Which feedback is the most specific and actionable?",
        "options": [
          "You are always careless.",
          "The report omits the two figures requested in the brief.",
          "Everything you do is wrong.",
          "Your report is awful."
        ],
        "answer": 1,
        "explanation": "It identifies an observable issue that the writer can correct."
      },
      {
        "prompt": "Why might “Start the review on Monday” be preferable to “Get the ball rolling”?",
        "options": [
          "It states the action and timing clearly for an international audience.",
          "Plain language is always less advanced.",
          "Idioms are never grammatical.",
          "It hides the required action."
        ],
        "answer": 0,
        "explanation": "The direct wording reduces ambiguity while preserving the intended meaning."
      }
    ]
  },
  {
    "id": "c2-reading",
    "level": "c2",
    "skill": "reading",
    "title": "Read a sophisticated argument critically",
    "description": "Analyze framing, counterarguments, and conclusions across a text.",
    "minutes": 20,
    "content": [
      {
        "heading": "Track what the writer accepts and rejects",
        "text": "Read this commentary: “It would be convenient to treat every increase in productivity as a rise in wellbeing. Yet a measure of output says little about how gains are distributed or whether workers have more control over their time. This is not an argument against productivity growth; it is a warning against treating one indicator as a complete account of social progress. The question is how growth translates into better lives, and for whom.” Identify the distinction that drives the argument.",
        "examples": [
          "Accepted: productivity growth may be valuable.",
          "Rejected: productivity alone fully measures social progress.",
          "Central questions: distribution, control, and lived outcomes."
        ]
      },
      {
        "heading": "Preserve the scope when summarizing",
        "text": "A strong summary captures the writer’s position without converting a qualification into a rejection. Pay attention to not every, little, alone, and complete: these words control the scope of a claim. Ask which conclusion follows from the text and which would require additional evidence.",
        "examples": [
          "“Output says little about distribution” does not mean output has no value.",
          "The writer questions the adequacy of a measure.",
          "The passage does not establish that productivity growth always harms workers."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the writer primarily challenging?",
        "options": [
          "Every possible benefit of growth",
          "The use of productivity as a complete measure of social progress",
          "The importance of workers’ lives",
          "The existence of productivity measurements"
        ],
        "answer": 1,
        "explanation": "The target is treating one indicator as a complete account, not productivity growth itself."
      },
      {
        "prompt": "Which claim would misrepresent the passage?",
        "options": [
          "Control over time is relevant to workers’ lives.",
          "The writer believes productivity growth should always be opposed.",
          "Distribution affects how growth benefits people.",
          "Output alone may not describe wellbeing adequately."
        ],
        "answer": 1,
        "explanation": "The writer explicitly says this is not an argument against productivity growth."
      },
      {
        "prompt": "Which question best extends the writer’s reasoning?",
        "options": [
          "Why should workers have no leisure?",
          "Who receives the gains from increased output, and how do their lives change?",
          "How can output figures be printed in a larger font?",
          "Can every other measure be removed?"
        ],
        "answer": 1,
        "explanation": "This follows the passage’s focus on distribution and the translation of growth into wellbeing."
      }
    ]
  },
  {
    "id": "c2-listening",
    "level": "c2",
    "skill": "listening",
    "title": "Listen: the meaning beyond the words",
    "description": "Interpret diplomatic disagreement and distinguish inference from fact.",
    "minutes": 18,
    "listeningText": "The proposed launch date is certainly ambitious. I appreciate why the sales team would like to announce the product before the conference. My concern is that the accessibility review has not yet been completed, and rushing it could leave us fixing avoidable problems after release. If the review comes back clear next week, the timetable may still be achievable. Until then, I would be reluctant to promise that date publicly. Perhaps we could prepare the announcement now while keeping the release date provisional.",
    "content": [
      {
        "heading": "Recognize a diplomatic objection",
        "text": "In professional discussion, a speaker may acknowledge another team’s goal before raising a concern. Listen to the whole turn rather than interpreting a positive opening as agreement. Here, certainly ambitious is followed by a concrete risk and a condition. The speaker proposes a way forward without making an unconditional commitment.",
        "examples": [
          "Acknowledgement: the sales team has a reason for the timing.",
          "Concern: the accessibility review is incomplete.",
          "Stance: avoid a public promise until the risk is clearer."
        ]
      },
      {
        "heading": "Separate intended meaning from invented detail",
        "text": "A reasonable inference is supported by the speaker’s words and context. It is not permission to invent motives or facts. The speaker is cautious about the date, but does not say the product has already failed a review. Track what is conditional, what is established, and what remains unknown.",
        "examples": [
          "Established: the review has not finished.",
          "Conditional: the timetable may work if the review is clear.",
          "Proposed compromise: prepare the announcement with a provisional date."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the speaker’s overall stance toward the launch date?",
        "options": [
          "Unconditional approval",
          "Cautious acceptance only if the unresolved review permits it",
          "A demand to cancel the product permanently",
          "No interest in the timetable"
        ],
        "answer": 1,
        "explanation": "The speaker allows that the date may be achievable but does not want to promise it before the review."
      },
      {
        "prompt": "Which statement is established by the recording?",
        "options": [
          "The product has failed the accessibility review.",
          "The conference has been cancelled.",
          "The accessibility review is not yet complete.",
          "The sales team refuses any compromise."
        ],
        "answer": 2,
        "explanation": "The speaker explicitly says the review has not yet been completed."
      },
      {
        "prompt": "What compromise does the speaker propose?",
        "options": [
          "Publish a firm date immediately.",
          "Stop preparing all communication.",
          "Skip the accessibility review.",
          "Prepare the announcement while keeping the release date provisional."
        ],
        "answer": 3,
        "explanation": "This preserves useful preparation without making an unsupported public commitment."
      }
    ]
  },
  {
    "id": "c2-writing",
    "level": "c2",
    "skill": "writing",
    "title": "IELTS Task 1: make the overview count",
    "description": "Select key features, compare data accurately, and edit with purpose.",
    "minutes": 25,
    "content": [
      {
        "heading": "Summarize rather than list",
        "text": "IELTS Academic Writing Task 1 asks for at least 150 words, with about 20 minutes recommended. For a chart, identify the main trends, largest differences, and meaningful exceptions. Include an overview and select figures that support it. Describe what the information shows; avoid inventing reasons that the chart does not establish.",
        "examples": [
          "Practice data: cycling to work, 2010 → 2020: Town A 10% → 25%; Town B 20% → 22%; Town C 30% → 28%.",
          "Overview: A rose sharply, B changed little, and C declined slightly.",
          "Town C remained the highest of the three in 2020."
        ]
      },
      {
        "heading": "Compare accurately and revise ruthlessly",
        "text": "Distinguish a percentage-point change from a relative percentage change. Moving from 10% to 25% is a rise of 15 percentage points, not 15 percent. Group related figures instead of writing a separate isolated sentence for every value. During revision, remove repetition, verify comparisons, and make each reference unambiguous.",
        "examples": [
          "Town A increased by 15 percentage points.",
          "By contrast, Town C fell from 30% to 28%.",
          "Town B rose only slightly, from 20% to 22%."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which overview accurately describes the practice data?",
        "options": [
          "All three towns declined sharply.",
          "Town A remained the lowest in 2020.",
          "Town A rose substantially, B rose slightly, and C fell slightly.",
          "Town B overtook every other town."
        ],
        "answer": 2,
        "explanation": "The overview correctly captures the direction and relative scale of each change."
      },
      {
        "prompt": "How much did Town A’s cycling share rise, from 10% to 25%?",
        "options": [
          "25 percentage points",
          "10 percentage points",
          "15 percentage points",
          "15% relative to its starting value"
        ],
        "answer": 2,
        "explanation": "25 minus 10 is 15 percentage points. The relative increase is 150%, a different calculation."
      },
      {
        "prompt": "Which sentence should be excluded unless further evidence is supplied?",
        "options": [
          "Town A’s increase was caused by a new cycle lane.",
          "Town C had the highest share in 2020.",
          "Town B increased from 20% to 22%.",
          "Town A recorded the largest increase."
        ],
        "answer": 0,
        "explanation": "The figures establish a change, but provide no evidence about its cause."
      }
    ]
  },
  {
    "id": "c2-speaking",
    "level": "c2",
    "skill": "speaking",
    "title": "Respond with precision & flexibility",
    "description": "Handle challenging questions and adapt your message to the listener.",
    "minutes": 20,
    "content": [
      {
        "heading": "Define the issue before judging it",
        "text": "A broad question may contain an unclear term or a false choice. Briefly explain how you understand the issue, then answer directly. Distinguish contexts instead of forcing a simple yes or no. This is especially useful in advanced discussion and IELTS-style follow-up questions, where the quality of your reasoning supports a developed answer.",
        "examples": [
          "If by success we mean long-term wellbeing, income is only one factor.",
          "For routine tasks, automation can help; in sensitive decisions, human oversight remains important.",
          "I would distinguish access to information from the ability to evaluate it."
        ]
      },
      {
        "heading": "Adapt without losing precision",
        "text": "Explain the same idea to a friend, a colleague, and a non-specialist. Change the terminology and detail while preserving the meaning. Use stress and pauses to highlight the contrast that matters. End with a clear judgement when the question asks for one, rather than continuing until the main point disappears.",
        "examples": [
          "Technical: The sample may not be representative.",
          "Plain: The people surveyed may not reflect the wider population.",
          "Judgement: I support the proposal, provided the evaluation includes those most affected."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which response handles a broad question about success most thoughtfully?",
        "options": [
          "If success means long-term wellbeing, income matters but is not the only factor.",
          "Success is success because it is successful.",
          "There is no way to discuss the topic.",
          "Success has exactly the same meaning for everyone."
        ],
        "answer": 0,
        "explanation": "It defines the key term and gives a qualified, relevant position."
      },
      {
        "prompt": "What does adapting an explanation to a non-specialist involve?",
        "options": [
          "Adding more unexplained jargon",
          "Changing the facts to make them entertaining",
          "Using accessible wording while preserving the precise meaning",
          "Removing every important qualification"
        ],
        "answer": 2,
        "explanation": "Adaptation changes presentation, not the underlying accuracy."
      },
      {
        "prompt": "Which ending gives a clear but qualified judgement?",
        "options": [
          "Everything is impossible to judge.",
          "I have no conclusion after all.",
          "Overall, I support the proposal if the evaluation includes those most affected.",
          "There are words and more words."
        ],
        "answer": 2,
        "explanation": "The ending states a position and the condition attached to it."
      }
    ]
  },
  {
    "id": "c2-subjunctive-and-remoteness",
    "level": "c2",
    "skill": "grammar",
    "title": "Distinguish formal demands from facts",
    "description": "Use mandative clauses and remote forms with exact intent.",
    "minutes": 22,
    "content": [
      {
        "heading": "A recommendation is not a report",
        "text": "After verbs such as recommend, insist, and require, a that-clause can express a desired action. In a formal mandative construction, the base form remains unchanged even with a singular subject. A should construction is also possible in many varieties. Compare this with a statement describing what actually happens.",
        "examples": [
          "The panel recommends that she be appointed.",
          "The panel reports that she is appointed each year."
        ]
      },
      {
        "heading": "Read the meaning of insist",
        "text": "Insist can express a demand or a firm assertion, so the surrounding grammar and context matter. “He insists that she leave” presents a requested action; “He insists that she left” reports his firm claim about a past event. Do not treat every clause after insist as a demand.",
        "examples": [
          "They insisted that the file be removed.",
          "They insisted that the file had already disappeared."
        ]
      },
      {
        "heading": "Practise intention and evidence",
        "text": "Write one sentence proposing that a named person take responsibility, then a second reporting that the person already has responsibility. Explain the difference aloud. Finally revise a demand into a polite request for a colleague, keeping the desired action clear while adapting its interpersonal force.",
        "examples": [
          "The committee recommends that Arun lead the review.",
          "Could Arun lead the review, subject to his availability?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence uses a formal mandative base form?",
        "options": [
          "The board requires that each applicant is being yesterday.",
          "The board requires each applicant be to notified.",
          "The board requires that each applicant be notified.",
          "The board requires that each applicant being notified."
        ],
        "answer": 2,
        "explanation": "Be is the unchanged base form in the that-clause expressing a requirement."
      },
      {
        "prompt": "“He insists that she left yesterday” most naturally reports what?",
        "options": [
          "A demand that she leave tomorrow",
          "An instruction to change the calendar",
          "A question about her plans",
          "A firm assertion about a past event"
        ],
        "answer": 3,
        "explanation": "Left yesterday presents an asserted past event rather than a desired future action."
      },
      {
        "prompt": "Which pair distinguishes a recommendation from an established fact?",
        "options": [
          "They recommend that she lead; they confirm that she leads.",
          "She leads; she leads.",
          "They recommend she leading; they confirm she leaded.",
          "They lead her; they lead her again."
        ],
        "answer": 0,
        "explanation": "The base-form mandative expresses desired action; the indicative leads reports the stated situation."
      }
    ]
  },
  {
    "id": "c2-ellipsis-and-reference",
    "level": "c2",
    "skill": "grammar",
    "title": "Use ellipsis without losing the meaning",
    "description": "Avoid repetition while keeping missing material recoverable.",
    "minutes": 22,
    "content": [
      {
        "heading": "Let context supply the missing words",
        "text": "Ellipsis omits language that a reader can recover from the context. “Mira can attend, and Jo can too” avoids repeating attend. In comparative and coordinated structures, omission can create elegant economy, but it also creates ambiguity if two different antecedents are equally plausible. Brevity is valuable only when interpretation stays stable.",
        "examples": [
          "Mira has finished, but Jo has not.",
          "Some chose the train; others, the bus."
        ]
      },
      {
        "heading": "Choose a suitable substitute",
        "text": "So can substitute for a proposition after verbs such as think and hope: “Will it work? I think so.” Do so can replace a previously mentioned action, especially in formal writing. Make sure the substitute refers to the intended claim or action, rather than to a nearby noun or a different event.",
        "examples": [
          "Jo promised to check the attachment; she will do so today.",
          "Will they agree? I hope so."
        ]
      },
      {
        "heading": "Restore before compressing",
        "text": "Take a paragraph with repeated verbs and identify two places where omission would help. Rewrite the full versions first so the intended meaning is explicit. Then compress them and ask whether another interpretation has appeared. Restore the noun or verb when economy creates uncertainty about who did what.",
        "examples": [
          "Rina reviewed the draft, and Omar reviewed it too.",
          "Rina reviewed the draft, and Omar did too."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "In “Mira has finished, but Jo has not,” what is omitted after not?",
        "options": [
          "Mira",
          "Finished",
          "Has",
          "But"
        ],
        "answer": 1,
        "explanation": "The prior clause supplies the repeated past participle finished."
      },
      {
        "prompt": "What does so represent in “Will they agree? I hope so”?",
        "options": [
          "Only the noun they",
          "An instruction to leave",
          "The proposition that they will agree",
          "The opposite of agreement"
        ],
        "answer": 2,
        "explanation": "So substitutes for the positive proposition in the preceding question."
      },
      {
        "prompt": "When should repeated wording be restored?",
        "options": [
          "Whenever a sentence contains two people",
          "Whenever a paragraph is formal",
          "Only when a reader requests more adjectives",
          "When its omission leaves the intended reference ambiguous"
        ],
        "answer": 3,
        "explanation": "Recoverability is the condition that makes ellipsis clear and useful."
      }
    ]
  },
  {
    "id": "c2-information-packaging",
    "level": "c2",
    "skill": "grammar",
    "title": "Place information where readers need it",
    "description": "Use clefts and end focus without changing the underlying claim.",
    "minutes": 22,
    "content": [
      {
        "heading": "Separate the message from its packaging",
        "text": "Different grammatical structures can foreground different parts of the same event. A cleft such as “It was Priya who corrected the file” focuses attention on the person. A pseudo-cleft such as “What we need is a reliable backup” foregrounds the required item. Use these structures when the contrast matters, not as decoration.",
        "examples": [
          "It was Priya who corrected the file, not Alex.",
          "What the team needs is a reliable backup."
        ]
      },
      {
        "heading": "Build from known information",
        "text": "Readers often follow a sentence more easily when it begins with an established topic and moves toward important new information. This is a tendency rather than an absolute rule. In a paragraph about a report, “The report was reviewed by two independent specialists” can connect more smoothly than suddenly beginning with the specialists.",
        "examples": [
          "We commissioned a report. The report was reviewed independently.",
          "The independent review identified a missing comparison."
        ]
      },
      {
        "heading": "Revise for a deliberate focus",
        "text": "Write a neutral sentence about a successful change. Rewrite it to highlight the person responsible, then the action that mattered. Check that your versions do not accidentally imply an exclusive claim unsupported by the evidence. Read the paragraph around each version to judge which transition serves the reader best.",
        "examples": [
          "Nila improved the process by simplifying the form.",
          "What Nila changed was the form itself."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does “It was Priya who corrected the file” foreground?",
        "options": [
          "The identity of the person who corrected it",
          "The file’s colour",
          "The date of a future review",
          "The number of corrections"
        ],
        "answer": 0,
        "explanation": "The cleft focuses attention on Priya, often contrasting her with another possible person."
      },
      {
        "prompt": "Which sentence uses a pseudo-cleft?",
        "options": [
          "We need a reliable backup.",
          "What we need is a reliable backup.",
          "A backup is reliable.",
          "We will back up the file."
        ],
        "answer": 1,
        "explanation": "The what-clause identifies a variable and the following clause supplies the focused answer."
      },
      {
        "prompt": "Why might a passive suit a paragraph already discussing a report?",
        "options": [
          "It automatically makes any claim true.",
          "It always removes all responsibility.",
          "It can keep the report as the established topic.",
          "It prevents mention of the reviewer."
        ],
        "answer": 2,
        "explanation": "Information packaging can preserve a topic while placing the reviewer or finding later in the sentence."
      }
    ]
  },
  {
    "id": "c2-scope-and-strength",
    "level": "c2",
    "skill": "vocabulary",
    "title": "Choose the exact strength of a claim",
    "description": "Distinguish plausible, compelling, conclusive, and inevitable.",
    "minutes": 22,
    "content": [
      {
        "heading": "Separate possibility from justification",
        "text": "Plausible describes an account that appears reasonable; compelling suggests strong persuasive force; conclusive describes evidence sufficient to settle a question in context. These words are not interchangeable upgrades. The appropriate strength depends on the quality of support and the alternatives that remain open, rather than the writer’s enthusiasm.",
        "examples": [
          "The explanation is plausible, but competing accounts remain.",
          "The test supplied compelling evidence, although replication is needed."
        ]
      },
      {
        "heading": "Distinguish tendency from necessity",
        "text": "Likely concerns probability; inevitable implies an outcome cannot be avoided; prevalent describes how widespread something is. A widespread practice is not necessarily desirable or unavoidable. Words controlling scope matter too: some, many, and all make substantially different commitments even when the rest of the sentence is identical.",
        "examples": [
          "The practice is prevalent in this sample.",
          "A delay is likely, but not inevitable."
        ]
      },
      {
        "heading": "Revise an inflated paragraph",
        "text": "Write a short claim about a training programme using likely, then list what evidence would justify that judgement. Replace any accidental universal statement with a bounded one. Compare plausible and conclusive in your revision and explain why the available observation supports one strength rather than the other.",
        "examples": [
          "The pilot makes a benefit plausible; it does not establish that all teams will improve.",
          "Most respondents reported progress, rather than all employees."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which word suggests an explanation is reasonable without settling the issue?",
        "options": [
          "Conclusive",
          "Inevitable",
          "Unavoidable",
          "Plausible"
        ],
        "answer": 3,
        "explanation": "Plausible indicates credible possibility, leaving room for alternative explanations."
      },
      {
        "prompt": "What does prevalent describe?",
        "options": [
          "How widespread something is",
          "Whether it is morally right",
          "Whether it cannot be avoided",
          "Whether it has been causally proved"
        ],
        "answer": 0,
        "explanation": "Prevalent concerns frequency or spread, not desirability or necessity."
      },
      {
        "prompt": "Which statement makes the weakest commitment?",
        "options": [
          "Every participant will benefit.",
          "Some participants may benefit.",
          "Benefit is inevitable for all.",
          "No participant can fail to benefit."
        ],
        "answer": 1,
        "explanation": "Some and may restrict both the group and the certainty of the claim."
      }
    ]
  },
  {
    "id": "c2-understatement-and-politeness",
    "level": "c2",
    "skill": "vocabulary",
    "title": "Interpret understatement with care",
    "description": "Read softened criticism without inventing a hidden message.",
    "minutes": 22,
    "content": [
      {
        "heading": "Recognize a possible interpersonal function",
        "text": "Understatement deliberately expresses less intensity than a situation might suggest. “The timetable is a little ambitious” may soften a concern that the schedule is unrealistic. Interpretation depends on context, relationship, and delivery. Do not assume a polite phrase always has one secret meaning or that a cultural stereotype predicts every speaker.",
        "examples": [
          "That may be difficult by Friday.",
          "I have a few reservations about the proposed sequence."
        ]
      },
      {
        "heading": "Check an inference against evidence",
        "text": "A softened objection becomes clearer when it is followed by a reason, condition, or alternative. “We still need approval” is a concrete constraint. If the implication matters, ask a neutral clarification question instead of acting on a guess. Distinguish recognizing indirectness from attributing hostility that the speaker has not expressed.",
        "examples": [
          "Do you mean Friday is unlikely, or that you need another resource?",
          "Would Monday be a more workable date?"
        ]
      },
      {
        "heading": "Practise both sides of a repair",
        "text": "Role-play a colleague expressing concern indirectly, then a listener checking the intended action. Make the final agreement explicit so politeness does not leave responsibility unclear. Repeat with a direct but respectful version and compare which wording suits an urgent operational decision.",
        "examples": [
          "Indirect concern: The scope is rather broad for one week.",
          "Confirmed action: We will reduce the first release to two features."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "“The timetable is a little ambitious” may function as what?",
        "options": [
          "A guaranteed promise to meet it",
          "A declaration that no work is required",
          "A softened concern about feasibility",
          "Proof of personal hostility"
        ],
        "answer": 2,
        "explanation": "In the right context, the phrase raises a feasibility concern indirectly; context is still needed."
      },
      {
        "prompt": "What is the best response when the practical implication is unclear?",
        "options": [
          "Assume the colleague secretly hates the project.",
          "Treat the phrase as unconditional agreement.",
          "Ignore the concern because it is polite.",
          "Ask whether the date is unlikely and what change would help."
        ],
        "answer": 3,
        "explanation": "A clarification question checks the inference and moves toward an actionable understanding."
      },
      {
        "prompt": "Why make the final agreement explicit?",
        "options": [
          "Polite indirectness can otherwise leave action and responsibility unclear.",
          "Indirect speech has no meaning.",
          "Every speaker uses the same code.",
          "Explicit actions prevent all future changes."
        ],
        "answer": 0,
        "explanation": "An explicit agreement establishes what people will do while preserving respectful tone."
      }
    ]
  },
  {
    "id": "c2-metaphor-and-framing",
    "level": "c2",
    "skill": "vocabulary",
    "title": "Notice how metaphors frame an issue",
    "description": "Compare useful images with their hidden assumptions.",
    "minutes": 22,
    "content": [
      {
        "heading": "A metaphor highlights selected features",
        "text": "Calling a policy a safety net emphasizes protection against a fall; calling it a springboard emphasizes movement toward opportunity. Both images can be useful, but neither describes every feature of the policy. Ask what the image draws attention to and what it makes easier to overlook.",
        "examples": [
          "A safety net highlights protection.",
          "A springboard highlights a route toward further action."
        ]
      },
      {
        "heading": "Avoid treating an image as proof",
        "text": "A metaphor organizes thought; it is not evidence that the comparison holds in every respect. Language describing a debate as a battle may imply winners and losers where cooperation is possible. In analytical writing, explain the literal claim and assess that claim using relevant information.",
        "examples": [
          "The initiative is a bridge between training and employment.",
          "Literal question: Does it help participants move into suitable work?"
        ]
      },
      {
        "heading": "Reframe and test the consequence",
        "text": "Choose an education policy and describe it with two different images. Write the practical assumptions each image invites. Then produce a neutral explanation that names the actual mechanism and intended outcome. Compare which details disappear when your description relies entirely on the image.",
        "examples": [
          "A ladder suggests upward stages; a network suggests several possible routes.",
          "The programme offers different entry points rather than one compulsory sequence."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What aspect does the metaphor safety net foreground?",
        "options": [
          "Guaranteed upward promotion",
          "Protection against a harmful fall or setback",
          "The exact cost of a policy",
          "Proof that every participant benefits equally"
        ],
        "answer": 1,
        "explanation": "The image emphasizes support when someone faces a setback."
      },
      {
        "prompt": "Why is a metaphor insufficient as evidence?",
        "options": [
          "Metaphors cannot communicate ideas.",
          "All figurative language is ungrammatical.",
          "An image selects a comparison but does not establish its factual accuracy.",
          "An image automatically includes every mechanism."
        ],
        "answer": 2,
        "explanation": "The literal claim still needs relevant evidence beyond the persuasive comparison."
      },
      {
        "prompt": "Which literal question tests “a bridge between training and employment”?",
        "options": [
          "What colour is the imaginary bridge?",
          "Are all classrooms made from concrete?",
          "How can every other policy be ignored?",
          "Does the initiative help participants move into suitable work?"
        ],
        "answer": 3,
        "explanation": "The question translates the image into the intended mechanism and outcome."
      }
    ]
  },
  {
    "id": "c2-reading-category-error",
    "level": "c2",
    "skill": "reading",
    "title": "Detect a misleading comparison",
    "description": "Check units, group composition, and the level of a conclusion.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: the efficiency league table",
        "text": "A magazine ranked community clinics by the average time spent with each visitor. The clinic with the shortest appointments was labelled the most efficient. Its director welcomed the attention but questioned the comparison. Her clinic handled many routine vaccinations, while another served people with several long-term conditions. A short appointment could reflect a straightforward task rather than better organization. Conversely, a longer consultation might prevent repeated visits, a benefit the table did not measure. The magazine replied that readers wanted a simple guide and that appointment length was at least easy to compare. Simplicity, the director argued, did not solve the mismatch between the measure and the judgement. She proposed reporting several indicators, including follow-up needs and patient understanding, with explanations of the services each clinic provided. The issue was not whether time mattered, but whether one average could fairly rank unlike activities.",
        "examples": [
          "Measured indicator: average appointment duration.",
          "Unmeasured possibilities: task complexity and prevented repeat visits."
        ]
      },
      {
        "heading": "Inspect the comparison before the ranking",
        "text": "A common unit does not guarantee comparable underlying tasks. Identify what the metric measures directly and what the label most efficient adds. The passage supplies reasons why appointment length may vary, but it does not prove that any particular clinic is better or worse overall.",
        "examples": [
          "Shorter average time can reflect simpler appointments.",
          "A routine vaccination and a complex consultation may require different time."
        ]
      },
      {
        "heading": "Write a bounded evaluation",
        "text": "State the strongest conclusion the table supports and one conclusion it cannot support by itself. Then propose an additional indicator and explain why it matters. Avoid reversing the magazine’s mistake by assuming that longer appointments always demonstrate better care.",
        "examples": [
          "The table compares duration; a fair efficiency judgement requires further context.",
          "Lower follow-up demand could be relevant to an overall efficiency judgement."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the director’s main objection?",
        "options": [
          "The ranking treats unlike activities as though one time average captured efficiency.",
          "The ranking does not account for the absolute number of staff at each clinic.",
          "The magazine should rank clinics only by patient satisfaction instead.",
          "Long consultations are necessarily more efficient than short ones."
        ],
        "answer": 0,
        "explanation": "The director challenges the match between the measure and an overall efficiency ranking across different services."
      },
      {
        "prompt": "Which possible benefit of longer consultations is absent from the table?",
        "options": [
          "Reducing the complexity of the patients’ existing conditions",
          "Avoiding repeated visits",
          "Improving the accuracy of the magazine’s attendance count",
          "Guaranteeing that every patient understands the consultation"
        ],
        "answer": 1,
        "explanation": "The passage explicitly notes that a longer consultation might prevent repeated visits."
      },
      {
        "prompt": "Which conclusion would repeat the same oversimplification in reverse?",
        "options": [
          "The services included in each average differ.",
          "Time is relevant but cannot capture every consequence.",
          "The clinic with the longest appointments must be the best.",
          "Additional indicators could improve the comparison."
        ],
        "answer": 2,
        "explanation": "Assuming longest is best still turns one incomplete measure into an overall judgement."
      }
    ]
  },
  {
    "id": "c2-reading-qualified-counterargument",
    "level": "c2",
    "skill": "reading",
    "title": "Follow a counterargument precisely",
    "description": "Distinguish rejecting a principle from limiting its application.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: open meetings",
        "text": "Publishing every committee discussion sounds like an uncomplicated victory for accountability. Citizens should certainly be able to inspect decisions that affect them, and secrecy can protect poor judgement. Yet a public record of every preliminary remark may encourage participants to arrive with rehearsed positions and avoid exploring uncertain alternatives. That possibility does not justify private decision-making as a general rule. It suggests a distinction between the evidence and reasons that must accompany a final decision and the provisional conversation through which those reasons develop. Any limited private session would need a stated purpose, an expiry point, and a subsequent explanation of what was decided. Otherwise, the exception could swallow the principle. The choice is therefore not between total exposure and unreviewable secrecy. It is between arrangements that make power answerable while allowing thought to develop, and arrangements that fail one of those responsibilities.",
        "examples": [
          "The writer endorses accountability.",
          "The proposed exception includes purpose, expiry, and later explanation."
        ]
      },
      {
        "heading": "Track the boundary words",
        "text": "Certainly concedes an important principle, while yet introduces a complication. The warning that an exception could swallow the principle limits the writer’s own proposal. Follow the full sequence before assigning a position. A counterargument can refine a principle’s implementation rather than reject the principle itself.",
        "examples": [
          "Private exploration is not presented as permission for unreviewable decisions.",
          "A stated expiry point prevents an exception from becoming indefinite."
        ]
      },
      {
        "heading": "Test a faithful paraphrase",
        "text": "Write a summary that includes both accountability and the danger of rehearsed discussion. Name two safeguards attached to any private session. Then test your summary against an extreme alternative: would a reader mistakenly think the writer supports permanent secrecy or publication of every tentative comment?",
        "examples": [
          "The writer proposes limited space for exploration under explicit accountability safeguards.",
          "The passage rejects both unreviewable secrecy and an unqualified exposure rule."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What principle does the writer retain?",
        "options": [
          "Every preliminary remark should remain private indefinitely.",
          "Preliminary conversations and final decisions require identical publication rules.",
          "The public should inspect final choices only when committees volunteer reasons.",
          "Public power must remain accountable."
        ],
        "answer": 3,
        "explanation": "The passage explicitly supports inspection of decisions and requires explanations and safeguards."
      },
      {
        "prompt": "What concern motivates a limited exception?",
        "options": [
          "Total exposure may discourage uncertain exploration and encourage rehearsed positions.",
          "Public records are inherently less accurate than private recollections.",
          "Publication prevents citizens from understanding the final decision.",
          "Uncertain ideas cannot be explained in a later public account."
        ],
        "answer": 0,
        "explanation": "The concern is about how unrestricted publication might shape preliminary discussion."
      },
      {
        "prompt": "What does “the exception could swallow the principle” warn against?",
        "options": [
          "Any private exploration is automatically equivalent to permanent secrecy.",
          "A limited permission expanding until it undermines accountability",
          "A later explanation can replace the need for any stated limit.",
          "An expiry point would make preliminary discussion impossible."
        ],
        "answer": 1,
        "explanation": "The metaphor warns that an exception without controls could defeat the broader rule it qualifies."
      }
    ]
  },
  {
    "id": "c2-reading-rhetorical-synthesis",
    "level": "c2",
    "skill": "reading",
    "title": "Read rhetoric and evidence together",
    "description": "Separate an attractive conclusion from the support it receives.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: the smart city slogan",
        "text": "The city’s campaign calls its sensor network “a listening city.” The phrase is appealing: traffic signals adapt, water leaks are flagged, and waste collections follow measured demand. Such systems can improve services, but listening usually implies more than detecting a signal. Residents may tell officials that a quiet street needs a crossing even when few recorded journeys reveal the need. A parent who avoids the route because it feels unsafe leaves little traffic data behind. The campaign’s metaphor risks treating measured activity as the whole public voice. This does not make the sensors useless, nor does a personal account automatically outweigh every measurement. It means that officials must examine what each kind of evidence can reveal and what it can miss. A city listens more fully when it creates ways for unrecorded needs to enter a decision, rather than merely giving its devices a sympathetic name.",
        "examples": [
          "Sensor data describe detected activity.",
          "Avoided routes can conceal unmet needs."
        ]
      },
      {
        "heading": "Identify the rhetorical target",
        "text": "The writer questions the completeness suggested by a slogan while accepting potential practical benefits. Distinguish criticism of a framing device from rejection of the technology. The parent example introduces missing activity: absence from the data may reflect avoidance rather than lack of need.",
        "examples": [
          "The criticism concerns equating measurement with the entire public voice.",
          "The writer accepts service benefits while challenging the slogan’s completeness."
        ]
      },
      {
        "heading": "Synthesize the evidence principle",
        "text": "Write a two-sentence conclusion explaining why both measurements and accounts matter. Preserve the statement that neither form automatically outranks the other. For advanced reading practice, identify the sentence that prevents a simplistic pro-technology or anti-technology interpretation.",
        "examples": [
          "Different evidence can reveal different aspects of a public need.",
          "A personal account can reveal avoidance that low traffic counts leave unexplained."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does the avoided-route example demonstrate?",
        "options": [
          "Traffic counts are irrelevant to the decision about a crossing.",
          "Personal accounts always provide a more reliable measure than devices.",
          "Recorded activity may miss a need suppressed by unsafe conditions.",
          "Low traffic establishes that residents have no interest in the route."
        ],
        "answer": 2,
        "explanation": "Avoidance reduces recorded journeys, so low traffic may conceal demand for a safer crossing."
      },
      {
        "prompt": "Which position accurately represents the writer?",
        "options": [
          "Treat personal accounts as decisive whenever they conflict with measurements.",
          "Let measured activity determine priorities before hearing about unrecorded needs.",
          "Use the network’s practical benefits to validate the campaign’s full claim.",
          "Assess the strengths and limits of both measurements and personal accounts."
        ],
        "answer": 3,
        "explanation": "The passage explicitly rejects automatically privileging either source."
      },
      {
        "prompt": "What is the main objection to “a listening city”?",
        "options": [
          "The metaphor may imply that detected activity captures the full public voice.",
          "It suggests that the network has already failed to improve basic services.",
          "It gives residents more confidence than any practical improvements could justify.",
          "It implies that individual accounts should replace technical measurements."
        ],
        "answer": 0,
        "explanation": "The criticism targets the metaphor’s implication of comprehensive representation."
      }
    ]
  },
  {
    "id": "c2-listening-claim-boundaries",
    "level": "c2",
    "skill": "listening",
    "title": "Listen for an argument’s exact boundary",
    "description": "Separate a direct benefit from a broader unsupported conclusion.",
    "minutes": 22,
    "content": [
      {
        "heading": "Identify two different propositions",
        "text": "The extract separates a travel claim from a collaboration claim. Before listening, create one line for each and leave room for qualifications. A benefit established for one outcome cannot automatically justify a conclusion about another. Listen for first, second, and broader, which announce the structure of the argument.",
        "examples": [
          "Reduced travel concerns a journey avoided.",
          "Improved collaboration concerns how people work together."
        ]
      },
      {
        "heading": "Follow the narrowed explanation",
        "text": "The speaker contrasts established and newly formed teams, then distinguishes communication norms from connection quality. Keep those distinctions separate in your notes. A proposed remedy is not a reported successful result, so label suggestions as suggestions rather than recording them as proven solutions.",
        "examples": [
          "Shared norms may matter even with excellent connections.",
          "Structured introductions are proposed remedies, not tested results here."
        ]
      },
      {
        "heading": "Paraphrase the final position",
        "text": "After listening, summarize the speaker’s judgement with a bounded sentence about matching format to circumstances. Include one group difference and one proposed adaptation. Check whether you accidentally converted an interview finding into a universal requirement for face-to-face meetings. Replay the closing qualification to verify the scope.",
        "examples": [
          "Choose the format according to the task and team relationships.",
          "An established team’s routine task may differ from a new team’s exploratory work."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which claim does the speaker treat as broader than reduced travel?",
        "options": [
          "Remote attendance reduces travel for people who would otherwise commute.",
          "Video meetings necessarily improve collaboration.",
          "Established teams can sometimes manage routine coordination online.",
          "New teams may need explicit guidance about communication norms."
        ],
        "answer": 1,
        "explanation": "The speaker explicitly labels the necessary improvement in collaboration as the broader second claim."
      },
      {
        "prompt": "What difficulty did newly formed teams report?",
        "options": [
          "Lacking a reliable connection even after technical support",
          "Completing established routines without a shared agenda",
          "Knowing when to ask informal questions",
          "Choosing a meeting location that reduced commuting time"
        ],
        "answer": 2,
        "explanation": "The interviews concern informal communication norms, not simply connection quality."
      },
      {
        "prompt": "What is the speaker’s final recommendation?",
        "options": [
          "Give new teams face-to-face meetings for all work until they become established.",
          "Prefer remote formats whenever they reduce commuting.",
          "Choose a standard format and solve collaboration differences through equipment.",
          "Match meeting format to the work and relationships involved."
        ],
        "answer": 3,
        "explanation": "The conclusion is conditional and contextual, preserving the distinction between outcomes."
      }
    ],
    "listeningText": "Let me distinguish two claims that have become tangled in this debate. The first is that remote meetings reduce travel. For staff who would otherwise commute to a meeting, that is straightforward. The second is that replacing meetings with video necessarily improves collaboration. That is a much broader claim. Our interviews suggest that established teams often manage routine coordination effectively online. Newly formed teams, however, described difficulty knowing when to ask informal questions. Notice that this is not simply a complaint about poor video quality. Several participants had excellent connections but lacked a shared understanding of how to interrupt or seek help. We should not conclude that new teams must always meet in person. A structured introduction, explicit communication norms, and designated informal contact could address part of the problem. My argument is narrower: decisions about meeting format should reflect the work and the relationships involved, rather than treating reduced travel as evidence that every aspect of collaboration has improved."
  },
  {
    "id": "c2-listening-pragmatic-repair",
    "level": "c2",
    "skill": "listening",
    "title": "Listen to a definition being repaired",
    "description": "Hear a speaker preserve an achievement while challenging its label.",
    "minutes": 22,
    "content": [
      {
        "heading": "Listen for a contested term",
        "text": "The speaker begins by redefining the disagreement around success. Note which outcomes count under the narrow definition and which costs it excludes. A speaker can accept recorded achievements while challenging the conclusion drawn from them; do not treat every objection as a denial of the figures.",
        "examples": [
          "Narrow achievement: on-time opening and higher-than-estimated attendance.",
          "Broader evaluation: include the permanent staff’s additional workload."
        ]
      },
      {
        "heading": "Distinguish denial from qualification",
        "text": "The speaker explicitly rejects two interpretations of the objection. Such repair sequences clarify intended meaning after a potential misunderstanding. Write down what is accepted, what is missing, and what should change in a future proposal. Notice the difference between exceptional effort and a sustainable routine.",
        "examples": [
          "Accepted: the exhibition happened and attracted visitors.",
          "Missing: the workload cost of the delivery method."
        ]
      },
      {
        "heading": "Formulate the implied evaluation question",
        "text": "After listening, explain why the speaker wants a broader evaluation. Then draft a neutral question a chair could ask to move the discussion forward. Preserve both the achievement and the concern, rather than choosing one side of an invented opposition between visitors and staff.",
        "examples": [
          "Can we repeat the result within a reasonable staffing plan?",
          "What staffing resources would allow the next exhibition to use the same schedule?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What does the speaker accept?",
        "options": [
          "The exhibition opened on time and exceeded the visitor estimate.",
          "The original staffing plan was adequate for the installation.",
          "The attendance outcome validates the entire delivery method.",
          "The project’s achievements remove the need to review staffing."
        ],
        "answer": 0,
        "explanation": "The recording explicitly preserves the on-time opening and strong attendance."
      },
      {
        "prompt": "Which cost is missing from the headline figures?",
        "options": [
          "The full cost of hiring the temporary installation team",
          "Permanent staff working extra evenings without usual recovery time",
          "A lower visitor count than the headline estimate suggested",
          "The cost of postponing the exhibition to meet recovery needs"
        ],
        "answer": 1,
        "explanation": "The concern is an uncounted workload cost, not falsified attendance."
      },
      {
        "prompt": "Why could unqualified success language be risky?",
        "options": [
          "It would make the reported attendance figures unreliable.",
          "It could imply that the exhibition offered no public benefit.",
          "It may normalize reliance on exceptional staff effort.",
          "It would require the next exhibition to use exactly the same budget."
        ],
        "answer": 2,
        "explanation": "The speaker warns that extraordinary effort could become the default expectation without being planned or acknowledged."
      }
    ],
    "listeningText": "I am not sure we are disagreeing about the result so much as the word success. If success means delivering the exhibition by the announced date, then yes, the project succeeded. The doors opened on time, and visitor numbers exceeded the initial estimate. But the budget assumed that temporary staff could cover the final installation. In practice, permanent staff worked several evenings without their usual recovery time. That cost is absent from the headline figures. I am not suggesting that the visitor numbers are false, or that the exhibition should not have happened. I am suggesting that the next proposal should make the staffing requirement visible before approval. If we continue to describe this delivery method as successful without qualification, we may quietly make exceptional effort the normal expectation. A fuller evaluation would preserve the achievement while asking whether the same approach can be repeated without depending on people repeatedly exceeding a reasonable workload."
  },
  {
    "id": "c2-listening-evidence-synthesis",
    "level": "c2",
    "skill": "listening",
    "title": "Integrate different kinds of evidence",
    "description": "Hear the value and limits of observations in the same argument.",
    "minutes": 22,
    "content": [
      {
        "heading": "Separate enthusiasm from attribution",
        "text": "The speaker reports positive early indicators, then identifies why attributing all improvement to the programme would be difficult. Record both the observed change and the selection issue. Volunteer groups may differ before an intervention, so an apparent gain does not automatically isolate the effect of the materials.",
        "examples": [
          "Indicators: more borrowing and livelier discussion.",
          "Selection issue: volunteer classes with already active teachers."
        ]
      },
      {
        "heading": "Avoid a false evidence hierarchy",
        "text": "The absence of a controlled experiment does not make every interview useless. The speaker assigns teacher accounts a different role: understanding use and engagement. Listen for nor, which rejects an overly dismissive conclusion, and combine, which signals a proposed relationship between evidence sources.",
        "examples": [
          "Teacher accounts can illuminate implementation.",
          "A broader comparison could strengthen evaluation of the effect."
        ]
      },
      {
        "heading": "Write a balanced research brief",
        "text": "Summarize the evidence in three notes: an encouraging observation, a limit on attribution, and a useful next measure. Check that you distinguish borrowing from sustained reading. Then state the speaker’s overall attitude without reducing it to either unconditional celebration or complete rejection.",
        "examples": [
          "Measure whether increased borrowing is followed by sustained reading.",
          "Encouraging indicators justify further investigation, not an automatic universal claim."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why is the current comparison limited?",
        "options": [
          "The comparison excluded all classes with existing reading activities.",
          "The volunteering teachers used different measures from the other teachers.",
          "The borrowing records show that the programme began after the gains.",
          "The classes volunteered and teachers were already developing reading activities."
        ],
        "answer": 3,
        "explanation": "Pre-existing motivation and activity could contribute to the reported difference."
      },
      {
        "prompt": "What useful role does the speaker give teacher accounts?",
        "options": [
          "Explaining how materials were used and what pupils found engaging",
          "Establishing the programme’s independent effect on reading",
          "Showing that all pupils read every book they borrowed",
          "Demonstrating that a broader comparison would add no insight"
        ],
        "answer": 0,
        "explanation": "The accounts provide implementation insight, without settling causal attribution."
      },
      {
        "prompt": "Which next measure does the speaker propose?",
        "options": [
          "Whether enthusiastic teachers can be removed from the accounts",
          "Whether borrowing develops into sustained reading",
          "Whether borrowing figures alone justify a full rollout",
          "Whether interview reports can be replaced by a single borrowing total"
        ],
        "answer": 1,
        "explanation": "The speaker explicitly distinguishes a checked-out book from evidence of sustained reading."
      }
    ],
    "listeningText": "There is a tempting story in which the new reading programme transforms the whole school. The early figures look encouraging: the participating classes borrowed more books and teachers reported livelier discussion. However, the classes volunteered for the pilot, and their teachers had already been developing reading activities. We cannot tell from this comparison how much improvement belongs to the programme itself. Nor should we dismiss the teachers’ accounts simply because they are not a controlled experiment. Those accounts help us understand how the materials were used and what pupils found engaging. The next stage should combine those insights with a broader comparison, including classes that did not volunteer initially. We should also examine whether increased borrowing leads to sustained reading rather than assuming that a checked-out book has been read. What I am resisting is the demand to choose between celebration and rejection before we have asked a more useful set of questions about the evidence."
  },
  {
    "id": "c2-writing-policy-brief",
    "level": "c2",
    "skill": "writing",
    "title": "Write a decision brief with honest limits",
    "description": "Connect a recommendation to evidence, alternatives, and conditions.",
    "minutes": 22,
    "content": [
      {
        "heading": "Lead with the decision required",
        "text": "A brief serves a reader who must choose an action. State the decision, your recommendation, and the principal reason early. Supply only the context needed to understand that choice. A long introduction can conceal the practical question, while a recommendation without a rationale asks the reader to trust the writer blindly.",
        "examples": [
          "Decision: extend the pilot now or after an additional trial.",
          "Recommendation: extend to two more branches before a full rollout."
        ]
      },
      {
        "heading": "Expose the trade-off",
        "text": "Compare realistic alternatives using the same criteria, such as cost, access, and implementation effort. Distinguish observed results from assumptions and estimates. Explain what would change your recommendation, especially when a major unknown affects the decision. Precision includes making uncertainty usable rather than hiding it beneath confident language.",
        "examples": [
          "A wider trial costs more now but tests whether the result transfers.",
          "The attendance gain is observed; the staffing estimate remains provisional."
        ]
      },
      {
        "heading": "Draft an actionable conclusion",
        "text": "Use a fictional service pilot to write a short brief containing a recommendation, two supporting observations, a serious alternative, and a review condition. Give the proposed action an owner or decision point when appropriate. Revise any sentence that sounds persuasive but supplies no evidence or practical implication.",
        "examples": [
          "Review demand and staffing after the additional trial before committing to all branches.",
          "Assign the trial review to the service lead before deciding on full expansion."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What belongs near the beginning of a decision brief?",
        "options": [
          "A full history unrelated to the choice",
          "Every raw observation in collection order",
          "The decision required and a reasoned recommendation",
          "Only an inspiring quotation"
        ],
        "answer": 2,
        "explanation": "A decision-maker needs to understand the proposed choice and its main rationale quickly."
      },
      {
        "prompt": "Why compare alternatives using the same criteria?",
        "options": [
          "To guarantee all options receive identical scores",
          "To avoid mentioning costs",
          "To conceal a preferred option",
          "To make the trade-offs assessable on a consistent basis"
        ],
        "answer": 3,
        "explanation": "Consistent criteria allow the reader to judge meaningful differences rather than incompatible descriptions."
      },
      {
        "prompt": "Which sentence makes uncertainty useful?",
        "options": [
          "If staffing costs exceed the estimate, limit expansion and review the model.",
          "Everything will certainly work.",
          "There are uncertainties somewhere.",
          "No observation could change this decision."
        ],
        "answer": 0,
        "explanation": "The sentence connects an uncertain condition with a practical response."
      }
    ]
  },
  {
    "id": "c2-writing-editing-logic",
    "level": "c2",
    "skill": "writing",
    "title": "Edit for scope, logic, and reference",
    "description": "Find meaning errors that a spelling check cannot catch.",
    "minutes": 22,
    "content": [
      {
        "heading": "Check what each claim commits you to",
        "text": "A grammatically correct sentence can still overstate its evidence. Check quantifiers, causal verbs, and comparisons before polishing style. “The trial improved every outcome” requires much broader support than “Scores improved on the measured task.” Ask whether the sentence describes the study or a larger population, and whether that extension is justified.",
        "examples": [
          "Some respondents preferred the new system.",
          "The survey does not establish that all users preferred it."
        ]
      },
      {
        "heading": "Resolve reference and comparison",
        "text": "Pronouns such as this and they save words but can conceal an unclear referent. Comparisons need a recoverable like-for-like relationship: comparing costs with a manager is mismatched. Ordinary shortened forms such as lower than last year can be understood in context, but restoring the omitted noun may help readers. Rebuild a sentence when its underlying relationships are unclear.",
        "examples": [
          "This year’s costs were lower than last year’s costs.",
          "The revised policy, rather than the old procedure, caused confusion."
        ]
      },
      {
        "heading": "Use separate revision passes",
        "text": "Take one paragraph and first audit claims against evidence. Next check references and comparisons. Finally reduce repetition and improve rhythm. Separate passes help you notice meaning problems that become invisible when you only look for spelling. Keep an earlier version so you can explain which revision changed accuracy and which changed presentation.",
        "examples": [
          "Replace “This proves success” with the specific observed result and its limit.",
          "Replace an unclear this with the name of the result or policy it describes."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which claim requires evidence about the entire group?",
        "options": [
          "Some respondents preferred it.",
          "All users preferred the new system.",
          "Three interviewees liked it.",
          "The measured task score rose in the pilot."
        ],
        "answer": 1,
        "explanation": "All users is universal, unlike a claim limited to respondents or a measured outcome."
      },
      {
        "prompt": "Which comparison is parallel?",
        "options": [
          "This year’s costs are lower than the finance manager.",
          "The report is shorter than yesterday as a period.",
          "This year’s costs are lower than last year’s costs.",
          "The annual cost is cheaper than the support department."
        ],
        "answer": 2,
        "explanation": "Both sides of the correct answer explicitly compare costs. The other options mismatch an amount with a person, an object with a time, or a cost with a department."
      },
      {
        "prompt": "Why separate revision passes?",
        "options": [
          "It guarantees no factual checking is needed.",
          "It removes the need to read the paragraph.",
          "It makes all long sentences incorrect.",
          "Each pass can focus attention on a different kind of problem."
        ],
        "answer": 3,
        "explanation": "Distinct passes help identify scope, reference, and style issues without treating them as interchangeable."
      }
    ]
  },
  {
    "id": "c2-writing-audience-transfer",
    "level": "c2",
    "skill": "writing",
    "title": "Translate specialist writing for the public",
    "description": "Preserve the finding while changing terminology and emphasis.",
    "minutes": 22,
    "content": [
      {
        "heading": "Identify the irreducible meaning",
        "text": "Before simplifying a technical paragraph, identify its finding, population, uncertainty, and practical relevance. These are meaning-bearing elements, not optional complexity. A public explanation can use familiar words while preserving the difference between an association and a cause, or between a small sample and an entire population.",
        "examples": [
          "Technical: the sample may not be representative.",
          "Public: the people studied may not reflect the wider group."
        ]
      },
      {
        "heading": "Explain a term by its role",
        "text": "Keep a specialist term only when the reader needs it, then explain what it does in the argument. An example can clarify an abstract mechanism, but avoid an analogy that introduces a misleading certainty. Lead with what the audience needs to understand, rather than reproducing the original order of methods and definitions.",
        "examples": [
          "A comparison group helps show what might have happened without the change.",
          "An estimate gives a reasoned value, not an exact count."
        ]
      },
      {
        "heading": "Create two versions and audit them",
        "text": "Write a technical summary of a fictional survey, then a public version for a community newsletter. Compare each sentence for lost limitations, changed numbers, or invented advice. Ask whether a non-specialist could explain the finding back accurately without remembering the specialist vocabulary. Revise where accessibility has come at the expense of meaning.",
        "examples": [
          "Surveyed residents reported shorter journeys; the survey alone cannot show the redesign caused them.",
          "The survey covered one district, so the finding may not describe the whole city."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What must a public rewrite preserve?",
        "options": [
          "The finding and important limits on its meaning",
          "Every specialist word regardless of need",
          "The exact original sentence order",
          "Only the most exciting possible implication"
        ],
        "answer": 0,
        "explanation": "A change in audience justifies presentation changes, while accuracy requires preserving findings and qualifications."
      },
      {
        "prompt": "Which explanation of an estimate is most accurate?",
        "options": [
          "A number known to be perfect",
          "A reasoned approximate value rather than an exact count",
          "A meaningless random guess in every case",
          "A guaranteed minimum in all contexts"
        ],
        "answer": 1,
        "explanation": "An estimate is an informed approximation; its precision depends on the method and context."
      },
      {
        "prompt": "Which public summary avoids turning association into causation?",
        "options": [
          "The survey proves the redesign caused every change.",
          "All journeys everywhere are now shorter.",
          "Residents reported shorter journeys, but the survey alone cannot establish the cause.",
          "No further explanation could possibly matter."
        ],
        "answer": 2,
        "explanation": "The answer reports the observation and preserves the limit of the survey design."
      }
    ]
  },
  {
    "id": "c2-speaking-challenging-premise",
    "level": "c2",
    "skill": "speaking",
    "title": "Answer a question with a flawed premise",
    "description": "Clarify the assumption, then give a direct useful response.",
    "minutes": 22,
    "content": [
      {
        "heading": "Hear the assumption inside the question",
        "text": "A question can assume something that has not been established. “Why did the programme fail?” presupposes failure, even if some outcomes improved. Briefly clarify that assumption before answering the useful underlying issue. Avoid using clarification as a way to evade a reasonable request for judgement.",
        "examples": [
          "If by failure you mean low attendance, that was a concern; satisfaction was stronger.",
          "Before comparing the options, I would separate cost from reliability."
        ]
      },
      {
        "heading": "Replace a false choice with criteria",
        "text": "Some questions offer only two options when several approaches are possible. Explain the criterion that makes the distinction meaningful, then state your position. A nuanced answer still needs direction. Excessive qualification can obscure a judgement as easily as excessive certainty can distort it.",
        "examples": [
          "I would not choose between access and quality without considering a minimum standard for both.",
          "I support wider access provided that the service meets an agreed quality threshold."
        ]
      },
      {
        "heading": "Practise a firm but respectful reply",
        "text": "Record an answer to “Why should every class replace teachers with software?” Identify the unsupported universal premise, propose a more useful question, and give a clear view. Replay it to check that you responded to educational use rather than simply criticizing the wording. End with one practical condition.",
        "examples": [
          "Software may support practice, while teachers remain important for feedback and judgement.",
          "The useful question is which tasks software can support effectively."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is assumed by “Why did the programme fail”?",
        "options": [
          "That all outcomes are unknown",
          "That success has been clearly defined by both speakers",
          "That no evaluation exists",
          "That the programme failed"
        ],
        "answer": 3,
        "explanation": "The question embeds failure as a premise before asking for a reason."
      },
      {
        "prompt": "Which response both clarifies and answers?",
        "options": [
          "Attendance was low, although satisfaction improved; I would revise access arrangements first.",
          "Your wording is imperfect, so I refuse to answer.",
          "Everything depends on everything.",
          "Failure means failure and nothing else."
        ],
        "answer": 0,
        "explanation": "The reply qualifies the premise and gives a practical judgement."
      },
      {
        "prompt": "What should follow identifying a false choice?",
        "options": [
          "An unrelated story",
          "A useful criterion and a clear position",
          "A refusal to discuss any option",
          "An indefinite series of hedges"
        ],
        "answer": 1,
        "explanation": "Clarification serves the answer when it leads to a reasoned decision rather than replacing it."
      }
    ]
  },
  {
    "id": "c2-speaking-explain-complexity",
    "level": "c2",
    "skill": "speaking",
    "title": "Explain a complex idea at two depths",
    "description": "Offer a clear core explanation, then adapt to follow-up questions.",
    "minutes": 22,
    "content": [
      {
        "heading": "Give the core before the detail",
        "text": "When explaining a complex idea, begin with a brief statement of what it is and why it matters. Then offer one mechanism or example. A listener can ask for greater depth once the core is stable. Starting with every exception can make even accurate information difficult to follow.",
        "examples": [
          "A comparison group helps us judge what might have happened without the programme.",
          "It provides a reference point, rather than a perfect duplicate of the participants."
        ]
      },
      {
        "heading": "Make examples accountable",
        "text": "An analogy is useful when its similarity supports the intended point. State where the analogy stops if a difference matters. Check understanding with an open question rather than a routine do you understand, which may invite a polite yes. Let the answer guide the amount and vocabulary of the next explanation.",
        "examples": [
          "Which part would you like me to unpack?",
          "The comparison is useful, but the two groups are not identical people."
        ]
      },
      {
        "heading": "Practise layered explanation",
        "text": "Explain sampling to a younger learner in a few sentences, then explain the same issue to a colleague who asks about representativeness. Preserve the meaning while changing detail. Record both versions and check whether each has a clear core, a useful example, and an honest limitation.",
        "examples": [
          "A sample is a smaller group we study; it may not reflect everyone we want to understand.",
          "A specialist may also ask how the sample was selected and who was excluded."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What should usually come before technical exceptions?",
        "options": [
          "Every rare term in the field",
          "An assumption that the audience already knows the method",
          "A clear core explanation of the idea and its relevance",
          "A list of unrelated caveats"
        ],
        "answer": 2,
        "explanation": "A stable core gives listeners a structure into which later details can fit."
      },
      {
        "prompt": "Which question best invites a useful understanding check?",
        "options": [
          "You understand everything, yes?",
          "There is nothing confusing, correct?",
          "Can we assume no questions exist?",
          "How would you describe the comparison in your own words?"
        ],
        "answer": 3,
        "explanation": "An open response reveals the listener’s interpretation instead of encouraging a polite yes."
      },
      {
        "prompt": "What changes across explanations for different audiences?",
        "options": [
          "Vocabulary and level of detail while the underlying meaning remains accurate",
          "The result whenever it is inconvenient",
          "The uncertainty into certainty",
          "The facts into a more entertaining story"
        ],
        "answer": 0,
        "explanation": "Audience adaptation changes presentation while preserving the claim and its limits."
      }
    ]
  },
  {
    "id": "c2-speaking-diplomatic-synthesis",
    "level": "c2",
    "skill": "speaking",
    "title": "Summarize disagreement into a decision",
    "description": "Represent competing views fairly and identify the next question.",
    "minutes": 22,
    "content": [
      {
        "heading": "Summarize interests before positions",
        "text": "A useful chair distinguishes what participants want to protect from the action they initially propose. One person may request delay to protect quality, while another seeks speed to meet a public commitment. Naming those interests fairly can reveal options that a simple vote on delay would miss.",
        "examples": [
          "We agree on the service goal; we differ over how much testing must precede release.",
          "One group wants a reliable release; another needs a credible public timetable."
        ]
      },
      {
        "heading": "Keep attribution and agreement distinct",
        "text": "When summarizing, say who holds a view and invite correction if necessary. Do not announce consensus merely because nobody interrupts. Identify unresolved issues and check the actual decision separately from the reasons people offered. A fair synthesis should be recognizable to participants who disagree with your preferred outcome.",
        "examples": [
          "Have I captured your concern accurately?",
          "We have agreed on testing criteria, but not yet on the release date."
        ]
      },
      {
        "heading": "Practise a closing turn",
        "text": "Role-play a discussion about releasing a new service. Give each side a legitimate concern, then record a closing turn that states common ground, the unresolved issue, and one next action with an owner. Use a short pause before the action so listeners can distinguish the discussion summary from the commitment.",
        "examples": [
          "Sam will estimate the remaining test work, and we will review the date tomorrow.",
          "The date remains open until Sam reports the remaining work."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is an interest behind a request to delay?",
        "options": [
          "The word delay itself",
          "Protecting quality before release",
          "A requirement that every project stop",
          "An automatic dislike of colleagues"
        ],
        "answer": 1,
        "explanation": "An interest is the underlying concern or goal that a proposed action serves."
      },
      {
        "prompt": "Why invite correction of a summary?",
        "options": [
          "To imply no decision can ever occur",
          "To force everyone to agree with the chair",
          "To check that competing views have been represented accurately",
          "To replace the action plan with repetition"
        ],
        "answer": 2,
        "explanation": "A summary supports progress when participants recognize their views in it."
      },
      {
        "prompt": "Which closing turn supplies a concrete next action?",
        "options": [
          "There were many interesting opinions.",
          "We should do something sometime.",
          "Everyone probably agrees about everything.",
          "Sam will estimate remaining test work before tomorrow’s review."
        ],
        "answer": 3,
        "explanation": "The statement names an owner, task, and decision point."
      }
    ]
  },
  {
    "id": "biz-grammar",
    "level": "biz",
    "skill": "grammar",
    "title": "Professional Correspondence",
    "description": "Master the tone and structure of formal business emails.",
    "minutes": 15,
    "content": [
      {
        "heading": "Formal vs Informal Tone",
        "text": "In business, the tone depends on your relationship with the reader. Use \"Dear [Name]\" for formal first contacts and \"Hi [Name]\" for established colleagues. Avoid contractions like \"don’t\" or \"can’t\" in high-level formal reports, but use them in internal team emails to sound natural.",
        "examples": [
          "Formal: I would appreciate it if you could respond.",
          "Informal: Let me know what you think.",
          "Semi-formal: Could you please check the file?"
        ]
      },
      {
        "heading": "The Structure of a Request",
        "text": "A professional request follows a clear path: Greeting → Context → The Request → Call to Action → Closing. Be direct but polite. Use modal verbs like \"could\" and \"would\" to soften requests so they do not sound like orders.",
        "examples": [
          "I am writing to follow up on...",
          "Would it be possible to reschedule?",
          "I look forward to hearing from you."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which greeting is most appropriate for a first-time formal email to a CEO?",
        "options": [
          "Hey there!",
          "Dear Mr. Smith,",
          "Hi Smith,",
          "To whom it may concern (without a name)"
        ],
        "answer": 1,
        "explanation": "Dear [Title] [Surname] is the standard for formal first contacts."
      },
      {
        "prompt": "Change this to be more professional: “Send me the report now.”",
        "options": [
          "I need the report now.",
          "Could you please send me the report at your earliest convenience?",
          "Send the report, please.",
          "Give me the report quickly."
        ],
        "answer": 1,
        "explanation": "Using “Could you please” and “at your earliest convenience” creates a polite, professional request."
      },
      {
        "prompt": "Which closing is best for a formal business letter?",
        "options": [
          "Cheers,",
          "See ya,",
          "Sincerely,",
          "Besties,"
        ],
        "answer": 2,
        "explanation": "Sincerely or Yours faithfully are the standard formal closings."
      }
    ]
  },
  {
    "id": "biz-speaking",
    "level": "biz",
    "skill": "speaking",
    "title": "Effective Meeting Leadership",
    "description": "Manage discussions, interrupt politely, and summarize agreements.",
    "minutes": 18,
    "content": [
      {
        "heading": "Opening and Setting the Agenda",
        "text": "A good meeting starts with a clear purpose. Use \"signposting\" phrases to tell listeners where the conversation is going. Instead of just starting, say \"The goal of today’s meeting is to...\" or \"First, we will look at...\". This keeps the team focused and professional.",
        "examples": [
          "Our main objective today is...",
          "I’ve divided the agenda into three parts.",
          "Let’s start by reviewing the previous minutes."
        ]
      },
      {
        "heading": "Polite Interruption and Steering",
        "text": "In a meeting, you may need to stop someone or move the topic. Use \"softeners\" to avoid sounding rude. Phrases like \"If I could just jump in here\" or \"That’s a great point, but moving back to the main topic...\" allow you to maintain control while respecting others.",
        "examples": [
          "Sorry to interrupt, but...",
          "Could we just clarify one point before moving on?",
          "I think we’ve covered this; let’s move to the next item."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the best way to start a meeting professionally?",
        "options": [
          "Why are we here?",
          "Let’s just start talking.",
          "The goal of today’s meeting is to decide on the budget.",
          "Stop talking and listen to me."
        ],
        "answer": 2,
        "explanation": "Clearly stating the objective (goal) sets a professional tone."
      },
      {
        "prompt": "How do you politely interrupt a colleague who is talking too long?",
        "options": [
          "Stop talking now.",
          "Sorry to interrupt, but could we just clarify this point?",
          "Wait your turn.",
          "Be quiet, please."
        ],
        "answer": 1,
        "explanation": "Apologizing first and asking to clarify is a professional way to steer the conversation."
      },
      {
        "prompt": "Which phrase is used for “signposting” the agenda?",
        "options": [
          "I am tired.",
          "The weather is nice.",
          "First, we will review the results, then we will discuss the plan.",
          "I don’t like this plan."
        ],
        "answer": 2,
        "explanation": "Signposting tells the listener the sequence of events (First... then...)."
      }
    ]
  },
  {
    "id": "biz-writing",
    "level": "biz",
    "skill": "writing",
    "title": "Writing a Project Proposal",
    "description": "Structure a persuasive business case with a clear ROI.",
    "minutes": 22,
    "content": [
      {
        "heading": "The Executive Summary",
        "text": "The most important part of a proposal is the summary. Busy managers often read only this section. It must contain the Problem, the Solution, and the Result (ROI - Return on Investment). Keep it to one page and use bullet points for key benefits to make it scannable.",
        "examples": [
          "Problem: Current shipping costs are too high.",
          "Solution: Switch to a regional logistics partner.",
          "Result: Estimated 15% reduction in monthly costs."
        ]
      },
      {
        "heading": "Justifying the Cost",
        "text": "Do not just ask for money; explain why it is an investment. Use data-driven language, but ensure numerical claims are supported by evidence or stated assumptions. Distinguish measured pilot results from realistic estimates and unsupported promises. Instead of vague opinions (\"It will be much better\") or unbacked promises (\"Sales will double\"), use evidence-based projections: \"Based on our two-week pilot, we estimate a 20% gain in processing efficiency.\" Contrast the cost of the solution with the risk of doing nothing (the cost of inaction).",
        "examples": [
          "Investment: £5,000 for order-processing software.",
          "Gain: Estimated 10 hours of saved labor per week, based on our team's two-week pilot trial.",
          "Risk of inaction: Continued manual data errors costing approximately £1,200 each quarter in refunds."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What is the primary purpose of an Executive Summary?",
        "options": [
          "To list every single detail of the project.",
          "To provide a high-level overview of the problem, solution, and result.",
          "To introduce the team members.",
          "To explain the history of the company."
        ],
        "answer": 1,
        "explanation": "The summary is for busy decision-makers to see the core value quickly."
      },
      {
        "prompt": "Which statement is more persuasive in a proposal?",
        "options": [
          "This software is really good and we like it.",
          "Based on our two-week pilot, we estimate the software will reduce manual entry errors by 30%.",
          "We think the software might help us.",
          "The software is very expensive but nice."
        ],
        "answer": 1,
        "explanation": "Numerical claims are most persuasive when supported by evidence or stated assumptions (such as pilot results), rather than unsupported promises or subjective opinions."
      },
      {
        "prompt": "What does “ROI” stand for in a business context?",
        "options": [
          "Return on Investment",
          "Rate of Interest",
          "Real Opportunity Index",
          "Return of Income"
        ],
        "answer": 0,
        "explanation": "Return on Investment measures the gain or loss generated on an investment relative to the amount of money invested."
      }
    ]
  },
  {
    "id": "biz-conditional-commitments",
    "level": "biz",
    "skill": "grammar",
    "title": "Make commitments and conditions explicit",
    "description": "Distinguish an offer, a possibility, a requirement, and a promise.",
    "minutes": 22,
    "content": [
      {
        "heading": "Name the strength of a commitment",
        "text": "Workplace language often depends on how certain a commitment is. We will deliver states a commitment; we expect to deliver expresses a current expectation; we could deliver describes a possibility. Choose the form that reflects your authority and evidence. A polite modal should not accidentally hide an essential requirement.",
        "examples": [
          "We expect to finish on Friday, pending the review.",
          "We will confirm the date after the review."
        ]
      },
      {
        "heading": "Attach a clear condition",
        "text": "Use if, provided that, or subject to when an offer depends on an event. Put the condition close to the commitment and state who must act. Unless means if not, so check its logic carefully. Avoid adding several negative conditions that a busy reader could misinterpret.",
        "examples": [
          "We can include training provided that the group is confirmed by Monday.",
          "The date remains provisional unless the supplier confirms capacity."
        ]
      },
      {
        "heading": "Practise a responsible update",
        "text": "Rewrite an optimistic update about a delivery whose final approval is still missing. State what is complete, what remains uncertain, and when you will provide a confirmed answer. Read it as the recipient and check whether an expectation could reasonably be mistaken for a guarantee.",
        "examples": [
          "The materials are ready; dispatch awaits approval.",
          "I will send the confirmed schedule after tomorrow’s review."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence expresses an expectation rather than a firm promise?",
        "options": [
          "We expect to finish on Friday.",
          "We guarantee completion on Friday.",
          "We will definitely finish on Friday.",
          "Completion on Friday is assured."
        ],
        "answer": 0,
        "explanation": "Expect expresses a current forecast, whereas guarantee and assured signal a stronger commitment."
      },
      {
        "prompt": "“We can include training provided that the group is confirmed” means what?",
        "options": [
          "Training is included regardless of confirmation.",
          "Training depends on confirmation of the group.",
          "Confirmation must never happen.",
          "Training has already taken place."
        ],
        "answer": 1,
        "explanation": "Provided that introduces the condition attached to the offer."
      },
      {
        "prompt": "Which update most clearly identifies an unresolved dependency?",
        "options": [
          "Everything is basically fine.",
          "There may be some stuff somewhere.",
          "Materials are ready; dispatch awaits approval.",
          "It will certainly ship despite missing approval."
        ],
        "answer": 2,
        "explanation": "The update separates completed work from the approval required before dispatch."
      }
    ]
  },
  {
    "id": "biz-operational-vocabulary",
    "level": "biz",
    "skill": "vocabulary",
    "title": "Describe capacity, bottlenecks, and scope",
    "description": "Use practical operations vocabulary without hiding the action.",
    "minutes": 22,
    "content": [
      {
        "heading": "Name the constraint accurately",
        "text": "Capacity is the amount of work a team or system can handle in a given period. A bottleneck is a stage that limits the flow of the wider process. A backlog is unfinished work waiting to be dealt with. These are connected ideas, but they identify different features and require different responses.",
        "examples": [
          "The team has capacity for twelve reviews a week.",
          "Approval is the bottleneck, and the backlog now contains eighteen requests."
        ]
      },
      {
        "heading": "Separate scope from schedule",
        "text": "Scope describes what a project includes; schedule describes when activities happen. A dependency is something another task relies on. A deliverable is an agreed output. Adding scope without revising capacity or timing can create an unrealistic plan, so use these nouns to make the practical relationship visible.",
        "examples": [
          "The new dashboard is outside the agreed scope.",
          "Testing depends on access to the completed sample file."
        ]
      },
      {
        "heading": "Turn jargon into an update",
        "text": "Write a project update using capacity, dependency, and deliverable. For each term, add a concrete fact that helps a colleague act. Then rewrite the same update without specialist nouns. If the plain version is impossible to produce, you may not yet have identified the actual situation clearly.",
        "examples": [
          "We can review twelve files; the client must supply the sample first.",
          "Our agreed output is a checked sample and a short error report."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which term identifies a stage restricting the flow of a whole process?",
        "options": [
          "Deliverable",
          "Scope",
          "Schedule",
          "Bottleneck"
        ],
        "answer": 3,
        "explanation": "A bottleneck constrains throughput, even if other stages could handle more work."
      },
      {
        "prompt": "Adding a new output to a project primarily changes what?",
        "options": [
          "Scope",
          "Only the spelling of the title",
          "The meaning of yesterday",
          "The identity of every stakeholder"
        ],
        "answer": 0,
        "explanation": "Scope defines what work or outputs are included; adding one changes that boundary."
      },
      {
        "prompt": "Which update makes a dependency concrete?",
        "options": [
          "Testing has a dependency somewhere.",
          "Testing can start after the client supplies the sample file.",
          "There are strategic synergies.",
          "The process is very operational."
        ],
        "answer": 1,
        "explanation": "The statement identifies the required input and the task that depends on it."
      }
    ]
  },
  {
    "id": "biz-meeting-status-language",
    "level": "biz",
    "skill": "vocabulary",
    "title": "Report status without vague jargon",
    "description": "Distinguish proposals, decisions, actions, and unresolved items.",
    "minutes": 22,
    "content": [
      {
        "heading": "Keep the meeting categories separate",
        "text": "A proposal is an idea offered for consideration; a decision is an agreed choice; an action item is a task assigned for follow-up. A concern can remain unresolved even after a related decision. Accurate minutes record which category each statement belongs to instead of turning every suggestion into an agreement.",
        "examples": [
          "Proposal: trial a shorter review form.",
          "Decision: run the trial with one team next week."
        ]
      },
      {
        "heading": "Use ownership and status precisely",
        "text": "An owner is the person responsible for progressing an action. Pending means awaiting something; deferred means deliberately postponed; approved means accepted through the relevant process. These labels need context. Pending approval does not mean rejected, and deferred does not necessarily mean cancelled. Add the dependency or new decision point.",
        "examples": [
          "Pending: Jo is waiting for the supplier’s response.",
          "Deferred: the equipment choice returns at Friday’s meeting."
        ]
      },
      {
        "heading": "Write minutes that enable follow-up",
        "text": "Take a fictional discussion and produce three lines: one decision, one action with an owner and date, and one unresolved issue. Ask whether a colleague absent from the meeting could tell what to do next. Replace labels such as in progress with a concrete description where they hide the important dependency.",
        "examples": [
          "Action: Nima will circulate two options by Thursday.",
          "Open issue: the team has not yet agreed the support hours."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "A suggestion discussed but not accepted should be recorded as what?",
        "options": [
          "An approved decision",
          "A completed action",
          "A proposal",
          "A final rejection in every case"
        ],
        "answer": 2,
        "explanation": "Discussion alone does not convert a suggestion into an agreement."
      },
      {
        "prompt": "What does pending approval mean?",
        "options": [
          "Already rejected",
          "Definitely cancelled",
          "Approved without conditions",
          "Waiting for approval"
        ],
        "answer": 3,
        "explanation": "Pending identifies an unresolved status; it does not establish the eventual result."
      },
      {
        "prompt": "Which action item is easiest to follow up?",
        "options": [
          "Nima will circulate two options by Thursday.",
          "Options are relevant.",
          "Someone should do something soon.",
          "A strategic conversation occurred."
        ],
        "answer": 0,
        "explanation": "The item names an owner, a task, and a time for completion."
      }
    ]
  },
  {
    "id": "biz-reading-supplier-options",
    "level": "biz",
    "skill": "reading",
    "title": "Read an offer and its conditions",
    "description": "Compare total requirements rather than a headline price.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: two workshop offers",
        "text": "The training team needs a workshop for twenty staff on 14 June. Offer A quotes £900 for an onsite session, including printed materials for up to twenty people. The organization must provide the room and projector. The date is held until 30 April, after which availability must be checked again. Offer B quotes £760 for an online session for up to twenty-five people. A recording is included, but optional printed packs cost £8 per participant. The presenter is unavailable on 14 June and offers 16 June instead. Both offers include a planning call and require confirmation before materials are prepared. The manager has asked for a comparison of cost, date, format, and required equipment. No decision has been made about whether changing the date or moving online would be acceptable.",
        "examples": [
          "A matches the requested date and onsite format.",
          "B has a lower base price but offers a different date."
        ]
      },
      {
        "heading": "Check constraints before ranking price",
        "text": "A cheaper quotation is not automatically the best fit. Identify essential requirements and distinguish them from preferences that could change. Calculate optional costs only when the option is actually wanted, and keep stated inclusions separate from assumptions about equipment, travel, or availability.",
        "examples": [
          "Twenty printed packs for B would add £160.",
          "A requires the organization to supply a room and projector."
        ]
      },
      {
        "heading": "Create a decision-ready comparison",
        "text": "Write a short recommendation with one conditional branch: what would you recommend if the date is fixed, and what could change if an online session on 16 June is acceptable? Include the hold deadline for A. Do not invent cancellation terms or assume the manager has accepted a changed date.",
        "examples": [
          "If 14 June is fixed, A is the offer matching that requirement.",
          "If the date and format can change, compare B with the desired optional packs included."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which offer explicitly matches the requested date?",
        "options": [
          "Offer B",
          "Offer A",
          "Both offers",
          "Neither offer"
        ],
        "answer": 1,
        "explanation": "A holds 14 June; B’s presenter offers 16 June instead."
      },
      {
        "prompt": "What would B cost with printed packs for all twenty staff?",
        "options": [
          "£760",
          "£900",
          "£920",
          "£1,000"
        ],
        "answer": 2,
        "explanation": "Twenty packs at £8 add £160 to the £760 base quotation, giving £920."
      },
      {
        "prompt": "What happens after 30 April under Offer A?",
        "options": [
          "The price automatically doubles.",
          "The workshop is definitely cancelled.",
          "Printed materials become free for unlimited attendees.",
          "Availability must be checked again."
        ],
        "answer": 3,
        "explanation": "The date hold expires, but the passage does not establish automatic cancellation or a price change."
      }
    ]
  },
  {
    "id": "biz-reading-project-report",
    "level": "biz",
    "skill": "reading",
    "title": "Read a project report for the next action",
    "description": "Separate completed work from a risk and a requested decision.",
    "minutes": 22,
    "content": [
      {
        "heading": "Original passage: project update",
        "text": "The client portal’s login and document-upload features passed the team’s internal checks on Tuesday. External accessibility testing is scheduled for next week and has not yet begun. The support guide is drafted, but the screenshots must be replaced after the final interface review. A supplier has warned that the optional reporting module may arrive a week later than expected. The core portal does not depend on that module, although the sales demonstration currently includes it. The project lead recommends keeping the core testing schedule and preparing a demonstration that works without the optional module. She requests a decision from sales by Thursday on whether to use that version or move the demonstration. The report does not recommend a public release date until the external test results have been considered.",
        "examples": [
          "Completed: internal checks for login and upload.",
          "Unresolved: external testing and the demonstration choice."
        ]
      },
      {
        "heading": "Identify the decision boundary",
        "text": "A report may contain achievements, dependencies, risks, and recommendations in one paragraph. Label each before summarizing. Passing internal checks does not establish that all review is complete, and a delayed optional feature does not automatically delay the core product. Follow the actual dependencies rather than the emotional weight of the warning.",
        "examples": [
          "Core testing can continue without the optional module.",
          "The sales demonstration needs a separate decision."
        ]
      },
      {
        "heading": "Write a concise response",
        "text": "Draft a reply from sales that selects one demonstration option, confirms who will update the plan, and acknowledges the pending external review. Avoid announcing a public release date unsupported by the report. Check that your answer addresses the decision requested rather than merely congratulating the team on progress.",
        "examples": [
          "Sales will use the core-only demonstration and update the script by Thursday.",
          "We will await the external test results before discussing a public release commitment."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which work is already complete?",
        "options": [
          "Internal checks on login and upload",
          "External accessibility testing",
          "Final screenshots after the interface review",
          "A confirmed public release date"
        ],
        "answer": 0,
        "explanation": "The report states that internal checks passed, while the other items remain pending or unconfirmed."
      },
      {
        "prompt": "What does the delayed optional module directly affect?",
        "options": [
          "The existence of the login feature",
          "The current sales demonstration plan",
          "The ability to perform any core testing",
          "The date on which internal checks occurred"
        ],
        "answer": 1,
        "explanation": "The core portal does not depend on the module, but the planned demonstration includes it."
      },
      {
        "prompt": "What decision does the project lead request by Thursday?",
        "options": [
          "Cancel external testing.",
          "Commit publicly to immediate release.",
          "Use a core-only demonstration or move the demonstration.",
          "Discard the support guide permanently."
        ],
        "answer": 2,
        "explanation": "The report explicitly offers those two demonstration options for sales to decide."
      }
    ]
  },
  {
    "id": "biz-listening-negotiation",
    "level": "biz",
    "skill": "listening",
    "title": "Listen to a conditional negotiation",
    "description": "Hear the limit, the trade-off, and the commitment the speaker can make.",
    "minutes": 22,
    "content": [
      {
        "heading": "Identify the constraint and the interest",
        "text": "A negotiation can reject an offer while recognizing its value. Listen for the hard constraint, the benefit acknowledged, and the alternative requested. Here the speaker separates a budget limit from a desire for reliable support, creating room to alter the package instead of arguing only about the price.",
        "examples": [
          "Constraint: the quoted total exceeds the approved budget.",
          "Interest: access to reliable help during the first week."
        ]
      },
      {
        "heading": "Separate an offer from authority",
        "text": "The speaker can take a revised quotation to a manager but cannot promise approval. Note the conditional exchange: a limited support arrangement and clear first-phase price would enable a review. Listening accurately requires preserving that authority boundary, rather than hearing a polite willingness to review as acceptance.",
        "examples": [
          "Requested change: phase the service and review support later.",
          "Promise made: a prompt review, rather than approval."
        ]
      },
      {
        "heading": "Practise the supplier’s response",
        "text": "After listening, draft a short supplier reply that confirms the proposed scope, asks one clarification question, and avoids treating the discussion as a signed agreement. Then role-play a follow-up negotiation using your own fictional service. Keep the essential first-week contact separate from the larger support package.",
        "examples": [
          "We will price setup, training, and a named first-week contact separately.",
          "How many users should the first-phase quotation cover?"
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Why can the speaker not accept the current offer?",
        "options": [
          "The supplier refuses to provide setup.",
          "Training has already been cancelled.",
          "The manager has forbidden any review.",
          "Its total exceeds the approved budget."
        ],
        "answer": 3,
        "explanation": "The opening explicitly identifies the budget limit."
      },
      {
        "prompt": "Which service does the speaker say must remain?",
        "options": [
          "A named contact during the first week",
          "The full monthly package forever",
          "Unlimited support with no user limit",
          "An immediate public announcement"
        ],
        "answer": 0,
        "explanation": "The speaker calls removal of all initial support an unmanageable risk."
      },
      {
        "prompt": "What does the speaker actually promise?",
        "options": [
          "Guaranteed approval that day",
          "A prompt review of a revised offer",
          "Acceptance of the full package",
          "Payment before seeing the revised price"
        ],
        "answer": 1,
        "explanation": "The speaker explicitly distinguishes the promise of review from authority to approve."
      }
    ],
    "listeningText": "Thanks for explaining the revised quotation. The total is still above the budget we have approval to use, so I cannot accept it as it stands. I do see why the additional support adds value. Could we separate the initial setup from the monthly support package? If we keep setup and staff training in the first phase, we could review the support level after a month of use. That would let us understand our actual needs before committing to the larger package. We would need a named contact during the first week, though; removing all support would create a risk we cannot manage. If you can provide that limited contact and a clear price for the first phase, I can take the revised offer to our manager tomorrow. I am not promising approval today, but I can promise a prompt review. Please include any assumptions about the number of users so we are comparing the same service."
  },
  {
    "id": "biz-listening-client-handover",
    "level": "biz",
    "skill": "listening",
    "title": "Listen to an account handover",
    "description": "Track scope, deadlines, and who owns each follow-up.",
    "minutes": 22,
    "content": [
      {
        "heading": "Create separate status notes",
        "text": "A handover mixes approvals, new requests, and next steps. Make headings for approved scope, requested change, update time, and ownership before playing the recording. Listen for does not include and rather than, which prevent a request from being mistaken for an agreed addition.",
        "examples": [
          "Approved: the design.",
          "Requested but not automatically included: the data-export feature."
        ]
      },
      {
        "heading": "Preserve conditional timing",
        "text": "The speaker asks for an estimate before the scheduled update if engineering can complete it. If not, the client still needs an explanation of outstanding questions. Distinguish this conditional task from a promise that engineering will finish. Record training confirmation as a separate dependency with a different owner.",
        "examples": [
          "Wednesday morning is the next scheduled client update.",
          "Training is reserved, but attendees remain unconfirmed."
        ]
      },
      {
        "heading": "Confirm the handover aloud",
        "text": "Record a reply restating the action you own and the task the previous account contact retains. Include what you will communicate if the estimate is incomplete. This confirmation checks the practical meaning of the handover and reduces duplicate requests without needing to repeat every sentence in the recording.",
        "examples": [
          "I will follow up the estimate; you will confirm the training names.",
          "If the estimate is not ready, I will explain the remaining questions."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "What did the client’s design approval exclude?",
        "options": [
          "All existing design work",
          "The reserved training room in every case",
          "The new data-export feature",
          "The next scheduled update"
        ],
        "answer": 2,
        "explanation": "The speaker explicitly says the new export request is outside that approval."
      },
      {
        "prompt": "If engineering cannot finish the estimate before the update, what should happen?",
        "options": [
          "Say nothing until after launch.",
          "Treat the feature as automatically included.",
          "Invent a price immediately.",
          "Explain the remaining questions to the client."
        ],
        "answer": 3,
        "explanation": "The conditional instruction requires an informative update even when the estimate is incomplete."
      },
      {
        "prompt": "Who retains responsibility for checking training names?",
        "options": [
          "The speaker handing over the account",
          "The client’s entire engineering team",
          "The new contact exclusively",
          "An unnamed supplier"
        ],
        "answer": 0,
        "explanation": "The speaker says I will remain responsible, while asking the new contact to own the estimate follow-up."
      }
    ],
    "listeningText": "Before I hand the account over, there are three details to keep separate. The client approved the design yesterday, but that approval does not include the new data-export feature. They requested that feature during the call, and I said we would estimate the work rather than include it automatically. Our next scheduled update is Wednesday morning. Please send the client the estimate before then if engineering can complete it, or explain the remaining questions if they cannot. The client also mentioned that two staff members need training before the launch. We have reserved a session, but they have not confirmed the attendees. I will forward the invitation and the design approval after this call. Could you confirm that you will own the estimate follow-up? I will remain responsible for checking the training names, so the client does not receive duplicate requests. We should both update the shared account notes after making contact."
  },
  {
    "id": "biz-writing-recommendation-report",
    "level": "biz",
    "skill": "writing",
    "title": "Write a clear recommendation report",
    "description": "Use findings, comparisons, and an evidence-backed next step.",
    "minutes": 22,
    "content": [
      {
        "heading": "Separate finding from recommendation",
        "text": "A finding reports what you observed; a recommendation proposes what to do. Link them explicitly, but avoid treating a plausible explanation as an established cause. A short report can use a purpose statement, selected findings, comparison of options, and a recommendation without repeating all the raw data.",
        "examples": [
          "Finding: six of ten test users could not locate the upload button.",
          "Recommendation: revise the label and test the change with new users."
        ]
      },
      {
        "heading": "Make comparisons fair",
        "text": "Compare options using criteria relevant to the decision, such as effort, usability, and ongoing support. Show whether values are measured or estimated. A precise-looking figure does not make an estimate certain. Include a limitation when it could change the recommendation, and explain a practical review rather than leaving the uncertainty abstract.",
        "examples": [
          "Option A is estimated to need two days of work.",
          "The small test suggests a problem but may not represent all users."
        ]
      },
      {
        "heading": "Draft a report for a busy colleague",
        "text": "Using the fictional upload test, write a brief report that presents the finding, compares changing the label with redesigning the full page, and recommends a next step. State what further testing would check. Read the recommendation alone and ensure it names an action rather than merely calling for improvement.",
        "examples": [
          "First test a clearer label before committing to a complete page redesign.",
          "Review task completion with new users after the revised label is introduced."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which sentence is a finding?",
        "options": [
          "We should redesign every page immediately.",
          "Six of ten test users could not locate the upload button.",
          "Please allocate two developers next month.",
          "The team ought to change the label."
        ],
        "answer": 1,
        "explanation": "The sentence reports an observed result; the other options propose actions."
      },
      {
        "prompt": "Why label an effort figure as estimated?",
        "options": [
          "So it appears identical to a measured result",
          "So no one can question the plan",
          "So readers understand its uncertainty and basis",
          "So the report can omit every assumption"
        ],
        "answer": 2,
        "explanation": "An estimate supports planning while retaining uncertainty about the eventual value."
      },
      {
        "prompt": "Which recommendation follows the limited finding most cautiously?",
        "options": [
          "Replace every system without further review.",
          "Declare all users unable to use the website.",
          "Ignore the observed difficulty permanently.",
          "Test a clearer label before committing to a complete redesign."
        ],
        "answer": 3,
        "explanation": "A targeted trial addresses the observed problem while collecting evidence before a larger commitment."
      }
    ]
  },
  {
    "id": "biz-speaking-stakeholder-interview",
    "level": "biz",
    "skill": "speaking",
    "title": "Interview a stakeholder without leading them",
    "description": "Ask neutral questions, probe examples, and confirm the need.",
    "minutes": 22,
    "content": [
      {
        "heading": "Ask about a real experience",
        "text": "In a requirements interview, a neutral question elicits the stakeholder’s account rather than suggesting the desired answer. Ask about the last time they completed a task and what happened. A specific experience can reveal constraints that a broad question about ideal features misses. Avoid assuming your preferred solution is already necessary.",
        "examples": [
          "Tell me about the last time you submitted a support request.",
          "What happened after you sent the form?"
        ]
      },
      {
        "heading": "Probe the problem before the solution",
        "text": "A request for a new dashboard may reflect a need to know the status of a request. Ask what decision the information would support and what currently makes it difficult. Distinguish the person’s words from your interpretation. A follow-up should clarify the work, not pressure the stakeholder to praise your proposed feature.",
        "examples": [
          "What information were you missing at that point?",
          "How did that affect the next task you needed to do?"
        ]
      },
      {
        "heading": "Confirm a shared understanding",
        "text": "End by summarizing the need and checking it with the stakeholder. State an assumption as an assumption, and record unresolved questions rather than inventing agreement. Role-play both interviewer and stakeholder, using one concrete event, two neutral probes, and a final summary that avoids promising a feature before its feasibility is reviewed.",
        "examples": [
          "It sounds as though knowing who owns the request matters most. Is that accurate?",
          "We will examine options; I cannot yet confirm a new dashboard."
        ]
      }
    ],
    "questions": [
      {
        "prompt": "Which question is least leading?",
        "options": [
          "Tell me about the last time you checked a request’s status.",
          "Would our excellent dashboard solve all your problems?",
          "You want a new dashboard, do you not?",
          "Why is our proposed feature clearly necessary?"
        ],
        "answer": 0,
        "explanation": "The neutral question invites an account of experience without supplying the desired answer."
      },
      {
        "prompt": "A stakeholder asks for a dashboard. What should you explore first?",
        "options": [
          "How to promise immediate delivery",
          "The information need and the decision it would support",
          "Which colour to choose before understanding the task",
          "How to prevent follow-up questions"
        ],
        "answer": 1,
        "explanation": "Understanding the underlying need helps evaluate solutions rather than prematurely adopting one."
      },
      {
        "prompt": "Which closing summary checks understanding without overpromising?",
        "options": [
          "We guarantee a new dashboard tomorrow regardless of review.",
          "Your request is definitely the only possible solution.",
          "You need to see request ownership; is that accurate? We will review possible approaches.",
          "There are no unanswered questions because the interview ended."
        ],
        "answer": 2,
        "explanation": "The summary confirms the need while keeping solution and feasibility questions open."
      }
    ]
  }
];

export const PLACEMENT_QUESTIONS = [
  {
    "prompt": "Choose the correct sentence.",
    "options": [
      "Am a student I.",
      "I a student.",
      "I am a student.",
      "I is student."
    ],
    "answer": 2,
    "explanation": "Use I am to describe yourself."
  },
  {
    "prompt": "There are three ___ on the table.",
    "options": [
      "booking",
      "book",
      "bookes",
      "books"
    ],
    "answer": 3,
    "explanation": "After three, use the plural books."
  },
  {
    "prompt": "She ___ to school every morning.",
    "options": [
      "walks",
      "walk",
      "walking",
      "is walk"
    ],
    "answer": 0,
    "explanation": "The present simple takes s with she: walks."
  },
  {
    "prompt": "We ___ our grandparents last Sunday.",
    "options": [
      "visit",
      "have visit",
      "are visiting",
      "visited"
    ],
    "answer": 3,
    "explanation": "Last Sunday is a finished past time, so use visited."
  },
  {
    "prompt": "Choose the correct comparison.",
    "options": [
      "This bag is lighter than mine.",
      "This bag is lightest mine.",
      "This bag is lighter as mine.",
      "This bag is more light than mine."
    ],
    "answer": 0,
    "explanation": "Use lighter than to compare the weight of two bags."
  },
  {
    "prompt": "I ___ here since 2020, and I still live here.",
    "options": [
      "lived yesterday",
      "live",
      "am living",
      "have lived"
    ],
    "answer": 3,
    "explanation": "The present perfect with since connects a starting point in the past to now."
  },
  {
    "prompt": "If I finish my work early tomorrow, I ___ you.",
    "options": [
      "calling",
      "will call",
      "called",
      "would have called"
    ],
    "answer": 1,
    "explanation": "For a real future possibility, use if plus present simple and will plus base verb."
  },
  {
    "prompt": "The report ___ by two experts before it was published.",
    "options": [
      "had been reviewed",
      "has review",
      "had reviewing",
      "was review"
    ],
    "answer": 0,
    "explanation": "Had been reviewed is the past perfect passive: the review preceded publication."
  },
  {
    "prompt": "A study finds an association between two variables. What can it establish by itself?",
    "options": [
      "One must cause the other.",
      "The variables are related in the observed data.",
      "No other explanation exists.",
      "The relationship applies to every person."
    ],
    "answer": 1,
    "explanation": "An association alone does not establish causation or universal applicability."
  },
  {
    "prompt": "Choose the correct formal inversion.",
    "options": [
      "Only then she understood the problem.",
      "Only then understood she the problem.",
      "Only then did she understand the problem.",
      "Only then did she understood the problem."
    ],
    "answer": 2,
    "explanation": "Initial only then triggers auxiliary-subject inversion; after did, use understand."
  },
  {
    "prompt": "Which sentence links an unreal past event with a present consequence?",
    "options": [
      "If she calls tomorrow, I will answer.",
      "If she had called, I would have answered then.",
      "If she calls, answer politely.",
      "If she had accepted the post, she would be living abroad now."
    ],
    "answer": 3,
    "explanation": "The past perfect condition combines with a present imagined result: would be living now."
  },
  {
    "prompt": "An author says, “These findings are promising, though the sample is narrow.” Which paraphrase preserves the stance?",
    "options": [
      "The author rejects the findings entirely.",
      "The sample makes any observation impossible.",
      "The results are encouraging, but their wider applicability remains uncertain.",
      "The findings prove the theory for everyone."
    ],
    "answer": 2,
    "explanation": "The author expresses cautious optimism while limiting generalization."
  }
];

export const WORDS = [
  {
    "word": "hello",
    "meaning": "A greeting used when you meet someone or begin a conversation.",
    "example": "Hello, my name is Maya.",
    "level": "a0"
  },
  {
    "word": "student",
    "meaning": "A person who studies at a school, college, or in another learning setting.",
    "example": "I am an English student.",
    "level": "a0"
  },
  {
    "word": "friend",
    "meaning": "Someone you know well and like spending time with.",
    "example": "My friend and I read together.",
    "level": "a0"
  },
  {
    "word": "window",
    "meaning": "An opening with glass that lets light into a room.",
    "example": "Please open the window.",
    "level": "a0"
  },
  {
    "word": "key",
    "meaning": "A small object used to open a lock.",
    "example": "My key is in my bag.",
    "level": "a0"
  },
  {
    "word": "table",
    "meaning": "A piece of furniture with a flat top.",
    "example": "The book is on the table.",
    "level": "a0"
  },
  {
    "word": "shoe",
    "meaning": "Something you wear on a foot.",
    "example": "This shoe is black.",
    "level": "a0"
  },
  {
    "word": "shirt",
    "meaning": "A piece of clothing for the upper part of the body.",
    "example": "I have a blue shirt.",
    "level": "a0"
  },
  {
    "word": "red",
    "meaning": "The colour of a ripe tomato.",
    "example": "Her bag is red.",
    "level": "a0"
  },
  {
    "word": "hand",
    "meaning": "The body part at the end of your arm.",
    "example": "This is my left hand.",
    "level": "a0"
  },
  {
    "word": "feet",
    "meaning": "The plural of foot; the body parts you stand on.",
    "example": "My feet are cold.",
    "level": "a0"
  },
  {
    "word": "hungry",
    "meaning": "Wanting or needing food.",
    "example": "I am hungry after class.",
    "level": "a0"
  },
  {
    "word": "thirsty",
    "meaning": "Wanting or needing a drink.",
    "example": "He is thirsty and wants water.",
    "level": "a0"
  },
  {
    "word": "Monday",
    "meaning": "The day after Sunday and before Tuesday.",
    "example": "Our class is on Monday.",
    "level": "a0"
  },
  {
    "word": "today",
    "meaning": "The day that is happening now.",
    "example": "Today is Friday.",
    "level": "a0"
  },
  {
    "word": "under",
    "meaning": "In a position below something.",
    "example": "The bag is under the chair.",
    "level": "a0"
  },
  {
    "word": "near",
    "meaning": "A short distance away.",
    "example": "My home is near the school.",
    "level": "a0"
  },
  {
    "word": "please",
    "meaning": "A word used to make a request polite.",
    "example": "A pen, please.",
    "level": "a0"
  },
  {
    "word": "ready",
    "meaning": "Prepared to do something.",
    "example": "We are ready for class.",
    "level": "a0"
  },
  {
    "word": "usually",
    "meaning": "On most occasions; as a normal habit.",
    "example": "I usually study after breakfast.",
    "level": "a1"
  },
  {
    "word": "neighbourhood",
    "meaning": "The area around your home or a particular part of a town.",
    "example": "There is a library in my neighbourhood.",
    "level": "a1"
  },
  {
    "word": "borrow",
    "meaning": "To take and use something with permission, intending to return it.",
    "example": "May I borrow your pen for a minute?",
    "level": "a1"
  },
  {
    "word": "peel",
    "meaning": "To remove the outer skin of a fruit or vegetable.",
    "example": "Peel the banana before eating it.",
    "level": "a1"
  },
  {
    "word": "pour",
    "meaning": "To make a liquid flow into or out of a container.",
    "example": "Pour the water into a glass.",
    "level": "a1"
  },
  {
    "word": "stir",
    "meaning": "To move a spoon or similar tool around in a liquid or mixture.",
    "example": "Stir the soup with a spoon.",
    "level": "a1"
  },
  {
    "word": "cloudy",
    "meaning": "Having many clouds in the sky.",
    "example": "It is cloudy this morning.",
    "level": "a1"
  },
  {
    "word": "umbrella",
    "meaning": "An object held above you to protect you from rain.",
    "example": "Bring an umbrella because rain is expected.",
    "level": "a1"
  },
  {
    "word": "season",
    "meaning": "One of the periods into which a year is divided by weather or daylight patterns.",
    "example": "This is the wet season here.",
    "level": "a1"
  },
  {
    "word": "mechanic",
    "meaning": "A person whose work is repairing machines or vehicles.",
    "example": "A mechanic repaired our car.",
    "level": "a1"
  },
  {
    "word": "bakery",
    "meaning": "A place where bread and similar foods are made or sold.",
    "example": "I buy fresh bread at the bakery.",
    "level": "a1"
  },
  {
    "word": "patient",
    "meaning": "A person receiving care from a medical professional.",
    "example": "The nurse spoke to the patient.",
    "level": "a1"
  },
  {
    "word": "receptionist",
    "meaning": "A person who welcomes visitors and helps organize appointments.",
    "example": "The receptionist confirmed my haircut time.",
    "level": "a1"
  },
  {
    "word": "register",
    "meaning": "To put your name on an official list for an activity or service.",
    "example": "Please register before your first class.",
    "level": "a1"
  },
  {
    "word": "exchange",
    "meaning": "To give one thing and receive another in return.",
    "example": "We exchange books at the club.",
    "level": "a1"
  },
  {
    "word": "instead",
    "meaning": "In place of another person, thing, or action.",
    "example": "I cannot come on Friday; let us meet on Saturday instead.",
    "level": "a1"
  },
  {
    "word": "altogether",
    "meaning": "In total, after everything is included.",
    "example": "The fruit costs three pounds altogether.",
    "level": "a1"
  },
  {
    "word": "immediately",
    "meaning": "Without waiting; at once.",
    "example": "Serve the snack immediately.",
    "level": "a1"
  },
  {
    "word": "finally",
    "meaning": "After everything else; at the last step.",
    "example": "Finally, press Save.",
    "level": "a1"
  },
  {
    "word": "reservation",
    "meaning": "An arrangement to keep a seat, room, or table for someone.",
    "example": "I have a reservation for two nights.",
    "level": "a2"
  },
  {
    "word": "delayed",
    "meaning": "Happening or arriving later than planned.",
    "example": "Our train is delayed by twenty minutes.",
    "level": "a2"
  },
  {
    "word": "comfortable",
    "meaning": "Physically relaxed or free from discomfort.",
    "example": "This chair is more comfortable than that one.",
    "level": "a2"
  },
  {
    "word": "symptom",
    "meaning": "A physical or mental change that may indicate a health condition.",
    "example": "A cough can be a symptom of several different conditions.",
    "level": "a2"
  },
  {
    "word": "prescription",
    "meaning": "An authorized instruction for supplying a medicine.",
    "example": "The pharmacist checked the prescription.",
    "level": "a2"
  },
  {
    "word": "relieved",
    "meaning": "Feeling better because a worry or difficulty has ended.",
    "example": "I felt relieved when I found my keys.",
    "level": "a2"
  },
  {
    "word": "disappointed",
    "meaning": "Unhappy because something was not as good as you hoped.",
    "example": "She was disappointed when the concert was cancelled.",
    "level": "a2"
  },
  {
    "word": "annoying",
    "meaning": "Causing someone to feel slightly angry or bothered.",
    "example": "The repeated noise was annoying.",
    "level": "a2"
  },
  {
    "word": "helpful",
    "meaning": "Giving useful support or information.",
    "example": "The clear map was helpful.",
    "level": "a2"
  },
  {
    "word": "requirement",
    "meaning": "Something that is necessary or demanded by a rule.",
    "example": "Photo ID is a requirement for this hire service.",
    "level": "a2"
  },
  {
    "word": "proof",
    "meaning": "Information or material used to show that something is true.",
    "example": "New members need proof of their address.",
    "level": "a2"
  },
  {
    "word": "gloves",
    "meaning": "Clothing that covers the hands and usually has separate parts for the fingers.",
    "example": "The organizer provides gloves for the river clean-up.",
    "level": "a2"
  },
  {
    "word": "harvest",
    "meaning": "The act or time of collecting a crop that is ready to use.",
    "example": "The neighbours shared tomatoes at the first harvest.",
    "level": "a2"
  },
  {
    "word": "optional",
    "meaning": "Available to choose, but not required.",
    "example": "Breakfast is an optional extra.",
    "level": "a2"
  },
  {
    "word": "included",
    "meaning": "Provided as part of something, such as a price or service.",
    "example": "Parking is included in the cottage price.",
    "level": "a2"
  },
  {
    "word": "badge",
    "meaning": "A small sign or decoration attached to clothing or an object.",
    "example": "The backpack has a yellow star badge.",
    "level": "a2"
  },
  {
    "word": "rephrase",
    "meaning": "To express the same meaning using different words.",
    "example": "Could you rephrase the question more simply?",
    "level": "a2"
  },
  {
    "word": "clarify",
    "meaning": "To make a meaning or detail easier to understand.",
    "example": "Could you clarify whether breakfast is included?",
    "level": "a2"
  },
  {
    "word": "recommend",
    "meaning": "To suggest that someone or something is a good choice.",
    "example": "I recommend the indoor tables for a quiet conversation.",
    "level": "a2"
  },
  {
    "word": "deadline",
    "meaning": "The latest time or date by which something must be completed.",
    "example": "We need to meet the deadline on Friday.",
    "level": "b1"
  },
  {
    "word": "evidence",
    "meaning": "Information or observations that support a belief or conclusion.",
    "example": "Look for evidence before accepting the claim.",
    "level": "b1"
  },
  {
    "word": "responsibility",
    "meaning": "A duty to deal with something or be accountable for it.",
    "example": "She took responsibility for organizing the event.",
    "level": "b1"
  },
  {
    "word": "appointment",
    "meaning": "An arrangement to meet someone at a particular time.",
    "example": "I made an appointment with the course adviser.",
    "level": "b1"
  },
  {
    "word": "effort",
    "meaning": "The physical or mental energy used to do something.",
    "example": "She made an effort to learn every classmate’s name.",
    "level": "b1"
  },
  {
    "word": "postpone",
    "meaning": "To arrange for an event to happen at a later time.",
    "example": "We postponed the picnic because heavy rain was forecast.",
    "level": "b1"
  },
  {
    "word": "reliable",
    "meaning": "Able to be trusted to work well or behave as expected.",
    "example": "A reliable bus service helps people arrive on time.",
    "level": "b1"
  },
  {
    "word": "improvement",
    "meaning": "A change that makes something better.",
    "example": "There was a clear improvement in the organization of his essay.",
    "level": "b1"
  },
  {
    "word": "volunteer",
    "meaning": "A person who offers to do something without being forced and often without payment.",
    "example": "A volunteer checked the community fridge each morning.",
    "level": "b1"
  },
  {
    "word": "replacement",
    "meaning": "A person or thing that takes the place of another.",
    "example": "The shop sent a replacement for the damaged chair.",
    "level": "b1"
  },
  {
    "word": "refund",
    "meaning": "Money returned to someone after a purchase or payment.",
    "example": "I requested a refund because the class was cancelled.",
    "level": "b1"
  },
  {
    "word": "permission",
    "meaning": "Agreement that allows someone to do something.",
    "example": "Please ask permission before recording the discussion.",
    "level": "b1"
  },
  {
    "word": "confirm",
    "meaning": "To state that an arrangement or piece of information is correct or definite.",
    "example": "Could you confirm the meeting time by email?",
    "level": "b1"
  },
  {
    "word": "repair",
    "meaning": "To make a damaged or broken thing work properly again.",
    "example": "The volunteer helped repair my lamp.",
    "level": "b1"
  },
  {
    "word": "commitment",
    "meaning": "An agreed responsibility or promise to give time or effort.",
    "example": "The reading role requires a ten-week commitment.",
    "level": "b1"
  },
  {
    "word": "access",
    "meaning": "The ability or opportunity to enter a place or use something.",
    "example": "The plumber needs access to the pipes under the sink.",
    "level": "b1"
  },
  {
    "word": "label",
    "meaning": "A small piece of writing that identifies or describes something.",
    "example": "Write the preparation date on the food label.",
    "level": "b1"
  },
  {
    "word": "alternative",
    "meaning": "Another possible choice or course of action.",
    "example": "An online meeting is an alternative to travelling across town.",
    "level": "b1"
  },
  {
    "word": "accurate",
    "meaning": "Correct in its details and free from important errors.",
    "example": "Check that your order number is accurate before sending the email.",
    "level": "b1"
  },
  {
    "word": "significant",
    "meaning": "Important or large enough to deserve attention in a particular context.",
    "example": "The new timetable made a significant difference to commuters.",
    "level": "b2"
  },
  {
    "word": "qualification",
    "meaning": "A detail that limits or modifies a claim; also a credential showing training.",
    "example": "The speaker added a qualification: the trial involved only one team.",
    "level": "b2"
  },
  {
    "word": "provisional",
    "meaning": "Temporary or arranged for now, and subject to later confirmation.",
    "example": "The release date is provisional until the review is complete.",
    "level": "b2"
  },
  {
    "word": "constraint",
    "meaning": "A limit or condition that restricts what can be done.",
    "example": "The last bus home was the main constraint on her course choice.",
    "level": "b2"
  },
  {
    "word": "compromise",
    "meaning": "An agreement in which people adjust their demands to reach a workable result.",
    "example": "They reached a compromise by using a smaller hall for less money.",
    "level": "b2"
  },
  {
    "word": "underrepresented",
    "meaning": "Included in smaller numbers than would fairly reflect a wider group.",
    "example": "People without internet access may be underrepresented in the online survey.",
    "level": "b2"
  },
  {
    "word": "attribute",
    "meaning": "To regard something as having a particular cause or source.",
    "example": "We cannot attribute the change to the course without considering other explanations.",
    "level": "b2"
  },
  {
    "word": "discretion",
    "meaning": "The freedom to decide what should be done in a particular situation.",
    "example": "The manager has discretion to accept a late booking.",
    "level": "b2"
  },
  {
    "word": "refundable",
    "meaning": "Able to be paid back under stated conditions.",
    "example": "The deposit is refundable if the room is left clean.",
    "level": "b2"
  },
  {
    "word": "impartial",
    "meaning": "Fair and not favouring one person or side.",
    "example": "An impartial reviewer considers the strengths of both proposals.",
    "level": "b2"
  },
  {
    "word": "concession",
    "meaning": "Something accepted or given up to help reach an agreement.",
    "example": "Offering a later deadline was an important concession in the negotiation.",
    "level": "b2"
  },
  {
    "word": "implementation",
    "meaning": "The process of putting a plan or decision into effect.",
    "example": "The report recommends another trial before full implementation.",
    "level": "b2"
  },
  {
    "word": "causal",
    "meaning": "Relating to whether one thing produces an effect on another.",
    "example": "The survey does not establish a causal link between the policy and the result.",
    "level": "b2"
  },
  {
    "word": "retrospective",
    "meaning": "Looking back at or describing past events.",
    "example": "The questionnaire relied on retrospective accounts of last year’s working conditions.",
    "level": "b2"
  },
  {
    "word": "perception",
    "meaning": "The way someone notices, understands, or experiences something.",
    "example": "The report measured staff perceptions rather than task performance.",
    "level": "b2"
  },
  {
    "word": "remedy",
    "meaning": "An action that corrects or improves an undesirable situation.",
    "example": "A replacement part may be an appropriate remedy for the fault.",
    "level": "b2"
  },
  {
    "word": "discrepancy",
    "meaning": "A difference between things that are expected to match.",
    "example": "There is a discrepancy between the invoice total and the amount charged.",
    "level": "b2"
  },
  {
    "word": "conditional",
    "meaning": "Depending on a particular requirement or situation.",
    "example": "Their agreement is conditional on approval of the final map.",
    "level": "b2"
  },
  {
    "word": "scope",
    "meaning": "The range of matters or situations included in something.",
    "example": "Keep your conclusion within the scope of the evidence.",
    "level": "b2"
  },
  {
    "word": "feasible",
    "meaning": "Possible and practical to carry out.",
    "example": "We need a feasible plan that fits our budget.",
    "level": "c1"
  },
  {
    "word": "correlation",
    "meaning": "An association between variables, which alone does not prove a causal relationship.",
    "example": "The study found a correlation between the two measures.",
    "level": "c1"
  },
  {
    "word": "substantiate",
    "meaning": "To support a statement with evidence or facts.",
    "example": "The report needs data to substantiate its main claim.",
    "level": "c1"
  },
  {
    "word": "nuance",
    "meaning": "A small but meaningful difference in meaning, feeling, or expression.",
    "example": "Her explanation captured the nuance of the disagreement.",
    "level": "c1"
  },
  {
    "word": "ascribe",
    "meaning": "To regard something as arising from a particular cause or source.",
    "example": "The researchers ascribe the difference partly to prior experience.",
    "level": "c1"
  },
  {
    "word": "corroborate",
    "meaning": "To supply additional evidence supporting a statement or finding.",
    "example": "The second survey corroborates the interview findings.",
    "level": "c1"
  },
  {
    "word": "reconcile",
    "meaning": "To explain how apparently conflicting ideas or observations can fit together.",
    "example": "The model helps reconcile the two estimates.",
    "level": "c1"
  },
  {
    "word": "caveat",
    "meaning": "A warning or limitation that qualifies how a statement should be understood.",
    "example": "The recommendation includes a caveat about the small sample.",
    "level": "c1"
  },
  {
    "word": "synthesis",
    "meaning": "A combined account that connects ideas from different sources.",
    "example": "Her synthesis identifies a shared principle across the reports.",
    "level": "c1"
  },
  {
    "word": "tentative",
    "meaning": "Not final or certain; open to revision.",
    "example": "We offered a tentative explanation pending further interviews.",
    "level": "c1"
  },
  {
    "word": "displace",
    "meaning": "To move something from its usual position, time, or role.",
    "example": "Evening visits may displace visits that previously occurred in the afternoon.",
    "level": "c1"
  },
  {
    "word": "representative",
    "meaning": "Reflecting the relevant characteristics of a wider group.",
    "example": "The volunteers may not be representative of every class.",
    "level": "c1"
  },
  {
    "word": "infer",
    "meaning": "To reach an interpretation from available evidence or reasoning.",
    "example": "Readers should not infer a cause from this association alone.",
    "level": "c1"
  },
  {
    "word": "retain",
    "meaning": "To keep or continue to have something.",
    "example": "The revised survey will retain the satisfaction questions.",
    "level": "c1"
  },
  {
    "word": "consensus",
    "meaning": "General agreement reached by members of a group.",
    "example": "The panel reached a consensus on the review criteria.",
    "level": "c1"
  },
  {
    "word": "stumbling block",
    "meaning": "A difficulty that prevents or slows progress.",
    "example": "The lack of a suitable room remains a stumbling block.",
    "level": "c1"
  },
  {
    "word": "on the fence",
    "meaning": "Undecided between available choices.",
    "example": "I am still on the fence about the optional course.",
    "level": "c1"
  },
  {
    "word": "long shot",
    "meaning": "An attempt or possibility with a low chance of success.",
    "example": "The application is a long shot, but we will submit it.",
    "level": "c1"
  },
  {
    "word": "intelligible",
    "meaning": "Clear enough to be understood.",
    "example": "Thoughtful pauses make the explanation more intelligible.",
    "level": "c1"
  },
  {
    "word": "attribution",
    "meaning": "The act of identifying a source or assigning an outcome to a cause.",
    "example": "Clear attribution distinguishes the manager’s view from the report’s finding.",
    "level": "c1"
  },
  {
    "word": "connotation",
    "meaning": "An additional feeling or judgement suggested by a word beyond its basic definition.",
    "example": "Stingy has a more negative connotation than economical.",
    "level": "c2"
  },
  {
    "word": "counterfactual",
    "meaning": "Describing an imagined situation that differs from what actually happened.",
    "example": "The counterfactual question considers what would have happened without the policy.",
    "level": "c2"
  },
  {
    "word": "equivocal",
    "meaning": "Open to more than one interpretation, or not clearly supporting one conclusion.",
    "example": "The evidence was equivocal, so the team avoided a firm conclusion.",
    "level": "c2"
  },
  {
    "word": "discerning",
    "meaning": "Showing careful judgement in noticing differences and evaluating quality.",
    "example": "A discerning reader checks the strength of the supporting evidence.",
    "level": "c2"
  },
  {
    "word": "succinct",
    "meaning": "Expressed clearly in few words, without unnecessary detail.",
    "example": "She gave a succinct summary of a complex argument.",
    "level": "c2"
  },
  {
    "word": "mandative",
    "meaning": "Expressing a demand, requirement, or recommendation for an action.",
    "example": "The sentence uses a mandative clause: they require that she be notified.",
    "level": "c2"
  },
  {
    "word": "ellipsis",
    "meaning": "Omission of words whose meaning can be recovered from context.",
    "example": "In Jo can too, ellipsis avoids repeating the verb attend.",
    "level": "c2"
  },
  {
    "word": "antecedent",
    "meaning": "An earlier expression to which a later word or omitted phrase refers.",
    "example": "An unclear antecedent makes the pronoun difficult to interpret.",
    "level": "c2"
  },
  {
    "word": "presuppose",
    "meaning": "To take something for granted as a starting assumption.",
    "example": "Asking why the plan failed presupposes that it failed.",
    "level": "c2"
  },
  {
    "word": "plausible",
    "meaning": "Reasonable or credible as a possible explanation.",
    "example": "The account is plausible, but another explanation remains possible.",
    "level": "c2"
  },
  {
    "word": "compelling",
    "meaning": "Strongly persuasive or deserving serious attention.",
    "example": "The interviews offer compelling reasons to investigate access.",
    "level": "c2"
  },
  {
    "word": "conclusive",
    "meaning": "Sufficient to settle a particular question in the relevant context.",
    "example": "The small pilot did not provide conclusive evidence of a general effect.",
    "level": "c2"
  },
  {
    "word": "prevalent",
    "meaning": "Widespread or common within a group or setting.",
    "example": "The practice was prevalent among the teams surveyed.",
    "level": "c2"
  },
  {
    "word": "inevitable",
    "meaning": "Certain to happen or impossible to avoid in the circumstances described.",
    "example": "A delay is possible, but it is not inevitable.",
    "level": "c2"
  },
  {
    "word": "understatement",
    "meaning": "Deliberately expressing something less strongly than its apparent importance or intensity.",
    "example": "Calling the impossible deadline a little ambitious may be understatement.",
    "level": "c2"
  },
  {
    "word": "rhetorical",
    "meaning": "Concerned with how language presents an argument or influences an audience.",
    "example": "The slogan is a rhetorical frame rather than proof of public participation.",
    "level": "c2"
  },
  {
    "word": "preserve",
    "meaning": "To keep an important feature from being lost or altered.",
    "example": "A public summary must preserve the study’s limitations.",
    "level": "c2"
  },
  {
    "word": "remit",
    "meaning": "The area of responsibility or authority assigned to a person or group.",
    "example": "Approving the final budget falls outside the review panel’s remit.",
    "level": "c2"
  },
  {
    "word": "proportionate",
    "meaning": "Appropriate in scale or strength to the relevant need or evidence.",
    "example": "The response should be proportionate to the demonstrated risk.",
    "level": "c2"
  },
  {
    "word": "salient",
    "meaning": "Especially noticeable or relevant in a particular context.",
    "example": "The rewrite makes the most salient comparison easier to find.",
    "level": "c2"
  },
  {
    "word": "sustainable",
    "meaning": "Able to continue over time without exhausting the resources it depends on.",
    "example": "Repeated exceptional overtime is not a sustainable delivery method.",
    "level": "c2"
  },
  {
    "word": "capacity",
    "meaning": "The amount of work a team or system can handle in a given period.",
    "example": "Our current capacity is twelve reviews per week.",
    "level": "biz"
  },
  {
    "word": "bottleneck",
    "meaning": "A stage that limits the flow or output of a wider process.",
    "example": "Final approval has become the bottleneck.",
    "level": "biz"
  },
  {
    "word": "backlog",
    "meaning": "Unfinished work waiting to be dealt with.",
    "example": "The backlog contains eighteen support requests.",
    "level": "biz"
  },
  {
    "word": "milestone",
    "meaning": "A significant stage or checkpoint in a project or process.",
    "example": "Completing the pilot review is the next project milestone.",
    "level": "biz"
  },
  {
    "word": "dependency",
    "meaning": "Something that another task or outcome relies on.",
    "example": "Access to the sample file is a dependency for testing.",
    "level": "biz"
  },
  {
    "word": "deliverable",
    "meaning": "An agreed output that a project or task must produce.",
    "example": "The main deliverable is a tested prototype.",
    "level": "biz"
  },
  {
    "word": "stakeholder",
    "meaning": "A person or group affected by, involved in, or interested in a project or decision.",
    "example": "We interviewed stakeholders before choosing the new process.",
    "level": "biz"
  },
  {
    "word": "procurement",
    "meaning": "The process of obtaining goods or services for an organization.",
    "example": "The procurement team compared both workshop offers.",
    "level": "biz"
  },
  {
    "word": "quotation",
    "meaning": "A stated price and description for proposed goods or services.",
    "example": "Please send a revised quotation showing optional support separately.",
    "level": "biz"
  },
  {
    "word": "handover",
    "meaning": "The transfer of information and responsibility from one person or team to another.",
    "example": "The account handover clarified ownership of the estimate.",
    "level": "biz"
  },
  {
    "word": "pending",
    "meaning": "Waiting for a decision, event, or required input.",
    "example": "The schedule is pending approval from the manager.",
    "level": "biz"
  },
  {
    "word": "deferred",
    "meaning": "Deliberately postponed to a later time or decision point.",
    "example": "The equipment decision was deferred until Friday.",
    "level": "biz"
  },
  {
    "word": "action item",
    "meaning": "A specific task recorded for follow-up after a discussion.",
    "example": "Each action item needs an owner and a completion date.",
    "level": "biz"
  },
  {
    "word": "escalate",
    "meaning": "To refer an issue to someone with greater authority or relevant responsibility.",
    "example": "Please escalate the unresolved access problem to the service lead.",
    "level": "biz"
  },
  {
    "word": "trade-off",
    "meaning": "A choice in which gaining one benefit involves giving up another.",
    "example": "The team discussed the trade-off between speed and additional testing.",
    "level": "biz"
  },
  {
    "word": "workable",
    "meaning": "Practical and capable of being carried out in the circumstances.",
    "example": "A smaller first phase may provide a workable alternative.",
    "level": "biz"
  }
];
