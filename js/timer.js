// ==========================
// NEET EDGE OS - Pomodoro Timer
// ==========================

let totalSeconds = 25 * 60;
let currentSeconds = totalSeconds;
let timer = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {

    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}

function startTimer() {

    if (timer !== null) return;

    timer = setInterval(function () {

        if (currentSeconds > 0) {

            currentSeconds--;

            updateDisplay();

        } else {

            clearInterval(timer);

            timer = null;

            alert("🎉 Great Job! Focus Session Complete.");

        }

    }, 1000);

}

function pauseTimer() {

    clearInterval(timer);

    timer = null;

}

function resetTimer() {

    clearInterval(timer);

    timer = null;

    currentSeconds = totalSeconds;

    updateDisplay();

}

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);

updateDisplay();
