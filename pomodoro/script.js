const bells = new Audio('./bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
const resetBtn = document.querySelector('.btn-reset');
const pauseBtn = document.querySelector('.btn-pause');
const message = document.querySelector('.app-message');
const counterMsg = document.querySelector('.session-counter');
let myInterval;
let state = true;
let sessionCounter = 0;
let isPaused = false;
let pausedSeconds = 0;
let isBreak = false;

const appTimer = () => {
  if (sessionCounter === 1) {
    counterMsg.innerText = "You have completed 1 session so far.";
  } else if (sessionCounter > 1) {
    counterMsg.innerText = `You have completed ${sessionCounter} sessions so far.`;
  }

  const sessionAmount = 25;

  if (state) {
    state = false;
    isBreak = false;

    message.innerText = "Time to be productive.";

    let totalSeconds = sessionAmount * 60;
    if (pausedSeconds > 0) {
      totalSeconds = pausedSeconds;
      pausedSeconds = 0;
    }

    const updateSeconds = () => {
      if (!isPaused) {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds / 60);
        let secondsLeft = totalSeconds % 60;

        if (secondsLeft < 10) {
          secondDiv.textContent = '0' + secondsLeft;
        } else {
          secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`;

        if (minutesLeft === 0 && secondsLeft === 0) {
          bells.play();
          clearInterval(myInterval);
          sessionCounter++;
          breakTimer();
        }
      } else {
        pausedSeconds = totalSeconds;
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.');
  }
};

function reset() {
  clearInterval(myInterval);
  state = true;
  isPaused = false;
  pausedSeconds = 0;
  const minuteDiv = document.querySelector('.minutes');
  const secondDiv = document.querySelector('.seconds');
  message.innerText = "press start to begin";
  minuteDiv.textContent = 25;
  secondDiv.textContent = "00";
  pauseBtn.innerText = 'Pause';
}

function breakTimer() {
  const sessionAmount = 5;

  state = false;
  isBreak = true;

  message.innerText = "Break time!";

  let totalSeconds = sessionAmount * 60;

  const updateSeconds = () => {
    if (!isPaused) {
      const minuteDiv = document.querySelector('.minutes');
      const secondDiv = document.querySelector('.seconds');

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
        state = true;
        appTimer();
      }
    } else {
      pausedSeconds = totalSeconds;
    }
  };
  myInterval = setInterval(updateSeconds, 1000);
}

function pauseTimer () {
  if (state) {
    alert('No active session to pause.');
  } else {
    isPaused = !isPaused;
    pauseBtn.innerText = isPaused ? 'Resume' : 'Pause';
    if (isPaused) {
      message.innerText = "Timer paused.";
    } else if (isBreak){
      message.innerText = "Break time!";
    } else if (!isBreak) {
      message.innerText = "Time to be productive."
    }
  }
};

startBtn.addEventListener('click', appTimer);
resetBtn.addEventListener('click', reset);
pauseBtn.addEventListener('click', pauseTimer);
