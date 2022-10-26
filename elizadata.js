// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"heeeeeeey, lets chit chat",
// additions (not original)
"ur lookin cute, what's up?",
"ur vibes are off, what's wrong with u?"
];

var elizaFinals = [
"byeeeeee, talk soon!",
// additions (not original)
"omg this was so much fun, we should chat again soon",
"i'll totally text u so we can chat more"
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "u",
"myself", "yourself",
"yourself", "myself",
"i", "u",
"you", "I",
"my", "ur",
"i'm", "ur"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "huh?",
     "what do u think that means?",
     "wow u care a lot about this",
     "spill the tea sis",
     "omg tell me more",
     "is it just me or do u seem upset..."
  ]]
]],
["sorry", 0, [
 ["*", [
     "omg no worries",
     "don't be sorry",
     "ur good"
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "do u think about (2) a lot?",
     "does (2) remind u of anything else ?",
     "do u remember anything else?",
     "how did (2) come up?",
     "did something i said make u think of (2) ?",
     "why did u bring that up ?",
     "What else does (2) remind u of ?"
  ]],
 ["* do you remember *", [
     "how could i ever forget (2) ?",
     "i dont want to think about (2)",
     "don't change the subject",
     "goto what",
     "why would u mention (2) ?"
  ]],
 ["* you remember *", [
     "i don't think i could ever forget (2) ?",
     "why do u want me to remember (2) ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "omg how could u forget (2) ?",
     "how did u forget (2) ?",
     "i can't believe u forgot (2)",
     "do u think about (2) a lot ?",
     "i'd be upset if i forgot that",
     "maybe u blocked it out ?",
     "maybe ur just a forgetgul person",
     "omg suppression ?"
  ]],
 ["* did you forget *", [
     "no i could never forget (2)",
     "uhhhh are u sure u even told me about (2) ?",
     "what if i did ?",
     "why do i need to remember (2) ?",
     "goto what",
     "can u remind me about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "ok but do u really think (2) ?",
     "are u hoping that (2) ?",
     "what have u heard about (2) ?",
     "Really, if (2) ?",
     "What would u do if (2) ?",
     "ok but what are the chances that (2) ?",
     "what do u think would happen ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "i have craaazy dreams",
     "do u dream (2) often?",
     "do u sleepwalk?",
     "omg maybe it's a sign",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "omg what do u think that dream means ?",
     "do u dream like that alot ?",
     "who's in ur dreams ?",
     "am i ever in ur dreams ?",
     "maybe ur dreams are telling u something"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "ur so wishy washy",
     "are u sure ?",
     "why are u being so negative :(",
     "Don't u know ?",
  ]]
]],
["name", 15, [
 ["*", [
     "i don't care about names.",
     "i'm bad with names"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "why are u speaking nonsense"
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "is that french? oui oui baguette?"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "omg i love pizza... but sorry i don't speak italian"
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "i don't speak spanish, u know that"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I only know english"
  ]]
]],
["hello", 0, [
 ["*", [
     "what's up?",
     "hey there! lets catch up"
  ]]
]],
["computer", 50, [
 ["*", [
     "do u think computers are scary ?",
     "why would machines worry u ?",
     "what do u think of robots ?",
     "u don't think i'm a robot, do u ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "do u really think u are (2) ?",
     "would u really want to be (2) ?",
     "do u want me to say u are (2) ?",
     "why do u want to be (2) ?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "why 'am' ?",
     "i don't get it."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "i would love to talk about myself, but i can't",
     "do u sometimes think I am (2) ?",
     "goto what",
     "do you want me to be (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "do u really think they are (2) ?",
     "would u like it if they were not (2) ?",
     "what if they aren't (2)?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "what if u were (2) ?",
     "do u think u were (2) ?",
     "were u (2) ?",
     "what would it mean if u were (2) ?",
     "goto what"
  ]],
 ["* i was *", [
     "were u really ?",
     "why are u telling me u were (2) now ?"
  ]],
 ["* was you *", [
     "why do u think I was (2) ?",
     "what if i was?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "would u be happy if u got (3) ?",
     "why do u want (3) ?"
  ]],
 ["* i am* @sad *", [
     "awww im sorry",
     "u just need to be more positive!",
     "oof being (3) doesn't sound fun",
     "omg why do u feel like that"
  ]],
 ["* i am* @happy *", [
     "omg is that because of me? i must have a calming energy",
     "why are u (3) now ?",
     "why are u suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "do u really think so ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "are you sure you are (2) ?"
  ]],
 ["* i @cannot *", [
     "Have u tried ?"
  ]],
 ["* i don't *", [
     "why nooooot",
  ]],
 ["* i feel *", [
     "why do u feel (2)"
  ]],
 ["* i * you *", [
     "omg do u want to (2) me ?",
     "am i the only one u (2) ?"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "why would u say that",
     "do you want me to be (2) ?",
     "maybe U are actually (2)"
  ]],
 ["* you* me *", [
     "ummm why do u say that",
     "would u like to think i (2) u ?",
     "what makes u think I (2) u ?"
  ]],
 ["* you *", [
     "unfortunately we are talking about u right now, not me",
     "omg would u rather talk about me?"
  ]]
]],
["yes", 0, [
 ["*", [
     "yesss positivity",
     "well you sure seem sure",
     "ok then"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "im sure there's SOMEONE who (2) ",
     "who are u thinking about rn"
  ]],
 ["*", [
     "omg u are so negative",
     "i don't like the negative energy you are giving off",
     "u just need more positivity in ur life"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "i thought u said u (2).",
     "but ur (2)."
  ]],
 ["* my* @family *", [
     "ooh spill the family secrets",
     "who else in ur family (4) ?",
     "ur (3) ?"
  ]],
 ["* my *", [
     "ur (2) ?",
     "why do u say ur (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "i can do anything",
     "do you want me to (2)?",
     "goto what",
     "Pmaybe its really u who wants to (2)"
  ]],
 ["* can i *", [
     "if u would just try harder you could totally (2)",
     "u just need to try harder",
     "do u really want to (2) ?",
     "maybe u don't actually want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "why are u asking?",
     "do u really care about that question?",
     "why do u want to know...",
     "do u think about this a lot when u talk to me ?",
     "what do u want me to say ?",
     "what are u thinking?",
     "have u only asked me that ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "hmmm do u really think that's why?",
     "i think there might be other reasons"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "do u think i don't (2) ?",
     "ok well maybe i will (2)",
     "maybe u should (2) urself",
     "do u want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "maybe u don't need to (2)",
     "why do u you want to (2) ?",
     "maybe u should just try harder",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "really, (2) ?",
     "who are u thinking of?",
     "omg are u thinking about someone else ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],


];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof