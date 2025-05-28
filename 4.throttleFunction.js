// Throttle utility to limit how often a function runs
function throttle(callback, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      callback.apply(this, args);
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

// Function to handle and log the mouse position
function logMousePosition(x, y) {
  console.log(`Mouse position = (${x}, ${y})`);
}

// Throttled version of the mouse position logger
const throttledMouseLogger = throttle(logMousePosition, 1000);

// Attach event listener with throttling
window.addEventListener('mousemove', (event) => {
  throttledMouseLogger(event.clientX, event.clientY);
});