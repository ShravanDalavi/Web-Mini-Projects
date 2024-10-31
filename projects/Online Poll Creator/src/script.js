let pollOptions = [];
let pollResultsDiv;
let currentPollId = null; // To keep track of the current poll

// Function to generate a unique ID for each poll
function generatePollId() {
  return 'poll_' + new Date().getTime();
}

// Function to save poll data to LocalStorage
function savePollData(pollId, question, options) {
  const pollData = {
    id: pollId,
    question: question,
    options: options
  };
  localStorage.setItem(pollId, JSON.stringify(pollData));
}

// Function to load a poll from LocalStorage
function loadPollData(pollId) {
  const savedPollData = localStorage.getItem(pollId);
  if (savedPollData) {
    const pollData = JSON.parse(savedPollData);
    currentPollId = pollData.id;
    displayPoll(pollData.question, pollData.options);
  }
}

// Function to delete the current poll
function deletePoll() {
  if (currentPollId) {
    localStorage.removeItem(currentPollId);
    clearPollDisplay();
    alert('Poll deleted!');
    currentPollId = null;
  }
}

// Function to clear the current poll display
function clearPollDisplay() {
  const pollContainer = document.getElementById('poll-container');
  pollContainer.innerHTML = '';
  document.getElementById('poll-options').innerHTML = ''; // Clear options input
  document.getElementById('poll-question').value = ''; // Clear question input
}

// Add option to poll
document.getElementById('add-option-btn').addEventListener('click', function() {
  const pollOptionsDiv = document.getElementById('poll-options');
  const optionCount = pollOptionsDiv.querySelectorAll('input').length + 1;
  const newOptionLabel = document.createElement('label');
  newOptionLabel.setAttribute('for', `poll-option-${optionCount}`);
  newOptionLabel.textContent = `Option ${optionCount}:`;

  const newOptionInput = document.createElement('input');
  newOptionInput.type = 'text';
  newOptionInput.id = `poll-option-${optionCount}`;
  newOptionInput.required = true;

  pollOptionsDiv.appendChild(newOptionLabel);
  pollOptionsDiv.appendChild(newOptionInput);
});

// Create a new poll
document.getElementById('poll-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const pollQuestion = document.getElementById('poll-question').value;
  const options = document.querySelectorAll('#poll-options input');
  
  pollOptions = []; // Clear existing poll options

  options.forEach(option => {
    pollOptions.push({
      optionText: option.value,
      votes: 0
    });
  });

  // Generate a unique ID for the new poll
  const newPollId = generatePollId();
  currentPollId = newPollId;

  savePollData(newPollId, pollQuestion, pollOptions);  // Save poll data to LocalStorage
  displayPoll(pollQuestion, pollOptions);
});

// Display the poll and results
function displayPoll(question, options) {
  const pollContainer = document.getElementById('poll-container');
  pollContainer.innerHTML = '';

  const pollQuestionEl = document.createElement('h2');
  pollQuestionEl.textContent = question;
  pollContainer.appendChild(pollQuestionEl);

  options.forEach((option, index) => {
    const optionEl = document.createElement('div');

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'poll-option';
    radioInput.value = index;

    const label = document.createElement('label');
    label.textContent = option.optionText;

    optionEl.appendChild(radioInput);
    optionEl.appendChild(label);

    pollContainer.appendChild(optionEl);
  });

  const submitVoteBtn = document.createElement('button');
  submitVoteBtn.textContent = 'Submit Vote';
  pollContainer.appendChild(submitVoteBtn);

  pollResultsDiv = document.createElement('div');
  pollResultsDiv.classList.add('poll-results');
  pollContainer.appendChild(pollResultsDiv);

  submitVoteBtn.addEventListener('click', function() {
    const selectedOptionIndex = document.querySelector('input[name="poll-option"]:checked');
    if (selectedOptionIndex) {
      pollOptions[selectedOptionIndex.value].votes++;
      savePollData(currentPollId, question, pollOptions); // Save updated poll results
      displayPollResults();
    }
  });

  // Add delete button to remove poll
  const deletePollBtn = document.createElement('button');
  deletePollBtn.textContent = 'Delete Poll';
  deletePollBtn.addEventListener('click', deletePoll);
  pollContainer.appendChild(deletePollBtn);

  // Set up auto-refresh every 3 seconds
  setInterval(displayPollResults, 3000);
}

// Display poll results
function displayPollResults() {
  if (!pollResultsDiv) return;

  pollResultsDiv.innerHTML = '';

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  pollOptions.forEach(option => {
    const resultText = document.createElement('p');
    resultText.textContent = `${option.optionText}: ${option.votes} vote(s)`;

    const barContainer = document.createElement('div');
    barContainer.classList.add('bar-container');

    const resultBar = document.createElement('div');
    resultBar.classList.add('bar');
    const percentage = totalVotes ? (option.votes / totalVotes) * 100 : 0;
    resultBar.style.width = `${percentage}%`;

    barContainer.appendChild(resultBar);
    pollResultsDiv.appendChild(resultText);
    pollResultsDiv.appendChild(barContainer);
  });
}

// Load a poll by ID (for demo, you can implement a list to choose from)
window.addEventListener('load', function() {
  const lastPollId = Object.keys(localStorage)[0]; // Load the first poll in LocalStorage (you can enhance this part)
  if (lastPollId) {
    loadPollData(lastPollId);
  }
});
