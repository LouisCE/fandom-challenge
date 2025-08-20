console.log("JavaScript is connected!");

// DOM element references
const quizSection = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer-btn");
const progressBar = document.querySelector(".progress-bar.bg-danger");
const avatarBtn = document.getElementById("avatar-btn");
const gotBtn = document.getElementById("got-btn");
const opmBtn = document.getElementById("opm-btn");
const restartMidwayBtn = document.getElementById("restart-midway-btn");

let categorySelection = document.getElementById("category-selection");

// Background handler
function setBackground(categoryClass = "") {
    document.body.classList.remove("bg-avatar", "bg-got", "bg-opm");

    if (categoryClass) {
        document.body.classList.add("bg-wallpaper", categoryClass);
    } else {
        document.body.classList.remove("bg-wallpaper");
    }
}

// Restart quiz midway
restartMidwayBtn.addEventListener("click", function () {
    location.reload();
});

// Update progress bar as user moves through quiz
function updateProgressBar() {
    progressBar.classList.forEach((cls) => {
        if (cls.startsWith("q")) progressBar.classList.remove(cls);
    });
    progressBar.classList.add(`q${currentQuestionIndex}`);
    const percent = (currentQuestionIndex / currentQuestionSet.length) * 100;
    progressBar.setAttribute("aria-valuenow", percent);
}

// Show rules
document
    .getElementById("view-rules-btn")
    .addEventListener("click", function () {
        categorySelection.classList.add("hide");
        document.getElementById("rules").classList.remove("hide");
        displayRules();
    });

// Back to category selection from rules
document
    .getElementById("back-to-categories-btn")
    .addEventListener("click", function () {
        document.getElementById("rules").classList.add("hide");
        categorySelection.classList.remove("hide");
    });

// Quiz data and rules
let selectedCategory = "";
let currentQuestionSet = [];

const rules = [
    "Questions are randomised each time you play. No repeats.",
    "You get ten random questions per quiz session from the fandom you choose.",
    "Each question has four options: A, B, C and D. Only one is correct.",
    "You have fifteen seconds to answer each question. Think fast!",
    "Try not to skip. Unanswered questions count as wrong!",
    "Your score is shown at the end with feedback.",
    "Try your best and have fun!",
];

// Pick random 10 questions from the category
function getRandomQuestions(questionsArray, count = 10) {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Display rules dynamically in HTML
function displayRules() {
    const rulesList = document.getElementById("rules-list");
    rulesList.innerHTML = "";

    rules.forEach((rule) => {
        const li = document.createElement("li");
        li.textContent = rule;
        rulesList.appendChild(li);
    });
}

// Category button handlers
// When Avatar button is clicked
avatarBtn.addEventListener("click", function () {
    setBackground("bg-avatar");

    // Save category choice and reset localStorage states
    selectedCategory = "avatar";
    localStorage.setItem("lastCategory", selectedCategory);
    localStorage.setItem("scoreSubmitted", "false");

    // Get 10 random Avatar questions
    currentQuestionSet = getRandomQuestions(avatarQuestions, 10);

    // Hide category selection, show quiz section, enable restart
    categorySelection.classList.add("hide");
    quizSection.classList.remove("hide");
    restartMidwayBtn.classList.remove("d-none");

    // Reset counters
    currentQuestionIndex = 0;
    score = 0;

    // Start timers and display the first question
    startTotalTimer();
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

// When Game of Thrones button is clicked
gotBtn.addEventListener("click", function () {
    setBackground("bg-got");

    selectedCategory = "got";
    localStorage.setItem("lastCategory", selectedCategory);
    localStorage.setItem("scoreSubmitted", "false");
    currentQuestionSet = getRandomQuestions(gotQuestions, 10);
    categorySelection.classList.add("hide");
    quizSection.classList.remove("hide");
    restartMidwayBtn.classList.remove("d-none");
    currentQuestionIndex = 0;
    score = 0;

    startTotalTimer();
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

// When One Punch Man button is clicked
opmBtn.addEventListener("click", function () {
    setBackground("bg-opm");
    selectedCategory = "opm";
    localStorage.setItem("lastCategory", selectedCategory);
    localStorage.setItem("scoreSubmitted", "false");
    currentQuestionSet = getRandomQuestions(onePunchManQuestions, 10);
    categorySelection.classList.add("hide");
    quizSection.classList.remove("hide");
    restartMidwayBtn.classList.remove("d-none");
    currentQuestionIndex = 0;
    score = 0;

    startTotalTimer();
    showQuestion(currentQuestionSet[currentQuestionIndex]);
    startTimer();
});

// Track which question the user is on
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;

// Track total quiz completion time
let totalTime = 0;
let totalTimerInterval;

// Timer functions
// Start total quiz timer
function startTotalTimer() {
    totalTime = 0;
    totalTimerInterval = setInterval(() => {
        totalTime++;
    }, 1000);
}

// Stop total quiz timer
function stopTotalTimer() {
    clearInterval(totalTimerInterval);
}

// Start per-question timer
function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15;

    const timerElement = document.getElementById("timer");

    // Reset text and remove danger class immediately
    timerElement.textContent = `Time left: ${timeLeft}s`;
    timerElement.classList.remove("danger");

    timerInterval = setInterval(() => {

        timeLeft--;

        // Stop at 0 immediately
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = `Time left: 0s`;
            currentQuestionIndex++;
            updateProgressBar();
            if (currentQuestionIndex < currentQuestionSet.length) {
                showQuestion(currentQuestionSet[currentQuestionIndex]);
                startTimer();
            } else {
                endGame();
            }
            return;
        }

        // Show time left
        timerElement.textContent = `Time left: ${timeLeft}s`;

        // Danger class below 5 seconds
        if (timeLeft <= 5) {
            timerElement.classList.add("danger");
        } else {
            timerElement.classList.remove("danger");
        }

    }, 1000);
}

// Endgame handling
function endGame() {
    stopTotalTimer();

    // Save latest score for leaderboard
    localStorage.setItem("latestScore", score);

    // Save results to localStorage
    localStorage.setItem("lastScore", score);
    localStorage.setItem("lastTime", totalTime);

    // Hide quiz, show results
    quizSection.classList.add("hide");
    document.getElementById("results").classList.remove("hide");

    // Calculate percentage score
    const percent = (score / currentQuestionSet.length) * 100;
    let message = "";

    // Feedback message based on performance
    if (percent >= 90) {
        message = "Congratulations! You're a superfan!";
        // Fire confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                y: 0.6
            }
        });
    } else if (percent >= 70) {
        message = "Good job! You know your stuff.";
    } else {
        message = "You can do better. Try again.";
    }

    // Show score and message
    document.getElementById(
        "score-text"
    ).textContent = `You scored ${score} out of ${currentQuestionSet.length}! ${message}`;
}

// Display questions
function showQuestion(questionObj) {
    // Show question text
    questionText.textContent = questionObj.question;

    // Shuffle answers so order is random
    const shuffledAnswers = [...questionObj.answers].sort(
        () => 0.5 - Math.random()
    );
    const correctAnswerText = questionObj.correct;

    // Fill buttons with answers
    answerButtons.forEach((button, index) => {
        button.textContent = shuffledAnswers[index];
        button.disabled = false;
        button.classList.remove("correct", "wrong");

        // Store whether this button is correct
        button.dataset.correct = (
            shuffledAnswers[index] === correctAnswerText
        ).toString();
    });

    updateProgressBar();
    startTimer();
}

// Answer button handling
answerButtons.forEach((button) => {
    button.addEventListener("click", function () {
        clearInterval(timerInterval);

        // Stops impatient users from clicking again during delay
        answerButtons.forEach((btn) => (btn.disabled = true));

        if (button.dataset.correct === "true") {
            // Correct answer
            score++;
            button.classList.add("correct");
        } else {
            // Wrong answer
            button.classList.add("wrong");

            // Highlight correct answer
            const correctBtn = Array.from(answerButtons).find(
                (btn) => btn.dataset.correct === "true"
            );
            if (correctBtn) correctBtn.classList.add("correct");
        }

        // After short delay, load next question or end game
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

// Navigation & buttons
// Restart quiz button (from results screen)
document.getElementById("restart-btn").addEventListener("click", function () {
    document.getElementById("results").classList.add("hide");
    categorySelection.classList.remove("hide");
    setBackground(); // Reset background
});

// Back to categories (from rules screen)
document
    .getElementById("back-to-categories-btn")
    .addEventListener("click", function () {
        document.getElementById("rules").classList.add("hide");
        categorySelection.classList.remove("hide");
        setBackground();
    });

// Submit score & leaderboard
const submitScoreBtn = document.getElementById("submit-score-btn");
if (submitScoreBtn) {
    submitScoreBtn.addEventListener("click", () => {
        window.location.href = "leaderboard.html";
    });
}

// Go to leaderboard button
document
    .getElementById("go-to-leaderboard-btn")
    .addEventListener("click", () => {
        window.location.href = "leaderboard.html";
    });