// Avatar: The Last Airbender questions
const avatarQuestions = [
    {
        question: "What is the name of Aang’s flying bison?",
        answers: ["Appa", "Momo", "Naga", "Pabu"],
        correct: 0
    },
    {
        question: "Which nation was the first to fall to the Fire Nation?",
        answers: ["Air Nomads", "Earth Kingdom", "Water Tribe", "Fire Nation"],
        correct: 0
    },
    {
    question: "Who is the Avatar before Aang?",
    answers: ["Roku", "Kyoshi", "Kuruk", "Yangchen"],
    correct: 0
    },
    {
        question: "What element did Aang struggle to learn the most?",
        answers: ["Fire", "Earth", "Water", "Air"],
        correct: 1
    },
    {
        question: "Who teaches Aang firebending after Zuko joins Team Avatar?",
        answers: ["Iroh", "Jeong Jeong", "Zuko", "Azula"],
        correct: 2
    },
    {
        question: "Which spirit helps Aang in the Spirit World as a guide?",
        answers: ["Koh", "Hei Bai", "Roku's Dragon", "Wan Shi Tong"],
        correct: 2
    },
    {
        question: "What is the name of Toph’s wrestling persona?",
        answers: ["The Blind Bandit", "The Boulder", "Toph Smash", "Metal Queen"],
        correct: 0
    },
    {
        question: "Who captures Appa in Ba Sing Se?",
        answers: ["Dai Li", "Sandbenders", "Azula", "Long Feng"],
        correct: 3
    },
    {
        question: "What is the technique Aang uses to defeat Ozai?",
        answers: ["Avatar State", "Energybending", "Chi Blocking", "Bloodbending"],
        correct: 1
    },
    {
        question: "Which city is the capital of the Earth Kingdom?",
        answers: ["Ba Sing Se", "Omashu", "Gaoling", "Kyoshi Island"],
        correct: 0
    },
    {
        question: "Who is the Fire Nation’s banished prince?",
        answers: ["Zuko", "Iroh", "Ozai", "Sozin"],
        correct: 0
    },
    {
        question: "What special ability does Toph have besides earthbending?",
        answers: ["Metalbending", "Lightning generation", "Waterbending", "Airbending"],
        correct: 0
    },
    {
        question: "What animal is the symbol of the Air Nomads?",
        answers: ["Flying bison", "Dragon", "Turtle dove", "Phoenix"],
        correct: 0
    },
    {
        question: "What is the name of the secret police in Ba Sing Se?",
        answers: ["Dai Li", "White Lotus", "Red Lotus", "Foggy Swamp Tribe"],
        correct: 0
    },
    {
        question: "What is the name of the Fire Nation’s solar eclipse?",
        answers: ["Day of Black Sun", "Blue Spirit Night", "Fire Festival", "Spirit Day"],
        correct: 0
    },
    {
        question: "What is the name of Zuko’s ship’s lieutenant?",
        answers: ["Jee", "Han", "Pakku", "Bumi"],
        correct: 0
    },
    {
        question: "What is the name of the Fire Nation comet?",
        answers: ["Roku's Comet", "Agni's Comet", "Ozai's Comet", "Sozin's Comet"],
        correct: 3
    },
    {
        question: "Which animal is a mix between a bear and another species in the Earth Kingdom?",
        answers: ["Badgermole", "Ostrich Horse", "Platypus Bear", "Polar Bear Dog"],
        correct: 2
    },
    {
        question: "Who teaches Toph to use seismic sense?",
        answers: ["Bumi", "Badgermoles", "Her parents", "Aang"],
        correct: 1
    },
    {
        question: "What is the name of the play that reenacts Team Avatar’s adventures?",
        answers: ["The Great Divide", "Fire Nation Tales", "Boiling Rock", "The Ember Island Players"],
        correct: 3
    },
    {
        question: "Which member of Team Avatar is a non-bender?",
        answers: ["Katara", "Sokka", "Aang", "Toph"],
        correct: 1
    },
    {
        question: "Who was the waterbending master at the Northern Water Tribe?",
        answers: ["Arnook", "Hakoda", "Pakku", "Hama"],
        correct: 2
    },
    {
        question: "Which creature grants the ability to energybend?",
        answers: ["Dragon", "Koizilla", "Badgermole", "Lion Turtle"],
        correct: 3
    },
    {
        question: "What is the name of Azula’s two closest friends?",
        answers: ["Mai and Ty Lee", "Suki and June", "Ty Lee and Katara", "Mai and Suki"],
        correct: 0
    },
    {
        question: "Which character says, 'That's rough, buddy'?",
        answers: ["Iroh", "Sokka", "Zuko", "Toph"],
        correct: 2
    },
    {
        question: "Who becomes Aang’s wife after the series ends?",
        answers: ["Katara", "Toph", "Suki", "Mai"],
        correct: 0
    },
    {
        question: "What is the name of Zuko’s mother?",
        answers: ["Ursa", "Azula", "Kya", "Ilah"],
        correct: 0
    },
    {
        question: "Which technique allows waterbenders to control people?",
        answers: ["Icebending", "Healing", "Bloodbending", "Energybending"],
        correct: 2
    },
    {
        question: "Which character runs the cabbage cart?",
        answers: ["June", "The Boulder", "Cabbage Merchant", "Foaming Mouth Guy"],
        correct: 2
    },
    {
        question: "What is the nickname of Iroh’s tea shop?",
        answers: ["White Lotus Tea House", "Jasmine Dragon", "Ba Sing Se Brews", "Dragon's Cup"],
        correct: 1
    },
    {
        question: "What’s the name of the sword Sokka learns to forge?",
        answers: ["Spirit Blade", "Space Sword", "Moon Fang", "Meteor Sword"],
        correct: 1
    },
    {
        question: "Which two spirits represent the Ocean and the Moon?",
        answers: ["Raava and Vaatu", "La and Tui", "Hei Bai and Koh", "Wan Shi Tong and Fang"],
        correct: 1
    },
    {
        question: "Who helps Aang unlock his chakras?",
        answers: ["Bumi", "Guru Pathik", "Iroh", "Avatar Roku"],
        correct: 1
    },
    {
        question: "What is the name of the spirit library in the desert?",
        answers: ["Gaoling Archive", "White Lotus Library", "Wan Shi Tong’s Library", "The Great Archive"],
        correct: 2
    },
    {
        question: "Which character is also known as 'The Blue Spirit'?",
        answers: ["Sokka", "Zuko", "Jet", "Iroh"],
        correct: 1
    },
    {
        question: "Who was the first Avatar?",
        answers: ["Roku", "Wan", "Kyoshi", "Kuruk"],
        correct: 1
    },
    {
        question: "What is the name of Katara and Sokka’s father?",
        answers: ["Hakoda", "Bato", "Pakku", "Hama"],
        correct: 0
    },
    {
        question: "Which type of bending can create lightning?",
        answers: ["Firebending", "Earthbending", "Airbending", "Waterbending"],
        correct: 0
    },
    {
        question: "Who teaches Aang waterbending?",
        answers: ["Pakku", "Katara", "Hama", "Yue"],
        correct: 1
    },
    {
        question: "Which Fire Nation general wanted to use a giant drill on Ba Sing Se?",
        answers: ["Zhao", "Iroh", "Azula", "Sun"],
        correct: 2
    },
    {
        question: "What is Sokka’s weapon besides his boomerang?",
        answers: ["Sword", "Hammer", "Crossbow", "Spear"],
        correct: 0
    },
    {
        question: "Who becomes the Fire Lord at the end of the series?",
        answers: ["Iroh", "Azula", "Zuko", "Aang"],
        correct: 2
    },
    {
        question: "What tribe is Hama from?",
        answers: ["Southern Water Tribe", "Northern Water Tribe", "Foggy Swamp Tribe", "Earth Kingdom"],
        correct: 0
    }
    {
        question: "What was Aang’s false name when entering Omashu?",
        answers: ["Mushi", "Kuzon", "Bonzu Pippinpaddleopsicopolis III", "Lee"],
        correct: 2
    },
    {
        question: "Which Fire Lord had a comet named after them?",
        answers: ["Azulon", "Zuko", "Ozai", "Sozin"],
        correct: 3
    },
    {
        question: "What colour fire was exclusive to Princess Azula?",
        answers: ["Green", "Purple", "Blue", "Black"],
        correct: 2
    },
    {
        question: "Who do we never see GENERATE lightning?",
        answers: ["Azula", "Iroh", "Zuko", "Ozai"],
        correct: 2
    },
    {
        question: "Which spirit is known as the 'Face Stealer'?",
        answers: ["Hei Bai", "Wan Shi Tong", "Koh", "Vaatu"],
        correct: 2
    },
    {
        question: "Who was Zuko angry with on Ember Island?",
        answers: ["Ozai", "Azula", "Himself", "Iroh"],
        correct: 2
    },
    {
        question: "What title did Ozai give to himself as supreme leader of the new world?",
        answers: ["Immortal Dragon", "Dragon King", "Phoenix King", "God Emperor"],
        correct: 2
    }
];

// Game of Thrones questions
const gotQuestions = [
    {
        question: "What is the motto of House Stark?",
        answers: ["Fire and Blood", "Ours is the Fury", "Winter is Coming", "Hear Me Roar"],
        correct: 2
    },
    {
        question: "Who kills the Night King?",
        answers: ["Jon Snow", "Arya Stark", "Bran Stark", "Daenerys Targaryen"],
        correct: 1
    },
    {
        question: "What is the name of Arya’s sword?",
        answers: ["Needle", "Ice", "Oathkeeper", "Longclaw"],
        correct: 0
    },
    {
        question: "Which dragon survives to the end of the series?",
        answers: ["Drogon", "Rhaegal", "Viserion", "None"],
        correct: 0
    },
    {
        question: "Who is known as 'The Kingslayer'?",
        answers: ["Robert Baratheon", "Stannis Baratheon", "Jaime Lannister", "Sandor Clegane"],
        correct: 2
    },
    {
        question: "What is the name of Daenerys’s first husband?",
        answers: ["Daario Naharis", "Khal Drogo", "Hizdahr zo Loraq", "Jon Snow"],
        correct: 1
    },
    {
        question: "Who poisons King Joffrey at his wedding?",
        answers: ["Olenna Tyrell", "Petyr Baelish", "Sansa Stark", "Tyrion Lannister"],
        correct: 0
    },
    {
        question: "Who killed Roose Bolton?",
        answers: ["Ramsay Bolton", "Jon Snow", "Walder Frey", "Poisoned by his enemies"],
        correct: 0
    },
    {
        question: "What is the name of Jon Snow’s direwolf?",
        answers: ["Ghost", "Nymeria", "Summer", "Shaggydog"],
        correct: 0
    },
    {
    question: "Who sits on the Iron Throne at the end of Game of Thrones?",
    answers: ["Jon Snow", "Sansa Stark", "Bran Stark", "Daenerys Targaryen"],
    correct: 2
    },
    {
        question: "What is the name of Jon Snow’s sword before Longclaw?",
        answers: ["Ice", "Needle", "Oathkeeper", "Widow's Wail"],
        correct: 0
    },
    {
        question: "Who was the youngest Stark child?",
        answers: ["Bran", "Rickon", "Arya", "Robb"],
        correct: 1
    },
    {
        question: "What family does Brienne of Tarth swear loyalty to?",
        answers: ["Stark", "Baratheon", "Lannister", "Targaryen"],
        correct: 0
    },
    {
        question: "Which character is known as the Hound?",
        answers: ["Sandor Clegane", "Gregor Clegane", "Podrick Payne", "Beric Dondarrion"],
        correct: 0
    },
    {
        question: "Who is the leader of the Unsullied?",
        answers: ["Grey Worm", "Drogon", "Jorah Mormont", "Daario Naharis"],
        correct: 0
    },
    {
        question: "What poison was used to kill King Joffrey?",
        answers: ["The Strangler", "Myrish Needle", "The Tears of Lys", "The Long Farewell"],
        correct: 3
    },
    {
        question: "What is the name of the ancestral sword of House Stark?",
        answers: ["Ice", "Longclaw", "Oathkeeper", "Widow's Wail"],
        correct: 0
    },
    {
        question: "What is the name of the castle where House Lannister resides?",
        answers: ["Casterly Rock", "Winterfell", "Dragonstone", "Highgarden"],
        correct: 0
    },
    {
        question: "Who is the 'Mother of Dragons'?",
        answers: ["Cersei Lannister", "Daenerys Targaryen", "Sansa Stark", "Melisandre"],
        correct: 1
    },
    {
        question: "Which character has a face sewn onto their back?",
        answers: ["Arya Stark", "Jaqen H’ghar", "The Waif", "The Kindly Man"],
        correct: 1
    },
    {
        question: "What is the name of the continent where most of the story takes place?",
        answers: ["Essos", "Westeros", "Sothoryos", "Ulthos"],
        correct: 1
    },
    {
        question: "Who resurrects Jon Snow?",
        answers: ["Melisandre", "Thoros of Myr", "Beric Dondarrion", "The Lord of Light"],
        correct: 0
    },
    {
        question: "What are the words of House Targaryen?",
        answers: ["Winter is Coming", "Fire and Blood", "Ours is the Fury", "We Do Not Sow"],
        correct: 1
    },
    {
        question: "What is the nickname of Robert Baratheon?",
        answers: ["The Usurper", "The Young Wolf", "The Mad King", "The Kingslayer"],
        correct: 0
    },
    {
        question: "Who pushes Bran Stark from the tower?",
        answers: ["Cersei Lannister", "Jaime Lannister", "Petyr Baelish", "Sandor Clegane"],
        correct: 1
    },
    {
        question: "Which character kills Stannis Baratheon?",
        answers: ["Brienne of Tarth", "Jon Snow", "Renly Baratheon", "Theon Greyjoy"],
        correct: 0
    },
    {
        question: "What is the name of Arya’s dance instructor?",
        answers: ["Syrio Forel", "Jaqen H’ghar", "Daario Naharis", "Podrick Payne"],
        correct: 0
    },
    {
        question: "Which character is known as the 'Onion Knight'?",
        answers: ["Davos Seaworth", "Bronn", "Euron Greyjoy", "Varys"],
        correct: 0
    },
    {
        question: "What is the ancestral home of House Tyrell?",
        answers: ["Riverrun", "Highgarden", "Storm’s End", "Sunspear"],
        correct: 1
    },
    {
        question: "Who becomes King of the Seven Kingdoms after Bran?",
        answers: ["Tyrion Lannister", "Sansa Stark", "No one, the kingdoms separate", "Jon Snow"],
        correct: 2
    },
    {
        question: "What is the Iron Bank located in?",
        answers: ["Pentos", "Oldtown", "Qarth", "Braavos"],
        correct: 3
    },
    {
        question: "Which character is nicknamed 'Littlefinger'?",
        answers: ["Varys", "Bronn", "Tyrion Lannister", "Petyr Baelish"],
        correct: 3
    },
    {
        question: "What does Valar Morghulis mean?",
        answers: ["All men must serve", "All men must die", "What is dead may never die", "Fire and Blood"],
        correct: 1
    },
    {
        question: "Who kills Tywin Lannister?",
        answers: ["Arya Stark", "Tyrion Lannister", "Cersei Lannister", "Jaime Lannister"],
        correct: 1
    },
    {
        question: "Which house has a golden rose as its sigil?",
        answers: ["House Martell", "House Arryn", "House Tyrell", "House Tully"],
        correct: 2
    },
    {
        question: "What is the name of the giant in the Battle of the Bastards?",
        answers: ["Mag the Mighty", "Dongo", "Wun Wun", "Hodor"],
        correct: 2
    },
    {
        question: "Who commands the Night’s Watch when Jon Snow joins?",
        answers: ["Eddison Tollett", "Benjen Stark", "Jeor Mormont", "Alliser Thorne"],
        correct: 2
    },
    {
        question: "Which Lannister song becomes the unofficial anthem of the Red Wedding?",
        answers: ["Hands of Gold", "Jenny’s Song", "The Bear and the Maiden Fair", "Rains of Castamere"],
        correct: 3
    },
    {
        question: "What metal is fatal to White Walkers?",
        answers: ["Steel", "Silver", "Valyrian Steel", "Dragonglass"],
        correct: 3
    },
    {
        question: "Who is revealed to be Jon Snow’s true mother?",
        answers: ["Catelyn Stark", "Lyanna Stark", "Ashara Dayne", "Daenerys Targaryen"],
        correct: 1
    },
    {
        question: "Who becomes Lord Commander of the Night's Watch after Jon?",
        answers: ["Eddison Tollett", "Samwell Tarly", "Alliser Thorne", "Dolorous Edd"],
        correct: 0
    },
    {
        question: "What is the name of the Valyrian steel dagger used in Bran’s assassination attempt?",
        answers: ["Catspaw Dagger", "Dark Sister", "Heartsbane", "Needle"],
        correct: 0
    },
    {
        question: "Which Stark child was believed dead but lived with the wildlings?",
        answers: ["Rickon", "Arya", "Bran", "Benjen"],
        correct: 2
    },
    {
        question: "Who kills Ramsay Bolton?",
        answers: ["Jon Snow", "Sansa Stark", "Arya Stark", "Brienne of Tarth"],
        correct: 1
    },
    {
        question: "What is the ancestral Valyrian steel sword of House Mormont?",
        answers: ["Ice", "Heartsbane", "Longclaw", "Oathkeeper"],
        correct: 2
    },
    {
        question: "Which city is known as the 'Queen of Cities' in Essos?",
        answers: ["Meereen", "Volantis", "Braavos", "Pentos"],
        correct: 1
    },
    {
        question: "What do the Faceless Men worship?",
        answers: ["The Drowned God", "The Lord of Light", "The Many-Faced God", "The Old Gods"],
        correct: 2
    },
    {
        question: "Who sits on the Iron Throne after Robert Baratheon’s death (immediately)?",
        answers: ["Stannis Baratheon", "Joffrey Baratheon", "Renly Baratheon", "Tommen Baratheon"],
        correct: 1
    },
    {
        question: "What are Daenerys’s titles besides Queen?",
        answers: ["Breaker of Chains", "Mother of Dragons", "Khaleesi", "All of the above"],
        correct: 3
    },
    {
        question: "Who is known as 'The Great Other'?",
        answers: ["The Lord of Light", "The Night King", "The Drowned God", "The Stranger"],
        correct: 1
    }
];