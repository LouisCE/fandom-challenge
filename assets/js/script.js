console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

let avatarQuestions = [];
let gotQuestions = [];

async function loadQuestions() {
  try {
    const avatarResponse = await fetch('assets/data/avatarQuestions.json');
    avatarQuestions = await avatarResponse.json();

    const gotResponse = await fetch('assets/data/gotQuestions.json');
    gotQuestions = await gotResponse.json();

    console.log('Questions loaded successfully!');
  } catch (error) {
    console.error('Failed to load questions:', error);
  }
}

loadQuestions();

// Get elements
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');

const avatarBtn = document.getElementById('avatar-btn');
const gotBtn = document.getElementById('got-btn');

document.getElementById("view-rules-btn").addEventListener("click", function () {
document.getElementById("category-selection").style.display = "none";
document.getElementById("rules").style.display = "block";
});

document.getElementById("back-to-categories-btn").addEventListener("click", function () {
  document.getElementById("rules").style.display = "none";
  document.getElementById("category-selection").style.display = "block";
});

let selectedCategory = '';
let currentQuestionSet = [];

const ruleVariants = [
    [
        "Questions are randomised each time you play.",
        "Each question has four options: A, B, C and D.",
        "You have one minute to answer each question.",
        "Unanswered questions count as incorrect."
    ],
    [
        "You get 10 random questions from the fandom you choose.",
        "Each has 4 answers. Only 1 is correct.",
        "You have 60 seconds per question.",
        "No answer = no point!"
    ],
    [
        "Ten questions, one minute each. Think fast!",
        "Each question has 4 possible answers.",
        "Random every time, no repeats.",
        "Missed questions count against you!"
    ],
    [
        "Play your favourite fandom with 10 random questions.",
        "Each has four options to choose from.",
        "You’ve got 60 seconds per question.",
        "Try not to skip — unanswered ones are wrong!"
    ]
];

function getRandomQuestions(questionsArray, count = 10) {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

avatarBtn.addEventListener('click', async function() {
    if (avatarQuestions.length === 0) {
        await loadQuestions();
    }
    selectedCategory = 'avatar';
    currentQuestionSet = getRandomQuestions(avatarQuestions, 10);
    document.getElementById("category-selection").style.display = "none";
    quizSection.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

gotBtn.addEventListener('click', async function() {
    if (gotQuestions.length === 0) {
        await loadQuestions();
    }
    selectedCategory = 'got';
    currentQuestionSet = getRandomQuestions(gotQuestions, 10);
    document.getElementById("category-selection").style.display = "none";
    quizSection.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

// Track which question the user is on
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
            console.log("Unanswered question counted as wrong.");
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestionSet.length) {
                showQuestion(currentQuestionSet[currentQuestionIndex]);
                startTimer();
            } else {
                quizSection.style.display = 'none';
                document.getElementById('results').style.display = 'block';

const percent = (score / currentQuestionSet.length) * 100;
        let message = '';

        if (percent >= 90) {
            message = "Excellent!";
        } else if (percent >= 70) {
            message = "Good job!";
        } else {
            message = "Keep practicing!";
        }

                document.getElementById('score-text').textContent = 
                    `You scored ${score} out of ${currentQuestionSet.length}! ${message}`;
            }
        }
    }, 1000);
}

function showQuestion(questionObj) {
    questionText.textContent = questionObj.question;
    answerButtons.forEach((button, index) => {
        button.textContent = questionObj.answers[index];
    });
        
    startTimer();

}

answerButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        clearInterval(timerInterval);
        const currentQuestion = currentQuestionSet[currentQuestionIndex];
        if (index === currentQuestion.correct) {
            score++;
            console.log("Correct! Score: " + score);
        } else {
            console.log("Wrong! Score: " + score);
        }

        currentQuestionIndex++;
        console.log("Current question index is now: " + currentQuestionIndex);

        if (currentQuestionIndex < currentQuestionSet.length) {
            showQuestion(currentQuestionSet[currentQuestionIndex]);
        } else {
    quizSection.style.display = 'none';
    document.getElementById('results').style.display = 'block';

const percent = (score / currentQuestionSet.length) * 100;
    let message = '';

    if (percent >= 90) {
        message = "Excellent!";
    } else if (percent >= 70) {
        message = "Good job!";
    } else {
        message = "Keep practicing!";
    }

    document.getElementById('score-text').textContent = 
        `You scored ${score} out of ${currentQuestionSet.length}! ${message}`;
}

    });
});

document.getElementById('restart-btn').addEventListener('click', function () {
  document.getElementById('results').style.display = 'none';
  document.getElementById('category-selection').style.display = 'block';
});