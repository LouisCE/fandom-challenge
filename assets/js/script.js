console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

// Get elements
const startBtn = document.getElementById('start-btn');
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');

const avatarBtn = document.getElementById('avatar-btn');
const gotBtn = document.getElementById('got-btn');

let selectedCategory = '';
let currentQuestionSet = [];

avatarBtn.addEventListener('click', function() {
    selectedCategory = 'avatar';
    currentQuestionSet = avatarQuestions;
    rulesSection.style.display = 'none';
    quizSection.style.display = 'block';
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

gotBtn.addEventListener('click', function() {
    selectedCategory = 'got';
    currentQuestionSet = gotQuestions;
    rulesSection.style.display = 'none';
    quizSection.style.display = 'block';
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
            if (currentQuestionIndex < avatarQuestions.length) {
                showQuestion(avatarQuestions[currentQuestionIndex]);
                startTimer();
            } else {
                quizSection.style.display = 'none';
                document.getElementById('results').style.display = 'block';

const percent = (score / avatarQuestions.length) * 100;
        let message = '';

        if (percent >= 90) {
            message = "Excellent!";
        } else if (percent >= 70) {
            message = "Good job!";
        } else {
            message = "Keep practicing!";
        }

                document.getElementById('score-text').textContent = 
                    `You scored ${score} out of ${avatarQuestions.length}! ${message}`;
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
        const currentQuestion = avatarQuestions[currentQuestionIndex];
        if (index === currentQuestion.correct) {
            score++;
            console.log("Correct! Score: " + score);
        } else {
            console.log("Wrong! Score: " + score);
        }

        currentQuestionIndex++;
        console.log("Current question index is now: " + currentQuestionIndex);

        if (currentQuestionIndex < avatarQuestions.length) {
            showQuestion(avatarQuestions[currentQuestionIndex]);
        } else {
    quizSection.style.display = 'none';
    document.getElementById('results').style.display = 'block';

const percent = (score / avatarQuestions.length) * 100;
    let message = '';

    if (percent >= 90) {
        message = "Excellent!";
    } else if (percent >= 70) {
        message = "Good job!";
    } else {
        message = "Keep practicing!";
    }

    document.getElementById('score-text').textContent = 
        `You scored ${score} out of ${avatarQuestions.length}! ${message}`;
}

    });
});

// When Start Quiz is clicked
startBtn.addEventListener('click', function() {
    rulesSection.style.display = 'none';
    quizSection.style.display = 'block';
    showQuestion(avatarQuestions[currentQuestionIndex]);
    startTimer();
});