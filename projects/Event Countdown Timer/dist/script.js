document.getElementById('event-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const eventName = document.getElementById('event-name').value;
  const eventDateInput = document.getElementById('event-date').value;
  const eventDate = new Date(eventDateInput);
  const timeZone = document.getElementById('time-zone').value;
  const backgroundTheme = document.getElementById('background-theme').value;

  if (!eventDate || eventDate <= new Date()) {
    alert("Please choose a future date.");
    return;
  }

  createCountdown(eventName, eventDate, backgroundTheme, timeZone);
});

function createCountdown(eventName, eventDate, backgroundTheme, timeZone) {
  const countdownContainer = document.getElementById('countdown-container');
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event');
  eventDiv.style.backgroundColor = backgroundTheme;

  const eventNameEl = document.createElement('h2');
  eventNameEl.textContent = eventName;
  eventDiv.appendChild(eventNameEl);

  const countdownEl = document.createElement('p');
  eventDiv.appendChild(countdownEl);

  // Add Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => {
    countdownContainer.removeChild(eventDiv);
  };
  eventDiv.appendChild(deleteBtn);

  countdownContainer.appendChild(eventDiv);

  // Load alarm sound
  const alarmSound = document.getElementById('alarm-sound');

  function updateCountdown() {
    const now = new Date();
    
    // Adjust event date for selected time zone
    const eventDateInTimeZone = new Date(eventDate.toLocaleString("en-US", { timeZone }));
    const timeRemaining = eventDateInTimeZone - now;

    if (timeRemaining <= 0) {
      countdownEl.textContent = "Event has started!";
      alarmSound.play();  // Play sound when the countdown reaches zero
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const intervalId = setInterval(updateCountdown, 1000);
  
  // Stop the countdown if event is deleted
  deleteBtn.addEventListener('click', () => clearInterval(intervalId));
}