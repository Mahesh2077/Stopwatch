//variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;

//DOM elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

//button event listeners
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

//stopwatch functions
function startStopwatch() {
  intervalId = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      seconds += 1;
      milliseconds = 0;
    }
    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }
    updateTime();
  }, 10);
}

function stopStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateTime();
}

function updateTime() {
  minutesElement.innerText = minutes.toString().padStart(2, '0');
  secondsElement.innerText = seconds.toString().padStart(2, '0');
  millisecondsElement.innerText = milliseconds.toString().padStart(2, '0');
}
