// Restore the background image from the last selected category
const lastCategory = localStorage.getItem('lastCategory');
if (lastCategory) {
    switch(lastCategory) {
        case 'avatar':
            document.body.style.backgroundImage = "url('assets/images/bg-avatar-2.jpg')";
            document.body.classList.add('bg-wallpaper');
            break;
        case 'got':
            document.body.style.backgroundImage = "url('assets/images/bg-got-5.jpg')";
            document.body.classList.add('bg-wallpaper');
            break;
        case 'opm':
            document.body.style.backgroundImage = "url('assets/images/bg-opm-6.jpg')";
            document.body.classList.add('bg-wallpaper');
            break;
    }
}

// Get DOM elements
const leaderboardList = document.getElementById('leaderboard-list');
const submitBtn = document.getElementById('submit-score-btn');
const playerInitialsInput = document.getElementById('player-initials');
const clearBtn = document.getElementById('clear-leaderboard-btn');

// Flags to prevent repeated actions in the same session
let hasSubmittedThisSession = false;
let hasClearedThisSession = false;

// Check if the score was already submitted or leaderboard cleared (persisted in localStorage)
let scoreSubmitted = localStorage.getItem("scoreSubmitted") === "true";
let leaderboardCleared = localStorage.getItem("leaderboardCleared") === "true";

// Hide buttons based on persisted flags
if (scoreSubmitted) {
    submitBtn.style.display = "none";
}
if (leaderboardCleared) {
    clearBtn.style.display = "none";
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
        li.style.fontWeight = 'normal';
        li.style.color = 'white';

        // Highlight only the most recent score
        if (highlightRecentIndex !== null && index === highlightRecentIndex) {
            li.style.fontWeight = 'bold';
            li.style.color = 'gold';

            // Highlight fades back to normal after 3s
            setTimeout(() => {
                li.style.fontWeight = 'normal';
                li.style.color = 'white';
            }, 3000);
        }

        leaderboardList.appendChild(li);
    });
}

// When "Submit Score" is clicked, show initials input box
submitBtn.addEventListener('click', () => {
    document.getElementById('initials-box').style.display = 'block';
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
    document.getElementById('initials-box').style.display = 'none';
    initialsInput.value = '';
    hasSubmittedThisSession = true;
    scoreSubmitted = true;
    localStorage.setItem("scoreSubmitted", "true");
    submitBtn.style.display = 'none';

    // Re-center the remaining buttons
    const btnContainer = submitBtn.parentElement;
    btnContainer.style.display = 'flex';
    btnContainer.style.justifyContent = 'center';
    btnContainer.style.gap = '10px';
});

// Clear leaderboard button functionality
clearBtn.addEventListener('click', () => {
    if (hasClearedThisSession) return;
    if (confirm("Are you sure you want to clear this leaderboard?")) {
        localStorage.removeItem('leaderboard_' + currentCategory);
        displayLeaderboard();
        hasClearedThisSession = true;
        leaderboardCleared = true;
        localStorage.setItem("leaderboardCleared", "true");
        clearBtn.style.display = 'none';

        // Re-center remaining buttons
        const btnContainer = clearBtn.parentElement;
        btnContainer.style.display = 'flex';
        btnContainer.style.justifyContent = 'center';
        btnContainer.style.gap = '10px';

        submitBtn.disabled = false;
        document.getElementById("score-input-container").style.display = "block";
    }
});

// Display saved leaderboard immediately on page load
displayLeaderboard();