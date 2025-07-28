// Word list
let words = ["PIZZA", "UNICORN", "ROBOT", "BANANA", "SPACESHIP", "NINJA"];

// Game state
let currentWord = "";
let guessedLetters = [];
let lives = 6;
let timeLeft = 10;
let isTimeMode = false;
let timer;
var gameOn = false;
var isTimerOn = false;

// DOM elements
let gameContent = document.getElementById("game-content");
let classicModeBtn = document.getElementById("classic-mode");
let timeModeBtn = document.getElementById("time-mode");
let wordContainer = document.getElementById("word-container");
let livesDisplay = document.getElementById("lives-count");
let timerDisplay = document.getElementById("timer");
let timeLeftDisplay = document.getElementById("time-left");
let messageDisplay = document.getElementById("message");
let keys = document.querySelectorAll(".key");

// Start game
function startGame(timeMode) {
  stopTimer();

  isTimeMode = timeMode;
  let randomIndex = Math.floor(Math.random() * words.length);
  currentWord = words[randomIndex];
  guessedLetters = [];
  lives = 6;
  timeLeft = 10;
  timeLeftDisplay.textContent = timeLeft;

  gameOn = true;

  gameContent.style.display = "block";

  if (isTimeMode === true) {
    timerDisplay.style.display = "block";
  } else {
    timerDisplay.style.display = "none";
  }

  livesDisplay.textContent = lives;
  messageDisplay.textContent = "";

  // Re-enable all keyboard keys
  for (let i = 0; i < keys.length; i++) {
    keys[i].disabled = false;
  }

  updateWordDisplay();
}

// Update word display
function updateWordDisplay() {
  wordContainer.innerHTML = "";

  for (let i = 0; i < currentWord.length; i++) {
    let span = document.createElement("span");
    span.textContent = "_";
    span.className = "word-underscore";
    wordContainer.appendChild(span);
  }
}

// Handle letter guess
function handleGuess(letter) {
  if (isTimeMode === true && isTimerOn === false) {
    startTimer();
  }

  if (guessedLetters.indexOf(letter) !== -1) {
    return;
  }

  guessedLetters.push(letter);
  let correctGuess = false;

  // Disable the corresponding on-screen key
  let button = document.querySelector(
    '[data-key="' + letter.toLowerCase() + '"]'
  );
  if (button !== null) {
    button.disabled = true;
  }

  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      let span = wordContainer.children[i];
      span.textContent = letter;
      span.className = "word-letter";
      correctGuess = true;
    }
  }

  if (correctGuess === false) {
    lives = lives - 1;
    livesDisplay.textContent = lives;
  }

  checkGameStatus();
}

// Check game status
function checkGameStatus() {
  let hasWon = true;

  for (let i = 0; i < wordContainer.children.length; i++) {
    if (wordContainer.children[i].textContent === "_") {
      hasWon = false;
    }
  }

  if (lives === 0 || (isTimeMode === true && timeLeft === 0)) {
    endGame(false);
  } else if (hasWon === true) {
    endGame(true);
  }
}

// Start timer
function startTimer() {
  isTimerOn = true;
  timer = setInterval(function () {
    timeLeft = timeLeft - 1;
    timeLeftDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      checkGameStatus();
    }
  }, 1000);
}

// End game
function endGame(won) {
  gameOn = false;
  stopTimer();
  if (won === true) {
    messageDisplay.textContent = "🎉 You Win!";
  } else {
    messageDisplay.textContent = "💀 Game Over! The word was: " + currentWord;
  }
}

// Event listeners for game modes
classicModeBtn.addEventListener("click", function () {
  startGame(false);
});

timeModeBtn.addEventListener("click", function () {
  startGame(true);
});

// Event listeners for on-screen keyboard
for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (e) => {
    if (gameOn) {
      handleGuess(e.target.getAttribute("data-key").toUpperCase());
      e.target.disabled = true;
    }
  });
}

// Keyboard input event listener
document.addEventListener("keydown", function (e) {
  if (e.key >= "a" && e.key <= "z" && gameOn) {
    handleGuess(e.key.toUpperCase());
  }
});

function stopTimer() {
  isTimerOn = false;
  clearInterval(timer);
}
