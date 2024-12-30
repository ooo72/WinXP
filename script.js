
const startButton = document.getElementById('start-button'); // or 'start-button'
const startMenu = document.getElementById('startMenu');

// Toggle Start Menu visibility
startButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from propagating to the document
  startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
});