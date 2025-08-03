console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

// Get elements
const startBtn = document.getElementById('start-btn');
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');

// When Start Quiz is clicked
startBtn.addEventListener('click', function() {
    rulesSection.style.display = 'none';
    quizSection.style.display = 'block';
});