// Debounce utility to delay function execution until user stops triggering events
function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

// Function to log the mouse position
function logMousePosition(x, y) {
  console.log(`Mouse position = (${x}, ${y})`);
}

// Debounced version of the mouse logger
const debouncedMouseLogger = debounce(logMousePosition, 1000);

// Attach mousemove listener with debouncing
window.addEventListener('mousemove', (event) => {
  debouncedMouseLogger(event.clientX, event.clientY);
});