let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dateDisplay = document.getElementById('date-display');
const themeToggle = document.getElementById('theme-toggle');

function displayTime() {
    let date = new Date();

    // Getting hours, minutes, and seconds
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculating the rotation for each hand
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Applying the rotation to the clock hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Updating the date display
    updateDateDisplay(date);
}

function updateDateDisplay(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    dateDisplay.textContent = formattedDate;
}

// Dark mode toggle logic
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});

// Set initial theme to dark mode
document.body.classList.add('dark-mode');

// Update the clock every second
setInterval(displayTime, 1000);
displayTime(); // Initial call to set the clock right