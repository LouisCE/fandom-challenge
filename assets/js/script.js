console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

// Get elements
const startBtn = document.getElementById('start-btn');
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');

// Track which question the user is on
let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionObj) {
    questionText.textContent = questionObj.question;
    answerButtons.forEach((button, index) => {
        button.textContent = questionObj.answers[index];
    });
}

answerButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
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
        }

    });
});

// When Start Quiz is clicked
startBtn.addEventListener('click', function() {
    rulesSection.style.display = 'none';
    quizSection.style.display = 'block';
    showQuestion(avatarQuestions[currentQuestionIndex]);
});