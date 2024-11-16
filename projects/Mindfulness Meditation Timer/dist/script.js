// Get references to HTML elements
const timerDisplay = document.getElementById('timerDisplay');
const sessionTimeInput = document.getElementById('sessionTime');
const soundSelect = document.getElementById('sound');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

// Audio elements
const audioElements = {
    rain: document.getElementById('rainAudio'),
    ocean: document.getElementById('oceanAudio'),
    forest: document.getElementById('forestAudio'),
    end: document.getElementById('endSound')
};

let countdown;
let totalSeconds = 0;
let isRunning = false;

// Start Meditation Timer
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;

    const minutes = parseInt(sessionTimeInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid meditation time.");
        return;
    }

    totalSeconds = minutes * 60;
    isRunning = true;
    playSound();
    countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(countdown);
        stopAllSounds();
        audioElements.end.play(); // Play finishing sound
        isRunning = false;
        timerDisplay.textContent = 'Time\'s up!';
        resetTimerStyles();
        return;
    }

    totalSeconds--;
    updateTimerDisplay(totalSeconds);
    updateTimerStyles();
}

// Update Timer Display
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

// Update Timer Styles
function updateTimerStyles() {
    if (totalSeconds <= 60 && totalSeconds > 20) {
        timerDisplay.classList.add('warning');
        timerDisplay.classList.remove('danger');
    } else if (totalSeconds <= 20) {
        timerDisplay.classList.add('danger');
    } else {
        resetTimerStyles();
    }
}

// Reset Timer Styles
function resetTimerStyles() {
    timerDisplay.classList.remove('warning', 'danger');
}

// Reset Timer and Stop Sounds
function resetTimer() {
    clearInterval(countdown);
    stopAllSounds();
    isRunning = false;
    totalSeconds = 0;
    updateTimerDisplay(parseInt(sessionTimeInput.value) * 60 || 0);
    resetTimerStyles();
}

// Play selected sound
function playSound() {
    stopAllSounds();
    const selectedSound = soundSelect.value;
    if (audioElements[selectedSound]) {
        audioElements[selectedSound].play();
    }
}

// Stop all sounds
function stopAllSounds() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
// Validate user input before starting the timer
startButton.addEventListener('click', () => {
    let minutes = parseInt(sessionTimeInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        sessionTimeInput.focus();
        return;
    }

    // Proceed with timer start if validation passes
    startTimer();
});
const endSound = document.getElementById('endSound');

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(countdown);
        stopAllSounds();
        endSound.play(); // Play finishing sound
        isRunning = false;
        timerDisplay.textContent = 'Time\'s up!';
        timerDisplay.classList.remove('warning', 'danger'); // Reset styles
        return;
    }

    totalSeconds--;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Change color logic...
}
