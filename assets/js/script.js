console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

// Get elements
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const progressBar = document.querySelector('.progress-bar.bg-danger');
const avatarBtn = document.getElementById('avatar-btn');
const gotBtn = document.getElementById('got-btn');
const opmBtn = document.getElementById('opm-btn');
const restartMidwayBtn = document.getElementById('restart-midway-btn');

restartMidwayBtn.addEventListener('click', function () {
  location.reload();
});

function updateProgressBar() {
  const percent = (currentQuestionIndex / currentQuestionSet.length) * 100;
  progressBar.style.width = percent + '%';
  progressBar.setAttribute('aria-valuenow', percent);
}

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
        "You have 15 seconds per question.",
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
        "You’ve got 15 seconds per question.",
        "Try not to skip — unanswered ones are wrong!"
    ]
];

function getRandomQuestions(questionsArray, count = 10) {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

avatarBtn.addEventListener('click', function() {
    selectedCategory = 'avatar';
    currentQuestionSet = getRandomQuestions(avatarQuestions, 10);
    document.getElementById("category-selection").style.display = "none";
    quizSection.style.display = 'block';
    restartMidwayBtn.classList.remove('d-none');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

gotBtn.addEventListener('click', function() {
    selectedCategory = 'got';
    currentQuestionSet = getRandomQuestions(gotQuestions, 10);
    document.getElementById("category-selection").style.display = "none";
    quizSection.style.display = 'block';
    restartMidwayBtn.classList.remove('d-none');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

opmBtn.addEventListener('click', function() {
    selectedCategory = 'opm';
    currentQuestionSet = getRandomQuestions(onePunchManQuestions, 10);
    document.getElementById("category-selection").style.display = "none";
    quizSection.style.display = 'block';
    restartMidwayBtn.classList.remove('d-none');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

// Track which question the user is on
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;
    document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
            console.log("Unanswered question counted as wrong.");
            currentQuestionIndex++;
            updateProgressBar();
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
        button.disabled = false;
        button.classList.remove('correct', 'wrong');
    });

    updateProgressBar();
        
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
        updateProgressBar();
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