// Get references to the buttons and image
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const memeImage = document.getElementById("memeImage");

// This variable will store the interval ID for the movement
let moveInterval;

// Function to start moving the meme image
function startMove() {
  // Disable the Start button and enable the Stop button
  startBtn.disabled = true;
  stopBtn.disabled = false;

  // Set an interval to move the image every 100 milliseconds
  // I used the setInterval method to move the image every 1 second 
  // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  moveInterval = setInterval(() => {
    // Calculates random values for position change within the window's viewport
    // Access the window's innerWidth and innerHeight properties to get the browser window's width and height 
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/window
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
    const randomX = Math.random() * (window.innerWidth - memeImage.width);
    const randomY = Math.random() * (window.innerHeight - memeImage.height);

    memeImage.style.left = randomX + 'px';
    memeImage.style.top = randomY + 'px';
  }, 1000);
}

// Function to stop the meme image movement
function stopMove() {
  // Disable the Stop button and enable the Start button
  stopBtn.disabled = true;
  startBtn.disabled = false;

  // Clear the interval to stop movement
  // https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  clearInterval(moveInterval);
}

// Add click event listeners to the buttons
startBtn.addEventListener("click", startMove);
stopBtn.addEventListener("click", stopMove);
