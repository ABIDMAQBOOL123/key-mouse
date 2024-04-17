const readline = require('readline');

function keymouse() {
  // Create interface for reading from the terminal
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let lastActiveTime = Date.now();
  let idleTime = 0;

  // Mouse activity tracking
  process.stdin.on('mousemove', () => {
    lastActiveTime = Date.now();
  });

  process.stdin.on('mousedown', () => {
    lastActiveTime = Date.now();
  });

  // Keyboard activity tracking
  process.stdin.on('keypress', () => {
    lastActiveTime = Date.now();
  });

  process.stdin.on('keydown', () => {
    lastActiveTime = Date.now();
  });

  // Check for idle time periodically
  setInterval(() => {
    const now = Date.now();
    const diff = now - lastActiveTime;
    if (diff > 2000) { // 5 minutes in milliseconds
      idleTime += diff;
      console.log(`Idle for ${idleTime / 1000} seconds`);
    }
  }, 1000); // Check every second

  console.log("Move your mouse, click, or type on your keyboard to see activity updates.");

  // Close the readline interface on exit
  rl.on('close', () => {
    process.exit(0);
  });

  return "Activity tracking started."; // Return a message indicating the function has started
}

module.exports = keymouse;
