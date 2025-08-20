// Restore the background image from the last selected category
const lastCategory = localStorage.getItem('lastCategory');
if (lastCategory) {
  switch (lastCategory) {
    case "avatar":
      document.body.classList.add("bg-avatar", "bg-wallpaper");
      break;
    case "got":
      document.body.classList.add("bg-got", "bg-wallpaper");
      break;
    case "opm":
      document.body.classList.add("bg-opm", "bg-wallpaper");
      break;
  }
}

// Get DOM elements
const leaderboardList = document.getElementById('leaderboard-list');
const submitBtn = document.getElementById('submit-score-btn');
const playerInitialsInput = document.getElementById('player-initials');

// Flag to prevent repeated actions in the same session
let hasSubmittedThisSession = false;

// Check if the score was already submitted or leaderboard cleared (persisted in localStorage)
let scoreSubmitted = localStorage.getItem("scoreSubmitted") === "true";

// Hide buttons based on persisted flags
if (scoreSubmitted) {
    submitBtn.classList.add("hidden");
}

// Current quiz category (default to 'avatar' if none saved)
const currentCategory = localStorage.getItem('lastCategory') || 'avatar';

// Retrieve scores from localStorage
function loadLeaderboard() {
    return JSON.parse(localStorage.getItem('leaderboard_' + currentCategory)) || [];
}

// Save scores to localStorage
function saveLeaderboard(board) {
    localStorage.setItem('leaderboard_' + currentCategory, JSON.stringify(board));
}

// Display leaderboard in HTML
function displayLeaderboard(highlightRecentIndex = null) {
    const board = loadLeaderboard();
    leaderboardList.innerHTML = '';

    board.forEach((entry, index) => {
        const li = document.createElement('li');
    li.textContent = `${entry.initials.toUpperCase()} - ${entry.score}/10 (${entry.time}s)`;
    li.classList.add("leaderboard-entry");

    // Highlight only the most recent score
    if (highlightRecentIndex !== null && index === highlightRecentIndex) {
        li.classList.add("highlight");

        // Remove highlight after 3s
        setTimeout(() => {
            li.classList.remove("highlight");
        }, 3000);
    }

    leaderboardList.appendChild(li);
});
}

// When "Submit Score" is clicked, show initials input box
submitBtn.addEventListener('click', () => {
    document.getElementById('initials-box').classList.remove("hidden");
    document.getElementById('player-initials').focus();
});

// When "Confirm" is clicked, save the score
document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    if (hasSubmittedThisSession) return;
    const initialsInput = document.getElementById('player-initials');
    const initials = initialsInput.value.trim().substring(0,3).toUpperCase();
    if (!initials) return alert("Please enter your initials!");

    // Get score and time from localStorage (saved by quiz)
    const score = parseInt(localStorage.getItem('lastScore')) || 0;
    const time = parseInt(localStorage.getItem('lastTime')) || 0;

    const board = loadLeaderboard();
    board.push({ initials, score, time });

    // Sort by score descending, then time ascending as tiebreaker
    board.sort((a,b) => b.score - a.score || a.time - b.time);
    const top10 = board.slice(0,10); // Keep only top 10
    saveLeaderboard(top10);

    // Find index of most recent entry for highlighting
    const recentIndex = top10.findIndex(entry => entry.initials === initials && entry.score === score && entry.time === time);
    displayLeaderboard(recentIndex);

    // Hide input box and reset input field
    document.getElementById('initials-box').classList.add("hidden");
    initialsInput.value = '';
    hasSubmittedThisSession = true;
    scoreSubmitted = true;
    localStorage.setItem("scoreSubmitted", "true");
    submitBtn.classList.add("hidden");

    // Re-center the remaining buttons
    const btnContainer = submitBtn.parentElement;
    btnContainer.classList.add("btn-container");
});

// Display saved leaderboard immediately on page load
displayLeaderboard();