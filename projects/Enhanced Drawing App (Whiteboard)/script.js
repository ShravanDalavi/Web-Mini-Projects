const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraserEl = document.getElementById('eraser');
const undoEl = document.getElementById('undo');
const saveEl = document.getElementById('save');

let size = 10;
let color = colorEl.value;
let isPressed = false;
let isEraser = false;
let x, y;
let history = []; // Stores canvas states for undo

// Resize the canvas to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Refill background color
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Restore the last saved state if any
  if (history.length > 0) {
    const img = new Image();
    img.src = history[history.length - 1];
    img.onload = () => ctx.drawImage(img, 0, 0);
  }
}

// Event listeners for canvas resizing
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// Save the canvas state
function saveState() {
  if (history.length > 10) history.shift(); // Limit history to 10
  history.push(canvas.toDataURL());
}

// Draw function
function draw(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = isEraser ? '#f5f5f5' : color;
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.stroke();
}

// Event listeners for drawing
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
  saveState(); // Save state when drawing starts
});

canvas.addEventListener('mouseup', () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    draw(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

// Tool functionality
increaseBtn.addEventListener('click', () => {
  size = Math.min(size + 5, 50); // Limit max size
  updateSizeDisplay();
});

decreaseBtn.addEventListener('click', () => {
  size = Math.max(size - 5, 5); // Limit min size
  updateSizeDisplay();
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
  isEraser = false; // Exit eraser mode when color changes
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  history = []; // Clear history
});

eraserEl.addEventListener('click', () => {
  isEraser = true;
});

undoEl.addEventListener('click', () => {
  if (history.length > 0) {
    const lastState = history.pop();
    const img = new Image();
    img.src = lastState;
    img.onload = () => ctx.drawImage(img, 0, 0);
  }
});

saveEl.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'drawing.png';
  link.click();
});

// Update size display
function updateSizeDisplay() {
  sizeEl.innerText = size;
}
