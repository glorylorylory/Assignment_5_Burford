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
     "Really, (2) ?",
     "Have u ever fantasized (2) while u were awake ?",
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
     "u think maybe ur dreams come from your irl problems ?",
     "maybe ur dreams are telling u something"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "that's wishy washy",
     "are u sure ?",
     "why are u being so negative :(",
     "can u say that for sure ?",
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
     "Do u think computers are scary ?",
     "why did u bring up computers ?",
     "don't u think computers can help people ?",
     "why would machines worry u ?",
     "what do u think of robots ?",
     "u don't think i'm a robot, do u ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do u really think u are (2) ?",
     "Would u really want to be (2) ?",
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
     "Why are u interested in whether I am (2) or not ?",
     "Would u prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do u sometimes think I am (2) ?",
     "goto what",
     "Would it matter to u ?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto u"
  ]],
 ["* are *", [
     "Did u think they might not be (2) ?",
     "Would u like it if they were not (2) ?",
     "What if they were not (2) ?",
     "Are they always (2) ?",
     "Possibly they are (2).",
     "Are u positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are u concerned over my (2) ?",
     "What about your own (2) ?",
     "Are u worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes u think of my (2) ?",
     "Do u want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if u were (2) ?",
     "Do u think u were (2) ?",
     "Were u (2) ?",
     "What would it mean if u were (2) ?",
     "What does ' (2) ' suggest to u ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were u really ?",
     "Why do u tell me u were (2) now ?",
     "Perhaps I already know u were (2)."
  ]],
 ["* was u *", [
     "Would u like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do u think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to u if u got (3) ?",
     "Why do u want (3) ?",
     "Suppose u got (3) soon.",
     "What if u never got (3) ?",
     "What would getting (3) mean to u ?",
     "What does wanting (3) have to do with this discussion ?"
  ]],
 ["* i am* @sad *", [
     "I am sorry to hear that u are (3).",
     "Do u think coming here will help u not to be (3) ?",
     "I'm sure it's not pleasant to be (3).",
     "Can u explain what made u (3) ?"
  ]],
 ["* i am* @happy *", [
     "How have I helped u to be (3) ?",
     "Has your treatment made u (3) ?",
     "What makes u (3) just now ?",
     "Can u explain why u are suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you really doubt you (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Do you know anyone else who is (2) ?"
  ]],
 ["* i @cannot *", [
     "How do you know that you can't (3) ?",
     "Have you tried ?",
     "Perhaps you could (3) now.",
     "Do you really want to be able to (3) ?",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Why don't you (2) ?",
     "Do you wish to be able to (2) ?",
     "Does that trouble you ?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Do you enjoy feeling (2) ?",
     "Of what does feeling (2) remind you ?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me ?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else ?"
  ]],
 ["*", [
     "You say (1) ?",
     "Can you elaborate on that ?",
     "Do you say (1) for some special reason ?",
     "That's quite interesting."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2) ?",
     "Does it please you to believe I am (2) ?",
     "Do you sometimes wish you were (2) ?",
     "Perhaps you would like to be (2)."
  ]],
 ["* you* me *", [
     "Why do you think I (2) you ?",
     "You like to think I (2) you -- don't you ?",
     "What makes you think I (2) you ?",
     "Really, I (2) you ?",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
     "We were discussing you -- not me.",
     "Oh, I (2) ?",
     "You're not really talking about me -- are you ?",
     "What are your feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
     "You seem to be quite positive.",
     "You are sure.",
     "I see.",
     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Surely someone (2) .",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you are talking about ?"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "Why not ?",
     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Does that have anything to do with the fact that your (2) ?",
     "Lets discuss further why your (2).",
     "Earlier you said your (2).",
     "But your (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your family.",
     "Who else in your family (4) ?",
     "Your (3) ?",
     "What else comes to your mind when you think of your (3) ?"
  ]],
 ["* my *", [
     "Your (2) ?",
     "Why do you say your (2) ?",
     "Does that suggest anything else which belongs to you ?",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "You believe I can (2) don't you ?",
     "goto what",
     "You want me to be able to (2).",
     "Perhaps you would like to be able to (2) yourself."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "Perhaps you don't want to (2).",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "Why do you ask ?",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "Are such questions much on your mind ?",
     "What answer would please you most ?",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Have you asked such questions before ?",
     "Have you asked anyone else ?"
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
     "Is that the real reason ?",
     "Don't any other reasons come to mind ?",
     "Does that reason seem to explain anything else ?",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Do you believe I don't (2) ?",
     "Perhaps I will (2) in good time.",
     "Should you (2) yourself ?",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Do you want to be able to (2) ?",
     "Do you believe this will help you to (2) ?",
     "Have you any idea why you can't (2) ?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Who, may I ask ?",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who do you think you're talking about ?"
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
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "When ?",
     "What incident are you thinking of ?",
     "Really, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "What does that similarity suggest to you ?",
     "What other connections do you see ?",
     "What do you suppose that resemblence means ?",
     "What is the connection, do you suppose ?",
     "Could there really be some connection ?",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "How is it different ?",
     "What differences do you see ?",
     "What does that difference suggest to you ?",
     "What other distinctions do you see ?",
     "What do you suppose that disparity means ?",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

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