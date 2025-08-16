console.log("JavaScript is connected!");

// Get elements
const quizSection = document.getElementById('quiz');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const progressBar = document.querySelector('.progress-bar.bg-danger');
const avatarBtn = document.getElementById('avatar-btn');
const gotBtn = document.getElementById('got-btn');
const opmBtn = document.getElementById('opm-btn');
const restartMidwayBtn = document.getElementById('restart-midway-btn');

let categorySelection = document.getElementById("category-selection");

function setBackground(imagePath) {
    document.body.classList.add('bg-wallpaper');
    document.body.style.backgroundImage = `url('${imagePath}')`;
}

restartMidwayBtn.addEventListener('click', function () {
    location.reload();
});

function updateProgressBar() {
    const percent = (currentQuestionIndex / currentQuestionSet.length) * 100;
    progressBar.style.width = percent + '%';
    progressBar.setAttribute('aria-valuenow', percent);
}

document.getElementById("view-rules-btn").addEventListener("click", function () {
    categorySelection.classList.add("hide");
    document.getElementById("rules").classList.remove("hide");
    displayRules();
});

document.getElementById("back-to-categories-btn").addEventListener("click", function () {
    document.getElementById("rules").classList.add("hide");
    categorySelection.classList.remove("hide");
});

let selectedCategory = '';
let currentQuestionSet = [];

// Leaderboard helpers
function loadLeaderboard() {
    const stored = JSON.parse(localStorage.getItem(selectedCategory + '-leaderboard')) || [];
    return stored;
}

function saveLeaderboard(board) {
    localStorage.setItem(selectedCategory + '-leaderboard', JSON.stringify(board));
}

function updateLeaderboardDisplay() {
    const board = loadLeaderboard();
    const list = document.getElementById('leaderboard-list');
    if (!list) return;
    list.innerHTML = '';
    board.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.initials.toUpperCase()} - ${entry.score}/${currentQuestionSet.length} (${entry.time}s)`;
        list.appendChild(li);
    });
}

const rules = [
    "Questions are randomised each time you play. No repeats.",
    "You get ten random questions per quiz session from the fandom you choose.",
    "Each question has four options: A, B, C and D. Only one is correct.",
    "You have fifteen seconds to answer each question. Think fast!",
    "Try not to skip. Unanswered questions count as wrong!",
    "Your score is shown at the end with feedback.",
    "Try your best and have fun!"
];

function getRandomQuestions(questionsArray, count = 10) {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayRules() {
    const rulesList = document.getElementById('rules-list');
    rulesList.innerHTML = '';

    rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule;
        rulesList.appendChild(li);
    });
}

avatarBtn.addEventListener('click', function () {
    setBackground('assets/images/bg-avatar-2.jpg');

    selectedCategory = 'avatar';
    currentQuestionSet = getRandomQuestions(avatarQuestions, 10);
    categorySelection.classList.add("hide");
    quizSection.style.display = 'block';
    restartMidwayBtn.classList.remove('d-none');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

gotBtn.addEventListener('click', function () {
    setBackground('assets/images/bg-got-5.jpg');

    selectedCategory = 'got';
    currentQuestionSet = getRandomQuestions(gotQuestions, 10);
    categorySelection.classList.add("hide");
    quizSection.style.display = 'block';
    restartMidwayBtn.classList.remove('d-none');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

opmBtn.addEventListener('click', function () {
    setBackground('assets/images/bg-opm-6.jpg');

    selectedCategory = 'opm';
    currentQuestionSet = getRandomQuestions(onePunchManQuestions, 10);
    categorySelection.classList.add("hide");
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
                endGame();
            }
        }
    }, 1000);
}

function endGame() {
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

function showQuestion(questionObj) {
    questionText.textContent = questionObj.question;

    const shuffledAnswers = [...questionObj.answers].sort(() => 0.5 - Math.random());

    const correctAnswerText = questionObj.correct;

    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index];
        button.disabled = false;
        button.classList.remove('correct', 'wrong');

    button.dataset.correct = (shuffledAnswers[index] === correctAnswerText).toString();
    });

    updateProgressBar();
    startTimer();

}

answerButtons.forEach((button) => {
    button.addEventListener('click', function () {
        clearInterval(timerInterval);

        // Stops impatient users from clicking again during delay
        answerButtons.forEach(btn => btn.disabled = true);

        if (button.dataset.correct === "true") {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');

            const correctBtn = Array.from(answerButtons).find(btn => btn.dataset.correct === "true");
            if (correctBtn) correctBtn.classList.add('correct');
        }

        setTimeout(() => {
            currentQuestionIndex++;
            updateProgressBar();

            if (currentQuestionIndex < currentQuestionSet.length) {
                showQuestion(currentQuestionSet[currentQuestionIndex]);
            } else {
                endGame();
            }
        }, 2000);
    });
});

document.getElementById('restart-btn').addEventListener('click', function () {
    document.getElementById('results').style.display = 'none';
    categorySelection.classList.remove("hide");
});