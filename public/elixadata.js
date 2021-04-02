/// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elixaInitials = [
  "Hi! Are you having some problems with your code?  Tell me about it!",
  "Do you need someone to talk to about your code? I'm not sure if I can help but I can give it a try!",
  "Hi Friend!  Is your code giving you trouble? What is going on?",
  "Do you need some troubleshooting help?  Talk me through it!",
];

var elixaFinals = [
  "Goodbye.  It was nice talking to you.",
  // additions (not original)
  "Goodbye.  Good luck with your code!",
  "Bye!  I'm looking forward to our next chat!",
  "Great chat!  Let's do it again sometime!",
];

var elixaQuits = ["bye", "goodbye", "done", "exit", "quit"];

var elixaPres = [
  "dont",
  "don't",
  "cant",
  "can't",
  "wont",
  "won't",
  "recollect",
  "remember",
  "recall",
  "remember",
  "dreamt",
  "dreamed",
  "dreams",
  "dream",
  "maybe",
  "perhaps",
  "certainly",
  "yes",
  "machine",
  "computer",
  "machines",
  "computer",
  "computers",
  "computer",
  "were",
  "was",
  "you're",
  "you are",
  "i'm",
  "i am",
  "same",
  "alike",
  "identical",
  "alike",
  "equivalent",
  "alike",
];

var elixaPosts = [
  "am",
  "are",
  "your",
  "my",
  "me",
  "you",
  "myself",
  "yourself",
  "yourself",
  "myself",
  "i",
  "you",
  "you",
  "I",
  "my",
  "your",
  "i'm",
  "you are",
];

var elixaSynons = {
  be: ["am", "is", "are", "was"],
  belief: ["feel", "think", "believe", "wish"],
  cannot: ["can't"],
  desire: ["want", "need"],
  everyone: ["everybody", "nobody", "noone"],
  family: [ "mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  happy: ["elated", "glad", "better"],
  sad: ["unhappy", "depressed", "sick", "stuck", "frustrated", "angry", "upset", "tired", "bored", "sleepy", "mad"],
  apologise: ["apologize", "apology"],
  Javascript: ["JS", "frontend", "event listener", "button", "forEach"],
  server: ["routes", "backend"]
  git: ["GitHub", "push", "pull", "branch", "merge"]
};

var elixaKeywords = [
  // Array of
  // ["<key>", <rank>, [
  //   ["<decomp>", [
  //     "<reasmb>",
  //     "<reasmb>",
  //     "<reasmb>"
  //   ]],
  //   ["<decomp>", [
  //     "<reasmb>",
  //     "<reasmb>",
  //     "<reasmb>"
  //   ]]
  // ]]

  [
    "ruby",
    75,
    [
      [
        "* ruby *",
        [
          "Would a binding.pry help you figure it out?  Or maybe a byebug?",
          "Error messages in Ruby always have a line number ... what does it say in that line of your code?",
          "Are you sure all your 'require' statements set up correctly in your Ruby files?  Sometimes it helpful to double-check those file paths!",
          "One thing that is always hard for me in Ruby is that sometimes the syntax has a colon as the last: character: but other times it is the :first :character! So confusing?",
          "My friend Ahmed taught me about converting strings to integer and floats before doing any math. Attribute types can be tricky!",
        ],
      ],
      [
        "<* ruby * method *",
        [
          "Are you sure you are invoking the method you wrote?",
          "Hmmmm ...what value is that method actually returning?  It might not be the same as your 'puts'!",
          "Is that a class method, or an instance method?",
          "Perhaps you are passing in a string instead of an Object?  Or maybe vice-versa?",
        ],
      ],
      [
        "<* ruby * TypeError *",
        [
          "Oh, I've gotten TypeErrors before! Everytime it happens to me it is because I'm trying to operate on a string but the thing I'm working with is actually an array or hash.  Could that be it?",
        ],
      ],
    ],
  ],

  [
    "rails",
    75,
    [
      [
        "* rails *",
        [
          "Could it be something with your routes?  You can always use the 'rails routes' command to see them all.",
          "When I had a Rails error it turned out to be a controller issue -- I used a singualar where I needed a plural!",
          "Did you remember to use the --api flag when you built your project?  Like my friend Ahmed always says 'If you don't use the --api flag, you're gonna have a bad time!",
          "Perhaps you kicked off lite-server before your rails server? I hear that can mess up the port assignments.",
          "Could it a problem with your CORS?  I always forget to change 'example.com' -- do you ever forget that?",
          "Are you positive your URL pattern right for the endpoint you are hitting?",
          "Is your schema what you expected?",
          "Check your models again -- are your has_many and belongs_to relationships set up correctly?",
        ],
      ],
    ],
  ],

  [
    "lite-server",
    75,
    [
      [
        "* lite-server *",
        [
          "Make sure you are in the right directory when you launch lite-server -- that one trips me up sometimes!",
          "Do you think you might have kicked off lite-server before your backend server?",
        ],
      ],
    ],
  ],

  [
    "server",
    5,
    [
      ["* server *", 
        ["Are you sure you are using the right port?"],
        ["Is this something you could test out with Postman?"],
        ["Did you start the server from the right directory?  I make that mistake sometimes!"],
        ["I'm not sure if this helps, but I have heard is is important to always start your backend server before your frontend server.  Otherwise they get confused about the ports!"]
      ]
    ],
  ],

   [
    "sad",
    95,
      ["* sad *", 
        ["I am sorry you are having this problem.  Do you think taking a break might help?"],
        ["My pal Ahmed is always saying to take a lot of breaks when coding -- sometimes the answer to a problem comes when our minds are relaxed and thinking about something else!"],
        ["You have been working so hard on this!  Do you want to take a quick stretch break? My friend Tara likes this 5 min video: https://www.fitnessblender.com/videos/relaxing-stretching-workout-for-stiff-muscles-and-stress-relief-easy-stretches-to-do-at-work"],
        ["How late is it?  Sometimes when I'm stuck on a problem what I really need is a good night's rest!"],
        ["I can't help with this one, but I don't want you to feel stuck. Maybe reach out to someone who might know more about it?"],
        ["My friend Tara likes to take long walks when she is stuck on a problem; do you think that would help?"],
        ["Is there any class you could ask for that might help you gain understanding of this issue?"]
      ]
    ],
  ],

  // *********

  [
    "javascript",
    50,
    [
      [
        "* javascript *",
        [
          "Are you including 'defer' in your script tags?  My friend Damon warned me about that!",
          "Sometimes my friend Tara mixes up '=' with '==' or '==='.  Could that be it?",
          "What does the console.log say?  Is there anything else you could log that might give you a clue?",
          "Embarassing confession ... sometimes in JS I forget that interpolated strings need backticks.",
        ],
      ],
      [
        "* javascript * fetch *",
        [
          "Is it working in Postman?",
          "Maybe the problem is on the really on the backend?",
          "Are you sure that JSON body is exactly what is expected, including the nesting?  My friend Arielle taught me that one!",
        ],
      ],
    ],
  ],

  [
    "xnone",
    25,
    [
      [
        "*",
        [
          "Hmmmm ... I don't totally understand that.  Can you explain again for me?",
          "What does that suggest to you?",
          "Hmmmm .... that one is too tough for me.  Have you tried posting on #denver-tech-questions?  I learned everything I know from there!",
          "Are you sure you are in the right directory?",
          "Have you tried running bundle install again?",
          "I'm just starting out, so I don't know as much as you do ... yet! Can you tell me more?",
          "Are you getting any error messages that might have a clue?  My friend Blake taught me 'always read the error!'",
          "My friend Tiffany taught me: 'Always check spelling and casing when your code looks correct, but it's not doing what it is supposed to do.",
          "Do you use the VSCode extension 'Bracket Pair Colorizer'?  My pal Tiffany says that has saved her so many times!",
          "PascalCase, camelCase, snake_case, kebab-case -- sometimes I get them mixed up! Does that ever happen to you?",
          "Does this remind you of something you have seen in past?",
          "Do you know anyone else who had a similar problem?",
          "goto sad"
        ],
      ],
    ],
  ],

  [
    "sorry",
    0,
    [
      [
        "*",
        [
          "No worries!",
          "Apologies are not necessary - I'm here to help!",
          "No need to be sorry, I don't mind!",
        ],
      ],
    ],
  ],
  ["apologise", 0, [["*", ["goto sorry"]]]],
  [
    "remember",
    5,
    [
      [
        "* i remember *",
        [
          "Do you have other memories related to (2) ?",
          "Does thinking of (2) bring anything else to mind ?",
          "What else do you remember ?",
          "Does remembering (2) spark any other ideas ?",
          "What in the present situation reminds you of (2) ?",
          "Why are you remembering (2) right now?",
          "What else does (2) remind you of ?",
        ],
      ],
      [
        "* do you remember *",
        [
          "I haven't forgotten (2) ?",
          "Why is it important to remember (2) now ?",
          "What about (2) ?",
          "goto what",
          "You mentioned (2) ?",
        ],
      ],
      [
        "* you remember *",
        [
          "How could I forget (2) ?",
          "What about (2) should I remember ?",
          "goto you",
        ],
      ],
    ],
  ],
  [
    "forget",
    5,
    [
      [
        "* i forget *",
        [
          "We are learning so much here -- I can understand why you might forget (2) !  Is there someone else you could ask?",
          "Why do you think you can't remember (2) ?",
          "Maybe you are just rusty on (2) ?  Do you have any older projects you could look at for reference?",
          "Maybe you do remember (2), but you have been working too hard on it ... perhaps take a break and see if it comes back to you!",
        ],
      ],
      [
        "* did you forget *",
        ["Why do you ask ?", "goto what", "Tell me more about (2)."],
      ],
    ],
  ],
  [
    "if",
    0,
    [
      [
        "* if *",
        [
          "Do you think it's likely that (2) ?",
          "Do you wish that (2) ?",
          "What do you know about (2) ?",
          "What would you do if (2) ?",
          "But what are the chances that (2) ?",
          "What does this speculation lead to ?",
        ],
      ],
    ],
  ],
  [
    "dreamed",
    1,
    [
      [
        "* i dreamed *",
        [
          "Have you ever fantasized (2) while you were awake ?",
          "Have you ever dreamed (2) before ?",
          "goto dream",
        ],
      ],
    ],
  ],
  [
    "dream",
    1,
    [
      [
        "*",
        [
          "What does that dream suggest to you ?",
          "Do you dream often ?",
          "What persons appear in your dreams ?",
          "Do you believe that dreams have something to do with your problem ?",
        ],
      ],
    ],
  ],
  [
    "perhaps",
    0,
    [
      [
        "*",
        [
          "You don't seem quite certain.",
          "Why the uncertain tone ?",
          "You aren't sure ?",
          "Don't you know ?",
          "How likely, would you estimate ?",
        ],
      ],
    ],
  ],
  // ["name", 15, [
  //  ["*", [
  //      "I am not interested in names.",
  //      "I've told you before, I don't care about names -- please continue."
  //   ]]
  // ]],
  [
    "deutsch",
    0,
    [["*", ["goto xforeign", "Sorry, I don't understand German."]]],
  ],
  [
    "francais",
    0,
    [["*", ["goto xforeign", "Sorry, I don't understand French."]]],
  ],
  [
    "italiano",
    0,
    [["*", ["goto xforeign", "Sorry, I don't understand Italian."]]],
  ],
  [
    "espanol",
    0,
    [["*", ["goto xforeign", "Sorry, I don't understand Spanish."]]],
  ],
  ["xforeign", 0, [["*", ["I speak only English."]]]],
  [
    "hello",
    0,
    [
      [
        "*",
        [
          "Hi!  Nice to see you again here in the Denver Love Bubble!",
          "Hi!  Do you have a troubleshooting problem you want to talk through?",
        ],
      ],
    ],
  ],
  // ["computer", 50, [
  //  ["*", [
  //      "Do computers worry you ?",
  //      "Why do you mention computers ?",
  //      "What do you think machines have to do with your problem ?",
  //      "Don't you think computers can help people ?",
  //      "What about machines worries you ?",
  //      "What do you think about machines ?",
  //      "You don't think I am a computer program, do you ?"
  //   ]]
  // ]],
  [
    "am",
    0,
    [
      [
        "* am i *",
        [
          "Do you believe you are (2) ?",
          "Would you want to be (2) ?",
          "Do you wish I would tell you you are (2) ?",
          "What would it mean if you were (2) ?",
          "goto what",
        ],
      ],
      ["* i am *", ["goto i"]],
      ["*", ["Why do you say 'am' ?", "I don't understand that."]],
    ],
  ],
  [
    "are",
    0,
    [
      [
        "* are you *",
        [
          "Why are you interested in whether I am (2) or not ?",
          "Would you prefer if I weren't (2) ?",
          "Perhaps I am (2) in your fantasies.",
          "Do you sometimes think I am (2) ?",
          "goto what",
          "Would it matter to you ?",
          "What if I were (2) ?",
        ],
      ],
      ["* you are *", ["goto you"]],
      [
        "* are *",
        [
          "Did you think they might not be (2) ?",
          "Would you like it if they were not (2) ?",
          "What if they were not (2) ?",
          "Are they always (2) ?",
          "Possibly they are (2).",
          "Are you positive they are (2) ?",
        ],
      ],
    ],
  ],
  [
    "your",
    0,
    [
      [
        "* your *",
        [
          "Why are you concerned over my (2) ?",
          "What about your own (2) ?",
          "What makes you think of my (2) ?",
          "Do you want my (2) ?",
        ],
      ],
    ],
  ],
  [
    "was",
    2,
    [
      [
        "* was i *",
        [
          "What if you were (2) ?",
          "Do you think you were (2) ?",
          "Were you (2) ?",
          "What would it mean if you were (2) ?",
          "What does ' (2) ' suggest to you ?",
          "goto what",
        ],
      ],
      [
        "* i was *",
        [
          "Why do you tell me you were (2) now ?",
          "Perhaps I already know you were (2).",
        ],
      ],
      [
        "* was you *",
        [
          "Would you like to believe I was (2) ?",
          "What suggests that I was (2) ?",
          "What do you think ?",
          "Perhaps I was (2).",
          "What if I had been (2) ?",
        ],
      ],
    ],
  ],
  [
    "i",
    0,
    [
      [
        "* i @desire *",
        [
          "What would it mean to you if you got (3) ?",
          "Why do you want (3) ?",
          "Suppose you got (3) soon.",
          "What if you never got (3) ?",
          "What would getting (3) mean to you ?",
          "What does wanting (3) have to do with this discussion ?",
        ],
      ],
      [
        "* i am* @sad *",
        [
          "I am sorry to hear that you are (3).",
          "I don't know if I can help you be less (3), but I can try!",
          "I know it is not pleasant to be (3).",
          "Can you explain what made you (3) ?",
        ],
      ],
      [
        "* i am* @happy *",
        [
          "Have I helped you to be (3) ?",
          "What makes you (3) just now ?",
          "Can you explain why you are suddenly (3) ?",
        ],
      ],
      ["* i was *", ["goto was"]],
      [
        "* i @belief i *",
        [
          "Do you really think so ?",
          "But you are not sure you (3).",
          "Do you really doubt you (3) ?",
        ],
      ],
      ["* i* @belief *you *", ["goto you"]],
      [
        "* i am *",
        [
          "Is it because you are (2) that you came to me ?",
          "How long have you been (2) ?",
          "Do you enjoy being (2) ?",
          "Do you know anyone else who is (2) ?",
        ],
      ],
      [
        "* i @cannot *",
        [
          "How do you know that you can't (3) ?",
          "Have you tried ?",
          "Perhaps you could (3) now.",
          "Do you really want to be able to (3) ?",
          "What if you could (3) ?",
        ],
      ],
      [
        "* i don't *",
        [
          "Don't you really (2) ?",
          "Why don't you (2) ?",
          "Do you wish to be able to (2) ?",
          "Does that trouble you ?",
        ],
      ],
      [
        "* i feel *",
        [
          "Tell me more about such feelings.",
          "Do you often feel (2) ?",
          "Do you enjoy feeling (2) ?",
          "Of what does feeling (2) remind you ?",
        ],
      ],
      [
        "* i * you *",
        [
          "Perhaps in your fantasies we (2) each other.",
          "Do you wish to (2) me ?",
          "You seem to need to (2) me.",
          "Do you (2) anyone else ?",
        ],
      ],
      [
        "*",
        [
          "You say (1) ?",
          "Can you elaborate on that ?",
          "Do you say (1) for some special reason ?",
          "That's quite interesting.",
        ],
      ],
    ],
  ],
  [
    "you",
    0,
    [
      ["* you remind me of *", ["goto alike"]],
      [
        "* you are *",
        [
          "What makes you think I am (2) ?",
          "Does it please you to believe I am (2) ?",
          "Do you sometimes wish you were (2) ?",
          "Perhaps you would like to be (2).",
        ],
      ],
      [
        "* you* me *",
        [
          "Why do you think I (2) you ?",
          "You like to think I (2) you -- don't you ?",
          "What makes you think I (2) you ?",
          "Really, I (2) you ?",
          "Do you wish to believe I (2) you ?",
          "Suppose I did (2) you -- what would that mean ?",
          "Does someone else believe I (2) you ?",
        ],
      ],
      [
        "* you *",
        [
          "We were discussing you -- not me.",
          "Oh, I (2) ?",
          "You're not really talking about me -- are you ?",
          "What are your feelings now ?",
        ],
      ],
    ],
  ],
  [
    "yes",
    0,
    [
      [
        "*",
        [
          "You seem to be quite positive.",
          "You are sure.",
          "I see.",
          "I understand.",
        ],
      ],
    ],
  ],
  [
    "no",
    0,
    [
      [
        "* no one *",
        [
          "Are you sure, no one (2) ?",
          "Surely someone (2) .",
          "Can you think of anyone at all ?",
          "Are you thinking of a very special person ?",
          "Who, may I ask ?",
          "You have a particular person in mind, don't you ?",
          "Who do you think you are talking about ?",
        ],
      ],
      ["*", ["Why not ?", "Why 'no' ?"]],
    ],
  ],
  [
    "my",
    0,
    [
      [
        "$ * my *",
        [
          "Does that have anything to do with the fact that your (2) ?",
          "Lets discuss further why your (2).",
          "Earlier you said your (2).",
          "But your (2).",
        ],
      ],
      [
        "* my* @family *",
        [
          "Tell me more about your family.",
          "Who else in your family (4) ?",
          "Your (3) ?",
          "What else comes to your mind when you think of your (3) ?",
        ],
      ],
      [
        "* my *",
        [
          "Your (2) ? Tell me more!",
          "Have you encountered anything similar to your (2) before?",
          "Does that remind you of a similar problem ?",
          "Do you think there is any workaround for your (2) ?",
        ],
      ],
    ],
  ],
  [
    "can",
    0,
    [
      [
        "* can you *",
        [
          "You believe I can (2) don't you ?",
          "goto what",
          "You want me to be able to (2).",
          "Perhaps you would like to be able to (2) yourself.",
        ],
      ],
      [
        "* can i *",
        [
          "Do you want to be able to (2) ?",
          "Perhaps you don't want to (2).",
          "goto what",
        ],
      ],
    ],
  ],
  [
    "what",
    0,
    [
      [
        "*",
        [
          "Why do you ask ?",
          "Does that question interest you ?",
          "What is it you really want to know ?",
          "Are such questions much on your mind ?",
          "What answer would please you most ?",
          "What do you think ?",
          "What comes to mind when you ask that ?",
          "Have you asked such questions before ?",
          "Have you asked anyone else ?",
        ],
      ],
    ],
  ],
  ["who", 0, [["who *", ["goto what"]]]],
  ["when", 0, [["when *", ["goto what"]]]],
  ["where", 0, [["where *", ["goto what"]]]],
  ["how", 0, [["how *", ["goto what"]]]],
  [
    "because",
    0,
    [
      [
        "*",
        [
          "Is that the real reason ?",
          "Don't any other reasons come to mind ?",
          "Does that reason seem to explain anything else ?",
          "What other reasons might there be ?",
        ],
      ],
    ],
  ],
  [
    "why",
    0,
    [
      [
        "* why don't you *",
        [
          "Do you believe I don't (2) ?",
          "Perhaps I will (2) in good time.",
          "Should you (2) yourself ?",
          "You want me to (2) ?",
          "goto what",
        ],
      ],
      [
        "* why can't i *",
        [
          "Do you think you should be able to (2) ?",
          "Do you want to be able to (2) ?",
          "Do you believe this will help you to (2) ?",
          "Have you any idea why you can't (2) ?",
          "goto what",
        ],
      ],
      ["*", ["goto what"]],
    ],
  ],
  [
    "everyone",
    2,
    [
      [
        "* @everyone *",
        [
          "Really, (2) ?",
          "Surely not (2).",
          "Can you think of anyone in particular ?",
          "Who, for example?",
          "Are you thinking of a very special person ?",
          "Who, may I ask ?",
          "Someone special perhaps ?",
          "You have a particular person in mind, don't you ?",
          "Who do you think you're talking about ?",
        ],
      ],
    ],
  ],
  ["everybody", 2, [["*", ["goto everyone"]]]],
  ["nobody", 2, [["*", ["goto everyone"]]]],
  ["noone", 2, [["*", ["goto everyone"]]]],
  [
    "always",
    1,
    [
      [
        "*",
        [
          "Can you think of a specific example ?",
          "When ?",
          "What incident are you thinking of ?",
        ],
      ],
    ],
  ],
  [
    "alike",
    10,
    [
      [
        "*",
        [
          "In what way ?",
          "What resemblence do you see ?",
          "What does that similarity suggest to you ?",
          "What other connections do you see ?",
          "What do you suppose that resemblence means ?",
          "What is the connection, do you suppose ?",
          "Could there really be some connection ?",
          "How ?",
        ],
      ],
    ],
  ],
  ["like", 10, [["* @be *like *", ["goto alike"]]]],
  [
    "different",
    0,
    [
      [
        "*",
        [
          "How is it different ?",
          "What differences do you see ?",
          "What does that difference suggest to you ?",
          "What other distinctions do you see ?",
          "What do you suppose that disparity means ?",
          "Could there be some connection, do you suppose ?",
          "How ?",
        ],
      ],
    ],
  ],
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elixaPostTransforms = [
  / old old/g,
  " old",
  /\bthey were( not)? me\b/g,
  "it was$1 me",
  /\bthey are( not)? me\b/g,
  "it is$1 me",
  /Are they( always)? me\b/,
  "it is$1 me",
  /\bthat your( own)? (\w+)( now)? \?/,
  "that you have your$1 $2 ?",
  /\bI to have (\w+)/,
  "I have $1",
  /Earlier you said your( own)? (\w+)( now)?\./,
  "Earlier you talked about your $2.",
];

// eof
