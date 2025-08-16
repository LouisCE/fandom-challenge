// Get DOM elements
const leaderboardList = document.getElementById('leaderboard-list');
const submitBtn = document.getElementById('submit-score-btn');
const playerInitialsInput = document.getElementById('player-initials');

// Retrieve scores from localStorage
function loadLeaderboard() {
    return JSON.parse(localStorage.getItem('leaderboard')) || [];
}

// Save scores to localStorage
function saveLeaderboard(board) {
    localStorage.setItem('leaderboard', JSON.stringify(board));
}

// Display leaderboard in HTML
function displayLeaderboard(highlightInitials = null) {
    const board = loadLeaderboard();
    leaderboardList.innerHTML = '';

    board.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.initials.toUpperCase()} - ${entry.score}/10 (${entry.time}s)`;

        // Highlight most recent score
        if (highlightInitials && entry.initials === highlightInitials) {
            li.style.fontWeight = 'bold';
            li.style.color = 'gold';
        }

        leaderboardList.appendChild(li);
    });
}

// Submit score
submitBtn.addEventListener('click', () => {
    const initials = playerInitialsInput.value.trim().substring(0,3).toUpperCase();
    if (!initials) return alert("Enter your initials!");

// Get score and totalTime from localStorage (from the last quiz)
    const score = parseInt(localStorage.getItem('lastScore')) || 0;
    const time = parseInt(localStorage.getItem('lastTime')) || 0;

    const board = loadLeaderboard();
    board.push({ initials, score, time });

    // Sort by score descednding. Time ascending is the tiebreaker.
    board.sort((a, b) => b.score - a.score || a.time - b.time);

    // Keep top 10 scores
    saveLeaderboard(board.slice(0,10));

    // Display leaderboard and highlight recent score
    displayLeaderboard(initials);

    // Hide input box + disable button
    document.getElementById("score-input-container").style.display = "none";
    submitBtn.disabled = true; // Prevent double-submit
});