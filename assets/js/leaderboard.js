// Restore background from last selected category
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

            // Flash effect: fade back to normal after 3s
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
    document.getElementById('player-initials').focus(); // auto-focus
});

// When "Confirm" is clicked, save the score
document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    const initialsInput = document.getElementById('player-initials');
    const initials = initialsInput.value.trim().substring(0,3).toUpperCase();
    if (!initials) return alert("Please enter your initials!");

    const score = parseInt(localStorage.getItem('lastScore')) || 0;
    const time = parseInt(localStorage.getItem('lastTime')) || 0;

    const board = loadLeaderboard();
    board.push({ initials, score, time });

    board.sort((a,b) => b.score - a.score || a.time - b.time);
    const top10 = board.slice(0,10);
    saveLeaderboard(top10);

    const recentIndex = top10.findIndex(entry => entry.initials === initials && entry.score === score && entry.time === time);
    displayLeaderboard(recentIndex);

    // Hide input and clear
    document.getElementById('initials-box').style.display = 'none';
    initialsInput.value = '';
});

// Clear leaderboard button functionality
const clearBtn = document.getElementById('clear-leaderboard-btn');
clearBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear this leaderboard?")) {
        localStorage.removeItem('leaderboard_' + currentCategory);
        displayLeaderboard();
        submitBtn.disabled = false;
        document.getElementById("score-input-container").style.display = "block";
    }
});

// Show saved scores immediately on page load
displayLeaderboard();