console.log("JavaScript is connected!");

alert("Welcome to Fandom Challenge!");

// Get elements
const startBtn = document.getElementById('start-btn');
const rulesSection = document.getElementById('rules');
const quizSection = document.getElementById('quiz');

// When Start Quiz is clicked
startBtn.addEventListener('click', function() {
    rulesSection.style.display = 'none';   // Hide rules
    quizSection.style.display = 'block';   // Show quiz
});