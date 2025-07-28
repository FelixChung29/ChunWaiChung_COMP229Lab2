let intervalId = null; // To track intervals for auto and random modes
let currentAutoIndex = 0; // Track position in auto mode array

const autoModeSequence = [
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "red",
  "red",
  "green",
  "yellow",
  "red",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "red",
  "green",
  "yellow",
  "red",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "red",
  "yellow",
  "green",
  "red",
  "yellow",
  "green",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
  "yellow",
  "red",
  "yellow",
  "green",
];

function clearLights() {
  document.getElementById("red").classList.remove("active");
  document.getElementById("yellow").classList.remove("active");
  document.getElementById("green").classList.remove("active");
}

function showRed() {
  if (intervalId) stopModes();
  clearLights();
  document.getElementById("red").classList.add("active");
}

function showYellow() {
  if (intervalId) stopModes();
  clearLights();
  document.getElementById("yellow").classList.add("active");
}

function showGreen() {
  if (intervalId) stopModes();
  clearLights();
  document.getElementById("green").classList.add("active");
}

function startAutoMode() {
  stopModes(); // Clear any running interval
  currentAutoIndex = 0; // Start from the beginning of the array
  intervalId = setInterval(() => {
    const color = autoModeSequence[currentAutoIndex];
    clearLights();
    document.getElementById(color).classList.add("active");
    currentAutoIndex++;

    // Reset to 0 when we reach the end
    if (currentAutoIndex >= autoModeSequence.length) {
      currentAutoIndex = 0;
    }
  }, 500);
}

function startRandomMode() {
  stopModes(); // Clear any running interval
  intervalId = setInterval(() => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    clearLights();
    document.getElementById(randomColor).classList.add("active");
  }, 500);
}

function stopModes() {
  clearInterval(intervalId); // Stop any active interval
  clearLights(); // Turn off all lights
}

// Assign event handlers using onmousedown
document.getElementById("red-btn").onmousedown = showRed;
document.getElementById("yellow-btn").onmousedown = showYellow;
document.getElementById("green-btn").onmousedown = showGreen;
document.getElementById("auto-btn").onmousedown = startAutoMode;
document.getElementById("random-btn").onmousedown = startRandomMode;
document.getElementById("stop-btn").onmousedown = stopModes;
