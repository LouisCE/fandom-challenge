// Avatar: The Last Airbender questions
const avatarQuestions = [{
        question: "What is the name of Aang’s flying bison?",
        answers: ["Appa", "Momo", "Naga", "Pabu"],
        correct: "Appa"
    },
    {
        question: "Which nation was the first to fall to the Fire Nation?",
        answers: ["Air Nomads", "Earth Kingdom", "Water Tribe", "Fire Nation"],
        correct: "Air Nomads"
    },
    {
        question: "Who is the Avatar before Aang?",
        answers: ["Roku", "Kyoshi", "Kuruk", "Yangchen"],
        correct: "Roku"
    },
    {
        question: "What element did Aang struggle to learn the most?",
        answers: ["Fire", "Earth", "Water", "Air"],
        correct: "Earth"
    },
    {
        question: "Who teaches Aang firebending in Book One?",
        answers: ["Iroh", "Jeong Jeong", "Zuko", "Azula"],
        correct: "Jeong Jeong"
    },
    {
        question: "Which spirit helps Aang in the Spirit World as a guide?",
        answers: ["Koh", "Hei Bai", "Roku's Dragon", "Wan Shi Tong"],
        correct: "Roku's Dragon"
    },
    {
        question: "What is the name of Toph’s wrestling persona?",
        answers: ["The Blind Bandit", "The Boulder", "Toph Smash", "Metal Queen"],
        correct: "The Blind Bandit"
    },
    {
        question: "Who captures Appa in Ba Sing Se?",
        answers: ["Dai Li", "Sandbenders", "Azula", "Long Feng"],
        correct: "Long Feng"
    },
    {
        question: "What is the technique Aang uses to defeat Ozai?",
        answers: ["Avatar State", "Energybending", "Chi Blocking", "Bloodbending"],
        correct: "Energybending"
    },
    {
        question: "Which city is the capital of the Earth Kingdom?",
        answers: ["Ba Sing Se", "Omashu", "Gaoling", "Kyoshi Island"],
        correct: "Ba Sing Se"
    },
    {
        question: "Who is the Fire Nation’s banished prince?",
        answers: ["Zuko", "Iroh", "Ozai", "Sozin"],
        correct: "Zuko"
    },
    {
        question: "What special ability does Toph have besides earthbending?",
        answers: ["Metalbending", "Lightning generation", "Waterbending", "Airbending"],
        correct: "Metalbending"
    },
    {
        question: "What animal is the symbol of the Air Nomads?",
        answers: ["Flying bison", "Dragon", "Turtle dove", "Phoenix"],
        correct: "Flying bison"
    },
    {
        question: "What is the name of the secret police in Ba Sing Se?",
        answers: ["Dai Li", "White Lotus", "Red Lotus", "Foggy Swamp Tribe"],
        correct: "Dai Li"
    },
    {
        question: "What is the name of the Fire Nation’s solar eclipse?",
        answers: ["Day of Black Sun", "Blue Spirit Night", "Fire Festival", "Spirit Day"],
        correct: "Day of Black Sun"
    },
    {
        question: "What is the name of Zuko’s ship’s lieutenant?",
        answers: ["Jee", "Han", "Pakku", "Bumi"],
        correct: "Jee"
    },
    {
        question: "What is the name of the Fire Nation comet?",
        answers: ["Roku's Comet", "Agni's Comet", "Ozai's Comet", "Sozin's Comet"],
        correct: "Sozin's Comet"
    },
    {
        question: "Which animal is a mix between a bear and another species in the Earth Kingdom?",
        answers: ["Badgermole", "Ostrich Horse", "Platypus Bear", "Polar Bear Dog"],
        correct: "Platypus Bear"
    },
    {
        question: "Who teaches Toph to use seismic sense?",
        answers: ["Bumi", "Badgermoles", "Her parents", "Aang"],
        correct: "Badgermoles"
    },
    {
        question: "What is the name of the play that reenacts Team Avatar’s adventures?",
        answers: ["The Great Divide", "Fire Nation Tales", "Boiling Rock", "The Ember Island Players"],
        correct: "The Ember Island Players"
    },
    {
        question: "Which member of Team Avatar is a non-bender?",
        answers: ["Katara", "Sokka", "Aang", "Toph"],
        correct: "Sokka"
    },
    {
        question: "Who was the waterbending master at the Northern Water Tribe?",
        answers: ["Arnook", "Hakoda", "Pakku", "Hama"],
        correct: "Pakku"
    },
    {
        question: "Which creature grants the ability to energybend?",
        answers: ["Dragon", "Koizilla", "Badgermole", "Lion Turtle"],
        correct: "Lion Turtle"
    },
    {
        question: "What is the name of Azula’s two closest friends?",
        answers: ["Mai and Ty Lee", "Suki and June", "Ty Lee and Katara", "Mai and Suki"],
        correct: "Mai and Ty Lee"
    },
    {
        question: "Which character says, 'That's rough, buddy'?",
        answers: ["Iroh", "Sokka", "Zuko", "Toph"],
        correct: "Zuko"
    },
    {
        question: "Who becomes Aang’s wife after the series ends?",
        answers: ["Katara", "Toph", "Suki", "Mai"],
        correct: "Katara"
    },
    {
        question: "What is the name of Zuko’s mother?",
        answers: ["Ursa", "Azula", "Kya", "Ilah"],
        correct: "Ursa"
    },
    {
        question: "Which technique allows waterbenders to control people?",
        answers: ["Icebending", "Healing", "Bloodbending", "Energybending"],
        correct: "Bloodbending"
    },
    {
        question: "What fruit does Katara hate?",
        answers: ["Apples", "Bananas", "Oranges", "Papayas"],
        correct: "Papayas"
    },
    {
        question: "What is the nickname of Iroh’s tea shop?",
        answers: ["White Lotus Tea House", "Jasmine Dragon", "Ba Sing Se Brews", "Dragon's Cup"],
        correct: "Jasmine Dragon"
    },
    {
        question: "What’s the name of the sword Sokka learns to forge?",
        answers: ["Spirit Blade", "Space Sword", "Moon Fang", "Meteor Sword"],
        correct: "Space Sword"
    },
    {
        question: "Which two spirits represent the Ocean and the Moon?",
        answers: ["Raava and Vaatu", "La and Tui", "Hei Bai and Koh", "Wan Shi Tong and Fang"],
        correct: "La and Tui"
    },
    {
        question: "Who helps Aang unlock his chakras?",
        answers: ["Bumi", "Guru Pathik", "Iroh", "Avatar Roku"],
        correct: "Guru Pathik"
    },
    {
        question: "What is the name of the spirit library in the desert?",
        answers: ["Gaoling Archive", "White Lotus Library", "Wan Shi Tong’s Library", "The Great Archive"],
        correct: "Wan Shi Tong’s Library"
    },
    {
        question: "Which character is also known as 'The Blue Spirit'?",
        answers: ["Sokka", "Zuko", "Jet", "Iroh"],
        correct: "Zuko"
    },
    {
        question: "Who was the first Avatar?",
        answers: ["Roku", "Wan", "Kyoshi", "Kuruk"],
        correct: "Wan"
    },
    {
        question: "What is the name of Katara and Sokka’s father?",
        answers: ["Hakoda", "Bato", "Pakku", "Hama"],
        correct: "Hakoda"
    },
    {
        question: "Which type of bending can create lightning?",
        answers: ["Firebending", "Earthbending", "Airbending", "Waterbending"],
        correct: "Firebending"
    },
    {
        question: "Who teaches Aang waterbending?",
        answers: ["Pakku", "Katara", "Hama", "Yue"],
        correct: "Katara"
    },
    {
        question: "Who wanted to use a giant drill on Ba Sing Se?",
        answers: ["Zhao", "Iroh", "Azula", "Sun"],
        correct: "Azula"
    },
    {
        question: "What is Sokka’s weapon besides his boomerang?",
        answers: ["Sword", "Hammer", "Crossbow", "Spear"],
        correct: "Sword"
    },
    {
        question: "Who becomes the Fire Lord at the end of the series?",
        answers: ["Iroh", "Azula", "Zuko", "Aang"],
        correct: "Zuko"
    },
    {
        question: "What tribe is Hama from?",
        answers: ["Southern Water Tribe", "Northern Water Tribe", "Foggy Swamp Tribe", "Earth Kingdom"],
        correct: "Southern Water Tribe"
    },
    {
        question: "What was Aang’s false name when entering Omashu?",
        answers: ["Mushi", "Kuzon", "Bonzu Pippinpaddleopsicopolis III", "Lee"],
        correct: "Bonzu Pippinpaddleopsicopolis III"
    },
    {
        question: "Which Fire Lord had a comet named after them?",
        answers: ["Azulon", "Zuko", "Ozai", "Sozin"],
        correct: "Sozin"
    },
    {
        question: "What colour fire was exclusive to Princess Azula?",
        answers: ["Green", "Purple", "Blue", "Black"],
        correct: "Blue"
    },
    {
        question: "Who do we never see GENERATE lightning?",
        answers: ["Azula", "Iroh", "Zuko", "Ozai"],
        correct: "Zuko"
    },
    {
        question: "Which spirit is known as the 'Face Stealer'?",
        answers: ["Hei Bai", "Wan Shi Tong", "Koh", "Vaatu"],
        correct: "Koh"
    },
    {
        question: "Who was Zuko angry with on Ember Island?",
        answers: ["Ozai", "Azula", "Himself", "Iroh"],
        correct: "Himself"
    },
    {
        question: "What title did Ozai give to himself as supreme leader of the new world?",
        answers: ["Immortal Dragon", "Dragon King", "Phoenix King", "God Emperor"],
        correct: "Phoenix King"
    }
];

// Game of Thrones questions
const gotQuestions = [{
        question: "What is the motto of House Stark?",
        answers: ["Fire and Blood", "Ours is the Fury", "Winter is Coming", "Hear Me Roar"],
        correct: "Winter is Coming"
    },
    {
        question: "Who kills the Night King?",
        answers: ["Jon Snow", "Arya Stark", "Bran Stark", "Daenerys Targaryen"],
        correct: "Arya Stark"
    },
    {
        question: "What is the name of Arya’s sword?",
        answers: ["Needle", "Ice", "Oathkeeper", "Longclaw"],
        correct: "Needle"
    },
    {
        question: "Which dragon survives to the end of the series?",
        answers: ["Drogon", "Rhaegal", "Viserion", "None"],
        correct: "Drogon"
    },
    {
        question: "Who is known as 'The Kingslayer'?",
        answers: ["Robert Baratheon", "Stannis Baratheon", "Jaime Lannister", "Sandor Clegane"],
        correct: "Jaime Lannister"
    },
    {
        question: "What is the name of Daenerys’s first husband?",
        answers: ["Daario Naharis", "Khal Drogo", "Hizdahr zo Loraq", "Jon Snow"],
        correct: "Khal Drogo"
    },
    {
        question: "Who poisons King Joffrey at his wedding?",
        answers: ["Olenna Tyrell", "Petyr Baelish", "Sansa Stark", "Tyrion Lannister"],
        correct: "Olenna Tyrell"
    },
    {
        question: "Who killed Roose Bolton?",
        answers: ["Ramsay Bolton", "Jon Snow", "Walder Frey", "Poisoned by his enemies"],
        correct: "Ramsay Bolton"
    },
    {
        question: "What is the name of Jon Snow’s direwolf?",
        answers: ["Ghost", "Nymeria", "Summer", "Shaggydog"],
        correct: "Ghost"
    },
    {
        question: "Who sits on the Iron Throne at the end of Game of Thrones?",
        answers: ["Jon Snow", "Sansa Stark", "Bran Stark", "Daenerys Targaryen"],
        correct: "Bran Stark"
    },
    {
        question: "What is the name of Jon Snow’s sword?",
        answers: ["Ice", "Longclaw", "Oathkeeper", "Widow's Wail"],
        correct: "Longclaw"
    },
    {
        question: "Who was the youngest Stark child?",
        answers: ["Bran", "Rickon", "Arya", "Robb"],
        correct: "Rickon"
    },
    {
        question: "What family does Brienne of Tarth swear loyalty to?",
        answers: ["Stark", "Baratheon", "Lannister", "Targaryen"],
        correct: "Stark"
    },
    {
        question: "Which character is known as the Hound?",
        answers: ["Sandor Clegane", "Gregor Clegane", "Podrick Payne", "Beric Dondarrion"],
        correct: "Sandor Clegane"
    },
    {
        question: "Who is the leader of the Unsullied?",
        answers: ["Grey Worm", "Drogon", "Jorah Mormont", "Daario Naharis"],
        correct: "Grey Worm"
    },
    {
        question: "What poison was used to kill King Joffrey?",
        answers: ["The Strangler", "Myrish Needle", "The Tears of Lys", "The Long Farewell"],
        correct: "The Strangler"
    },
    {
        question: "What is the name of the ancestral sword of House Stark?",
        answers: ["Ice", "Longclaw", "Oathkeeper", "Widow's Wail"],
        correct: "Ice"
    },
    {
        question: "What is the name of the castle where House Lannister resides?",
        answers: ["Casterly Rock", "Winterfell", "Dragonstone", "Highgarden"],
        correct: "Casterly Rock"
    },
    {
        question: "Who is the 'Mother of Dragons'?",
        answers: ["Cersei Lannister", "Daenerys Targaryen", "Sansa Stark", "Melisandre"],
        correct: "Daenerys Targaryen"
    },
    {
        question: "Which character has a face sewn onto their back?",
        answers: ["Arya Stark", "Jaqen H’ghar", "The Waif", "The Kindly Man"],
        correct: "Jaqen H’ghar"
    },
    {
        question: "What is the name of the continent where most of the story takes place?",
        answers: ["Essos", "Westeros", "Sothoryos", "Ulthos"],
        correct: "Westeros"
    },
    {
        question: "Who resurrects Jon Snow?",
        answers: ["Melisandre", "Thoros of Myr", "Beric Dondarrion", "The Lord of Light"],
        correct: "Melisandre"
    },
    {
        question: "What are the words of House Targaryen?",
        answers: ["Winter is Coming", "Fire and Blood", "Ours is the Fury", "We Do Not Sow"],
        correct: "Fire and Blood"
    },
    {
        question: "What is the nickname of Robert Baratheon?",
        answers: ["The Usurper", "The Young Wolf", "The Mad King", "The Kingslayer"],
        correct: "The Usurper"
    },
    {
        question: "Who pushes Bran Stark from the tower?",
        answers: ["Cersei Lannister", "Jaime Lannister", "Petyr Baelish", "Sandor Clegane"],
        correct: "Jaime Lannister"
    },
    {
        question: "Which character kills Stannis Baratheon?",
        answers: ["Brienne of Tarth", "Jon Snow", "Renly Baratheon", "Theon Greyjoy"],
        correct: "Brienne of Tarth"
    },
    {
        question: "What is the name of Arya’s dance instructor?",
        answers: ["Syrio Forel", "Jaqen H’ghar", "Daario Naharis", "Podrick Payne"],
        correct: "Syrio Forel"
    },
    {
        question: "Which character is known as the 'Onion Knight'?",
        answers: ["Davos Seaworth", "Bronn", "Euron Greyjoy", "Varys"],
        correct: "Davos Seaworth"
    },
    {
        question: "What is the ancestral home of House Tyrell?",
        answers: ["Riverrun", "Highgarden", "Storm’s End", "Sunspear"],
        correct: "Highgarden"
    },
    {
        question: "Who is the King Beyond the Wall?",
        answers: ["Mance Rayder", "Renly Baratheron", "Stannis Baratheon", "Balon Greyjoy"],
        correct: "Mance Rayder"
    },
    {
        question: "What is the Iron Bank located in?",
        answers: ["Pentos", "Oldtown", "Qarth", "Braavos"],
        correct: "Braavos"
    },
    {
        question: "Which character is nicknamed 'Littlefinger'?",
        answers: ["Varys", "Bronn", "Tyrion Lannister", "Petyr Baelish"],
        correct: "Petyr Baelish"
    },
    {
        question: "What does Valar Morghulis mean?",
        answers: ["All men must serve", "All men must die", "What is dead may never die", "Fire and Blood"],
        correct: "All men must die"
    },
    {
        question: "Who kills Tywin Lannister?",
        answers: ["Arya Stark", "Tyrion Lannister", "Cersei Lannister", "Jaime Lannister"],
        correct: "Tyrion Lannister"
    },
    {
        question: "Which house has a golden rose as its sigil?",
        answers: ["House Martell", "House Arryn", "House Tyrell", "House Tully"],
        correct: "House Tyrell"
    },
    {
        question: "What is the name of the giant in the Battle of the Bastards?",
        answers: ["Mag the Mighty", "Dongo", "Wun Wun", "Hodor"],
        correct: "Wun Wun"
    },
    {
        question: "Who commands the Night’s Watch when Jon Snow joins?",
        answers: ["Eddison Tollett", "Benjen Stark", "Jeor Mormont", "Alliser Thorne"],
        correct: "Jeor Mormont"
    },
    {
        question: "Which Lannister song becomes the unofficial anthem of the Red Wedding?",
        answers: ["Hands of Gold", "Jenny’s Song", "The Bear and the Maiden Fair", "Rains of Castamere"],
        correct: "Rains of Castamere"
    },
    {
        question: "What metal is fatal to White Walkers?",
        answers: ["Steel", "Silver", "Valyrian Steel", "Dragonglass"],
        correct: "Dragonglass"
    },
    {
        question: "Who is revealed to be Jon Snow’s true mother?",
        answers: ["Catelyn Stark", "Lyanna Stark", "Ashara Dayne", "Daenerys Targaryen"],
        correct: "Lyanna Stark"
    },
    {
        question: "Who becomes Lord Commander of the Night's Watch after Jon?",
        answers: ["Eddison Tollett", "Samwell Tarly", "Alliser Thorne", "Dolorous Edd"],
        correct: "Eddison Tollett"
    },
    {
        question: "What is the name of the Valyrian steel dagger used in Bran’s assassination attempt?",
        answers: ["Catspaw Dagger", "Dark Sister", "Heartsbane", "Needle"],
        correct: "Catspaw Dagger"
    },
    {
        question: "Which Stark child was believed dead but lived with the wildlings?",
        answers: ["Rickon", "Arya", "Bran", "Benjen"],
        correct: "Bran"
    },
    {
        question: "Who kills Ramsay Bolton?",
        answers: ["Jon Snow", "Sansa Stark", "Arya Stark", "Brienne of Tarth"],
        correct: "Sansa Stark"
    },
    {
        question: "What is the ancestral Valyrian steel sword of House Mormont?",
        answers: ["Ice", "Heartsbane", "Longclaw", "Oathkeeper"],
        correct: "Longclaw"
    },
    {
        question: "Which city is known as the 'Queen of Cities' in Essos?",
        answers: ["Meereen", "Volantis", "Braavos", "Pentos"],
        correct: "Volantis"
    },
    {
        question: "What do the Faceless Men worship?",
        answers: ["The Drowned God", "The Lord of Light", "The Many-Faced God", "The Old Gods"],
        correct: "The Many-Faced God"
    },
    {
        question: "Who immediately sits on the Iron Throne after Robert Baratheon’s death?",
        answers: ["Stannis Baratheon", "Joffrey Baratheon", "Renly Baratheon", "Tommen Baratheon"],
        correct: "Joffrey Baratheon"
    },
    {
        question: "What is Daenerys’s title besides Queen?",
        answers: ["Breaker of Chains", "Mother of Dragons", "Khaleesi", "All three"],
        correct: "All three"
    },
    {
        question: "Who is known as 'The Great Other'?",
        answers: ["The Lord of Light", "The Night King", "The Drowned God", "The Stranger"],
        correct: "The Night King"
    }
];

// One Punch Man questions
const onePunchManQuestions = [{
        question: "Who is the main hero known for defeating enemies with a single punch?",
        answers: ["Saitama", "Genos", "Mumen Rider", "Garou"],
        correct: "Saitama"
    },
    {
        question: "What is Genos's role in the series?",
        answers: ["A-Class Hero", "Saitama’s disciple", "Monster", "Villain"],
        correct: "Saitama’s disciple"
    },
    {
        question: "Which of the following is not an S-Class hero?",
        answers: ["Amai Mask", "Puri-Puri Prisoner", "Tank Top Master", "Demon Cyborg"],
        correct: "Amai Mask"
    },
    {
        question: "What is the name of the organization that ranks heroes?",
        answers: ["Hero Association", "Monster Association", "Hero League", "Superhero Guild"],
        correct: "Hero Association"
    },
    {
        question: "Which character is a cyborg seeking revenge?",
        answers: ["Genos", "Saitama", "Speed-o'-Sound Sonic", "Fubuki"],
        correct: "Genos"
    },
    {
        question: "Who is Bang’s brother?",
        answers: ["Bomb", "Garou", "Blast", "Zombieman"],
        correct: "Bomb"
    },
    {
        question: "What is Saitama’s favorite food?",
        answers: ["Pancakes", "Rice balls", "Curry", "Tonkatsu"],
        correct: "Curry"
    },
    {
        question: "Who is the leader of the Blizzard Group?",
        answers: ["Fubuki", "Tatsumaki", "Sweet Mask", "Hellfire Flame"],
        correct: "Fubuki"
    },
    {
        question: "Which villain is known as the 'Hero Hunter'?",
        answers: ["Garou", "Boros", "Deep Sea King", "Carnage Kabuto"],
        correct: "Garou"
    },
    {
        question: "What power does Tornado of Terror have?",
        answers: ["Psychic abilities", "Super strength", "Fire manipulation", "Speed"],
        correct: "Psychic abilities"
    },
    {
        question: "Which monster can split into numerous duplicates?",
        answers: ["Black Sperm", "Evil Natural Water", "Phoenix Man", "Homeless Emperor"],
        correct: "Black Sperm"
    },
    {
        question: "Who is the alien leader that invades Earth?",
        answers: ["Boros", "Vaccine Man", "Garou", "Speed-o'-Sound Sonic"],
        correct: "Boros"
    },
    {
        question: "What is Saitama’s favorite hobby?",
        answers: ["Shopping", "Playing video games", "Cooking", "Fishing"],
        correct: "Shopping"
    },
    {
        question: "Which city does Saitama live in?",
        answers: ["City A", "City Z", "City C", "City B"],
        correct: "City Z"
    },
    {
        question: "Who is the top hero of Class S?",
        answers: ["Bang", "Blast", "Tornado", "Metal Knight"],
        correct: "Blast"
    },
    {
        question: "Which hero is known as 'Metal Bat'?",
        answers: ["Genos", "Bad", "Mumen Rider", "Iaian"],
        correct: "Bad"
    },
    {
        question: "Who taught Saitama his workout routine?",
        answers: ["Genos", "Nobody", "Bang", "King"],
        correct: "Nobody"
    },
    {
        question: "Who is known for wearing a bicycle helmet while fighting crime?",
        answers: ["Tank Top Master", "Puri-Puri Prisoner", "Mumen Rider", "Metal Bat"],
        correct: "Mumen Rider"
    },
    {
        question: "Which monster is Disaster Level: Dragon?",
        answers: ["Mosquito Girl", "Crablante", "Deep Sea King", "Carnage Kabuto"],
        correct: "Carnage Kabuto"
    },
    {
        question: "Which is the most largest of the Centipede monsters?",
        answers: ["Junior Centipede", "Senior Centipede", "Elder Centipede", "Ancient Centipede"],
        correct: "Ancient Centipede"
    },
    {
        question: "What is Saitama’s hero name given by the Hero Association?",
        answers: ["Bald Hero", "Caped Baldy", "One Punch Man", "Strongest Hero"],
        correct: "Caped Baldy"
    },
    {
        question: "Who is the king of the Monster Association in One Punch Man?",
        answers: ["Orochi", "Gouketsu", "Lord Boros", "Garou"],
        correct: "Orochi"
    },
    {
        question: "What rank does Saitama start at in the Hero Association?",
        answers: ["C-Class", "B-Class", "A-Class", "S-Class"],
        correct: "C-Class"
    },
    {
        question: "What food does Saitama often buy on sale?",
        answers: ["Bananas", "Meat", "Ramen", "Eggs"],
        correct: "Bananas"
    },
    {
        question: "Who is known as the 'Cyclist for Justice'?",
        answers: ["Mumen Rider", "King", "Genos", "Saitama"],
        correct: "Mumen Rider"
    },
    {
        question: "Which hero is nicknamed the 'Strongest Man on Earth' by reputation?",
        answers: ["Bang", "King", "Blast", "Metal Bat"],
        correct: "King"
    },
    {
        question: "What is Bang’s hero name?",
        answers: ["Silver Fang", "Old Fist", "White Claw", "Iron Wolf"],
        correct: "Silver Fang"
    },
    {
        question: "What is the highest disaster level?",
        answers: ["Demon", "Dragon", "God", "Apocalypse"],
        correct: "God"
    },
    {
        question: "What is Speed-o'-Sound Sonic’s weapon of choice?",
        answers: ["Kunai", "Sword", "Nunchaku", "Shuriken"],
        correct: "Sword"
    },
    {
        question: "Which S-Class hero uses mechanical armor for combat?",
        answers: ["Drive Knight", "Tank Top Master", "Watchdog Man", "Metal Bat"],
        correct: "Drive Knight"
    },
    {
        question: "Which monster gets stronger in the rain?",
        answers: ["Orochi", "Deep Sea King", "Lord Boros", "Gouketsu"],
        correct: "Deep Sea King"
    },
    {
        question: "What is Garou’s fighting style called?",
        answers: ["Iron Fist", "Water Stream Rock Smashing Fist", "Martial Tornado", "Beast Claw"],
        correct: "Water Stream Rock Smashing Fist"
    },
    {
        question: "Which hero specializes in covert operations?",
        answers: ["Drive Knight", "Zombieman", "Metal Bat", "Tank Top Tiger"],
        correct: "Drive Knight"
    },
    {
        question: "Which alien is known for surviving multiple punches from Saitama?",
        answers: ["Gouketsu", "Deep Sea King", "Boros", "Carnage Kabuto"],
        correct: "Boros"
    },
    {
        question: "Which hero looks intimidating but is actually cowardly?",
        answers: ["King", "Genos", "Saitama", "Bang"],
        correct: "King"
    },
    {
        question: "Which monster is capable of resurrection?",
        answers: ["Phoenix Man", "Evil Natural Water", "Orochi", "Vaccine Man"],
        correct: "Phoenix Man"
    },
    {
        question: "What is the color of Saitama’s hero costume?",
        answers: ["Yellow", "Red", "Blue", "Black"],
        correct: "Yellow"
    },
    {
        question: "Who is known as 'The Handsome Masked Hero'?",
        answers: ["Genos", "Amai Mask", "Bang", "Metal Knight"],
        correct: "Amai Mask"
    },
    {
        question: "Which hero commands a robot army?",
        answers: ["Metal Knight", "Metal Bat", "Child Emperor", "King"],
        correct: "Metal Knight"
    },
    {
        question: "Which hero can regenerate from just a head?",
        answers: ["Zombieman", "Pig God", "King", "Magic Trick Man"],
        correct: "Zombieman"
    },
    {
        question: "Who is the Hero Association’s highest-ranking member?",
        answers: ["Blast", "King", "Garou", "Saitama"],
        correct: "Blast"
    },
    {
        question: "Which hero uses gadgets and traps in battle?",
        answers: ["Drive Knight", "Child Emperor", "Metal Knight", "Watchdog Man"],
        correct: "Child Emperor"
    },
    {
        question: "Which monster can go for a week-long rampage?",
        answers: ["Carnage Kabuto", "Overgrown Rover", "Beefcake", "Armored Gorilla"],
        correct: "Carnage Kabuto"
    },
    {
        question: "Which group of aliens invaded Earth?",
        answers: ["Dark Matter Thieves", "Monster Association", "Galactic Empire", "Cosmic Raiders"],
        correct: "Dark Matter Thieves"
    },
    {
        question: "Who is the cyborg hero?",
        answers: ["Genos", "Metal Bat", "Zombieman", "Drive Knight"],
        correct: "Genos"
    },
    {
        question: "Who is the most durable hero?",
        answers: ["Superalloy Darkshine", "Tanktop Master", "Flashy Flash", "Puri-Puri Prisoner"],
        correct: "Superalloy Darkshine"
    },
    {
        question: "Who is not a disciple of Atomic Samurai?",
        answers: ["Stinger", "Iaian", "Okamaitachi", "Bushidrill"],
        correct: "Stinger"
    },
    {
        question: "Who is the cyborg disciple of Saitama?",
        answers: ["Genos", "Bang", "King", "Metal Bat"],
        correct: "Genos"
    },
    {
        question: "What is the Hero Association HQ shaped like?",
        answers: ["Sphere", "Tower", "Cube", "Dome"],
        correct: "Tower"
    },
    {
        question: "Which hero is in charge of protecting City Q?",
        answers: ["Watchdog Man", "Tank Top Master", "Metal Bat", "Drive Knight"],
        correct: "Watchdog Man"
    },
    {
        question: "Which hero did Saitama once refer to as 'Forelocks in the Face'?",
        answers: ["Flashy Flash", "Superalloy Darkshine", "Tatsumaki", "Amai Mask"],
        correct: "Flashy Flash"
    },
    {
        question: "Who was the leader of the Dark Matter Thieves?",
        answers: ["Lord Boros", "Gouketsu", "Orochi", "Garou"],
        correct: "Lord Boros"
    },
    {
        question: "Which monster was created in the House of Evolution?",
        answers: ["Awakened Cockroach", "Deep Sea King", "Mosquito Girl", "Vaccine Man"],
        correct: "Mosquito Girl"
    },
    {
        question: "Which monster can fit into openings as small as 3mm?",
        answers: ["Evil Natural Water", "Nyan", "Kenzan Rat", "Black Sperm"],
        correct: "Nyan"
    },
    {
        question: "Which villain wears ninja attire?",
        answers: ["Speed-o'-Sound Sonic", "Garou", "Gouketsu", "Orochi"],
        correct: "Speed-o'-Sound Sonic"
    },
    {
        question: "What is Saitama’s usual facial expression?",
        answers: ["Serious", "Blank", "Smiling", "Angry"],
        correct: "Blank"
    },
    {
        question: "Which hero has the title 'Tornado of Terror'?",
        answers: ["Fubuki", "Metal Knight", "Tanktop Master", "Tatsumaki"],
        correct: "Tatsumaki"
    },
    {
        question: "Which villain was Saitama's final battle in Season 1?",
        answers: ["Boros", "Garou", "Orochi", "Gouketsu"],
        correct: "Boros"
    },
    {
        question: "Which S-Class hero is also a master of disguise?",
        answers: ["Drive Knight", "Zombieman", "Watchdog Man", "Child Emperor"],
        correct: "Child Emperor"
    }
];